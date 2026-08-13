import React, { useEffect, useRef } from 'react';

// Scoped CSS styles fixing button clipping & matching FlySava mobile hero design
const hotelWidgetStyles = `
  #hotel-search-widget {
    width: 100%;
    font-family: inherit;
    box-sizing: border-box;
  }

  /* Main Flex Search Bar Row */
  #hotel-search-widget .search-bar,
  #hotel-search-widget .liteapi-search-bar,
  #hotel-search-widget [class*="search-bar"] {
    display: flex !important;
    align-items: center !important;
    gap: 12px !important;
    background-color: transparent !important;
    border: none !important;
    padding: 0 !important;
    box-shadow: none !important;
    width: 100% !important;
    box-sizing: border-box !important;
  }

  /* Standard Input Field Container */
  #hotel-search-widget .field,
  #hotel-search-widget [class*="field"],
  #hotel-search-widget [class*="input-container"] {
    height: 50px !important;
    min-height: 50px !important;
    border-radius: 12px !important;
    background-color: #f8fafc !important;
    border: 1px solid #e2e8f0 !important;
    padding: 0 16px !important;
    display: flex !important;
    align-items: center !important;
    flex: 1 1 0% !important;
    min-width: 0 !important;
    box-sizing: border-box !important;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1) !important;
  }

  #hotel-search-widget .field:hover,
  #hotel-search-widget [class*="field"]:hover {
    border-color: #2563eb !important;
  }

  #hotel-search-widget .field:focus-within {
    background-color: #ffffff !important;
    border-color: #2563eb !important;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12) !important;
  }

  /* Typography Inside Input Fields */
  #hotel-search-widget input,
  #hotel-search-widget select,
  #hotel-search-widget .search-input,
  #hotel-search-widget [class*="search-input"] {
    font-family: inherit !important;
    font-size: 13px !important;
    font-weight: 700 !important;
    color: #0f172a !important;
    background: transparent !important;
    border: none !important;
    outline: none !important;
    width: 100% !important;
    height: 100% !important;
    white-space: nowrap !important;
    overflow: hidden !important;
    text-overflow: ellipsis !important;
  }

  #hotel-search-widget input::placeholder {
    color: #94a3b8 !important;
    font-weight: 500 !important;
  }

  #hotel-search-widget .separator,
  #hotel-search-widget [class*="separator"] {
    display: none !important;
  }

  /* Primary Search Button */
  #hotel-search-widget .search-button,
  #hotel-search-widget button[type="submit"],
  #hotel-search-widget [class*="search-button"],
  #hotel-search-widget [class*="btn-primary"] {
    height: 50px !important;
    min-height: 50px !important;
    width: auto !important;
    min-width: 160px !important;
    max-width: none !important;
    border-radius: 12px !important;
    background: #2563eb !important;
    color: #ffffff !important;
    font-family: inherit !important;
    font-size: 14px !important;
    font-weight: 800 !important;
    border: none !important;
    padding: 0 28px !important;
    box-shadow: 0 8px 20px -3px rgba(37, 99, 235, 0.3) !important;
    cursor: pointer !important;
    transition: all 0.2s ease !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 8px !important;
    white-space: nowrap !important;
    flex-shrink: 0 !important;
    box-sizing: border-box !important;
  }

  #hotel-search-widget .search-button:hover,
  #hotel-search-widget button[type="submit"]:hover {
    background: #1d4ed8 !important;
  }

  /* SVG Icons Styling */
  #hotel-search-widget .field svg,
  #hotel-search-widget [class*="field"] svg {
    color: #2563eb !important;
    flex-shrink: 0 !important;
  }

  #hotel-search-widget .search-button svg,
  #hotel-search-widget button[type="submit"] svg {
    color: #ffffff !important;
    fill: currentColor !important;
    stroke: currentColor !important;
    width: 18px !important;
    height: 18px !important;
    flex-shrink: 0 !important;
  }

  /* Mobile Responsive Adjustment (< 768px) */
  @media (max-width: 767px) {
    #hotel-search-widget .search-bar,
    #hotel-search-widget [class*="search-bar"] {
      display: flex !important;
      flex-direction: column !important;
      gap: 10px !important;
      width: 100% !important;
    }

    #hotel-search-widget .field,
    #hotel-search-widget [class*="field"] {
      width: 100% !important;
      min-width: 100% !important;
      flex: none !important;
      box-sizing: border-box !important;
    }

    #hotel-search-widget [data-js-date-range="true"] {
      display: none !important;
    }

    #hotel-search-widget .mobile-dates-row,
    #hotel-search-widget [class*="dates-row"],
    #hotel-search-widget [class*="date-picker-wrapper"] {
      display: grid !important;
      grid-template-columns: 1fr 1fr !important;
      gap: 10px !important;
      width: 100% !important;
    }

    #hotel-search-widget .search-button,
    #hotel-search-widget button[type="submit"],
    #hotel-search-widget [class*="search-button"] {
      width: 100% !important;
      min-width: 100% !important;
      padding: 0 16px !important;
    }
  }
`;

