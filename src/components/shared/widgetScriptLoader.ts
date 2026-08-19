const scriptPromises = new Map<string, Promise<void>>();

export const HOTEL_SDK_URL = 'https://components.liteapi.travel/v1.0/sdk.umd.js';
export const CAR_WIDGET_URL = 'https://tpwgts.com/content?trs=418605&shmarker=633257&locale=en&powered_by=false&border_radius=12&plain=true&show_logo=false&color_background=transparent&color_button=%232563eb&promo_id=4362&campaign_id=143';
export const ESIM_WIDGET_URL = 'https://tpwgts.com/content?trs=418605&shmarker=633257&locale=en&powered_by=false&color_button=%232563Eb&color_focused=%232563Eb&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=14&plain=true&no_labels=&promo_id=8588&campaign_id=541';

/**
 * Singleton script loader: Downloads and executes a vendor script once and caches the Promise.
 */
export function loadScriptOnce(src: string, id?: string): Promise<void> {
  if (scriptPromises.has(src)) {
    return scriptPromises.get(src)!;
  }

  // Check if already in DOM
  const existingScript = (id ? document.getElementById(id) : null) || document.querySelector(`script[src="${src}"]`);
  if (existingScript) {
    const resolvedPromise = Promise.resolve();
    scriptPromises.set(src, resolvedPromise);
    return resolvedPromise;
  }

  const promise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    if (id) script.id = id;
    script.src = src;
    script.async = true;
    script.charset = 'utf-8';

    script.onload = () => resolve();
    script.onerror = (err) => {
      scriptPromises.delete(src); // Allow retry on failure
      reject(err);
    };

    document.head.appendChild(script);
  });

  scriptPromises.set(src, promise);
  return promise;
}

let isIdlePreloaded = false;

/**
 * Preloads React component chunks and warms vendor scripts during idle time.
 * Does not execute widget creation logic until actual component mount.
 */
export function preloadWidgetsOnIdle(): void {
  if (isIdlePreloaded || typeof window === 'undefined') return;
  isIdlePreloaded = true;

  const runPreload = () => {
    // 1. Preload dynamic React component chunks
    import('./HotelSearchWidget').catch(() => {});
    import('./CarRentalWidget').catch(() => {});
    import('./EsimWidget').catch(() => {});

    // 2. Pre-warm vendor scripts in the browser cache
    loadScriptOnce(HOTEL_SDK_URL, 'liteapi-components-sdk').catch(() => {});
    loadScriptOnce(CAR_WIDGET_URL, 'tpwgts-car-sdk').catch(() => {});
    loadScriptOnce(ESIM_WIDGET_URL, 'tpwgts-esim-sdk').catch(() => {});
  };

  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(runPreload, { timeout: 3000 });
  } else {
    setTimeout(runPreload, 2000);
  }
}