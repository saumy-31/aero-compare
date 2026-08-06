import React, { useEffect, useRef } from 'react';

// Explicit ambient type declarations for VS Code editor stability
declare const document: any;

export const AirportTransferWidget: React.FC = () => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    const container: any = containerRef.current;
    if (!container) return;

    // Clear previous widget elements on tab switch to prevent duplicates
    container.innerHTML = '';

    // Create the script element
    const script = document.createElement('script');
    script.src = 'https://tpwgts.com/content?currency=USD&trs=418605&shmarker=633257&locale=en&powered_by=false&transfer_options_limit=10&transfer_options=MCR&disable_currency_selector=true&hide_form_extras=false&hide_external_links=true&campaign_id=1&promo_id=3879';
    script.async = true;
    script.charset = 'utf-8';

    // Append script into the widget container
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full min-h-[100px] flex justify-center items-center">
      <div ref={containerRef} className="w-full" />
    </div>
  );
};