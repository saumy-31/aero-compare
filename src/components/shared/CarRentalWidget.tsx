import React, { useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';

const WIDGET_SRC =
  'https://tpwgts.com/content?trs=418605&shmarker=633257&locale=en&powered_by=false&border_radius=12&plain=true&show_logo=false&color_background=transparent&color_button=%232563eb&promo_id=4362&campaign_id=143';

const AutoEuropeLogo = () => (
  <img 
    itemProp="image" 
    className="site-logo h-4 sm:h-5 w-auto object-contain block" 
    src="/auto-europe-logo.png"
    alt="Auto Europe logo" 
    title="Auto Europe"
  />
);

export const CarRentalWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    if (isRendered.current) return;

    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');
    script.async = true;
    script.src = WIDGET_SRC;
    script.charset = 'utf-8';

    const cleanIframeStyles = () => {
      const iframe = container.querySelector('iframe');
      if (!iframe) return;

      // Ensure iframe expands cleanly without scrollbars or overflow clipping
      iframe.style.width = '100%';
      iframe.style.border = 'none';
      iframe.style.overflow = 'visible';

      try {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
        if (iframeDoc) {
          const style = iframeDoc.createElement('style');
          style.innerHTML = `
            body, .widget-container, .main-container, div[class*="container"] {
              background: transparent !important;
              background-color: transparent !important;
              border: none !important;
              box-shadow: none !important;
              padding: 0 !important;
              margin: 0 !important;
              width: 100% !important;
              max-width: 100% !important;
            }
            .field, input, select, div[class*="field"], div[class*="input"] {
              background-color: #f8fafc !important;
              border: 1px solid #e2e8f0 !important;
              border-radius: 12px !important;
              font-size: 13px !important;
              font-weight: 600 !important;
            }
            input:focus, select:focus {
              background-color: #ffffff !important;
              border-color: #2563eb !important;
              outline: none !important;
            }
            @media (max-width: 640px) {
              .form-row, div[class*="row"] {
                display: flex !important;
                flex-wrap: wrap !important;
                gap: 8px !important;
              }
              .field, div[class*="field"] {
                margin-bottom: 8px !important;
              }
              button[type="submit"], input[type="submit"], .submit-btn {
                border-radius: 12px !important;
                height: 48px !important;
                font-weight: 800 !important;
                margin-top: 4px !important;
                width: 100% !important;
              }
            }
          `;
          iframeDoc.head.appendChild(style);
        }
      } catch (e) {
        // Cross-origin fallback
      }
    };

    script.onload = () => {
      setTimeout(cleanIframeStyles, 100);
      setTimeout(cleanIframeStyles, 400);
      setTimeout(cleanIframeStyles, 1000);
    };

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
    <div className="w-full space-y-3.5">
      {/* SEARCH WIDGET MOUNT CONTAINER */}
      <div 
        id="tpwl-car-widget-container"
        ref={containerRef}
        className="w-full min-h-[140px] flex items-center justify-center bg-transparent p-0 border-0 shadow-none overflow-visible"
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