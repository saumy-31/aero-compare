import React, { useEffect, useRef } from 'react';

export const EsimWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clear previous elements
    container.innerHTML = '';

    // Create script element with exact provided URL parameters
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src =
      'https://tpwgts.com/content?trs=418605&shmarker=633257&locale=en&powered_by=false&color_button=%232563Eb&color_focused=%232563Eb&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=20&plain=true&no_labels=&promo_id=8588&campaign_id=541';

    // Insert the script into the target container
    container.appendChild(script);

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="w-full pt-2 pb-4 flex items-center justify-center">
      <div id="tp-esim-widget" ref={containerRef} className="w-full min-h-[400px]"></div>
    </div>
  );
};