export const HotelSearchWidget: React.FC = () => {
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const isWidgetRendered = useRef<boolean>(false);

  const removeCombinedDateBox = () => {
    if (!widgetContainerRef.current) return;

    const fields = widgetContainerRef.current.querySelectorAll('.field, [class*="field"], [class*="input"]');
    
    fields.forEach((field) => {
      const text = field.textContent || '';
      if (text.includes(' - ') || text.includes(' – ')) {
        (field as HTMLElement).style.display = 'none';
        (field as HTMLElement).setAttribute('data-js-date-range', 'true');
      }
    });
  };

  useEffect(() => {
    const styleId = 'liteapi-flysava-matched-styles';
    let styleTag = document.getElementById(styleId) as HTMLStyleElement | null;

    if (!styleTag) {
      styleTag = document.createElement('style');
      styleTag.id = styleId;
      document.head.appendChild(styleTag);
    }
    styleTag.innerHTML = hotelWidgetStyles;

    if (isWidgetRendered.current) return;

    const scriptId = 'liteapi-components-sdk';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const initWidget = () => {
      if (isWidgetRendered.current) return;

      try {
        const LiteAPI = (window as any).LiteAPI;

        if (LiteAPI) {
          if (!(window as any).__LITEAPI_INITIALIZED__) {
            LiteAPI.init({
              domain: 'flysava.nuitee.link',
            });
            (window as any).__LITEAPI_INITIALIZED__ = true;
          }

          if (widgetContainerRef.current) {
            widgetContainerRef.current.innerHTML = '';
          }

          LiteAPI.SearchBar.create({
            selector: '#hotel-search-widget',
            primaryColor: '#2563eb',
          });

          isWidgetRendered.current = true;

          if (widgetContainerRef.current) {
            const observer = new MutationObserver(() => {
              if (window.innerWidth < 768) {
                removeCombinedDateBox();
              }
            });

            observer.observe(widgetContainerRef.current, {
              childList: true,
              subtree: true,
            });

            setTimeout(() => {
              if (window.innerWidth < 768) {
                removeCombinedDateBox();
              }
            }, 300);
          }
        }
      } catch (error) {
        console.error('Failed to initialize LiteAPI Hotel Search Widget:', error);
      }
    };

    const handleLoad = () => {
      initWidget();
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://components.liteapi.travel/v1.0/sdk.umd.js';
      script.async = true;
      script.addEventListener('load', handleLoad);
      document.body.appendChild(script);
    } else {
      if ((window as any).LiteAPI) {
        initWidget();
      } else {
        script.addEventListener('load', handleLoad);
      }
    }

    return () => {
      script?.removeEventListener('load', handleLoad);

      if (widgetContainerRef.current) {
        widgetContainerRef.current.innerHTML = '';
      }
      isWidgetRendered.current = false;
    };
  }, []);

  return (
    <div className="w-full">
      <div
        id="hotel-search-widget"
        ref={widgetContainerRef}
        className="w-full min-h-[50px]"
      />
    </div>
  );
};

export default HotelSearchWidget;