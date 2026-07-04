export interface Airport {
  code: string;
  city: string;
  country: string;
  name: string;
}

export interface Provider {
  id: string;
  name: string;
  price: number;
  url: string;
  isDirect: boolean;
}

export interface FlightSegment {
  airline: string;
  airlineCode: string;
  flightNumber: string;
  departureTime: string;
  arrivalTime: string;
  origin: Airport;
  destination: Airport;
  durationMinutes: number;
}

export interface Flight {
  id: string;
  segments: FlightSegment[];
  totalDurationMinutes: number;
  stops: number;
  baggageIncluded: boolean;
  refundable: boolean;
  cabinClass: string;
  providers: Provider[];
  cheapestPrice: number;
}