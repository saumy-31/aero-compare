import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Plane, ChevronDown, Heart, Briefcase, Info, Scale } from 'lucide-react';
import type { Flight } from '../../types/flight.types';
import { useAppStore } from '../../store/useAppStore';

export const FlightCard = ({ flight }: { flight: Flight }) => {
  const navigate = useNavigate();
  const [showProviders, setShowProviders] = useState(false);
  const { savedFlights, toggleSavedFlight, compareList, toggleCompareFlight } = useAppStore();
  
  const segment = flight.segments[0];
  const isSaved = savedFlights.includes(flight.id);
  const isComparing = compareList.includes(flight.id);

  const formatTime = (isoString: string) => {
    return new Date(isoString).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-xl shadow-sm hover:shadow-md transition mb-4 overflow-hidden relative">
      <div className="absolute top-4 right-4 flex space-x-2 z-10">
        <button 
          onClick={(e) => { e.stopPropagation(); toggleCompareFlight(flight.id); }} 
          className={`p-2 rounded-full transition ${isComparing ? 'bg-brand-50 text-brand-600 dark:bg-brand-900/30' : 'text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800'}`}
          title="Compare Flight"
        >
          <Scale className="w-5 h-5" />
        </button>
        <button 
          onClick={(e) => { e.stopPropagation(); toggleSavedFlight(flight.id); }} 
          className="p-2 text-gray-400 hover:text-red-500 transition rounded-full hover:bg-gray-100 dark:hover:bg-slate-800"
        >
          <Heart className={`w-5 h-5 ${isSaved ? 'fill-red-500 text-red-500' : ''}`} />
        </button>
      </div>

      <div 
        onClick={() => navigate(`/flight/${flight.id}`)}
        className="p-5 grid grid-cols-1 md:grid-cols-4 gap-6 items-center cursor-pointer hover:bg-gray-50/50 dark:hover:bg-slate-800/20 transition"
      >
        <div className="col-span-1">
          <h4 className="font-bold dark:text-white text-lg">{segment.airline}</h4>
          <p className="text-xs text-gray-500">{segment.flightNumber}</p>
        </div>

        <div className="col-span-2 flex items-center justify-between px-4">
          <div className="text-center">
            <p className="text-xl font-bold dark:text-white">{formatTime(segment.departureTime)}</p>
            <p className="text-sm text-gray-500 font-bold">{segment.origin.code}</p>
          </div>
          <div className="flex-1 px-4 flex flex-col items-center">
            <p className="text-xs text-gray-500 mb-1">{Math.floor(flight.totalDurationMinutes / 60)}h {flight.totalDurationMinutes % 60}m</p>
            <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-700 relative">
              <Plane className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-brand-500" />
            </div>
            <p className="text-xs text-brand-500 mt-1 font-semibold">{flight.stops === 0 ? 'Direct' : `${flight.stops} Stop`}</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold dark:text-white">{formatTime(segment.arrivalTime)}</p>
            <p className="text-sm text-gray-500 font-bold">{segment.destination.code}</p>
          </div>
        </div>

        <div className="col-span-1 flex flex-col md:items-end md:pl-6 border-t md:border-t-0 md:border-l border-gray-100 dark:border-dark-border pt-4 md:pt-0 pr-12">
          <p className="text-2xl font-black dark:text-white">${flight.cheapestPrice}</p>
          <p className="text-xs text-gray-500 mb-3">via {flight.providers[0].name}</p>
          <button 
            onClick={(e) => { e.stopPropagation(); alert(`Redirecting to ${flight.providers[0].name}...`); }}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg transition"
          >
            View Deal
          </button>
        </div>
      </div>

      <div 
        onClick={(e) => { e.stopPropagation(); setShowProviders(!showProviders); }} 
        className="bg-gray-50 dark:bg-slate-800/50 px-5 py-3 border-t border-gray-100 dark:border-dark-border cursor-pointer flex justify-between items-center"
      >
        <div className="flex space-x-4 text-xs text-gray-600 dark:text-gray-400">
          <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1"/> {flight.baggageIncluded ? 'Included' : 'Fee'}</span>
          <span className="flex items-center"><Info className="w-3 h-3 mr-1"/> {flight.refundable ? 'Refundable' : 'Non-refundable'}</span>
        </div>
        <div className="flex items-center text-sm font-medium text-brand-600">
          Compare {flight.providers.length} deals <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showProviders ? 'rotate-180' : ''}`} />
        </div>
      </div>

      <AnimatePresence>
        {showProviders && (
          <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden border-t border-gray-200 dark:border-dark-border">
            <div className="p-5 bg-white dark:bg-dark-card space-y-3">
              {flight.providers.map(p => (
                <div key={p.id} className="flex justify-between items-center bg-gray-50 dark:bg-slate-800 p-3 rounded-lg">
                  <div>
                    <p className="font-semibold dark:text-white">{p.name}</p>
                    {p.isDirect && <span className="text-[10px] uppercase tracking-wider text-green-600 font-bold">Direct Airline</span>}
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="font-bold text-lg dark:text-white">${p.price}</p>
                    <button onClick={(e) => { e.stopPropagation(); alert(`Redirecting to ${p.name}...`); }} className="border border-brand-500 text-brand-600 px-4 py-1 rounded-lg text-sm font-bold hover:bg-brand-50 dark:hover:bg-slate-700 transition">Select</button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};