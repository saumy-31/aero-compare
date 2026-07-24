import { next } from '@vercel/edge';

// Configuration to ensure middleware only runs on page navigations.
// We skip static assets (images, js, css, etc.) to save on function invocations and maximize speed.
export const config = {
  matcher: [
    '/((?!api|_vercel|.*\\..*).*)',
  ],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const hostname = url.hostname;

  // 1. Only run redirect logic if on the main root domain.
  // This prevents infinite redirect loops if the user is already on a subdomain.
  if (hostname === 'flysava.com' || hostname === 'www.flysava.com') {
    
    // 2. Read the user's country from Vercel's edge geographic headers
   // Ensure line 15 looks like this:
const country = request.headers.get('x-vercel-ip-country');

    // 3. Map of supported countries to their respective subdomains.
    // (Kept locally in the middleware to ensure lightning-fast Edge execution without external imports)
    const supportedRegions: Record<string, string> = {
      IN: 'in', // India
      US: 'us', // United States
      GB: 'uk', // United Kingdom
      JP: 'jp', // Japan
      AE: 'ae', // UAE
      SG: 'sg', // Singapore
      NZ: 'nz', // New Zealand
      ZA: 'za', // South Africa
      NG: 'ng', // Nigeria
      AU: 'au', // Australia
      CA: 'ca', // Canada

      // --- Eurozone Countries (All routing to 'eu') ---
      AT: 'eu', // Austria
      BE: 'eu', // Belgium
      HR: 'eu', // Croatia
      CY: 'eu', // Cyprus
      EE: 'eu', // Estonia
      FI: 'eu', // Finland
      FR: 'eu', // France
      DE: 'eu', // Germany
      GR: 'eu', // Greece
      IE: 'eu', // Ireland
      IT: 'eu', // Italy
      LV: 'eu', // Latvia
      LT: 'eu', // Lithuania
      LU: 'eu', // Luxembourg
      MT: 'eu', // Malta
      NL: 'eu', // Netherlands
      PT: 'eu', // Portugal
      SK: 'eu', // Slovakia
      SI: 'eu', // Slovenia
      ES: 'eu', // Spain
    };

    // 4. If the visitor's country is supported, redirect them safely
    if (country && supportedRegions[country]) {
      const subdomain = supportedRegions[country];
      
      // Construct the exact new URL (e.g., https://in.flysava.com/flights?query=123)
      const redirectUrl = new URL(request.url);
      redirectUrl.hostname = `${subdomain}.flysava.com`;

      // 5. Issue a 307 Temporary Redirect to preserve SEO equity on the root domain
      return Response.redirect(redirectUrl.toString(), 307);
    }
  }

  // 6. If no redirect is needed (unsupported country, or already on a subdomain), continue normally
  return next();
}