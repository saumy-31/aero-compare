import React, { useEffect } from 'react';

export const Results = () => {
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
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-28 pb-16">
      <div className="container mx-auto px-4 max-w-7xl">

        <h1 className="text-4xl font-black mb-8 text-gray-900 dark:text-white">
          Flight Results
        </h1>

        <div className="bg-white dark:bg-dark-card rounded-3xl shadow-xl p-6">
          <div id="tpwl-search"></div>
        </div>

        <div className="mt-8 bg-white dark:bg-dark-card rounded-3xl shadow-xl p-6">
          <div id="tpwl-tickets"></div>
        </div>

      </div>
    </div>
  );
};