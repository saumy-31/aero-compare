import React, { useState } from 'react';
import { Bell, BellRing, Plane, ArrowRight, Trash2, Plus, TrendingDown } from 'lucide-react';

interface Alert {
  id: string;
  origin: string;
  destination: string;
  dates: string;
  targetPrice: number;
  currentBestPrice: number;
  active: boolean;
}

// Mocking initial alerts for the UI demonstration
const INITIAL_ALERTS: Alert[] = [
  { id: '1', origin: 'JFK', destination: 'LHR', dates: 'Oct 12 - Oct 20', targetPrice: 450, currentBestPrice: 420, active: true },
  { id: '2', origin: 'DEL', destination: 'DXB', dates: 'Nov 01 - Nov 05', targetPrice: 200, currentBestPrice: 245, active: true }
];

export const PriceAlerts = () => {
  const [alerts, setAlerts] = useState<Alert[]>(INITIAL_ALERTS);

  const toggleAlert = (id: string) => {
    setAlerts(alerts.map(a => a.id === id ? { ...a, active: !a.active } : a));
  };

  const removeAlert = (id: string) => {
    setAlerts(alerts.filter(a => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-24 pb-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-end mb-8">
          <div className="flex items-center">
            <BellRing className="w-8 h-8 text-brand-500 mr-3" />
            <div>
              <h1 className="text-3xl font-black dark:text-white">Price Alerts</h1>
              <p className="text-gray-500 mt-1">We'll email you when prices drop on these routes.</p>
            </div>
          </div>
          <button className="hidden md:flex bg-brand-50 text-brand-600 dark:bg-brand-900/30 dark:text-brand-400 font-bold py-2 px-4 rounded-lg hover:bg-brand-100 dark:hover:bg-brand-900/50 transition items-center">
            <Plus className="w-5 h-5 mr-1" /> Create Alert
          </button>
        </div>

        {alerts.length > 0 ? (
          <div className="space-y-4">
            {alerts.map(alert => {
              const isDeal = alert.currentBestPrice <= alert.targetPrice;
              return (
                <div key={alert.id} className={`bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border transition ${alert.active ? 'border-gray-100 dark:border-dark-border' : 'border-dashed border-gray-200 dark:border-gray-700 opacity-60'}`}>
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <span className="text-2xl font-black dark:text-white">{alert.origin}</span>
                        <ArrowRight className="w-5 h-5 text-gray-400" />
                        <span className="text-2xl font-black dark:text-white">{alert.destination}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 font-medium">
                        <Plane className="w-4 h-4 mr-2" /> {alert.dates}
                      </div>
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Target Price</p>
                      <p className="text-xl font-bold dark:text-white">Under ${alert.targetPrice}</p>
                    </div>

                    <div className="flex-1">
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Current Best</p>
                      <div className="flex items-center">
                        <span className={`text-xl font-black ${isDeal ? 'text-green-500' : 'dark:text-white'}`}>
                          ${alert.currentBestPrice}
                        </span>
                        {isDeal && <span className="ml-2 bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] px-2 py-1 rounded-full font-bold uppercase flex items-center"><TrendingDown className="w-3 h-3 mr-1"/> Target Hit</span>}
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 border-t md:border-t-0 md:border-l border-gray-100 dark:border-dark-border pt-4 md:pt-0 md:pl-6">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={alert.active} onChange={() => toggleAlert(alert.id)} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-500"></div>
                      </label>
                      <button onClick={() => removeAlert(alert.id)} className="p-2 text-gray-400 hover:text-red-500 transition rounded-full hover:bg-gray-50 dark:hover:bg-slate-800">
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white dark:bg-dark-card rounded-2xl shadow-sm border border-gray-100 dark:border-dark-border p-12 text-center">
            <h3 className="text-xl font-bold dark:text-white mb-2">No active price alerts</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Never miss a deal. Set an alert and we'll watch the prices for you.</p>
          </div>
        )}
      </div>
    </div>
  );
};