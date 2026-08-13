import React, { useEffect, useRef } from 'react';
import { ShieldCheck } from 'lucide-react';

const esimWidgetStyles = `
  #tp-esim-widget {
    width: 100%;
    font-family: inherit;
    box-sizing: border-box;
  }

  /* Main Form Row Container */
  #tp-esim-widget form,
  #tp-esim-widget [class*="search"],
  #tp-esim-widget [class*="container"] {
    display: flex !important;
    flex-direction: row !important;
    align-items: center !important;
    gap: 12px !important;
    background: transparent !important;
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
  }

  /* Input Field Styling */
  #tp-esim-widget input,
  #tp-esim-widget [class*="input"] {
    height: 50px !important;
    min-height: 50px !important;
    border-radius: 12px !important;
    background-color: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    padding: 0 16px 0 42px !important;
    font-family: inherit !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    color: #0f172a !important;
    outline: none !important;
    box-sizing: border-box !important;
    transition: all 0.2s ease !important;
    width: 100% !important;
  }

  #tp-esim-widget input:focus {
    background-color: #ffffff !important;
    border-color: #2563eb !important;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12) !important;
  }

  /* Search CTA Button */
  #tp-esim-widget button,
  #tp-esim-widget [type="submit"],
  #tp-esim-widget [class*="button"] {
    height: 50px !important;
    min-height: 50px !important;
    border-radius: 12px !important;
    background: #2563eb !important;
    color: #ffffff !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: 800 !important;
    border: none !important;
    padding: 0 24px !important;
    box-shadow: 0 8px 20px -3px rgba(37, 99, 235, 0.3) !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
  }

  #tp-esim-widget button:hover {
    background: #1d4ed8 !important;
  }

  #tp-esim-widget button:active {
    transform: scale(0.98) !important;
  }

  /* Mobile Responsive Layout Stacking */
  @media (max-width: 640px) {
    #tp-esim-widget form,
    #tp-esim-widget [class*="container"] {
      flex-direction: column !important;
      gap: 10px !important;
    }

    #tp-esim-widget button,
    #tp-esim-widget [type="submit"] {
      width: 100% !important;
    }
  }
`;

export const EsimWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isRendered = useRef<boolean>(false);

  useEffect(() => {
    const styleId = 'flysava-esim-clean-layout-styles';
    let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = esimWidgetStyles;

    if (isRendered.current) return;

    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src =
      'https://tpwgts.com/content?trs=418605&shmarker=633257&locale=en&powered_by=false&color_button=%232563Eb&color_focused=%232563Eb&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=14&plain=true&no_labels=&promo_id=8588&campaign_id=541';

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
      {/* 1. Live Search Widget Mount Point */}
      <div className="w-full relative min-h-[50px] flex items-center justify-center overflow-hidden">
        <div
          id="tp-esim-widget"
          ref={containerRef}
          className="w-full min-h-[50px]"
        />
      </div>

      {/* 2. ATTRIBUTION STRIP */}
      <div className="flex items-center justify-between px-1 text-xs text-slate-400 border-t border-slate-100 pt-3">
        <div className="flex items-center gap-1.5 font-bold text-slate-700">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span className="text-[11px] sm:text-xs">Official Partner Engine</span>
        </div>

        <div className="flex items-center justify-end gap-2">
          <span className="text-[11px] sm:text-xs font-bold text-slate-400">Powered by</span>
          <img
            src="https://cdn-revamp.airalo.com/img/logo-homepage-header.png"
            srcSet="https://cdn-revamp.airalo.com/img/logo-homepage-header.png 1x, https://cdn-revamp.airalo.com/img/logo-homepage-header.png 2x"
            alt="Airalo"
            className="h-4 sm:h-5 w-auto object-contain block shrink-0"
          />
        </div>
      </div>
    </div>
  );
};

export default EsimWidget;