import React, { useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';
import { loadScriptOnce, CAR_WIDGET_URL } from './widgetScriptLoader';

const AutoEuropeLogo = () => (
  <img 
    itemProp="image" 
    className="site-logo h-4 sm:h-5 w-auto object-contain block" 
    src="/auto-europe-logo.png"
    alt="Auto Europe logo" 
    title="Auto Europe"
    loading="lazy"
    decoding="async"
    width="100"
    height="20"
  />
);

export const CarRentalWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    const styleId = 'car-widget-iframe-height-fix';
    let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }

    styleTag.innerHTML = `
      #tpwl-car-widget-container {
        min-height: 220px !important;
        width: 100% !important;
        overflow: visible !important;
        display: block !important;
      }
      #tpwl-car-widget-container iframe {
        width: 100% !important;
        min-height: 200px !important;
        height: auto !important;
        border: none !important;
        overflow: visible !important;
        display: block !important;
      }
      @media (max-width: 640px) {
        #tpwl-car-widget-container {
          min-height: 380px !important;
        }
        #tpwl-car-widget-container iframe {
          min-height: 360px !important;
        }
      }
    `;

    if (isRendered.current) return;
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    // Direct script instantiation inside the container
    const script = document.createElement('script');
    script.async = true;
    script.src = CAR_WIDGET_URL;
    script.charset = 'utf-8';

    container.appendChild(script);
    isRendered.current = true;

    return () => {
      if (container) {
        container.innerHTML = '';
      }
      isRendered.current = false;
    };
  }, []);

  return (
    <div className="w-full space-y-3.5 bg-transparent border-0 shadow-none overflow-visible">
      {/* SEARCH WIDGET MOUNT CONTAINER */}
      <div 
        id="tpwl-car-widget-container"
        ref={containerRef}
        className="w-full min-h-[220px] sm:min-h-[200px] flex items-center justify-center bg-transparent p-0 border-0 shadow-none overflow-visible"
      />

      {/* ATTRIBUTION STRIP */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-400 border-t border-slate-100 pt-3">
        <div className="flex items-center gap-1.5 font-bold text-slate-700">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span className="text-[11px] sm:text-xs">Official Partner</span>
        </div>

        <div className="flex items-center justify-end gap-2">
          <span className="text-[11px] sm:text-xs font-bold text-slate-400">Powered by</span>
          <AutoEuropeLogo />
        </div>
      </div>
    </div>
  );
};

export default CarRentalWidget;