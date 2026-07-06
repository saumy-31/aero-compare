import type { VercelRequest, VercelResponse } from '@vercel/node';

// --- Strict TypeScript Interfaces ---
interface AirportInfo {
  airport: string;
  timezone: string;
  iata: string;
  icao: string;
  terminal: string | null;
  gate: string | null;
  delay: number | null;
  scheduled: string;
  estimated: string;
  actual: string | null;
  estimated_runway: string | null;
  actual_runway: string | null;
}

interface AirlineInfo {
  name: string;
  iata: string;
  icao: string;
}

interface FlightInfo {
  number: string;
  iata: string;
  icao: string;
  codeshared: unknown | null;
}

interface FlightData {
  flight_date: string;
  flight_status: string;
  departure: AirportInfo;
  arrival: AirportInfo;
  airline: AirlineInfo;
  flight: FlightInfo;
}

// --- Caching and Rate Limiting ---
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const cacheMap = new Map<string, { data: FlightData; expiry: number }>();

const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const CACHE_TTL_MS = 60 * 1000;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  // Rate Limiting
  const ip = (req.headers['x-forwarded-for'] as string) || req.socket?.remoteAddress || 'unknown-ip';
  const now = Date.now();
  const userRate = rateLimitMap.get(ip) || { count: 0, resetTime: now + RATE_LIMIT_WINDOW_MS };

  if (now > userRate.resetTime) {
    userRate.count = 1;
    userRate.resetTime = now + RATE_LIMIT_WINDOW_MS;
  } else {
    userRate.count++;
  }
  rateLimitMap.set(ip, userRate);

  if (userRate.count > RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Too many requests. Please wait a minute and try again.' });
  }

  // Input Sanitization
  const rawFlight = req.query.flight as string;
  if (!rawFlight) {
    return res.status(400).json({ error: 'Flight number is required.' });
  }

  const sanitizedFlight = rawFlight.toUpperCase().replace(/[^A-Z0-9]/g, '');

  if (!/^[A-Z0-9]{3,8}$/.test(sanitizedFlight)) {
    return res.status(400).json({ error: 'Invalid flight format. Use formats like AI101 or EK203.' });
  }

  // Cache Check
  const cached = cacheMap.get(sanitizedFlight);
  if (cached && now < cached.expiry) {
    return res.status(200).json(cached.data);
  }

  // Fetch from Aviationstack
  try {
    const apiKey = process.env.AVIATIONSTACK_API_KEY;
    if (!apiKey) {
      console.error('Server Configuration Error: Missing API Key');
      return res.status(500).json({ error: 'Internal server configuration error.' });
    }

    const apiUrl = `http://api.aviationstack.com/v1/flights?access_key=${apiKey}&flight_iata=${sanitizedFlight}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    // Log the API response so we can debug on Vercel
    console.log(`[Aviationstack Response for ${sanitizedFlight}]:`, JSON.stringify(data, null, 2));

    if (!response.ok || data.error) {
      return res.status(502).json({ error: 'Unable to connect to the flight database.' });
    }

    if (!data.data || data.data.length === 0) {
      return res.status(404).json({ error: 'No flight found. Please check the flight number and try again.' });
    }

    // Filter to ensure we get the exact flight searched
    let matchingFlights: FlightData[] = data.data.filter(
      (f: FlightData) => f.flight?.iata?.toUpperCase() === sanitizedFlight
    );
    
    if (matchingFlights.length === 0) {
      matchingFlights = data.data as FlightData[]; // Fallback
    }

    // Prioritize active or scheduled flights
    const bestMatch = matchingFlights.find((f: FlightData) => f.flight_status === 'active') 
                   || matchingFlights.find((f: FlightData) => f.flight_status === 'scheduled') 
                   || matchingFlights[0];

    // Save to Cache
    cacheMap.set(sanitizedFlight, {
      data: bestMatch,
      expiry: now + CACHE_TTL_MS,
    });

    return res.status(200).json(bestMatch);

  } catch (error) {
    console.error('Server Request Failed:', error);
    return res.status(500).json({ error: 'Failed to retrieve flight data. Please try again later.' });
  }
}