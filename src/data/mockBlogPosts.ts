export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  readTime: string;
  publishedDate: string;
  content: string;
}

const cropParams = '?auto=format&fit=crop&w=800&h=600&q=80';
const heroParams = '?auto=format&fit=crop&w=1600&h=800&q=80';

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'best-time-to-visit-bali',
    title: 'The Best Time to Visit Bali: A Complete Seasonal Guide',
    excerpt: 'Discover the perfect time to visit Bali based on weather, festivals, and avoiding the massive tourist crowds.',
    category: 'Guides',
    image: `https://images.unsplash.com/photo-1537996194471-e657df975ab4${cropParams}`,
    readTime: '6 min read',
    publishedDate: 'June 12, 2026',
    content: `
      <h2>Understanding Bali's Seasons</h2>
      <p>Bali operates on two distinct seasons: dry and wet. The dry season runs from April to October, offering sunny days and lower humidity, making it the most popular time for tourists. The wet season, from November to March, brings daily rain showers, but also lush green landscapes and significant discounts.</p>
      <h2>Peak vs. Off-Peak</h2>
      <p>July and August are the absolute peak months. If you want a balance of great weather and manageable crowds, aim for the shoulder months: May, June, and September. During these times, you can enjoy the beaches and temples without the overwhelming crowds, and room rates are generally more reasonable.</p>
      <h2>Surfing and Diving</h2>
      <p>For surfers, the dry season (particularly on the west coast like Canggu and Uluwatu) provides the best swells. Divers will find the best visibility from May to November, especially around Menjangan Island and Nusa Penida.</p>
    `
  },
  {
    id: '2',
    slug: '10-things-to-do-in-tokyo',
    title: '10 Unforgettable Things to Do in Tokyo',
    excerpt: 'From peaceful shrines to neon-lit streets, here is the ultimate checklist for your first trip to Japan\'s capital.',
    category: 'Destinations',
    image: `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf${cropParams}`,
    readTime: '8 min read',
    publishedDate: 'June 28, 2026',
    content: `
      <h2>1. Cross the Shibuya Scramble</h2>
      <p>No trip to Tokyo is complete without experiencing the organized chaos of the Shibuya Crossing. For the best view, grab a coffee at the nearby Starbucks or head up to the Shibuya Sky observation deck.</p>
      <h2>2. Wander Through Senso-ji Temple</h2>
      <p>Located in Asakusa, Senso-ji is Tokyo's oldest Buddhist temple. Visit early in the morning to avoid the massive crowds, and don't forget to try the street food on Nakamise Shopping Street leading up to the main hall.</p>
      <h2>3. Explore Akihabara</h2>
      <p>Dive into Japan's anime, gaming, and electronics culture. Even if you aren't a massive fan, the towering arcades and neon signs are a sensory experience unlike anywhere else in the world.</p>
    `
  },
  {
    id: '3',
    slug: 'cheapest-months-to-fly-to-dubai',
    title: 'The Cheapest Months to Fly to Dubai in 2026',
    excerpt: 'Want to experience luxury on a budget? Here is the data-driven guide on when flights to Dubai are cheapest.',
    category: 'Tips & Tricks',
    image: `https://images.unsplash.com/photo-1512453979438-515cb62eb292${cropParams}`,
    readTime: '5 min read',
    publishedDate: 'July 2, 2026',
    content: `
      <h2>The Summer Slump</h2>
      <p>If you strictly want the cheapest flight possible, you need to look at July and August. However, beware: temperatures frequently exceed 105°F (40°C). If you plan to spend your entire trip inside air-conditioned mega-malls or indoor theme parks, the massive flight and hotel discounts might be worth it.</p>
      <h2>The Sweet Spot: Shoulder Seasons</h2>
      <p>For the best balance of price and tolerable weather, aim for October or March. Flight prices haven't hit their winter peak yet, but you can actually comfortably walk outside without melting. Booking 3 to 4 months in advance during these windows yields the best savings.</p>
    `
  },
  {
    id: '4',
    slug: 'complete-singapore-travel-guide',
    title: 'The Complete Singapore Travel Guide',
    excerpt: 'Everything you need to know about navigating the Lion City, from Hawker centers to Marina Bay.',
    category: 'Guides',
    image: `https://images.unsplash.com/photo-1525625299386-1ea8af095813${cropParams}`,
    readTime: '10 min read',
    publishedDate: 'May 15, 2026',
    content: `
      <h2>Getting Around</h2>
      <p>Singapore has one of the cleanest, most efficient public transit systems in the world: the MRT. You can simply tap your contactless credit card at the turnstiles—no need to buy a specific transit card.</p>
      <h2>Where to Eat on a Budget</h2>
      <p>Skip the expensive restaurants and head straight to the Hawker Centers. Maxwell Food Centre and Lau Pa Sat offer Michelin-starred meals (like Hainanese Chicken Rice) for under $5 USD. It is deeply embedded in the local culture.</p>
    `
  },
  {
    id: '5',
    slug: 'bangkok-budget-travel-tips',
    title: 'Bangkok Budget Travel Tips: See the City for Less',
    excerpt: 'How to maximize your time in Thailand\'s bustling capital without emptying your wallet.',
    category: 'Tips & Tricks',
    image: `https://images.unsplash.com/photo-1508009603885-50cf7cbf0076${cropParams}`,
    readTime: '7 min read',
    publishedDate: 'April 20, 2026',
    content: `
      <h2>Street Food is King</h2>
      <p>Bangkok is arguably the street food capital of the world. Areas like Yaowarat (Chinatown) and Khao San Road offer incredible Pad Thai, Som Tum, and Mango Sticky Rice for mere dollars. Stick to stalls where locals are eating; high turnover means fresh food.</p>
      <h2>Navigating the City</h2>
      <p>Tuk-tuks are iconic, but they are often a tourist trap. For reliable and cheap transport, use the BTS Skytrain or MRT. If you need a taxi, use ride-hailing apps like Grab to ensure you aren't scammed on the fare.</p>
    `
  },
  {
    id: '6',
    slug: 'how-to-find-cheap-flights',
    title: 'How to Consistently Find Cheap Flights',
    excerpt: 'Stop relying on myths like "booking on a Tuesday." Here is how real travelers find cheap airfare.',
    category: 'Flight Tips',
    image: `https://images.unsplash.com/photo-1436491865332-7a61a109cc05${cropParams}`,
    readTime: '9 min read',
    publishedDate: 'January 10, 2026',
    content: `
      <h2>Flexibility is Your Best Friend</h2>
      <p>The number one secret to cheap flights is date flexibility. Shifting your departure or return by just one or two days can slice hundreds of dollars off your ticket. Use FlySava's flexible date search to view a whole month of prices.</p>
      <h2>The "Tuesday" Myth</h2>
      <p>Decade-old advice tells you to buy tickets on Tuesdays at 2 PM. This is largely a myth in 2026. Airlines use dynamic, algorithmic pricing. While flying on a Tuesday is often cheaper, the day you actually click "buy" doesn't matter nearly as much as how far in advance you are booking.</p>
    `
  },
  {
    id: '7',
    slug: 'best-beaches-in-thailand',
    title: 'The 7 Best Beaches in Thailand',
    excerpt: 'From hidden coves to massive party islands, we rank the absolute best beaches Thailand has to offer.',
    category: 'Destinations',
    image: `https://images.unsplash.com/photo-1581793751508-30517f8b9115${cropParams}`,
    readTime: '6 min read',
    publishedDate: 'March 5, 2026',
    content: `
      <h2>1. Railay Beach, Krabi</h2>
      <p>Accessible only by boat due to the massive limestone cliffs cutting it off from the mainland, Railay feels like a private island paradise. It is arguably the most photogenic beach in the country.</p>
      <h2>2. Maya Bay, Koh Phi Phi</h2>
      <p>Famous for the movie "The Beach," Maya Bay was closed for years for ecological recovery. Now open with strict visitation rules, the water is clearer and the reef is healthier than it has been in decades.</p>
    `
  },
  {
    id: '8',
    slug: 'europe-trip-planning-guide',
    title: 'The Ultimate Europe Trip Planning Guide',
    excerpt: 'Planning a multi-country Eurotrip? Here is how to handle visas, trains, and budgeting seamlessly.',
    category: 'Guides',
    image: `https://images.unsplash.com/photo-1499856871958-5b9627545d1a${cropParams}`,
    readTime: '12 min read',
    publishedDate: 'February 14, 2026',
    content: `
      <h2>Mastering the Trains</h2>
      <p>If you are traveling through Western or Central Europe (France, Germany, Italy, Switzerland), the train network is vastly superior to flying. A Eurail pass might seem expensive upfront, but it offers incredible flexibility and saves you from paying massive last-minute ticket prices.</p>
      <h2>Budgeting Your Days</h2>
      <p>The biggest mistake first-time travelers make is trying to see 10 countries in 14 days. You will spend your entire trip exhausted in transit. Stick to the "3-Day Rule": spend at least 3 nights in any major city to actually experience it.</p>
    `
  },
  {
    id: '9',
    slug: 'top-destinations-for-solo-travelers',
    title: 'Top 5 Destinations for Solo Travelers',
    excerpt: 'Safe, friendly, and highly accessible cities perfect for those venturing out on their own.',
    category: 'Destinations',
    image: `https://images.unsplash.com/photo-1507699622108-4be3abd695ad${cropParams}`,
    readTime: '8 min read',
    publishedDate: 'May 30, 2026',
    content: `
      <h2>1. Kyoto, Japan</h2>
      <p>Japan is widely considered one of the safest countries in the world. Kyoto offers solo travelers peace and deep cultural immersion, with incredibly reliable public transit and solo-dining culture (like private ramen booths).</p>
      <h2>2. Reykjavik, Iceland</h2>
      <p>Consistently ranking at the top of global safety indexes, Iceland is a stunning country where English is widely spoken, and the primary activities (hiking, hot springs) are deeply restorative for a solo traveler.</p>
    `
  },
  {
    id: '10',
    slug: 'family-friendly-travel-destinations',
    title: 'Best Family-Friendly Travel Destinations',
    excerpt: 'Locations that offer the perfect mix of relaxation for parents and endless entertainment for kids.',
    category: 'Destinations',
    image: `https://images.unsplash.com/photo-1514565131-fce0801e5785${cropParams}`,
    readTime: '7 min read',
    publishedDate: 'April 5, 2026',
    content: `
      <h2>Tokyo, Japan</h2>
      <p>It might seem overwhelming, but Tokyo is incredibly family-friendly. Between Tokyo Disneyland, the interactive digital art museums (TeamLab), and the safety of the city, kids and adults alike will be enchanted.</p>
      <h2>Oahu, Hawaii</h2>
      <p>The perfect blend of easy American infrastructure with exotic tropical beauty. The calm waters of Ko Olina are perfect for toddlers, while older kids will love surfing lessons in Waikiki.</p>
    `
  },
  {
    id: '11',
    slug: 'flight-booking-mistakes',
    title: '5 Flight Booking Mistakes to Avoid',
    excerpt: 'Don\'t let hidden fees and bad layovers ruin your vacation before it even begins.',
    category: 'Flight Tips',
    image: `https://images.unsplash.com/photo-1518481612222-68bab828fd58${cropParams}`,
    readTime: '6 min read',
    publishedDate: 'March 18, 2026',
    content: `
      <h2>1. The 45-Minute Layover Trap</h2>
      <p>Airlines legally have to sell you routes they believe are possible, but a 45-minute layover in a massive hub like Chicago (ORD) or Frankfurt (FRA) is a disaster waiting to happen. Always aim for a minimum of 90 minutes for international layovers.</p>
      <h2>2. Ignoring Basic Economy Restrictions</h2>
      <p>That $99 flight to Paris looks great until you realize "Basic Economy" means you don't get a carry-on bag, you can't pick your seat, and it's completely non-refundable. Always read the fine print before clicking buy.</p>
    `
  },
  {
    id: '12',
    slug: 'best-travel-apps-2026',
    title: 'The Best Travel Apps for 2026',
    excerpt: 'Download these essential applications to navigate, translate, and plan your trips seamlessly.',
    category: 'Tips & Tricks',
    image: `https://images.unsplash.com/photo-1512470876302-972faa2aa9a4${cropParams}`,
    readTime: '5 min read',
    publishedDate: 'January 25, 2026',
    content: `
      <h2>1. FlySava</h2>
      <p>Naturally, your first stop for booking flights, tracking real-time status updates, and researching your next destination should be FlySava. It consolidates everything you need into one premium dashboard.</p>
      <h2>2. Google Translate (With Offline Languages)</h2>
      <p>The camera feature on Google Translate is basically magic for reading foreign menus. Ensure you download the languages you need for offline use before you leave your home Wi-Fi.</p>
      <h2>3. Maps.me</h2>
      <p>While Google Maps is great, Maps.me allows you to download massive, highly detailed regional maps that require zero internet connection to route your walking paths accurately.</p>
    `
  }
];