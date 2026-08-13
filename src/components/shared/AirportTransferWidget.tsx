import React, { useEffect, useRef } from 'react';

export const AirportTransferWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    // Prevent duplicate script execution in React 18 Strict Mode
    if (isRendered.current) return;

    const container = containerRef.current;
    if (!container) return;

    // Clear previous widget elements on tab switch to prevent duplicates
    container.innerHTML = '';

<<<<<<< HEAD
    // Create the TravelPayouts widget script
    const script = document.createElement('script');
    script.src =
      'https://tpwgts.com/content?trs=418605&shmarker=633257&locale=en&powered_by=false&border_radius=5&plain=true&show_logo=false&color_background=%23FFFFFF&color_button=%232563EB&promo_id=4362&campaign_id=143';
=======
    // Create the script element with exact parameters
    const script = document.createElement('script');
    script.src =
      'https://tpwgts.com/content?currency=USD&trs=418605&shmarker=633257&locale=en&powered_by=false&transfer_options_limit=10&transfer_options=MCR&disable_currency_selector=true&hide_form_extras=false&hide_external_links=true&campaign_id=1&promo_id=3879';
>>>>>>> b7b219a (new redesign light mode)
    script.async = true;
    script.charset = 'utf-8';

    // Append script into the widget container
    container.appendChild(script);
    isRendered.current = true;

    // Cleanup on unmount (e.g., when switching service tabs)
    return () => {
      if (container) {
        container.innerHTML = '';
      }
      isRendered.current = false;
    };
  }, []);

  return (
    <div className="w-full pt-2 pb-4 flex items-center justify-center min-h-[120px]">
      {/* Target Mount Container */}
      <div ref={containerRef} className="w-full min-h-[100px]" />
    </div>
  );
};

export default AirportTransferWidget;