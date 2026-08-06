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

    // Create the TravelPayouts widget script
    const script = document.createElement('script');
    script.src =
      'https://tpwgts.com/content?trs=418605&shmarker=633257&locale=en&powered_by=false&border_radius=5&plain=true&show_logo=false&color_background=%23FFFFFF&color_button=%232563EB&promo_id=4362&campaign_id=143';
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