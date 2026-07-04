import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plane, Calendar, Users, MapPin } from 'lucide-react';

export const FlightSearchForm = () => {
  const navigate = useNavigate();
  const [tripType, setTripType] = useState('round');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/results?origin=${origin}&destination=${destination}`);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-dark-card rounded-2xl shadow-xl p-6 border border-gray-100 dark:border-dark-border">
      <div className="flex space-x-4 mb-6 border-b dark:border-dark-border pb-2">
        {['One Way', 'Round Trip', 'Multi-City'].map((type) => (
          <button
            key={type}
            onClick={() => setTripType(type.toLowerCase())}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              tripType === type.toLowerCase() ? 'bg-brand-500 text-white' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase">From</label>
          <div className="flex items-center bg-gray-50 dark:bg-slate-800 rounded-lg p-3 mt-1">
            <MapPin className="w-5 h-5 text-gray-400 mr-2" />
            <input 
              required
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              placeholder="Origin (e.g., DEL)" 
              className="bg-transparent w-full focus:outline-none dark:text-white uppercase"
            />
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase">To</label>
          <div className="flex items-center bg-gray-50 dark:bg-slate-800 rounded-lg p-3 mt-1">
            <MapPin className="w-5 h-5 text-gray-400 mr-2" />
            <input 
              required
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Destination (e.g., BOM)" 
              className="bg-transparent w-full focus:outline-none dark:text-white uppercase"
            />
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase">Dates</label>
          <div className="flex items-center bg-gray-50 dark:bg-slate-800 rounded-lg p-3 mt-1">
            <Calendar className="w-5 h-5 text-gray-400 mr-2" />
            <input type="date" className="bg-transparent w-full focus:outline-none dark:text-white" />
          </div>
        </div>

        <div className="relative">
          <label className="text-xs font-semibold text-gray-500 uppercase">Travelers</label>
          <div className="flex items-center bg-gray-50 dark:bg-slate-800 rounded-lg p-3 mt-1">
            <Users className="w-5 h-5 text-gray-400 mr-2" />
            <select className="bg-transparent w-full focus:outline-none dark:text-white appearance-none">
              <option value="1">1 Adult, Economy</option>
              <option value="2">2 Adults, Economy</option>
            </select>
          </div>
        </div>

        <div className="md:col-span-4 flex justify-end mt-4">
          <button type="submit" className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-brand-500/30 transition flex items-center">
            Search Flights <Plane className="w-4 h-4 ml-2" />
          </button>
        </div>
      </form>
    </div>
  );
};