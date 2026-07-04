import React, { useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { format, subDays } from 'date-fns';
import { Info, TrendingUp } from 'lucide-react';
import { useAppStore } from '../../store/useAppStore';

interface PriceTrendProps {
  currentPrice: number;
}

export const PriceTrendChart: React.FC<PriceTrendProps> = ({ currentPrice }) => {
  const theme = useAppStore(state => state.theme);

  // Generate 30 days of historical mock price data leading up to today
  const data = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const date = subDays(new Date(), 29 - i);
      // Create a slight upward trend as the flight approaches, with random noise
      const daysUntilFlight = 30 - i;
      const noise = (Math.random() * 40) - 20;
      const price = Math.round(currentPrice * 0.8 + (30 - daysUntilFlight) * 2 + noise);
      
      return {
        date: format(date, 'MMM dd'),
        price: price > 0 ? price : currentPrice, // Fallback safety
      };
    });
  }, [currentPrice]);

  const avgPrice = Math.round(data.reduce((acc, curr) => acc + curr.price, 0) / data.length);
  const isGoodDeal = currentPrice <= avgPrice;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border p-3 rounded-lg shadow-xl">
          <p className="text-xs text-gray-500 font-bold mb-1">{label}</p>
          <p className="text-lg font-black dark:text-white">
            ${payload[0].value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white dark:bg-dark-card rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-dark-border mb-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h3 className="font-bold flex items-center text-lg dark:text-white">
            <TrendingUp className="w-5 h-5 mr-2 text-brand-500" />
            Price Insights
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Prices for this route over the last 30 days
          </p>
        </div>
        
        <div className={`px-4 py-2 rounded-lg flex items-start max-w-xs ${isGoodDeal ? 'bg-green-50 dark:bg-green-900/20' : 'bg-orange-50 dark:bg-orange-900/20'}`}>
          <Info className={`w-5 h-5 mr-2 flex-shrink-0 mt-0.5 ${isGoodDeal ? 'text-green-500' : 'text-orange-500'}`} />
          <div>
            <p className={`text-sm font-bold ${isGoodDeal ? 'text-green-700 dark:text-green-400' : 'text-orange-700 dark:text-orange-400'}`}>
              {isGoodDeal ? 'Great time to buy.' : 'Prices are higher than usual.'}
            </p>
            <p className={`text-xs mt-0.5 ${isGoodDeal ? 'text-green-600 dark:text-green-500' : 'text-orange-600 dark:text-orange-500'}`}>
              The current price of ${currentPrice} is {isGoodDeal ? 'lower' : 'higher'} than the 30-day average of ${avgPrice}.
            </p>
          </div>
        </div>
      </div>

      <div className="h-[200px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={theme === 'dark' ? '#334155' : '#f1f5f9'} />
            <XAxis 
              dataKey="date" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }}
              minTickGap={30}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fill: '#64748b' }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              type="monotone" 
              dataKey="price" 
              stroke="#3b82f6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPrice)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};