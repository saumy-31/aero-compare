import type { Flight, Airport, Provider } from '../types/flight.types';

const AIRPORTS: Airport[] = [
  { code: 'DEL', city: 'New Delhi', country: 'India', name: 'Indira Gandhi Int' },
  { code: 'BOM', city: 'Mumbai', country: 'India', name: 'Chhatrapati Shivaji Int' },
  { code: 'BLR', city: 'Bangalore', country: 'India', name: 'Kempegowda Int' },
  { code: 'JFK', city: 'New York', country: 'USA', name: 'John F. Kennedy Int' },
  { code: 'LHR', city: 'London', country: 'UK', name: 'Heathrow' },
  { code: 'DXB', city: 'Dubai', country: 'UAE', name: 'Dubai Int' }
];

const AIRLINES = [
  { name: 'Indigo', code: '6E' }, { name: 'Air India', code: 'AI' },
  { name: 'Vistara', code: 'UK' }, { name: 'Emirates', code: 'EK' },
  { name: 'Qatar Airways', code: 'QR' }, { name: 'Singapore Airlines', code: 'SQ' }
];

const PROVIDER_NAMES = ['MakeMyTrip', 'Booking.com', 'Expedia', 'ClearTrip', 'Agoda'];

export const generateMockFlights = (count: number = 100): Flight[] => {
  const flights: Flight[] = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const origin = AIRPORTS[Math.floor(Math.random() * AIRPORTS.length)];
    let dest = AIRPORTS[Math.floor(Math.random() * AIRPORTS.length)];
    while (dest.code === origin.code) dest = AIRPORTS[Math.floor(Math.random() * AIRPORTS.length)];

    const airline = AIRLINES[Math.floor(Math.random() * AIRLINES.length)];
    const stops = Math.random() > 0.6 ? 1 : 0;
    const durationMin = Math.floor(Math.random() * 600) + 120;
    
    const depTime = new Date(now.getTime() + (Math.random() * 30 * 24 * 60 * 60 * 1000));
    const arrTime = new Date(depTime.getTime() + (durationMin * 60000));

    const basePrice = Math.floor(Math.random() * 800) + 150;
    
    // Generate 2-4 providers per flight
    const providers: Provider[] = [];
    providers.push({
      id: `p-${i}-direct`,
      name: `${airline.name} Direct`,
      price: basePrice + Math.floor(Math.random() * 50),
      url: '#',
      isDirect: true
    });

    const numOTA = Math.floor(Math.random() * 3) + 1;
    for (let j = 0; j < numOTA; j++) {
      providers.push({
        id: `p-${i}-ota-${j}`,
        name: PROVIDER_NAMES[Math.floor(Math.random() * PROVIDER_NAMES.length)],
        price: basePrice + (Math.floor(Math.random() * 100) - 30), // OTAs can be cheaper or more expensive
        url: '#',
        isDirect: false
      });
    }

    providers.sort((a, b) => a.price - b.price);

    flights.push({
      id: `FL-${airline.code}-${Math.floor(Math.random() * 9000) + 1000}-${i}`,
      segments: [{
        airline: airline.name,
        airlineCode: airline.code,
        flightNumber: `${airline.code}-${Math.floor(Math.random() * 900) + 100}`,
        departureTime: depTime.toISOString(),
        arrivalTime: arrTime.toISOString(),
        origin,
        destination: dest,
        durationMinutes: durationMin
      }],
      totalDurationMinutes: durationMin,
      stops,
      baggageIncluded: Math.random() > 0.3,
      refundable: Math.random() > 0.5,
      cabinClass: 'Economy',
      providers,
      cheapestPrice: providers[0].price
    });
  }
  return flights;
};

export const MOCK_FLIGHTS = generateMockFlights(100);