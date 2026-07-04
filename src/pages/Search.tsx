import React, { useEffect } from 'react';

export const Search = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.type = 'module';
    script.src = 'https://tpwgts.com/wl_web/main.js?wl_id=209';

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#071226] pt-32 pb-20">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-black text-white mb-4">
            Search & Compare Flights
          </h1>

          <p className="text-gray-300 text-lg">
            Compare fares from hundreds of airlines and travel providers.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <div id="tpwl-search"></div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6 mt-8">
          <div id="tpwl-tickets"></div>
        </div>

      </div>
    </div>
  );
};