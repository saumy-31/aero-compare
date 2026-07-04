
import { useNavigate } from 'react-router-dom';
import {
  Plane,
  X,
  Briefcase,
  Info,
  Clock,
  Check,
  AlertCircle,
  Scale
} from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { MOCK_FLIGHTS } from '../data/mockFlightGenerator';

export const CompareFlights = () => {
  const navigate = useNavigate();
  const {
  compareList,
  toggleCompareFlight,
  clearCompareList
} = useAppStore();

  const flights = compareList.map(id => MOCK_FLIGHTS.find(f => f.id === id)).filter(Boolean) as typeof MOCK_FLIGHTS;

  if (flights.length === 0) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center dark:text-white">
        <Scale className="w-16 h-16 text-gray-300 dark:text-gray-600 mb-4" />
        <h1 className="text-3xl font-black mb-4">No Flights to Compare</h1>
        <p className="text-gray-500 mb-6">Add flights from the search results page to compare them side-by-side.</p>
        <button onClick={() => navigate('/results')} className="bg-brand-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-brand-700 transition">
          Find Flights
        </button>
      </div>
    );
  }

  const formatTime = (isoString: string) => new Date(isoString).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-black dark:text-white">Compare Flights</h1>
            <p className="text-gray-500 mt-1">Comparing {flights.length} of up to 4 flights</p>
          </div>
          <button onClick={clearCompareList} className="text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded-lg transition">
            Clear All
          </button>
        </div>

        <div className="bg-white dark:bg-dark-card rounded-2xl shadow-xl border border-gray-100 dark:border-dark-border overflow-x-auto hide-scrollbar">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="flex border-b border-gray-100 dark:border-dark-border">
              <div className="w-48 flex-shrink-0 p-6 bg-gray-50/50 dark:bg-slate-800/30"></div>
              {flights.map(flight => (
                <div key={`header-${flight.id}`} className="flex-1 p-6 relative min-w-[250px] border-l border-gray-100 dark:border-dark-border">
                  <button 
                    onClick={() => toggleCompareFlight(flight.id)}
                    className="absolute top-4 right-4 p-1.5 text-gray-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-full transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                  <img src={`https://ui-avatars.com/api/?name=${flight.segments[0].airline}&background=random&color=fff&rounded=true`} alt="Logo" className="w-10 h-10 mb-4" />
                  <h3 className="font-black text-2xl dark:text-white">${flight.cheapestPrice}</h3>
                  <p className="text-sm text-gray-500 font-medium">{flight.segments[0].airline}</p>
                  <button 
                    onClick={() => alert(`Redirecting to ${flight.providers[0].name}`)}
                    className="mt-4 w-full bg-brand-600 hover:bg-brand-700 text-white text-sm font-bold py-2 rounded-lg transition"
                  >
                    Book Now
                  </button>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            {[
              { 
                label: 'Route & Times', 
                icon: <Plane className="w-4 h-4 mr-2 text-gray-400" />,
                render: (f: any) => (
                  <div>
                    <div className="flex justify-between font-bold dark:text-white mb-1">
                      <span>{formatTime(f.segments[0].departureTime)}</span>
                      <span>{formatTime(f.segments[0].arrivalTime)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>{f.segments[0].origin.code}</span>
                      <span>{f.segments[0].destination.code}</span>
                    </div>
                  </div>
                )
              },
              { 
                label: 'Duration & Stops', 
                icon: <Clock className="w-4 h-4 mr-2 text-gray-400" />,
                render: (f: any) => (
                  <div className="text-sm font-medium dark:text-white">
                    {Math.floor(f.totalDurationMinutes / 60)}h {f.totalDurationMinutes % 60}m 
                    <span className="block text-xs text-gray-500 mt-1">{f.stops === 0 ? 'Direct Flight' : `${f.stops} Stop(s)`}</span>
                  </div>
                )
              },
              { 
                label: 'Baggage', 
                icon: <Briefcase className="w-4 h-4 mr-2 text-gray-400" />,
                render: (f: any) => (
                  <div className={`flex items-center text-sm font-bold ${f.baggageIncluded ? 'text-green-600' : 'text-orange-500'}`}>
                    {f.baggageIncluded ? <><Check className="w-4 h-4 mr-1"/> Included</> : <><AlertCircle className="w-4 h-4 mr-1"/> Extra Fee</>}
                  </div>
                )
              },
              { 
                label: 'Refund Policy', 
                icon: <Info className="w-4 h-4 mr-2 text-gray-400" />,
                render: (f: any) => (
                  <div className={`flex items-center text-sm font-bold ${f.refundable ? 'text-green-600' : 'text-red-500'}`}>
                    {f.refundable ? <><Check className="w-4 h-4 mr-1"/> Refundable</> : <><X className="w-4 h-4 mr-1"/> Non-refundable</>}
                  </div>
                )
              },
              { 
                label: 'Cheapest Provider', 
                icon: <Briefcase className="w-4 h-4 mr-2 text-gray-400" />,
                render: (f: any) => (
                  <div className="text-sm font-medium dark:text-white">
                    {f.providers[0].name}
                    {f.providers[0].isDirect && <span className="block text-[10px] text-green-500 uppercase mt-1">Direct Booking</span>}
                  </div>
                )
              }
            ].map((row, idx) => (
              <div key={idx} className="flex border-b border-gray-100 dark:border-dark-border hover:bg-gray-50 dark:hover:bg-slate-800/30 transition">
                <div className="w-48 flex-shrink-0 p-6 flex items-center font-bold text-sm text-gray-600 dark:text-gray-300 bg-gray-50/50 dark:bg-slate-800/30">
                  {row.icon} {row.label}
                </div>
                {flights.map(flight => (
                  <div key={`${flight.id}-${idx}`} className="flex-1 p-6 min-w-[250px] border-l border-gray-100 dark:border-dark-border flex flex-col justify-center">
                    {row.render(flight)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

