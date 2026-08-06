import React, { useEffect, useRef } from 'react';

export const HotelSearchWidget: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const isWidgetRendered = useRef(false);

  useEffect(() => {
    // Prevent duplicate rendering in React 18 Strict Mode
    if (isWidgetRendered.current) return;

    const scriptId = 'liteapi-components-sdk';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initWidget = () => {
      if (isWidgetRendered.current) return;

      try {
        const LiteAPI = (window as any).LiteAPI;

        if (LiteAPI) {
          // 1. Initialize LiteAPI globally only once
          if (!(window as any).__LITEAPI_INITIALIZED__) {
            LiteAPI.init({
              domain: "flysava.nuitee.link"
            });
            (window as any).__LITEAPI_INITIALIZED__ = true;
          }

          if (widgetContainerRef.current) {
            widgetContainerRef.current.innerHTML = '';
          }

          // 2. Render the SearchBar widget into the target div
          LiteAPI.SearchBar.create({
            selector: "#hotel-search-widget",
            primaryColor: "#2563eb"
          });

          isWidgetRendered.current = true;
        }
      } catch (error) {
        console.error('Failed to initialize LiteAPI Hotel Search Widget:', error);
      }
    };

    const handleLoad = () => {
      initWidget();
    };

    // Dynamically load the SDK if it hasn't been injected yet
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://components.liteapi.travel/v1.0/sdk.umd.js';
      script.async = true;
      script.addEventListener('load', handleLoad);
      document.body.appendChild(script);
    } else {
      // If the script tag already exists in the DOM, check if the global is available
      if ((window as any).LiteAPI) {
        initWidget();
      } else {
        script.addEventListener('load', handleLoad);
      }
    }

    // Clean up correctly when the component unmounts (e.g., when switching tabs)
    return () => {
      script?.removeEventListener('load', handleLoad);

      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
      isWidgetRendered.current = false;
    };
  }, []);

  return (
    <div className="w-full pt-2 pb-4 flex items-center justify-center">
      {/* Target container for the LiteAPI SDK */}
      <div 
        id="hotel-search-widget" 
        ref={widgetContainerRef} 
        className="w-full"
      ></div>
    </div>
  );
};