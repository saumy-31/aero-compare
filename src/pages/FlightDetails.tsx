import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, PlaneTakeoff, PlaneLanding, Briefcase, Info, ShieldCheck, Ticket } from 'lucide-react';
import { MOCK_FLIGHTS } from '../data/mockFlightGenerator';
import type { Flight } from '../types/flight.types';

export const FlightDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const flight = useMemo(() => MOCK_FLIGHTS.find(f => f.id === id), [id]);

  if (!flight) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center dark:text-white">
        <h1 className="text-3xl font-black mb-4">Flight Not Found</h1>
        <button onClick={() => navigate('/results')} className="text-brand-500 font-bold hover:underline">Return to Search</button>
      </div>
    );
  }

  const segment = flight.segments[0];
  const AIRCRAFT_TYPES = ['Boeing 737-800', 'Airbus A320neo', 'Boeing 787 Dreamliner', 'Airbus A350-900'];
  // Deterministic random aircraft based on flight ID string length
  const aircraft = AIRCRAFT_TYPES[flight.id.length % AIRCRAFT_TYPES.length];

  const basePrice = Math.round(flight.cheapestPrice * 0.75);
  const taxes = flight.cheapestPrice - basePrice;

  const formatDate = (isoString: string) => {
    return new Date(isoString).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };
  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <button onClick={() => navigate(-1)} className="flex items-center text-sm font-bold text-gray-500 hover:text-brand-500 mb-6 transition">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Results
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Itinerary Column */}
          <div className="flex-1 space-y-6">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-border">
              <div className="flex justify-between items-center mb-6 border-b border-gray-100 dark:border-dark-border pb-4">
                <div>
                  <h2 className="text-2xl font-black dark:text-white">Departure to {segment.destination.city}</h2>
                  <p className="text-gray-500 font-medium">{formatDate(segment.departureTime)} • {flight.totalDurationMinutes / 60 | 0}h {flight.totalDurationMinutes % 60}m</p>
                </div>
                <img src={`https://ui-avatars.com/api/?name=${segment.airline}&background=random&color=fff&rounded=true`} alt={segment.airline} className="w-12 h-12" />
              </div>

              {/* Timeline */}
              <div className="relative pl-8 space-y-8 before:absolute before:inset-0 before:ml-[15px] before:w-0.5 before:bg-gray-200 dark:before:bg-gray-700">
                <div className="relative">
                  <span className="absolute -left-10 bg-white dark:bg-dark-card p-1 rounded-full border-2 border-brand-500">
                    <PlaneTakeoff className="w-4 h-4 text-brand-500" />
                  </span>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-lg font-bold dark:text-white">{formatTime(segment.departureTime)} - {segment.origin.city} ({segment.origin.code})</h4>
                      <p className="text-sm text-gray-500">{segment.origin.name}</p>
                    </div>
                  </div>
                </div>

                <div className="relative py-4">
                  <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 flex flex-col md:flex-row md:items-center justify-between text-sm">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      Flight Time: {segment.durationMinutes / 60 | 0}h {segment.durationMinutes % 60}m
                    </div>
                    <div className="text-gray-500 mt-2 md:mt-0">
                      {segment.airline} • {segment.flightNumber} • {aircraft} • {flight.cabinClass}
                    </div>
                  </div>
                </div>

                {flight.stops > 0 && (
                  <div className="relative py-2">
                    <span className="absolute -left-9 bg-orange-100 p-1.5 rounded-full border border-orange-200">
                      <Clock className="w-3 h-3 text-orange-600" />
                    </span>
                    <p className="text-sm font-bold text-orange-600">Layover simulated (Mock Data represents 1 consolidated segment)</p>
                  </div>
                )}

                <div className="relative">
                  <span className="absolute -left-10 bg-white dark:bg-dark-card p-1 rounded-full border-2 border-brand-500">
                    <PlaneLanding className="w-4 h-4 text-brand-500" />
                  </span>
                  <div className="flex justify-between">
                    <div>
                      <h4 className="text-lg font-bold dark:text-white">{formatTime(segment.arrivalTime)} - {segment.destination.city} ({segment.destination.code})</h4>
                      <p className="text-sm text-gray-500">{segment.destination.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Policies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-border">
                <h3 className="font-bold mb-4 flex items-center dark:text-white"><Briefcase className="w-5 h-5 mr-2 text-brand-500"/> Baggage Rules</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between"><span>Personal Item</span> <span className="font-bold text-green-600">Included</span></li>
                  <li className="flex justify-between"><span>Cabin Bag (7kg)</span> <span className="font-bold text-green-600">Included</span></li>
                  <li className="flex justify-between"><span>Checked Bag (23kg)</span> <span className={`font-bold ${flight.baggageIncluded ? 'text-green-600' : 'text-orange-500'}`}>{flight.baggageIncluded ? 'Included' : 'Extra Fee'}</span></li>
                </ul>
              </div>
              <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-border">
                <h3 className="font-bold mb-4 flex items-center dark:text-white"><Info className="w-5 h-5 mr-2 text-brand-500"/> Fare Conditions</h3>
                <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                  <li className="flex justify-between"><span>Cancellation</span> <span className={`font-bold ${flight.refundable ? 'text-green-600' : 'text-red-500'}`}>{flight.refundable ? 'Refundable' : 'Non-refundable'}</span></li>
                  <li className="flex justify-between"><span>Date Changes</span> <span className="font-bold text-orange-500">Fee applies</span></li>
                  <li className="flex justify-between"><span>Seat Selection</span> <span className="font-bold text-orange-500">Fee applies</span></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Column */}
          <div className="w-full lg:w-80 space-y-6">
            <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-brand-500 ring-4 ring-brand-50 dark:ring-brand-900/20">
              <h3 className="font-black text-2xl dark:text-white mb-6">Price Breakdown</h3>
              <div className="space-y-3 text-sm mb-6 border-b border-gray-100 dark:border-dark-border pb-6">
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Base Fare x 1 Adult</span>
                  <span>${basePrice}</span>
                </div>
                <div className="flex justify-between text-gray-600 dark:text-gray-300">
                  <span>Taxes & Fees</span>
                  <span>${taxes}</span>
                </div>
                <div className="flex justify-between font-black text-lg pt-2 dark:text-white">
                  <span>Total</span>
                  <span>${flight.cheapestPrice}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Available Providers</h4>
                {flight.providers.map((provider, idx) => (
                  <button 
                    key={provider.id}
                    onClick={() => alert(`Redirecting to ${provider.name} to book for $${provider.price}`)}
                    className={`w-full flex justify-between items-center p-3 rounded-lg border transition ${idx === 0 ? 'bg-brand-50 border-brand-200 dark:bg-brand-900/30 dark:border-brand-700' : 'border-gray-200 dark:border-gray-700 hover:border-brand-300'}`}
                  >
                    <span className="font-bold text-sm dark:text-white">{provider.name}</span>
                    <div className="flex items-center">
                      <span className="font-black text-brand-600 dark:text-brand-400 mr-2">${provider.price}</span>
                      <Ticket className="w-4 h-4 text-brand-500" />
                    </div>
                  </button>
                ))}
              </div>
              
              <div className="mt-6 flex items-start text-xs text-gray-500">
                <ShieldCheck className="w-6 h-6 mr-2 flex-shrink-0 text-green-500" />
                <p>Prices are final. You will be redirected to the provider to complete your booking securely.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};