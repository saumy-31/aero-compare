export interface Attraction {
  name: string;
  duration: string;
  bestTime: string;
  entryFee: string;
}

export interface Destination {
  id: string;
  city: string;
  country: string;
  airportCode: string;
  image: string;
  description: string;

  // SEO fields - optional so existing destinations don't break
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];

  budget: 'Budget' | 'Moderate' | 'Luxury';
  tripType: 'Beach' | 'Adventure' | 'City' | 'Culture' | 'Nature' | 'Luxury';
  bestSeason: string;
  dailyBudget: number;
  attractions: Attraction[];
  travelTips: string[];
}
const cropParams = '?auto=format&fit=crop&w=800&h=600&q=80';

export const MOCK_DESTINATIONS: Destination[] = [
  // --- ASIA ---
  {
    id: 'bali-id', city: 'Bali', country: 'Indonesia', airportCode: 'DPS',
    image: `https://images.unsplash.com/photo-1537996194471-e657df975ab4${cropParams}`,
    description: 'A paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
    budget: 'Budget', tripType: 'Beach', bestSeason: 'April to October', dailyBudget: 65,
    attractions: [
      { name: 'Uluwatu Temple', duration: '2-3 hours', bestTime: '5:00 PM (Sunset Kecak Dance)', entryFee: 'IDR 50,000' },
      { name: 'Tegallalang Rice Terraces', duration: '1-2 hours', bestTime: '7:00 AM (Avoid heat)', entryFee: 'IDR 15,000' },
      { name: 'Sacred Monkey Forest', duration: '2 hours', bestTime: '9:00 AM', entryFee: 'IDR 80,000' },
      { name: 'Tanah Lot Temple', duration: '2 hours', bestTime: '6:00 PM', entryFee: 'IDR 60,000' },
      { name: 'Mount Batur Trek', duration: '5-6 hours', bestTime: '2:00 AM', entryFee: 'IDR 350,000 (with guide)' },
      { name: 'Nusa Penida Day Trip', duration: 'Full Day', bestTime: '7:00 AM Ferry', entryFee: 'IDR 25,000 per site' }
    ],
    travelTips: [
      'Public Transportation: Download Gojek or Grab for cheap, reliable scooter taxis and food delivery.',
      'Local Etiquette: Always wear a sarong and cover your shoulders when entering Hindu temples.',
      'Safety Advice: Do not drink the tap water. Use bottled water even for brushing your teeth to avoid Bali Belly.',
      'Currency: Keep small Indonesian Rupiah (IDR) notes; many local warungs and markets cannot break large bills.',
      'Common Scams: Avoid independent money changers with rates that look too good to be true; use official banks.',
      'Best Food: Try Nasi Campur and Babi Guling at local warungs for under $3.'
    ]
  },
  {
    id: 'tokyo-jp', city: 'Tokyo', country: 'Japan', airportCode: 'NRT',
    image: `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf${cropParams}`,
    description: 'Japan’s busy capital, mixing the ultramodern and the traditional.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'March to May', dailyBudget: 150,
    attractions: [
      { name: 'Shibuya Crossing & Sky', duration: '2 hours', bestTime: 'Sunset', entryFee: '¥2,200 (Sky)' },
      { name: 'Senso-ji Temple', duration: '1.5 hours', bestTime: '6:00 AM or Late Evening', entryFee: 'Free' },
      { name: 'teamLab Planets', duration: '2-3 hours', bestTime: 'Morning', entryFee: '¥3,800' },
      { name: 'Meiji Jingu Shrine', duration: '1 hour', bestTime: '8:00 AM', entryFee: 'Free' },
      { name: 'Tsukiji Outer Market', duration: '2 hours', bestTime: '7:00 AM', entryFee: 'Pay per item' },
      { name: 'Akihabara Electric Town', duration: '3 hours', bestTime: 'Afternoon to Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Public Transportation: Get a Welcome Suica or Pasmo IC card at the airport for seamless train travel.',
      'Local Etiquette: Do not tip. Ever. It is considered rude and confusing to Japanese service workers.',
      'Money-Saving: Eat at "Konbinis" (7-Eleven, Lawson, FamilyMart) for high-quality, cheap meals.',
      'Language: Download Google Translate offline. English is limited outside major transit hubs.',
      'Safety Advice: Tokyo is extremely safe, but avoid touts in Kabukicho offering cheap drinks.',
      'Packing: Bring a small coin purse; Japan is still heavily reliant on ¥100 and ¥500 coins.'
    ]
  },
  {
    id: 'kyoto-jp', city: 'Kyoto', country: 'Japan', airportCode: 'KIX', 
    image: `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e${cropParams}`,
    description: 'Famous for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'March to May', dailyBudget: 120,
    attractions: [
      { name: 'Fushimi Inari Shrine', duration: '2-3 hours', bestTime: '6:00 AM to beat crowds', entryFee: 'Free' },
      { name: 'Arashiyama Bamboo Grove', duration: '1 hour', bestTime: '7:00 AM', entryFee: 'Free' },
      { name: 'Kinkaku-ji (Golden Pavilion)', duration: '1 hour', bestTime: '9:00 AM', entryFee: '¥500' },
      { name: 'Kiyomizu-dera', duration: '2 hours', bestTime: 'Sunset', entryFee: '¥400' },
      { name: 'Nijo Castle', duration: '2 hours', bestTime: 'Afternoon', entryFee: '¥1,300' },
      { name: 'Gion District', duration: '1.5 hours', bestTime: 'Early Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Public Transportation: Kyoto relies heavily on buses. Buy a 1-Day Bus Pass, but use trains during rush hour to avoid traffic.',
      'Local Etiquette: Do not harass or photograph Geisha/Maiko in Gion. It is now strictly enforced by fines.',
      'Packing Recommendations: Wear slip-on shoes; you will take them off repeatedly to enter temples and tatami rooms.',
      'Best Food: Kyoto is famous for Kaiseki (multi-course dining) and Matcha-flavored treats.',
      'Money-Saving: Many stunning smaller temples are free or ¥200. Skip some major ones if on a tight budget.',
      'Weather: Summers (July/August) are brutally hot and humid. Dress in light, breathable layers.'
    ]
  },
  {
    id: 'osaka-jp', city: 'Osaka', country: 'Japan', airportCode: 'KIX', 
    image: `https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1600&q=80`,
    description: 'A large port city and commercial center known for its modern architecture, nightlife and hearty street food.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'September to November', dailyBudget: 110,
    attractions: [
      { name: 'Dotonbori', duration: '2-3 hours', bestTime: 'Night (for the neon lights)', entryFee: 'Free' },
      { name: 'Osaka Castle', duration: '2 hours', bestTime: 'Morning', entryFee: '¥600' },
      { name: 'Universal Studios Japan', duration: 'Full Day', bestTime: 'Arrive before opening', entryFee: '¥8,600+' },
      { name: 'Umeda Sky Building', duration: '1.5 hours', bestTime: 'Sunset', entryFee: '¥1,500' },
      { name: 'Kuromon Ichiba Market', duration: '2 hours', bestTime: '10:00 AM (Brunch)', entryFee: 'Pay per item' },
      { name: 'Shinsekai', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Local Food: Osaka is "Japan\'s Kitchen." You must try Takoyaki (octopus balls) and Okonomiyaki (savory pancakes).',
      'Public Transportation: Stand on the RIGHT side of the escalators in Osaka (unlike Tokyo, where you stand on the left).',
      'Accommodation: Stay in the Namba or Umeda areas for the best access to nightlife and train hubs.',
      'Money-Saving: Consider the Osaka Amazing Pass for unlimited subway rides and free entry to 40+ attractions.',
      'Local Etiquette: Osaka locals are generally louder, friendlier, and more direct than people in Tokyo. Enjoy the vibrant vibe.',
      'Safety Advice: The city is incredibly safe, though the Kamagasaki area south of Shinsekai can be slightly gritty.'
    ]
  },
  {
    id: 'seoul-kr', city: 'Seoul', country: 'South Korea', airportCode: 'ICN', 
    image: `https://images.unsplash.com/photo-1517154421773-0529f29ea451?auto=format&fit=crop&w=1600&q=80`,
    description: 'A massive metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'September to November', dailyBudget: 100,
    attractions: [
      { name: 'Gyeongbokgung Palace', duration: '2 hours', bestTime: '10:00 AM (Changing of the Guard)', entryFee: '₩3,000 (Free if wearing Hanbok)' },
      { name: 'Bukchon Hanok Village', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'N Seoul Tower', duration: '2 hours', bestTime: 'Sunset', entryFee: '₩21,000' },
      { name: 'Myeong-dong Shopping Street', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'DMZ Half-Day Tour', duration: '6 hours', bestTime: 'Morning Tour', entryFee: '~$50 USD' },
      { name: 'Dongdaemun Design Plaza', duration: '2 hours', bestTime: 'Night', entryFee: 'Free to enter' }
    ],
    travelTips: [
      'Public Transportation: Buy a T-Money card at any convenience store to use on subways, buses, and taxis.',
      'Useful Local Apps: Google Maps does not give walking directions in Korea. Download Naver Map or KakaoMap instead.',
      'Best Food: Try authentic Korean BBQ (Samgyeopsal) and street foods like Tteokbokki (spicy rice cakes).',
      'Money-Saving: Eat at traditional markets like Gwangjang Market for massive, cheap portions.',
      'Local Etiquette: Use two hands when giving or receiving objects, especially money or credit cards, to show respect.',
      'SIM Card: Public Wi-Fi is excellent, but renting a portable Wi-Fi egg at ICN airport is cheap and highly reliable.'
    ]
  },
  {
    id: 'singapore-sg', city: 'Singapore', country: 'Singapore', airportCode: 'SIN', 
    image: `https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1600&q=80`,
    description: 'A global financial center with a tropical climate and multicultural population.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'February to April', dailyBudget: 160,
    attractions: [
      { name: 'Gardens by the Bay', duration: '3 hours', bestTime: 'Late Afternoon to Night (for the light show)', entryFee: 'SGD 32 (Conservatories)' },
      { name: 'Marina Bay Sands Skypark', duration: '1.5 hours', bestTime: 'Sunset', entryFee: 'SGD 32' },
      { name: 'Singapore Botanic Gardens', duration: '2 hours', bestTime: 'Early Morning', entryFee: 'Free (Orchid Garden SGD 15)' },
      { name: 'Sentosa Island', duration: 'Full Day', bestTime: 'Morning', entryFee: 'Varies by attraction' },
      { name: 'Jewel Changi Airport', duration: '2 hours', bestTime: 'Before your departure flight', entryFee: 'Free' },
      { name: 'Chinatown & Maxwell Food Centre', duration: '2 hours', bestTime: 'Lunchtime', entryFee: 'Pay per item' }
    ],
    travelTips: [
      'Public Transportation: The MRT is world-class. You can tap your standard contactless Visa/Mastercard directly at the gates.',
      'Local Etiquette: Do not eat or drink (even water) on the MRT; you will be hit with a massive $500 fine.',
      'Money-Saving: Skip expensive restaurants and eat at Hawker Centres for Michelin-quality food at $4 a plate.',
      'Legal Warning: Chewing gum is banned. Vaping is illegal and carries heavy fines. Drug offenses carry the death penalty.',
      'Weather: It is constantly hot and humid, with sudden tropical downpours. Carry a compact umbrella always.',
      'Best Food: Must-try dishes include Hainanese Chicken Rice, Chili Crab, and Laksa.'
    ]
  },
  {
    id: 'bangkok-th', city: 'Bangkok', country: 'Thailand', airportCode: 'BKK', 
    image: `https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1600&q=80`,
    description: 'Thailand’s capital is known for ornate shrines and vibrant street life.',
    budget: 'Budget', tripType: 'City', bestSeason: 'November to February', dailyBudget: 50,
    attractions: [
      { name: 'The Grand Palace', duration: '2-3 hours', bestTime: '8:30 AM (Be there when it opens)', entryFee: '500 THB' },
      { name: 'Wat Arun (Temple of Dawn)', duration: '1 hour', bestTime: 'Sunset', entryFee: '100 THB' },
      { name: 'Chatuchak Weekend Market', duration: '3-4 hours', bestTime: 'Morning (Saturdays/Sundays)', entryFee: 'Free' },
      { name: 'Khaosan Road', duration: '2 hours', bestTime: 'Late Night', entryFee: 'Free' },
      { name: 'Jim Thompson House', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '200 THB' },
      { name: 'Lumphini Park', duration: '1 hour', bestTime: '6:00 PM (Monitor lizards & aerobics)', entryFee: 'Free' }
    ],
    travelTips: [
      'Public Transportation: Use the BTS (Skytrain) and MRT to avoid Bangkok’s notorious gridlock traffic.',
      'Local Etiquette: The Royal Family is highly revered. Disrespecting them (even on currency) is a severe criminal offense.',
      'Dress Code: Temples enforce a strict dress code. Shoulders and knees must be covered, no leggings or torn jeans.',
      'Tourist Scams: Ignore friendly strangers telling you the "Grand Palace is closed today" who then offer a cheap Tuk-Tuk tour.',
      'Best Food: Street food is safe and incredible. Look for Pad Kra Pao, Som Tum (papaya salad), and Mango Sticky Rice.',
      'Apps: Download Grab or Bolt for taxis and avoid unmetered street cabs.'
    ]
  },
  {
    id: 'phuket-th', city: 'Phuket', country: 'Thailand', airportCode: 'HKT', 
    image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80`,
    description: 'A rainforested, mountainous island in the Andaman Sea, with some of Thailand’s most popular beaches.',
    budget: 'Budget', tripType: 'Beach', bestSeason: 'November to April', dailyBudget: 60,
    attractions: [
      { name: 'Phi Phi Islands Tour', duration: 'Full Day', bestTime: 'Early Bird Tours (6 AM) to beat crowds', entryFee: '2,500+ THB' },
      { name: 'Big Buddha Phuket', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Patong Beach & Bangla Road', duration: '2-3 hours', bestTime: 'Nighttime', entryFee: 'Free' },
      { name: 'Phang Nga Bay (James Bond Island)', duration: 'Half-Day', bestTime: 'Morning', entryFee: '1,500+ THB (Tour)' },
      { name: 'Old Phuket Town', duration: '2 hours', bestTime: 'Sunday Evening (for the night market)', entryFee: 'Free' },
      { name: 'Kata Noi Beach', duration: '3 hours', bestTime: 'Mid-morning', entryFee: 'Free' }
    ],
    travelTips: [
      'Transport Safety: Only rent a motorbike if you are highly experienced and hold an International Driving Permit. Accidents are extremely common.',
      'Areas to Avoid: Patong is very loud and party-heavy. For a quieter, upscale stay, choose Kata, Karon, or Kamala.',
      'Money-Saving: Avoid eating directly on the beachfront where prices are inflated; walk two streets back for authentic, cheap Thai food.',
      'Currency: Always carry Baht in cash; many small beach vendors and local taxis do not accept cards.',
      'Tourist Scams: Take photos of your rental scooter before driving away to avoid fake "damage" charges later.',
      'Weather: The monsoon season (May-October) brings rough seas and red flags on beaches. Do not swim if red flags are up.'
    ]
  },
  {
    id: 'kuala-lumpur-my', city: 'Kuala Lumpur', country: 'Malaysia', airportCode: 'KUL', 
    image: `https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1600&q=80`,
    description: 'The modern capital of Malaysia known for its iconic Petronas Twin Towers.',
    budget: 'Budget', tripType: 'City', bestSeason: 'May to July', dailyBudget: 55,
    attractions: [
      { name: 'Petronas Twin Towers', duration: '1.5 hours', bestTime: 'Sunset to Night', entryFee: '80 RM' },
      { name: 'Batu Caves', duration: '2 hours', bestTime: 'Early Morning (beat the heat and monkeys)', entryFee: 'Free' },
      { name: 'KL Tower (Menara KL)', duration: '1 hour', bestTime: 'Daytime', entryFee: '60 RM' },
      { name: 'Bukit Bintang', duration: '2-3 hours', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Thean Hou Temple', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Jalan Alor Night Food Court', duration: '2 hours', bestTime: 'Dinner (7:00 PM onwards)', entryFee: 'Pay per item' }
    ],
    travelTips: [
      'Public Transportation: The LRT and Monorail are cheap and efficient. Buy tokens at the machines.',
      'Useful Local Apps: Grab is essential here for taxis and food delivery. It’s cheaper than standard metered taxis.',
      'Local Etiquette: When pointing, use your thumb with your fist closed, not your index finger (which is considered rude).',
      'Safety Advice: Watch out for aggressive macaque monkeys at Batu Caves. Do not carry food or plastic bags near them.',
      'Best Food: Try Nasi Lemak (the national dish) and Char Kway Teow at local Hawker centers.',
      'Weather: KL has sudden, intense afternoon thunderstorms year-round. Carry an umbrella.'
    ]
  },
  {
    id: 'dubai-ae', city: 'Dubai', country: 'UAE', airportCode: 'DXB', 
    image: `https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=1600&q=80`,
    description: 'A city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism.',
    budget: 'Luxury', tripType: 'Luxury', bestSeason: 'November to March', dailyBudget: 250,
    attractions: [
      { name: 'Burj Khalifa (At the Top)', duration: '2 hours', bestTime: 'Sunset (Book weeks ahead)', entryFee: '179+ AED' },
      { name: 'The Dubai Mall', duration: '4 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Palm Jumeirah & Atlantis', duration: 'Half-Day', bestTime: 'Morning', entryFee: 'Varies' },
      { name: 'Dubai Creek & Gold Souk', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: '1 AED (Abra ride)' },
      { name: 'Dubai Frame', duration: '1 hour', bestTime: 'Morning', entryFee: '50 AED' },
      { name: 'Desert Safari', duration: '6 hours', bestTime: 'Afternoon/Evening Tour', entryFee: '150+ AED' }
    ],
    travelTips: [
      'Local Etiquette: Dress modestly in malls and public areas. Public displays of affection are illegal.',
      'Weather: Avoid visiting between June and September; temperatures exceed 45°C (113°F).',
      'Public Transportation: The Dubai Metro is excellent. Buy a Nol card. Taxis are also heavily regulated and affordable.',
      'Alcohol Laws: Tourists can only drink in licensed hotels and bars. Drinking in public is strictly forbidden.',
      'Money-Saving: Eat in the Deira and Bur Dubai neighborhoods for incredible, cheap Indian and Middle Eastern food.',
      'Weekend: The weekend in the UAE is Saturday and Sunday (changed recently from Fri/Sat).'
    ]
  },
  {
    id: 'abu-dhabi-ae', city: 'Abu Dhabi', country: 'UAE', airportCode: 'AUH', 
    image: `https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/fb/0f/6d.jpg`,
    description: 'The capital of the UAE, focusing on cultural attractions, mega-malls, and luxury resorts.',
    budget: 'Luxury', tripType: 'Culture', bestSeason: 'November to March', dailyBudget: 200,
    attractions: [
      { name: 'Sheikh Zayed Grand Mosque', duration: '2 hours', bestTime: 'Late Afternoon to Sunset', entryFee: 'Free (Must pre-register)' },
      { name: 'Louvre Abu Dhabi', duration: '3 hours', bestTime: 'Morning', entryFee: '63 AED' },
      { name: 'Ferrari World', duration: 'Half-Day', bestTime: 'Morning', entryFee: '345 AED' },
      { name: 'Qasr Al Watan (Presidential Palace)', duration: '2 hours', bestTime: 'Afternoon', entryFee: '65 AED' },
      { name: 'Emirates Palace', duration: '1 hour', bestTime: 'Afternoon Tea', entryFee: 'Free to enter lobbies' },
      { name: 'Corniche Beach', duration: '2 hours', bestTime: 'Early Morning', entryFee: 'Free / 10 AED for private sections' }
    ],
    travelTips: [
      'Dress Code: The Grand Mosque has a draconian dress code. Women must be fully covered (abayas provided) and men must wear long pants and sleeves.',
      'Public Transportation: Taxis are cheap and reliable. Download the Abu Dhabi Taxi app or use Uber/Careem.',
      'Safety Advice: Speeding cameras are everywhere. If you rent a car, adhere strictly to speed limits.',
      'Money-Saving: Buy the "Abu Dhabi Pass" if you plan to visit the theme parks on Yas Island.',
      'Local Food: Try traditional Emirati dishes like Harees and Machboos at local restaurants.',
      'Vibe: Abu Dhabi is much quieter, more traditional, and family-oriented compared to the party vibe of Dubai.'
    ]
  },
  {
    id: 'hong-kong-hk', city: 'Hong Kong', country: 'Hong Kong', airportCode: 'HKG', 
    image: `https://res.klook.com/image/upload/fl_lossy.progressive,q_60/v1755071654/destination/rjgbib6j1mmzviy5gvi1.jpg`,
    description: 'A vibrant, densely populated urban center known for its skyline and deep natural harbor.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'October to December', dailyBudget: 180,
    attractions: [
      { name: 'Victoria Peak', duration: '2-3 hours', bestTime: 'Dusk (Take the Peak Tram)', entryFee: 'HK$ 88 (Tram)' },
      { name: 'Star Ferry', duration: '30 mins', bestTime: 'Night (Symphony of Lights at 8 PM)', entryFee: 'HK$ 3' },
      { name: 'Lantau Island (Big Buddha)', duration: 'Half-Day', bestTime: 'Morning (Ngong Ping 360 cable car)', entryFee: 'HK$ 235' },
      { name: 'Temple Street Night Market', duration: '2 hours', bestTime: '8:00 PM', entryFee: 'Free' },
      { name: 'Nan Lian Garden', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Lan Kwai Fong', duration: '3 hours', bestTime: 'Late Night', entryFee: 'Free (Drinks are pricey)' }
    ],
    travelTips: [
      'Public Transportation: Buy an Octopus Card immediately. It works on the MTR, buses, ferries, and convenience stores.',
      'Money-Saving: Eat at local "Cha Chaan Tengs" (tea restaurants) and Dim Sum halls instead of western restaurants.',
      'Packing: Bring comfortable shoes. Hong Kong is incredibly hilly and requires immense amounts of walking.',
      'Weather: Summers are oppressively hot with typhoon risks. AC in malls is freezing, so bring a light jacket.',
      'Local Etiquette: Stand on the right side of escalators. Do not leave chopsticks sticking upright in rice.',
      'Language: English is widely spoken, but having a translation app for traditional characters helps.'
    ]
  },
  {
  id: 'edinburgh-gb',
  city: 'Edinburgh',
  country: 'Scotland',
  airportCode: 'EDI',
  image: `https://images.unsplash.com/photo-1506377585622-bedcbb027afc${cropParams}`,
  description: 'Scotland’s historic capital, filled with medieval streets, iconic castles, scenic hills, and world-famous festivals.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to September',
  dailyBudget: 140,
  attractions: [
    { name: 'Edinburgh Castle', duration: '3 hours', bestTime: '9:30 AM', entryFee: '£19.50' },
    { name: 'Royal Mile', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Arthur’s Seat', duration: '2 hours', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Holyrood Palace', duration: '2 hours', bestTime: 'Afternoon', entryFee: '£20' },
    { name: 'Victoria Street', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'National Museum of Scotland', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' }
  ],
  travelTips: [
    'Public Transportation: Lothian Buses are reliable and cover the city well.',
    'Local Etiquette: Queue politely and respect quiet public spaces.',
    'Money-Saving: Many museums and galleries offer free entry.',
    'Weather: Conditions change quickly, so always carry a waterproof jacket.',
    'Safety Advice: The city is safe, but be cautious on steep cobbled streets when wet.',
    'Packing: Comfortable waterproof shoes are highly recommended.'
  ]
},
{
  id: 'dublin-ie',
  city: 'Dublin',
  country: 'Ireland',
  airportCode: 'DUB',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOT5JDrqmiB6bVOgLEFP2C-JtA_X9eFjvwNb0P9hHOPre0b4omi_H_IKo&s=10${cropParams}`,
  description: 'Ireland’s lively capital, famous for its historic pubs, literary heritage, Georgian architecture, and welcoming atmosphere.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to September',
  dailyBudget: 145,
  attractions: [
    { name: 'Trinity College & Book of Kells', duration: '2 hours', bestTime: '9:00 AM', entryFee: '€25' },
    { name: 'Guinness Storehouse', duration: '2.5 hours', bestTime: 'Afternoon', entryFee: '€30' },
    { name: 'Temple Bar District', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Dublin Castle', duration: '1.5 hours', bestTime: 'Morning', entryFee: '€8' },
    { name: 'St. Stephen’s Green', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Phoenix Park', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' }
  ],
  travelTips: [
    'Public Transportation: Buy a Leap Visitor Card for unlimited travel.',
    'Local Etiquette: Friendly conversations with locals are common.',
    'Money-Saving: Many museums are free to visit.',
    'Weather: Carry a rain jacket year-round.',
    'Safety Advice: Temple Bar is safe but crowded at night.',
    'Packing: Layered clothing works best due to changing weather.'
  ]
},
  {
    id: 'maldives-mv', city: 'Maldives', country: 'Maldives', airportCode: 'MLE', 
    image: `https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1600&q=80`,
    description: 'A tropical nation in the Indian Ocean composed of 26 ring-shaped atolls.',
    budget: 'Luxury', tripType: 'Beach', bestSeason: 'November to April', dailyBudget: 400,
    attractions: [
      { name: 'Hanifaru Bay (Baa Atoll)', duration: 'Half-Day', bestTime: 'June to Nov (Manta Rays)', entryFee: 'Requires Resort Tour' },
      { name: 'Maafushi (Local Island)', duration: '1-2 Days', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Malé Fish Market', duration: '1 hour', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Banana Reef (Snorkeling)', duration: '2-3 hours', bestTime: 'Morning', entryFee: 'Tour Pricing' },
      { name: 'Bioluminescent Beach (Vaadhoo)', duration: 'Evening', bestTime: 'Late Night (Late Summer)', entryFee: 'Free' },
      { name: 'Submarine Tour (Malé)', duration: '2 hours', bestTime: 'Daytime', entryFee: '~$120 USD' }
    ],
    travelTips: [
      'Alcohol Laws: The Maldives is strictly Islamic. You cannot bring alcohol into the country. It is only available at private resorts.',
      'Transfers: Seaplanes only fly during daylight. If you land after 3:30 PM, you must stay overnight in Malé.',
      'Money-Saving: Stay on a "local island" in a guesthouse instead of a luxury resort to cut costs by 80%.',
      'Dress Code: On local islands, wear modest clothing. Swimwear is only allowed on designated "Bikini Beaches."',
      'Currency: USD is accepted at all resorts, but you need Maldivian Rufiyaa (MVR) if staying on local islands.',
      'Environmental Etiquette: Never touch coral or marine life. Use reef-safe sunscreen to protect the fragile ecosystem.'
    ]
  },
  {
    id: 'goa-in', city: 'Goa', country: 'India', airportCode: 'GOI', 
    image: `https://images.unsplash.com/photo-1512343879784-a960bf40e7f2${cropParams}`,
    description: 'A coastal state in India known for its beautiful beaches, Portuguese heritage, and nightlife.',
    budget: 'Budget', tripType: 'Beach', bestSeason: 'November to February', dailyBudget: 45,
    attractions: [
      { name: 'Baga & Calangute Beaches', duration: 'Half-Day', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Basilica of Bom Jesus', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Dudhsagar Waterfalls', duration: 'Half-Day', bestTime: 'Post-Monsoon (Oct-Nov)', entryFee: '₹400 (Jeep Safari)' },
      { name: 'Anjuna Flea Market', duration: '2-3 hours', bestTime: 'Wednesday Afternoons', entryFee: 'Free' },
      { name: 'Aguada Fort', duration: '1.5 hours', bestTime: 'Late Afternoon', entryFee: '₹25' },
      { name: 'Palolem Beach (South Goa)', duration: 'Full Day', bestTime: 'Morning', entryFee: 'Free' }
    ],
    travelTips: [
      'Transport: Rent a scooter to explore freely, but wear a helmet and carry an International Driving Permit. Police checks are frequent.',
      'Regions: North Goa is for parties and crowds; South Goa is for quiet luxury and pristine, empty beaches.',
      'Best Food: Try Goan Fish Curry, Pork Vindaloo, and Feni (a local spirit made from cashews).',
      'Tourist Scams: Avoid touts offering cheap tattoos or ear cleaning on the beach.',
      'Currency: Carry cash (INR) for beach shacks, though UPI (digital payment) is widely used by locals.',
      'Safety Advice: Do not swim in the ocean during the monsoon season (June to September) due to lethal undercurrents.'
    ]
  },
  {
    id: 'jaipur-in', city: 'Jaipur', country: 'India', airportCode: 'JAI', 
    image: `https://images.unsplash.com/photo-1477587458883-47145ed94245${cropParams}`,
    description: 'The "Pink City" of India, known for its royal heritage and stunning palaces.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'October to March', dailyBudget: 40,
    attractions: [
      { name: 'Amber Palace (Amer Fort)', duration: '3 hours', bestTime: '8:00 AM', entryFee: '₹500 (Foreigners)' },
      { name: 'Hawa Mahal (Palace of Winds)', duration: '1 hour', bestTime: 'Morning (for the best light)', entryFee: '₹200 (Foreigners)' },
      { name: 'City Palace', duration: '2 hours', bestTime: 'Afternoon', entryFee: '₹700 (Foreigners)' },
      { name: 'Jantar Mantar Observatory', duration: '1 hour', bestTime: 'Mid-day', entryFee: '₹200 (Foreigners)' },
      { name: 'Nahargarh Fort', duration: '2 hours', bestTime: 'Sunset', entryFee: '₹200 (Foreigners)' },
      { name: 'Patrika Gate', duration: '1 hour', bestTime: 'Early Morning (for photos)', entryFee: 'Free' }
    ],
    travelTips: [
      'Public Transportation: Use Uber or Ola apps to book autos and cabs to avoid haggling and overcharging.',
      'Shopping: Jaipur is famous for gems, textiles, and pottery. Bargain aggressively at Johari and Bapu Bazaars (offer 40% of the asking price).',
      'Local Etiquette: Dress modestly. Women should cover shoulders and knees to avoid unwanted attention.',
      'Money-Saving: Buy a composite tourist ticket if you plan to visit multiple monuments over two days.',
      'Best Food: Try Dal Bati Churma and local Kachoris at Rawat Mishthan Bhandar.',
      'Health Safety: Drink only sealed bottled water and avoid street food that uses unboiled water or ice.'
    ]
  },
  {
    id: 'kerala-in', city: 'Kerala', country: 'India', airportCode: 'COK', 
    image: `https://images.unsplash.com/photo-1602216056096-3b40cc0c9944${cropParams}`,
    description: 'Known for its palm-lined beaches and tranquil backwaters.',
    budget: 'Moderate', tripType: 'Nature', bestSeason: 'September to March', dailyBudget: 60,
    attractions: [
      { name: 'Alleppey Backwaters', duration: 'Overnight', bestTime: 'Afternoon Boarding', entryFee: '₹7000+ (Houseboat Rental)' },
      { name: 'Munnar Tea Plantations', duration: 'Half-Day', bestTime: 'Early Morning', entryFee: 'Free / ₹150 for museums' },
      { name: 'Fort Kochi', duration: '3 hours', bestTime: 'Sunset (Chinese Fishing Nets)', entryFee: 'Free' },
      { name: 'Periyar National Park', duration: 'Half-Day', bestTime: 'Morning Safari', entryFee: '₹500 (Foreigners)' },
      { name: 'Varkala Cliff Beach', duration: 'Full Day', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Athirappilly Waterfalls', duration: '2 hours', bestTime: 'Post-Monsoon', entryFee: '₹50' }
    ],
    travelTips: [
      'Transport: Distances are long and roads are winding. Hire a private driver for multi-day trips; it is surprisingly affordable.',
      'Local Etiquette: Kerala is highly educated and conservative. Modest clothing is expected, especially in rural areas.',
      'Best Food: Kerala cuisine uses heavy coconut and spices. Try Appam with Stew and Kerala Fish Curry.',
      'Health: Mosquito repellent is mandatory year-round to protect against Dengue.',
      'Alcohol: Kerala has strict liquor laws. Alcohol is heavily taxed and usually only available in 4-star+ hotels or state-run shops.',
      'Weather: Monsoons (June-August) are incredibly heavy, but they make the landscape violently green and beautiful for Ayurvedic retreats.'
    ]
  },

  // --- EUROPE ---
  {
    id: 'paris-fr', city: 'Paris', country: 'France', airportCode: 'CDG',
    image: `https://images.unsplash.com/photo-1499856871958-5b9627545d1a${cropParams}`,
    description: 'France\'s capital, a major European city and global center for art, fashion, gastronomy and culture.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'April to June', dailyBudget: 160,
    attractions: [
      { name: 'Eiffel Tower', duration: '2-3 hours', bestTime: 'Dusk (to see the sparkle)', entryFee: '€28 (Top Floor Elevator)' },
      { name: 'Louvre Museum', duration: '4-5 hours', bestTime: 'Wednesday/Friday evenings (less crowded)', entryFee: '€22' },
      { name: 'Notre-Dame & Sainte-Chapelle', duration: '2 hours', bestTime: 'Morning (sunny day for stained glass)', entryFee: '€11.50' },
      { name: 'Montmartre & Sacré-Cœur', duration: '3 hours', bestTime: 'Early Morning', entryFee: 'Free' },
      { name: 'Musée d\'Orsay', duration: '3 hours', bestTime: 'Tuesday morning', entryFee: '€16' },
      { name: 'Palace of Versailles', duration: 'Full Day', bestTime: '9:00 AM (Book months ahead)', entryFee: '€21' }
    ],
    travelTips: [
      'Local Etiquette: Always say "Bonjour" when entering a shop or restaurant. It is considered deeply rude not to.',
      'Public Transportation: The Paris Metro is extensive. Buy a Navigo Easy pass and tap your way around.',
      'Tourist Scams: Watch out for the "petition scam" and the "string bracelet scam" around Montmartre and the Eiffel Tower.',
      'Tipping: Service is legally included (service compris) in all bills. Leave a few extra Euros only for exceptional service.',
      'Safety: Pickpocketing is rampant on Metro Line 1 and 4. Keep your phone and wallet secured in zipped inner pockets.',
      'Food: Skip breakfast at your hotel and visit a local boulangerie for a fresh €1.50 croissant.'
    ]
  },
  {
    id: 'london-uk', city: 'London', country: 'UK', airportCode: 'LHR',
    image: `https://images.unsplash.com/photo-1513635269975-59663e0ac1ad${cropParams}`,
    description: 'The capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'May to September', dailyBudget: 170,
    attractions: [
      { name: 'Tower of London', duration: '3 hours', bestTime: '9:00 AM', entryFee: '£33.60' },
      { name: 'British Museum', duration: '4 hours', bestTime: 'Weekday mornings', entryFee: 'Free (Donation suggested)' },
      { name: 'London Eye', duration: '1 hour', bestTime: 'Sunset', entryFee: '£32' },
      { name: 'Westminster Abbey', duration: '2 hours', bestTime: 'Morning', entryFee: '£27' },
      { name: 'Natural History Museum', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Borough Market', duration: '2 hours', bestTime: 'Lunchtime (Wednesday-Saturday)', entryFee: 'Pay per item' }
    ],
    travelTips: [
      'Public Transportation: Do not buy paper tickets. Simply tap your contactless credit card or Apple Pay at the Tube barriers.',
      'Local Etiquette: Stand on the RIGHT on escalators. Blocking the left side will anger commuting Londoners.',
      'Money-Saving: Almost all major national museums and art galleries are completely free to enter.',
      'Weather: It rains often but usually in short bursts. Dress in layers and carry a compact umbrella.',
      'Food: London has incredible international cuisine. Brick Lane is famous for curry, and Soho for upscale dining.',
      'Safety Advice: Look RIGHT before crossing the street. The traffic flows opposite to most of the world.'
    ]
  },
  {
    id: 'rome-it', city: 'Rome', country: 'Italy', airportCode: 'FCO',
    image: `https://images.unsplash.com/photo-1552832230-c0197dd311b5${cropParams}`,
    description: 'The capital of Italy is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art and architecture.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'September to November', dailyBudget: 120,
    attractions: [
      { name: 'The Colosseum & Roman Forum', duration: '3-4 hours', bestTime: 'Early Morning (Pre-book online)', entryFee: '€18' },
      { name: 'Vatican Museums & Sistine Chapel', duration: '4 hours', bestTime: 'Tuesday/Thursday afternoons', entryFee: '€17' },
      { name: 'Trevi Fountain', duration: '30 mins', bestTime: '7:00 AM (To avoid the massive crowds)', entryFee: 'Free' },
      { name: 'Pantheon', duration: '1 hour', bestTime: 'Morning', entryFee: '€5' },
      { name: 'Borghese Gallery', duration: '2 hours', bestTime: 'Requires mandatory pre-booking', entryFee: '€15' },
      { name: 'Piazza Navona', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Water: Rome has hundreds of "nasoni" (free public fountains). Carry a reusable bottle and fill up safely anywhere.',
      'Local Food: Do not order a cappuccino after 11:00 AM. Italians only drink milk-heavy coffee at breakfast.',
      'Money-Saving: Sit-down cafes charge a premium. Drink your espresso standing at the bar like a local for €1.50.',
      'Tourist Scams: Avoid restaurants with pictures of food on the menu or waiters standing outside trying to pull you in.',
      'Dress Code: The Vatican and major churches require knees and shoulders to be covered for both men and women.',
      'Transportation: The Metro is limited due to ancient ruins. You will walk immensely; wear thick-soled shoes for cobblestones.'
    ]
  },
  {
  id: 'stockholm-se',
  city: 'Stockholm',
  country: 'Sweden',
  airportCode: 'ARN',
  image: `https://images.unsplash.com/photo-1509356843151-3e7d96241e11${cropParams}`,
  description: 'Sweden’s beautiful capital spread across islands, offering royal history, waterfront views, and Scandinavian culture.',
  budget: 'Luxury',
  tripType: 'City',
  bestSeason: 'May to September',
  dailyBudget: 170,
  attractions: [
    { name: 'Gamla Stan', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Vasa Museum', duration: '2 hours', bestTime: 'Morning', entryFee: 'SEK 190' },
    { name: 'Royal Palace', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'SEK 200' },
    { name: 'ABBA Museum', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'SEK 250' },
    { name: 'Skansen Open-Air Museum', duration: '3 hours', bestTime: 'Morning', entryFee: 'SEK 285' },
    { name: 'City Hall', duration: '1 hour', bestTime: 'Morning', entryFee: 'SEK 150' }
  ],
  travelTips: [
    'Use an SL Travel Card.',
    'Most places are cashless.',
    'Summer has long daylight hours.',
    'Book museums online.',
    'Public transport is excellent.',
    'Bring warm clothing outside summer.'
  ]
},
  {
    id: 'venice-it', city: 'Venice', country: 'Italy', airportCode: 'VCE', 
    image: `https://images.unsplash.com/photo-1514890547357-a9ee288728e0${cropParams}`,
    description: 'Built on more than 100 small islands in a lagoon in the Adriatic Sea, with no roads, just canals.',
    budget: 'Luxury', tripType: 'Culture', bestSeason: 'September to November', dailyBudget: 180,
    attractions: [
      { name: 'St. Mark\'s Basilica', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free (Museum/Terrace €7)' },
      { name: 'Doge\'s Palace', duration: '2-3 hours', bestTime: 'Early Afternoon', entryFee: '€30' },
      { name: 'Rialto Bridge', duration: '1 hour', bestTime: 'Sunrise', entryFee: 'Free' },
      { name: 'Grand Canal (Vaporetto Ride)', duration: '1 hour', bestTime: 'Sunset', entryFee: '€9.50' },
      { name: 'Murano & Burano Islands', duration: 'Half-Day', bestTime: 'Morning Tour', entryFee: 'Vaporetto Ticket' },
      { name: 'Libreria Acqua Alta', duration: '30 mins', bestTime: 'Mid-morning', entryFee: 'Free' }
    ],
    travelTips: [
      'Navigation: Google Maps is notoriously bad in Venice’s narrow alleys. Just follow the yellow signs pointing to San Marco or Rialto.',
      'Transportation: There are no cars. Buy a Vaporetto (water bus) multi-day pass to save money on canal transport.',
      'Gondolas: A standard gondola ride is fixed at €80 for 30 minutes (daytime) and €100 (night). Do not get scammed.',
      'Money-Saving: Eat Cicchetti (Venetian tapas) at local bacari for €2-€3 a piece instead of expensive sit-down meals.',
      'Luggage: Do not bring massive rolling suitcases; you will have to drag them over dozens of arched bridges with stairs.',
      'Environment: High tide (Acqua Alta) floods the city in late autumn/winter. Bring waterproof boots if visiting then.'
    ]
  },
  {
    id: 'milan-it', city: 'Milan', country: 'Italy', airportCode: 'MXP', 
    image: `https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1600&q=80`,
    description: 'A metropolis in Italy\'s northern Lombardy region, is a global capital of fashion and design.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'April to May', dailyBudget: 150,
    attractions: [
      { name: 'Duomo di Milano', duration: '2 hours', bestTime: 'Morning (Book rooftop access)', entryFee: '€20 (Rooftop + Cathedral)' },
      { name: 'Galleria Vittorio Emanuele II', duration: '1 hour', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'The Last Supper (Santa Maria delle Grazie)', duration: '1 hour', bestTime: 'Must book months in advance', entryFee: '€15' },
      { name: 'Sforzesco Castle', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free (Museums €5)' },
      { name: 'Navigli District', duration: '2-3 hours', bestTime: 'Evening (Aperitivo time)', entryFee: 'Free' },
      { name: 'Pinacoteca di Brera', duration: '2 hours', bestTime: 'Morning', entryFee: '€15' }
    ],
    travelTips: [
      'Aperitivo Culture: Around 6 PM to 8 PM, buy a cocktail (€10-€15) and get access to a massive free buffet of food.',
      'Public Transportation: The Metro is excellent. You can use contactless payments at the gates.',
      'Shopping: The Quadrilatero d\'Oro is for window shopping luxury brands. Head to Corso Buenos Aires for affordable retail.',
      'Mosquitoes: If visiting in the summer, Milan has a surprising amount of mosquitoes due to nearby rice paddies. Bring repellent.',
      'Airports: MXP is far from the city center. Take the Malpensa Express train (€13) rather than a €100+ taxi.',
      'Scams: Ignore people trying to force bracelets onto your wrist or hand you "free" birdseed in front of the Duomo.'
    ]
  },
  {
    id: 'barcelona-es', city: 'Barcelona', country: 'Spain', airportCode: 'BCN', 
    image: `https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1600&q=80`,
    description: 'The cosmopolitan capital of Spain’s Catalonia region, known for its art and architecture.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'May to June', dailyBudget: 110,
    attractions: [
      { name: 'La Sagrada Familia', duration: '2 hours', bestTime: 'Late Afternoon (for stained glass lighting)', entryFee: '€26' },
      { name: 'Park Güell', duration: '2 hours', bestTime: '8:00 AM', entryFee: '€10' },
      { name: 'Gothic Quarter (Barri Gòtic)', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Casa Batlló', duration: '1.5 hours', bestTime: 'Morning', entryFee: '€29' },
      { name: 'Mercado de La Boqueria', duration: '1 hour', bestTime: 'Morning (closed Sundays)', entryFee: 'Pay per item' },
      { name: 'Barceloneta Beach', duration: '2-3 hours', bestTime: 'Late Afternoon', entryFee: 'Free' }
    ],
    travelTips: [
      'Safety Advice: Barcelona is the pickpocketing capital of Europe, especially on Las Ramblas and the Metro. Keep bags zipped and in front of you.',
      'Dining Hours: Spaniards eat very late. Lunch is at 2 PM; Dinner doesn’t start until 9 PM or 10 PM.',
      'Local Language: Catalan is spoken here, not just Spanish. Learning "Bon dia" (Good morning) goes a long way.',
      'Money-Saving: Look for the "Menú del Día" (Menu of the Day) at lunchtime for a massive 3-course meal with wine for €12-€15.',
      'Pre-Booking: You MUST book Sagrada Familia and Park Güell online weeks in advance; they sell out daily.',
      'Tipping: Not mandatory. Rounding up to the nearest Euro is sufficient for coffee or tapas.'
    ]
  },
  {
  id: 'copenhagen-dk',
  city: 'Copenhagen',
  country: 'Denmark',
  airportCode: 'CPH',
  image: `https://images.unsplash.com/photo-1513622470522-26c3c8a854bc${cropParams}`,
  description: 'A stylish Scandinavian capital known for colorful waterfronts, cycling culture, royal palaces, and modern design.',
  budget: 'Luxury',
  tripType: 'City',
  bestSeason: 'May to August',
  dailyBudget: 170,
  attractions: [
    { name: 'Nyhavn Harbor', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Tivoli Gardens', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'DKK 165' },
    { name: 'The Little Mermaid', duration: '30 mins', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Rosenborg Castle', duration: '2 hours', bestTime: 'Morning', entryFee: 'DKK 140' },
    { name: 'Christiansborg Palace', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'DKK 175' },
    { name: 'Strøget Shopping Street', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Rent a bicycle to explore the city like a local.',
    'Use the Copenhagen Card for attractions and transport.',
    'Tap water is safe and free.',
    'Card payments are accepted almost everywhere.',
    'Summer sunsets are very late.',
    'Pack a windproof jacket even in summer.'
  ]
},
  {
    id: 'madrid-es', city: 'Madrid', country: 'Spain', airportCode: 'MAD', 
    image: `https://images.unsplash.com/photo-1539037116277-4db20889f2d4${cropParams}`,
    description: 'Spain\'s central capital, a city of elegant boulevards and expansive, manicured parks.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'September to November', dailyBudget: 100,
    attractions: [
      { name: 'Prado Museum', duration: '3-4 hours', bestTime: 'Morning (or 6 PM-8 PM for free entry)', entryFee: '€15' },
      { name: 'Royal Palace of Madrid', duration: '2 hours', bestTime: 'Morning', entryFee: '€12' },
      { name: 'Retiro Park', duration: '2-3 hours', bestTime: 'Sunday Afternoon', entryFee: 'Free' },
      { name: 'Plaza Mayor', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Mercado de San Miguel', duration: '1.5 hours', bestTime: 'Lunchtime', entryFee: 'Pay per item' },
      { name: 'Santiago Bernabéu Stadium', duration: '2 hours', bestTime: 'Non-match days', entryFee: '€25' }
    ],
    travelTips: [
      'Tapas Culture: In many traditional bars (especially in La Latina), you receive a free plate of tapas with every drink you order.',
      'Weather: Madrid is brutally hot in July and August (often over 40°C/104°F) and freezing in winter. Spring/Fall is best.',
      'Public Transportation: The Madrid Metro is cheap and expansive. Buy a Multi Card and load a 10-journey ticket.',
      'Siesta: Many smaller shops close between 2 PM and 5 PM. Major chains and museums remain open.',
      'Local Drink: Try Vermouth on tap (Vermut de grifo) as a pre-lunch aperitif.',
      'Safety: Very safe, but beware of pickpockets in crowded tourist hubs like Puerta del Sol.'
    ]
  },
  {
    id: 'amsterdam-nl', city: 'Amsterdam', country: 'Netherlands', airportCode: 'AMS', 
    image: `https://images.unsplash.com/photo-1512470876302-972faa2aa9a4${cropParams}`,
    description: 'Known for its artistic heritage, elaborate canal system and narrow houses.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'April to May', dailyBudget: 130,
    attractions: [
      { name: 'Rijksmuseum', duration: '3 hours', bestTime: 'Early Morning', entryFee: '€22.50' },
      { name: 'Anne Frank House', duration: '2 hours', bestTime: 'Must book exactly 6 weeks in advance', entryFee: '€16' },
      { name: 'Van Gogh Museum', duration: '2 hours', bestTime: 'Morning', entryFee: '€22' },
      { name: 'Vondelpark', duration: '1-2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Canal Cruise', duration: '1.5 hours', bestTime: 'Sunset', entryFee: '€15 - €20' },
      { name: 'Jordaan Neighborhood', duration: '3 hours', bestTime: 'Daytime exploration', entryFee: 'Free' }
    ],
    travelTips: [
      'Bicycle Safety: Never walk in the reddish-colored bike lanes. Locals bike fast and will aggressively ring their bells at oblivious tourists.',
      'Drugs & Red Light District: Respect the workers in De Wallen (no photography). Weed is sold in "Coffeeshops," not cafes.',
      'Museum Booking: The Anne Frank House and Van Gogh Museum do NOT sell tickets at the door. You must book online weeks prior.',
      'Public Transport: Use the GVB app for trams and buses. Check-in AND check-out with your contactless card.',
      'Weather: It is famously windy and rainy. Leave the umbrella (it will break) and pack a high-quality raincoat.',
      'Currency: Many Dutch supermarkets (like Albert Heijn) do not accept Visa/Mastercard credit cards, only Maestro or Cash.'
    ]
  },
  {
  id: 'oslo-no',
  city: 'Oslo',
  country: 'Norway',
  airportCode: 'OSL',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwuRftF8wx5edD45gduNy5d1JLCPhewo-M3zTHnAMMn4wUxHgCHX87bco&s=10${cropParams}`,
  description: 'Norway’s modern capital surrounded by forests and fjords, offering museums, Viking history, and stunning waterfront views.',
  budget: 'Luxury',
  tripType: 'City',
  bestSeason: 'June to August',
  dailyBudget: 190,
  attractions: [
    { name: 'Oslo Opera House', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Vigeland Sculpture Park', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Akershus Fortress', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Fram Museum', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'NOK 180' },
    { name: 'MUNCH Museum', duration: '2 hours', bestTime: 'Morning', entryFee: 'NOK 180' },
    { name: 'Karl Johans Gate', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Buy an Oslo Pass.',
    'Norway is almost cashless.',
    'Public transport is punctual.',
    'Bring waterproof clothing.',
    'Restaurants are expensive.',
    'Nature is easily accessible from downtown.'
  ]
},
{
  id: 'honolulu-us',
  city: 'Honolulu',
  country: 'USA',
  airportCode: 'HNL',
  image: `https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_27/1351353/oahu-hawaii-today-180706-tease.jpg${cropParams}`,
  description: 'A tropical paradise combining world-famous beaches, volcanic landscapes, Hawaiian culture, and unforgettable sunsets.',
  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'April to October',
  dailyBudget: 230,
  attractions: [
    { name: 'Waikiki Beach', duration: 'Half Day', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Diamond Head', duration: '2 hours', bestTime: 'Sunrise', entryFee: '$5' },
    { name: 'Pearl Harbor', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Hanauma Bay', duration: '4 hours', bestTime: 'Morning', entryFee: '$25' },
    { name: 'North Shore', duration: 'Half Day', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Iolani Palace', duration: '2 hours', bestTime: 'Morning', entryFee: '$27' }
  ],
  travelTips: [
    'Rent a car.',
    'Use reef-safe sunscreen.',
    'Respect local traditions.',
    'Book Pearl Harbor tickets early.',
    'Carry swimwear daily.',
    'Sunrise hikes are worth it.'
  ]
},
{
  id: 'montreal-ca',
  city: 'Montreal',
  country: 'Canada',
  airportCode: 'YUL',
  image: `https://images.unsplash.com/photo-1519178614-68673b201f36${cropParams}`,
  description: 'A vibrant French-speaking city known for festivals, historic streets, excellent food, and European charm.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to October',
  dailyBudget: 145,
  attractions: [
    { name: 'Old Montreal', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Notre-Dame Basilica', duration: '1 hour', bestTime: 'Morning', entryFee: 'CA$16' },
    { name: 'Mount Royal', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Jean-Talon Market', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Biodome', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'CA$25' },
    { name: 'Old Port', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Metro is efficient.',
    'Learn basic French greetings.',
    'Try authentic poutine.',
    'Summer hosts many festivals.',
    'Carry a light jacket.',
    'Many attractions are walkable.'
  ]
},
{
  id: 'santiago-cl',
  city: 'Santiago',
  country: 'Chile',
  airportCode: 'SCL',
  image: `https://i.natgeofe.com/n/424e1067-ad19-4e73-a091-78a3cf99f9f9/coverstory_chile_GettyImages-2018683965_ukHR.jpg${cropParams}`,
  description: 'Chile’s modern capital surrounded by the Andes, offering vibrant culture, excellent food, nearby vineyards, and mountain adventures.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'September to April',
  dailyBudget: 95,
  attractions: [
    { name: 'San Cristóbal Hill', duration: '2 hours', bestTime: 'Sunset', entryFee: 'CLP 5,000' },
    { name: 'Plaza de Armas', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'La Moneda Palace', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Sky Costanera', duration: '1 hour', bestTime: 'Sunset', entryFee: 'CLP 18,000' },
    { name: 'Bellavista', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Concha y Toro Winery', duration: 'Half Day', bestTime: 'Morning', entryFee: 'CLP 25,000' }
  ],
  travelTips: [
    'Use the Metro.',
    'Visit nearby vineyards.',
    'Carry layers.',
    'Book winery tours early.',
    'Avoid rush hour traffic.',
    'Mountain weather changes quickly.'
  ]
},
{
  id: 'budapest-hu',
  city: 'Budapest',
  country: 'Hungary',
  airportCode: 'BUD',
  image: `https://images.unsplash.com/photo-1549877452-9c387954fbc2${cropParams}`,
  description: 'Hungary’s stunning capital, famous for thermal baths, grand architecture, riverside views, and vibrant nightlife.',
  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'April to October',
  dailyBudget: 80,
  attractions: [
    { name: 'Parliament Building', duration: '2 hours', bestTime: 'Morning', entryFee: '€28' },
    { name: 'Buda Castle', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Fisherman’s Bastion', duration: '1 hour', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Széchenyi Thermal Bath', duration: '3 hours', bestTime: 'Afternoon', entryFee: '€32' },
    { name: 'Chain Bridge', duration: '30 mins', bestTime: 'Night', entryFee: 'Free' },
    { name: 'Heroes’ Square', duration: '45 mins', bestTime: 'Morning', entryFee: 'Free' }
  ],
  travelTips: [
    'Use Budapest Card.',
    'Public transport is cheap.',
    'Try local goulash.',
    'Carry some cash.',
    'Visit thermal baths early.',
    'Book Parliament tours ahead.'
  ]
},
  {
    id: 'prague-cz', city: 'Prague', country: 'Czech Republic', airportCode: 'PRG', 
    image: `https://images.unsplash.com/photo-1519677100203-a0e668c92439${cropParams}`,
    description: 'Nicknamed "the City of a Hundred Spires," known for its Old Town Square.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'May to September', dailyBudget: 70,
    attractions: [
      { name: 'Charles Bridge', duration: '1 hour', bestTime: '6:00 AM (to beat the crowds)', entryFee: 'Free' },
      { name: 'Prague Castle', duration: '3-4 hours', bestTime: 'Morning', entryFee: '250 CZK' },
      { name: 'Old Town Square & Astr. Clock', duration: '1.5 hours', bestTime: 'On the hour (for the clock show)', entryFee: 'Free' },
      { name: 'St. Vitus Cathedral', duration: '1 hour', bestTime: 'Morning', entryFee: 'Included in Castle Ticket' },
      { name: 'Letna Park', duration: '2 hours', bestTime: 'Sunset (Best views and beer garden)', entryFee: 'Free' },
      { name: 'Jewish Quarter (Josefov)', duration: '2 hours', bestTime: 'Afternoon (Closed Saturdays)', entryFee: '500 CZK' }
    ],
    travelTips: [
      'Currency Scams: Do not use Euronet ATMs; they charge massive hidden conversion fees. Use official bank ATMs only.',
      'Beer Culture: Beer (Pivo) is cheaper than water. Try Pilsner Urquell at a local hospoda.',
      'Tipping: Round up the bill or leave 10%. Hand the tip directly to the waiter or tell them the total amount when paying.',
      'Exchange Scams: Never exchange money on the street. Use "Honest Guide" recommended places like Exchange s.r.o. near Old Town.',
      'Public Transport: Buy a 24 or 72-hour pass, and ALWAYS validate the yellow ticket in the machine before boarding the tram.',
      'Local Food: Try Svíčková (beef in cream sauce) and avoid Trdelník (chimney cake), which is a tourist invention, not Czech.'
    ]
  },
  {
    id: 'vienna-at', city: 'Vienna', country: 'Austria', airportCode: 'VIE', 
    image: `https://images.unsplash.com/photo-1516550893923-42d28e5677af${cropParams}`,
    description: 'Austria’s capital lies in the country’s east on the Danube River, shaped by intellectual and musical legacies.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'April to October', dailyBudget: 110,
    attractions: [
      { name: 'Schönbrunn Palace', duration: '3 hours', bestTime: 'Early Morning', entryFee: '€22' },
      { name: 'Hofburg Palace', duration: '2-3 hours', bestTime: 'Morning', entryFee: '€17.50' },
      { name: 'St. Stephen\'s Cathedral', duration: '1 hour', bestTime: 'Daytime', entryFee: 'Free (Towers/Catacombs €6+)' },
      { name: 'Belvedere Palace', duration: '2 hours', bestTime: 'Afternoon (To see Klimt\'s "The Kiss")', entryFee: '€18' },
      { name: 'Vienna State Opera', duration: '3 hours', bestTime: 'Evening (Performance)', entryFee: '€15 - €250 (Standing room €4)' },
      { name: 'Prater Amusement Park', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free entry (Pay per ride)' }
    ],
    travelTips: [
      'Coffee House Culture: Ordering just "coffee" doesn\'t work. Order a Melange (similar to cappuccino). You can sit for hours without being rushed.',
      'Public Transport: The U-Bahn system operates on an honor system. Buy and validate your ticket; plainclothes inspectors issue €100 fines instantly.',
      'Sundays: Almost all supermarkets and retail shops are strictly closed on Sundays. Plan accordingly.',
      'Opera Hack: You can buy standing-room tickets (Stehplatz) for world-class opera performances 80 minutes before the show for just €3 to €4.',
      'Drinking Water: Vienna’s tap water comes directly from the Alps and is some of the best in the world. Do not buy bottled water.',
      'Local Etiquette: Say "Grüß Gott" when entering shops and "Auf Wiedersehen" when leaving.'
    ]
  },
  {
    id: 'santorini-gr', city: 'Santorini', country: 'Greece', airportCode: 'JTR', 
    image: `https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e${cropParams}`,
    description: 'A volcanic island in the Cyclades group of the Greek islands, famous for dramatic views and sunsets.',
    budget: 'Luxury', tripType: 'Beach', bestSeason: 'September to October', dailyBudget: 160,
    attractions: [
      { name: 'Oia Sunset', duration: '2 hours', bestTime: 'Golden Hour (Arrive 2 hours early)', entryFee: 'Free' },
      { name: 'Fira to Oia Hike', duration: '3-4 hours', bestTime: 'Early Morning (To avoid heat)', entryFee: 'Free' },
      { name: 'Akrotiri Archaeological Site', duration: '2 hours', bestTime: 'Morning', entryFee: '€12' },
      { name: 'Red Beach', duration: '1-2 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Santo Winery', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Wine tasting flights from €35' },
      { name: 'Amoudi Bay', duration: '2 hours', bestTime: 'Lunchtime', entryFee: 'Free (Seafood is pricey)' }
    ],
    travelTips: [
      'Overtourism: Oia gets unbearably crowded at sunset. Consider staying in Imerovigli or Pyrgos for identical views in peace.',
      'Water Safety: Do not drink the tap water on the island; it is desalinated and mostly for washing. Buy bottled water.',
      'Transport: Rent an ATV instead of a car to navigate the narrow roads, but drive carefully as accidents are very common.',
      'Footwear: The streets are steep cobblestone, and beaches are volcanic pebbles. Leave high heels at home; bring sturdy sandals or water shoes.',
      'Plumbing: Greek plumbing cannot handle toilet paper. You must throw all toilet paper into the provided bin, not down the toilet.',
      'Money-Saving: Eat at local Gyros shops (€3-€4) instead of cliff-side restaurants to save massive amounts of money.'
    ]
  },
  {
    id: 'mykonos-gr', city: 'Mykonos', country: 'Greece', airportCode: 'JMK', 
    image: `https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a${cropParams}`,
    description: 'An island in the Cyclades group in the Aegean Sea, popularly known for its summer party atmosphere.',
    budget: 'Luxury', tripType: 'Beach', bestSeason: 'June to September', dailyBudget: 200,
    attractions: [
      { name: 'Little Venice', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Kato Mili Windmills', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Scorpios Beach Club', duration: 'Half-Day', bestTime: 'Afternoon to Night', entryFee: 'Reservations + Min Spend €100+' },
      { name: 'Paradise Beach', duration: 'Full Day', bestTime: 'Afternoon', entryFee: 'Free (Sunbeds €30+)' },
      { name: 'Delos Island Ruins', duration: 'Half-Day', bestTime: 'Morning Tour', entryFee: '€20 (Plus ferry ticket)' },
      { name: 'Panagia Paraportiani Church', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' }
    ],
    travelTips: [
      'Transport: There are only about 30 taxis on the entire island. Book private transfers or rent a scooter/ATV.',
      'Pricing: Mykonos is significantly more expensive than other Greek islands. Expect €20+ cocktails and high sunbed fees.',
      'Wind: The "Meltemi" winds can blow fiercely in July and August. Bring a light jacket for the evenings.',
      'Party Scene: The massive beach club parties don\'t get crowded until 5 PM and run until sunrise.',
      'Accommodation: Stay in Mykonos Town (Chora) if you want to walk to dinner and bars. Stay near beaches if you want to party all day.',
      'Scams: Always ask to see the menu prices before ordering at beachfront restaurants to avoid exorbitant surprise bills.'
    ]
  },
  {
    id: 'zurich-ch', city: 'Zurich', country: 'Switzerland', airportCode: 'ZRH', 
    image: `https://images.unsplash.com/photo-1515488764276-beab7607c1e6${cropParams}`,
    description: 'A global center for banking and finance, located at the north end of Lake Zurich.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'June to August', dailyBudget: 220,
    attractions: [
      { name: 'Lake Zurich Promenade', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free (Boat rides vary)' },
      { name: 'Old Town (Altstadt)', duration: '2-3 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Grossmünster', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free (Tower 5 CHF)' },
      { name: 'Kunsthaus Zurich (Art Museum)', duration: '2 hours', bestTime: 'Afternoon', entryFee: '23 CHF' },
      { name: 'Uetliberg Mountain', duration: 'Half-Day', bestTime: 'Clear Days', entryFee: 'Free (Train ticket ~9 CHF)' },
      { name: 'Bahnhofstrasse', duration: '2 hours', bestTime: 'Daytime', entryFee: 'Free to window shop' }
    ],
    travelTips: [
      'Cost: Zurich is one of the most expensive cities on earth. Eating at casual sit-down restaurants will cost 30-50 CHF per person.',
      'Money-Saving: Buy food from Migros or Coop supermarkets. Note that Migros does not sell alcohol.',
      'Public Transport: The Swiss railway and tram system is impeccably precise. Buy a Zurich Card for unlimited local transport.',
      'Drinking Water: There are over 1,200 public fountains dispensing pristine alpine drinking water. Never buy bottled water.',
      'Language: Swiss-German is spoken here. It is significantly different from High German, though English is universally understood.',
      'Sundays: The city essentially shuts down on Sundays. Only restaurants and shops inside the main train station remain open.'
    ]
  },
  {
    id: 'interlaken-ch', city: 'Interlaken', country: 'Switzerland', airportCode: 'ZRH', 
    image: `https://images.unsplash.com/photo-1527668752968-14dc70a27c95${cropParams}`,
    description: 'A traditional resort town in the mountainous Bernese Oberland region of central Switzerland.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'June to September', dailyBudget: 180,
    attractions: [
      { name: 'Jungfraujoch (Top of Europe)', duration: 'Full Day', bestTime: 'Early Morning (Check weather first)', entryFee: '~210 CHF' },
      { name: 'Harder Kulm', duration: '2 hours', bestTime: 'Sunset', entryFee: '40 CHF (Funicular round trip)' },
      { name: 'Lauterbrunnen Valley', duration: 'Half-Day', bestTime: 'Morning', entryFee: 'Free (Train ticket needed)' },
      { name: 'Lake Thun / Lake Brienz Boat Ride', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free with Swiss Travel Pass' },
      { name: 'Paragliding', duration: '2 hours', bestTime: 'Clear Days', entryFee: '~170 CHF' },
      { name: 'Grindelwald First', duration: 'Half-Day', bestTime: 'Morning', entryFee: '64 CHF (Cable car)' }
    ],
    travelTips: [
      'Base Camp: Interlaken itself is a transit hub. The real magic is in the surrounding villages like Wengen or Mürren.',
      'Swiss Travel Pass: If you are taking multiple mountain trains and boats, this pass will save you hundreds of dollars.',
      'Weather Dependency: Never buy tickets to Jungfraujoch or Schilthorn in advance. Check the live webcams in the morning; if it is cloudy, you won\'t see anything.',
      'Adventure Capital: This is the best place in Europe for skydiving, canyoning, and paragliding. Book activities upon arrival.',
      'Currency: Switzerland uses the Swiss Franc (CHF), not the Euro. Cards are accepted everywhere.',
      'Hiking: Stick to the marked trails (yellow signs for easy walking, red-and-white for mountain trails requiring boots).'
    ]
  },
  {
  id: 'beijing-cn',
  city: 'Beijing',
  country: 'China',
  airportCode: 'PEK',
  image: `https://images.unsplash.com/photo-1508804185872-d7badad00f7d${cropParams}`,
  description: 'China’s historic capital, home to imperial palaces, the Great Wall, ancient temples, and rich cultural heritage.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'April to May',
  dailyBudget: 110,
  attractions: [
    { name: 'Great Wall of China (Mutianyu)', duration: 'Half Day', bestTime: '8:00 AM', entryFee: '¥45' },
    { name: 'Forbidden City', duration: '3 hours', bestTime: 'Morning', entryFee: '¥60' },
    { name: 'Temple of Heaven', duration: '2 hours', bestTime: 'Morning', entryFee: '¥34' },
    { name: 'Summer Palace', duration: '3 hours', bestTime: 'Afternoon', entryFee: '¥30' },
    { name: 'Tiananmen Square', duration: '1 hour', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Wangfujing Street', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Use the subway for fast travel.',
    'Carry your passport.',
    'Install Alipay or WeChat Pay.',
    'Visit the Great Wall early.',
    'Avoid major holidays.',
    'Use translation apps.'
  ]
},
{
  id: 'colombo-lk',
  city: 'Colombo',
  country: 'Sri Lanka',
  airportCode: 'CMB',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjn-b46ucBVlEVL5NIzPMJu9PSSVoc-OqUsa53KmsYQDEZ6zS_3EjLVWM&s=10${cropParams}`,
  description: 'Sri Lanka’s vibrant capital blending colonial history, oceanfront views, bustling markets, and modern city life.',
  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'December to March',
  dailyBudget: 55,
  attractions: [
    { name: 'Galle Face Green', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Gangaramaya Temple', duration: '1 hour', bestTime: 'Morning', entryFee: 'LKR 400' },
    { name: 'Pettah Market', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Lotus Tower', duration: '1 hour', bestTime: 'Evening', entryFee: 'LKR 2000' },
    { name: 'National Museum', duration: '2 hours', bestTime: 'Morning', entryFee: 'LKR 1500' },
    { name: 'Independence Square', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Use PickMe instead of taxis.',
    'Drink bottled water.',
    'Carry small cash.',
    'Dress modestly in temples.',
    'Seafood is excellent.',
    'Watch traffic while crossing roads.'
  ]
},
  {
  id: 'boston-us',
  city: 'Boston',
  country: 'USA',
  airportCode: 'BOS',
  image: `https://static.toiimg.com/thumb/45201205/.jpg?resizemode=4&width=800${cropParams}`,
  description: 'A historic American city filled with colonial landmarks, universities, waterfront views, and vibrant neighborhoods.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to October',
  dailyBudget: 170,
  attractions: [
    { name: 'Freedom Trail', duration: '4 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Boston Common', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Harvard University', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Fenway Park', duration: '2 hours', bestTime: 'Afternoon', entryFee: '$30+' },
    { name: 'Quincy Market', duration: '2 hours', bestTime: 'Lunch', entryFee: 'Free' },
    { name: 'Boston Harbor Cruise', duration: '2 hours', bestTime: 'Evening', entryFee: '$40+' }
  ],
  travelTips: [
    'Walk the Freedom Trail.',
    'Use the CharlieCard.',
    'Seafood is a must-try.',
    'Book baseball tickets early.',
    'Carry layers in spring.',
    'Most attractions are walkable.'
  ]
},
  {
    id: 'istanbul-tr', city: 'Istanbul', country: 'Turkey', airportCode: 'IST', 
    image: `https://images.unsplash.com/photo-1524231757912-21f4fe3a7200${cropParams}`,
    description: 'A major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'September to November', dailyBudget: 50,
    attractions: [
      { name: 'Hagia Sophia', duration: '1-2 hours', bestTime: 'Early Morning', entryFee: '€25 (Foreigner tourist fee)' },
      { name: 'Blue Mosque', duration: '1 hour', bestTime: 'Avoid prayer times', entryFee: 'Free' },
      { name: 'Topkapi Palace', duration: '3 hours', bestTime: 'Morning', entryFee: '1500 TRY' },
      { name: 'Grand Bazaar', duration: '2-3 hours', bestTime: 'Afternoon (Closed Sundays)', entryFee: 'Free' },
      { name: 'Bosphorus Cruise', duration: '1.5 hours', bestTime: 'Sunset', entryFee: '150 TRY (Public Ferry)' },
      { name: 'Galata Tower', duration: '1 hour', bestTime: 'Sunset', entryFee: '€30' }
    ],
    travelTips: [
      'Scams to Avoid: Ignore overly friendly strangers offering to take you to a bar, and ignore shoeshiners who "accidentally" drop their brush.',
      'Public Transport: Buy an Istanbulkart. It works on the metro, trams, and ferries. Traffic is horrendous, so avoid taxis.',
      'Dress Code: To enter mosques, women must cover their hair, shoulders, and legs. Men must wear long pants.',
      'Stray Animals: Istanbul is famous for its well-fed, friendly street cats and dogs. Locals care for them; do not be afraid.',
      'Bargaining: Never accept the first price in the Grand Bazaar. Counter with 50% and walk away if they refuse.',
      'Local Food: Eat a Balik Ekmek (fish sandwich) near the Galata Bridge and try authentic Turkish Delight at Hafiz Mustafa.'
    ]
  },

  // --- NORTH AMERICA ---
  {
    id: 'new-york-us', city: 'New York', country: 'USA', airportCode: 'JFK',
    image: `https://images.unsplash.com/photo-1534430480872-3498386e7856?auto=format&fit=crop&w=1600&q=80`,
    description: 'The city that never sleeps, known for its towering skyscrapers, Broadway shows, and Central Park.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'September to November', dailyBudget: 200,
    attractions: [
      { name: 'Central Park', duration: '2-4 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'The Metropolitan Museum of Art', duration: '3-4 hours', bestTime: '10:00 AM Weekdays', entryFee: '$30' },
      { name: 'Empire State Building', duration: '2 hours', bestTime: 'Late Night (10 PM)', entryFee: '$44' },
      { name: 'Statue of Liberty', duration: '3 hours', bestTime: 'First ferry', entryFee: '$25' },
      { name: 'The High Line', duration: '2 hours', bestTime: 'Early Morning', entryFee: 'Free' },
      { name: 'Summit One Vanderbilt', duration: '2 hours', bestTime: 'Sunset', entryFee: '$43' }
    ],
    travelTips: [
      'Transit: Skip yellow cabs. The Subway runs 24/7. Tap your contactless card/phone at the OMNY turnstiles.',
      'Tipping: Mandatory. Leave 18%-20% at sit-down restaurants and $1-$2 per drink for bartenders.',
      'Scams: Ignore costume characters in Times Square or street CD vendors. Walk with purpose.',
      'Footwear: You will walk 15,000+ steps a day on hard concrete. Wear broken-in sneakers.',
      'Food: Save money by eating at legendary dollar-slice pizzerias and Halal food carts.',
      'Etiquette: Do not stop in the middle of the sidewalk to look at your phone. Pull over to the side.'
    ]
  },
  {
  id: 'hanoi-vn',
  city: 'Hanoi',
  country: 'Vietnam',
  airportCode: 'HAN',
  image: `https://images.unsplash.com/photo-1528127269322-539801943592${cropParams}`,
  description: 'Vietnam’s charming capital, famous for its centuries-old architecture, vibrant Old Quarter, and incredible street food.',
  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'October to April',
  dailyBudget: 45,
  attractions: [
    { name: 'Hoan Kiem Lake', duration: '1 hour', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Old Quarter', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Temple of Literature', duration: '1.5 hours', bestTime: 'Morning', entryFee: '40,000 VND' },
    { name: 'Ho Chi Minh Mausoleum', duration: '2 hours', bestTime: '8:00 AM', entryFee: 'Free' },
    { name: 'Train Street', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Water Puppet Theatre', duration: '1 hour', bestTime: 'Evening', entryFee: '100,000 VND' }
  ],
  travelTips: [
    'Cross roads slowly and confidently.',
    'Try authentic Pho and Bun Cha.',
    'Carry small cash notes.',
    'Use Grab instead of taxis.',
    'Dress modestly at temples.',
    'Visit during cooler months.'
  ]
},
{
  id: 'ho-chi-minh-vn',
  city: 'Ho Chi Minh City',
  country: 'Vietnam',
  airportCode: 'SGN',
  image: `https://images.unsplash.com/photo-1583417319070-4a69db38a482${cropParams}`,
  description: 'Vietnam’s bustling economic hub, blending French colonial landmarks, lively markets, and modern skyscrapers.',
  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'December to April',
  dailyBudget: 50,
  attractions: [
    { name: 'Ben Thanh Market', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'War Remnants Museum', duration: '2 hours', bestTime: 'Morning', entryFee: '40,000 VND' },
    { name: 'Notre-Dame Cathedral', duration: '45 mins', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Saigon Skydeck', duration: '1 hour', bestTime: 'Sunset', entryFee: '200,000 VND' },
    { name: 'Cu Chi Tunnels', duration: 'Half Day', bestTime: 'Morning', entryFee: '125,000 VND' },
    { name: 'Nguyen Hue Walking Street', duration: '2 hours', bestTime: 'Night', entryFee: 'Free' }
  ],
  travelTips: [
    'Use Grab for transport.',
    'Carry cash.',
    'Street food is safe at busy stalls.',
    'Traffic is extremely busy.',
    'Wear light clothing.',
    'Keep valuables secure.'
  ]
},
  {
    id: 'los-angeles-us', city: 'Los Angeles', country: 'USA', airportCode: 'LAX', 
    image: `https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?auto=format&fit=crop&w=1600&q=80`,
    description: 'The entertainment capital of the world, offering beaches, Hollywood glamour, and perfect weather.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'March to May', dailyBudget: 140,
    attractions: [
      { name: 'Griffith Observatory', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free (Planetarium extra)' },
      { name: 'Santa Monica Pier', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Hollywood Walk of Fame', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Getty Center', duration: '3-4 hours', bestTime: 'Afternoon', entryFee: 'Free (Parking $25)' },
      { name: 'Universal Studios Hollywood', duration: 'Full Day', bestTime: 'Early Morning', entryFee: '$109+' },
      { name: 'Venice Beach Boardwalk', duration: '2 hours', bestTime: 'Daytime', entryFee: 'Free' }
    ],
    travelTips: [
      'Transportation: LA is massively spread out. You essentially must rent a car or budget heavily for Uber/Lyft.',
      'Traffic: Rush hour is severe from 7-10 AM and 3-7 PM. Group your sightseeing geographically by neighborhood.',
      'Expectations: The Hollywood Walk of Fame is often described as gritty and underwhelming; don\'t dedicate a whole day to it.',
      'Food Scene: LA has the best Mexican food in the US. Eat at street taco stands and food trucks.',
      'Weather: It cools down significantly at night, even in summer. Always bring a light jacket.',
      'Safety: Skid Row in Downtown LA has a severe unhoused crisis. Research your walking routes in DTLA.'
    ]
  },
  {
    id: 'miami-us', city: 'Miami', country: 'USA', airportCode: 'MIA', 
    image: `https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?auto=format&fit=crop&w=1600&q=80`,
    description: 'An international city at Florida\'s southeastern tip, famous for its beaches and vibrant nightlife.',
    budget: 'Moderate', tripType: 'Beach', bestSeason: 'March to May', dailyBudget: 150,
    attractions: [
      { name: 'South Beach & Art Deco District', duration: 'Half-Day', bestTime: 'Morning/Afternoon', entryFee: 'Free' },
      { name: 'Wynwood Walls', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: '$12' },
      { name: 'Little Havana (Calle Ocho)', duration: '2-3 hours', bestTime: 'Lunchtime', entryFee: 'Free' },
      { name: 'Vizcaya Museum and Gardens', duration: '2 hours', bestTime: 'Morning', entryFee: '$25' },
      { name: 'Everglades Airboat Tour', duration: 'Half-Day', bestTime: 'Morning', entryFee: '~$40' },
      { name: 'Bayside Marketplace', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Language: Spanish is spoken as frequently as English, especially in areas like Little Havana.',
      'Weather Check: Hurricane season runs from June to November. Expect intense, short afternoon thunderstorms daily.',
      'Tipping Trap: Many Miami restaurants in South Beach automatically add an 18-20% gratuity to the bill. Don\'t tip twice.',
      'Transportation: Use the free Metromover in downtown/Brickell. For the beach, the free trolley system is excellent.',
      'Sun Protection: The Florida sun is brutal. SPF 50 sunscreen, sunglasses, and hats are absolutely mandatory.',
      'Nightlife: Clubs don\'t get busy until midnight and enforce strict, dressy dress codes.'
    ]
  },
  {
    id: 'las-vegas-us', city: 'Las Vegas', country: 'USA', airportCode: 'LAS', 
    image: `https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?auto=format&fit=crop&w=1600&q=80`,
    description: 'The ultimate playground known for its vibrant nightlife, 24-hour casinos, and entertainment options.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'March to May', dailyBudget: 130,
    attractions: [
      { name: 'The Las Vegas Strip', duration: 'Variable', bestTime: 'Night', entryFee: 'Free' },
      { name: 'Bellagio Fountains', duration: '30 mins', bestTime: 'Evening (Every 15 mins)', entryFee: 'Free' },
      { name: 'Fremont Street Experience', duration: '2-3 hours', bestTime: 'Night', entryFee: 'Free' },
      { name: 'High Roller Observation Wheel', duration: '45 mins', bestTime: 'Sunset', entryFee: '$25 - $35' },
      { name: 'Hoover Dam', duration: 'Half-Day', bestTime: 'Morning Tour', entryFee: '$30 (Tour)' },
      { name: 'The Sphere', duration: '2 hours', bestTime: 'Evening show', entryFee: '$89+' }
    ],
    travelTips: [
      'Distances: Casinos look close together but are massive. A walk next door can take 20 minutes. Wear very comfortable shoes.',
      'Resort Fees: Hotels advertise cheap rates but slap on mandatory $40-$50 daily "resort fees" at checkout.',
      'Free Drinks: If you are actively gambling (even just penny slots), cocktail waitresses will bring you free drinks. Tip them $1-$2 per drink.',
      'Weather: It is a desert. Summer days exceed 110°F (43°C), but casino air conditioning is freezing. Bring a sweater.',
      'Hydration: Drink massive amounts of water. The dry air and alcohol dehydrate tourists rapidly.',
      'Transportation: Do not try to hail a cab on the street. You must go to designated taxi stands at hotels or use rideshares.'
    ]
  },
  {
    id: 'san-francisco-us', city: 'San Francisco', country: 'USA', airportCode: 'SFO', 
    image: `https://images.unsplash.com/photo-1501594907352-04cda38ebc29${cropParams}`,
    description: 'A hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'September to November', dailyBudget: 180,
    attractions: [
      { name: 'Golden Gate Bridge', duration: '2 hours', bestTime: 'Morning (before fog rolls in)', entryFee: 'Free' },
      { name: 'Alcatraz Island', duration: '3 hours', bestTime: 'Morning (Book 3 weeks ahead)', entryFee: '$45' },
      { name: 'Fisherman\'s Wharf & Pier 39', duration: '2 hours', bestTime: 'Lunchtime', entryFee: 'Free' },
      { name: 'Lombard Street', duration: '30 mins', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Golden Gate Park', duration: 'Half-Day', bestTime: 'Afternoon', entryFee: 'Free (Museums extra)' },
      { name: 'Chinatown', duration: '2 hours', bestTime: 'Lunchtime', entryFee: 'Free' }
    ],
    travelTips: [
      'Weather: Mark Twain never said it, but the coldest winter you\'ll experience is a summer in SF. The fog ("Karl") is freezing. Dress in layers.',
      'Car Break-ins: Do not leave a single item visible in a rental car. Smash-and-grab robberies are rampant.',
      'Hills: The city is incredibly steep. What looks like a 5-minute walk on a map might be a grueling uphill hike.',
      'Transportation: Ride the historic Cable Cars for the experience ($8), but use Muni buses and BART for actual commuting.',
      'Food: Try sourdough bread bowls at Boudin Bakery and authentic Mission-style burritos in the Mission District.',
      'Areas to Avoid: The Tenderloin district and parts of Market Street have severe issues with open drug use and homelessness.'
    ]
  },
  {
    id: 'toronto-ca', city: 'Toronto', country: 'Canada', airportCode: 'YYZ', 
    image: `https://images.unsplash.com/photo-1514565131-fce0801e5785${cropParams}`,
    description: 'A dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic CN Tower.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'April to May', dailyBudget: 110,
    attractions: [
      { name: 'CN Tower', duration: '2 hours', bestTime: 'Sunset', entryFee: '$43 CAD' },
      { name: 'Ripley\'s Aquarium', duration: '2 hours', bestTime: 'Morning', entryFee: '$44 CAD' },
      { name: 'St. Lawrence Market', duration: '2 hours', bestTime: 'Saturday morning', entryFee: 'Free' },
      { name: 'Royal Ontario Museum (ROM)', duration: '3 hours', bestTime: 'Afternoon', entryFee: '$23 CAD' },
      { name: 'Toronto Islands', duration: 'Half-Day', bestTime: 'Summer Afternoon', entryFee: '$8.70 CAD (Ferry)' },
      { name: 'Distillery District', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'PATH System: Toronto has a 30km underground pedestrian network connecting downtown. It’s perfect for escaping freezing winter winds.',
      'Transportation: Use the TTC (subway/streetcars). You can tap your credit card to pay the fare directly.',
      'Airport: Take the UP Express train from Pearson Airport to Union Station downtown. It’s much faster and cheaper than an Uber.',
      'Food: Toronto is wildly multicultural. Head to Kensington Market for eclectic street food or Markham for authentic Asian cuisine.',
      'Tipping: Similar to the US, a 15% to 20% tip is expected at restaurants and bars.',
      'Weather: Winters are freezing and snowy, while summers can be surprisingly hot and humid.'
    ]
  },
  {
    id: 'vancouver-ca', city: 'Vancouver', country: 'Canada', airportCode: 'YVR', 
    image: `https://images.unsplash.com/photo-1559511260-66a654ae982a${cropParams}`,
    description: 'A bustling west coast seaport in British Columbia, surrounded by mountains.',
    budget: 'Moderate', tripType: 'Nature', bestSeason: 'June to September', dailyBudget: 120,
    attractions: [
      { name: 'Stanley Park', duration: '3-4 hours', bestTime: 'Morning (Rent a bike)', entryFee: 'Free' },
      { name: 'Capilano Suspension Bridge', duration: '2 hours', bestTime: 'Early Morning', entryFee: '$66 CAD' },
      { name: 'Granville Island', duration: '2-3 hours', bestTime: 'Lunchtime', entryFee: 'Free' },
      { name: 'Grouse Mountain', duration: 'Half-Day', bestTime: 'Clear Afternoons', entryFee: '$69 CAD' },
      { name: 'Gastown & Steam Clock', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Vancouver Aquarium', duration: '2 hours', bestTime: 'Morning', entryFee: '$42 CAD' }
    ],
    travelTips: [
      'Weather: It is famously rainy from October to April ("Raincouver"). Bring high-quality waterproof jackets and shoes.',
      'Public Transit: The SkyTrain is excellent and goes directly from YVR airport into downtown.',
      'Areas to Avoid: Avoid East Hastings Street (the Downtown Eastside), which has a visible and severe drug and homelessness crisis.',
      'Nature Etiquette: If hiking on the North Shore, bring bear spray, stay on trails, and be prepared for rapidly changing mountain weather.',
      'Food: Vancouver has some of the best sushi and Asian cuisine in North America outside of Japan.',
      'Active Lifestyle: Do as the locals do—rent a bike and cycle the Seawall around Stanley Park.'
    ]
  },

  // --- SOUTH AMERICA ---
  {
    id: 'rio-de-janeiro-br', city: 'Rio de Janeiro', country: 'Brazil', airportCode: 'GIG', 
    image: `https://images.unsplash.com/photo-1483729558449-99ef09a8c325${cropParams}`,
    description: 'A huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches.',
    budget: 'Moderate', tripType: 'Beach', bestSeason: 'December to March', dailyBudget: 70,
    attractions: [
      { name: 'Christ the Redeemer', duration: '2-3 hours', bestTime: '8:00 AM (to beat clouds/crowds)', entryFee: 'R$ 90' },
      { name: 'Sugarloaf Mountain', duration: '2-3 hours', bestTime: 'Sunset', entryFee: 'R$ 150' },
      { name: 'Copacabana & Ipanema Beaches', duration: 'Half-Day', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Tijuca National Park', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Selarón Steps (Escadaria Selarón)', duration: '1 hour', bestTime: 'Early Morning', entryFee: 'Free' },
      { name: 'Jardim Botânico', duration: '2 hours', bestTime: 'Morning', entryFee: 'R$ 73' }
    ],
    travelTips: [
      'Security: Never flash your iPhone or expensive jewelry. Leave your passport and credit cards in the hotel safe; carry a decoy wallet.',
      'Beach Etiquette: Cariocas (locals) wear tiny swimwear (sungas/bikinis). Do not bring a towel; rent a chair and umbrella on the beach.',
      'Favelas: Do not wander into favelas unguided. If you want to visit, book a legitimate, community-led tour.',
      'Transportation: Use Uber; it is incredibly cheap and much safer than flagging down yellow taxis on the street.',
      'Language: Portuguese is spoken here, not Spanish. Learning basic Portuguese phrases is highly appreciated.',
      'Payment: "Pix" (a local digital payment system) is everywhere, but as a tourist, contactless credit cards work perfectly.'
    ]
  },
  {
    id: 'buenos-aires-ar', city: 'Buenos Aires', country: 'Argentina', airportCode: 'EZE', 
    image: `https://images.unsplash.com/photo-1589909202802-8f4aadce1849${cropParams}`,
    description: 'Argentina’s big, cosmopolitan capital city, known for its European atmosphere and passionate tango.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'April to June', dailyBudget: 50,
    attractions: [
      { name: 'Teatro Colón', duration: '1.5 hours', bestTime: 'Morning Tour', entryFee: 'ARS 12,000' },
      { name: 'Recoleta Cemetery', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'ARS 3,500' },
      { name: 'La Boca (Caminito)', duration: '2 hours', bestTime: 'Daytime (Unsafe at night)', entryFee: 'Free' },
      { name: 'Casa Rosada & Plaza de Mayo', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'San Telmo Market', duration: '3 hours', bestTime: 'Sunday (Antiques Fair)', entryFee: 'Free' },
      { name: 'Palermo Soho', duration: 'Evening', bestTime: 'Late Night', entryFee: 'Free' }
    ],
    travelTips: [
      'Currency & Blue Rate: Argentina has a highly volatile economy. Look up the "Blue Dollar" rate and send yourself money via Western Union to double your purchasing power compared to official rates.',
      'Dining Hours: Porteños eat incredibly late. Do not show up for dinner before 9 PM; 10 PM is standard.',
      'Meat Culture: You must eat at a traditional Parrilla (steakhouse). The quality of beef is world-class and extremely affordable.',
      'Safety: Beware of the "mustard scam" where someone spills liquid on you and an accomplice picks your pocket while helping you clean.',
      'Transport: Buy a SUBE card to use the Subte (subway) and buses. Uber and Cabify are reliable and cheap.',
      'Greetings: Locals greet with a single kiss on the right cheek, even between male friends.'
    ]
  },
  {
    id: 'lima-pe', city: 'Lima', country: 'Peru', airportCode: 'LIM', 
    image: `https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1600&q=80`,
    description: 'Peru\'s capital, a bustling metropolis and one of South America’s largest cities.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'December to April', dailyBudget: 45,
    attractions: [
      { name: 'Plaza de Armas (Historic Center)', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Miraflores Malecon', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Huaca Pucllana', duration: '1.5 hours', bestTime: 'Evening (illuminated)', entryFee: '15 PEN' },
      { name: 'Museo Larco', duration: '2 hours', bestTime: 'Afternoon', entryFee: '35 PEN' },
      { name: 'Barranco District', duration: '3 hours', bestTime: 'Late Afternoon to Evening', entryFee: 'Free' },
      { name: 'Circuito Mágico del Agua', duration: '1.5 hours', bestTime: 'Night', entryFee: '4 PEN' }
    ],
    travelTips: [
      'Culinary Capital: Lima is home to some of the top-ranked restaurants in the world (Central, Maido). Book months in advance.',
      'Street Food: You must try fresh Ceviche, but only eat it for lunch, as locals believe fish shouldn’t be eaten late in the day.',
      'Safety: Stick to Miraflores, Barranco, and San Isidro. Be cautious in the Historic Center at night.',
      'Transport: Traffic is notoriously terrible. Use Uber rather than street taxis (which don\'t have meters and require haggling).',
      'Weather: Lima is located in a desert. It almost never rains, but from May to November, it is covered in a persistent gray fog called "La Garúa".',
      'Water: Do not drink the tap water. Use bottled water for everything.'
    ]
  },

  // --- AFRICA ---
  {
    id: 'cape-town-za', city: 'Cape Town', country: 'South Africa', airportCode: 'CPT', 
    image: `https://images.unsplash.com/photo-1580060839134-75a5edca2e99${cropParams}`,
    description: 'A port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.',
    budget: 'Moderate', tripType: 'Nature', bestSeason: 'November to February', dailyBudget: 90,
    attractions: [
      { name: 'Table Mountain', duration: '3-4 hours', bestTime: 'Morning (cable car closes in high wind)', entryFee: 'R 395 (Return)' },
      { name: 'Cape of Good Hope', duration: 'Half-Day', bestTime: 'Morning', entryFee: 'R 376' },
      { name: 'Boulders Beach (Penguins)', duration: '2 hours', bestTime: 'Early Morning', entryFee: 'R 176' },
      { name: 'Robben Island', duration: '4 hours', bestTime: 'Must pre-book ferry', entryFee: 'R 600' },
      { name: 'Kirstenbosch Botanical Gardens', duration: '3 hours', bestTime: 'Sunday Afternoon (summer concerts)', entryFee: 'R 220' },
      { name: 'V&A Waterfront', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Safety Advice: Do not walk anywhere at night, even short distances. Always take an Uber door-to-door after dark.',
      'Load Shedding: South Africa experiences scheduled daily power outages. Ensure your hotel has a backup generator.',
      'Hiking: Do not hike Table Mountain or Lion\'s Head alone. Go in groups and be prepared for rapid weather changes.',
      'Wine: Take a 45-minute drive to Stellenbosch or Franschhoek for world-class, incredibly affordable wine tasting.',
      'Driving: Rent a car to explore the Cape Peninsula, but remember they drive on the left side of the road.',
      'Tipping: Car guards in parking lots expect a R5 to R10 tip for watching your car.'
    ]
  },
  {
    id: 'marrakech-ma', city: 'Marrakech', country: 'Morocco', airportCode: 'RAK', 
    image: `https://images.unsplash.com/photo-1539020140153-e479b8c22e70${cropParams}`,
    description: 'A former imperial city in western Morocco, home to mosques, palaces and gardens.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'March to May', dailyBudget: 50,
    attractions: [
      { name: 'Jemaa el-Fnaa Square', duration: '2 hours', bestTime: 'Dusk (when the food stalls open)', entryFee: 'Free' },
      { name: 'Jardin Majorelle', duration: '2 hours', bestTime: '8:00 AM (Buy tickets online)', entryFee: '150 MAD' },
      { name: 'Bahia Palace', duration: '1.5 hours', bestTime: 'Morning', entryFee: '70 MAD' },
      { name: 'Koutoubia Mosque', duration: '30 mins', bestTime: 'Anytime (exterior only for non-Muslims)', entryFee: 'Free' },
      { name: 'Saadian Tombs', duration: '1 hour', bestTime: 'Early Morning', entryFee: '70 MAD' },
      { name: 'The Souks (Medina)', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' }
    ],
    travelTips: [
      'Scams to Avoid: Ignore anyone claiming "that road is closed" or offering to show you the way; they will demand money after leading you into a maze.',
      'Haggling: In the souks, the initial asking price is 3x to 4x what you should pay. Be polite, smile, and walk away to get the real price.',
      'Dress Code: Morocco is a conservative Islamic country. Women should cover shoulders and knees; men should avoid short shorts.',
      'Photos: Do not take photos of locals, snake charmers, or monkeys without asking and paying them a tip.',
      'Accommodation: Stay in a traditional "Riad" inside the Medina rather than a large hotel outside the city walls for an authentic experience.',
      'Drinking Water: Stick strictly to bottled water and avoid salads washed in tap water.'
    ]
  },
  {
  id: 'porto-pt',
  city: 'Porto',
  country: 'Portugal',
  airportCode: 'OPO',
  image: `https://images.unsplash.com/photo-1555881400-74d7acaacd8b${cropParams}`,
  description: 'A charming riverside city famous for Port wine, colorful architecture, historic bridges, and scenic views along the Douro River.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to September',
  dailyBudget: 100,
  attractions: [
    { name: 'Dom Luís I Bridge', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Ribeira District', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Livraria Lello', duration: '1 hour', bestTime: '9:00 AM', entryFee: '€10' },
    { name: 'São Bento Station', duration: '30 mins', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Port Wine Cellars', duration: '2 hours', bestTime: 'Afternoon', entryFee: '€18' },
    { name: 'Clérigos Tower', duration: '1 hour', bestTime: 'Morning', entryFee: '€8' }
  ],
  travelTips: [
    'Public Transportation: The Andante Card works across metro, buses, and trains.',
    'Local Etiquette: Dinner is usually served after 7:30 PM.',
    'Money-Saving: Wine tastings often include discounts when booking online.',
    'Language: English is spoken in most tourist areas.',
    'Safety Advice: Porto is very safe, but stay alert near major attractions.',
    'Packing: Bring a light jacket, even during summer evenings.'
  ]
},
  {
    id: 'zanzibar-tz', city: 'Zanzibar', country: 'Tanzania', airportCode: 'ZNZ', 
    image: `https://images.unsplash.com/photo-1586861635167-e5223aadc9fe${cropParams}`,
    description: 'An archipelago off the coast of East Africa, known for pristine beaches and spice farms.',
    budget: 'Moderate', tripType: 'Beach', bestSeason: 'June to October', dailyBudget: 80,
    attractions: [
      { name: 'Stone Town', duration: 'Half-Day', bestTime: 'Late Afternoon', entryFee: 'Free (Tours $15+)' },
      { name: 'Nungwi & Kendwa Beaches', duration: 'Full Day', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Prison Island (Giant Tortoises)', duration: '3 hours', bestTime: 'Morning Tour', entryFee: '$10' },
      { name: 'Spice Farm Tour', duration: '2-3 hours', bestTime: 'Morning', entryFee: '$15 - $20' },
      { name: 'Jozani Forest (Red Colobus Monkeys)', duration: '2 hours', bestTime: 'Morning', entryFee: '$12' },
      { name: 'The Rock Restaurant', duration: '2 hours', bestTime: 'High Tide (Book months ahead)', entryFee: 'Menu pricing' }
    ],
    travelTips: [
      'Dress Code: Zanzibar is 99% Muslim. While bikinis are fine at resorts, you must cover up (shoulders and knees) when walking through Stone Town or local villages.',
      'Tides: The east coast (Paje, Jambiani) experiences massive tidal shifts. The ocean retreats for over a kilometer at low tide.',
      'Currency: USD is widely accepted, but bills must be newer than 2013, unwrinkled, and untorn, or they will be rejected.',
      'Malaria: Zanzibar is generally considered low-risk compared to the mainland, but anti-malarial medication and mosquito repellent are still recommended.',
      'Transport: Dala-dalas (local open-air buses) are very cheap but chaotic. Hire private taxis negotiated through your hotel for comfort.',
      'Internet: Wi-Fi is generally very slow. Buy a local Zantel SIM card at the airport for the best coverage.'
    ]
  },
  {
    id: 'cairo-eg', city: 'Cairo', country: 'Egypt', airportCode: 'CAI', 
    image: `https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1600&q=80`,
    description: 'Egypt’s sprawling capital, set on the Nile River, known for its antiquities.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'October to April', dailyBudget: 40,
    attractions: [
      { name: 'Pyramids of Giza & Sphinx', duration: '3-4 hours', bestTime: '8:00 AM (To beat heat and buses)', entryFee: '540 EGP' },
      { name: 'Grand Egyptian Museum (GEM)', duration: '4 hours', bestTime: 'Morning', entryFee: '1000 EGP' },
      { name: 'Khan el-Khalili Bazaar', duration: '2-3 hours', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Islamic Cairo (Muizz Street)', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Cairo Citadel', duration: '2 hours', bestTime: 'Morning', entryFee: '300 EGP' },
      { name: 'Felucca Ride on the Nile', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Negotiable (~300 EGP)' }
    ],
    travelTips: [
      'The Pyramid Hustle: Do not accept "gifts" from vendors at Giza, do not hand anyone your phone to take a photo, and firmly ignore aggressive camel ride touts.',
      'Crossing Streets: Traffic in Cairo is terrifying and there are no crosswalks. Walk closely beside a local to cross multi-lane highways.',
      'Uber is Essential: Avoid white street taxis. Use Uber to guarantee fixed prices and avoid exhausting haggling.',
      'Tipping (Baksheesh): Tipping is expected for absolutely everything, including bathroom attendants. Keep small EGP notes handy at all times.',
      'Dress Code: Dress conservatively. Women should carry a light scarf to cover their hair when entering mosques.',
      'Food Safety: Avoid raw vegetables and tap water. Eat Koshari (a delicious mix of lentils, rice, and pasta) from busy local spots.'
    ]
  },

  // --- OCEANIA ---
  {
    id: 'sydney-au', city: 'Sydney', country: 'Australia', airportCode: 'SYD', 
    image: `https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1600&q=80`,
    description: 'Capital of New South Wales and one of Australia\'s largest cities, best known for its harborfront Opera House.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'September to November', dailyBudget: 150,
    attractions: [
      { name: 'Sydney Opera House', duration: '1.5 hours', bestTime: 'Tour at 10 AM', entryFee: '$43 AUD (Tour)' },
      { name: 'Sydney Harbour Bridge', duration: '3.5 hours', bestTime: 'Twilight Climb', entryFee: '$344+ AUD (BridgeClimb)' },
      { name: 'Bondi to Coogee Coastal Walk', duration: '2-3 hours', bestTime: 'Early Morning', entryFee: 'Free' },
      { name: 'Taronga Zoo', duration: 'Half-Day', bestTime: 'Morning (Take the ferry from Circular Quay)', entryFee: '$51 AUD' },
      { name: 'Royal Botanic Garden', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Darling Harbour', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Sun Protection: The Australian sun is ruthless due to the ozone hole. SPF 50+, hats, and rash guards are absolutely mandatory.',
      'Transport: Tap your credit card on the Opal readers for trains, buses, and ferries. Ferries offer the best cheap harbor views.',
      'Beach Safety: Always swim between the red and yellow flags. Rip currents at beaches like Bondi are powerful and frequent.',
      'Cost: Sydney is notoriously expensive. Happy hours (usually 4-6 PM) are your best friend for drinks.',
      'Tipping: Staff in Australia are paid a high minimum wage. Tipping is entirely optional and generally not expected.',
      'Wildlife: Check your shoes for spiders in rural areas, but in the city, seagulls swooping your hot chips are the biggest threat.'
    ]
  },
  {
    id: 'melbourne-au', city: 'Melbourne', country: 'Australia', airportCode: 'MEL', 
    image: `https://images.unsplash.com/photo-1514395462725-fb4566210144${cropParams}`,
    description: 'The coastal capital of the southeastern Australian state of Victoria, known for arts and coffee.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'March to May', dailyBudget: 130,
    attractions: [
      { name: 'Laneways & Street Art (Hosier Lane)', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Queen Victoria Market', duration: '2-3 hours', bestTime: 'Wednesday Evening or Weekend Morning', entryFee: 'Free' },
      { name: 'Royal Botanic Gardens', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'National Gallery of Victoria (NGV)', duration: '2-3 hours', bestTime: 'Morning', entryFee: 'Free (Special exhibitions cost)' },
      { name: 'St Kilda Beach & Penguins', duration: '2 hours', bestTime: 'Just after sunset (to see penguins)', entryFee: 'Free' },
      { name: 'Great Ocean Road', duration: 'Full Day', bestTime: 'Start at 7:00 AM', entryFee: 'Requires car rental or tour' }
    ],
    travelTips: [
      'Coffee Culture: Melbourne takes coffee incredibly seriously. Order a "Flat White" at a laneway cafe; avoid Starbucks.',
      'Weather: Famous for "four seasons in one day." Always carry a light jacket and an umbrella, even if it’s sunny.',
      'Free Tram Zone: Trams within the CBD grid are completely free. If leaving the CBD, you need a Myki card.',
      'Hook Turns: If you rent a car, research Melbourne’s unique "hook turn," where you turn right from the far left lane to avoid blocking trams.',
      'Dining: The city has a massive, high-quality Asian food scene. Head to Chinatown for incredible dumplings.',
      'Sporting Capital: Catch an AFL (Aussie Rules Football) match at the MCG to experience true local culture.'
    ]
  },
  {
  id: 'krakow-pl',
  city: 'Kraków',
  country: 'Poland',
  airportCode: 'KRK',
  image: `https://images.unsplash.com/photo-1519197924294-4ba991a11128${cropParams}`,
  description: 'One of Europe’s best-preserved medieval cities, filled with castles, churches, charming squares, and rich history.',
  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'May to September',
  dailyBudget: 75,
  attractions: [
    { name: 'Wawel Castle', duration: '3 hours', bestTime: 'Morning', entryFee: 'PLN 49' },
    { name: 'Main Market Square', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'St. Mary’s Basilica', duration: '1 hour', bestTime: 'Morning', entryFee: 'PLN 18' },
    { name: 'Kazimierz District', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Schindler’s Factory', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'PLN 36' },
    { name: 'Planty Park', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' }
  ],
  travelTips: [
    'Use trams for city travel.',
    'Many attractions are walkable.',
    'Cash and cards are accepted.',
    'Visit early during summer.',
    'Book Auschwitz tours in advance.',
    'Try authentic pierogi.'
  ]
},
  {
    id: 'auckland-nz', city: 'Auckland', country: 'New Zealand', airportCode: 'AKL', 
    image: `https://images.unsplash.com/photo-1507699622108-4be3abd695ad${cropParams}`,
    description: 'Based around 2 large harbours, a major city in the north of New Zealand\'s North Island.',
    budget: 'Moderate', tripType: 'Nature', bestSeason: 'March to May', dailyBudget: 110,
    attractions: [
      { name: 'Sky Tower', duration: '1.5 hours', bestTime: 'Sunset', entryFee: '$40 NZD' },
      { name: 'Waiheke Island', duration: 'Full Day', bestTime: 'Morning Ferry', entryFee: '$46 NZD (Ferry) + Wine Tours' },
      { name: 'Auckland War Memorial Museum', duration: '2-3 hours', bestTime: 'Morning', entryFee: '$28 NZD' },
      { name: 'Mount Eden (Maungawhau)', duration: '1.5 hours', bestTime: 'Golden Hour', entryFee: 'Free' },
      { name: 'Viaduct Harbour', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Hobbiton Movie Set', duration: 'Full Day Trip', bestTime: 'Book months ahead', entryFee: '$89 NZD (Plus transport)' }
    ],
    travelTips: [
      'Transport: Auckland is highly car-dependent. Public transport is mediocre. Rent a car if you plan to leave the CBD.',
      'Biosecurity: NZ has some of the strictest customs in the world. Declare all food, hiking boots, and outdoor gear or face instant $400 fines.',
      'Weather: It is very windy and rains frequently. Bring layers.',
      'Tipping: Not expected. Service workers are paid a living wage.',
      'Sun Safety: Like Australia, the UV index is brutal. Wear sunscreen every day.',
      'Local Language: Māori culture is heavily integrated. "Kia ora" is the standard greeting for hello.'
    ]
  },
  {
  id: 'orlando-us',
  city: 'Orlando',
  country: 'USA',
  airportCode: 'MCO',
  image: `https://hips.hearstapps.com/hmg-prod/images/lake-eola-aerial-1-64f06b7e8d9e3.jpg?crop=0.505xw:1.00xh;0,0&resize=640:*${cropParams}`,
  description: 'The theme park capital of the world, offering unforgettable adventures, entertainment, shopping, and family attractions.',
  budget: 'Luxury',
  tripType: 'City',
  bestSeason: 'October to April',
  dailyBudget: 220,
  attractions: [
    { name: 'Magic Kingdom', duration: 'Full Day', bestTime: 'Opening Hours', entryFee: '$140+' },
    { name: 'Universal Studios Florida', duration: 'Full Day', bestTime: 'Morning', entryFee: '$120+' },
    { name: 'EPCOT', duration: 'Full Day', bestTime: 'Morning', entryFee: '$140+' },
    { name: 'Disney Springs', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'ICON Park', duration: '2 hours', bestTime: 'Sunset', entryFee: '$30+' },
    { name: 'SeaWorld Orlando', duration: 'Full Day', bestTime: 'Morning', entryFee: '$100+' }
  ],
  travelTips: [
    'Arrive before park opening.',
    'Use Genie+ or Express Pass.',
    'Stay hydrated.',
    'Wear comfortable shoes.',
    'Book tickets online.',
    'Summer afternoons often bring rain.'
  ]
},
  {
    id: 'queenstown-nz', city: 'Queenstown', country: 'New Zealand', airportCode: 'ZQN', 
    image: `https://www.newzealand.com/assets/externally-managed-assets/tbd-assets/tbd-folder-10092946/img-1731461073-7951-258451-tbd-asset__ExtRewriteWyJwbmciLCJqcGciXQ_aWxvdmVrZWxseQo_CropResizeWzk0MCw1MzAsOTAsImpwZyJd.jpg${cropParams}`,
    description: 'A resort town in Otago in the south-west of New Zealand\'s South Island, known as the adventure capital.',
    budget: 'Luxury', tripType: 'Adventure', bestSeason: 'December to February', dailyBudget: 160,
    attractions: [
      { name: 'Milford Sound Day Trip', duration: 'Full Day', bestTime: '7:00 AM Tour Departure', entryFee: '~$150+ NZD' },
      { name: 'Skyline Gondola & Luge', duration: '2-3 hours', bestTime: 'Afternoon', entryFee: '$52 NZD (Gondola only)' },
      { name: 'AJ Hackett Bungy (Kawarau Bridge)', duration: '2 hours', bestTime: 'Morning', entryFee: '$225 NZD' },
      { name: 'Shotover Jet', duration: '1.5 hours', bestTime: 'Daytime', entryFee: '$159 NZD' },
      { name: 'Queenstown Gardens', duration: '1-2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Coronet Peak (Skiing)', duration: 'Full Day', bestTime: 'Winter (June-August)', entryFee: '$159 NZD (Lift Pass)' }
    ],
    travelTips: [
      'Food: You must try a Fergburger. The line is usually an hour long, so order ahead by phone to skip the queue.',
      'Adventure Booking: Book major activities (like bungee jumping and heli-hikes) well in advance during peak summer/winter months.',
      'Transport: The local Orbus network is excellent and costs only $2 NZD per ride with a Bee Card.',
      'Driving: If driving to Milford Sound, leave at dawn, fuel up in Te Anau (there is no cell service or gas after), and watch for Kea birds stealing your windshield wipers.',
      'Winter Visits: If you visit for skiing in July/August, bring snow chains for your rental car; they are often mandatory.',
      'Water: The tap water is pristine glacial runoff. Do not buy bottled water.'
    ]
  },
  {
  id: 'washington-dc-us',
  city: 'Washington, D.C.',
  country: 'USA',
  airportCode: 'IAD',
  image: `https://images.unsplash.com/photo-1501466044931-62695aada8e9${cropParams}`,
  description: 'The capital of the United States, home to iconic monuments, Smithsonian museums, and historic government landmarks.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'March to May',
  dailyBudget: 165,
  attractions: [
    { name: 'National Mall', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Lincoln Memorial', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'U.S. Capitol', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free (Reservation)' },
    { name: 'Smithsonian Museums', duration: '4 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'White House Visitor Center', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Georgetown', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Metro is the best transport.',
    'Most museums are free.',
    'Wear walking shoes.',
    'Book Capitol tours ahead.',
    'Visit monuments at night.',
    'Spring is the most beautiful season.'
  ]
},

  // --- UNIQUE / BUCKET LIST ---
  {
    id: 'cappadocia-tr', city: 'Cappadocia', country: 'Turkey', airportCode: 'NAV',
    image: `https://images.unsplash.com/photo-1641128324972-af3212f0f6bd${cropParams}`,
    description: 'Famed for its unique geological features called fairy chimneys and breathtaking sunrise hot air balloon rides.',
    budget: 'Moderate', tripType: 'Adventure', bestSeason: 'April to June', dailyBudget: 90,
    attractions: [
      { name: 'Hot Air Balloon Flight', duration: '3 hours', bestTime: '4:30 AM (Sunrise)', entryFee: '€150 - €300' },
      { name: 'Göreme Open Air Museum', duration: '2 hours', bestTime: 'Early Morning', entryFee: '480 TRY' },
      { name: 'Derinkuyu Underground City', duration: '2 hours', bestTime: 'Morning', entryFee: '300 TRY' },
      { name: 'Uçhisar Castle', duration: '1 hour', bestTime: 'Sunset', entryFee: '120 TRY' },
      { name: 'Red & Rose Valley Hike', duration: '3 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Love Valley', duration: '1.5 hours', bestTime: 'Daytime', entryFee: 'Free' }
    ],
    travelTips: [
      'Balloon Booking: Book your flight for your VERY FIRST morning. Cancellations due to wind are common, and you need backup days to reschedule.',
      'Accommodation: Stay in a "Cave Hotel" in Göreme. They are naturally insulated and offer incredible terrace views of the balloons.',
      'Transport: The region is spread out. Renting a car or hiring a private driver for a day is highly recommended over public buses.',
      'Terrain: The ground is extremely dusty and uneven. Bring sturdy hiking shoes; white sneakers will be ruined immediately.',
      'Currency: Tours and balloon flights are usually priced in Euros, but everyday food/shopping requires Turkish Lira.',
      'Claustrophobia: The underground cities involve descending narrow, low-ceiling tunnels. Avoid if you are highly claustrophobic.'
    ]
  },
  {
    id: 'reykjavik-is', city: 'Reykjavik', country: 'Iceland', airportCode: 'KEF', 
    image: `https://touristjourney.com/wp-content/uploads/2020/06/Reykjavik-City-Guide-1024x768.jpg${cropParams}`,
    description: 'The capital of Iceland, known for its striking landscape, volcanoes, and geothermal pools.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'June to August', dailyBudget: 200,
    attractions: [
      { name: 'Hallgrímskirkja Church', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free (Tower ~1300 ISK)' },
      { name: 'Blue Lagoon', duration: '3 hours', bestTime: 'On the way to/from the airport', entryFee: '~12,000 ISK' },
      { name: 'The Golden Circle', duration: 'Full Day', bestTime: 'Morning', entryFee: 'Free to drive' },
      { name: 'Harpa Concert Hall', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free to explore' },
      { name: 'Sky Lagoon', duration: '2 hours', bestTime: 'Sunset', entryFee: '~8,000 ISK' },
      { name: 'Northern Lights Tour', duration: '4 hours', bestTime: 'Winter Nights', entryFee: '~$70 USD' }
    ],
    travelTips: [
      'Cashless Society: Iceland is practically 100% cashless. Bring a credit card with no foreign transaction fees and a PIN code for gas stations.',
      'Weather Rules: Never ignore wind warnings. Car doors are regularly ripped off by sudden gusts. Hold doors tightly.',
      'Showering Etiquette: You MUST shower naked with soap before entering any public geothermal pool like the Blue or Sky Lagoon.',
      'Food Costs: Food is astronomically expensive. Buy groceries at Bónus (the pig logo supermarket) and make your own sandwiches.',
      'Water: Tap water is some of the purest glacial water on earth. Never buy bottled water.',
      'Driving: Stay on marked roads. Off-roading damages fragile moss that takes decades to grow back and carries massive fines.'
    ]
  },
  {
  id: 'hoi-an-vn',
  city: 'Hoi An',
  country: 'Vietnam',
  airportCode: 'DAD',
  image: `https://images.unsplash.com/photo-1559592413-7cec4d0cae2b${cropParams}`,
  description: 'A UNESCO-listed ancient town known for lantern-lit streets, riverside cafés, tailor shops, and timeless charm.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'February to April',
  dailyBudget: 50,
  attractions: [
    { name: 'Ancient Town', duration: '3 hours', bestTime: 'Evening', entryFee: '120,000 VND' },
    { name: 'Japanese Covered Bridge', duration: '30 mins', bestTime: 'Morning', entryFee: 'Included' },
    { name: 'Night Market', duration: '2 hours', bestTime: 'Night', entryFee: 'Free' },
    { name: 'An Bang Beach', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Basket Boat Tour', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '150,000 VND' },
    { name: 'Lantern Boat Ride', duration: '30 mins', bestTime: 'Night', entryFee: '150,000 VND' }
  ],
  travelTips: [
    'Explore on foot.',
    'Try Cao Lau noodles.',
    'Visit after sunset.',
    'Get custom clothes tailored.',
    'Carry cash.',
    'Cycle around the town.'
  ]
},
  {
  id: 'brussels-be',
  city: 'Brussels',
  country: 'Belgium',
  airportCode: 'BRU',
  image: `https://www.pelago.com/img/destinations/brussels/0720-0637_brussels.jpg${cropParams}`,
  description: 'Belgium’s cosmopolitan capital, known for Grand Place, chocolates, waffles, beer, and European institutions.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to September',
  dailyBudget: 125,
  attractions: [
    { name: 'Grand Place', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Atomium', duration: '2 hours', bestTime: 'Morning', entryFee: '€16' },
    { name: 'Royal Palace', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Manneken Pis', duration: '30 mins', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Comic Strip Museum', duration: '2 hours', bestTime: 'Morning', entryFee: '€13' },
    { name: 'Mont des Arts', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' }
  ],
  travelTips: [
    'Metro is the easiest way around.',
    'Try Belgian fries and waffles.',
    'Many museums are closed on Mondays.',
    'Carry a reusable water bottle.',
    'Keep an eye on belongings in busy stations.',
    'English is widely spoken.'
  ]
},
  {
    id: 'lapland-fi', city: 'Lapland', country: 'Finland', airportCode: 'RVN', 
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYxC-40pGtj_XXE-2odBRnXoK-P39hoEXLOERfQpSHLEgjbn4FMI5ZkcQ&s=10${cropParams}`,
    description: 'Finland’s northernmost region, a sparsely populated area bordering Sweden, Norway, and Russia.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'December to March', dailyBudget: 180,
    attractions: [
      { name: 'Santa Claus Village', duration: 'Half-Day', bestTime: 'Morning', entryFee: 'Free to enter' },
      { name: 'Husky Safari', duration: '2-3 hours', bestTime: 'Daytime', entryFee: '€150+' },
      { name: 'Northern Lights Hunting', duration: 'Nighttime', bestTime: '10 PM - 2 AM', entryFee: 'Varies by tour' },
      { name: 'Snowmobile Tour', duration: '3 hours', bestTime: 'Afternoon', entryFee: '€120+' },
      { name: 'Ranua Wildlife Park', duration: 'Half-Day', bestTime: 'Morning', entryFee: '€23.50' },
      { name: 'Ice Hotel / SnowCastle', duration: '2 hours', bestTime: 'Evening', entryFee: '€20' }
    ],
    travelTips: [
      'Extreme Cold: Winter temperatures drop to -30°C. You must use the "three-layer system" (merino wool base, fleece mid, wind/waterproof outer shell).',
      'Daylight: In December, there are only 2-3 hours of twilight. Plan all outdoor sightseeing around this tiny window.',
      'Aurora Expectations: The Northern Lights are never guaranteed. Book a multi-day stay and download the "Aurora" forecasting app.',
      'Driving: Rental cars come with winter studded tires, but driving on solid ice requires caution. Watch out for roaming reindeer.',
      'Sauna Culture: Experiencing a traditional Finnish sauna (naked) followed by rolling in the snow is mandatory.',
      'Batteries: Phone and camera batteries die in minutes in the extreme cold. Keep devices in inner pockets close to your body heat.'
    ]
  },
  {
  id: 'chicago-us',
  city: 'Chicago',
  country: 'USA',
  airportCode: 'ORD',
  image: `https://images.unsplash.com/photo-1494522855154-9297ac14b55f${cropParams}`,
  description: 'A world-famous city celebrated for architecture, deep-dish pizza, museums, and the scenic Lake Michigan waterfront.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to October',
  dailyBudget: 170,
  attractions: [
    { name: 'Millennium Park', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Willis Tower Skydeck', duration: '2 hours', bestTime: 'Sunset', entryFee: '$36' },
    { name: 'Navy Pier', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Art Institute of Chicago', duration: '3 hours', bestTime: 'Morning', entryFee: '$32' },
    { name: 'Riverwalk', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: '360 Chicago', duration: '1 hour', bestTime: 'Sunset', entryFee: '$30' }
  ],
  travelTips: [
    'Purchase a Ventra transit card.',
    'Try authentic deep-dish pizza.',
    'Lakefront is perfect for cycling.',
    'Weather changes quickly.',
    'Book observation decks online.',
    'Winter temperatures can be extreme.'
  ]
},
  {
  id: 'split-hr',
  city: 'Split',
  country: 'Croatia',
  airportCode: 'SPU',
  image: `https://images.ctfassets.net/5dlg82ljiq56/1kLC7yXO6Du9rh18C5mdfz/8eb567c1e5d94d9a6850c3a8f3658d24/AdobeStock_320606199__2_.jpg?w=800&fm=webp&q=80${cropParams}`,
  description: 'A beautiful Adriatic coastal city blending Roman history, beaches, lively promenades, and island-hopping adventures.',
  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'May to September',
  dailyBudget: 110,
  attractions: [
    { name: 'Diocletian’s Palace', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Riva Promenade', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Marjan Hill', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Bačvice Beach', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Cathedral of Saint Domnius', duration: '1 hour', bestTime: 'Morning', entryFee: '€10' },
    { name: 'Blue Lagoon Boat Tour', duration: '6 hours', bestTime: 'Morning', entryFee: '€70+' }
  ],
  travelTips: [
    'Book island tours early during summer.',
    'Carry cash for local markets.',
    'Wear sandals for pebble beaches.',
    'Walk inside the Old Town.',
    'Use ferries to visit nearby islands.',
    'Sun protection is essential in summer.'
  ]
},
  {
    id: 'petra-jo', city: 'Petra', country: 'Jordan', airportCode: 'AMM', 
    image: `https://www.travelawaits.com/wp-content/uploads/2021/04/6774bc9a0dad571855fb28138b8a46774bc.jpg${cropParams}`,
    description: 'A famous archaeological site in Jordan\'s southwestern desert, featuring rock-cut architecture.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'March to May', dailyBudget: 80,
    attractions: [
      { name: 'The Treasury (Al-Khazneh)', duration: '1 hour', bestTime: '6:00 AM (As soon as gates open)', entryFee: 'Included in Pass' },
      { name: 'The Siq', duration: '45 mins', bestTime: 'Early Morning', entryFee: 'Included in Pass' },
      { name: 'The Monastery (Ad Deir)', duration: '3-4 hours (hike)', bestTime: 'Afternoon', entryFee: 'Included in Pass' },
      { name: 'Petra By Night', duration: '2 hours', bestTime: '8:30 PM (Mon, Wed, Thu only)', entryFee: '17 JOD' },
      { name: 'Royal Tombs', duration: '2 hours', bestTime: 'Late Afternoon (Golden Hour)', entryFee: 'Included in Pass' },
      { name: 'High Place of Sacrifice', duration: '2 hours (hike)', bestTime: 'Morning', entryFee: 'Included in Pass' }
    ],
    travelTips: [
      'Jordan Pass: Buy the Jordan Pass online before you arrive. It waives your visa fee and includes entry to Petra, saving you a lot of money.',
      'Animal Welfare: Please walk rather than riding the exhausted donkeys and horses up the steep 800 steps to the Monastery.',
      'Footwear: You will walk 15-20 kilometers on sand and uneven rock. Hiking boots are highly recommended.',
      'Hydration: It is a desert. Buy large bottles of water at the entrance; prices triple once you are deep inside the site.',
      'Local Scams: Be wary of young men offering to show you "secret views" of the Treasury in exchange for exorbitant tips or romantic advances.',
      'Dress Code: Dress modestly out of respect for local Bedouin culture. Shoulders and knees should be covered.'
    ]
  },
  {
  id: 'shanghai-cn',
  city: 'Shanghai',
  country: 'China',
  airportCode: 'PVG',
  image: `https://static.independent.co.uk/2023/08/07/12/iStock-587787576%20shanghai.jpg${cropParams}`,
  description: 'China’s largest city, known for futuristic skyscrapers, historic waterfronts, luxury shopping, and world-class dining.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'March to May',
  dailyBudget: 120,
  attractions: [
    { name: 'The Bund', duration: '2 hours', bestTime: 'Night', entryFee: 'Free' },
    { name: 'Shanghai Tower', duration: '2 hours', bestTime: 'Sunset', entryFee: '¥180' },
    { name: 'Yu Garden', duration: '2 hours', bestTime: 'Morning', entryFee: '¥40' },
    { name: 'Nanjing Road', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Oriental Pearl Tower', duration: '2 hours', bestTime: 'Morning', entryFee: '¥199' },
    { name: 'French Concession', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' }
  ],
  travelTips: [
    'Install Alipay.',
    'Metro is excellent.',
    'Carry passport.',
    'VPN may be needed.',
    'Use translation apps.',
    'Avoid rush hour.'
  ]
},
  {
  id: 'kaohsiung-tw',
  city: 'Kaohsiung',
  country: 'Taiwan',
  airportCode: 'KHH',
  image: `https://wander-lush.org/wp-content/uploads/2020/03/6-Kaohsiung-Dragon-Tiger-Tower-Leung-Cho-Pan-CanvaPro.jpg${cropParams}`,
  description: 'A sunny port city with waterfront parks, colorful temples, and a relaxed atmosphere.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'November to April',
  dailyBudget: 80,
  attractions: [
    { name: 'Lotus Pond', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Pier-2 Art Center', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Love River', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Liuhe Night Market', duration: '2 hours', bestTime: 'Night', entryFee: 'Free' },
    { name: 'Fo Guang Shan', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Cijin Island', duration: 'Half Day', bestTime: 'Afternoon', entryFee: 'Ferry Fare' }
  ],
  travelTips: [
    'Rent a bicycle.',
    'Use MRT.',
    'Visit Cijin by ferry.',
    'Summer is hot.',
    'Carry EasyCard.',
    'Seafood is excellent.'
  ]
},
{
  id: 'cusco-pe',
  city: 'Cusco',
  country: 'Peru',
  airportCode: 'CUZ',
  image: `https://images.unsplash.com/photo-1526392060635-9d6019884377${cropParams}`,
  description: 'A historic Andean city and the gateway to Machu Picchu, rich in Incan heritage and colonial architecture.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 65,
  attractions: [
    { name: 'Plaza de Armas', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Sacsayhuamán', duration: '2 hours', bestTime: 'Morning', entryFee: '$20' },
    { name: 'San Pedro Market', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Qorikancha Temple', duration: '2 hours', bestTime: 'Afternoon', entryFee: '$15' },
    { name: 'Rainbow Mountain Tour', duration: 'Full Day', bestTime: 'Early Morning', entryFee: '$35+' },
    { name: 'Machu Picchu Excursion', duration: 'Full Day', bestTime: 'Morning', entryFee: '$60+' }
  ],
  travelTips: [
    'Acclimatize before hiking.',
    'Drink coca tea.',
    'Carry layers.',
    'Book Machu Picchu early.',
    'Stay hydrated.',
    'Walk slowly due to altitude.'
  ]
},
{
  id: 'cartagena-co',
  city: 'Cartagena',
  country: 'Colombia',
  airportCode: 'CTG',
  image: `https://cdn.adventure-life.com/16/57/00/iStock-1148859878/1300x820.webp${cropParams}`,
  description: 'A colorful Caribbean city famous for its colonial old town, historic walls, lively plazas, and tropical beaches.',
  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 85,
  attractions: [
    { name: 'Walled City', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Castillo San Felipe', duration: '2 hours', bestTime: 'Morning', entryFee: 'COP 35,000' },
    { name: 'Getsemaní', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Rosario Islands', duration: 'Full Day', bestTime: 'Morning', entryFee: '$55+' },
    { name: 'Clock Tower', duration: '30 mins', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Plaza Santo Domingo', duration: '1 hour', bestTime: 'Night', entryFee: 'Free' }
  ],
  travelTips: [
    'Wear lightweight clothing.',
    'Use bottled water.',
    'Book island tours in advance.',
    'Stay inside the Old City.',
    'Use official taxis.',
    'Carry sunscreen year-round.'
  ]
},
  {
    id: 'banff-ca', city: 'Banff', country: 'Canada', airportCode: 'YYC', 
    image: `https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/1280px-Moraine_Lake_17092005.jpg${cropParams}`,
    description: 'A resort town within Banff National Park in Alberta, renowned for its mountainous surroundings and hot springs.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'June to August', dailyBudget: 150,
    attractions: [
      { name: 'Lake Louise', duration: 'Half-Day', bestTime: 'Sunrise', entryFee: 'Free (Parking is $36 or take shuttle)' },
      { name: 'Moraine Lake', duration: 'Half-Day', bestTime: 'Morning', entryFee: 'Mandatory Shuttle Booking' },
      { name: 'Banff Gondola (Sulphur Mtn)', duration: '2 hours', bestTime: 'Sunset', entryFee: '~$60 CAD' },
      { name: 'Icefields Parkway Drive', duration: 'Full Day', bestTime: 'Start at 8:00 AM', entryFee: 'Park Pass Required' },
      { name: 'Johnston Canyon', duration: '2-3 hours', bestTime: 'Early Morning', entryFee: 'Free' },
      { name: 'Banff Upper Hot Springs', duration: '1.5 hours', bestTime: 'Evening', entryFee: '~$17 CAD' }
    ],
    travelTips: [
      'Park Pass: You must buy a Parks Canada Discovery Pass to enter, even if you are just driving through.',
      'Moraine Lake Access: Personal vehicles are banned year-round. You MUST book a Parks Canada shuttle months in advance.',
      'Wildlife Safety: You are in grizzly bear country. Buy bear spray, learn how to use it, and hike in groups making noise.',
      'Accommodation: Banff town is incredibly expensive. Stay in Canmore (20 mins away) for cheaper hotels and great food.',
      'Weather: Mountain weather changes rapidly. Even in July, you might experience snow at higher elevations.',
      'Gas: If driving the Icefields Parkway, fuel up in Banff or Lake Louise. There is only one gas station on the 230km route.'
    ]
  },
  {
    id: 'machu-picchu-pe', city: 'Machu Picchu', country: 'Peru', airportCode: 'CUZ', 
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREFPzcaV-IjUShaIaLfCjTMU93BM3qZzshyjNrgw1n8w5Ju9SSN4zpP5c&s=10${cropParams}`,
    description: 'An Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.',
    budget: 'Moderate', tripType: 'Adventure', bestSeason: 'May to October', dailyBudget: 100,
    attractions: [
      { name: 'Machu Picchu Citadel', duration: '3-4 hours', bestTime: '6:00 AM', entryFee: '152 PEN' },
      { name: 'Huayna Picchu Hike', duration: '2 hours', bestTime: '7:00 AM Slot', entryFee: '200 PEN (Includes Citadel)' },
      { name: 'Inca Trail (Classic)', duration: '4 Days', bestTime: 'Book 6 months ahead', entryFee: '~$600+ USD (Guided Tour)' },
      { name: 'Sun Gate (Inti Punku)', duration: '2 hours', bestTime: 'Morning', entryFee: 'Included in Citadel ticket' },
      { name: 'Aguas Calientes Hot Springs', duration: '1-2 hours', bestTime: 'Evening', entryFee: '20 PEN' },
      { name: 'Ollantaytambo Ruins', duration: '2 hours', bestTime: 'Afternoon (On the way from Cusco)', entryFee: '130 PEN (Tourist Ticket)' }
    ],
    travelTips: [
      'Altitude Sickness: Machu Picchu is actually lower than Cusco. Acclimatize in Cusco (3,400m) for 2 days before hiking.',
      'Ticket Booking: You CANNOT buy tickets at the gate. You must buy them online months in advance via the official government site.',
      'Trains: Book your PeruRail or IncaRail tickets as soon as you have your entrance tickets, as they sell out fast.',
      'Passport: You must carry your physical passport to enter the site. You can also get a novelty Machu Picchu stamp inside.',
      'Packing: The weather fluctuates wildly. Wear pants that zip off into shorts and bring a packable rain jacket.',
      'Bug Repellent: The ruins are in the high jungle; biting sandflies are ruthless. Bring strong DEET repellent.'
    ]
  },
  {
  id: 'wellington-nz',
  city: 'Wellington',
  country: 'New Zealand',
  airportCode: 'WLG',
  image: `https://wellingtonnz.bynder.com/transform/a2babfe9-9456-4806-a2d6-629f381f00fd/Cable-Car-02${cropParams}`,
  description: 'New Zealand’s compact capital offering waterfront walks, vibrant cafés, museums, and spectacular coastal scenery.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'December to March',
  dailyBudget: 150,
  attractions: [
    { name: 'Te Papa Museum', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Mount Victoria Lookout', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Wellington Cable Car', duration: '1 hour', bestTime: 'Morning', entryFee: 'NZ$6' },
    { name: 'Botanic Garden', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Oriental Bay', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Cuba Street', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Carry a windproof jacket.',
    'Walk the waterfront.',
    'Use the cable car.',
    'Book ferry trips in advance.',
    'Weather changes quickly.',
    'Visit local cafés.'
  ]
},
  {
  id: 'medellin-co',
  city: 'Medellín',
  country: 'Colombia',
  airportCode: 'MDE',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0EtIkF2ofYFNG0Bb2ZbzgAtYOPTo-XRxhlOp7C-RhP3mDxcG2s39SZ7Fc&s=10${cropParams}`,
  description: 'Known as the City of Eternal Spring, Medellín offers pleasant weather, mountain views, modern transport, and vibrant culture.',
  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'December to March',
  dailyBudget: 65,
  attractions: [
    { name: 'Comuna 13', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Plaza Botero', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Metrocable', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'COP 3,750' },
    { name: 'Jardín Botánico', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Parque Arví', duration: 'Half Day', bestTime: 'Morning', entryFee: 'Metro Fare' },
    { name: 'El Poblado', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Use the Metro.',
    'Stay in El Poblado.',
    'Learn basic Spanish phrases.',
    'Avoid displaying valuables.',
    'Weather is pleasant year-round.',
    'Use Uber or official taxis.'
  ]
},
  {
    id: 'swiss-alps-ch', city: 'Swiss Alps', country: 'Switzerland', airportCode: 'ZRH', 
    image: `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b${cropParams}`,
    description: 'The highest and most extensive mountain range system that lies entirely in Europe.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'December to March', dailyBudget: 250,
    attractions: [
      { name: 'The Matterhorn (Zermatt)', duration: 'Full Day', bestTime: 'Sunrise', entryFee: 'Free to view (Trains extra)' },
      { name: 'Glacier Express Train', duration: '8 hours', bestTime: 'Daytime', entryFee: '~150+ CHF' },
      { name: 'Gornergrat Railway', duration: '3 hours', bestTime: 'Clear Mornings', entryFee: '~130 CHF' },
      { name: 'Aletsch Glacier', duration: 'Half-Day', bestTime: 'Afternoon', entryFee: 'Cable car fee varies' },
      { name: 'Oeschinensee', duration: 'Half-Day', bestTime: 'Summer Mornings', entryFee: '30 CHF (Cable car)' },
      { name: 'St. Moritz Skiing', duration: 'Full Day', bestTime: 'Winter', entryFee: '~80 CHF (Lift Pass)' }
    ],
    travelTips: [
      'Swiss Travel Pass: Absolute necessity for tourists. Covers trains, buses, boats, and gives 50% off most mountain cable cars.',
      'Car-Free Villages: Places like Zermatt and Wengen do not allow cars. You must park in the valley and take a train up.',
      'Weather: Alpine weather is unpredictable. Use the "MeteoSwiss" app; it is far more accurate than standard weather apps.',
      'Hiking Rescue: Buy REGA (Swiss air rescue) patronage for 40 CHF just in case you need a helicopter rescue on a trail.',
      'Food Costs: Meat is notoriously expensive in Switzerland. Opt for cheese-heavy local dishes like Raclette and Fondue.',
      'Sundays: Supermarkets and shops close on Sundays. Stock up on hiking snacks on Saturday.'
    ]
  },
  {
  id: 'bruges-be',
  city: 'Bruges',
  country: 'Belgium',
  airportCode: 'BRU',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG69CbP1MtlECmWH_Hu46AXM1nspJmZm0NB5vJ3CDqGCXCvz29FtnkQdsR&s=10${cropParams}`,
  description: 'A fairy-tale medieval city with canals, cobbled streets, chocolate shops, and centuries-old architecture.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'April to October',
  dailyBudget: 120,
  attractions: [
    { name: 'Market Square', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Belfry of Bruges', duration: '1.5 hours', bestTime: 'Morning', entryFee: '€15' },
    { name: 'Canal Boat Tour', duration: '40 mins', bestTime: 'Afternoon', entryFee: '€15' },
    { name: 'Church of Our Lady', duration: '1 hour', bestTime: 'Morning', entryFee: '€8' },
    { name: 'Chocolate Museum', duration: '2 hours', bestTime: 'Afternoon', entryFee: '€14' },
    { name: 'Minnewater Park', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' }
  ],
  travelTips: [
    'Explore on foot.',
    'Try authentic Belgian waffles.',
    'Book canal tours early.',
    'Wear comfortable walking shoes.',
    'Many shops close early.',
    'Visit during weekdays for fewer crowds.'
  ]
},
{
  id: 'nairobi-ke',
  city: 'Nairobi',
  country: 'Kenya',
  airportCode: 'NBO',
  image: `https://www.saltholidays.com/wp-content/uploads/2026/06/NNP-Weekend-deal-for-Site-1.jpg${cropParams}`,
  description: 'Kenya’s vibrant capital offering wildlife experiences, national parks, museums, and a gateway to African safaris.',
  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'June to October',
  dailyBudget: 95,
  attractions: [
    { name: 'Nairobi National Park', duration: 'Half Day', bestTime: 'Morning', entryFee: '$43' },
    { name: 'Giraffe Centre', duration: '2 hours', bestTime: 'Morning', entryFee: '$15' },
    { name: 'David Sheldrick Elephant Orphanage', duration: '2 hours', bestTime: '11:00 AM', entryFee: '$20' },
    { name: 'Karen Blixen Museum', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '$12' },
    { name: 'Kazuri Beads Factory', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Maasai Market', duration: '2 hours', bestTime: 'Weekend', entryFee: 'Free' }
  ],
  travelTips: [
    'Book safaris ahead.',
    'Use trusted taxis.',
    'Carry cash for markets.',
    'Respect wildlife.',
    'Wear neutral-colored clothing on safaris.',
    'Avoid walking alone late at night.'
  ]
},
{
  id: 'victoria-falls-zw',
  city: 'Victoria Falls',
  country: 'Zimbabwe',
  airportCode: 'VFA',
  image: `https://static.wixstatic.com/media/a5e6eb_107dcd6614ee42f995b323c3275345b6~mv2.jpg/v1/fill/w_1000,h_750,al_c,q_85,usm_0.66_1.00_0.01/a5e6eb_107dcd6614ee42f995b323c3275345b6~mv2.jpg${cropParams}`,
  description: 'Home to one of the world’s largest waterfalls, offering breathtaking scenery, adventure sports, and unforgettable wildlife.',
  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to August',
  dailyBudget: 130,
  attractions: [
    { name: 'Victoria Falls National Park', duration: '3 hours', bestTime: 'Morning', entryFee: '$50' },
    { name: 'Devil’s Pool', duration: '3 hours', bestTime: 'Dry Season', entryFee: '$120+' },
    { name: 'Sunset Zambezi Cruise', duration: '2 hours', bestTime: 'Sunset', entryFee: '$60' },
    { name: 'Helicopter Flight', duration: '30 mins', bestTime: 'Morning', entryFee: '$175+' },
    { name: 'Victoria Falls Bridge', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Local Craft Market', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' }
  ],
  travelTips: [
    'Carry a waterproof bag.',
    'Visit during dry season for Devil’s Pool.',
    'Wear waterproof shoes.',
    'Book helicopter rides early.',
    'Bring insect repellent.',
    'Carry US dollars.'
  ]
},
{
  id: 'perth-au',
  city: 'Perth',
  country: 'Australia',
  airportCode: 'PER',
  image: `https://www.uwa.edu.au/seek-wisdom/-/media/project/uwa/uwa/seek-wisdom/perth-sunset---seekers-space-banner.jpg?w=1440&hash=52FCB4F1A26AA924A81D5F928EEE5F08${cropParams}`,
  description: 'A sunny coastal city known for beautiful beaches, parks, nearby wineries, and relaxed Australian lifestyle.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'September to November',
  dailyBudget: 165,
  attractions: [
    { name: 'Kings Park', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Cottesloe Beach', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Elizabeth Quay', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Rottnest Island', duration: 'Full Day', bestTime: 'Morning', entryFee: 'Ferry Fare' },
    { name: 'Perth Mint', duration: '1 hour', bestTime: 'Morning', entryFee: 'A$25' },
    { name: 'Swan Valley', duration: 'Half Day', bestTime: 'Afternoon', entryFee: 'Varies' }
  ],
  travelTips: [
    'Use a SmartRider card.',
    'Visit Rottnest Island early.',
    'Carry sunscreen.',
    'Drink plenty of water.',
    'Rent a car for day trips.',
    'Watch sunsets at Cottesloe Beach.'
  ]
},
  {
    id: 'bora-bora-pf', city: 'Bora Bora', country: 'French Polynesia', airportCode: 'BOB', 
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnIlVOHUwiCAA0D-ZGGHmh0s1gCkVUXOW0mroWCKTQ3cHN-Zc0LIMuGs8&s=10${cropParams}`,
    description: 'A small South Pacific island northwest of Tahiti in French Polynesia, surrounded by sand-fringed motus.',
    budget: 'Luxury', tripType: 'Luxury', bestSeason: 'May to October', dailyBudget: 500,
    attractions: [
      { name: 'Mount Otemanu', duration: 'Half-Day', bestTime: 'Morning (4x4 Tour)', entryFee: '~$100 USD (Tour)' },
      { name: 'Matira Beach', duration: 'Half-Day', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Shark and Ray Snorkel Safari', duration: '3 hours', bestTime: 'Morning', entryFee: '~$80 USD' },
      { name: 'Coral Gardens', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free (if self-guided)' },
      { name: 'Tahiti Pearl Market', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free to browse' },
      { name: 'Overwater Bungalow Relaxing', duration: 'All Day', bestTime: 'Sunset', entryFee: 'Included in Resort' }
    ],
    travelTips: [
      'Flight Logistics: You must fly into Tahiti (PPT) and take a 45-minute inter-island flight on Air Tahiti to reach Bora Bora.',
      'Island Geography: The luxury resorts are located on "Motus" (coral reef islets) surrounding the main island, accessible only by boat.',
      'Dining: Resort food is extremely expensive. If staying on a Motus, taking the resort shuttle to the main island for dinner can save money.',
      'Currency: The local currency is the Pacific Franc (XPF). Cards are accepted at resorts, but cash is needed for local markets.',
      'Language: French and Tahitian are the official languages. "Ia orana" means hello, and "Mauruuru" means thank you.',
      'Packing: Bring all reef-safe sunscreen, medications, and electronics with you. Buying them on the island is exorbitantly priced.'
    ]
  },
  {
  id: 'da-nang-vn',
  city: 'Da Nang',
  country: 'Vietnam',
  airportCode: 'DAD',
  image: `https://images.contentstack.io/v3/assets/blt06f605a34f1194ff/bltbf5d44d7fe2a8e65/6749bcc97db4a13268ec6f9b/iStock-1559571884-MOBILE-HEADER.jpg?fit=crop&auto=webp&quality=60&crop=smart&format=avif${cropParams}`,
  description: 'A beautiful coastal city offering sandy beaches, mountain views, and easy access to central Vietnam’s cultural attractions.',
  budget: 'Budget',
  tripType: 'Beach',
  bestSeason: 'February to August',
  dailyBudget: 55,
  attractions: [
    { name: 'My Khe Beach', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Golden Bridge', duration: '3 hours', bestTime: 'Morning', entryFee: '900,000 VND' },
    { name: 'Dragon Bridge', duration: '1 hour', bestTime: 'Night', entryFee: 'Free' },
    { name: 'Marble Mountains', duration: '2 hours', bestTime: 'Morning', entryFee: '40,000 VND' },
    { name: 'Ba Na Hills', duration: 'Full Day', bestTime: 'Morning', entryFee: '900,000 VND' },
    { name: 'Han Market', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' }
  ],
  travelTips: [
    'Rent a scooter if experienced.',
    'Visit Golden Bridge early.',
    'Seafood is excellent.',
    'Bring sunscreen.',
    'Stay near My Khe Beach.',
    'Use Grab for short trips.'
  ]
},
{
  id: 'tbilisi-ge',
  city: 'Tbilisi',
  country: 'Georgia',
  airportCode: 'TBS',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL8BTUuj3rW7GKYxfy0gqEMR52LqTTjxWDCKHKvOhlMK25o363ecrehAE5&s=10${cropParams}`,
  description: 'Georgia’s charming capital known for colorful balconies, sulfur baths, ancient churches, and mountain scenery.',
  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'April to June',
  dailyBudget: 60,
  attractions: [
    { name: 'Old Town', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Narikala Fortress', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Sulfur Baths', duration: '2 hours', bestTime: 'Evening', entryFee: '$15+' },
    { name: 'Bridge of Peace', duration: '1 hour', bestTime: 'Night', entryFee: 'Free' },
    { name: 'Mtatsminda Park', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Holy Trinity Cathedral', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' }
  ],
  travelTips: [
    'Try Georgian cuisine.',
    'Use Bolt instead of taxis.',
    'Carry cash.',
    'Wine is affordable.',
    'Walk through Old Town.',
    'Spring is the best season.'
  ]
},
{
  id: 'baku-az',
  city: 'Baku',
  country: 'Azerbaijan',
  airportCode: 'GYD',
  image: `https://www.grandroyaltours.in/uploads/package-images/11-11-2024_01-30-36_baku1.jpg${cropParams}`,
  description: 'A modern Caspian Sea city combining futuristic architecture with a beautifully preserved medieval old town.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'April to June',
  dailyBudget: 70,
  attractions: [
    { name: 'Flame Towers', duration: '1 hour', bestTime: 'Night', entryFee: 'Free' },
    { name: 'Old City', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Heydar Aliyev Center', duration: '2 hours', bestTime: 'Afternoon', entryFee: '₼15' },
    { name: 'Baku Boulevard', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Maiden Tower', duration: '1 hour', bestTime: 'Morning', entryFee: '₼15' },
    { name: 'Highland Park', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' }
  ],
  travelTips: [
    'Use Bolt.',
    'Carry local currency.',
    'Dress modestly at religious sites.',
    'Walk the waterfront.',
    'Visit during spring.',
    'Book museums online.'
  ]
},
{
  id: 'kathmandu-np',
  city: 'Kathmandu',
  country: 'Nepal',
  airportCode: 'KTM',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiWmSrH8MyzH8zIK1XmYPTeueWo3i-DKCdyJbp9ZemW5Dx6S10_grxw3U&s=10${cropParams}`,
  description: 'Nepal’s cultural capital featuring ancient temples, Himalayan views, colorful markets, and spiritual experiences.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'October to November',
  dailyBudget: 45,
  attractions: [
    { name: 'Boudhanath Stupa', duration: '2 hours', bestTime: 'Morning', entryFee: 'NPR 400' },
    { name: 'Swayambhunath Temple', duration: '2 hours', bestTime: 'Sunrise', entryFee: 'NPR 200' },
    { name: 'Kathmandu Durbar Square', duration: '2 hours', bestTime: 'Morning', entryFee: 'NPR 1000' },
    { name: 'Pashupatinath Temple', duration: '2 hours', bestTime: 'Evening', entryFee: 'NPR 1000' },
    { name: 'Thamel', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Garden of Dreams', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'NPR 400' }
  ],
  travelTips: [
    'Drink bottled water.',
    'Carry cash.',
    'Wear modest clothing.',
    'Use taxis with meters.',
    'Prepare for high altitude if trekking.',
    'Respect religious customs.'
  ]
},
{
  id: 'ella-lk',
  city: 'Ella',
  country: 'Sri Lanka',
  airportCode: 'CMB',
  image: `https://www.wanderlustchloe.com/wp-content/uploads/2024/09/things-to-do-in-ella-sri-lanka.jpg${cropParams}`,
  description: 'A peaceful hill town surrounded by tea plantations, waterfalls, mountain views, and scenic train journeys.',
  budget: 'Budget',
  tripType: 'Nature',
  bestSeason: 'January to April',
  dailyBudget: 45,
  attractions: [
    { name: 'Nine Arch Bridge', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Little Adam’s Peak', duration: '2 hours', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Ella Rock', duration: '4 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Ravana Falls', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Tea Factory Tour', duration: '2 hours', bestTime: 'Morning', entryFee: 'LKR 1000' },
    { name: 'Scenic Train Ride', duration: '4 hours', bestTime: 'Morning', entryFee: 'Varies' }
  ],
  travelTips: [
    'Book train tickets early.',
    'Carry hiking shoes.',
    'Start hikes before sunrise.',
    'Expect changing weather.',
    'Cash is useful.',
    'Stay at hillside hotels.'
  ]
},
{
  id: 'taipei-tw',
  city: 'Taipei',
  country: 'Taiwan',
  airportCode: 'TPE',
  image: `https://media.timeout.com/images/106402450/750/422/image.jpg${cropParams}`,
  description: 'Taiwan’s modern capital, famous for Taipei 101, vibrant night markets, temples, and outstanding street food.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'October to April',
  dailyBudget: 90,
  attractions: [
    { name: 'Taipei 101', duration: '2 hours', bestTime: 'Sunset', entryFee: 'NT$600' },
    { name: 'Shilin Night Market', duration: '2 hours', bestTime: 'Night', entryFee: 'Free' },
    { name: 'Chiang Kai-shek Memorial', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Longshan Temple', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Elephant Mountain', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'National Palace Museum', duration: '3 hours', bestTime: 'Morning', entryFee: 'NT$350' }
  ],
  travelTips: [
    'Buy an EasyCard.',
    'Night markets are cash-friendly.',
    'Metro is excellent.',
    'Tap water should be boiled.',
    'Typhoon season is summer.',
    'Respect temple etiquette.'
  ]
},
  {
    id: 'seychelles-sc', city: 'Seychelles', country: 'Seychelles', airportCode: 'SEZ', 
    image: `https://cdn.conscious-explorer.com/keycdn/file/a51da0068065eaead885f44f4e029d36835038a5d42082201d17f28559b2d4b5/SJoUTslQaytZjQm0.webp${cropParams}`,
    description: 'An archipelago of 115 islands in the Indian Ocean, off East Africa.',
    budget: 'Luxury', tripType: 'Beach', bestSeason: 'April to May', dailyBudget: 250,
    attractions: [
      { name: 'Anse Source d\'Argent (La Digue)', duration: 'Half-Day', bestTime: 'Early Morning (to beat crowds)', entryFee: '115 SCR' },
      { name: 'Vallée de Mai (Praslin)', duration: '2 hours', bestTime: 'Morning', entryFee: '350 SCR' },
      { name: 'Anse Lazio (Praslin)', duration: 'Half-Day', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Curieuse Island (Giant Tortoises)', duration: '3 hours', bestTime: 'Morning Tour', entryFee: '300 SCR (Plus boat)' },
      { name: 'Beau Vallon (Mahé)', duration: '2-3 hours', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Morne Seychellois National Park', duration: 'Half-Day', bestTime: 'Morning Hike', entryFee: 'Free' }
    ],
    travelTips: [
      'Island Hopping: The Cat Cocos ferry connects the main islands (Mahé, Praslin, La Digue). Pre-book tickets online during high season.',
      'Transport (La Digue): There are practically no cars on La Digue. You must rent a bicycle to get around the island.',
      'Currency: Seychellois Rupee (SCR) is used. EUR and USD are widely accepted, but you will get terrible exchange rates.',
      'Marine Safety: During the Southeast Monsoon (May to September), seas can be very rough and seaweedy on certain coasts. Check local conditions.',
      'Flora/Fauna: Do not take the famous Coco de Mer nut from the island unless you have an official, expensive government certificate.',
      'Food: Try Creole cuisine. Takeaway stands on the street offer incredible grilled fish and curries for $5, compared to $50 at resorts.'
    ]
  },
  {
  id: 'dubrovnik-hr',
  city: 'Dubrovnik',
  country: 'Croatia',
  airportCode: 'DBV',
  image: `https://www.historyhit.com/app/uploads/bis-images/5156364/Dubrovnik-Cathedral-788x537.jpg?x64072${cropParams}`,
  description: 'Croatia’s famous Adriatic city, known for medieval walls, crystal-clear waters, historic streets, and Game of Thrones filming locations.',
  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'May to September',
  dailyBudget: 120,
  attractions: [
    { name: 'City Walls', duration: '2 hours', bestTime: '8:00 AM', entryFee: '€35' },
    { name: 'Old Town', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Lovrijenac Fortress', duration: '1 hour', bestTime: 'Morning', entryFee: 'Included with Walls' },
    { name: 'Cable Car', duration: '1 hour', bestTime: 'Sunset', entryFee: '€30' },
    { name: 'Lokrum Island', duration: '4 hours', bestTime: 'Morning', entryFee: '€27 (Ferry)' },
    { name: 'Banje Beach', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' }
  ],
  travelTips: [
    'Visit city walls early to avoid crowds.',
    'Wear comfortable shoes on stone streets.',
    'Carry sunscreen during summer.',
    'Use ferries for island trips.',
    'Book accommodations early in peak season.',
    'Drink plenty of water while exploring.'
  ]
},
{
  id: 'madeira-pt',
  city: 'Madeira',
  country: 'Portugal',
  airportCode: 'FNC',
  image: `https://blog.avantidestinations.com/hubfs/Blog%20-%20Madeira%20Header%20(2).jpg${cropParams}`,
  description: 'A breathtaking Portuguese island in the Atlantic, famous for dramatic cliffs, lush forests, scenic hiking trails, and year-round spring-like weather.',
  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'April to October',
  dailyBudget: 125,
  attractions: [
    { name: 'Cabo Girão Skywalk', duration: '1 hour', bestTime: 'Morning', entryFee: '€3' },
    { name: 'Pico do Arieiro', duration: '3 hours', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Funchal Old Town', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Monte Cable Car', duration: '1.5 hours', bestTime: 'Morning', entryFee: '€20' },
    { name: 'Levada Walks', duration: '4 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Porto Moniz Natural Pools', duration: '3 hours', bestTime: 'Afternoon', entryFee: '€3' }
  ],
  travelTips: [
    'Rent a car to explore the island freely.',
    'Start mountain hikes early to avoid clouds.',
    'Carry a light jacket as temperatures change quickly in higher elevations.',
    'Book whale and dolphin watching tours in advance.',
    'Wear hiking shoes for Levada trails.',
    'Try the local Madeira wine and Espetada beef skewers.'
  ]
},
{
  id: 'kotor-me',
  city: 'Kotor',
  country: 'Montenegro',
  airportCode: 'TIV',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LmgBnHW3C92yU5oOpjAH1ZfJM4AmzEHxgnJ5WGckAQ&s=10${cropParams}`,
  description: 'A stunning Adriatic coastal town known for its medieval old town, dramatic mountains, and beautiful bay.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to September',
  dailyBudget: 110,
  attractions: [
    { name: 'Kotor Old Town', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'San Giovanni Fortress', duration: '2 hours', bestTime: 'Sunrise', entryFee: '€15' },
    { name: 'Bay of Kotor Boat Tour', duration: '4 hours', bestTime: 'Morning', entryFee: '€30+' },
    { name: 'Perast', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Our Lady of the Rocks', duration: '1 hour', bestTime: 'Afternoon', entryFee: '€5 Boat' },
    { name: 'Kotor Marina', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Visit the fortress at sunrise to avoid crowds.',
    'Wear comfortable shoes for steep stone streets.',
    'Book boat tours in advance during summer.',
    'Carry cash for small local restaurants.',
    'Stay inside the Old Town for the best experience.',
    'Avoid driving during peak tourist season.'
  ]
},
{
  id: 'nusa-penida-id',
  city: 'Nusa Penida',
  country: 'Indonesia',
  airportCode: 'DPS',
  image: `https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86${cropParams}`,
  description: 'A breathtaking island off the coast of Bali, famous for dramatic cliffs, turquoise waters, pristine beaches, and incredible snorkeling with manta rays.',
  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'April to October',
  dailyBudget: 85,
  attractions: [
    { name: 'Kelingking Beach', duration: '2 hours', bestTime: 'Morning', entryFee: 'IDR 10,000' },
    { name: 'Angel’s Billabong', duration: '1 hour', bestTime: 'Morning (Low Tide)', entryFee: 'Free' },
    { name: 'Broken Beach (Pasih Uug)', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Crystal Bay', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Manta Point Snorkeling', duration: '4 hours', bestTime: 'Morning', entryFee: 'IDR 400,000+' },
    { name: 'Diamond Beach', duration: '2 hours', bestTime: 'Sunrise', entryFee: 'IDR 35,000' }
  ],
  travelTips: [
    'Rent a scooter only if you are confident riding on steep and uneven roads.',
    'Book snorkeling tours early, especially during the dry season.',
    'Carry cash since ATMs are limited across the island.',
    'Wear sturdy footwear if hiking down to Kelingking or Diamond Beach.',
    'Start your day early to avoid crowds at the main viewpoints.',
    'Bring plenty of water and reef-safe sunscreen as facilities are limited.'
  ]
},
{
  id: 'lake-bled-si',
  city: 'Lake Bled',
  country: 'Slovenia',
  airportCode: 'LJU',
  image: `https://hips.hearstapps.com/hmg-prod/images/lake-bled-with-bled-island-in-winter-slovenia-royalty-free-image-1733846146.pjpeg?crop=0.668xw:1.00xh;0.208xw,0&resize=1200:*${cropParams}`,
  description: 'Slovenia’s iconic alpine lake, famous for its emerald waters, charming island church, medieval castle, and breathtaking mountain scenery.',
  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to September',
  dailyBudget: 130,
  attractions: [
    { name: 'Lake Bled Island & Church', duration: '2 hours', bestTime: 'Morning', entryFee: '€18 (Pletna Boat)' },
    { name: 'Bled Castle', duration: '2 hours', bestTime: 'Morning', entryFee: '€18' },
    { name: 'Ojstrica Viewpoint', duration: '1.5 hours', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Lake Bled Walking Trail', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Vintgar Gorge', duration: '2 hours', bestTime: 'Morning', entryFee: '€15' },
    { name: 'Traditional Pletna Boat Ride', duration: '1 hour', bestTime: 'Afternoon', entryFee: '€18' }
  ],
  travelTips: [
    'Visit Ojstrica Viewpoint at sunrise for the best panoramic photos.',
    'Walk the entire lake loop—it takes about 90 minutes.',
    'Try the famous Bled Cream Cake (Kremšnita).',
    'Book accommodation early during summer weekends.',
    'Bring a light jacket as evenings can be cool even in summer.',
    'Use Ljubljana as a base if you are planning multiple day trips.'
  ]
},
{
  id: 'hallstatt-at',
  city: 'Hallstatt',
  country: 'Austria',
  airportCode: 'SZG',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ06iKh9xikQ_5TrmEm61kJoqwpMucBfIMUT4n_70RW16aOQyxcxCo1gCNb&s=10${cropParams}`,
  description: 'A picturesque lakeside village in the Austrian Alps, famous for its fairytale scenery, colorful houses, and breathtaking mountain views.',
  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to October',
  dailyBudget: 145,
  attractions: [
    { name: 'Hallstatt Skywalk', duration: '1.5 hours', bestTime: 'Morning', entryFee: '€22 (Funicular Included)' },
    { name: 'Hallstatt Market Square', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Hallstatt Salt Mine', duration: '3 hours', bestTime: 'Morning', entryFee: '€40' },
    { name: 'Lake Hallstatt Boat Ride', duration: '1 hour', bestTime: 'Afternoon', entryFee: '€18' },
    { name: 'Bone House (Beinhaus)', duration: '30 mins', bestTime: 'Afternoon', entryFee: '€2' },
    { name: 'Five Fingers Viewpoint', duration: '3 hours', bestTime: 'Sunset', entryFee: '€45 (Cable Car Included)' }
  ],
  travelTips: [
    'Arrive before 9:00 AM to avoid tour bus crowds.',
    'Purchase the Salzkammergut Card if visiting nearby attractions.',
    'Stay overnight to experience Hallstatt after day-trippers leave.',
    'Wear comfortable walking shoes as most streets are steep and cobblestoned.',
    'Bring a light jacket even during summer because mornings can be chilly.',
    'Cash is useful at small cafés and souvenir shops.'
  ]
},
{
  id: 'tromso-no',
  city: 'Tromsø',
  country: 'Norway',
  airportCode: 'TOS',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2dFsIknlMUrJYjKBOXQlL5-JnluSRLFAsjdmV0duzSRQ-o9KPlT3i3zI&s=10${cropParams}`,
  description: 'A breathtaking Arctic city renowned for the Northern Lights, midnight sun, dramatic fjords, snowy mountains, and unforgettable winter adventures.',
  budget: 'Luxury',
  tripType: 'Adventure',
  bestSeason: 'November to March',
  dailyBudget: 190,
  attractions: [
    { name: 'Northern Lights Tour', duration: '5 hours', bestTime: '8:00 PM', entryFee: 'NOK 1,500+' },
    { name: 'Fjellheisen Cable Car', duration: '2 hours', bestTime: 'Sunset', entryFee: 'NOK 495' },
    { name: 'Arctic Cathedral', duration: '1 hour', bestTime: 'Morning', entryFee: 'NOK 80' },
    { name: 'Polaria Arctic Experience', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'NOK 295' },
    { name: 'Dog Sledding Adventure', duration: '4 hours', bestTime: 'Morning', entryFee: 'NOK 1,800+' },
    { name: 'Tromsø Harbour', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Visit between November and March for the highest chance of seeing the Northern Lights.',
    'Dress in thermal layers with insulated boots, gloves, and a warm hat.',
    'Book Northern Lights tours several weeks in advance during peak season.',
    'Weather changes quickly, so always carry waterproof outerwear.',
    'Use the Tromsø Pass for discounts on museums and attractions.',
    'Bring a tripod if you plan to photograph the Aurora Borealis.'
  ]
},
{
  id: 'muscat-om',
  city: 'Muscat',
  country: 'Oman',
  airportCode: 'MCT',
  image: `https://cdn.pixabay.com/photo/2021/01/30/12/31/sultan-qaboos-grand-mosque-5963726_640.jpg${cropParams}`,
  description: 'Oman’s elegant capital blends Arabian heritage, pristine beaches, dramatic mountains, and magnificent mosques into one unforgettable destination.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'October to April',
  dailyBudget: 120,
  attractions: [
    { name: 'Sultan Qaboos Grand Mosque', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Mutrah Souq', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Mutrah Corniche', duration: '1.5 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Royal Opera House Muscat', duration: '2 hours', bestTime: 'Evening', entryFee: 'OMR 3+' },
    { name: 'Al Alam Palace', duration: '1 hour', bestTime: 'Morning', entryFee: 'Exterior Only' },
    { name: 'Wadi Shab Day Trip', duration: 'Full Day', bestTime: '7:00 AM', entryFee: 'OMR 2 (Boat) + Tour Cost' }
  ],
  travelTips: [
    'Dress modestly, especially when visiting mosques and cultural sites.',
    'Visit the Grand Mosque before 11:00 AM as it is closed to non-Muslims later in the day.',
    'Rent a car if you plan to explore wadis, mountains, or nearby coastal towns.',
    'Carry sunscreen and plenty of water, even during winter months.',
    'Try authentic Omani dishes such as Shuwa, Majboos, and Halwa.',
    'Friday mornings are quieter as many attractions open later after prayers.'
  ]
},
{
  id: 'quebec-city-ca',
  city: 'Québec City',
  country: 'Canada',
  airportCode: 'YQB',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPk6I1vWLS-ywUEK1t6FYXLOKdqrzMoW_AkHazfhr6tZIPI7lFmht6SY4&s=10${cropParams}`,
  description: 'One of North America’s oldest cities, Québec City is renowned for its charming cobblestone streets, French heritage, historic architecture, and iconic Château Frontenac.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'June to October',
  dailyBudget: 150,
  attractions: [
    { name: 'Old Québec (UNESCO World Heritage Site)', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Château Frontenac', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'CA$20 (Guided Tour)' },
    { name: 'Montmorency Falls', duration: '2 hours', bestTime: 'Morning', entryFee: 'CA$9' },
    { name: 'Terrasse Dufferin', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Petit-Champlain District', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Citadel of Québec', duration: '2 hours', bestTime: 'Morning', entryFee: 'CA$22' }
  ],
  travelTips: [
    'Walk through Old Québec to fully experience the city’s European charm.',
    'Visit during autumn for colorful foliage or winter for the famous Québec Winter Carnival.',
    'Learn a few basic French phrases—locals appreciate the effort.',
    'Wear comfortable shoes since many streets are steep and cobblestoned.',
    'Book Château Frontenac tours in advance during peak travel season.',
    'Try local specialties like poutine, maple treats, and tourtière.'
  ]
},
{
  id: 'uyuni-salt-flats-bo',
  city: 'Uyuni Salt Flats',
  country: 'Bolivia',
  airportCode: 'UYU',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Emin4KZi9B1uI3g26q51VMAsvbfsMUc2GrnZEp8CiRccr7QR9SxE_UU&s=10${cropParams}`,
  description: 'The world’s largest salt flat, famous for its endless white landscape, breathtaking mirror reflections during the rainy season, colorful lagoons, and unforgettable stargazing.',
  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'December to April',
  dailyBudget: 110,
  attractions: [
    { name: 'Salar de Uyuni Mirror Effect', duration: 'Half Day', bestTime: 'Sunrise', entryFee: 'Included in Tour' },
    { name: 'Incahuasi Island', duration: '2 hours', bestTime: 'Morning', entryFee: 'BOB 30' },
    { name: 'Train Cemetery', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Red Lagoon (Laguna Colorada)', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'BOB 150 (Reserve Fee)' },
    { name: 'Siloli Desert', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Included in Tour' },
    { name: 'Stargazing Experience', duration: '2 hours', bestTime: 'Night', entryFee: 'Included in Overnight Tour' }
  ],
  travelTips: [
    'Visit between December and April for the famous mirror reflection after rainfall.',
    'Carry warm clothing as temperatures can drop below freezing at night.',
    'Bring sunglasses and sunscreen because the salt reflects intense sunlight.',
    'Book a multi-day 4x4 tour to experience nearby lagoons, deserts, and geysers.',
    'Drink plenty of water and take time to acclimatize to the high altitude.',
    'Protect your camera and electronics from salt and dust using waterproof bags.'
  ]
},
{
  id: 'patagonia-ar-cl',
  city: 'Patagonia',
  country: 'Argentina & Chile',
  airportCode: 'FTE',
  image: `https://www.shutterstock.com/image-photo/autumn-season-patagonia-mountains-south-260nw-2769274697.jpg${cropParams}`,
  description: 'A legendary wilderness spanning southern Argentina and Chile, renowned for towering glaciers, rugged mountain peaks, turquoise lakes, and world-class hiking adventures.',
  budget: 'Luxury',
  tripType: 'Adventure',
  bestSeason: 'November to March',
  dailyBudget: 180,
  attractions: [
    { name: 'Torres del Paine National Park', duration: 'Full Day', bestTime: 'Early Morning', entryFee: 'CLP 35,000' },
    { name: 'Perito Moreno Glacier', duration: '4 hours', bestTime: 'Morning', entryFee: 'ARS 45,000' },
    { name: 'Mount Fitz Roy (Laguna de los Tres)', duration: 'Full Day', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Grey Glacier Boat Tour', duration: '3 hours', bestTime: 'Afternoon', entryFee: '$120+' },
    { name: 'Lake Pehoé', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Included in Park Entry' },
    { name: 'El Chaltén Village', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Visit between November and March for the best hiking conditions.',
    'Pack waterproof clothing and multiple layers as weather changes rapidly.',
    'Book accommodations and park permits several months in advance.',
    'Carry enough food and water for long hikes since facilities are limited.',
    'Wear sturdy hiking boots suitable for uneven mountain terrain.',
    'Expect strong winds throughout the region, even during summer.'
  ]
},
{
  id: 'gili-islands-id',
  city: 'Gili Islands',
  country: 'Indonesia',
  airportCode: 'LOP',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY8vjTUYqjX7YYPGmrhPNzDpHU3x-O7elTv2iW79fMIUVRnRSIAXNYAXVi&s=10${cropParams}`,
  description: 'A stunning trio of tropical islands near Lombok, famous for crystal-clear waters, vibrant coral reefs, sea turtles, white-sand beaches, and a laid-back island atmosphere.',
  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'April to October',
  dailyBudget: 80,
  attractions: [
    { name: 'Gili Trawangan Beach', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Sea Turtle Snorkeling Tour', duration: '3 hours', bestTime: 'Morning', entryFee: 'IDR 250,000+' },
    { name: 'Gili Air', duration: 'Half Day', bestTime: 'Afternoon', entryFee: 'Boat Fare' },
    { name: 'Gili Meno Underwater Statues', duration: '2 hours', bestTime: 'Morning', entryFee: 'Included in Snorkeling Tour' },
    { name: 'Sunset Swing', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Island Cycling', duration: '2 hours', bestTime: 'Evening', entryFee: 'IDR 75,000 (Bike Rental)' }
  ],
  travelTips: [
    'There are no cars or motorbikes—walk, cycle, or use horse carts.',
    'Book snorkeling trips early in the morning for the calmest waters.',
    'Bring plenty of cash, as ATMs are limited and can run out of money.',
    'Use reef-safe sunscreen to help protect the coral reefs.',
    'Take a fast boat from Bali or Lombok and book tickets in advance during peak season.',
    'Stay overnight to enjoy the islands after most day-trippers leave.'
  ]
},
{
  id: 'azores-pt',
  city: 'Azores',
  country: 'Portugal',
  airportCode: 'PDL',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEkYhs8UT40ZfIPd8bCzyRhlzOaiaz3KjDBnNoqmwNI_g-rjpgM367Xd8&s=10${cropParams}`,
  description: 'A spectacular Portuguese archipelago in the Atlantic Ocean, renowned for volcanic landscapes, crater lakes, whale watching, hot springs, and lush green scenery.',
  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to September',
  dailyBudget: 120,
  attractions: [
    { name: 'Sete Cidades Crater Lakes', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Lagoa do Fogo', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Terra Nostra Park & Hot Springs', duration: '3 hours', bestTime: 'Afternoon', entryFee: '€16' },
    { name: 'Whale & Dolphin Watching Tour', duration: '4 hours', bestTime: 'Morning', entryFee: '€65+' },
    { name: 'Ponta Delgada Historic Centre', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Furnas Geothermal Valley', duration: '3 hours', bestTime: 'Afternoon', entryFee: '€3' }
  ],
  travelTips: [
    'Rent a car to explore the islands at your own pace.',
    'Weather can change quickly, so pack waterproof clothing.',
    'Book whale watching tours several days in advance.',
    'Try the famous Cozido das Furnas, cooked using geothermal heat.',
    'Visit viewpoints early in the morning for clearer skies.',
    'Carry comfortable hiking shoes for volcanic trails.'
  ]
},
{
  id: 'chefchaouen-ma',
  city: 'Chefchaouen',
  country: 'Morocco',
  airportCode: 'TTU',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XDEmxD6VLEwNtrDeuntBC_Ear9NlsepvGbf7Xi7GiqHbqf0aS8l89kw&s=10${cropParams}`,
  description: 'Known as the Blue Pearl of Morocco, Chefchaouen is a charming mountain town famous for its blue-painted streets, artisan markets, and relaxed atmosphere.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'March to May',
  dailyBudget: 70,
  attractions: [
    { name: 'Blue Medina', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Kasbah Museum', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'MAD 60' },
    { name: 'Plaza Uta el-Hammam', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Spanish Mosque Viewpoint', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Ras El Maa Waterfall', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Souk & Artisan Shops', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' }
  ],
  travelTips: [
    'Visit early in the morning for crowd-free photos of the blue streets.',
    'Wear comfortable shoes as the medina has steep cobblestone lanes.',
    'Carry cash because many local shops do not accept cards.',
    'Bargaining is common in the local markets.',
    'Respect local customs by dressing modestly.',
    'Stay overnight to experience the peaceful atmosphere after day-trippers leave.'
  ]
},
{
  id: 'el-nido-ph',
  city: 'El Nido',
  country: 'Philippines',
  airportCode: 'ENI',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvr4j5YnYd8NUrcMsVttXiZBGuubhDpc4ljMov5ctb1OT3zaiXf4oJEM-E&s=10${cropParams}`,
  description: 'A tropical paradise in Palawan renowned for its crystal-clear lagoons, dramatic limestone cliffs, hidden beaches, and world-class island hopping.',
  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'November to May',
  dailyBudget: 95,
  attractions: [
    { name: 'Big Lagoon', duration: '2 hours', bestTime: 'Morning', entryFee: '₱200 Eco-Tourism Fee' },
    { name: 'Small Lagoon', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Included in Tour A' },
    { name: 'Secret Lagoon', duration: '1 hour', bestTime: 'Morning', entryFee: 'Included in Tour A' },
    { name: 'Nacpan Beach', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Taraw Cliff Viewpoint', duration: '2 hours', bestTime: 'Sunrise', entryFee: '₱400 (Guided)' },
    { name: 'Island Hopping Tour A', duration: 'Full Day', bestTime: '8:30 AM', entryFee: '₱1,400+' }
  ],
  travelTips: [
    'Book island hopping tours at least a day in advance during peak season.',
    'Bring reef-safe sunscreen to help protect marine life.',
    'Carry cash, as many small shops and restaurants do not accept cards.',
    'Wear water shoes for rocky beaches and lagoon entrances.',
    'Visit between November and May for the calmest sea conditions.',
    'Pack a waterproof dry bag to protect your phone and camera during boat trips.'
  ]
},
{
  id: 'luang-prabang-la',
  city: 'Luang Prabang',
  country: 'Laos',
  airportCode: 'LPQ',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEY5f--TCUepqkVGTZ0162mLOppxbe48JBsv-ly4cpn7zlxya-KT0LHAA&s=10${cropParams}`,
  description: 'A UNESCO World Heritage city nestled between mountains and the Mekong River, celebrated for its golden temples, waterfalls, French colonial architecture, and peaceful atmosphere.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 50,
  attractions: [
    { name: 'Kuang Si Waterfalls', duration: '3 hours', bestTime: 'Morning', entryFee: '40,000 LAK' },
    { name: 'Mount Phousi', duration: '1.5 hours', bestTime: 'Sunset', entryFee: '30,000 LAK' },
    { name: 'Wat Xieng Thong', duration: '1 hour', bestTime: 'Morning', entryFee: '30,000 LAK' },
    { name: 'Royal Palace Museum', duration: '2 hours', bestTime: 'Morning', entryFee: '60,000 LAK' },
    { name: 'Mekong River Sunset Cruise', duration: '2 hours', bestTime: 'Evening', entryFee: '$15+' },
    { name: 'Night Market', duration: '2 hours', bestTime: '7:00 PM', entryFee: 'Free' }
  ],
  travelTips: [
    'Wake up early to respectfully observe the traditional alms-giving ceremony.',
    'Dress modestly when visiting temples by covering shoulders and knees.',
    'Rent a bicycle to explore the town at a relaxed pace.',
    'Carry cash, as many small cafés and shops do not accept cards.',
    'Visit Kuang Si Waterfalls early in the morning to avoid crowds.',
    'Try authentic Lao dishes such as Khao Soi and sticky rice.'
  ]
},
{
  id: 'alula-sa',
  city: 'AlUla',
  country: 'Saudi Arabia',
  airportCode: 'ULH',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd1QVSRnni6wbMAqkbwH_7vN8pRpD4FY3dgw8njrnnU1wQiIUm5YAtI3o&s=10${cropParams}`,
  description: 'A breathtaking desert oasis in northwestern Saudi Arabia, home to ancient Nabataean tombs, dramatic sandstone formations, and one of the Middle East’s most remarkable archaeological landscapes.',
  budget: 'Luxury',
  tripType: 'Culture',
  bestSeason: 'October to March',
  dailyBudget: 180,
  attractions: [
    { name: 'Hegra (Madain Saleh)', duration: '3 hours', bestTime: 'Morning', entryFee: 'SAR 95' },
    { name: 'Elephant Rock (Jabal AlFil)', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'AlUla Old Town', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Maraya Concert Hall', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free (Exterior)' },
    { name: 'Dadan Archaeological Site', duration: '2 hours', bestTime: 'Morning', entryFee: 'SAR 30' },
    { name: 'AlUla Oasis Trail', duration: '2 hours', bestTime: 'Early Morning', entryFee: 'Free' }
  ],
  travelTips: [
    'Visit between October and March for pleasant desert temperatures.',
    'Book Hegra guided tours well in advance as visitor numbers are limited.',
    'Rent a car or join guided tours since attractions are spread across the region.',
    'Carry sunscreen, sunglasses, and plenty of water while exploring.',
    'Stay until sunset to experience Elephant Rock illuminated at night.',
    'Respect local customs by dressing modestly when visiting cultural and historical sites.'
  ]
},
{
  id: 'whistler-ca',
  city: 'Whistler',
  country: 'Canada',
  airportCode: 'YVR',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyCejl71DmPD6nHb5JJYg4BPLM_hdgUqr18u6RXBuMKHatZWedQaaB9vI&s=10${cropParams}`,
  description: 'Canada’s premier mountain resort destination, famous for world-class skiing, alpine hiking, scenic lakes, mountain biking, and breathtaking year-round outdoor adventures.',
  budget: 'Luxury',
  tripType: 'Adventure',
  bestSeason: 'December to March',
  dailyBudget: 190,
  attractions: [
    { name: 'Whistler Blackcomb', duration: 'Full Day', bestTime: 'Morning', entryFee: 'CA$189+' },
    { name: 'Peak 2 Peak Gondola', duration: '2 hours', bestTime: 'Morning', entryFee: 'Included with Sightseeing Pass' },
    { name: 'Lost Lake', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Whistler Village', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Brandywine Falls', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Scandinave Spa', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'CA$120+' }
  ],
  travelTips: [
    'Purchase lift tickets online in advance to save money.',
    'Visit during summer for hiking and mountain biking or winter for skiing and snowboarding.',
    'Pack layers as mountain weather can change quickly.',
    'Use the free village shuttle to travel around Whistler.',
    'Reserve spa treatments and popular restaurants well ahead during peak seasons.',
    'Drive the Sea-to-Sky Highway from Vancouver for one of Canada’s most scenic road trips.'
  ]
},
{
  id: 'jeju-island-kr',
  city: 'Jeju Island',
  country: 'South Korea',
  airportCode: 'CJU',
  image: `https://media-gadventures.global.ssl.fastly.net/media-server/dynamic/blogs/posts/G-Adventures/2025/09/blog-jeju-island-korea-travel-guide-springtime-hiking.webp${cropParams}`,
  description: 'South Korea’s largest volcanic island, renowned for dramatic coastlines, lava tubes, waterfalls, scenic hikes, and beautiful beaches.',
  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'April to June',
  dailyBudget: 115,
  attractions: [
    { name: 'Seongsan Ilchulbong (Sunrise Peak)', duration: '2 hours', bestTime: 'Sunrise', entryFee: '₩5,000' },
    { name: 'Hallasan National Park', duration: '5-8 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Manjanggul Lava Tube', duration: '1.5 hours', bestTime: 'Morning', entryFee: '₩4,000' },
    { name: 'Cheonjiyeon Waterfall', duration: '1 hour', bestTime: 'Afternoon', entryFee: '₩2,000' },
    { name: 'Hamdeok Beach', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Jeju Olle Trail', duration: '2-4 hours', bestTime: 'Morning', entryFee: 'Free' }
  ],
  travelTips: [
    'Rent a car to explore the island easily, as public transport can be slow.',
    'Start your hike to Seongsan Ilchulbong before sunrise for spectacular views.',
    'Carry comfortable hiking shoes if visiting Hallasan National Park.',
    'Try Jeju black pork BBQ and fresh seafood specialties.',
    'Visit during spring to enjoy cherry blossoms and mild weather.',
    'Book accommodation early during weekends and holiday seasons.'
  ]
},
{
  id: 'siem-reap-kh',
  city: 'Siem Reap',
  country: 'Cambodia',
  airportCode: 'SAI',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWoHz14bpRThRZdWLumIKdukHLE05cKiVrni37aKUtfJzK_OL8G1zn4VR9&s=10${cropParams}`,
  description: 'Cambodia’s cultural heart and the gateway to Angkor Wat, offering ancient temples, vibrant markets, traditional performances, and unforgettable sunrises.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 55,
  attractions: [
    { name: 'Angkor Wat', duration: '4 hours', bestTime: 'Sunrise', entryFee: '$37 (1-Day Pass)' },
    { name: 'Bayon Temple', duration: '2 hours', bestTime: 'Morning', entryFee: 'Included with Angkor Pass' },
    { name: 'Ta Prohm Temple', duration: '2 hours', bestTime: 'Morning', entryFee: 'Included with Angkor Pass' },
    { name: 'Pub Street', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Phare Cambodian Circus', duration: '1.5 hours', bestTime: '8:00 PM', entryFee: '$18+' },
    { name: 'Angkor National Museum', duration: '2 hours', bestTime: 'Afternoon', entryFee: '$12' }
  ],
  travelTips: [
    'Buy your Angkor Pass online or the evening before to avoid morning queues.',
    'Hire a tuk-tuk driver for the day to comfortably visit multiple temples.',
    'Wear clothing that covers your shoulders and knees when entering temples.',
    'Carry plenty of water, sunscreen, and a hat as temple visits involve lots of walking.',
    'Start at Angkor Wat before sunrise to experience the iconic reflection and avoid crowds.',
    'Carry US dollars or Cambodian Riel, as both are commonly accepted.'
  ]
},
  {
  id: 'lisbon-pt',
  city: 'Lisbon',
  country: 'Portugal',
  airportCode: 'LIS',
  image: `https://images.unsplash.com/photo-1513735492246-483525079686${cropParams}`,
  description: 'Portugal’s vibrant capital, famous for its colorful streets, historic trams, and Atlantic views.',
  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'April to June',
  dailyBudget: 110,
  attractions: [
    { name: 'Belém Tower', duration: '1 hour', bestTime: '9:00 AM', entryFee: '€8' },
    { name: 'Jerónimos Monastery', duration: '2 hours', bestTime: 'Morning', entryFee: '€12' },
    { name: 'Alfama District', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Tram 28 Ride', duration: '1 hour', bestTime: 'Early Morning', entryFee: '€3.10' },
    { name: 'Praça do Comércio', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Miradouro da Senhora do Monte', duration: '45 mins', bestTime: 'Sunset', entryFee: 'Free' }
  ],
  travelTips: [
    'Public Transportation: Buy a Viva Viagem card for unlimited metro, tram, and bus travel.',
    'Local Etiquette: Greeting with a friendly "Olá" is appreciated.',
    'Money-Saving: Enjoy affordable "Prato do Dia" lunch specials at local restaurants.',
    'Language: English is widely spoken in tourist areas, but learning a few Portuguese phrases is helpful.',
    'Safety Advice: Watch your belongings on Tram 28 and in crowded tourist areas.',
    'Packing: Comfortable walking shoes are essential because Lisbon is built on steep hills.'
  ]
},
{
  id: 'lofoten-islands-no',
  city: 'Lofoten Islands',
  country: 'Norway',
  airportCode: 'EVE',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLhPBTKomOqEDdeJiJNxDKw_WmtEVeNp20fuGRkDopPYSb4wPo3Zi9xFVv&s=10${cropParams}`,
  description: 'A spectacular Arctic archipelago known for dramatic mountain peaks, colorful fishing villages, white-sand beaches, and some of the world’s best Northern Lights and Midnight Sun experiences.',
  budget: 'Luxury',
  tripType: 'Nature',
  bestSeason: 'June to August',
  dailyBudget: 210,
  attractions: [
    { name: 'Reine Village', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Reinebringen Hike', duration: '3 hours', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'Haukland Beach', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Nusfjord Fishing Village', duration: '2 hours', bestTime: 'Morning', entryFee: 'NOK 100' },
    { name: 'Lofotr Viking Museum', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'NOK 250' },
    { name: 'Northern Lights Safari', duration: '5 hours', bestTime: '8:00 PM (Winter)', entryFee: 'NOK 1,600+' }
  ],
  travelTips: [
    'Rent a car to explore the islands, as public transport is limited.',
    'Visit between June and August for the Midnight Sun or between September and March for the Northern Lights.',
    'Weather changes rapidly, so pack waterproof and windproof clothing.',
    'Book accommodation months in advance during peak summer season.',
    'Carry hiking boots if planning mountain hikes like Reinebringen.',
    'Respect nature by following marked trails and leaving no trace.'
  ]
},
{
  id: 'pokhara-np',
  city: 'Pokhara',
  country: 'Nepal',
  airportCode: 'PKR',
  image: `https://images.unsplash.com/photo-1605640840605-14ac1855827b${cropParams}`,
  description: 'A stunning lakeside destination offering mountain views, adventure sports, and the gateway to the Annapurna region.',
  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'October to April',
  dailyBudget: 50,
  attractions: [
    { name: 'Phewa Lake', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Sarangkot', duration: '2 hours', bestTime: 'Sunrise', entryFee: 'Free' },
    { name: 'World Peace Pagoda', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Davis Falls', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'NPR 100' },
    { name: 'Gupteshwor Cave', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'NPR 100' },
    { name: 'Paragliding', duration: '2 hours', bestTime: 'Morning', entryFee: '$90+' }
  ],
  travelTips: [
    'Book adventure sports ahead.',
    'Carry warm clothing.',
    'Watch sunrise at Sarangkot.',
    'Try local Nepali food.',
    'Cash is preferred.',
    'Stay near Lakeside.'
  ]
},
  {
    id: 'iceland-is', city: 'Iceland', country: 'Iceland', airportCode: 'KEF', 
    image: `https://images.unsplash.com/photo-1476610182048-b716b8518aae${cropParams}`,
    description: 'A Nordic island nation, defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields.',
    budget: 'Luxury', tripType: 'Adventure', bestSeason: 'June to August', dailyBudget: 190,
    attractions: [
      { name: 'Gullfoss Waterfall', duration: '1 hour', bestTime: 'Early Morning', entryFee: 'Free' },
      { name: 'Geysir Geothermal Area', duration: '1 hour', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Jökulsárlón Glacier Lagoon', duration: '2 hours', bestTime: 'Mid-day', entryFee: 'Free (Boat tours extra)' },
      { name: 'Thingvellir National Park', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free (Parking ~750 ISK)' },
      { name: 'Skógafoss', duration: '1 hour', bestTime: 'Early Morning', entryFee: 'Free' },
      { name: 'Diamond Beach', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' }
    ],
    travelTips: [
      'Renting a Car: You must buy ash, gravel, and sand insurance. Wind kicks up volcanic rocks that easily shatter windshields and strip paint.',
      'Gas Stations: Most gas stations are unmanned and require a credit card with a 4-digit PIN. Know your PIN before arriving.',
      'Safety: Never turn your back on the ocean at Reynisfjara Black Sand Beach. "Sneaker waves" are lethal and can drag you out to sea.',
      'F-Roads: If you want to drive into the Highlands, you must rent a 4x4. It is illegal and dangerous to drive a 2WD on F-Roads.',
      'Budget Food: Hot dogs (Pylsur) from gas stations are the unofficial national dish and one of the only cheap meals available.',
      'Midnight Sun: In June/July, it never gets dark. Bring a sleep mask, and utilize the night to visit famous waterfalls completely alone.'
    ]
  },
  {
  id: 'mexico-city-mx',
  city: 'Mexico City',
  country: 'Mexico',
  airportCode: 'MEX',
  image: `https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?auto=format&fit=crop&w=1600&q=80${cropParams}`,
  description: 'A vibrant metropolis blending deep indigenous history, colonial architecture, a world-class culinary scene, and iconic museums.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'March to May',
  dailyBudget: 75,
  attractions: [
    { name: 'Teotihuacan Pyramids', duration: '4 hours', bestTime: 'Morning', entryFee: '~$5 (95 MXN)' },
    { name: 'Frida Kahlo Museum (Casa Azul)', duration: '2 hours', bestTime: 'Morning', entryFee: '~$16 (320 MXN)' },
    { name: 'National Museum of Anthropology', duration: '3 hours', bestTime: 'Morning', entryFee: '~$5 (95 MXN)' },
    { name: 'Zócalo & Metropolitan Cathedral', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Chapultepec Castle', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$5 (95 MXN)' },
    { name: 'Palacio de Bellas Artes', duration: '1.5 hours', bestTime: 'Evening', entryFee: '~$5 (90 MXN)' }
  ],
  travelTips: [
    'Book tickets for the Frida Kahlo Museum online well in advance, as they sell out quickly.',
    'Use Uber or DiDi for safe, reliable, and affordable transportation around the city.',
    'Arrive at Teotihuacan right when it opens to beat both the afternoon heat and the heavy crowds.',
    'Take it easy on your first day to acclimate to the city\'s high altitude (7,350 feet / 2,240 meters).',
    'Carry small bills in Mexican Pesos (MXN) for street food vendors, markets, and tipping.',
    'Do not drink the tap water; always opt for bottled or securely filtered water.'
  ]
},
{
  id: 'sal-cv',
  city: 'Sal',
  country: 'Cape Verde',
  airportCode: 'SID',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDGPalVZfVNuiUMnYCZ0QTBXpIgF_akNfqGf2gUqm1YttPQa4Ou1Zxygc&s=10${cropParams}`,
  description: 'A sun-drenched island off the coast of West Africa, famous for its sweeping white-sand beaches, vibrant Creole culture, and world-class kite surfing.',
  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'November to June',
  dailyBudget: 85,
  attractions: [
    { name: 'Santa Maria Beach', duration: 'Half day', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Pedra de Lume Salt Crater', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$6 (600 CVE)' },
    { name: 'Buracona (The Blue Eye)', duration: '1.5 hours', bestTime: 'Midday (11 AM - 1 PM)', entryFee: '~$3 (300 CVE)' },
    { name: 'Kite Beach', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Shark Bay', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free (Shoe rental ~$2)' },
    { name: 'Viveiro Botanical Garden', duration: '1.5 hours', bestTime: 'Late Afternoon', entryFee: '~$5 (500 CVE)' }
  ],
  travelTips: [
    'Pay your Airport Security Tax (TSA) online before arrival to skip the queues at the airport.',
    'The Euro is widely accepted across the islands alongside the local Cape Verdean Escudo (CVE).',
    'November to March brings strong trade winds, making it the perfect season to watch or try kite surfing.',
    'Rent a 4x4 or book an off-road island tour to explore the rugged volcanic landscapes safely.',
    'Try "Cachupa," the national dish—a hearty slow-cooked stew made with corn, beans, and fish or meat.',
    'The sun is extremely intense near the equator; pack reef-safe sunscreen and a hat.'
  ]
},
{
  id: 'sofia-bg',
  city: 'Sofia',
  country: 'Bulgaria',
  airportCode: 'SOF',
  image: `https://images.pexels.com/photos/12499969/pexels-photo-12499969.jpeg${cropParams}`,
  description: 'A captivating blend of ancient Roman ruins, grand Soviet-era architecture, and a lively modern café culture, all nestled at the foot of Vitosha Mountain.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 50,
  attractions: [
    { name: 'St. Alexander Nevsky Cathedral', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free (Crypt ~$3)' },
    { name: 'Serdica Archaeological Complex', duration: '1 hour', bestTime: 'Anytime', entryFee: 'Free' },
    { name: 'Vitosha Mountain', duration: 'Half day', bestTime: 'Morning', entryFee: 'Free (Gondola ~$10)' },
    { name: 'Boyana Church (UNESCO)', duration: '1 hour', bestTime: 'Afternoon', entryFee: '~$5 (10 BGN)' },
    { name: 'Vitosha Boulevard', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'National Historical Museum', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$6 (12 BGN)' }
  ],
  travelTips: [
    'The local currency is the Bulgarian Lev (BGN). While cards are widely used, carry cash for small bakeries and markets.',
    'Be aware of Bulgarian head gestures: traditionally, nodding means "no" and shaking your head means "yes," which can be confusing!',
    'Use the clean, affordable, and highly efficient Sofia Metro to travel directly from the airport to the city center.',
    'Join a free walking tour on your first day; it is one of the best ways to understand the city\'s complex Roman, Ottoman, and Soviet history.',
    'Try Banitsa (a flaky pastry filled with white cheese) paired with Ayran (a yogurt drink) for a classic local breakfast.',
    'Vitosha Mountain is accessible via public transport, offering excellent hiking in the summer and affordable skiing in the winter.'
  ]
},
{
  id: 'lombok-id',
  city: 'Lombok',
  country: 'Indonesia',
  airportCode: 'LOP',
  image: `https://images.pexels.com/photos/38675673/pexels-photo-38675673.jpeg${cropParams}`,
  description: 'Often described as Bali decades ago, this island paradise boasts pristine beaches, legendary surf breaks, and the towering volcanic peak of Mount Rinjani.',
  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'May to September',
  dailyBudget: 45,
  attractions: [
    { name: 'Gili Islands (Day Trip)', duration: 'Full day', bestTime: 'Morning', entryFee: 'Boat ticket ~$10-$15' },
    { name: 'Tiu Kelep & Sendang Gile Waterfalls', duration: '3 hours', bestTime: 'Morning', entryFee: '~$1 (10,000 IDR)' },
    { name: 'Tanjung Aan Beach', duration: 'Half day', bestTime: 'Afternoon', entryFee: 'Parking ~$1' },
    { name: 'Mount Rinjani National Park', duration: '2-3 Days (Trek)', bestTime: 'Early Morning', entryFee: '~$10/day (Plus guide)' },
    { name: 'Sade Traditional Sasak Village', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Donation based' },
    { name: 'Pink Beach (Tangsi)', duration: 'Half day', bestTime: 'Morning', entryFee: '~$3 (50,000 IDR)' }
  ],
  travelTips: [
    'Renting a scooter is the best way to explore the southern beaches, but drive cautiously as rural roads can be unpaved or poorly lit.',
    'Unlike neighboring Bali, which is predominantly Hindu, Lombok is predominantly Muslim. Dress modestly when away from the main tourist beaches.',
    'If you plan to hike Mount Rinjani, you must hire a certified local guide. Book well in advance during the dry season.',
    'While fast boats from Bali are popular, flying directly into Lombok International Airport (LOP) is often faster and avoids rough sea conditions.',
    'Carry plenty of cash in Indonesian Rupiah (IDR). ATMs are easy to find in Senggigi and Kuta, but rare in remote villages.',
    'Try Ayam Taliwang, Lombok’s famous spicy grilled chicken, usually served with water spinach and rice.'
  ]
},
{
  id: 'yerevan-am',
  city: 'Yerevan',
  country: 'Armenia',
  airportCode: 'EVN',
  image: `https://images.pexels.com/photos/16206879/pexels-photo-16206879.jpeg${cropParams}`,
  description: 'Known as the "Pink City" for its volcanic tuff architecture, one of the world’s oldest continuously inhabited cities offers a rich tapestry of ancient history, vibrant cafe culture, and stunning views of Mount Ararat.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to June, September to October',
  dailyBudget: 45,
  attractions: [
    { name: 'The Cascade Complex', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free (Museum ~$4)' },
    { name: 'Republic Square', duration: '1.5 hours', bestTime: 'Evening (For fountains)', entryFee: 'Free' },
    { name: 'Tsitsernakaberd Memorial', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Garni Temple & Geghard', duration: 'Half day', bestTime: 'Morning', entryFee: '~$4 (1500 AMD)' },
    { name: 'Matenadaran (Manuscript Museum)', duration: '1.5 hours', bestTime: 'Morning', entryFee: '~$4 (1500 AMD)' },
    { name: 'Vernissage Market', duration: '2 hours', bestTime: 'Weekend mornings', entryFee: 'Free' }
  ],
  travelTips: [
    'The local currency is the Armenian Dram (AMD). While cards are widely accepted in Yerevan cafes, carry cash for markets and regional day trips.',
    'Download the GG or Yandex Go apps for cheap, safe, and reliable taxi rides both within the city and to nearby attractions.',
    'Yerevan has a massive evening culture. Locals stay out late enjoying the cafes, wine bars, and the singing fountains at Republic Square.',
    'Do not miss trying Khorovats (Armenian BBQ), fresh Lavash (traditional flatbread), and the locally produced pomegranate wine.',
    'Take a short day trip to Khor Virap Monastery for the most iconic, unobstructed views of Mount Ararat just across the Turkish border.',
    'The city is incredibly safe for tourists, even late at night, making it perfect for evening strolls through its many parks.'
  ]
},
{
  id: 'tirana-al',
  city: 'Tirana',
  country: 'Albania',
  airportCode: 'TIA',
  image: `https://images.pexels.com/photos/19597740/pexels-photo-19597740.jpeg${cropParams}`,
  description: 'A colorful, rapidly changing capital blending Ottoman history, Soviet-era relics, and a thriving café culture, serving as the perfect gateway to the Albanian Riviera and the Accursed Mountains.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to October',
  dailyBudget: 40,
  attractions: [
    { name: 'Skanderbeg Square', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'BUNK\'ART 1', duration: '2 hours', bestTime: 'Morning', entryFee: '~$5 (500 ALL)' },
    { name: 'Dajti Ekspres (Cable Car)', duration: 'Half day', bestTime: 'Afternoon', entryFee: '~$12 (1200 ALL)' },
    { name: 'Pyramid of Tirana', duration: '1 hour', bestTime: 'Anytime', entryFee: 'Free' },
    { name: 'Berat (Day Trip)', duration: 'Full day', bestTime: 'Early Morning', entryFee: 'Bus ~$5' },
    { name: 'Grand Park of Tirana', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' }
  ],
  travelTips: [
    'The local currency is the Albanian Lek (ALL). Cash is king here, so always carry enough for meals, small purchases, and transport.',
    'Public transport between cities relies heavily on "furgons" (minibuses). They often do not have strict schedules and simply leave when they are full.',
    'Café culture is a massive part of daily life. Do as the locals do and take time to slowly enjoy an espresso or macchiato.',
    'Tap water in Albania is generally not recommended for drinking; stick to bottled or securely filtered water.',
    'Try Tavë Kosi, the beloved national dish consisting of baked lamb and rice served under a thick, savory yogurt sauce.',
    'Tirana is highly walkable, but if you need a ride, negotiate taxi fares before getting in or use local apps like Speed Taxi.'
  ]
},
{
  id: 'brasov-ro',
  city: 'Brașov (Transylvania)',
  country: 'Romania',
  airportCode: 'GHV',
  image: `https://images.pexels.com/photos/34069343/pexels-photo-34069343.jpeg${cropParams}`,
  description: 'Nestled in the Carpathian Mountains, this enchanting region is famous for its perfectly preserved medieval towns, imposing Gothic architecture, towering castles, and the enduring legend of Dracula.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to October',
  dailyBudget: 55,
  attractions: [
    { name: 'Bran Castle (Dracula\'s Castle)', duration: '2 hours', bestTime: 'Morning', entryFee: '~$13 (60 RON)' },
    { name: 'The Black Church (Biserica Neagră)', duration: '1 hour', bestTime: 'Morning', entryFee: '~$5 (20 RON)' },
    { name: 'Mount Tâmpa Cable Car', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: '~$6 (30 RON)' },
    { name: 'Peleș Castle (Sinaia)', duration: '3 hours', bestTime: 'Morning', entryFee: '~$11 (50 RON)' },
    { name: 'Sighișoara Citadel (Day Trip)', duration: 'Half day', bestTime: 'Anytime', entryFee: 'Free (Clock Tower ~$4)' },
    { name: 'Council Square (Piața Sfatului)', duration: '1.5 hours', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'The local currency is the Romanian Leu (RON). Cards are widely accepted in cities, but carry cash for smaller villages and rural markets.',
    'Romania has a very extensive and affordable train network (CFR Călători), making it the most scenic way to travel between Transylvanian towns.',
    'If you plan to visit Bran Castle and Peleș Castle on the same day, start early to beat the massive tour bus crowds and summer traffic.',
    'Transylvania is home to Europe\'s largest population of brown bears. If you go hiking in the Carpathians, stick to marked trails and consider joining a guided bear-watching tour.',
    'Try traditional Romanian dishes like Sarmale (cabbage rolls) and Papanași (a delicious fried dough pastry topped with sour cream and jam).',
    'While Brașov has a new regional airport (GHV), many international travelers still find it cheaper to fly into Bucharest (OTP) and take a 2.5-hour scenic train ride into Transylvania.'
  ]
},
{
  id: 'la-paz-bo',
  city: 'La Paz',
  country: 'Bolivia',
  airportCode: 'LPB',
  image: `https://images.pexels.com/photos/34780015/pexels-photo-34780015.jpeg${cropParams}`,
  description: 'Set high in the Andes Mountains, this dizzying, high-altitude city blends rich indigenous Aymara culture, dramatic cable car commutes, and serves as the gateway to the surreal Uyuni Salt Flats.',
  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 40,
  attractions: [
    { name: 'Mi Teleférico (Cable Car System)', duration: '2 hours', bestTime: 'Sunset', entryFee: '~$0.50 (3 BOB) per ride' },
    { name: 'The Witches\' Market (Mercado de las Brujas)', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Salar de Uyuni (Multi-day Tour)', duration: '3 Days', bestTime: 'Morning', entryFee: '~$150 - $250' },
    { name: 'Death Road (Yungas Road) Cycling', duration: 'Full day', bestTime: 'Early Morning', entryFee: '~$60 - $100' },
    { name: 'Valle de la Luna (Moon Valley)', duration: '2 hours', bestTime: 'Morning', entryFee: '~$2 (15 BOB)' },
    { name: 'Tiwanaku Ruins (Day Trip)', duration: 'Half day', bestTime: 'Morning', entryFee: '~$15 (100 BOB)' }
  ],
  travelTips: [
    'La Paz sits at an extreme altitude of over 3,500 meters (11,500 feet). Take it very easy for the first few days, stay hydrated, and try local coca tea to prevent altitude sickness.',
    'The local currency is the Boliviano (BOB). Always carry small bills and coins, as breaking large notes in markets or with taxi drivers is often difficult.',
    'Mi Teleférico is not just the most efficient public transport in the city; it is also the best and cheapest way to get incredible panoramic views of La Paz and Mount Illimani.',
    'When booking a Salar de Uyuni tour, do not just choose the cheapest option. Read reviews carefully to ensure the company has a good safety record and well-maintained 4x4 vehicles.',
    'Try a "Salteña" for a mid-morning snack—a delicious baked empanada filled with meat, potatoes, peas, and a sweet, hearty broth.',
    'Overnight buses are the most common way to travel to places like Uyuni or Sucre. Always pay a little extra for a "Cama" (lie-flat bed) seat to survive the bumpy roads in comfort.'
  ]
},
{
  id: 'nassau-bs',
  city: 'Nassau',
  country: 'Bahamas',
  airportCode: 'NAS',
  image: `https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1600&q=80${cropParams}`,
  description: 'A tropical paradise famous for its crystal-clear turquoise waters, pristine white-sand beaches, vibrant coral reefs, and the legendary swimming pigs of the Exumas.',
  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 150,
  attractions: [
    { name: 'Pig Beach (Exuma Day Trip)', duration: 'Full day', bestTime: 'Morning', entryFee: '~$150+ (Boat Tour)' },
    { name: 'Atlantis Paradise Island Waterpark', duration: 'Full day', bestTime: 'Morning', entryFee: '~$135' },
    { name: 'Cable Beach', duration: 'Half day', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Queen\'s Staircase', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Blue Lagoon Island', duration: 'Half day', bestTime: 'Morning', entryFee: '~$90 (Ferry & Beach Access)' },
    { name: 'Clifton Heritage National Park', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$15' }
  ],
  travelTips: [
    'The Bahamian Dollar (BSD) is pegged 1:1 with the US Dollar. USD is accepted everywhere, so there is no need to exchange currency if you have US cash.',
    'Taxis are generally unmetered. Always negotiate and agree on the final fare with the driver before getting into the vehicle.',
    'Food and drinks can be very expensive since most goods are imported. Consider booking accommodation with breakfast included or stopping at a local grocery store.',
    'A 15% gratuity is often automatically added to restaurant bills and hotel invoices. Check your receipt carefully before leaving an additional tip.',
    'To see the famous swimming pigs, you need to book a boat tour to the Exumas from Nassau. It is a full-day excursion, so plan your itinerary accordingly.',
    'Hurricane season officially runs from June through November. If traveling during this time, purchasing comprehensive travel insurance is highly recommended.'
  ]
},
{
  id: 'siargao-ph',
  city: 'Siargao',
  country: 'Philippines',
  airportCode: 'IAO',
  image: `https://images.unsplash.com/photo-1565565915331-293fd8113954?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'Known as the Surfing Capital of the Philippines, this tear-drop shaped island offers a laid-back vibe, endless palm tree forests, pristine rock pools, and world-class waves.',
  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'March to October',
  dailyBudget: 55,
  attractions: [
    { name: 'Cloud 9 Surfing Area', duration: '2 hours', bestTime: 'Sunrise', entryFee: '~$1 (50 PHP)' },
    { name: 'Magpupungko Rock Pools', duration: '2 hours', bestTime: 'Low Tide Only', entryFee: '~$1 (50 PHP)' },
    { name: 'Sugba Lagoon', duration: 'Half day', bestTime: 'Morning', entryFee: '~$30 (1500 PHP Tour)' },
    { name: 'Tri-Island Hopping (Naked, Daku, Guyam)', duration: 'Full day', bestTime: 'Morning', entryFee: '~$30 (1500 PHP Tour)' },
    { name: 'Maasin River Rope Swing', duration: '1 hour', bestTime: 'Afternoon', entryFee: '~$0.50 (20 PHP)' },
    { name: 'Coconut Tree View Deck', duration: '30 mins', bestTime: 'Sunset', entryFee: 'Free' }
  ],
  travelTips: [
    'Timing is everything for Magpupungko Rock Pools. You must visit during low tide to see and swim in the pools safely; check local tide charts daily.',
    'Cash is absolutely essential. While more places are accepting Gcash or cards, ATMs on the island frequently run out of money, so bring plenty of Philippine Pesos (PHP).',
    'Renting a scooter (often fitted with a surfboard rack) is the standard and most scenic way to explore the island at your own pace.',
    'You do not need to be a pro to surf at Cloud 9. There are plenty of beginner breaks (like Jacking Horse) and local instructors offering affordable hourly lessons right on the beach.',
    'Mobile data and Wi-Fi can be notoriously unreliable across the island. Download your maps and travel documents offline before arriving.',
    'Do not leave without experiencing a "Boodle Fight"—a traditional Filipino feast served on banana leaves where you eat with your hands.'
  ]
},
{
  id: 'busan-kr',
  city: 'Busan',
  country: 'South Korea',
  airportCode: 'PUS',
  image: `https://images.unsplash.com/photo-1591520284162-8e64eceebacf?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'South Korea’s vibrant coastal metropolis, offering a striking mix of mountainous landscapes, stunning beaches, historic seaside temples, and the country’s largest seafood market.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'September to November, April to May',
  dailyBudget: 70,
  attractions: [
    { name: 'Gamcheon Culture Village', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Haedong Yonggungsa Temple', duration: '1.5 hours', bestTime: 'Early Morning', entryFee: 'Free' },
    { name: 'Haeundae Beach & Blueline Park', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free (Sky Capsule ~$25)' },
    { name: 'Jagalchi Fish Market', duration: '1.5 hours', bestTime: 'Lunchtime', entryFee: 'Free' },
    { name: 'Gwangalli Beach & Diamond Bridge', duration: '1.5 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Taejongdae Resort Park', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free (Danubi Train ~$3)' }
  ],
  travelTips: [
    'Purchase a T-money or Cashbee card at any convenience store for seamless access to buses and the extensive subway network.',
    'Busan is geographically very spread out. Factor in 45-60 minutes of transit time when traveling between major hubs like Haeundae and Gamcheon.',
    'Haedong Yonggungsa is unique because it is built directly on a rocky coastline, unlike most Korean temples nestled in mountains. Arrive early to beat the heavy crowds.',
    'For a unique culinary experience, buy fresh live seafood on the ground floor of Jagalchi Market and take it upstairs to be cooked for a small seating fee.',
    'The KTX bullet train from Seoul takes just 2.5 hours, making Busan an incredibly easy addition to any South Korean itinerary.',
    'While credit cards are accepted almost everywhere, keep some Korean Won (KRW) handy for street food stalls at the lively BIFF Square or Haeundae Market.'
  ]
},
{
  id: 'incheon-kr',
  city: 'Incheon',
  country: 'South Korea',
  airportCode: 'ICN',
  image: `https://images.unsplash.com/photo-1446733993804-c62a351c7239?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'A dynamic coastal metropolis that blends the ultra-modern architecture of Songdo Smart City with the rich history of Korea’s only official Chinatown and the retro charm of Wolmido.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'September to November, April to May',
  dailyBudget: 65,
  attractions: [
    { name: 'Songdo Central Park', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free (Boat rentals ~$25)' },
    { name: 'Incheon Chinatown', duration: '2 hours', bestTime: 'Lunchtime', entryFee: 'Free' },
    { name: 'Wolmido Theme Park', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free entry (Pay per ride)' },
    { name: 'Jayu (Freedom) Park', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Soraepogu Traditional Fish Market', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'G-Tower Observatory', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' }
  ],
  travelTips: [
    'If you have a long layover at Incheon International Airport (ICN), you might be eligible for the airport\'s official free transit tours rather than navigating the city alone.',
    'Incheon is seamlessly connected to Seoul via the subway system. You can use the same T-money transit card for buses and trains in both cities.',
    'Do not leave Chinatown without trying Jajangmyeon (black bean noodles), a beloved Korean-Chinese dish that actually originated right here in Incheon.',
    'Songdo Central Park was inspired by New York City’s Central Park. The best way to explore its futuristic surroundings is by renting a bicycle.',
    'Wolmido Island is famous for its vintage seaside amusement park. It is a popular date spot for locals and offers great views of the West Sea.',
    'Head to the 33rd floor of the G-Tower in Songdo right before sunset for spectacular, free 360-degree views of the futuristic skyline and the Incheon Bridge.'
  ]
},
{
  id: 'gyeongju-kr',
  city: 'Gyeongju',
  country: 'South Korea',
  airportCode: 'PUS',
  image: `https://images.unsplash.com/photo-1600449546699-9b7620a6365d?q=80&w=436&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'Often referred to as a "museum without walls," the ancient capital of the Silla Kingdom is a treasure trove of rolling grassy royal tombs, magnificent Buddhist temples, and historic ruins.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'March to May, September to November',
  dailyBudget: 60,
  attractions: [
    { name: 'Bulguksa Temple (UNESCO)', duration: '2 hours', bestTime: 'Morning', entryFee: '~$5 (6,000 KRW)' },
    { name: 'Seokguram Grotto', duration: '1.5 hours', bestTime: 'Morning', entryFee: '~$5 (6,000 KRW)' },
    { name: 'Donggung Palace and Wolji Pond', duration: '1.5 hours', bestTime: 'Evening (Illuminated)', entryFee: '~$2.50 (3,000 KRW)' },
    { name: 'Daereungwon Tomb Complex', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$2.50 (3,000 KRW)' },
    { name: 'Cheomseongdae Observatory', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Hwangridan-gil', duration: '2 hours', bestTime: 'Lunchtime', entryFee: 'Free' }
  ],
  travelTips: [
    'Gyeongju is incredibly flat and bike-friendly. Renting a bicycle is the best and most popular way to hop between the central historical sites.',
    'Gyeongju does not have its own airport. The most efficient way to arrive is by taking the KTX high-speed train directly to Singyeongju Station.',
    'Do not visit Donggung Palace and Wolji Pond during the day. Wait until nightfall when the traditional pavilions reflect beautifully on the water.',
    'Bulguksa Temple and Seokguram Grotto are located on a mountain outside the main city center. You can easily reach them by taking local Bus 10 or 11.',
    'Try "Hwangnam-ppang" (Gyeongju Bread), a famous local pastry filled with dense, sweet red bean paste that makes for a great souvenir.',
    'Hwangridan-gil is the city’s trendiest street, where traditional Hanok buildings have been transformed into chic cafes, photo studios, and modern eateries.'
  ]
},
{
  id: 'denver-us',
  city: 'Denver',
  country: 'USA',
  airportCode: 'DEN',
  image: `https://images.unsplash.com/photo-1602800458591-eddda28a498b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'Known as the Mile High City, Denver offers a seamless blend of outdoor adventure, a thriving craft brewery culture, and stunning Rocky Mountain vistas.',
  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 120,
  attractions: [
    { name: 'Red Rocks Park & Amphitheatre', duration: 'Half day', bestTime: 'Morning', entryFee: 'Free (Concerts vary)' },
    { name: 'Denver Botanic Gardens', duration: '2 hours', bestTime: 'Morning', entryFee: '~$15' },
    { name: 'Denver Art Museum', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$20' },
    { name: 'Union Station & LoDo', duration: '1.5 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'RiNo Art District', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Rocky Mountain National Park (Day Trip)', duration: 'Full day', bestTime: 'Early Morning', entryFee: '~$30 per vehicle' }
  ],
  travelTips: [
    'Denver sits at exactly 5,280 feet above sea level. Drink plenty of water and pace yourself with alcohol, as the altitude can affect you faster than at sea level.',
    'Denver International Airport (DEN) is located quite far from downtown. The RTD A-Line train is the most efficient and affordable way to travel directly to Union Station.',
    'The city boasts a massive craft beer culture. Head to the River North Art District (RiNo) to easily walk between some of the state\'s best independent breweries and street art murals.',
    'Weather changes rapidly in Colorado. Always dress in layers, as you can experience intense sunshine, rain, and a significant temperature drop all in the same afternoon.',
    'If you plan to visit Rocky Mountain National Park between May and October, you must book a timed-entry permit online well in advance, or you will be turned away at the gate.',
    'Renting a car is essential if you want to explore the mountains, but if you are just staying in the city center, rely on walking, rideshares, or the free MallRide bus to avoid high parking fees.'
  ]
},
{
  id: 'pyongyang-kp',
  city: 'Pyongyang',
  country: 'North Korea',
  airportCode: 'FNJ',
  image: `https://images.unsplash.com/photo-1601733969381-9fb824a94084?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'A highly secretive and tightly controlled capital city, characterized by grand socialist monuments, massive public squares, and a strictly guided travel experience.',
  budget: 'Luxury',
  tripType: 'Culture',
  bestSeason: 'April to May, September to October',
  dailyBudget: 250,
  attractions: [
    { name: 'Kim Il-sung Square', duration: '1 hour', bestTime: 'Morning', entryFee: 'Included in Tour' },
    { name: 'Mansudae Grand Monument', duration: '1 hour', bestTime: 'Morning', entryFee: 'Included (Flowers ~$5)' },
    { name: 'Juche Tower', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '~$5 for elevator' },
    { name: 'Victorious Fatherland Liberation War Museum', duration: '2 hours', bestTime: 'Morning', entryFee: 'Included in Tour' },
    { name: 'Pyongyang Metro', duration: '1 hour', bestTime: 'Anytime', entryFee: 'Included in Tour' },
    { name: 'Arch of Triumph', duration: '30 mins', bestTime: 'Afternoon', entryFee: 'Included in Tour' }
  ],
  travelTips: [
    'Independent travel is strictly prohibited. You can only visit North Korea by booking an organized tour through a government-approved travel agency.',
    'Photography is heavily restricted. You must explicitly ask your government guides for permission before taking any photos, and cropping images of the leaders is forbidden.',
    'There is no access to the global internet, and foreign credit cards or ATMs will not work. You must bring all the cash you need in Euros or Chinese Yuan.',
    'Showing absolute respect to the country’s leaders is mandatory. Any perceived disrespect or rule-breaking can result in severe legal consequences and detention.',
    'US and South Korean citizens are currently barred from entering as tourists. Other nationalities must check their home country’s travel advisories, which almost universally advise against all travel to North Korea.',
    'Your itinerary will be rigidly set in advance, and you are not allowed to leave your hotel or interact with locals without your official guides present.'
  ]
},
{
  id: 'new-orleans-us',
  city: 'New Orleans',
  country: 'USA',
  airportCode: 'MSY',
  image: `https://images.unsplash.com/photo-1646508262290-a617e1c042a0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'A vibrant melting pot of French, African, and American cultures, famous for its round-the-clock nightlife, historic French Quarter, live jazz, and incredible Creole cuisine.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'February to May',
  dailyBudget: 130,
  attractions: [
    { name: 'French Quarter & Jackson Square', duration: 'Half day', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'The National WWII Museum', duration: '4 hours', bestTime: 'Morning', entryFee: '~$35' },
    { name: 'Frenchmen Street (Live Music)', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free (Drink minimums)' },
    { name: 'Garden District & Magazine Street', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'St. Louis Cemetery No. 1 Tour', duration: '1.5 hours', bestTime: 'Morning', entryFee: '~$25 (Guide required)' },
    { name: 'Swamp & Bayou Airboat Tour', duration: 'Half day', bestTime: 'Morning', entryFee: '~$50 - $75' }
  ],
  travelTips: [
    'The famous St. Louis Cemetery No. 1 cannot be explored independently; you are required by law to book a licensed tour guide to enter.',
    'While Bourbon Street is iconic for partying, locals and music lovers prefer Frenchmen Street for authentic live jazz, brass bands, and art markets.',
    'Do not leave without trying the local staples: hot beignets from Cafe du Monde, a hearty bowl of gumbo, and a classic shrimp Po\'boy.',
    'The historic St. Charles Streetcar is only $1.25 per ride and is the most charming way to travel from the downtown area to the stunning mansions of the Garden District.',
    'Summers (July to September) are intensely hot, humid, and prone to heavy rain and hurricanes. Spring is ideal for weather and festivals like Mardi Gras and Jazz Fest.',
    'While the main tourist corridors are heavily policed and generally safe, petty crime is common. Stick to well-lit streets and take a ride-share if traveling late at night.'
  ]
},
{
  id: 'nashville-us',
  city: 'Nashville',
  country: 'USA',
  airportCode: 'BNA',
  image: `https://images.unsplash.com/photo-1556033681-83abea291a96?q=80&w=964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'Known as Music City, Nashville is the vibrant heart of country music, famous for its neon-lit honky-tonks, historic recording studios, and legendary Southern hot chicken.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'April to October',
  dailyBudget: 140,
  attractions: [
    { name: 'Broadway Honky Tonks', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free (Tip the band)' },
    { name: 'Country Music Hall of Fame', duration: '2.5 hours', bestTime: 'Morning', entryFee: '~$28' },
    { name: 'Grand Ole Opry', duration: '2.5 hours', bestTime: 'Evening', entryFee: '~$45+' },
    { name: 'Ryman Auditorium', duration: '1.5 hours', bestTime: 'Morning', entryFee: '~$26 (Self-guided)' },
    { name: 'The Parthenon & Centennial Park', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '~$10' },
    { name: 'RCA Studio B Tour', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '~$50 (Combo ticket)' }
  ],
  travelTips: [
    'Broadway bars rarely have a cover charge, but it is highly expected to bring cash and tip the live musicians who play day and night.',
    'You must try authentic Nashville Hot Chicken at spots like Prince\'s or Hattie B\'s, but beware—the spice levels are significantly hotter than standard buffalo wings.',
    'Book your tickets for the Grand Ole Opry and Ryman Auditorium well in advance, as popular shows frequently sell out.',
    'While the downtown Broadway area is highly walkable, you will need to rely on rideshares or a rental car to explore trendy neighborhoods like East Nashville or The Gulch.',
    'If you want to hear legendary songwriters perform in intimate venues like The Bluebird Cafe, you need to secure reservations exactly when they drop online weeks ahead of time.',
    'Summer months are intensely hot and humid with frequent afternoon thunderstorms, so dress in light layers and stay hydrated.'
  ]
},
{
  id: 'austin-us',
  city: 'Austin, Texas',
  country: 'USA',
  airportCode: 'AUS',
  image: `https://images.unsplash.com/photo-1531218150217-54595bc2b934?auto=format&fit=crop&w=1600&q=80${cropParams}`,
  description: 'Known as the Live Music Capital of the World, Austin offers a vibrant mix of legendary music venues, world-class barbecue, and beautiful outdoor spaces.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'September to November, March to May',
  dailyBudget: 130,
  attractions: [
    { name: 'Texas State Capitol', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Barton Springs Pool', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$5' },
    { name: 'Congress Avenue Bridge Bats', duration: '1 hour', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'South Congress Avenue (SoCo)', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Zilker Park & Lady Bird Lake', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free (Rentals ~$20)' },
    { name: 'Sixth Street Live Music', duration: '3 hours', bestTime: 'Evening', entryFee: 'Free (Drink minimums/Covers)' }
  ],
  travelTips: [
    'Austin-Bergstrom International Airport (AUS) is the city\'s primary travel hub and is located just 7.5 miles from downtown.',
    'With an annual passenger traffic of over 20 million, AUS ranks as the third busiest airport in Texas.',
    'If you want to travel longer distances without a car, the Capital Metro (CapMetro) system operates an extensive network of buses and a commuter rail.',
    'Do not miss the famous Congress Avenue bridge bats, which emerge at sunset from March to early November.',
    'Summer months are intensely hot; plan your outdoor activities like hiking or paddleboarding for the early morning.',
    'Skip the chain restaurants and try local staples: authentic Texas brisket and morning breakfast tacos.'
  ]
},
{
  id: 'srinagar-in',
  city: 'Srinagar',
  country: 'India',
  airportCode: 'SXR',
  image: `https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1600&q=80${cropParams}`,
  description: 'The summer capital of Jammu & Kashmir, famous for its serene Dal Lake, traditional houseboats, terraced Mughal gardens, and vibrant local handicrafts.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'April to October',
  dailyBudget: 55,
  attractions: [
    { name: 'Dal Lake Shikara Ride', duration: '2 hours', bestTime: 'Sunset', entryFee: '~$8 - $10 (Per boat)' },
    { name: 'Mughal Gardens (Shalimar & Nishat Bagh)', duration: '2 hours', bestTime: 'Morning', entryFee: '~$0.50 (24 INR)' },
    { name: 'Shankaracharya Temple', duration: '1.5 hours', bestTime: 'Early Morning', entryFee: 'Free' },
    { name: 'Pari Mahal', duration: '1 hour', bestTime: 'Late Afternoon', entryFee: '~$0.50 (24 INR)' },
    { name: 'Hazratbal Shrine', duration: '1 hour', bestTime: 'Anytime', entryFee: 'Free' },
    { name: 'Floating Vegetable Market', duration: '1.5 hours', bestTime: '5:00 AM', entryFee: 'Shikara cost only' }
  ],
  travelTips: [
    'Security at Srinagar Airport (SXR) is extremely strict. Arrive at least 3 hours before your flight and be prepared for multiple baggage checks.',
    'For a truly authentic experience, book at least one night on a traditional wooden houseboat on Dal or the quieter Nigeen Lake.',
    'Wake up before dawn and hire a Shikara to witness the bustling, centuries-old floating vegetable market on Dal Lake.',
    'Try local Kashmiri cuisine, specifically the rich multi-course "Wazwan" feast, and warm up with "Kahwa," a traditional saffron-infused green tea.',
    'Pre-paid taxis and auto-rickshaws are the best way to get around; standard ride-sharing apps like Uber or Ola do not operate here.',
    'Pre-paid SIM cards from outside Jammu & Kashmir will not work due to security regulations. You will need a post-paid connection or rely on hotel Wi-Fi.'
  ]
},
{
  id: 'udaipur-in',
  city: 'Udaipur',
  country: 'India',
  airportCode: 'UDR',
  image: `https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'Known as the "City of Lakes" and the "Venice of the East," this romantic Rajasthani city is crowned by grand palaces, shimmering waters, and narrow streets filled with artisan shops.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'October to March',
  dailyBudget: 50,
  attractions: [
    { name: 'City Palace', duration: '3 hours', bestTime: 'Morning', entryFee: '~$4 (300 INR)' },
    { name: 'Lake Pichola Boat Ride', duration: '1 hour', bestTime: 'Sunset', entryFee: '~$6 - $10 (400-800 INR)' },
    { name: 'Jag Mandir', duration: '1 hour', bestTime: 'Late Afternoon', entryFee: 'Included in boat ticket' },
    { name: 'Bagore Ki Haveli Dharohar Dance Show', duration: '1 hour', bestTime: '7:00 PM', entryFee: '~$2 (100 INR)' },
    { name: 'Saheliyon Ki Bari', duration: '1 hour', bestTime: 'Morning', entryFee: '~$0.50 (50 INR)' },
    { name: 'Sajjangarh (Monsoon Palace)', duration: '2 hours', bestTime: 'Sunset', entryFee: '~$4 (300 INR)' }
  ],
  travelTips: [
    'The streets in the old city around Lake Pichola are extremely narrow and steep. Rely on walking or small auto-rickshaws rather than renting a car.',
    'The Dharohar folk dance show at Bagore Ki Haveli is spectacular, but tickets sell out fast. Buy them at the ticket counter by 5:30 PM.',
    'A sunset boat ride on Lake Pichola offers the most magical views of the City Palace and the iconic Taj Lake Palace hotel.',
    'Try the local Rajasthani staple, "Dal Baati Churma," and explore the street food scene for Kachoris and Malpua.',
    'Udaipur is famous for miniature paintings, silver jewelry, and leather journals. Always politely bargain at local markets like Hathi Pol.',
    'Summers (April to June) are scorching hot and the lakes can sometimes dry up entirely; plan your visit during the cooler winter months.'
  ]
},
{
  id: 'delhi-in',
  city: 'New Delhi',
  country: 'India',
  airportCode: 'DEL',
  image: `https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=1600&q=80${cropParams}`,
  description: 'India’s bustling capital seamlessly blends centuries of magnificent Mughal history, grand colonial architecture, and a chaotic, vibrant street food scene.',
  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'October to March',
  dailyBudget: 45,
  attractions: [
    { name: 'Red Fort (Lal Qila)', duration: '2 hours', bestTime: 'Morning', entryFee: '~$7 (600 INR)' },
    { name: 'Qutub Minar', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$7 (600 INR)' },
    { name: 'Humayun\'s Tomb', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: '~$7 (600 INR)' },
    { name: 'India Gate & Rajpath', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Chandni Chowk & Jama Masjid', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free (Camera fee ~$4)' },
    { name: 'Lotus Temple', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' }
  ],
  travelTips: [
    'The highly efficient, air-conditioned Delhi Metro is the absolute best way to navigate the city and avoid the notorious surface-level traffic jams.',
    'Use apps like Uber, Ola, or BluSmart for taxis and auto-rickshaws to avoid haggling and overcharging from street drivers.',
    'Old Delhi’s Chandni Chowk is a sensory overload. Hire a cycle-rickshaw to navigate the incredibly crowded, narrow alleys safely.',
    'Delhi is India’s street food capital. Try Chole Bhature, Golgappe, and Aloo Tikki, but stick to busy stalls or reputed spots like Haldiram’s to avoid "Delhi Belly."',
    'Dress modestly (covering shoulders and knees) when visiting religious sites like Jama Masjid, Gurudwara Bangla Sahib, or the Lotus Temple.',
    'Air quality becomes severely hazardous during November and December due to crop burning and winter fog. Pack high-quality N95 masks if visiting then.'
  ]
},
{
  id: 'bangalore-in',
  city: 'Bangalore (Bengaluru)',
  country: 'India',
  airportCode: 'BLR',
  image: `https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1600&q=80${cropParams}`,
  description: 'Known as the Silicon Valley of India, Bengaluru offers a unique mix of lush green parks, historic royal palaces, vibrant craft breweries, and famously pleasant year-round weather.',
  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'October to February',
  dailyBudget: 55,
  attractions: [
    { name: 'Lalbagh Botanical Garden', duration: '2 hours', bestTime: 'Early Morning', entryFee: '~$0.50 (30 INR)' },
    { name: 'Bangalore Palace', duration: '2 hours', bestTime: 'Morning', entryFee: '~$3 (250 INR)' },
    { name: 'Cubbon Park', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Commercial Street', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
    { name: 'Vidhana Soudha', duration: '30 mins', bestTime: 'Evening (Illuminated)', entryFee: 'Free (Outside view only)' },
    { name: 'Nandi Hills (Day Trip)', duration: 'Half day', bestTime: 'Sunrise', entryFee: '~$0.50 (30 INR)' }
  ],
  travelTips: [
    'Traffic in Bangalore is notoriously congested. Use the Namma Metro system whenever possible to cross the city efficiently.',
    'Kempegowda International Airport (BLR) is located quite far from the city center. Factor in 1.5 to 2 hours of travel time using the very reliable Vayu Vajra airport buses or a prepaid taxi.',
    'The city has arguably the best craft beer scene in India. Check out the massive microbreweries in neighborhoods like Indiranagar, Koramangala, and JP Nagar.',
    'Start your day at a traditional "Darshini" (local eatery) with a hot filter coffee, crispy Masala Dosa, and fluffy Idlis.',
    'The weather is famously unpredictable. Always carry a light jacket and an umbrella, as sudden afternoon showers are common even outside the monsoon season.',
    'Use ride-hailing apps like Uber, Ola, or Rapido (for two-wheeler taxis), but be prepared for occasional driver cancellations during peak hours.'
  ]
},
{
  id: 'rishikesh-in',
  city: 'Rishikesh, Uttarakhand',
  country: 'India',
  airportCode: 'DED',
  image: `https://images.unsplash.com/photo-1605640840428-59c46ceee842?auto=format&fit=crop&w=1600&q=80${cropParams}`,
  description: 'Nestled in the Himalayan foothills along the sacred Ganges River, the "Yoga Capital of the World" offers a perfect blend of spiritual ashrams and thrilling white-water adventure.',
  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'September to November, February to April',
  dailyBudget: 40,
  attractions: [
    { name: 'Laxman Jhula & Ram Jhula', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Parmarth Niketan Ganga Aarti', duration: '1.5 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'White Water Rafting (Shivpuri)', duration: 'Half day', bestTime: 'Morning', entryFee: '~$12 - $18 (1000-1500 INR)' },
    { name: 'The Beatles Ashram (Chaurasi Kutia)', duration: '2 hours', bestTime: 'Afternoon', entryFee: '~$7 (600 INR)' },
    { name: 'Neer Garh Waterfall', duration: '2 hours', bestTime: 'Morning', entryFee: '~$0.50 (50 INR)' },
    { name: 'Triveni Ghat', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' }
  ],
  travelTips: [
    'Rishikesh is a strictly vegetarian and alcohol-free city due to its holy status. Do not expect to find meat or booze anywhere within the city limits.',
    'The closest airport is Jolly Grant Airport (DED) in Dehradun, which is about a 45-minute taxi ride away from the main hub of Rishikesh.',
    'Renting a scooter is the most popular way to navigate the narrow, hilly roads between the main areas of Tapovan, Laxman Jhula, and Swarg Ashram.',
    'Arrive at Parmarth Niketan or Triveni Ghat at least 45 minutes before sunset to secure a good viewing spot for the mesmerizing daily Ganga Aarti ceremony.',
    'Avoid visiting during the heavy monsoon season (July to August), as river rafting is suspended and landslides are common on mountain roads.',
    'Dressing modestly (covering shoulders and knees) is highly recommended, especially when visiting temples, ashrams, and wandering the local streets.'
  ]
},
{
  id: 'cardiff-gb',
city: 'Cardiff, Wales',
country: 'United Kingdom',
airportCode: 'CWL',
image: `https://images.unsplash.com/photo-1631125315683-b50db62a94ff?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
description: 'The lively capital of Wales combines an impressive medieval castle, a historic waterfront, Victorian arcades, and a thriving cultural scene with easy access to beautiful Welsh countryside.',
budget: 'Moderate',
tripType: 'Culture',
bestSeason: 'May to September',
dailyBudget: 85,
attractions: [
  { name: 'Cardiff Castle', duration: '2 hours', bestTime: 'Morning', entryFee: '~$20 (£16)' },
  { name: 'Cardiff Bay & Mermaid Quay', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
  { name: 'Principality Stadium', duration: '1.5 hours', bestTime: 'Morning', entryFee: '~$20 (£16)' },
  { name: 'National Museum Cardiff', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
  { name: 'Bute Park', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
  { name: 'St Fagans National Museum of History', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' }
],
travelTips: [
  'Cardiff city centre is compact and easy to explore on foot, with many major attractions, shopping streets, restaurants, and historic arcades located within walking distance of each other.',
  'Cardiff Airport (CWL) is the city’s main international airport. It is located west of the city centre, with train, bus, and taxi connections available for reaching central Cardiff.',
  'Use Cardiff Central railway station for convenient connections to other Welsh destinations and major UK cities including London, Bristol, and Birmingham.',
  'Cardiff Bay is especially enjoyable in the afternoon and evening, when the waterfront comes alive with restaurants, cafés, cultural attractions, and views across the harbour.',
  'If you are visiting Cardiff Castle, allow enough time to explore both the castle grounds and the impressive interiors rather than treating it as a quick photo stop.',
  'The weather in Wales can change quickly, so carrying a lightweight waterproof jacket is a good idea even during the warmer months.',
  'Football and rugby matches can make accommodation and transport considerably busier around the Principality Stadium, so check the local event calendar before booking your trip.',
  'For a quieter experience, explore Bute Park early in the morning and consider taking a walk along the River Taff before the city becomes busy.',
  'Cardiff makes an excellent base for exploring South Wales, with easy day-trip opportunities to places such as the Brecon Beacons, coastal towns, and historic Welsh castles.'
]
},
// --- 1. BERLIN, GERMANY ---
  {
    id: 'berlin-de',
    city: 'Berlin',
    country: 'Germany',
    airportCode: 'BER',
    image: `https://images.unsplash.com/photo-1560969184-10fe8719e047${cropParams}`,
    description: 'Germany’s vibrant capital, known for its turbulent history, world-renowned club culture, landmark monuments, and thriving art scene.',
    budget: 'Moderate',
    tripType: 'City',
    bestSeason: 'May to September',
    dailyBudget: 110,
    attractions: [
      { name: 'Brandenburg Gate', duration: '1 hour', bestTime: 'Sunset / Evening', entryFee: 'Free' },
      { name: 'Reichstag Building & Glass Dome', duration: '2 hours', bestTime: 'Morning (Pre-booking required)', entryFee: 'Free' },
      { name: 'East Side Gallery', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Museum Island (Pergamonmuseum)', duration: '3-4 hours', bestTime: 'Morning', entryFee: '€19' },
      { name: 'Checkpoint Charlie', duration: '45 mins', bestTime: 'Midday', entryFee: 'Free' },
      { name: 'Memorial to the Murdered Jews of Europe', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' }
    ],
    travelTips: [
      'Public Transit: Buy a 24-hour BVG transit pass (Zones AB). Make sure to stamp/validate it before boarding your first train.',
      'Nightlife Etiquette: Berlin clubs (like Berghain and Tresor) enforce notoriously strict, unpredictable door policies. Dress down in black, do not arrive in large groups, and do not take photos.',
      'Payment: Despite being a tech capital, many traditional bakeries, bars, and Spätis (convenience kiosks) remain cash-only.',
      'Sunday Flea Markets: Visit Mauerpark on Sundays for legendary open-air karaoke, street food, and vintage thrifting.',
      'Local Food: You must try authentic Currywurst at Curry 36 and a traditional Döner Kebab at Mustafa’s Gemüse Kebap.',
      'Summer Vibes: In summer, do as the locals do and grab a beer from a Späti to relax along the Spree river or at Tempelhofer Feld.'
    ]
  },

  // --- 2. MUNICH, GERMANY ---
  {
    id: 'munich-de',
    city: 'Munich',
    country: 'Germany',
    airportCode: 'MUC',
    image: `https://images.unsplash.com/photo-1595867818082-083862f3d630${cropParams}`,
    description: 'The proud capital of Bavaria, famous for centuries-old beer halls, Neuschwanstein Castle day trips, baroque palaces, and lively park surfing.',
    budget: 'Luxury',
    tripType: 'Culture',
    bestSeason: 'June to October',
    dailyBudget: 150,
    attractions: [
      { name: 'Marienplatz & New Town Hall (Glockenspiel)', duration: '1.5 hours', bestTime: '11:00 AM (for the chime show)', entryFee: 'Free' },
      { name: 'English Garden & Eisbachwelle Surfers', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Nymphenburg Palace', duration: '2-3 hours', bestTime: 'Morning', entryFee: '€15' },
      { name: 'BMW Museum & Welt', duration: '2 hours', bestTime: 'Morning', entryFee: '€10' },
      { name: 'Hofbräuhaus München', duration: '2 hours', bestTime: 'Evening', entryFee: 'Pay per meal/beer' },
      { name: 'Neuschwanstein Castle (Day Trip)', duration: 'Full Day', bestTime: '7:30 AM departure', entryFee: '€17.50 (Plus train)' }
    ],
    travelTips: [
      'Beer Garden Etiquette: You are allowed to bring your own picnic food to traditional Bavarian beer gardens, as long as you buy your drinks from the stalls.',
      'Neuschwanstein Booking: If taking the day trip to Neuschwanstein Castle in Füssen, book tickets directly online months ahead; ticket windows sell out immediately.',
      'Transit from Airport: The S-Bahn (S1 and S8 lines) runs directly between Munich Airport and the city center in about 40 minutes.',
      'Bavarian Breakfast: Try Weißwurst (traditional white veal sausage) paired with sweet mustard and a pretzel before noon.',
      'Sundays: Retail stores and supermarkets are strictly closed on Sundays. Only restaurants and major train station shops stay open.',
      'River Surfing: Watch skilled locals surf the standing wave on the Eisbach River inside the English Garden—it is mesmerizing.'
    ]
  },

  // --- 3. FLORENCE, ITALY ---
  {
    id: 'florence-it',
    city: 'Florence',
    country: 'Italy',
    airportCode: 'FLR',
    image: `https://images.unsplash.com/photo-1543429776-2782fc8e1acd${cropParams}`,
    description: 'The birthplace of the Renaissance, renowned for masterpieces of art, terracotta-domed architecture, Tuscan wine, and romantic bridges.',
    budget: 'Moderate',
    tripType: 'Culture',
    bestSeason: 'April to June, September to October',
    dailyBudget: 135,
    attractions: [
      { name: 'Duomo (Cathedral of Santa Maria del Fiore)', duration: '2 hours', bestTime: 'Morning (Climb Brunelleschi’s Dome)', entryFee: '€30 (Full Pass)' },
      { name: 'Uffizi Gallery', duration: '3-4 hours', bestTime: 'Early Morning (Mandatory reservation)', entryFee: '€25' },
      { name: 'Galleria dell’Accademia (Michelangelo’s David)', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '€16' },
      { name: 'Ponte Vecchio', duration: '45 mins', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Piazzale Michelangelo', duration: '1.5 hours', bestTime: 'Golden Hour / Sunset', entryFee: 'Free' },
      { name: 'Boboli Gardens', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: '€10' }
    ],
    travelTips: [
      'Sunset Point: Walk up to Piazzale Michelangelo with a bottle of Chianti wine for the most iconic sunset panorama over the Florence skyline.',
      'Pre-booking: The Uffizi, Accademia, and Duomo dome climbs sell out weeks in advance. Never expect to buy tickets on the day.',
      'Local Delicacy: Try the famous Bistecca alla Fiorentina (T-bone steak, ordered rare) and grab a €7 panino at All’Antico Vinaio.',
      'Walkability: Florence is compact and pedestrian-only in the center. Avoid taxis or rental cars, as the ZTL (restricted driving zone) fines are massive.',
      'Leather Goods: When shopping at the San Lorenzo leather market, look for the official "Vera Pelle" genuine Italian leather stamps.',
      'Coffee Rules: Stand at the bar counter to drink your espresso or cappuccino for €1.50 instead of paying a 300% table service markup.'
    ]
  },

  // --- 4. ATHENS, GREECE ---
  {
    id: 'athens-gr',
    city: 'Athens',
    country: 'Greece',
    airportCode: 'ATH',
    image: `https://images.unsplash.com/photo-1603565816030-6b389eeb23cb${cropParams}`,
    description: 'The historic heart of ancient civilization, dominated by 5th-century BC landmarks, vibrant rooftop dining, and lively Mediterranean alleyways.',
    budget: 'Budget',
    tripType: 'Culture',
    bestSeason: 'April to June, September to November',
    dailyBudget: 85,
    attractions: [
      { name: 'The Acropolis & Parthenon', duration: '2-3 hours', bestTime: '8:00 AM (Beat summer heat & cruise crowds)', entryFee: '€20' },
      { name: 'Acropolis Museum', duration: '2 hours', bestTime: 'Midday (Air-conditioned comfort)', entryFee: '€15' },
      { name: 'Plaka & Anafiotika Neighborhoods', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Ancient Agora of Athens', duration: '2 hours', bestTime: 'Morning', entryFee: '€10' },
      { name: 'Panathenaic Stadium (Kallimarmaro)', duration: '1 hour', bestTime: 'Morning', entryFee: '€10' },
      { name: 'Mount Lycabettus', duration: '1.5 hours', bestTime: 'Sunset (Take the funicular)', entryFee: 'Free (Funicular €10)' }
    ],
    travelTips: [
      'Acropolis Pass: Consider the €30 combined archaeological ticket which includes the Acropolis, Ancient Agora, Roman Agora, and Temple of Olympian Zeus.',
      'Heat Management: In July and August, temperatures regularly surpass 38°C (100°F). Plan all outdoor sightseeing before 11:00 AM or after 6:00 PM.',
      'Rooftop Views: Book a dinner table at a rooftop tavern in Monastiraki or Psiri to see the Parthenon illuminated at night.',
      'Public Transit: The Athens Metro connects directly from Athens International Airport (Line 3) straight into Syntagma and Monastiraki squares.',
      'Island Port: If you are taking a ferry to the Greek islands, take the Green Metro Line 1 directly to the Port of Piraeus.',
      'Street Food: Grab an authentic Gyros or Souvlaki wrap on pita bread from local spots for under €4.'
    ]
  },

  // --- 5. SEVILLE, SPAIN ---
  {
    id: 'seville-es',
    city: 'Seville',
    country: 'Spain',
    airportCode: 'SVQ',
    image: `https://images.unsplash.com/photo-1688404808661-92f72f2ea258?q=80&w=876&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The soul of Andalusia, renowned for fiery flamenco performances, grand Moorish palaces, sun-drenched plazas, and orange-tree-lined avenues.',
    budget: 'Moderate',
    tripType: 'Culture',
    bestSeason: 'March to May, October to November',
    dailyBudget: 95,
    attractions: [
      { name: 'Royal Alcázar of Seville', duration: '3 hours', bestTime: '9:00 AM', entryFee: '€13.50' },
      { name: 'Plaza de España', duration: '2 hours', bestTime: 'Late Afternoon / Golden Hour', entryFee: 'Free' },
      { name: 'Seville Cathedral & La Giralda Tower', duration: '2 hours', bestTime: 'Morning', entryFee: '€12' },
      { name: 'Barrio Santa Cruz (Jewish Quarter)', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Setas de Sevilla (Metropol Parasol)', duration: '1 hour', bestTime: 'Sunset (Rooftop walkway)', entryFee: '€15' },
      { name: 'Flamenco Show at Casa de la Memoria', duration: '1 hour', bestTime: '7:30 PM Show', entryFee: '€22' }
    ],
    travelTips: [
      'Summer Scorcher: Seville is Europe’s hottest major city in summer, with temperatures often passing 42°C (108°F). Avoid visiting in July and August.',
      'Flamenco Integrity: Avoid touristy "dinner and flamenco" packages. Instead, book an authentic performance at a dedicated "Peña" or cultural center.',
      'Tapas Crawl: Seville is the tapas capital of Spain. Never eat a full meal in one place; order one drink and one tapa, then hop to the next bar.',
      'Local Schedule: The afternoon siesta is very real here. Many independent boutiques and smaller sites close between 2:00 PM and 5:30 PM.',
      'Game of Thrones: The Royal Alcázar served as the Water Gardens of Dorne in the HBO show; book skip-the-line tickets online.',
      'Orange Trees: The thousands of bitter Seville orange trees lining the streets produce fruit used for British marmalade, but they are too sour to eat raw.'
    ]
  },

  // --- 6. CANCUN & RIVIERA MAYA, MEXICO ---
  {
    id: 'cancun-mx',
    city: 'Cancún',
    country: 'Mexico',
    airportCode: 'CUN',
    image: `https://images.unsplash.com/photo-1510097467424-192d713fd8b2${cropParams}`,
    description: 'The Caribbean crown of Mexico, offering turquoise waters, all-inclusive luxury resorts, ancient Mayan ruins, and mystical freshwater cenotes.',
    budget: 'Moderate',
    tripType: 'Beach',
    bestSeason: 'December to April',
    dailyBudget: 130,
    attractions: [
      { name: 'Chichén Itzá Ruins (Day Trip)', duration: 'Full Day', bestTime: '8:00 AM (Arrive at opening)', entryFee: '614 MXN (~$35)' },
      { name: 'Ik Kil Cenote', duration: '2 hours', bestTime: 'Midday (After Chichén Itzá)', entryFee: '200 MXN' },
      { name: 'Isla Mujeres Catamaran Tour', duration: 'Full Day', bestTime: 'Morning Departure', entryFee: '$60 - $90' },
      { name: 'Tulum Archaeological Ruins', duration: '2 hours', bestTime: 'Early Morning', entryFee: '95 MXN' },
      { name: 'Xcaret Eco-Archaeological Park', duration: 'Full Day', bestTime: 'Morning to Night Show', entryFee: '$110+' },
      { name: 'Playa Delfines Viewpoint', duration: '1 hour', bestTime: 'Sunrise / Morning', entryFee: 'Free' }
    ],
    travelTips: [
      'Airport Taxi Trap: Cancun Airport has a notorious corridor nicknamed the "Shark Tank" filled with aggressive timeshare sellers and pirate cabs. Pre-book official private airport transfers online before landing.',
      'Sargassum Seaweed: Keep track of local Sargassum forecasts; summer months can bring seaweed accumulation to Caribbean beaches.',
      'Cenote Etiquette: You must shower thoroughly before swimming in cenotes and refrain from wearing chemical sunscreen to protect the fragile underground aquifer.',
      'Tipping: Because Cancun caters heavily to US tourism, a 15% to 20% tip is standard in tourist zones.',
      'Payment: Carry Mexican Pesos (MXN) for street food, tolls, and local ADO buses; paying in USD often yields poor conversion rates.',
      'Local Transit: Take the inexpensive R-1 or R-2 public bus to travel up and down the Hotel Zone for only 12 MXN per ride.'
    ]
  },

  // --- 7. MENDOZA, ARGENTINA ---
  {
    id: 'mendoza-ar',
    city: 'Mendoza',
    country: 'Argentina',
    airportCode: 'MDZ',
    image: `https://images.unsplash.com/photo-1616039407041-5ce631b57879?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The wine capital of South America, situated in the dramatic foothills of the Andes Mountains, world-famous for its Malbec vineyards.',
    budget: 'Budget',
    tripType: 'Nature',
    bestSeason: 'October to April (Harvest in Feb-March)',
    dailyBudget: 60,
    attractions: [
      { name: 'Uco Valley Winery Tour', duration: 'Full Day', bestTime: '10:00 AM (Multi-course wine lunch)', entryFee: '~$70 - $120' },
      { name: 'Luján de Cuyo Bike & Wine', duration: 'Half Day', bestTime: 'Morning', entryFee: 'Bike Rental ~$25' },
      { name: 'General San Martín Park', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Aconcagua Provincial Park (Day Trip)', duration: 'Full Day', bestTime: 'Early Morning', entryFee: 'ARS 5,000' },
      { name: 'Plaza Independencia', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Termas de Cacheuta Thermal Baths', duration: '4 hours', bestTime: 'Morning', entryFee: '~$25' }
    ],
    travelTips: [
      'Winery Reservations: Mendoza’s best "bodegas" require advance reservations weeks ahead for tasting flights and multi-course paired lunches.',
      'Transport: Wine regions (Maipú, Luján de Cuyo, Uco Valley) are spread out. Hire a dedicated "remís" (private driver) or join an organized tour rather than driving.',
      'Blue Dollar Economy: Take advantage of the informal "Blue Dollar" exchange rate by sending money via Western Union to make luxury wine tours remarkably affordable.',
      'Siesta Time: Mendoza takes its afternoon rest very seriously; almost the entire downtown closes between 1:30 PM and 5:00 PM.',
      'Altitude: Wine regions like Uco Valley sit at over 1,200m elevation. The sun is intense and alcohol hits faster; drink lots of water.',
      'Harvest Festival: The "Fiesta Nacional de la Vendimia" in early March is one of the world\'s largest wine festivals—book months in advance.'
    ]
  },

  // --- 8. SAO PAULO, BRAZIL ---
  {
    id: 'sao-paulo-br',
    city: 'São Paulo',
    country: 'Brazil',
    airportCode: 'GRU',
    image: `https://images.unsplash.com/photo-1543059080-f9b1272213d5${cropParams}`,
    description: 'A sprawling megalopolis celebrated as Latin America’s gastronomic powerhouse, cultural epicenter, and financial capital.',
    budget: 'Moderate',
    tripType: 'City',
    bestSeason: 'March to May, September to November',
    dailyBudget: 90,
    attractions: [
      { name: 'Avenida Paulista', duration: '2-3 hours', bestTime: 'Sunday (Pedestrian-only street)', entryFee: 'Free' },
      { name: 'MASP (São Paulo Museum of Art)', duration: '2 hours', bestTime: 'Tuesday (Free entry)', entryFee: 'R$ 60' },
      { name: 'Ibirapuera Park', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Liberdade (Japanese District)', duration: '2 hours', bestTime: 'Sunday (Street Food Fair)', entryFee: 'Free' },
      { name: 'Municipal Market (Mercadão)', duration: '1.5 hours', bestTime: 'Lunchtime', entryFee: 'Free (Food costs extra)' },
      { name: 'Beco do Batman (Graffiti Alleys)', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' }
    ],
    travelTips: [
      'Food Capital: São Paulo has some of the world’s best dining, from Michelin-starred fine dining (D.O.M., Maní) to traditional Pizza Paulistana (often considered superior to Italian pizza).',
      'Japanese Influence: São Paulo has the largest Japanese diaspora outside Japan. Visit Liberdade for authentic ramen and Japanese street food.',
      'Safety: Avoid walking with your phone in your hand along Avenida Paulista or near Praça da Sé, as motorbike snatch-and-grab theft is common.',
      'Traffic: São Paulo’s traffic is legendary. Rely on the clean, safe, and efficient Metro system during weekday rush hours.',
      'Sundays on Paulista: On Sundays, Avenida Paulista is completely closed to motor vehicles, turning into an enormous public festival with buskers and food stalls.',
      'Airport Distance: GRU Airport is far from the city. Use the Express Airport train (Expresso Aeroporto) or allow up to 2 hours for an Uber in heavy traffic.'
    ]
  },

  // --- 9. SEATTLE, USA ---
  {
    id: 'seattle-us',
    city: 'Seattle',
    country: 'USA',
    airportCode: 'SEA',
    image: `https://images.unsplash.com/photo-1502175353174-a7a70e73b362${cropParams}`,
    description: 'The Emerald City of the Pacific Northwest, surrounded by evergreen forests, Puget Sound waterways, coffee culture, and tech innovation.',
    budget: 'Luxury',
    tripType: 'City',
    bestSeason: 'June to September',
    dailyBudget: 180,
    attractions: [
      { name: 'Space Needle', duration: '1.5 hours', bestTime: 'Sunset', entryFee: '$35 - $39' },
      { name: 'Pike Place Market', duration: '2-3 hours', bestTime: '9:00 AM (Watch fish throwers)', entryFee: 'Free' },
      { name: 'Chihuly Garden and Glass', duration: '1.5 hours', bestTime: 'Morning', entryFee: '$32' },
      { name: 'Museum of Pop Culture (MoPOP)', duration: '2.5 hours', bestTime: 'Afternoon', entryFee: '$30' },
      { name: 'Bainbridge Island Ferry', duration: 'Half Day', bestTime: 'Clear Afternoon', entryFee: '$9.85 (Passenger return)' },
      { name: 'Mount Rainier National Park (Day Trip)', duration: 'Full Day', bestTime: '7:00 AM departure', entryFee: '$30 per vehicle' }
    ],
    travelTips: [
      'No Umbrellas: Real Seattleites rarely use umbrellas; the rain is usually a gentle mist. Wear a high-quality hooded waterproof jacket instead.',
      'Coffee Scene: Skip the original Starbucks at Pike Place (the line is hours long) and explore local independent roasters like Espresso Vivace, Victrola, or Monorail Espresso.',
      'Public Transit: Take the Sound Transit Link Light Rail directly from SEA Airport to downtown Westlake Station for only $3.',
      'Best View: Head to Kerry Park on Queen Anne Hill for the postcard view of the Space Needle with Mount Rainier towering in the background.',
      'Seafood: Try fresh Dungeness crab, Alaskan wild salmon, and Pacific Northwest chowder served in sourdough bread bowls.',
      'Ferries: Riding the Washington State Ferry to Bainbridge Island offers the best skyline views of Seattle from the water.'
    ]
  },

  // --- 10. MAUI, USA ---
  {
    id: 'maui-us',
    city: 'Maui',
    country: 'USA',
    airportCode: 'OGG',
    image: `https://images.unsplash.com/photo-1542259009477-d625272157b7${cropParams}`,
    description: 'Hawaii’s valley isle, famous for world-class beaches, the scenic Road to Hana, sacred Haleakalā volcano sunrises, and humpback whale watching.',
    budget: 'Luxury',
    tripType: 'Beach',
    bestSeason: 'April to May, September to November',
    dailyBudget: 260,
    attractions: [
      { name: 'Haleakalā National Park Sunrise', duration: '4 hours', bestTime: '4:30 AM (Reservation mandatory)', entryFee: '$30/car + $1 reservation' },
      { name: 'The Road to Hana', duration: 'Full Day', bestTime: '6:30 AM start', entryFee: 'Free (Wai’anapanapa $10)' },
      { name: 'Molokini Crater Snorkel Boat Tour', duration: '4 hours', bestTime: 'Morning (Calmest water)', entryFee: '$120 - $160' },
      { name: 'Ka’anapali Beach & Black Rock', duration: 'Half Day', bestTime: 'Sunset (Cliff dive ceremony)', entryFee: 'Free' },
      { name: 'Waiʻanapanapa Black Sand Beach', duration: '2 hours', bestTime: 'Midday', entryFee: '$10 reservation per vehicle' },
      { name: 'Whale Watching Tour (Dec - April)', duration: '2 hours', bestTime: 'Morning', entryFee: '$65+' }
    ],
    travelTips: [
      'Car Rental: A rental car is 100% essential on Maui. Book it as soon as you purchase your flights, as island inventory sells out.',
      'Reef-Safe Sunscreen: Hawaii law strictly bans chemical sunscreens (oxybenzone and octinoxate). Only mineral (zinc oxide / titanium dioxide) sunscreens are legal.',
      'Haleakalā Sunrise: You MUST make a sunrise reservation online via recreation.gov up to 60 days ahead. Dress in heavy winter clothing; the summit drops below freezing.',
      'Road to Hana: Download an offline GPS audio tour app (like Shaka Guide) before starting, as there is zero cellular service along the scenic jungle highway.',
      'Respect the Land: Never take lava rocks, sand, or coral from the island (Pele\'s curse), and keep a minimum 10-foot distance from protected Hawaiian sea turtles (Honu).',
      'Food Trucks: Eat at local food trucks for delicious garlic shrimp, poke bowls, and shaved ice with coconut syrup.'
    ]
  },

  // --- 11. DOHA, QATAR ---
  {
    id: 'doha-qa',
    city: 'Doha',
    country: 'Qatar',
    airportCode: 'DOH',
    image: `https://images.unsplash.com/photo-1669300884869-e6e11c67c031?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'A gleaming Arabian Gulf capital blending cutting-edge futuristic architecture, world-renowned Islamic art, and historic waterfront souqs.',
    budget: 'Luxury',
    tripType: 'Luxury',
    bestSeason: 'November to March',
    dailyBudget: 180,
    attractions: [
      { name: 'Museum of Islamic Art (MIA)', duration: '2-3 hours', bestTime: 'Morning', entryFee: 'QAR 50' },
      { name: 'Souq Waqif', duration: '3 hours', bestTime: 'Evening (When markets come alive)', entryFee: 'Free' },
      { name: 'National Museum of Qatar', duration: '2.5 hours', bestTime: 'Afternoon', entryFee: 'QAR 50' },
      { name: 'Katara Cultural Village', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'The Pearl-Qatar', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
      { name: 'Inland Sea (Khor Al Adaid) Desert Safari', duration: '5 hours', bestTime: 'Afternoon / Sunset Tour', entryFee: '~$70+' }
    ],
    travelTips: [
      'Free Transit Tour: If you have a layover over 6 hours with Qatar Airways at Hamad International Airport, book an official Discover Qatar city transit tour.',
      'Dress Code: Qatar is culturally conservative. Shoulders and knees must be covered in malls, government buildings, and markets. Revealing clothing is not permitted.',
      'Metro: The Doha Metro is brand-new, ultra-modern, driverless, and one of the cleanest in the world. Gold Club and standard carriages operate with a contactless travel card.',
      'Alcohol Regulations: Alcohol is strictly forbidden in public areas and cannot be brought through customs. It is only sold in licensed international hotel bars.',
      'Falcon Souq: Located right inside Souq Waqif, you can visit the dedicated falcon hospital and shops to see how prized falcons are trained.',
      'Summer Weather: Avoid outdoor activities from June to September, when temperatures exceed 45°C (113°F).'
    ]
  },

  // --- 12. MUMBAI, INDIA ---
  {
    id: 'mumbai-in',
    city: 'Mumbai',
    country: 'India',
    airportCode: 'BOM',
    image: `https://images.unsplash.com/photo-1569758267239-d08deb78bb1a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'India’s financial heartbeat and home of Bollywood, a high-energy coastal metropolis of Victorian Gothic architecture and iconic street flavors.',
    budget: 'Moderate',
    tripType: 'City',
    bestSeason: 'November to February',
    dailyBudget: 60,
    attractions: [
      { name: 'Gateway of India', duration: '1 hour', bestTime: 'Sunrise / Early Morning', entryFee: 'Free' },
      { name: 'Marine Drive (Queen’s Necklace)', duration: '2 hours', bestTime: 'Sunset to Night', entryFee: 'Free' },
      { name: 'Elephanta Caves (UNESCO)', duration: 'Half Day', bestTime: 'Morning Ferry from Gateway', entryFee: '₹600 (Foreigners) + ₹260 Ferry' },
      { name: 'Chhatrapati Shivaji Maharaj Terminus (CSMT)', duration: '1 hour', bestTime: 'Evening (Illuminated)', entryFee: 'Free' },
      { name: 'Dhobi Ghat', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free to view from bridge' },
      { name: 'Bandra Bandstand & Linking Road', duration: '2-3 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Local Trains: Avoid the Mumbai suburban local train system during peak rush hours (8:30-11:00 AM and 5:30-8:30 PM), as crowds are intense.',
      'Iconic Street Food: You must try authentic Mumbai Vada Pav, Pav Bhaji at Sardar Refreshments, and Pani Puri at Elco in Bandra.',
      'Taxis: The black-and-yellow (Kaali Peeli) taxis run strictly on the meter in South Mumbai. For convenience and AC, use Uber or Ola.',
      'Heritage Walking: Explore the Fort and Kala Ghoda art precincts on foot to appreciate the world’s second-largest collection of Art Deco and Victorian Gothic buildings.',
      'Monsoon Season: The monsoon (June to September) brings dramatic, torrential rains that flood low-lying streets. Carry waterproof gear.',
      'Drinking Water: Stick strictly to sealed bottled water or filtered water in established restaurants.'
    ]
  },

  // --- 13. CEBU, PHILIPPINES ---
  {
    id: 'cebu-ph',
    city: 'Cebu',
    country: 'Philippines',
    airportCode: 'CEB',
    image: `https://images.unsplash.com/photo-1495443942462-81f29560f7e0?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The Queen City of the South, renowned as the adventure gateway to turquoise waterfalls, whale shark encounters, sardine runs, and tropical beaches.',
    budget: 'Moderate',
    tripType: 'Adventure',
    bestSeason: 'December to May',
    dailyBudget: 75,
    attractions: [
      { name: 'Kawasan Falls Canyoneering (Badian)', duration: 'Full Day', bestTime: 'Early Morning', entryFee: '₱2,100 (Tour with guide)' },
      { name: 'Moalboal Sardine Run & Sea Turtles', duration: '3 hours', bestTime: 'Morning', entryFee: '₱100 Environmental Fee' },
      { name: 'Temple of Leah', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '₱100' },
      { name: 'Sirao Garden (Little Amsterdam)', duration: '1.5 hours', bestTime: 'Morning', entryFee: '₱100' },
      { name: 'Basilica Minore del Santo Niño & Magellan’s Cross', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Oslob Whale Shark Snorkeling', duration: '2 hours', bestTime: '6:00 AM', entryFee: '₱1,000' }
    ],
    travelTips: [
      'Kawasan Canyoneering: Canyoneering at Kawasan Falls involves jumping from 10m to 15m cliffs into river canyons. Helmets, life jackets, and a licensed guide are mandatory.',
      'Transit Across Island: Traveling from Cebu City to southern adventure hubs like Moalboal or Oslob takes 3 to 4 hours by bus from the South Bus Terminal.',
      'Cebu Lechon: Cebu is famous for having the best roasted pig (Lechon) in the world. Try Rico’s Lechon or House of Lechon.',
      'Airport Location: Mactan-Cebu International Airport (CEB) is located on Mactan Island, not in Cebu City proper. Allow 1-2 hours for city traffic during rush hours.',
      'Moalboal Shore Snorkel: You do not need an expensive boat tour for the famous million-sardine run in Moalboal; it is located just 20 meters off Panagsama Beach.',
      'Cash Economy: ATMs in rural beach towns often run out of cash. Withdraw sufficient Philippine Pesos (PHP) in Cebu City before heading south.'
    ]
  },

  // --- 14. CHIANG MAI, THAILAND ---
  {
    id: 'chiang-mai-th',
    city: 'Chiang Mai',
    country: 'Thailand',
    airportCode: 'CNX',
    image: `https://images.unsplash.com/photo-1512553353614-82a7370096dc${cropParams}`,
    description: 'The cultural capital of northern Thailand, nestled among misty mountains with hundreds of ancient Buddhist temples and ethical elephant sanctuaries.',
    budget: 'Budget',
    tripType: 'Culture',
    bestSeason: 'November to February',
    dailyBudget: 40,
    attractions: [
      { name: 'Wat Phra That Doi Suthep', duration: '2-3 hours', bestTime: 'Sunrise or Late Afternoon', entryFee: '30 THB' },
      { name: 'Ethical Elephant Nature Park', duration: 'Full Day', bestTime: 'Full Day Tour (Book months ahead)', entryFee: '~2,500 - 3,500 THB' },
      { name: 'Sunday Walking Street Night Market', duration: '3 hours', bestTime: '6:00 PM to 10:00 PM', entryFee: 'Free' },
      { name: 'Wat Chedi Luang', duration: '1 hour', bestTime: 'Morning', entryFee: '50 THB' },
      { name: 'Wat Pha Lat (Hidden Jungle Temple)', duration: '1.5 hours', bestTime: 'Early Morning', entryFee: 'Free' },
      { name: 'Doi Inthanon National Park (Highest Peak)', duration: 'Full Day', bestTime: '7:00 AM Departure', entryFee: '300 THB' }
    ],
    travelTips: [
      'Ethical Sanctuaries: Never visit elephant venues that offer riding, shows, or bullhooks. Choose genuine observation and rescue sanctuaries like Elephant Nature Park.',
      'Burning Season Warning: Avoid visiting between late February and mid-April. Agricultural burning creates severe smoke pollution that blankets the northern valleys.',
      'Local Dish: You cannot leave without eating Khao Soi—a rich, creamy coconut curry noodle soup topped with crispy fried noodles (costs under $2).',
      'Red Songthaews: Wave down the red shared pick-up trucks ("Songthaew") for cheap 30-40 THB trips anywhere inside the old city perimeter.',
      'Monk Chat: Many temples (like Wat Chedi Luang) offer informal "Monk Chats" where you can sit with novice monks to ask about Buddhism and help them practice English.',
      'Dress Code: Modest dress covering shoulders and knees is strictly enforced at all temples.'
    ]
  },

  // --- 15. LUXOR, EGYPT ---
  {
    id: 'luxor-eg',
    city: 'Luxor',
    country: 'Egypt',
    airportCode: 'LXR',
    image: `https://images.unsplash.com/photo-1632944398987-494eebe663be?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The world’s greatest open-air museum, home to the magnificent Valley of the Kings, Karnak Temple, and ancient Pharaoh tombs along the Nile.',
    budget: 'Budget',
    tripType: 'Culture',
    bestSeason: 'October to April',
    dailyBudget: 50,
    attractions: [
      { name: 'Valley of the Kings (King Tut Tomb)', duration: '3-4 hours', bestTime: '6:00 AM (Opening)', entryFee: '600 EGP (Standard) + Tut extra' },
      { name: 'Karnak Temple Complex', duration: '3 hours', bestTime: 'Morning or Sound & Light Show', entryFee: '450 EGP' },
      { name: 'Luxor Temple', duration: '2 hours', bestTime: 'Night (Stunning illumination)', entryFee: '400 EGP' },
      { name: 'Temple of Hatshepsut', duration: '2 hours', bestTime: 'Early Morning', entryFee: '360 EGP' },
      { name: 'Sunrise Hot Air Balloon Ride', duration: '2 hours', bestTime: '4:30 AM (Sunrise)', entryFee: '~$50 - $80 USD' },
      { name: 'Colossi of Memnon', duration: '30 mins', bestTime: 'Morning', entryFee: 'Free' }
    ],
    travelTips: [
      'Early Starts: Luxor gets brutally hot. Start your sightseeing on the West Bank right when tombs open at 6:00 AM to beat tour buses and scorching sun.',
      'Hot Air Balloon: A sunrise hot air balloon over the Valley of the Kings is world-renowned and one of the most affordable balloon flights on earth.',
      'Tomb Tickets: Standard Valley of the Kings tickets include entry to 3 tombs. Famous tombs like King Tutankhamun and Seti I require separate add-on tickets.',
      'Nile Ferry: Cross between the East Bank and West Bank using the local public ferry for just 10 EGP instead of paying 100+ EGP for private motorboats.',
      'Haggling & Touts: Expect intense sales pitches from carriage drivers ("calèche") and souvenir vendors. A firm, polite "La, Shukran" (No, thank you) is required.',
      'Nile Cruise: Taking a multi-day Nile cruise between Luxor and Aswan is the classic way to explore southern Egypt’s temple complexes.'
    ]
  },

  // --- 16. MAURITIUS ---
  {
    id: 'mauritius-mu',
    city: 'Mauritius',
    country: 'Mauritius',
    airportCode: 'MRU',
    image: `https://images.unsplash.com/photo-1513415277900-a62401e19be4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'An idyllic Indian Ocean island celebrated for volcanic mountain backdrops, coral reefs, luxury beachfronts, and the Chamarel Seven Colored Earths.',
    budget: 'Luxury',
    tripType: 'Beach',
    bestSeason: 'May to December',
    dailyBudget: 175,
    attractions: [
      { name: 'Le Morne Brabant (UNESCO Mountain Hike)', duration: '4 hours', bestTime: '6:30 AM', entryFee: 'Free (Guide recommended)' },
      { name: 'Underwater Waterfall Helicopter View', duration: '45 mins', bestTime: 'Midday (Optimal light)', entryFee: '~$250+ USD' },
      { name: 'Chamarel Seven Coloured Earths', duration: '2 hours', bestTime: 'Morning', entryFee: '550 MUR' },
      { name: 'Île aux Cerfs Day Trip', duration: 'Full Day', bestTime: 'Morning Catamaran', entryFee: '~$50 (Speedboat/Tour)' },
      { name: 'Black River Gorges National Park', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Sir Seewoosagur Ramgoolam Botanic Garden', duration: '1.5 hours', bestTime: 'Morning', entryFee: '300 MUR' }
    ],
    travelTips: [
      'Underwater Waterfall: The famous "underwater waterfall" off Le Morne is an optical illusion caused by sand and silt runoff. It can only be seen from a helicopter flight.',
      'Driving: You drive on the left side of the road in Mauritius. Renting a car is the best and cheapest way to see the island at your own pace.',
      'Street Food: You must try "Dholl Puri" (thin flatbread stuffed with yellow split peas and served with curries and chutneys) at street stalls for under $1.',
      'Wind Conditions: The east coast can be very windy between June and August. Stay on the north or west coasts (Trou aux Biches, Flic en Flac) for calmer seas.',
      'Reef Safety: Wear water shoes at certain public beaches to protect your feet from stonefish and sharp coral.',
      'Local Rum: Visit the Rhumerie de Chamarel to taste high-grade agricultural rum distilled from fresh sugarcane.'
    ]
  },

  // --- 17. SERENGETI & KILIMANJARO, TANZANIA ---
  {
    id: 'serengeti-tz',
    city: 'Serengeti & Kilimanjaro',
    country: 'Tanzania',
    airportCode: 'JRO',
    image: `https://images.unsplash.com/photo-1711062752040-8587e1a3b8e8?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The ultimate African safari frontier, world-renowned for the Great Wildebeest Migration, Ngorongoro Crater, and the snow-capped peak of Mount Kilimanjaro.',
    budget: 'Luxury',
    tripType: 'Adventure',
    bestSeason: 'June to October (Dry Season / River Crossings)',
    dailyBudget: 350,
    attractions: [
      { name: 'Serengeti National Park Game Drive', duration: 'Full Day', bestTime: 'Sunrise & Late Afternoon', entryFee: '$82.60/day Park Fee' },
      { name: 'Ngorongoro Crater Safari', duration: 'Full Day', bestTime: 'Early Morning descent', entryFee: '$70.80 Park + $295 vehicle fee' },
      { name: 'The Great Migration Mara River Crossing', duration: 'Full Day', bestTime: 'July to October', entryFee: 'Included in Safari' },
      { name: 'Mount Kilimanjaro Base Camp / Day Hike', duration: 'Full Day', bestTime: 'Early Morning', entryFee: '$70+ Park Entry' },
      { name: 'Hot Air Balloon Safari over Serengeti', duration: '3 hours', bestTime: '5:00 AM (Sunrise)', entryFee: '~$550 - $600 USD' },
      { name: 'Traditional Maasai Boma Village Visit', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '~$20 - $30 Donation' }
    ],
    travelTips: [
      'Safari Booking: Always book with a reputable, licensed tour operator. Budget camping safaris start around $200/day, while luxury tented lodges exceed $800/day.',
      'Vaccinations & Health: Yellow fever vaccination proof is required if arriving from endemic countries. Malaria prophylactic medication is essential.',
      'Clothing: Pack neutral-colored clothing (khaki, beige, olive). Avoid bright blue and black clothing, as they attract biting tsetse flies.',
      'Tipping: Tipping your safari guide and camp staff is customary and expected ($20-$30 per day per vehicle for the head guide).',
      'Plastics Ban: Tanzania enforces a strict total ban on single-use plastic bags. Do not pack duty-free bags in your luggage.',
      'Dust: Safari tracks are extremely dusty. Bring dustproof bags for camera gear and pack eye drops and a buff/bandana.'
    ]
  },

  // --- 18. CAIRNS & GREAT BARRIER REEF, AUSTRALIA ---
  {
    id: 'cairns-au',
    city: 'Cairns',
    country: 'Australia',
    airportCode: 'CNS',
    image: `https://images.unsplash.com/photo-1688337707006-64d5a1f6582c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The tropical gateway to the UNESCO Great Barrier Reef and the ancient Daintree Rainforest, packed with coral reef expeditions and rainforest adventures.',
    budget: 'Moderate',
    tripType: 'Beach',
    bestSeason: 'May to October (Dry Season)',
    dailyBudget: 140,
    attractions: [
      { name: 'Great Barrier Reef Outer Reef Snorkel & Scuba', duration: 'Full Day', bestTime: 'Morning departure', entryFee: '~$180 - $250 AUD' },
      { name: 'Kuranda Scenic Railway & Skyrail Cableway', duration: 'Full Day', bestTime: 'Morning', entryFee: '$125 AUD' },
      { name: 'Daintree Rainforest & Cape Tribulation', duration: 'Full Day', bestTime: '7:30 AM departure', entryFee: 'Tour / Ferry fee' },
      { name: 'Cairns Esplanade Lagoon', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Mossman Gorge', duration: '3 hours', bestTime: 'Morning', entryFee: '$14 AUD (Shuttle)' },
      { name: 'Fitzroy Island Day Trip', duration: 'Full Day', bestTime: 'Morning Ferry', entryFee: '$95 AUD (Ferry return)' }
    ],
    travelTips: [
      'Marine Stingers: Box jellyfish and Irukandji stingers are present in ocean waters from November to May. You must wear a full-body Lycra stinger suit when swimming in open water.',
      'Crocodile Safety: Never swim in rivers, estuaries, or unfenced beaches in Tropical North Queensland; saltwater crocodiles are present. Swim only in the Cairns Esplanade Lagoon or stinger enclosures.',
      'Reef Motion Sickness: The boat ride to the Outer Great Barrier Reef crosses open ocean and can be rough. Take seasickness tablets before boarding.',
      'Sun Protection: The tropical UV index is extreme. Wear SPF 50+ reef-safe sunscreen and a rash vest.',
      'Daintree Rainforest: The Daintree is the world’s oldest continuously surviving tropical rainforest (over 180 million years old). Rent a car or take a guided tour.',
      'Tipping: Tipping is not required in Australia, though 10% is appreciated for exceptional restaurant service.'
    ]
  },

  // --- 19. BELFAST, NORTHERN IRELAND ---
  {
    id: 'belfast-gb',
    city: 'Belfast',
    country: 'United Kingdom',
    airportCode: 'BFS',
    image: `https://images.unsplash.com/photo-1593255136145-da399169fadd?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'A resilient and historic city famous as the birthplace of the RMS Titanic, featuring legendary black cab political mural tours, and the Giant’s Causeway coastline.',
    budget: 'Moderate',
    tripType: 'City',
    bestSeason: 'May to September',
    dailyBudget: 120,
    attractions: [
      { name: 'Titanic Belfast', duration: '3 hours', bestTime: 'Morning (Book online)', entryFee: '£24.95' },
      { name: 'Black Cab Political Murals & Peace Wall Tour', duration: '1.5 hours', bestTime: 'Morning', entryFee: '£40 - £50 (Per cab)' },
      { name: 'Giant’s Causeway (Day Trip)', duration: 'Full Day', bestTime: 'Morning Tour', entryFee: '£14 (Free to walk stones)' },
      { name: 'St. George’s Market', duration: '2 hours', bestTime: 'Friday - Sunday mornings', entryFee: 'Free' },
      { name: 'Belfast City Hall', duration: '1.5 hours', bestTime: 'Morning (Free guided tour)', entryFee: 'Free' },
      { name: 'The Crown Liquor Saloon', duration: '1.5 hours', bestTime: 'Evening (Sit in a private booth)', entryFee: 'Free (Drinks extra)' }
    ],
    travelTips: [
      'Currency: Northern Ireland is part of the UK and uses the British Pound Sterling (GBP), not the Euro used in the Republic of Ireland.',
      'Black Cab Tours: Booking a certified Black Taxi Tour is the best, most respectful way to understand the complex history of "The Troubles" and see the Peace Wall murals.',
      'Game of Thrones: Northern Ireland was the primary filming location for Westeros (The Dark Hedges, Ballintoy Harbour). Book a themed day tour if you are a fan.',
      'Historic Pubs: Have a pint of Guinness at the Crown Liquor Saloon, a Victorian-era gin palace with original stained glass and carved wooden snugs.',
      'Weather: It rains frequently year-round. Pack a sturdy, windproof raincoat rather than an umbrella.',
      'St. George’s Market: Visit on the weekend for live music, local crafts, and fresh Ulster Fry breakfasts.'
    ]
  },

  // --- 20. FIJI (NADI & MAMANUCA ISLANDS) ---
  {
    id: 'fiji-fj',
    city: 'Fiji',
    country: 'Fiji',
    airportCode: 'NAN',
    image: `https://images.unsplash.com/photo-1530736822234-c8562cb0a710?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'A South Pacific wonderland of 330 tropical islands, renowned for warm hospitality ("Bula!"), turquoise lagoons, and world-class scuba diving.',
    budget: 'Luxury',
    tripType: 'Beach',
    bestSeason: 'May to October (Dry Season)',
    dailyBudget: 220,
    attractions: [
      { name: 'Mamanuca & Yasawa Islands Island Hopping', duration: 'Full Day', bestTime: 'Morning departure', entryFee: '~$100 - $160 USD' },
      { name: 'Cloud 9 Floating Bar & Pizzeria', duration: '5 hours', bestTime: 'Morning Boat Transfer', entryFee: '$110 USD (Includes bar credit)' },
      { name: 'Sri Siva Subramaniya Temple (Nadi)', duration: '1 hour', bestTime: 'Morning', entryFee: 'FJD 5' },
      { name: 'Garden of the Sleeping Giant', duration: '2 hours', bestTime: 'Morning', entryFee: 'FJD 25' },
      { name: 'Sawa-i-Lau Limestone Caves', duration: '3 hours', bestTime: 'Morning (During high tide)', entryFee: 'FJD 35' },
      { name: 'Traditional Kava Ceremony & Village Visit', duration: '2 hours', bestTime: 'Evening', entryFee: 'Village donation' }
    ],
    travelTips: [
      'Fiji Time: "Fiji Time" is real—life moves at a relaxed, unhurried pace. Embrace the slow tempo without frustration.',
      'Village Protocol: When visiting traditional Fijian villages, dress modestly (wear a sulu/sarong), remove hats and sunglasses, and never touch anyone’s head.',
      'Kava Ceremony: If invited to a Kava ceremony, clap once before receiving the coconut bowl ("Bilo"), drink the kava in one gulp, and clap three times after saying "Bula!".',
      'Island Transfers: Nadi (on the main island Viti Levu) is primarily a transit hub. Head out to the Mamanuca or Yasawa Islands via the South Sea Cruises catamaran ferry from Port Denarau.',
      'Currency: The local currency is the Fijian Dollar (FJD). Credit cards are accepted at major resorts, but carry cash for village visits and craft markets.',
      'Sundays: Sundays are strictly dedicated to family and church across Fiji; most shops and independent businesses are closed.'
    ]
  },
  // --- 1. AMALFI COAST, ITALY ---
  {
    id: 'amalfi-coast-it',
    city: 'Amalfi Coast',
    country: 'Italy',
    airportCode: 'NAP',
    image: `https://images.unsplash.com/photo-1533105079780-92b9be482077${cropParams}`,
    description: 'A dramatic 50-kilometer stretch of mountainous coastline featuring pastel-colored cliffside fishing villages, terraced lemon groves, and azure waters.',
    budget: 'Luxury',
    tripType: 'Beach',
    bestSeason: 'May to September',
    dailyBudget: 220,
    attractions: [
      { name: 'Positano Village & Spiaggia Grande', duration: 'Half Day', bestTime: 'Morning', entryFee: 'Free (Sunbeds €35+)' },
      { name: 'Path of the Gods (Sentiero degli Dei)', duration: '4 hours', bestTime: '8:00 AM (Early Morning Hike)', entryFee: 'Free' },
      { name: 'Amalfi Cathedral (Duomo di Amalfi)', duration: '1 hour', bestTime: 'Morning', entryFee: '€3' },
      { name: 'Ravello (Villa Rufolo & Cimbrone)', duration: '3 hours', bestTime: 'Afternoon', entryFee: '€8 - €10 each' },
      { name: 'Capri Island Day Cruise', duration: 'Full Day', bestTime: 'Morning Departure', entryFee: '€50+ (Ferry / Tour)' },
      { name: 'Fiordo di Furore', duration: '1.5 hours', bestTime: 'Midday', entryFee: 'Free' }
    ],
    travelTips: [
      'Transport: Avoid driving a rental car along the narrow, cliffside SS163 road. Rely on Sita buses or scenic passenger ferries between towns.',
      'Luggage: The villages consist of thousands of steep stone stairs. Pack light or budget for luggage porter services at ferry docks.',
      'Lemon Specialties: Try authentic Delizia al Limone pastries and sip ice-cold Limoncello made from local IGP Sfusato lemons.',
      'Accommodation: Staying in smaller towns like Minori, Maiori, or Praiano is significantly cheaper than staying directly in Positano.',
      'Peak Crowds: In July and August, traffic jams are severe and ferries sell out. Book transport tickets in advance.',
      'Footwear: Wear sturdy, slip-resistant walking shoes; cobblestones and cliff trails are demanding.'
    ]
  },

  // --- 2. NICE, FRANCE ---
  {
    id: 'nice-fr',
    city: 'Nice',
    country: 'France',
    airportCode: 'NCE',
    image: `https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80${cropParams}`,
    description: 'The capital of the French Riviera, renowned for its sweeping pebble beaches along the Baie des Anges, Belle Époque architecture, and vibrant Provençal markets.',
    budget: 'Luxury',
    tripType: 'Beach',
    bestSeason: 'May to October',
    dailyBudget: 160,
    attractions: [
      { name: 'Promenade des Anglais', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Castle Hill (Colline du Château)', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Old Town (Vieux Nice)', duration: '3 hours', bestTime: 'Morning Market Hours', entryFee: 'Free' },
      { name: 'Cours Saleya Flower & Food Market', duration: '1.5 hours', bestTime: '8:30 AM (Closed Mondays)', entryFee: 'Free' },
      { name: 'Marc Chagall National Museum', duration: '2 hours', bestTime: 'Afternoon', entryFee: '€10' },
      { name: 'Monaco & Monte Carlo (Day Trip)', duration: 'Half Day', bestTime: 'Afternoon', entryFee: '€4.20 (Train ticket)' }
    ],
    travelTips: [
      'Beach Pebbles: The beaches in Nice consist of smooth grey pebbles ("galets"). Bring rubber water shoes and a padded mat for comfort.',
      'Public Transit: The Lignes d’Azur tram network runs directly from Nice Côte d\'Azur Airport to the city center for only €1.70.',
      'Day Trips: Nice is the ultimate Riviera base. Take local TER trains to Monaco (20 mins), Cannes (30 mins), and Villefranche-sur-Mer (10 mins).',
      'Local Street Food: Try "Socca," a traditional crispy chickpea flour pancake baked in wood-fired ovens, and a classic Pan Bagnat sandwich.',
      'Museum Pass: If visiting multiple art museums, buy the 24-hour French Riviera Pass for discounted admissions.',
      'Midday Canon: Don’t be alarmed by the loud cannon boom at exactly 12:00 PM; it is a centuries-old daily tradition.'
    ]
  },

  // --- 3. KRABI, THAILAND ---
  {
    id: 'krabi-th',
    city: 'Krabi',
    country: 'Thailand',
    airportCode: 'KBV',
    image: `https://images.unsplash.com/photo-1552465011-b4e21bf6e79a${cropParams}`,
    description: 'A coastal southern Thailand province characterized by towering limestone karsts, emerald lagoons, world-class rock climbing, and mangrove forests.',
    budget: 'Budget',
    tripType: 'Beach',
    bestSeason: 'November to April',
    dailyBudget: 55,
    attractions: [
      { name: 'Railay Beach & Phra Nang Cave', duration: 'Full Day', bestTime: 'Morning (Access via longtail boat)', entryFee: '100 THB (Boat fare)' },
      { name: 'Four Islands Tour (Koh Poda, Chicken Island)', duration: 'Full Day', bestTime: '8:30 AM Departure', entryFee: '1,000 THB + 400 THB Park Fee' },
      { name: 'Tiger Cave Temple (Wat Tham Suea)', duration: '3 hours', bestTime: 'Sunrise (Climb 1,260 steps)', entryFee: 'Free' },
      { name: 'Emerald Pool (Sa Morakot) & Hot Springs', duration: 'Half Day', bestTime: 'Morning', entryFee: '400 THB (Park Entry)' },
      { name: 'Hong Islands Speedboat Tour', duration: 'Full Day', bestTime: 'Morning', entryFee: '1,200 THB + Park Fee' },
      { name: 'Ao Nang Night Market', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Railay Access: Railay Beach is completely cut off from the mainland by high limestone cliffs. It is accessible solely by traditional longtail boats from Ao Nang.',
      'Climbing Mecca: Tonsai and Railay East are among the world\'s premier rock climbing locations. Gear rental and guides are widely available.',
      'National Park Fees: Keep cash ready; major island hopping tours require a separate 400 THB foreigner conservation fee collected on arrival.',
      'Temple Modesty: When climbing the 1,260 stairs to the Tiger Cave Temple summit, ensure shoulders and knees are covered and watch out for aggressive monkeys.',
      'Monsoon Season: From May to October, rough seas can cause longtail boat cancellations. Always check maritime weather flags.',
      'Local Cuisine: Sample fiery southern Thai curries like Gaeng Som (sour curry) and Massaman Curry at local Ao Nang eateries.'
    ]
  },

  // --- 4. PERHENTIAN ISLANDS, MALAYSIA ---
  {
    id: 'perhentian-islands-my',
    city: 'Perhentian Islands',
    country: 'Malaysia',
    airportCode: 'TGG',
    image: `https://images.unsplash.com/photo-1686986468304-e553fc1e2e16?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'A secluded pair of tropical islands off northeastern Malaysia known for crystal-clear coral waters, sea turtle nesting beaches, and laid-back beach life.',
    budget: 'Budget',
    tripType: 'Beach',
    bestSeason: 'March to October (Strictly closed during Monsoon)',
    dailyBudget: 50,
    attractions: [
      { name: 'Turtle Beach Snorkeling', duration: '3 hours', bestTime: 'Morning', entryFee: '30 - 50 MYR (Boat trip)' },
      { name: 'Shark Point Reef Snorkel', duration: '2 hours', bestTime: 'Morning', entryFee: 'Included in Snorkel Tour' },
      { name: 'Long Beach Fire Shows (Perhentian Kecil)', duration: '2-3 hours', bestTime: 'Night', entryFee: 'Free' },
      { name: 'Coral Bay Sunsets', duration: '1.5 hours', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Perhentian Windmill Viewpoint Hike', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Romantic Beach Day Trip', duration: 'Half Day', bestTime: 'Morning', entryFee: 'Water Taxi ~20 MYR' }
    ],
    travelTips: [
      'Seasonal Closure: The islands are effectively shut down from November to February during the northeast monsoon due to violent seas.',
      'Kecil vs. Besar: Perhentian Kecil is popular with backpackers, nightlife, and budget stays; Perhentian Besar offers quieter, upscale family resorts.',
      'Cash Is Mandatory: There are no working ATMs on the islands. Bring enough Malaysian Ringgit (MYR) in cash to cover your entire stay.',
      'Water Taxis: Small wooden water taxis are the only way to hop between beaches. Negotiate and confirm prices before getting in.',
      'Wildlife Protection: Do not touch the sea turtles, clownfish, or harmless blacktip reef sharks while snorkeling.',
      'Electricity: Some budget guesthouses only run generators during specific night hours; verify electricity policies with your accommodation.'
    ]
  },

  // --- 5. SALZBURG, AUSTRIA ---
  {
    id: 'salzburg-at',
    city: 'Salzburg',
    country: 'Austria',
    airportCode: 'SZG',
    image: `https://images.unsplash.com/photo-1535653831895-6eeaaa50953c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The elegant birthplace of Wolfgang Amadeus Mozart, crowned by the medieval Hohensalzburg Fortress and famous Sound of Music filming sites.',
    budget: 'Moderate',
    tripType: 'Culture',
    bestSeason: 'May to October, December (Christmas Markets)',
    dailyBudget: 120,
    attractions: [
      { name: 'Hohensalzburg Fortress', duration: '2-3 hours', bestTime: 'Morning (Take Festungsbahn funicular)', entryFee: '€14' },
      { name: 'Mirabell Palace & Gardens', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Mozart’s Birthplace (Getreidegasse)', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '€12' },
      { name: 'Salzburg Cathedral (Dom zu Salzburg)', duration: '1 hour', bestTime: 'Morning', entryFee: '€5' },
      { name: 'Hellbrunn Palace & Trick Fountains', duration: '2 hours', bestTime: 'Midday', entryFee: '€13.50' },
      { name: 'Original Sound of Music Tour', duration: '4 hours', bestTime: 'Morning Departure', entryFee: '€50 - €60' }
    ],
    travelTips: [
      'Salzburg Card: Highly recommended. It provides free admission to all major city museums and unlimited public transit (including the fortress funicular).',
      'Getreidegasse Shopping: Stroll through Getreidegasse to admire the traditional wrought-iron guild signs above every historic shopfront.',
      'Mozartkugeln: Buy genuine Fürst Mozartkugeln (marzipan and pistachio chocolates wrapped in silver-and-blue foil) from original confectioneries.',
      'Classical Concerts: Experience a live Mozart concert inside the Golden Hall at the top of Hohensalzburg Fortress.',
      'Bavarian Border: Salzburg is located right on the German border; train day-trips to Lake Königssee and Berchtesgaden are very straightforward.',
      'Christmas Season: If visiting in December, Salzburg hosts one of Europe’s oldest and most picturesque advent markets.'
    ]
  },

  // --- 6. MONTEGO BAY & OCHO RIOS, JAMAICA ---
  {
    id: 'jamaica-jm',
    city: 'Montego Bay',
    country: 'Jamaica',
    airportCode: 'MBJ',
    image: `https://images.unsplash.com/photo-1662505475505-cc7396a70a0c?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The energetic Caribbean pulse of reggae music, offering world-famous limestone waterfalls, bamboo river rafting, and white sand coastlines.',
    budget: 'Luxury',
    tripType: 'Beach',
    bestSeason: 'December to April',
    dailyBudget: 190,
    attractions: [
      { name: 'Dunn’s River Falls (Ocho Rios)', duration: '3 hours', bestTime: 'Morning (Before cruise ship crowds)', entryFee: '$25 USD' },
      { name: 'Martha Brae Bamboo River Rafting', duration: '2 hours', bestTime: 'Morning', entryFee: '$90 USD (Per 2-person raft)' },
      { name: 'Doctor’s Cave Beach', duration: 'Half Day', bestTime: 'Daytime', entryFee: '$8 USD' },
      { name: 'Rose Hall Great House (Haunted Tour)', duration: '1.5 hours', bestTime: 'Night Tour', entryFee: '$30 USD' },
      { name: 'Blue Hole & Secret Falls', duration: '2.5 hours', bestTime: 'Morning', entryFee: '$20 USD' },
      { name: 'Luminous Lagoon (Glistening Waters)', duration: '1.5 hours', bestTime: 'Night', entryFee: '$25 USD' }
    ],
    travelTips: [
      'Water Shoes Mandatory: Climbing Dunn’s River Falls requires sturdy rubber water shoes to avoid slipping on wet travertine rocks.',
      'Currency: The US Dollar is widely accepted everywhere in resort areas, but having Jamaican Dollars (JMD) is beneficial for local fruit stands.',
      'Jerk Cuisine: You must stop at Scotchies in Montego Bay for authentic Jamaican jerk chicken and pork smoked over pimento wood.',
      'Transport: Use official JUTA (Jamaica Union of Travellers Association) licensed tourist taxis with red license plates for safe transportation.',
      'Tipping: Standard tipping in Jamaica is 10% to 15% for drivers, tour guides, and restaurant staff.',
      'Safety: Stick to established tourist corridors and organized excursions, avoiding unlit neighborhood streets after dark.'
    ]
  },

  // --- 7. HAVANA, CUBA ---
  {
    id: 'havana-cu',
    city: 'Havana',
    country: 'Cuba',
    airportCode: 'HAV',
    image: `https://images.unsplash.com/photo-1500759285222-a95626b934cb${cropParams}`,
    description: 'A timeless Caribbean time capsule defined by colorful 1950s classic cars, historic Spanish plazas, lively salsa music, and iconic cigars.',
    budget: 'Budget',
    tripType: 'Culture',
    bestSeason: 'November to April',
    dailyBudget: 60,
    attractions: [
      { name: 'Old Havana (Habana Vieja)', duration: '3-4 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Vintage Classic Convertible Tour', duration: '1-2 hours', bestTime: 'Late Afternoon', entryFee: '~$30 - $40 USD' },
      { name: 'The Malecón Seafront Walk', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'El Capitolio Nacional', duration: '1.5 hours', bestTime: 'Morning', entryFee: '~$10 USD' },
      { name: 'Castillo de la Real Fuerza & Morro Castle', duration: '2 hours', bestTime: '9:00 PM (Cannon firing ceremony)', entryFee: '~$5 USD' },
      { name: 'Fusterlandia (Mosaic Art Village)', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Free' }
    ],
    travelTips: [
      'US Travel Restrictions: US citizens must travel under approved categories like "Support for the Cuban People" and cannot stay in military-owned hotels.',
      'Cash Is Essential: Foreign credit cards issued by US banks do not work in Cuba. Bring plenty of cash (Euros or USD) to exchange into Cuban Pesos (CUP).',
      'Private Stays: Stay in a "Casa Particular" (licensed private homestay) and dine at "Paladares" (family-run private restaurants) for authentic hospitality.',
      'Internet Access: Connectivity relies on prepaid ETECSA scratch cards (NAUTA) used at designated Wi-Fi parks and hotels.',
      'Cocktail History: Savor a classic Mojito at La Bodeguita del Medio and a Daiquiri at El Floridita, famous haunts of Ernest Hemingway.',
      'Cigars: Buy authentic Habanos cigars only from official government stores (La Casa del Habano) to avoid counterfeit street products.'
    ]
  },

  // --- 8. SAN JUAN, PUERTO RICO ---
  {
    id: 'san-juan-pr',
    city: 'San Juan',
    country: 'Puerto Rico',
    airportCode: 'SJU',
    image: `https://images.unsplash.com/photo-1717263209162-ea0cda01ff70?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'A vibrant Caribbean crossroads of Spanish colonial heritage, formidable coastal fortresses, tropical rainforests, and world-class rum.',
    budget: 'Moderate',
    tripType: 'Culture',
    bestSeason: 'December to April',
    dailyBudget: 140,
    attractions: [
      { name: 'Castillo San Felipe del Morro (El Morro)', duration: '2-3 hours', bestTime: 'Morning', entryFee: '$10 USD (Covers both forts)' },
      { name: 'Old San Juan Cobblestone Streets', duration: '3 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Castillo San Cristóbal', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Included with El Morro' },
      { name: 'El Yunque National Forest (Day Trip)', duration: 'Full Day', bestTime: '7:30 AM Departure', entryFee: 'Free ($2 online booking)' },
      { name: 'Casa Bacardí Rum Tour', duration: '2 hours', bestTime: 'Afternoon', entryFee: '$30 - $75 USD' },
      { name: 'Condado Beach & Ocean Park', duration: 'Half Day', bestTime: 'Daytime', entryFee: 'Free' }
    ],
    travelTips: [
      'No Passport for US Citizens: Puerto Rico is a US territory; US citizens do not need a passport and use US Dollars (USD).',
      'Free Trolley: A free open-air trolley runs around Old San Juan connecting the major historical forts and plazas.',
      'Local Cuisine: Try "Mofongo"—a delicious mashed green plantain dish filled with garlic shrimp, pork, or chicken.',
      'Bioluminescent Bays: Book a night kayak tour to Mosquito Bay in Vieques or Laguna Grande in Fajardo to witness glowing bioluminescent plankton.',
      'Rainforest Driving: If visiting El Yunque Rainforest, rent a car and book your timed entry permit online via recreation.gov.',
      'Calle San Sebastián: The nightlife in Old San Juan centers around Calle San Sebastián, filled with lively bars, salsa music, and street food.'
    ]
  },

  // --- 9. SAN DIEGO, USA ---
  {
    id: 'san-diego-us',
    city: 'San Diego',
    country: 'USA',
    airportCode: 'SAN',
    image: `https://images.unsplash.com/photo-1519954352454-2d5a7353e277?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'Southern California’s coastal jewel, celebrated for year-round idyllic weather, world-class surf breaks, craft breweries, and Spanish colonial parks.',
    budget: 'Moderate',
    tripType: 'Beach',
    bestSeason: 'June to October',
    dailyBudget: 160,
    attractions: [
      { name: 'Balboa Park & Botanical Building', duration: '3-4 hours', bestTime: 'Morning', entryFee: 'Free (Museums separate)' },
      { name: 'La Jolla Cove (Sea Lions & Snorkel)', duration: '2-3 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'San Diego Zoo', duration: 'Full Day', bestTime: '9:00 AM (Opening)', entryFee: '$72 USD' },
      { name: 'Coronado Island & Hotel del Coronado', duration: 'Half Day', bestTime: 'Sunset', entryFee: 'Free (Ferry $7)' },
      { name: 'USS Midway Aircraft Carrier Museum', duration: '3 hours', bestTime: 'Morning', entryFee: '$31 USD' },
      { name: 'Gaslamp Quarter', duration: '2-3 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'La Jolla Wildlife: Watch sea lions and harbor seals at La Jolla Cove, but maintain the legal 10-foot distance at all times.',
      'Cali-Baja Tacos: San Diego has world-class Mexican food. Try fresh fish tacos at coastal stands and a California Burrito (stuffed with french fries).',
      'Airport Proximity: San Diego International Airport is located just 10 minutes from downtown, making rideshares fast and cheap.',
      'May Gray & June Gloom: Late spring often brings overcast marine layer fog that clears up by early afternoon; plan beach sessions accordingly.',
      'Trolley System: The MTS San Diego Trolley Blue Line connects downtown directly to the Mexican border at San Ysidro.',
      'Craft Beer Hub: San Diego is known as the craft beer capital of America. Explore local breweries in North Park and Miramar.'
    ]
  },

  // --- 10. PHILADELPHIA, USA ---
  {
    id: 'philadelphia-us',
    city: 'Philadelphia',
    country: 'USA',
    airportCode: 'PHL',
    image: `https://images.unsplash.com/photo-1513635269975-59663e0ac1ad${cropParams}`,
    description: 'The historic cradle of American independence, renowned for the Liberty Bell, world-class art collections, and lively public food markets.',
    budget: 'Moderate',
    tripType: 'City',
    bestSeason: 'April to June, September to November',
    dailyBudget: 135,
    attractions: [
      { name: 'Independence Hall & Liberty Bell', duration: '2 hours', bestTime: 'Morning (Book timed entry)', entryFee: 'Free ($1 reservation)' },
      { name: 'Philadelphia Museum of Art ("Rocky Steps")', duration: '3 hours', bestTime: 'Morning', entryFee: '$30 USD' },
      { name: 'Reading Terminal Market', duration: '2 hours', bestTime: '11:30 AM (Lunchtime)', entryFee: 'Free' },
      { name: 'Eastern State Penitentiary', duration: '2 hours', bestTime: 'Afternoon', entryFee: '$19 USD' },
      { name: 'The Barnes Foundation', duration: '2 hours', bestTime: 'Morning', entryFee: '$25 USD' },
      { name: 'Elfreth’s Alley (Oldest Residential Street)', duration: '45 mins', bestTime: 'Late Afternoon', entryFee: 'Free' }
    ],
    travelTips: [
      'Philly Cheesesteak Etiquette: When ordering a classic cheesesteak, specify your cheese and onion preference (e.g., "Whiz with" means Cheez Whiz with fried onions).',
      'Walkable Historic Center: Center City and the Old City historic district are laid out on a grid and extremely easy to navigate on foot.',
      'Reading Terminal: Visit the historic indoor food market to try authentic Pennsylvania Dutch (Amish) warm apple fritters and roast pork sandwiches.',
      'Rocky Statue: The famous bronze Rocky statue is located at the base of the Art Museum steps; lines for photos can be long in midday.',
      'SEPTA Transit: Take the SEPTA Airport Line train directly from PHL Airport to Jefferson or 30th Street Station for $6.75.',
      'Mural Arts: Philadelphia is home to over 4,000 public murals. Consider taking an official guided walking or trolley mural tour.'
    ]
  },

  // --- 11. BOGOTÁ, COLOMBIA ---
  {
    id: 'bogota-co',
    city: 'Bogotá',
    country: 'Colombia',
    airportCode: 'BOG',
    image: `https://images.unsplash.com/photo-1583417319070-4a69db38a482${cropParams}`,
    description: 'Colombia’s high-altitude mountain capital, combining rich pre-Columbian gold artifacts, vibrant street murals, and Andean cable car vistas.',
    budget: 'Budget',
    tripType: 'City',
    bestSeason: 'December to March',
    dailyBudget: 55,
    attractions: [
      { name: 'Monserrate Sanctuary Viewpoint', duration: '2-3 hours', bestTime: 'Morning or Sunset (Cable Car / Funicular)', entryFee: 'COP 27,000 Return' },
      { name: 'Museo del Oro (Gold Museum)', duration: '2 hours', bestTime: 'Morning (Closed Mondays)', entryFee: 'COP 5,000' },
      { name: 'La Candelaria Historic District', duration: '3 hours', bestTime: 'Morning (Graffiti Tour)', entryFee: 'Free (Tip the guide)' },
      { name: 'Plaza de Bolívar', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Botero Museum', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Salt Cathedral of Zipaquirá (Day Trip)', duration: 'Half Day', bestTime: 'Morning', entryFee: 'COP 98,000' }
    ],
    travelTips: [
      'High Altitude: Bogotá sits at 2,640 meters (8,660 feet). Take it easy on day one, drink plenty of water, and avoid heavy alcohol.',
      'Chilly Weather: Unlike tropical Colombia, Bogotá is cool and rainy year-round (14-19°C / 57-66°F). Always pack a warm jacket and umbrella.',
      'Ciclovía Sundays: On Sundays, over 120 km of city roads are closed to cars for cyclists, runners, and walkers from 7:00 AM to 2:00 PM.',
      'Safety: Practice "No dar papaya" (don’t flash expensive items or phones on the street). Stick to registered Ubers rather than hailing cabs.',
      'Local Soup: Try "Ajiaco," a hearty traditional soup made with three types of Andean potatoes, chicken, corn, capers, and heavy cream.',
      'Street Art: Join the famous Bogotá Graffiti Tour in La Candelaria to understand the political and social meanings behind the city’s murals.'
    ]
  },

  // --- 12. GALAPAGOS ISLANDS, ECUADOR ---
  {
    id: 'galapagos-ec',
    city: 'Galápagos Islands',
    country: 'Ecuador',
    airportCode: 'GPS',
    image: `https://images.unsplash.com/photo-1706957614198-8d2e5f0ed6ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'A living laboratory of evolution 1,000 km off Ecuador’s coast, famous for fearless giant tortoises, marine iguanas, and pristine underwater habitats.',
    budget: 'Luxury',
    tripType: 'Nature',
    bestSeason: 'December to May (Warm & Calm seas)',
    dailyBudget: 280,
    attractions: [
      { name: 'Charles Darwin Research Station (Santa Cruz)', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free ($10 guided)' },
      { name: 'Tortuga Bay Beach & Marine Iguanas', duration: '3-4 hours', bestTime: 'Early Morning Hike', entryFee: 'Free' },
      { name: 'Los Túneles Lava Formations (Isabela Island)', duration: 'Full Day', bestTime: 'Morning Snorkel Tour', entryFee: '$140 - $180 USD' },
      { name: 'Bartolomé Island Pinnacle Rock', duration: 'Full Day', bestTime: 'Morning Day Cruise', entryFee: '$200 - $250 USD' },
      { name: 'El Chato Giant Tortoise Reserve', duration: '2 hours', bestTime: 'Afternoon', entryFee: '$10 USD' },
      { name: 'Kicker Rock (San Cristóbal) Shark Snorkel', duration: 'Full Day', bestTime: 'Morning Boat Tour', entryFee: '$150 - $200 USD' }
    ],
    travelTips: [
      'Entry Fees: You must pay a $20 Transit Control Card (TCT) at Quito/Guayaquil airport and a mandatory $200 cash National Park entrance fee on arrival.',
      'Land vs. Cruise: Island hopping by public speedboats (Santa Cruz, Isabela, San Cristóbal) is far more affordable than multi-day luxury cruise yachts.',
      'Strict Biosecurity: Luggage is inspected for biological materials and seeds. Never touch, feed, or approach wildlife closer than 2 meters (6 feet).',
      'Currency: Ecuador uses the US Dollar (USD). Carry plenty of cash; ATMs on Santa Cruz and San Cristóbal frequently run out of money.',
      'Motion Sickness: The 2-hour inter-island speedboat ferries cross open oceanic swells and can be notoriously rough; pack seasickness medication.',
      'Wetsuits: The Humboldt Current brings cold water between June and November. Rent a 3mm-5mm wetsuit for comfortable snorkeling.'
    ]
  },

  // --- 13. JOHANNESBURG, SOUTH AFRICA ---
  {
    id: 'johannesburg-za',
    city: 'Johannesburg',
    country: 'South Africa',
    airportCode: 'JNB',
    image: `https://images.unsplash.com/photo-1577948000111-9c970dfe3743?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'South Africa’s vibrant commercial powerhouse, rich in gold mining history, anti-apartheid struggle heritage, and modern art precincts.',
    budget: 'Moderate',
    tripType: 'Culture',
    bestSeason: 'March to May, September to November',
    dailyBudget: 80,
    attractions: [
      { name: 'Apartheid Museum', duration: '3-4 hours', bestTime: 'Morning', entryFee: 'R 150' },
      { name: 'Soweto & Vilakazi Street Tour', duration: 'Half Day', bestTime: 'Morning Tour', entryFee: 'R 400 - R 600' },
      { name: 'Nelson Mandela Sanctuary (Mandela House)', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'R 60' },
      { name: 'Constitution Hill Human Rights Precinct', duration: '2 hours', bestTime: 'Morning', entryFee: 'R 100' },
      { name: 'Maboneng Precinct (Arts & Markets)', duration: '2-3 hours', bestTime: 'Sunday (Market on Main)', entryFee: 'Free' },
      { name: 'Cradle of Humankind & Sterkfontein Caves', duration: 'Half Day', bestTime: 'Morning', entryFee: 'R 175' }
    ],
    travelTips: [
      'Gautrain Transit: Take the high-speed Gautrain directly from OR Tambo Airport to safe northern hubs like Sandton and Rosebank in 15 minutes.',
      'Safety: Do not walk alone on downtown streets or in unfamiliar neighborhoods after dark. Always book Uber door-to-door.',
      'Vilakazi Street: Soweto’s Vilakazi Street is the only street in the world that was once home to two Nobel Peace Prize laureates: Nelson Mandela and Desmond Tutu.',
      'Local Cuisine: Try a traditional "Kota" (hollowed quarter-loaf of bread filled with chips, sausage, cheese, and egg) in Soweto.',
      'Neighborhoods: Base yourself in secure, leafy northern suburbs like Rosebank, Melrose Arch, or Sandton.',
      'Load Shedding: Download the "EskomSePush" app to track scheduled electrical load-shedding schedules during your stay.'
    ]
  },

  // --- 14. SACRED VALLEY & MARAS, PERU ---
  {
    id: 'sacred-valley-pe',
    city: 'Sacred Valley (Urubamba)',
    country: 'Peru',
    airportCode: 'CUZ',
    image: `https://images.unsplash.com/photo-1725149570748-adee857ce8b7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'The ancient heart of the Incan Empire, featuring thousands of terraced salt evaporation pans, circular agricultural laboratories, and traditional weaving villages.',
    budget: 'Moderate',
    tripType: 'Culture',
    bestSeason: 'May to September (Dry Season)',
    dailyBudget: 75,
    attractions: [
      { name: 'Maras Salt Mines (Salineras de Maras)', duration: '2 hours', bestTime: 'Morning', entryFee: '20 PEN' },
      { name: 'Moray Incan Agricultural Terraces', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Included in Boleto Turístico' },
      { name: 'Pisac Ruins & Sunday Artisan Market', duration: '3 hours', bestTime: 'Sunday Morning', entryFee: 'Included in Boleto Turístico' },
      { name: 'Ollantaytambo Fortress', duration: '2.5 hours', bestTime: 'Late Afternoon', entryFee: 'Included in Boleto Turístico' },
      { name: 'Chinchero Traditional Weaving Demonstrations', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free / Included in Pass' },
      { name: 'Urubamba River Rafting', duration: 'Half Day', bestTime: 'Morning Tour', entryFee: '$45 - $60 USD' }
    ],
    travelTips: [
      'Acclimatization Base: The Sacred Valley (2,870m) is significantly lower in elevation than Cusco (3,400m). Head straight here from the airport to minimize altitude sickness.',
      'Boleto Turístico: Buy the 10-Day Cusco Tourist Ticket (130 PEN) which covers Moray, Pisac, Ollantaytambo, Chinchero, and numerous sites in Cusco.',
      'Maras Salt: Purchase edible pink mountain salt harvested directly from the natural subterranean springs at Maras.',
      'Train to Machu Picchu: Ollantaytambo station in the Sacred Valley is the primary railway departure hub for trains to Aguas Calientes / Machu Picchu.',
      'Private Driver: Hiring a private driver for a full-day tour from Cusco through Chinchero, Moray, Maras, and Ollantaytambo costs roughly 200-250 PEN ($60 USD).',
      'Local Delicacy: Stop at roadside restaurants in Urubamba or Lamay to try roasted guinea pig (Cuy Chactado) and fresh giant Andean corn with cheese.'
    ]
  },

  // --- 15. BORDEAUX, FRANCE ---
  {
    id: 'bordeaux-fr',
    city: 'Bordeaux',
    country: 'France',
    airportCode: 'BOD',
    image: `https://images.unsplash.com/photo-1555881400-74d7acaacd8b${cropParams}`,
    description: 'The wine capital of the world, adorned with classical 18th-century limestone architecture, scenic Garonne riverfronts, and prestigious grand cru vineyards.',
    budget: 'Moderate',
    tripType: 'Culture',
    bestSeason: 'May to October (Harvest in Sept-Oct)',
    dailyBudget: 135,
    attractions: [
      { name: 'Place de la Bourse & Miroir d’eau', duration: '1.5 hours', bestTime: 'Sunset to Night', entryFee: 'Free' },
      { name: 'La Cité du Vin (Interactive Wine Museum)', duration: '3 hours', bestTime: 'Morning (Includes rooftop tasting)', entryFee: '€22' },
      { name: 'Saint-Émilion Medieval Village (Day Trip)', duration: 'Full Day', bestTime: 'Morning (35 min train)', entryFee: 'Free (Wine tours extra)' },
      { name: 'Rue Sainte-Catherine (Longest Pedestrian Street)', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
      { name: 'Bassins des Lumières (Digital Art in Submarine Base)', duration: '2 hours', bestTime: 'Morning', entryFee: '€15' },
      { name: 'Porte Cailhau', duration: '45 mins', bestTime: 'Morning', entryFee: '€5' }
    ],
    travelTips: [
      'High-Speed TGV: The TGV train from Paris Montparnasse reaches Bordeaux in just 2 hours, making it an easy add-on to a French itinerary.',
      'Wine Tasting Logistics: Prestigious châteaux in the Médoc and Saint-Émilion require reservations weeks in advance. Do not expect to drop in unannounced.',
      'Local Pastry: You must taste a fresh "Canelé"—a small French pastry flavored with rum and vanilla, with a soft custard center and dark, caramelized crust.',
      'Water Mirror: The Miroir d\'eau in front of Place de la Bourse is the world\'s largest reflecting pool; visit at dusk for stunning illuminated reflections.',
      'Tramway: Bordeaux’s modern tram system is ground-level powered (no overhead wires to ruin views) and very simple to use with contactless cards.',
      'Bordeaux CityPass: If planning to visit La Cité du Vin and Bassins des Lumières, the CityPass includes public transit and admission.'
    ]
  },

  // --- 16. ANTALYA, TURKEY ---
  {
    id: 'antalya-tr',
    city: 'Antalya',
    country: 'Turkey',
    airportCode: 'AYT',
    image: `https://images.unsplash.com/photo-1524231757912-21f4fe3a7200${cropParams}`,
    description: 'The capital of the Turkish Riviera, blending a cliffside Ottoman old town with turquoise Mediterranean beaches and Greco-Roman ruins.',
    budget: 'Budget',
    tripType: 'Beach',
    bestSeason: 'April to June, September to October',
    dailyBudget: 55,
    attractions: [
      { name: 'Kaleiçi (Historic Old Town & Hadrian’s Gate)', duration: '3 hours', bestTime: 'Morning / Late Afternoon', entryFee: 'Free' },
      { name: 'Düden Waterfalls (Lower Waterfall Sea View)', duration: '1.5 hours', bestTime: 'Sunset', entryFee: 'Free' },
      { name: 'Konyaaltı Beach', duration: '3 hours', bestTime: 'Daytime', entryFee: 'Free' },
      { name: 'Aspendos Ancient Roman Theatre (Day Trip)', duration: '2 hours', bestTime: 'Morning', entryFee: '340 TRY' },
      { name: 'Perge Ancient Archaeological City', duration: '2.5 hours', bestTime: 'Morning', entryFee: '250 TRY' },
      { name: 'Antalya Archaeological Museum', duration: '2 hours', bestTime: 'Midday', entryFee: '340 TRY' }
    ],
    travelTips: [
      'Stay in Kaleiçi: Book a boutique restored Ottoman mansion inside Kaleiçi old town to walk to restaurants, Roman ruins, and the ancient harbor.',
      'Tram Network: The Nostalgic Tram and the modern Antray light rail connect the airport, bus terminal, museums, and beach easily.',
      'Summer Heat: July and August regularly see temperatures above 40°C (104°F) with high humidity. Spring and Autumn offer ideal conditions.',
      'Museum Pass: Buy the Museum Pass Türkiye or Mediterranean Pass if visiting Aspendos, Perge, Termessos, and local archaeological museums.',
      'Beaches: Konyaaltı is a long pebble beach with mountain backdrops; Lara Beach to the east features soft golden sand and luxury all-inclusive resorts.',
      'Bargaining: Haggling is expected in souvenir shops inside Kaleiçi, but prices in modern grocery stores and restaurants are fixed.'
    ]
  },

  // --- 17. RIYADH, SAUDI ARABIA ---
  {
    id: 'riyadh-sa',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    airportCode: 'RUH',
    image: `https://images.unsplash.com/photo-1663900108404-a05e8bf82cda?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'Saudi Arabia’s booming capital, combining ancient mud-brick UNESCO castles with hyper-modern skyscrapers, luxury dining, and desert landscapes.',
    budget: 'Luxury',
    tripType: 'Culture',
    bestSeason: 'November to March',
    dailyBudget: 175,
    attractions: [
      { name: 'Diriyah & At-Turaif (UNESCO Mud-Brick City)', duration: '3 hours', bestTime: 'Evening (Book Diriyah Pass)', entryFee: '50 - 100 SAR (Redeemable for food)' },
      { name: 'Kingdom Centre Sky Bridge', duration: '1.5 hours', bestTime: 'Sunset / Night', entryFee: '69 SAR' },
      { name: 'Edge of the World (Jebel Fihrayn)', duration: 'Full Day', bestTime: 'Afternoon 4x4 Tour', entryFee: 'Tour pricing (~$80 USD)' },
      { name: 'Al Masmak Fortress', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'National Museum of Saudi Arabia', duration: '2.5 hours', bestTime: 'Morning', entryFee: '10 SAR' },
      { name: 'Boulevard City & World', duration: '3 hours', bestTime: 'Night (Winter Season only)', entryFee: 'Varies by season' }
    ],
    travelTips: [
      'Tourist eVisa: Most nationalities can obtain a 1-year multiple-entry tourist eVisa online instantly via the official visitsaudi platform.',
      'Dress Etiquette: While abayas are no longer mandatory for foreign women, modest dress (covering shoulders and knees) is required in public spaces.',
      'Extreme Desert Heat: Avoid summer travel (May to September), when daily temperatures consistently exceed 45°C (113°F).',
      'Rideshare Apps: Riyadh is heavily car-dependent. Download Uber or Careem for reliable transportation across the sprawling metropolis.',
      'Edge of the World: Reaching the cliffs of Jebel Fihrayn requires a sturdy 4x4 vehicle with GPS; joining an organized tour is strongly advised.',
      'Alcohol Law: Alcohol is strictly prohibited across the Kingdom of Saudi Arabia.'
    ]
  },

  // --- 18. VARANASI, INDIA ---
  {
    id: 'varanasi-in',
    city: 'Varanasi',
    country: 'India',
    airportCode: 'VNS',
    image: `https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
    description: 'One of the world’s oldest continuously inhabited cities and the spiritual capital of India, famous for sacred Ganges River ghats and hypnotic evening aarti.',
    budget: 'Budget',
    tripType: 'Culture',
    bestSeason: 'October to March',
    dailyBudget: 35,
    attractions: [
      { name: 'Dashashwamedh Ghat Evening Ganga Aarti', duration: '2 hours', bestTime: '6:00 PM (Arrive early for boat view)', entryFee: 'Free' },
      { name: 'Sunrise Ganges Boat Ride (Assi to Manikarnika)', duration: '2 hours', bestTime: '5:30 AM', entryFee: '₹300 - ₹500 (Rowboat)' },
      { name: 'Kashi Vishwanath Temple (Golden Temple)', duration: '2 hours', bestTime: 'Early Morning (Carry passport)', entryFee: 'Free' },
      { name: 'Sarnath (Where Buddha Gave First Sermon)', duration: '3 hours', bestTime: 'Morning', entryFee: '₹300 (Foreigners)' },
      { name: 'Manikarnika & Harishchandra Ghats (Cremation Ghats)', duration: '1 hour', bestTime: 'View respectfully from boat', entryFee: 'Free' },
      { name: 'Varanasi Silk Weaving Workshops', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' }
    ],
    travelTips: [
      'Ghat Photography Etiquette: It is strictly forbidden to photograph cremation ceremonies at Manikarnika and Harishchandra Ghats. Always show respect.',
      'Temple Security: Security at Kashi Vishwanath Temple is extremely tight. Mobile phones, electronic watches, and leather belts are prohibited inside; use official lockers.',
      'Explore on Foot: The narrow maze of ancient alleys ("Galies") behind the ghats cannot accommodate vehicles. Rely on walking and small cycle-rickshaws.',
      'Local Delicacies: Try Banarasi Paan, Malaiyo (winter saffron milk foam), Tamatar Chaat, and creamy Lassi served in traditional clay cups (kulhad).',
      'Boat Scams: Agree on the total price, duration, and whether the fee is per person or for the entire boat BEFORE boarding any Ganges boat.',
      'Silk Shopping: Varanasi is renowned for pure Banarasi silk sarees. Buy from government-certified weavers to avoid synthetic fakes.'
    ]
  },

  // --- 19. AGRA, INDIA ---
  {
    id: 'agra-in',
    city: 'Agra',
    country: 'India',
    airportCode: 'AGR',
    image: `https://images.unsplash.com/photo-1564507592333-c60657eea523${cropParams}`,
    description: 'Home to the magnificent Taj Mahal, Agra Fort, and ancient Mughal architecture that defined an imperial era.',
    budget: 'Budget',
    tripType: 'Culture',
    bestSeason: 'October to March',
    dailyBudget: 45,
    attractions: [
      { name: 'Taj Mahal', duration: '3 hours', bestTime: '5:45 AM (Sunrise - Closed Fridays)', entryFee: '₹1,100 (Foreigners) + ₹200 Mausoleum' },
      { name: 'Agra Fort (UNESCO)', duration: '2.5 hours', bestTime: 'Morning / Afternoon', entryFee: '₹650 (Foreigners)' },
      { name: 'Mehtab Bagh (Moonlight Garden Sunset)', duration: '1.5 hours', bestTime: 'Sunset (Opposite view of Taj)', entryFee: '₹300 (Foreigners)' },
      { name: 'Tomb of I’timād-ud-Daulah ("Baby Taj")', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: '₹310 (Foreigners)' },
      { name: 'Fatehpur Sikri (Day Trip)', duration: 'Half Day', bestTime: 'Morning', entryFee: '₹610 (Foreigners)' },
      { name: 'Kinari Bazaar (Old City Markets)', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' }
    ],
    travelTips: [
      'Friday Closure: The Taj Mahal is strictly CLOSED to tourists every Friday for prayers. Plan your itinerary dates accordingly.',
      'Sunrise Arrival: Arrive at the East or West gate 30 minutes before sunrise to clear security early and see the changing morning light on the white marble without massive crowds.',
      'Express Train Access: The Gatimaan Express and Vande Bharat trains connect New Delhi to Agra Cantonment in just 90 to 100 minutes.',
      'Prohibited Items: Tripods, drones, camera gimbals, food, external phone power banks, and books are confiscated at Taj Mahal security checkpoints.',
      'Local Sweet: Try "Petha"—a translucent soft candy made from ash gourd, available in flavors like saffron (Kesar) and coconut at Panchhi Petha stores.',
      'Marble Inlay Workshops: Be wary of rickshaw drivers insisting on taking you to "government-sponsored" marble showrooms, which pay hefty commissions.'
    ]
  },

  // --- 20. KOLKATA, INDIA ---
  {
    id: 'kolkata-in',
    city: 'Kolkata',
    country: 'India',
    airportCode: 'CCU',
    image: `https://images.unsplash.com/photo-1558431382-27e303142255${cropParams}`,
    description: 'India’s intellectual and cultural capital, celebrated for monumental British colonial architecture, historic yellow Ambassador cabs, and legendary Bengali sweets.',
    budget: 'Budget',
    tripType: 'Culture',
    bestSeason: 'October to February (Durga Puja in Autumn)',
    dailyBudget: 40,
    attractions: [
      { name: 'Victoria Memorial Hall & Gardens', duration: '2-3 hours', bestTime: 'Morning', entryFee: '₹500 (Foreigners)' },
      { name: 'Howrah Bridge & Mullick Ghat Flower Market', duration: '2 hours', bestTime: '6:00 AM (Flower Market rush)', entryFee: 'Free' },
      { name: 'Dakshineswar Kali Temple & Belur Math', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
      { name: 'Kumartuli (Clay Idol Sculptors Colony)', duration: '2 hours', bestTime: 'Late Afternoon', entryFee: 'Free' },
      { name: 'Indian Museum (Oldest Museum in India)', duration: '2-3 hours', bestTime: 'Morning', entryFee: '₹500 (Foreigners)' },
      { name: 'Park Street Dining & Historic Flurys Bakery', duration: '2 hours', bestTime: 'Evening', entryFee: 'Pay per meal' }
    ],
    travelTips: [
      'Durga Puja Festival: If visiting during autumn for Durga Puja (September/October), the entire city turns into the world\'s largest open-air art installation with thousands of themed pandals.',
      'Historic Tram & Metro: Ride the historic Kolkata Tram (Asia’s oldest operating electric tram) and use the Kolkata Metro (which includes an underwater tunnel beneath the Hooghly River).',
      'Street Food Capital: You must try the original Kolkata Kathi Rolls at Kusum Rolls on Park Street, spicy Phuchka (pani puri), and Mughlai Parathas.',
      'Iconic Sweets: Sample authentic Bengali sweets like fresh spongy Rasgulla, Mishti Doi (sweetened clay-pot yogurt), and Sandesh at century-old shops like K.C. Das.',
      'Yellow Cabs: The iconic yellow Ambassador taxis run on meters or via pre-paid booths at Howrah Railway Station and CCU Airport. Ride-hailing apps (Uber, Ola) are widely available.',
      'Flower Market Photo Walk: Visit the Mullick Ghat Flower Market right beneath the Howrah Bridge around 6:00 AM for an incredible visual feast of orange and yellow marigold mountains.'
    ]
  },
  
{
  id: 'algiers-dz',
  city: 'Algiers',
  country: 'Algeria',
  airportCode: 'ALG',
  image: `https://images.unsplash.com/photo-1652614706616-a49396a2ee29?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,
  description: 'Known as Algiers the White, Algeria’s Mediterranean capital combines a historic Ottoman-era Casbah, French colonial architecture, coastal views, vibrant markets, and centuries of Mediterranean, Arab, and Berber heritage.',

  seoTitle: 'Algiers Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Algiers, Algeria with a guide to the historic Casbah, Mediterranean coast, Martyrs Memorial, museums, local culture, attractions and travel tips.',

  keywords: [
    'Algiers travel guide',
    'things to do in Algiers',
    'Algiers attractions',
    'Algiers tourism',
    'Algiers Casbah',
    'Casbah of Algiers',
    'Algiers Algeria',
    'best places to visit in Algiers',
    'Algiers itinerary',
    'Algeria travel guide'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'April to June, September to October',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Casbah of Algiers',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Martyrs Memorial',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Notre Dame d’Afrique',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bardo National Museum of Prehistory and Ethnography',
      duration: '1.5–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Jardin d’Essai du Hamma',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Tipaza Roman Ruins',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'The Casbah is a historic UNESCO-listed area with narrow streets and complex lanes. Consider using a knowledgeable local guide when exploring it.',
    'Algiers has a Mediterranean climate, with hot, dry summers and milder, wetter winters.',
    'French and Arabic are widely used, while Tamazight is also an official language of Algeria.',
    'The Algerian dinar is the local currency, and travelers should plan ahead for payment options outside major hotels and tourist businesses.',
    'Dress respectfully, particularly when visiting religious and historic areas.',
    'If planning trips beyond Algiers, check transportation arrangements and local conditions before traveling.',
    'Travel advisories currently recommend increased caution in Algeria, with some border and remote areas subject to stronger warnings because of terrorism and kidnapping risks. Check the latest official advice before traveling.'
  ]
},
{
  id: 'andorra-la-vella-ad',
  city: 'Andorra la Vella',
  country: 'Andorra',
  airportCode: 'LEU',
  image: `https://images.unsplash.com/photo-1599840798493-f876222b0f7b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Nestled high in the Pyrenees, Andorra la Vella is the capital of the tiny principality of Andorra, combining mountain scenery, historic streets, shopping, thermal experiences, and easy access to hiking and winter sports.',

  seoTitle: 'Andorra la Vella Travel Guide: Things to Do & Attractions',

  seoDescription: 'Explore Andorra la Vella with a guide to the historic centre, shopping, mountain activities, cultural attractions, thermal experiences, and travel tips.',

  keywords: [
    'Andorra la Vella travel guide',
    'Andorra travel guide',
    'things to do in Andorra la Vella',
    'Andorra la Vella attractions',
    'Andorra tourism',
    'Andorra travel tips',
    'Andorra itinerary',
    'best places to visit in Andorra',
    'Andorra mountains',
    'Andorra shopping'
  ],

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'December to March, May to October',
  dailyBudget: 90,

  attractions: [
    {
      name: 'Historic Centre of Andorra la Vella',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Casa de la Vall',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Avinguda Meritxell',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'La Comella Viewpoint',
      duration: '1 hour',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Caldea Thermal Spa',
      duration: '2–3 hours',
      bestTime: 'Evening',
      entryFee: 'Paid'
    },
    {
      name: 'La Margineda Bridge',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Andorra does not have an international airport. The nearest airport is Andorra–La Seu d’Urgell (LEU) in Spain, while Barcelona and Toulouse are major alternative gateways.',
    'Andorra la Vella sits at around 1,050 metres above sea level, so temperatures can be noticeably cooler than in nearby lowland cities.',
    'Winter is ideal for skiing and snow activities, while late spring through early autumn is excellent for hiking, cycling, and exploring the mountains.',
    'Andorra la Vella is well known for shopping, particularly along Avinguda Meritxell and the central commercial areas.',
    'The country is mountainous, so comfortable walking shoes are recommended even if you are mainly visiting the capital.',
    'Public buses provide useful connections around Andorra, while buses from nearby Spanish and French cities are a common way to reach the country.',
    'Consider combining Andorra la Vella with nearby mountain villages and nature areas rather than spending the entire trip in the capital.'
  ]
},
{
  id: 'luanda-ao',
  city: 'Luanda',
  country: 'Angola',
  airportCode: 'LAD',
  image: `https://images.unsplash.com/photo-1562859422-29f5c0f4b24d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Angola’s vibrant Atlantic capital blends Portuguese colonial architecture, historic fortresses, waterfront promenades, beaches, lively markets, and a growing modern city scene.',

  seoTitle: 'Luanda Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Luanda, Angola with a guide to the best attractions, historic sites, beaches, waterfront areas, museums, local culture, and travel tips.',

  keywords: [
    'Luanda travel guide',
    'things to do in Luanda',
    'Luanda attractions',
    'Luanda tourism',
    'Luanda Angola',
    'Fortress of São Miguel',
    'Ilha de Luanda',
    'Luanda beaches',
    'Luanda itinerary',
    'Angola travel guide'
  ],

  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'May to October',
  dailyBudget: 75,

  attractions: [
    {
      name: 'Fortress of São Miguel',
      duration: '1.5 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Ilha de Luanda',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Marginal de Luanda',
      duration: '1–2 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Dr. António Agostinho Neto Memorial',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'National Museum of Slavery',
      duration: '1–1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Church of Our Lady of Remedies',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Luanda is Angola’s main international gateway, with Quatro de Fevereiro International Airport (LAD) located close to the city centre.',
    'The dry season from May to October is generally a comfortable period for exploring Luanda and planning trips around the country.',
    'Portuguese is the official language of Angola, so learning a few basic Portuguese phrases can be useful.',
    'Luanda can be expensive compared with many other African cities, particularly for accommodation and transportation.',
    'Use increased caution with valuables and avoid displaying expensive phones, cameras, or jewellery in crowded areas.',
    'Traffic can be heavy, especially during peak hours, so allow additional time when travelling across the metropolitan area.',
    'When visiting historic and religious sites, dress respectfully and follow local photography rules.',
    'If travelling outside Luanda, check current road conditions, transportation arrangements, and local security information before setting out.'
  ]
},
{
  id: 'manama-bh',
  city: 'Manama',
  country: 'Bahrain',
  airportCode: 'BAH',
  image: `https://images.unsplash.com/photo-1548755212-2b46ee259868?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Bahrain’s vibrant capital blends ancient Gulf heritage with modern skyscrapers, traditional souqs, waterfront promenades, museums, shopping districts, and a lively dining scene.',

  seoTitle: 'Manama Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Manama, Bahrain with a guide to the best attractions, Bahrain Fort, traditional souqs, museums, mosques, shopping, food and travel tips.',

  keywords: [
    'Manama travel guide',
    'things to do in Manama',
    'Manama attractions',
    'Manama tourism',
    'Bahrain travel guide',
    'Bahrain attractions',
    'Manama Souq',
    'Bahrain Fort',
    'Manama itinerary',
    'Bahrain travel tips'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'November to March',
  dailyBudget: 85,

  attractions: [
    {
      name: 'Bahrain Fort',
      duration: '1.5–2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Manama Souq',
      duration: '2 hours',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'Bahrain National Museum',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Al Fateh Grand Mosque',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bab Al Bahrain',
      duration: '1 hour',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'The Avenues Bahrain',
      duration: '2–3 hours',
      bestTime: 'Evening',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Bahrain International Airport (BAH) is the main gateway to the country and is located on Muharraq Island.',
    'The cooler months from November to March are generally more comfortable for sightseeing and outdoor activities.',
    'Manama is a good base for exploring Bahrain because many major cultural, historical, shopping, and dining attractions are within easy reach.',
    'Dress respectfully when visiting mosques and religious sites, with shoulders and knees covered.',
    'Bahrain is known for both traditional souqs and modern shopping malls, so visitors can experience very different sides of the country in the same trip.',
    'Taxis and ride-hailing services are useful for getting around, while renting a car can be convenient for exploring attractions outside central Manama.',
    'Try local Bahraini dishes and traditional sweets while exploring the city’s markets and restaurants.',
    'Check current entry, visa, and local travel requirements before your trip.'
  ]
},
{
  id: 'dhaka-bd',
  city: 'Dhaka',
  country: 'Bangladesh',
  airportCode: 'DAC',
  image: `https://images.unsplash.com/photo-1564034503-e7c9edcb420c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Bangladesh’s energetic capital is a fascinating mix of historic architecture, bustling markets, river life, religious landmarks, museums, street food, and modern urban culture.',

  seoTitle: 'Dhaka Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Dhaka, Bangladesh with a guide to historic landmarks, mosques, museums, markets, riverfront experiences, local food and essential travel tips.',

  keywords: [
    'Dhaka travel guide',
    'things to do in Dhaka',
    'Dhaka attractions',
    'Dhaka tourism',
    'Bangladesh travel guide',
    'Dhaka itinerary',
    'best places to visit in Dhaka',
    'Dhaka Old City',
    'Dhaka travel tips',
    'Bangladesh tourism'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 35,

  attractions: [
    {
      name: 'Lalbagh Fort',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Ahsan Manzil',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'National Parliament House',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Dhakeshwari National Temple',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Sadarghat River Port',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bangladesh National Museum',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Hazrat Shahjalal International Airport (DAC) is the main international gateway to Dhaka.',
    'November through February is generally more comfortable for exploring Dhaka because temperatures are lower and conditions are typically drier.',
    'Traffic can be extremely congested, so allow plenty of extra time when traveling across the city.',
    'Rickshaws are an iconic part of Dhaka’s streetscape and can be useful for short journeys, although traffic conditions vary considerably.',
    'The Old Dhaka area is particularly interesting for travelers interested in history, architecture, markets, mosques, temples, and local food.',
    'Dress respectfully when visiting religious sites and follow local customs regarding photography.',
    'Bangladeshi cuisine is an important part of the travel experience, with biryani, fish dishes, bhorta, sweets, and street food among the highlights.',
    'If you plan to visit destinations outside Dhaka, allow additional travel time because road conditions and traffic can make journeys much longer than expected.',
    'Check current local conditions and travel advisories before traveling, particularly during periods of political demonstrations or severe weather.'
  ]
},
{
  id: 'minsk-by',
  city: 'Minsk',
  country: 'Belarus',
  airportCode: 'MSQ',
  image: `https://images.unsplash.com/photo-1591509352193-c3e6676f71c2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Belarus’s capital combines grand Soviet-era architecture, historic neighborhoods, spacious parks, museums, monuments, and broad avenues with a surprisingly green and organized city centre.',

  seoTitle: 'Minsk Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Minsk, Belarus with a guide to major landmarks, museums, historic sites, parks, architecture, local culture and essential travel information.',

  keywords: [
    'Minsk travel guide',
    'things to do in Minsk',
    'Minsk attractions',
    'Minsk tourism',
    'Belarus travel guide',
    'Minsk Belarus',
    'Minsk itinerary',
    'best places to visit in Minsk',
    'Minsk travel tips',
    'Belarus tourism'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Independence Square',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Library of Belarus',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Upper Town',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Victory Square',
      duration: '45 minutes',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'Great Patriotic War Museum',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Gorky Park',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Minsk National Airport (MSQ) is the main international airport serving the Belarusian capital.',
    'Belarus has a continental climate, with cold winters and warmer summers. May through September is generally more comfortable for outdoor sightseeing.',
    'Minsk has an extensive public transportation network, including metro, buses, and trolleybuses.',
    'The historic Upper Town is one of the best areas for exploring Minsk on foot.',
    'Belarusian and Russian are the main languages used in the country, so having offline translation tools can be useful.',
    'Carry your passport and required identification documents while traveling, as authorities can request identification.',
    'Border crossings and transportation connections with neighboring countries can change or close with little notice.',
    'Check current visa, entry, border, and transportation requirements before planning your trip.',
    'Belarus currently has significant travel risks. The U.S. Department of State advises against all travel because of unrest and other risks, including the possibility of arbitrary detention and limited consular assistance.',
    'Because the security and transportation situation can change quickly, verify the latest official travel advisory before making any travel plans.'
  ]
},
{
  id: 'san-jose-cr',
  city: 'San José',
  country: 'Costa Rica',
  airportCode: 'SJO',
  image: `https://images.unsplash.com/photo-1682963847132-1923d1e7928a?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Costa Rica’s lively capital is the country’s cultural and urban gateway, combining museums, historic architecture, local markets, restaurants, coffee culture, and easy access to the country’s spectacular volcanoes and rainforests.',

  seoTitle: 'San José Costa Rica Travel Guide: Things to Do & Attractions',

  seoDescription: 'Explore San José, Costa Rica with a guide to the best attractions, museums, markets, food, culture, day trips, and travel tips.',

  keywords: [
    'San José Costa Rica travel guide',
    'things to do in San José Costa Rica',
    'San José Costa Rica attractions',
    'San José tourism',
    'Costa Rica travel guide',
    'San José itinerary',
    'best places to visit in San José',
    'San José Costa Rica travel tips',
    'Costa Rica vacation',
    'Costa Rica tourism'
  ],

  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'December to April',
  dailyBudget: 75,

  attractions: [
    {
      name: 'National Theatre of Costa Rica',
      duration: '1–1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'National Museum of Costa Rica',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Central Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Pre-Columbian Gold Museum',
      duration: '1.5–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Metropolitan Cathedral',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'La Sabana Metropolitan Park',
      duration: '1–2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Juan Santamaría International Airport (SJO) is the main international gateway for travelers visiting the San José area.',
    'December through April is generally the drier season and is popular for sightseeing and outdoor activities.',
    'San José is an excellent starting point for trips to Arenal, Monteverde, Manuel Antonio, Guanacaste, and other parts of Costa Rica.',
    'Costa Rica uses the colón, although U.S. dollars are widely accepted in many tourist areas.',
    'Use registered taxis or reputable ride-hailing services and keep valuables secure in crowded areas.',
    'Costa Rican food is worth exploring, including gallo pinto, casado, fresh fruit, coffee, and traditional snacks.',
    'The city is at relatively high elevation, so evenings can feel cooler than visitors might expect from a tropical country.',
    'If your main goal is beaches or wildlife, consider spending only a short time in San José and continuing to another region.',
    'Costa Rica has extensive natural areas, so pack comfortable walking shoes, sunscreen, insect repellent, and light rain protection.'
  ]
},
{
  id: 'paphos-cy',
  city: 'Paphos',
  country: 'Cyprus',
  airportCode: 'PFO',
  image: `https://images.unsplash.com/photo-1622615820991-1075551c86f8?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Set along the southwestern coast of Cyprus, Paphos combines Mediterranean beaches with ancient archaeological sites, historic harbour views, traditional villages, and a relaxed atmosphere.',

  seoTitle: 'Paphos Cyprus Travel Guide: Things to Do & Attractions',

  seoDescription: 'Discover Paphos, Cyprus with a guide to ancient ruins, beaches, the harbour, Tombs of the Kings, local villages, culture and travel tips.',

  keywords: [
    'Paphos travel guide',
    'things to do in Paphos',
    'Paphos attractions',
    'Paphos Cyprus',
    'Paphos tourism',
    'Paphos beaches',
    'Tombs of the Kings',
    'Paphos Archaeological Park',
    'Paphos itinerary',
    'Cyprus travel guide'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'April to June, September to October',
  dailyBudget: 85,

  attractions: [
    {
      name: 'Paphos Archaeological Park',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Tombs of the Kings',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Paphos Harbour',
      duration: '1–2 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Paphos Castle',
      duration: '45 minutes',
      bestTime: 'Late Afternoon',
      entryFee: 'Paid'
    },
    {
      name: 'Petra tou Romiou',
      duration: '1 hour',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Coral Bay',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Paphos International Airport (PFO) is one of the main international gateways to Cyprus and is particularly convenient for western Cyprus.',
    'Spring and autumn offer a good combination of warm weather and more manageable crowds.',
    'Paphos is particularly strong for travelers interested in combining archaeology, beaches, food, and relaxed coastal experiences.',
    'Wear comfortable shoes when exploring archaeological sites because some areas involve uneven stone surfaces.',
    'A rental car can be useful if you want to explore villages, mountain areas, wineries, and beaches outside Paphos.',
    'Respect signs and barriers around archaeological sites and avoid climbing on protected ruins.',
    'Try traditional Cypriot dishes such as halloumi, souvlaki, meze, and local seafood.',
    'The coastal promenade is especially pleasant around sunset and connects several popular areas around the harbour.',
    'Check current entry requirements and local transportation information before traveling.'
  ]
},
{
  id: 'ndjamena-td',
  city: "N'Djamena",
  country: 'Chad',
  airportCode: 'NDJ',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjGbLw4zcSse7XQFRlt3RBhvQCnVWWvhml2EMq7DZRAODL2u1MAF8pZQc&s=10${cropParams}`,

  description: 'Chad’s capital sits along the Chari River and offers a fascinating introduction to Central African culture, with traditional markets, museums, riverside scenery, local crafts, and access to some of the country’s extraordinary desert and wildlife landscapes.',

  seoTitle: "N'Djamena Travel Guide: Things to Do, Attractions & Travel Tips",

  seoDescription: "Explore N'Djamena, Chad with a guide to local markets, museums, cultural attractions, riverside experiences and essential travel information.",

  keywords: [
    "N'Djamena travel guide",
    "things to do in N'Djamena",
    "N'Djamena attractions",
    'N’Djamena tourism',
    'Chad travel guide',
    'N’Djamena Chad',
    'N’Djamena itinerary',
    'Chad tourism',
    'N’Djamena travel tips',
    'places to visit in Chad'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 45,

  attractions: [
    {
      name: 'N’Djamena Grand Mosque',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'National Museum of Chad',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'N’Djamena Central Market',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Chari River',
      duration: '1–2 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'N’Djamena Cultural Centre',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Local Craft Markets',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'N’Djamena International Airport (NDJ) is the main international gateway to Chad.',
    'The cooler dry season from November to February is generally more comfortable for exploring N’Djamena.',
    'French and Arabic are the official languages, while numerous local languages are spoken throughout the country.',
    'Dress conservatively and respectfully, particularly when visiting religious and cultural sites.',
    'The Chari River forms an important part of the city’s geography and offers a different perspective on N’Djamena.',
    'Markets can be busy and crowded, so keep valuables secure and avoid displaying expensive belongings.',
    'Travel outside N’Djamena requires careful planning because distances are large and road conditions can vary considerably.',
    'Chad has significant security risks, including terrorism, kidnapping, armed conflict, and civil unrest. Check the latest official travel advisories before considering travel.',
    'Some regions of Chad are subject to much stronger travel warnings than N’Djamena, particularly areas near international borders and conflict-affected regions.',
    'Verify current entry requirements, transportation availability, security conditions, and local regulations before traveling.'
  ]
},
{
  id: 'roseau-dm',
  city: 'Roseau',
  country: 'Dominica',
  airportCode: 'DOM',
  image: `https://images.unsplash.com/photo-1649703196751-9019ead6b2f4?q=80&w=1021&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Dominica’s compact capital sits between lush volcanic mountains and the Caribbean Sea, offering colorful streets, historic buildings, local markets, botanical gardens, and easy access to some of the Caribbean’s most spectacular rainforest landscapes.',

  seoTitle: 'Roseau Dominica Travel Guide: Things to Do & Attractions',

  seoDescription: 'Explore Roseau, Dominica with a guide to rainforest adventures, waterfalls, hot springs, local markets, historic attractions and travel tips.',

  keywords: [
    'Roseau Dominica travel guide',
    'things to do in Roseau',
    'Roseau attractions',
    'Dominica travel guide',
    'Dominica tourism',
    'Roseau Dominica',
    'Dominica rainforest',
    'Dominica waterfalls',
    'Dominica hiking',
    'Dominica travel tips'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'February to April',
  dailyBudget: 80,

  attractions: [
    {
      name: 'Dominica Botanic Gardens',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Roseau Market',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Morne Bruce',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Trafalgar Falls',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Boiling Lake',
      duration: 'Full day',
      bestTime: 'Early Morning',
      entryFee: 'Guide recommended'
    },
    {
      name: 'Champagne Reef',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Douglas–Charles Airport (DOM) is Dominica’s main international airport and is located on the northeastern side of the island.',
    'Dominica is known as the Nature Island of the Caribbean, so hiking, waterfalls, hot springs, diving and rainforest experiences are major reasons to visit.',
    'The drier months from February to April generally provide favorable conditions for outdoor activities.',
    'Rain can occur throughout the year, so pack a lightweight waterproof jacket even when the forecast looks favorable.',
    'Many of Dominica’s best natural attractions involve hiking, uneven trails, or steep terrain, so proper walking shoes are recommended.',
    'Roseau is compact enough to explore on foot, while taxis, rental cars and guided tours are useful for reaching attractions outside the capital.',
    'The island is mountainous, and journeys that appear short on a map can take considerably longer because of winding roads.',
    'Respect protected natural areas and follow local guidance when swimming, hiking, diving or visiting geothermal sites.',
    'Check current weather and local conditions before planning mountain hikes or boat excursions.'
  ]
},
{
  id: 'punta-cana-do',
  city: 'Punta Cana',
  country: 'Dominican Republic',
  airportCode: 'PUJ',
  image: `https://images.unsplash.com/photo-1635450695849-bde4bea19b5f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Punta Cana is one of the Caribbean’s most popular beach destinations, known for long stretches of white sand, turquoise water, palm-lined coastlines, all-inclusive resorts, water sports, golf, and easy access to tropical nature.',

  seoTitle: 'Punta Cana Travel Guide: Best Beaches, Things to Do & Tips',

  seoDescription: 'Discover Punta Cana with a guide to the best beaches, water activities, resorts, excursions, attractions and practical travel tips for the Dominican Republic.',

  keywords: [
    'Punta Cana travel guide',
    'things to do in Punta Cana',
    'Punta Cana beaches',
    'Punta Cana attractions',
    'Dominican Republic travel guide',
    'Punta Cana resorts',
    'Punta Cana tourism',
    'Punta Cana itinerary',
    'Punta Cana vacation',
    'Dominican Republic beaches'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 110,

  attractions: [
    {
      name: 'Bávaro Beach',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Macao Beach',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Indigenous Eyes Ecological Park',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Hoyo Azul',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Saona Island',
      duration: 'Full day',
      bestTime: 'Early Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Scape Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'Punta Cana International Airport (PUJ) is one of the main gateways to the Dominican Republic and is particularly convenient for the eastern resort area.',
    'December through April is generally one of the most popular periods to visit because of warm weather and lower rainfall.',
    'The Dominican Republic uses the Dominican peso, although U.S. dollars are widely accepted in many tourist areas.',
    'All-inclusive resorts can provide good value for travelers who plan to spend most of their vacation at the resort.',
    'If you want a more local experience, explore beyond the resort areas and include Dominican restaurants, markets and cultural attractions in your itinerary.',
    'Use licensed transportation or reputable tour operators for excursions and airport transfers.',
    'The Caribbean sun can be intense, so bring sunscreen, sunglasses, a hat and plenty of water.',
    'Boat excursions to Saona Island and other coastal destinations can be affected by sea and weather conditions.',
    'Punta Cana is primarily a resort and beach destination, while Santo Domingo offers a much stronger historic and cultural experience.',
    'Check current entry, passport, transportation and local travel requirements before your trip.'
  ]
},
{
  id: 'djibouti-city-dj',
  city: 'Djibouti City',
  country: 'Djibouti',
  airportCode: 'JIB',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH8NO49x-8V-S2dG7v8hdEFzC8arP5VgnUK_W9LTeXO5XLcHAwqCvW9cU&s=10${cropParams}`,

  description: 'Djibouti City is a fascinating gateway to the Horn of Africa, combining a busy port, colorful markets, French and African influences, coastal landscapes, and easy access to some of the region’s most extraordinary volcanic and marine environments.',

  seoTitle: 'Djibouti City Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Djibouti City with a guide to local markets, beaches, historic sites, Lake Assal, volcanic landscapes, marine experiences and practical travel tips.',

  keywords: [
    'Djibouti City travel guide',
    'things to do in Djibouti City',
    'Djibouti attractions',
    'Djibouti tourism',
    'Djibouti travel guide',
    'Djibouti City',
    'Lake Assal Djibouti',
    'Djibouti beaches',
    'Djibouti itinerary',
    'Djibouti travel tips'
  ],

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'November to February',
  dailyBudget: 70,

  attractions: [
    {
      name: 'Place Menelik',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Hamoudi Mosque',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Central Market',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Heron Beach',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Lake Assal',
      duration: 'Full day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Goubet al-Kharab',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Djibouti–Ambouli International Airport (JIB) is the main international gateway to Djibouti City.',
    'The cooler months from November to February are generally more comfortable for exploring the country and taking outdoor excursions.',
    'Djibouti has an extremely hot and arid climate, so carry plenty of water, sunscreen, sunglasses, and lightweight clothing.',
    'French and Arabic are official languages, while Somali and Afar are also widely spoken.',
    'Djibouti City is relatively compact, but organized tours or private transportation are useful for reaching attractions outside the capital.',
    'Lake Assal is one of the country’s most remarkable natural attractions and lies well outside Djibouti City, so plan a full-day excursion.',
    'Respect local customs and dress modestly, particularly when visiting mosques, markets, and residential neighborhoods.',
    'The Red Sea coast offers opportunities for snorkeling, diving, fishing, and marine excursions depending on local conditions.',
    'Remote desert and volcanic areas can be extremely hot and isolated, so organized excursions with experienced local operators are recommended.',
    'Check current security conditions, entry requirements, transportation availability, and official travel advisories before traveling.'
  ]
},
{
  id: 'asmara-er',
  city: 'Asmara',
  country: 'Eritrea',
  airportCode: 'ASM',
  image: `https://wmf.imgix.net/images/6a_30_asmara_city_photo_by_david_stanley_-_wikimedia_commons.jpg?auto=format,compress&fit=max&w=4040${cropParams}`,

  description: 'Eritrea’s atmospheric capital is known for its remarkable Italian-modernist architecture, wide boulevards, historic cafés, lively markets, and distinctive highland setting.',

  seoTitle: 'Asmara Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Asmara, Eritrea with a guide to Italian-modernist architecture, historic landmarks, markets, cafés, museums and essential travel tips.',

  keywords: [
    'Asmara travel guide',
    'things to do in Asmara',
    'Asmara attractions',
    'Asmara Eritrea',
    'Eritrea travel guide',
    'Asmara tourism',
    'Asmara architecture',
    'Asmara itinerary',
    'Asmara travel tips',
    'Eritrea tourism'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'October to February',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Fiat Tagliero Building',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Cathedral of Asmara',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Museum of Eritrea',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Al Khulafa Al Rashedin Mosque',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Medeber Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Cinema Impero',
      duration: '45 minutes',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Asmara International Airport (ASM) is the main airport serving Eritrea’s capital.',
    'Asmara sits at high elevation, giving it a cooler climate than many other cities in the region.',
    'The city is particularly interesting for travelers interested in architecture, history, coffee culture, and local markets.',
    'Italian influence can still be seen throughout the city in its architecture, cafés, food, and historic buildings.',
    'Dress respectfully when visiting religious sites.',
    'Photography around government buildings, military facilities, airports, and other sensitive locations may be restricted.',
    'Travel outside Asmara can require additional permits and careful planning.',
    'Check current visa requirements, transportation conditions, local regulations, and security advisories before traveling.'
  ]
},
{
  id: 'tallinn-ee',
  city: 'Tallinn',
  country: 'Estonia',
  airportCode: 'TLL',
  image: `https://images.unsplash.com/photo-1709862366377-54b16f3e51f9?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Estonia’s compact capital combines one of Europe’s best-preserved medieval Old Towns with modern design, creative neighborhoods, coastal scenery, excellent cafés, museums, and a strong digital culture.',

  seoTitle: 'Tallinn Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Discover Tallinn, Estonia with a guide to the medieval Old Town, Kadriorg, museums, coastal neighborhoods, food, culture and practical travel tips.',

  keywords: [
    'Tallinn travel guide',
    'things to do in Tallinn',
    'Tallinn attractions',
    'Tallinn Estonia',
    'Estonia travel guide',
    'Tallinn Old Town',
    'Tallinn tourism',
    'Tallinn itinerary',
    'Tallinn travel tips',
    'best places to visit in Tallinn'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'May to September',

  dailyBudget: 80,

  attractions: [
    {
      name: 'Tallinn Old Town',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Toompea Hill',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Kadriorg Palace & Park',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Kumu Art Museum',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Paid'
    },
    {
      name: 'Alexander Nevsky Cathedral',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Kalamaja',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Lennart Meri Tallinn Airport (TLL) is only around 4 kilometres from the city centre. :contentReference[oaicite:2]{index=2}',
    'Summer is popular for its long daylight hours and outdoor events, while spring and autumn generally bring fewer visitors.',
    'Tallinn’s historic centre is highly walkable, so comfortable shoes are recommended.',
    'The Old Town is a UNESCO World Heritage Site and one of the best-preserved medieval urban areas in Northern Europe. :contentReference[oaicite:3]{index=3}',
    'Public transportation makes it easy to explore areas outside the historic centre.',
    'Kalamaja is a good choice for creative spaces, cafés, restaurants, and a more contemporary side of Tallinn.',
    'Estonian cuisine includes rye bread, fish, seasonal produce, dairy products, and modern Nordic-inspired dishes.',
    'Consider buying a Tallinn Card if you plan to visit several museums and attractions.',
    'Check current entry requirements and seasonal opening hours before traveling.'
  ]
},
{
  id: 'mbabane-sz',
  city: 'Mbabane',
  country: 'Eswatini',
  airportCode: 'SHO',
  image: `https://images.unsplash.com/photo-1754693202839-d4cc26fca108?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Eswatini’s cool highland capital is surrounded by green mountains and valleys, offering a relaxed introduction to the kingdom’s landscapes, culture, crafts, markets, and outdoor adventures.',

  seoTitle: 'Mbabane Eswatini Travel Guide: Things to Do & Attractions',

  seoDescription: 'Explore Mbabane and the surrounding highlands of Eswatini with a guide to nature, markets, cultural attractions, hiking and travel tips.',

  keywords: [
    'Mbabane travel guide',
    'things to do in Mbabane',
    'Mbabane attractions',
    'Eswatini travel guide',
    'Eswatini tourism',
    'Mbabane Eswatini',
    'Eswatini attractions',
    'Mbabane itinerary',
    'Eswatini travel tips',
    'Eswatini mountains'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to September',
  dailyBudget: 65,

  attractions: [
    {
      name: 'Mbabane Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Malolotja Nature Reserve',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Sibebe Rock',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Ngwenya Glass',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mantenga Cultural Village',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Mlilwane Wildlife Sanctuary',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'King Mswati III International Airport (SHO) is Eswatini’s principal international airport and is located in the Lubombo region, roughly 50 kilometres from Manzini. :contentReference[oaicite:5]{index=5}',
    'The airport provides connections to regional destinations including Johannesburg and other southern African cities. :contentReference[oaicite:6]{index=6}',
    'The dry winter months from May to September are generally excellent for hiking, wildlife viewing, and outdoor activities.',
    'Eswatini is a relatively small country, making it possible to combine Mbabane with wildlife reserves, cultural villages, and mountain areas.',
    'A rental car is useful for exploring beyond Mbabane, particularly if visiting nature reserves.',
    'Respect local customs and ask permission before photographing people or cultural ceremonies.',
    'Try local dishes and visit craft markets to experience Eswatini’s traditional arts and food culture.',
    'Mountain weather can change quickly, so bring layers even when daytime temperatures are warm.',
    'Check current road conditions, entry requirements, and local travel information before traveling.'
  ]
},
{
  id: 'addis-ababa-et',
  city: 'Addis Ababa',
  country: 'Ethiopia',
  airportCode: 'ADD',
  image: `https://images.unsplash.com/photo-1724001079027-800ed9a8ee4d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Ethiopia’s high-altitude capital is the country’s cultural and diplomatic heart, combining fascinating museums, historic churches, lively markets, Ethiopian coffee culture, modern neighborhoods, and dramatic mountain scenery.',

  seoTitle: 'Addis Ababa Travel Guide: Things to Do & Attractions',

  seoDescription: 'Explore Addis Ababa with a guide to museums, churches, markets, Ethiopian coffee culture, Entoto Mountain, local food and essential travel tips.',

  keywords: [
    'Addis Ababa travel guide',
    'things to do in Addis Ababa',
    'Addis Ababa attractions',
    'Ethiopia travel guide',
    'Addis Ababa tourism',
    'Addis Ababa Ethiopia',
    'Ethiopian coffee',
    'Entoto Mountain',
    'Addis Ababa itinerary',
    'Ethiopia travel tips'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'October to February',
  dailyBudget: 50,

  attractions: [
    {
      name: 'National Museum of Ethiopia',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Holy Trinity Cathedral',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Merkato',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Entoto Mountain',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Unity Park',
      duration: '3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Paid'
    },
    {
      name: 'Ethiopian Coffee Experience',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Addis Ababa Bole International Airport (ADD) is the main international gateway and a major connecting hub for travel across Africa. :contentReference[oaicite:8]{index=8}',
    'Addis Ababa sits at high altitude, so visitors may need some time to adjust, particularly during their first day.',
    'October through February is generally a comfortable period for exploring the capital and planning trips around Ethiopia.',
    'Ethiopian coffee is an important part of the country’s culture, and a traditional coffee ceremony is worth experiencing.',
    'Merkato is one of the city’s largest markets and offers a glimpse into everyday commerce and local life.',
    'Use reputable taxis or ride-hailing services and take normal precautions with valuables in crowded areas.',
    'Ethiopia has an enormous cultural and historical heritage, so consider extending your trip beyond Addis Ababa to destinations such as Lalibela, Gondar, Axum, or the Simien Mountains.',
    'The country has diverse climates and elevations, so pack according to the regions included in your itinerary.',
    'Check current security conditions, entry requirements, domestic transportation schedules, and travel advisories before traveling.'
  ]
},
{
  id: 'libreville-ga',
  city: 'Libreville',
  country: 'Gabon',
  airportCode: 'LBV',
  image: `https://images.unsplash.com/photo-1594612622464-ab6f730893f6?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Gabon’s coastal capital combines Atlantic beaches, tropical greenery, lively markets, French-influenced architecture, local culture, and easy access to the country’s extraordinary rainforest and wildlife experiences.',

  seoTitle: 'Libreville Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Libreville, Gabon with a guide to beaches, markets, museums, cultural attractions, local food, nearby nature and essential travel tips.',

  keywords: [
    'Libreville travel guide',
    'things to do in Libreville',
    'Libreville attractions',
    'Libreville tourism',
    'Gabon travel guide',
    'Libreville Gabon',
    'Libreville beaches',
    'Gabon tourism',
    'Libreville itinerary',
    'Libreville travel tips'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'June to September',
  dailyBudget: 70,

  attractions: [
    {
      name: 'Pointe-Denis Beach',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'L’Église Saint-Michel de Nkembo',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Museum of Arts and Traditions of Gabon',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Marché Mont-Bouët',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Arboretum de Sibang',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Libreville Seafront',
      duration: '1–2 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Léon-Mba International Airport (LBV) is the main international gateway to Libreville and Gabon.',
    'The June to September dry season is generally more comfortable for exploring Libreville and planning wildlife excursions.',
    'Gabon is heavily forested, so the country is particularly attractive to travelers interested in wildlife, rainforests, beaches, and nature.',
    'French is the official language, while several local languages are also spoken throughout the country.',
    'Libreville can be more expensive than some other destinations in Central Africa, particularly for hotels and transportation.',
    'Use reputable taxis, private transfers, or trusted local tour operators when traveling around the city and beyond.',
    'Markets can become crowded, so keep valuables secure and avoid displaying expensive electronics.',
    'If visiting national parks or rainforest areas, arrange transportation and guides in advance because infrastructure outside major cities can be limited.',
    'Pack lightweight clothing, comfortable walking shoes, insect repellent, sunscreen, and rain protection.',
    'Check current entry requirements, transportation conditions, health information, and travel advisories before traveling.'
  ]
},
{
  id: 'banjul-gm',
  city: 'Banjul',
  country: 'Gambia',
  airportCode: 'BJL',
  image: `https://images.unsplash.com/photo-1751502776559-2ee0612ec54a?q=80&w=1033&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'The Gambia’s compact capital sits on an island at the mouth of the Gambia River, offering a mix of West African culture, colorful markets, colonial-era landmarks, river views, nearby beaches, and easy access to the country’s coastal resorts.',

  seoTitle: 'Banjul Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Banjul, The Gambia with a guide to historic landmarks, markets, museums, beaches, river experiences, local culture and practical travel tips.',

  keywords: [
    'Banjul travel guide',
    'things to do in Banjul',
    'Banjul attractions',
    'Banjul tourism',
    'Gambia travel guide',
    'The Gambia travel',
    'Banjul Gambia',
    'Gambia beaches',
    'Banjul itinerary',
    'Gambia travel tips'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to April',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Arch 22',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Albert Market',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Museum of The Gambia',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Kunta Kinteh Island',
      duration: 'Full day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Banjul Ferry Terminal',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Bijilo Forest Park',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'Banjul International Airport (BJL) is the main international airport serving The Gambia and is located near the coastal resort areas.',
    'November through April is generally the most popular period to visit because it falls within the dry season.',
    'Banjul itself is relatively compact, while many hotels and beaches are located outside the capital along the coast.',
    'English is the official language and is widely used in tourism, while several local languages are spoken throughout the country.',
    'The Gambia River is central to the country’s geography and provides opportunities for boat trips and wildlife experiences.',
    'Albert Market is a lively place to experience local commerce, crafts, clothing, food, and everyday life, but keep valuables secure in crowded areas.',
    'If visiting wildlife areas or taking river excursions, use established local guides and tour operators.',
    'The tropical climate can be hot and humid, so carry water, sunscreen, insect repellent, and lightweight clothing.',
    'Dress respectfully when visiting religious and cultural sites.',
    'Check current entry requirements, transportation conditions, health information, and travel advisories before traveling.'
  ]
},
{
  id: 'st-georges-gd',
  city: "St. George's",
  country: 'Grenada',
  airportCode: 'GND',
  image: `https://images.unsplash.com/photo-1617246610501-d11b4829436b?q=80&w=1092&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Grenada’s picturesque capital curves around a natural horseshoe-shaped harbor, combining colorful waterfront buildings, historic forts, Caribbean markets, tropical gardens, and easy access to beautiful beaches and marine adventures.',

  seoTitle: "St. George's Grenada Travel Guide: Things to Do & Attractions",

  seoDescription: "Explore St. George's, Grenada with a guide to the best beaches, historic forts, markets, waterfront attractions, local food and Caribbean travel tips.",

  keywords: [
    "St. George's Grenada travel guide",
    "things to do in St. George's Grenada",
    'Grenada travel guide',
    'St. George’s attractions',
    'Grenada tourism',
    'Grenada beaches',
    'Grand Anse Beach',
    "St. George's Grenada",
    'Grenada itinerary',
    'Grenada travel tips'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 100,

  attractions: [
    {
      name: 'Grand Anse Beach',
      duration: '2–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Fort George',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Sendall Tunnel',
      duration: '30 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'St. George’s Market Square',
      duration: '1–1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Underwater Sculpture Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Annandale Falls',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'Maurice Bishop International Airport (GND) is the main international gateway to Grenada and is located south of St. George’s.',
    'December through April is the popular dry season and generally offers excellent conditions for beaches and outdoor activities.',
    'Grand Anse is one of Grenada’s most famous beaches and is located only a short drive from St. George’s.',
    'Grenada is known as the Spice Island, so look for locally grown nutmeg, cocoa, cinnamon, cloves and other spices in markets and shops.',
    'The capital has steep roads and hills, so comfortable walking shoes are recommended.',
    'Taxis and minibuses are useful for getting around, while rental cars can be convenient for exploring more remote parts of the island.',
    'Snorkeling and diving are major activities, particularly around Grenada’s coral reefs and underwater sculpture park.',
    'The Caribbean sun can be strong, so bring sunscreen, water, sunglasses and appropriate beach clothing.',
    'Respect local customs and ask permission before photographing people or private property.',
    'Check current entry requirements, weather conditions, transportation options and local travel information before your trip.'
  ]
},
{
  id: 'guatemala-city-gt',
  city: 'Guatemala City',
  country: 'Guatemala',
  airportCode: 'GUA',
  image: `https://images.unsplash.com/photo-1561429137-38135953567b?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Guatemala’s vibrant capital combines historic neighborhoods, colorful markets, museums, colonial architecture, modern cafés, and easy access to the country’s volcanoes, highlands, lakes, and ancient Maya sites.',

  seoTitle: 'Guatemala City Travel Guide: Things to Do, Attractions & Tips',

  seoDescription: 'Explore Guatemala City with a guide to historic landmarks, museums, markets, local culture, food, nearby attractions and essential travel tips.',

  keywords: [
    'Guatemala City travel guide',
    'things to do in Guatemala City',
    'Guatemala City attractions',
    'Guatemala travel guide',
    'Guatemala tourism',
    'Guatemala City itinerary',
    'Guatemala City travel tips',
    'Guatemala museums',
    'Guatemala culture',
    'Guatemala vacation'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to April',
  dailyBudget: 50,

  attractions: [
    {
      name: 'National Palace of Culture',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Museo Nacional de Arqueología y Etnología',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Central Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Plaza de la Constitución',
      duration: '1 hour',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Kaminaljuyu Archaeological Park',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Zona 4',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'La Aurora International Airport (GUA) is the main international airport serving Guatemala City.',
    'November through April is generally the dry season and is a popular period for exploring Guatemala.',
    'Guatemala City is an excellent starting point for trips to Antigua, Lake Atitlán, Tikal, Semuc Champey and other regions.',
    'Use reputable transportation services and take normal precautions with valuables, particularly in crowded areas.',
    'The city is spread across several zones, and travel times can vary considerably because of traffic.',
    'Spanish is the main language used in the city, while numerous Maya languages are spoken throughout Guatemala.',
    'Try traditional Guatemalan dishes such as pepián, tamales, kak-ik and local coffee.',
    'If you have limited time, consider using Guatemala City primarily as your arrival point before continuing to Antigua or other major destinations.',
    'Weather can vary significantly between Guatemala City and higher or lower-altitude destinations, so pack layers.',
    'Check current entry requirements, transportation conditions, local safety information and travel advisories before traveling.'
  ]
},
{
  id: 'conakry-gn',
  city: 'Conakry',
  country: 'Guinea',
  airportCode: 'CKY',
  image: `https://images.unsplash.com/photo-1512944049881-3a92e7eb8a47?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Guinea’s coastal capital stretches along the Atlantic Ocean and offers a lively mix of West African culture, colorful markets, music, historic landmarks, waterfront scenery, and access to the country’s tropical landscapes.',

  seoTitle: 'Conakry Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Conakry, Guinea with a guide to markets, museums, cultural attractions, islands, beaches, local food and practical travel tips.',

  keywords: [
    'Conakry travel guide',
    'things to do in Conakry',
    'Conakry attractions',
    'Conakry tourism',
    'Guinea travel guide',
    'Conakry Guinea',
    'Conakry itinerary',
    'Guinea tourism',
    'Conakry travel tips',
    'places to visit in Guinea'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Sandervalia National Museum',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Madina Market',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Grand Mosque of Conakry',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Îles de Los',
      duration: 'Full day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Faga-Faga Fougou Espace Culturel',
      duration: '1.5 hours',
      bestTime: 'Evening',
      entryFee: 'Varies'
    },
    {
      name: 'Conakry Botanical Garden',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Ahmed Sékou Touré International Airport (CKY) is the main international gateway to Guinea and is located near Conakry.',
    'The dry season from November to February is generally more comfortable for exploring the capital and planning excursions.',
    'Conakry is a densely populated peninsula, and traffic can be extremely heavy, so allow extra time for journeys.',
    'French is the official language, while Susu, Pular, Maninka and other local languages are widely spoken.',
    'Madina Market is one of the busiest commercial areas in the city and offers an authentic look at everyday local life.',
    'The Îles de Los provide an opportunity to experience beaches and tropical island scenery away from the urban centre.',
    'Dress respectfully when visiting religious sites and ask permission before photographing people.',
    'Use reputable transportation and keep valuables secure in crowded markets and busy public areas.',
    'If traveling outside Conakry, arrange transportation and accommodation in advance because infrastructure can be limited in some areas.',
    'Check current entry requirements, local security conditions, health information, transportation availability and travel advisories before traveling.'
  ]
},
{
  id: 'bissau-gw',
  city: 'Bissau',
  country: 'Guinea-Bissau',
  airportCode: 'OXB',
  image: `https://images.unsplash.com/photo-1623930376524-ead3734be423?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Guinea-Bissau’s relaxed capital sits along the Geba River and offers Portuguese colonial architecture, colorful markets, lively streets, traditional culture, and access to the country’s remarkable Atlantic islands and natural landscapes.',

  seoTitle: 'Bissau Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Bissau, Guinea-Bissau with a guide to historic landmarks, markets, colonial architecture, local culture, food and travel tips.',

  keywords: [
    'Bissau travel guide',
    'things to do in Bissau',
    'Bissau attractions',
    'Bissau tourism',
    'Guinea-Bissau travel guide',
    'Bissau Guinea-Bissau',
    'Guinea-Bissau tourism',
    'Bissau itinerary',
    'Bissau travel tips',
    'places to visit in Guinea-Bissau'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to April',
  dailyBudget: 40,

  attractions: [
    {
      name: 'Bissau Velho',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Amílcar Cabral Mausoleum',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Fortaleza de São José da Amura',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Bandim Market',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bissau Port',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Presidential Palace Area',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Osvaldo Vieira International Airport (OXB) is the main international airport serving Bissau.',
    'November through April is generally the drier period and is more comfortable for exploring the capital and planning trips around the country.',
    'Portuguese is the official language, while Guinea-Bissau Creole and several African languages are also widely spoken.',
    'Bissau Velho is the historic heart of the capital and is best explored during daylight hours.',
    'Bandim Market provides an authentic look at local commerce, food, clothing, crafts, and everyday life.',
    'The Bijagós Archipelago is one of the country’s biggest attractions, but reaching the islands requires additional planning and transportation.',
    'Road conditions outside Bissau can be challenging, particularly during the rainy season, so allow plenty of time for longer journeys.',
    'Dress respectfully when visiting religious, cultural, and residential areas.',
    'Keep valuables secure in busy markets and crowded areas and use reputable transportation when possible.',
    'Check current entry requirements, transportation availability, security conditions, health information, and travel advisories before traveling.'
  ]
},
{
  id: 'georgetown-gy',
  city: 'Georgetown',
  country: 'Guyana',
  airportCode: 'GEO',
  image: `https://images.unsplash.com/photo-1564858523844-73ee8233a3a2?q=80&w=1194&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Guyana’s colorful capital sits along the Atlantic coast and combines British colonial architecture, wooden stilt houses, lively markets, riverside scenery, diverse cuisine, and access to the country’s extraordinary rainforest and wildlife.',

  seoTitle: 'Georgetown Guyana Travel Guide: Things to Do & Attractions',

  seoDescription: 'Explore Georgetown, Guyana with a guide to historic wooden architecture, markets, museums, botanical gardens, local culture and essential travel tips.',

  keywords: [
    'Georgetown Guyana travel guide',
    'things to do in Georgetown Guyana',
    'Georgetown Guyana attractions',
    'Guyana travel guide',
    'Guyana tourism',
    'Georgetown Guyana',
    'Georgetown itinerary',
    'Guyana travel tips',
    'Guyana rainforest',
    'places to visit in Guyana'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'February to April, August to September',
  dailyBudget: 65,

  attractions: [
    {
      name: 'St. George’s Cathedral',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Stabroek Market',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Guyana National Museum',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Botanical Gardens',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Promenade Gardens',
      duration: '1 hour',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Walter Roth Museum of Anthropology',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Cheddi Jagan International Airport (GEO) is the main international gateway to Guyana and is located outside central Georgetown.',
    'Guyana has a tropical climate, with weather varying considerably between the coast and interior rainforest regions.',
    'Georgetown is largely flat and is known for its drainage canals and historic wooden architecture.',
    'English is the official language, making Guyana particularly accessible for English-speaking travelers.',
    'Guyana has a diverse food culture influenced by African, Indian, Amerindian, European, Chinese and Caribbean traditions.',
    'Use reputable taxis, transfers, or established tour operators when traveling around Georgetown and beyond.',
    'If you plan to visit Guyana’s rainforest or interior regions, arrange flights, accommodation, guides, and transportation in advance.',
    'Kaieteur Falls is one of Guyana’s most famous attractions and is generally visited as an organized day trip from Georgetown.',
    'Keep valuables secure in busy markets and crowded areas, particularly around Stabroek Market.',
    'Pack insect repellent, sunscreen, lightweight clothing, and rain protection when exploring Guyana’s tropical environment.',
    'Check current entry requirements, transportation availability, health information, local conditions, and travel advisories before traveling.'
  ]
},
{
  id: 'honolulu-us',
  city: 'Honolulu, Hawaii',
  country: 'USA',
  airportCode: 'HNL',
  image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80${cropParams}`,

  description: 'Honolulu is the vibrant gateway to Hawaii, combining world-famous beaches, volcanic landscapes, Polynesian culture, scenic hikes, historic landmarks, and the relaxed island lifestyle of Oahu.',

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'April to June, September to November',
  dailyBudget: 150,

  attractions: [
    {
      name: 'Waikiki Beach',
      duration: '2–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Diamond Head',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Pearl Harbor',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Hanauma Bay',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Iolani Palace',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Manoa Falls',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Daniel K. Inouye International Airport (HNL) is the main airport serving Honolulu and the island of Oahu.',
    'April to June and September to November can offer a good balance of weather, crowds, and accommodation prices.',
    'Waikiki is convenient for first-time visitors, with easy access to beaches, restaurants, shopping, and tours.',
    'Renting a car can be useful for exploring areas outside Honolulu, although parking in Waikiki can be expensive.',
    'Book popular attractions and activities in advance, particularly Pearl Harbor, Diamond Head, and Hanauma Bay.',
    'Hawaii has strong cultural traditions, so respect sacred places, local communities, wildlife, and protected natural areas.',
    'Ocean conditions can change quickly. Pay attention to lifeguard warnings and posted swimming restrictions.',
    'The cost of food and accommodation can be high, so travelers should budget carefully for transportation, meals, and activities.',
    'Bring reef-safe sunscreen, comfortable walking shoes, swimwear, and light layers.',
    'Check current entry requirements, attraction reservations, weather conditions, and local travel information before your trip.'
  ],

  keywords: [
    'Honolulu travel guide',
    'Hawaii travel guide',
    'things to do in Honolulu',
    'Honolulu attractions',
    'Hawaii vacation',
    'Oahu travel guide',
    'Waikiki Beach',
    'Diamond Head Hawaii',
    'Pearl Harbor',
    'Hawaii travel tips'
  ]
},
{
  id: 'tegucigalpa-hn',
  city: 'Tegucigalpa',
  country: 'Honduras',
  airportCode: 'TGU',
  image: `https://images.unsplash.com/photo-1697343734561-1ed65fea6652?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Honduras’s mountainous capital is a lively mix of historic churches, colonial streets, colorful markets, museums, viewpoints, and surrounding highland landscapes, offering a different side of the country beyond its famous Caribbean islands and beaches.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'December to April',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Basilica of Suyapa',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Parque Central',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Palace of Honduras',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Museum for National Identity',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'El Picacho',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Paid'
    },
    {
      name: 'Iglesia de San Francisco',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Toncontín International Airport (TGU) serves Tegucigalpa, while Palmerola International Airport (XPL) is an important international gateway for travelers visiting central Honduras.',
    'December through April is generally the drier period and is popular for exploring Honduras.',
    'Tegucigalpa is built across mountainous terrain, so expect steep roads and allow extra time for journeys.',
    'Spanish is the official language, while several Indigenous and Caribbean languages are also spoken in different parts of Honduras.',
    'Use reputable taxis, ride-hailing services, or organized transfers rather than accepting transportation from unknown individuals.',
    'El Picacho provides panoramic views over Tegucigalpa and is particularly enjoyable later in the day.',
    'Honduras has much more to offer beyond its capital, including Roatán, Utila, Copán Ruinas, Pico Bonito, and Caribbean beaches.',
    'If continuing to the Bay Islands, check domestic flight and ferry schedules in advance.',
    'Keep valuables secure in busy public areas and avoid displaying expensive electronics.',
    'Check current entry requirements, transportation conditions, local safety information, and travel advisories before traveling.'
  ],

  keywords: [
    'Tegucigalpa travel guide',
    'things to do in Tegucigalpa',
    'Tegucigalpa attractions',
    'Honduras travel guide',
    'Honduras tourism',
    'Tegucigalpa Honduras',
    'Tegucigalpa itinerary',
    'Honduras travel tips',
    'places to visit in Honduras',
    'Honduras vacation'
  ]
},
{
  id: 'kuwait-city-kw',
  city: 'Kuwait City',
  country: 'Kuwait',
  airportCode: 'KWI',
  image: `https://images.unsplash.com/photo-1558634742-56096b49522b?q=80&w=966&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Kuwait City blends modern Gulf architecture, waterfront promenades, traditional markets, grand mosques, museums, and a distinctive desert-meets-coast atmosphere.',

  budget: 'Luxury',
  tripType: 'City',
  bestSeason: 'November to March',
  dailyBudget: 120,

  attractions: [
    {
      name: 'Kuwait Towers',
      duration: '1.5 hours',
      bestTime: 'Sunset',
      entryFee: 'Paid'
    },
    {
      name: 'Souq Al-Mubarakiya',
      duration: '2 hours',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'Grand Mosque of Kuwait',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'The Avenues',
      duration: '3 hours',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'Al Shaheed Park',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Marina Beach',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Kuwait International Airport (KWI) is the country’s main and only international airport. :contentReference[oaicite:1]{index=1}',
    'November to March is generally the most comfortable period for sightseeing because summer temperatures can be extremely high.',
    'Kuwait City is modern and spread out, so taxis and ride-hailing services are useful for getting around.',
    'Dress respectfully, particularly when visiting mosques and traditional areas.',
    'Souq Al-Mubarakiya is a good place to experience traditional Kuwaiti food, spices, perfumes, clothing, and handicrafts.',
    'Alcohol is prohibited in Kuwait, so do not expect it to be available in hotels or restaurants.',
    'Friday is the main weekly day of worship, and opening hours for some businesses and attractions can differ.',
    'Carry water and protect yourself from the sun when spending time outdoors.',
    'Check current entry requirements, local regulations, attraction opening hours, and travel advisories before traveling.'
  ],

  keywords: [
    'Kuwait City travel guide',
    'things to do in Kuwait City',
    'Kuwait travel guide',
    'Kuwait City attractions',
    'Kuwait tourism',
    'Kuwait City itinerary',
    'Kuwait travel tips',
    'Kuwait Towers',
    'Souq Al Mubarakiya',
    'Kuwait vacation'
  ]
},
{
  id: 'almaty-kz',
  city: 'Almaty',
  country: 'Kazakhstan',
  airportCode: 'ALA',
  image: `https://images.unsplash.com/photo-1659651117607-d2b397cf100f?q=80&w=923&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Kazakhstan’s largest city sits beneath the spectacular Tian Shan Mountains and combines leafy boulevards, Soviet-era architecture, lively cafés, local markets, museums, and easy access to alpine lakes and mountain adventures.',

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 65,

  attractions: [
    {
      name: 'Medeu Skating Rink',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Shymbulak Mountain Resort',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Kok-Tobe',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Paid'
    },
    {
      name: 'Green Bazaar',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Panfilov Park',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Ascension Cathedral',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Almaty International Airport (ALA) is one of Kazakhstan’s major airports and serves the country’s largest city. :contentReference[oaicite:2]{index=2}',
    'May to October is ideal for hiking and outdoor exploration, while winter is popular for skiing around Shymbulak.',
    'Almaty is surrounded by the Tian Shan Mountains, making it an excellent base for combining city sightseeing with nature.',
    'Public transportation, taxis, and ride-hailing services make getting around the city relatively easy.',
    'Try local specialties such as beshbarmak, plov, baursak, and traditional Kazakh dairy products.',
    'The Green Bazaar is a good place to experience local food, produce, spices, dried fruits, and regional products.',
    'Mountain weather can change quickly, so bring layers and suitable footwear for outdoor excursions.',
    'Popular mountain attractions can become busy during weekends and holidays.',
    'Consider adding Big Almaty Lake or nearby mountain destinations to a longer Kazakhstan itinerary.',
    'Check current entry requirements, transportation schedules, weather conditions, and local travel information before traveling.'
  ],

  keywords: [
    'Almaty travel guide',
    'things to do in Almaty',
    'Almaty attractions',
    'Kazakhstan travel guide',
    'Kazakhstan tourism',
    'Almaty itinerary',
    'Almaty travel tips',
    'Almaty mountains',
    'Shymbulak',
    'Almaty vacation'
  ]
},
{
  id: 'pristina-xk',
  city: 'Pristina',
  country: 'Kosovo',
  airportCode: 'PRN',
  image: `https://images.unsplash.com/photo-1687869545075-d8a613c04647?q=80&w=753&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Kosovo’s lively capital combines Ottoman-era heritage, modern cafés, historic mosques, colorful markets, contemporary culture, and easy access to the dramatic mountains and historic towns of the wider country.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 50,

  attractions: [
    {
      name: 'Newborn Monument',
      duration: '30 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mother Teresa Square',
      duration: '1 hour',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'Pristina National Library',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Ethnological Museum',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Pristina Bazaar Area',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Gračanica Monastery',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Pristina International Airport (PRN) is Kosovo’s main international airport and the primary gateway for visitors.',
    'May to September is generally the best period for comfortable sightseeing and outdoor activities.',
    'Pristina is relatively compact and many central attractions can be explored on foot.',
    'Kosovo uses the euro as its official currency.',
    'Try local specialties such as flija, burek, grilled meats, fresh salads, and traditional Balkan coffee.',
    'Prizren is one of the country’s most popular destinations and can easily be added to a longer Kosovo itinerary.',
    'The Rugova Valley and surrounding mountains are excellent options for hiking and nature experiences during warmer months.',
    'Dress respectfully when visiting mosques, monasteries, and other religious sites.',
    'Carry identification when traveling outside the capital and check local transportation schedules in advance.',
    'Check current entry requirements, border conditions, transportation availability, and travel advisories before traveling.'
  ],

  keywords: [
    'Pristina travel guide',
    'things to do in Pristina',
    'Pristina attractions',
    'Kosovo travel guide',
    'Kosovo tourism',
    'Pristina Kosovo',
    'Pristina itinerary',
    'Kosovo travel tips',
    'places to visit in Kosovo',
    'Kosovo vacation'
  ]
},
{
  id: 'luxembourg-city-lu',
  city: 'Luxembourg City',
  country: 'Luxembourg',
  airportCode: 'LUX',
  image: `https://images.unsplash.com/photo-1592770733110-738f7769188c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Luxembourg City combines dramatic cliff-top views, medieval fortifications, elegant squares, historic old quarters, European institutions, and peaceful green spaces in one of Europe’s most compact capitals.',

  budget: 'Luxury',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 140,

  attractions: [
    {
      name: 'Old Quarter',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bock Casemates',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Grand Ducal Palace',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Chemin de la Corniche',
      duration: '1 hour',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Notre-Dame Cathedral',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Pfaffenthal',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Luxembourg Airport (LUX) is the country’s main international airport.',
    'May to September is ideal for exploring the city on foot and enjoying its parks and viewpoints.',
    'Luxembourg City is compact and many major attractions can be reached by walking or public transportation.',
    'Public transportation within Luxembourg is free, making it particularly convenient for visitors.',
    'The Old Quarter and fortress areas are among the city’s highlights and are best explored at a relaxed pace.',
    'Luxembourg is one of Europe’s more expensive destinations, so accommodation and dining should be included carefully in your budget.',
    'The country has three official languages: Luxembourgish, French and German, while English is widely understood.',
    'Consider taking day trips to castles and villages outside Luxembourg City.',
    'Comfortable shoes are recommended because parts of the historic city have steep streets and cobblestones.',
    'Check current attraction opening hours and seasonal events before traveling.'
  ],

  keywords: [
    'Luxembourg City travel guide',
    'things to do in Luxembourg',
    'Luxembourg attractions',
    'Luxembourg travel guide',
    'Luxembourg tourism',
    'Luxembourg City itinerary',
    'Luxembourg travel tips',
    'Luxembourg Old Town',
    'Bock Casemates',
    'Luxembourg vacation'
  ]
},
{
  id: 'vilnius-lt',
  city: 'Vilnius',
  country: 'Lithuania',
  airportCode: 'VNO',
  image: `https://images.unsplash.com/photo-1549891472-991e6bc75d1e?q=80&w=873&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Lithuania’s capital blends a beautifully preserved medieval Old Town with baroque churches, leafy parks, creative neighborhoods, modern cafés, and a fascinating mix of Baltic and European history.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 55,

  attractions: [
    {
      name: 'Vilnius Old Town',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Gediminas Castle Tower',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Gate of Dawn',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Užupis',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Palace of the Grand Dukes',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Three Crosses Hill',
      duration: '1.5 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Vilnius Airport (VNO) is Lithuania’s largest civil airport and is located close to the city centre.',
    'May to September is a great period for sightseeing, outdoor cafés, parks and longer daylight hours.',
    'Vilnius Old Town is highly walkable and is best explored slowly rather than by rushing between attractions.',
    'Lithuania uses the euro.',
    'Užupis is known for its creative atmosphere, galleries, cafés and distinctive local character.',
    'Public transportation is useful for attractions outside the historic centre.',
    'Lithuanian cuisine includes hearty potato dishes, rye bread, soups, smoked meats and distinctive desserts.',
    'Summer days are long, while winter brings short daylight hours and colder weather.',
    'Consider combining Vilnius with Kaunas or the Curonian Spit for a longer Lithuania itinerary.',
    'Check current attraction hours, transport schedules and seasonal events before traveling.'
  ],

  keywords: [
    'Vilnius travel guide',
    'things to do in Vilnius',
    'Vilnius attractions',
    'Lithuania travel guide',
    'Lithuania tourism',
    'Vilnius Old Town',
    'Vilnius itinerary',
    'Vilnius travel tips',
    'places to visit in Lithuania',
    'Lithuania vacation'
  ]
},
{
  id: 'monrovia-lr',
  city: 'Monrovia',
  country: 'Liberia',
  airportCode: 'ROB',
  image: `https://images.unsplash.com/photo-1723593638247-0dfd1c759997?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Liberia’s coastal capital offers Atlantic beaches, lively markets, historic landmarks, colorful neighborhoods, local cuisine, and a fascinating introduction to West African culture and history.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to April',
  dailyBudget: 50,

  attractions: [
    {
      name: 'National Museum of Liberia',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Ducor Hill',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Waterside Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Providence Island',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'ELWA Beach',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Ce Ce Beach',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Roberts International Airport (ROB) is Liberia’s primary international aviation gateway and is located in Robertsfield, outside Monrovia.',
    'James Spriggs Payne Airport (MLW) is located within Monrovia and also serves the capital.',
    'November to April is generally the drier period and is more comfortable for sightseeing.',
    'English is Liberia’s official language, while Liberian English and numerous local languages are widely spoken.',
    'Monrovia has a tropical climate, so lightweight clothing, sunscreen and rain protection are useful.',
    'Use reputable taxis, private transfers or established tour operators when getting around.',
    'Keep valuables secure in crowded markets and busy public areas.',
    'Liberia has beautiful Atlantic beaches, but swimming conditions can vary and local advice should be followed.',
    'If traveling outside Monrovia, arrange transportation and accommodation in advance.',
    'Check current entry requirements, health information, security conditions and travel advisories before traveling.'
  ],

  keywords: [
    'Monrovia travel guide',
    'things to do in Monrovia',
    'Monrovia attractions',
    'Liberia travel guide',
    'Liberia tourism',
    'Monrovia Liberia',
    'Monrovia itinerary',
    'Liberia travel tips',
    'Liberia beaches',
    'places to visit in Liberia'
  ]
},
{
  id: 'riga-lv',
  city: 'Riga',
  country: 'Latvia',
  airportCode: 'RIX',
  image: `https://images.unsplash.com/photo-1614887259709-fe2c3aa56022?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Latvia’s elegant capital combines a UNESCO-listed historic centre, striking Art Nouveau architecture, lively markets, riverside parks, cozy cafés, and a vibrant Baltic cultural scene.',

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 70,

  attractions: [
    {
      name: 'Riga Old Town',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'House of the Black Heads',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Riga Central Market',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Freedom Monument',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Art Nouveau District',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Bastejkalna Park',
      duration: '1 hour',
      bestTime: 'Evening',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Riga Airport (RIX) is Latvia’s main international airport and an important gateway to the Baltic region.',
    'May to September offers long daylight hours and comfortable conditions for exploring Riga.',
    'Riga’s Old Town is compact and easy to explore on foot.',
    'Latvia uses the euro.',
    'The Central Market is one of the best places to experience local food and everyday life.',
    'Riga is particularly famous for its Art Nouveau architecture, with many impressive buildings concentrated around the city centre.',
    'Public transportation is convenient for reaching neighborhoods outside the historic centre.',
    'Try Latvian specialties such as rye bread, grey peas, smoked fish and potato-based dishes.',
    'Winter can be cold and dark but gives Riga a distinctive festive atmosphere around Christmas.',
    'Consider adding Jurmala or the Gauja National Park to a longer Latvia itinerary.',
    'Check current attraction opening hours, public transportation schedules and seasonal events before traveling.'
  ],

  keywords: [
    'Riga travel guide',
    'things to do in Riga',
    'Riga attractions',
    'Latvia travel guide',
    'Latvia tourism',
    'Riga Old Town',
    'Riga itinerary',
    'Riga travel tips',
    'Riga Art Nouveau',
    'places to visit in Latvia'
  ]
},
{
  id: 'bamako-ml',
  city: 'Bamako',
  country: 'Mali',
  airportCode: 'BKO',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTZ6sSrpQDe3JYshJJLO3Vgrn43VdP9w4kSI4taldBPQ&s=10${cropParams}`,

  description: 'Mali’s capital sits along the Niger River and offers a fascinating introduction to West African culture, traditional markets, local crafts, music, museums, and the country’s rich artistic heritage.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 45,

  attractions: [
    {
      name: 'National Museum of Mali',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Bamako Grand Mosque',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Marché de Medina',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bamako Artisan Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Niger River',
      duration: '1–2 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Point G Hill',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Modibo Keita International Airport (BKO) is the main international airport serving Bamako.',
    'November to February is generally more comfortable for exploring because temperatures are lower than during the hottest months.',
    'Bamako is located along the Niger River, which plays an important role in the city’s culture and daily life.',
    'French is the official language, while Bambara and several other local languages are widely spoken.',
    'Markets and artisan areas are good places to discover traditional textiles, jewelry, woodwork, and other locally made crafts.',
    'Use reputable transportation and established local guides when exploring outside the main urban areas.',
    'Mali has significant security risks, and conditions can vary considerably by region.',
    'Check the latest official travel advisories, security conditions, entry requirements, and transportation availability before traveling.',
    'Avoid traveling to areas subject to current security warnings even if they appear in general tourism information.',
    'Carry water, sun protection, and lightweight clothing because Bamako can become extremely hot.'
  ],

  keywords: [
    'Bamako travel guide',
    'things to do in Bamako',
    'Bamako attractions',
    'Mali travel guide',
    'Mali tourism',
    'Bamako Mali',
    'Bamako itinerary',
    'Mali travel tips',
    'places to visit in Mali',
    'Bamako culture'
  ]
},
{
  id: 'valletta-mt',
  city: 'Valletta',
  country: 'Malta',
  airportCode: 'MLA',
  image: `https://images.unsplash.com/photo-1669294841689-0ceb34ad40c1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Malta’s historic capital is a compact Mediterranean city filled with honey-colored limestone buildings, grand churches, ancient fortifications, waterfront views, museums, cafés, and centuries of European and Mediterranean history.',

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'April to June, September to October',
  dailyBudget: 100,

  attractions: [
    {
      name: 'St. John’s Co-Cathedral',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Upper Barrakka Gardens',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Grandmaster’s Palace',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Valletta Waterfront',
      duration: '1.5 hours',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'Fort St. Elmo',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'National Archaeology Museum',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'Malta International Airport (MLA) is the country’s only airport for commercial passenger flights and the main gateway to Malta.',
    'April to June and September to October offer a good combination of pleasant weather and fewer crowds than the peak summer months.',
    'Valletta is compact and highly walkable, although some streets are steep and feature stairs.',
    'Malta uses the euro.',
    'English and Maltese are both official languages, making Malta particularly accessible for English-speaking visitors.',
    'Public buses connect Valletta with many parts of Malta, while ferries are useful for traveling between Valletta and the Three Cities or Sliema.',
    'Malta has a rich history spanning prehistoric civilizations, the Phoenicians, Romans, Knights of St. John, and the British period.',
    'Summer can be extremely hot and busy, particularly around popular beaches and historic attractions.',
    'Consider taking day trips to Mdina, Gozo, the Three Cities, and the Blue Grotto.',
    'Check attraction opening hours, ferry schedules, seasonal events, and current entry requirements before traveling.'
  ],

  keywords: [
    'Valletta travel guide',
    'things to do in Valletta',
    'Valletta attractions',
    'Malta travel guide',
    'Malta tourism',
    'Valletta Malta',
    'Valletta itinerary',
    'Malta travel tips',
    'Malta vacation',
    'places to visit in Malta'
  ]
},
{
  id: 'ulaanbaatar-mn',
  city: 'Ulaanbaatar',
  country: 'Mongolia',
  airportCode: 'UBN',
  image: `https://images.unsplash.com/photo-1589654615616-6756a5653100?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Mongolia’s capital is the gateway to a vast land of endless steppe, ancient Buddhist traditions, nomadic culture, dramatic mountains, and some of the world’s most extraordinary wilderness experiences.',

  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'June to September',
  dailyBudget: 55,

  attractions: [
    {
      name: 'Gandan Monastery',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Sükhbaatar Square',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Museum of Mongolia',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Zaisan Memorial',
      duration: '1.5 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Bogd Khan Mountain',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Naran Tuul Market',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Chinggis Khaan International Airport (UBN) is Mongolia’s main international airport and the primary gateway to Ulaanbaatar.',
    'June to September is generally the best period for exploring Mongolia, with warmer temperatures and better conditions for outdoor adventures.',
    'Ulaanbaatar is an excellent starting point for trips into the Mongolian steppe, Gobi Desert, national parks, and traditional nomadic areas.',
    'Mongolian weather can change rapidly, so pack layers even during summer.',
    'Outside Ulaanbaatar, distances are enormous and infrastructure can be limited, so organized tours or experienced local guides are highly recommended.',
    'Staying in a traditional ger camp is one of the best ways to experience Mongolia’s nomadic culture.',
    'Try traditional dishes such as buuz, khuushuur and tsuivan, while also sampling Mongolia’s distinctive dairy products.',
    'Cash can still be useful outside major cities, although cards are increasingly accepted in Ulaanbaatar.',
    'Winter in Mongolia is extremely cold, while the summer months provide much more comfortable conditions for most travelers.',
    'Check current entry requirements, transportation options, weather conditions, and local travel information before traveling.'
  ],

  keywords: [
    'Ulaanbaatar travel guide',
    'Mongolia travel guide',
    'things to do in Ulaanbaatar',
    'Ulaanbaatar attractions',
    'Mongolia tourism',
    'Mongolia itinerary',
    'Mongolia travel tips',
    'Mongolian steppe',
    'Gobi Desert Mongolia',
    'Mongolia adventure travel'
  ]
},

{
  id: 'maputo-mz',
  city: 'Maputo',
  country: 'Mozambique',
  airportCode: 'MPM',
  image: `https://images.unsplash.com/photo-1526998758291-f87c4c1a8fff?q=80&w=875&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Mozambique’s coastal capital combines Portuguese-influenced architecture, palm-lined avenues, colorful markets, Indian Ocean beaches, lively cafés, and a distinctive blend of African, Portuguese, and South Asian influences.',

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'May to October',
  dailyBudget: 65,

  attractions: [
    {
      name: 'Maputo Central Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Maputo Fortress',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'FEIMA Arts and Crafts Market',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Maputo Elephant Reserve',
      duration: 'Full day',
      bestTime: 'Early Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Maputo Waterfront',
      duration: '2 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'National Art Museum',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Maputo International Airport (MPM) is the main international gateway to Mozambique and serves the capital.',
    'May to October is generally the dry season and is a popular period for exploring Mozambique.',
    'Maputo has a strong Portuguese influence visible in its architecture, food, language, and historic neighborhoods.',
    'Portuguese is the official language, while numerous local languages are spoken throughout the country.',
    'Seafood is a major part of Mozambican cuisine, with prawns, crab, fish, and peri-peri dishes particularly popular.',
    'Maputo is a useful starting point for exploring southern Mozambique, including beaches and wildlife areas.',
    'For trips outside the capital, arrange transportation and accommodation in advance because distances can be significant.',
    'Mozambique has some of Africa’s most spectacular beaches and marine destinations, including the Bazaruto and Quirimbas archipelagos.',
    'Use reputable transportation and keep valuables secure, particularly in crowded markets and busy public areas.',
    'Check current entry requirements, regional security conditions, transportation availability, and travel advisories before traveling.'
  ],

  keywords: [
    'Maputo travel guide',
    'things to do in Maputo',
    'Maputo attractions',
    'Mozambique travel guide',
    'Mozambique tourism',
    'Maputo Mozambique',
    'Maputo itinerary',
    'Mozambique travel tips',
    'Mozambique beaches',
    'places to visit in Mozambique'
  ]
},
{
  id: 'palikir-fm',
  city: 'Palikir',
  country: 'Micronesia',
  airportCode: 'PNI',
  image: `https://images.unsplash.com/photo-1553602932-f93f674a9aaa?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Palikir is the capital of the Federated States of Micronesia, located on the lush island of Pohnpei. The surrounding island is known for tropical rainforests, waterfalls, coral reefs, traditional culture, and spectacular Pacific landscapes.',

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'December to April',
  dailyBudget: 100,

  attractions: [
    {
      name: 'Nan Madol',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Pahn Takai Waterfall',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Sokehs Ridge',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Pohnpei Botanical Garden',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Kolonia Town',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Pohnpei Coral Reefs',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    }
  ],

  travelTips: [
    'Pohnpei International Airport (PNI) is the main airport serving Pohnpei and the capital region.',
    'Pohnpei has a tropical climate and receives substantial rainfall throughout the year, keeping its forests exceptionally lush.',
    'December to April is generally a popular period for visiting, although rain is possible year-round.',
    'Palikir is relatively small, so many visitors combine the capital with excursions around the island.',
    'Nan Madol is one of Pohnpei’s most remarkable archaeological sites and is best visited with a knowledgeable local guide.',
    'Roads around Pohnpei make a rental car or local transportation useful for reaching attractions outside Palikir.',
    'The island offers excellent opportunities for snorkeling, diving, hiking, waterfalls, and wildlife experiences.',
    'Respect local customs and ask permission before photographing people or entering culturally significant areas.',
    'Bring insect repellent, rain protection, reef-safe sunscreen, and sturdy shoes for outdoor activities.',
    'Check current flight schedules, entry requirements, weather conditions, and local travel information before traveling.'
  ],

  keywords: [
    'Palikir travel guide',
    'Micronesia travel guide',
    'things to do in Palikir',
    'Micronesia tourism',
    'Pohnpei travel',
    'Nan Madol',
    'Pohnpei attractions',
    'Micronesia vacation',
    'Micronesia travel tips',
    'Pohnpei itinerary'
  ]
},
{
  id: 'chisinau-md',
  city: 'Chișinău',
  country: 'Moldova',
  airportCode: 'RMO',
  image: `https://images.unsplash.com/photo-1629045951387-6d86eb2aad3d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Moldova’s relaxed capital combines leafy boulevards, Soviet-era architecture, historic churches, lively parks, local markets, cafés, and easy access to one of Eastern Europe’s most interesting wine regions.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Cathedral Park',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Nativity Cathedral',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Triumphal Arch',
      duration: '30 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Museum of History of Moldova',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Central Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mileștii Mici Winery',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    }
  ],

  travelTips: [
    'Chișinău International Airport (RMO) is Moldova’s main international airport and the primary gateway to the country.',
    'May to September is generally a comfortable period for sightseeing, outdoor cafés, and countryside excursions.',
    'Chișinău is relatively affordable compared with many European capitals, particularly for food and accommodation.',
    'Moldovan cuisine includes dishes such as mămăligă, plăcinte, zeamă, and a variety of locally produced cheeses and wines.',
    'Moldova has a strong wine culture, and vineyard tours are one of the country’s most popular experiences.',
    'Public transportation is inexpensive, while taxis and ride-hailing services are useful for getting around the capital.',
    'The city has many parks and green spaces, making walking an enjoyable way to explore central Chișinău.',
    'Consider taking a day trip to wineries such as Cricova or Mileștii Mici.',
    'Temperatures can vary significantly between seasons, so pack according to the time of year.',
    'Check current entry requirements, transportation schedules, border conditions, and travel information before traveling.'
  ],

  keywords: [
    'Chisinau travel guide',
    'Chișinău travel guide',
    'things to do in Chisinau',
    'Moldova travel guide',
    'Moldova tourism',
    'Chisinau attractions',
    'Moldova wine tours',
    'Chisinau itinerary',
    'Moldova travel tips',
    'places to visit in Moldova'
  ]
},
{
  id: 'majuro-mh',
  city: 'Majuro',
  country: 'Marshall Islands',
  airportCode: 'MAJ',
  image: `https://images.unsplash.com/photo-1553709708-8a9a224b1814?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Majuro is the capital of the Marshall Islands, a narrow coral atoll surrounded by the Pacific Ocean and known for turquoise waters, tropical beaches, traditional island culture, and exceptional marine scenery.',

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 100,

  attractions: [
    {
      name: 'Laura Beach',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Alele Museum and Public Library',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Uliga Beach',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Majuro Atoll',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Local Handicraft Markets',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Majuro Lagoon',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    }
  ],

  travelTips: [
    'Amata Kabua International Airport (MAJ) is the main international airport serving Majuro and the Marshall Islands.',
    'December to April is generally a popular period for visiting, although tropical weather can occur throughout the year.',
    'Majuro is a narrow atoll, so distances can be deceptively short but traffic can make journeys take longer.',
    'The Marshall Islands uses the U.S. dollar as its currency.',
    'English and Marshallese are official languages.',
    'The lagoon offers opportunities for snorkeling, diving, boating, and other marine activities.',
    'Respect local customs and traditional community practices when visiting villages and residential areas.',
    'Bring reef-safe sunscreen, insect repellent, lightweight clothing, and rain protection.',
    'Accommodation and supplies can be more expensive because the islands are geographically remote.',
    'Check current flight schedules, entry requirements, weather conditions, and local travel information before traveling.'
  ],

  keywords: [
    'Majuro travel guide',
    'Marshall Islands travel guide',
    'things to do in Majuro',
    'Marshall Islands tourism',
    'Majuro attractions',
    'Majuro vacation',
    'Marshall Islands beaches',
    'Majuro itinerary',
    'Marshall Islands travel tips',
    'Majuro lagoon'
  ]
},
{
  id: 'antananarivo-mg',
  city: 'Antananarivo',
  country: 'Madagascar',
  airportCode: 'TNR',
  image: `https://images.unsplash.com/photo-1624272909636-4995421e37e7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Madagascar’s highland capital is a fascinating introduction to the island, combining royal history, colorful markets, traditional Malagasy architecture, lively neighborhoods, and access to the country’s extraordinary wildlife and landscapes.',

  budget: 'Budget',
  tripType: 'Nature',
  bestSeason: 'April to October',
  dailyBudget: 50,

  attractions: [
    {
      name: 'Rova of Antananarivo',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Analakely Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Ambohimanga',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Tsimbazaza Zoo',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Andafiavaratra Palace',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Lemurs’ Park',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'Ivato International Airport (TNR) is Madagascar’s main international gateway and serves Antananarivo.',
    'April to October is generally the drier season and is popular for exploring Madagascar.',
    'Madagascar is one of the world’s most biodiverse destinations, with many species found nowhere else on Earth.',
    'Malagasy and French are the country’s official languages.',
    'Antananarivo is built across hills, so comfortable walking shoes are recommended.',
    'Markets are excellent places to experience local food, crafts, textiles, spices, and everyday life.',
    'For wildlife experiences outside the capital, plan transportation and guided tours in advance because distances can be considerable.',
    'Madagascar has many distinct regions, including rainforests, beaches, deserts, mountains, and national parks.',
    'Bring insect repellent, sunscreen, comfortable shoes, and lightweight clothing for outdoor excursions.',
    'Check current entry requirements, transportation conditions, health information, weather, and travel advisories before traveling.'
  ],

  keywords: [
    'Antananarivo travel guide',
    'Madagascar travel guide',
    'things to do in Antananarivo',
    'Antananarivo attractions',
    'Madagascar tourism',
    'Madagascar wildlife',
    'Madagascar itinerary',
    'Madagascar travel tips',
    'Madagascar vacation',
    'places to visit in Madagascar'
  ]
},
{
  id: 'lilongwe-mw',
  city: 'Lilongwe',
  country: 'Malawi',
  airportCode: 'LLW',
  image: `https://images.unsplash.com/photo-1663506501703-94e951c561ea?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Malawi’s relaxed capital is surrounded by greenery and offers a peaceful introduction to the country, with wildlife areas, local markets, cultural attractions, and easy access to Malawi’s famous lake and highland landscapes.',

  budget: 'Budget',
  tripType: 'Nature',
  bestSeason: 'May to October',
  dailyBudget: 50,

  attractions: [
    {
      name: 'Lilongwe Wildlife Centre',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Kumbali Cultural Village',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Paid'
    },
    {
      name: 'Old Town Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Parliament Building Area',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Nature Sanctuary',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Kamuzu Mausoleum',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Lilongwe International Airport (LLW) is the main international airport serving Malawi’s capital.',
    'May to October is the dry season and is generally the best period for wildlife viewing and outdoor activities.',
    'Lilongwe is divided broadly into an Old Town and a newer City Centre, with attractions spread across different areas.',
    'English is the official language, while Chichewa is widely spoken throughout Malawi.',
    'Malawi is known as the "Warm Heart of Africa" because of its welcoming culture and friendly communities.',
    'The country is famous for Lake Malawi, which offers beaches, snorkeling, diving, kayaking, and other water activities.',
    'Wildlife destinations such as Liwonde National Park and Majete Wildlife Reserve can be combined with a longer Malawi itinerary.',
    'Use reputable transportation and established tour operators when traveling outside Lilongwe.',
    'Carry insect repellent, sunscreen, comfortable walking shoes, and lightweight clothing.',
    'Check current entry requirements, transportation schedules, weather conditions, health information, and travel advisories before traveling.'
  ],

  keywords: [
    'Lilongwe travel guide',
    'Malawi travel guide',
    'things to do in Lilongwe',
    'Lilongwe attractions',
    'Malawi tourism',
    'Malawi wildlife',
    'Lilongwe itinerary',
    'Malawi travel tips',
    'Lake Malawi',
    'places to visit in Malawi'
  ]
},
{
  id: 'lagos-ng',
  city: 'Lagos',
  country: 'Nigeria',
  airportCode: 'LOS',
  image: `https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Nigeria’s energetic coastal megacity combines vibrant music and arts, historic neighborhoods, bustling markets, Atlantic beaches, modern restaurants, and one of West Africa’s most dynamic urban cultures.',

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 65,

  attractions: [
    {
      name: 'Lekki Conservation Centre',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Nike Art Gallery',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Museum Lagos',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Tarkwa Bay Beach',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Makoko',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Freedom Park',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'Murtala Muhammed International Airport (LOS) is the main international gateway to Lagos and one of Nigeria’s major aviation hubs.',
    'November to February is generally a more comfortable period for visiting because conditions are typically drier.',
    'Lagos is a huge and busy city, so traffic can significantly increase travel times between attractions.',
    'English is Nigeria’s official language, while Yoruba, Igbo, Hausa, and many other Nigerian languages are widely spoken.',
    'Lagos has a major food scene, with Nigerian dishes such as jollof rice, suya, pounded yam, pepper soup, and seafood widely available.',
    'Use reputable ride-hailing services, taxis, or organized transfers when moving around the city.',
    'Lekki and Victoria Island offer many restaurants, hotels, entertainment venues, and coastal attractions.',
    'Lagos has a vibrant contemporary art, fashion, music, and film scene and is an excellent destination for travelers interested in modern African culture.',
    'Keep valuables secure in crowded areas and follow local advice regarding transportation and neighborhoods.',
    'Check current entry requirements, local security conditions, weather, transportation options, and travel advisories before traveling.'
  ],

  keywords: [
    'Lagos travel guide',
    'things to do in Lagos Nigeria',
    'Lagos attractions',
    'Nigeria travel guide',
    'Nigeria tourism',
    'Lagos Nigeria',
    'Lagos itinerary',
    'Lagos travel tips',
    'Lagos beaches',
    'places to visit in Nigeria'
  ]
},
{
  id: 'alofi-nu',
  city: 'Alofi',
  country: 'Niue',
  airportCode: 'IUE',
  image: `https://images.unsplash.com/photo-1637595823309-62c331c4c4ec?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Alofi is the laid-back capital of Niue, a remote Pacific island known for dramatic limestone cliffs, crystal-clear waters, coral reefs, sea caves, tropical forests, and exceptional opportunities for snorkeling and whale watching.',

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to October',
  dailyBudget: 100,

  attractions: [
    {
      name: 'Alofi Bay',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Talava Arches',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Limahi Sea Track',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Matapa Chasm',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Hio Beach',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Limu Pools',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Hanan International Airport (IUE) is Niue’s main airport and the primary gateway to the island.',
    'May to October is generally a popular period for outdoor activities, although Niue can be visited throughout the year.',
    'Niue is a small island, so renting a car is one of the most convenient ways to explore its coastline and natural attractions.',
    'English and Niuean are the main languages used on the island.',
    'Niue is famous for its clear waters, coral reefs, sea caves, and dramatic coastal cliffs.',
    'Whale watching is particularly popular during the migration season, but sightings are never guaranteed.',
    'Swimming conditions can change quickly around the island, so follow local warnings and use caution around exposed coastal areas.',
    'Bring reef-safe sunscreen, insect repellent, comfortable walking shoes, swimwear, and rain protection.',
    'Supplies and accommodation options are limited compared with larger Pacific destinations, so booking ahead is recommended.',
    'Respect the island’s local customs, protected natural areas, and marine environment.',
    'Check current flight schedules, entry requirements, weather conditions, and local travel information before traveling.'
  ],

  keywords: [
    'Alofi travel guide',
    'Niue travel guide',
    'things to do in Alofi',
    'Niue tourism',
    'Niue attractions',
    'Niue vacation',
    'Niue beaches',
    'Niue snorkeling',
    'Niue travel tips',
    'places to visit in Niue'
  ]
},
{
  id: 'windhoek-na',
  city: 'Windhoek',
  country: 'Namibia',
  airportCode: 'WDH',
  image: `https://images.unsplash.com/photo-1586100810957-e4a1fed8c645?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Namibia’s relaxed highland capital is the gateway to one of Africa’s most spectacular landscapes, from the vast Namib Desert and towering dunes to dramatic canyons, wildlife reserves, and remote coastal scenery.',

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 75,

  attractions: [
    {
      name: 'Christ Church',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Independence Memorial Museum',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Tintenpalast',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Namibia Craft Centre',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Daan Viljoen Game Reserve',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'National Botanic Garden of Namibia',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Hosea Kutako International Airport (WDH) is the main international airport serving Windhoek.',
    'May to October is generally the dry season and one of the best periods for wildlife viewing and outdoor travel.',
    'Windhoek is an important starting point for road trips to Sossusvlei, Etosha National Park, Swakopmund, and the Skeleton Coast.',
    'Namibia is a large country with long distances between major attractions, so allow plenty of time for road travel.',
    'Renting a suitable vehicle is popular for exploring Namibia, although guided tours are a convenient alternative.',
    'English is the official language, while Afrikaans, German, Oshiwambo and other languages are also widely spoken.',
    'Namibia has excellent stargazing opportunities because of its low population density and limited light pollution.',
    'Carry plenty of water when traveling through remote areas and avoid driving long distances after dark where wildlife may be present on roads.',
    'Temperatures can vary significantly between day and night, so pack layers.',
    'Check current entry requirements, road conditions, weather, park regulations, and travel advisories before traveling.'
  ],

  keywords: [
    'Windhoek travel guide',
    'Namibia travel guide',
    'things to do in Windhoek',
    'Windhoek attractions',
    'Namibia tourism',
    'Namibia safari',
    'Namibia itinerary',
    'Namibia travel tips',
    'Sossusvlei Namibia',
    'Etosha National Park'
  ]
},
{
  id: 'yaren-nr',
  city: 'Yaren',
  country: 'Nauru',
  airportCode: 'INU',
  image: `https://images.unsplash.com/photo-1553947315-42cee3c8c771?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Yaren is the unofficial capital district of Nauru, a tiny Pacific island nation surrounded by turquoise waters and coral reefs, offering a unique glimpse into remote island life, coastal landscapes, and Micronesian culture.',

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to October',
  dailyBudget: 100,

  attractions: [
    {
      name: 'Anibare Bay',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Buada Lagoon',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Command Ridge',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Nauru Parliament House',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Japanese WWII Relics',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Nauru Coastal Road',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Nauru International Airport (INU) is the country’s main airport and is located in Yaren District.',
    'Nauru does not have an official capital; Yaren is commonly described as the de facto capital because major government offices are located there.',
    'The island is extremely small, making it possible to explore many areas by car or local transportation.',
    'English and Nauruan are widely used.',
    'Nauru has a tropical climate with warm temperatures throughout the year.',
    'Bring sunscreen, insect repellent, lightweight clothing, comfortable shoes, and rain protection.',
    'Accommodation and transportation options are limited compared with larger Pacific destinations, so planning ahead is important.',
    'The island has a fascinating history connected to phosphate mining and World War II.',
    'Respect local communities and avoid entering restricted mining or industrial areas.',
    'Check current flight schedules, entry requirements, accommodation availability, weather conditions, and travel information before traveling.'
  ],

  keywords: [
    'Yaren travel guide',
    'Nauru travel guide',
    'things to do in Nauru',
    'Nauru tourism',
    'Nauru attractions',
    'Nauru vacation',
    'Nauru travel tips',
    'Yaren Nauru',
    'Nauru itinerary',
    'places to visit in Nauru'
  ]
},
{
  id: 'panama-city-pa',
  city: 'Panama City',
  country: 'Panama',
  airportCode: 'PTY',
  image: `https://images.pexels.com/photos/5864401/pexels-photo-5864401.jpeg${cropParams}`,
  description: 'Panama is a dynamic Central American destination where modern city life meets tropical beaches, lush rainforests, Caribbean and Pacific coastlines, colonial neighborhoods, and the world-famous Panama Canal.',

  seoTitle: 'Panama Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Panama with a guide to Panama City, the Panama Canal, Casco Viejo, San Blas Islands, Bocas del Toro, tropical beaches, nature and travel tips.',

  keywords: [
    'Panama travel guide',
    'things to do in Panama',
    'Panama City travel guide',
    'Panama attractions',
    'Panama Canal',
    'Casco Viejo Panama',
    'San Blas Islands',
    'Bocas del Toro',
    'Panama tourism',
    'Panama itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'December to April',
  dailyBudget: 85,

  attractions: [
    {
      name: 'Panama Canal',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Casco Viejo',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Amador Causeway',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Metropolitan Natural Park',
      duration: '2–3 hours',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'San Blas Islands',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Bocas del Toro',
      duration: '2–3 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Panama City is the country’s capital and main international gateway.',
    'Tocumen International Airport (PTY) is Panama’s principal international airport.',
    'Spanish is the official language, while English is also widely understood in many tourist and business areas.',
    'The Panamanian balboa (PAB) is the official currency, while US dollars are used alongside it throughout the country.',
    'Panama is famous for the Panama Canal, one of the world’s most important engineering and shipping landmarks.',
    'Casco Viejo is the historic heart of Panama City, with colonial architecture, plazas, restaurants, and rooftop views.',
    'December to April is generally the drier period and is popular for sightseeing and beach trips.',
    'San Blas and Bocas del Toro offer some of Panama’s best island and Caribbean experiences.',
    'Panama has both Pacific and Caribbean coastlines, making it possible to experience very different landscapes on the same trip.',
    'Avoid demonstrations and large crowds, and check local conditions before traveling to remote areas.',
    'Parts of the Darién Region and Mosquito Gulf are currently Level 4: Do Not Travel, so avoid those areas and check the latest official advisory before planning travel beyond the main tourist routes.'
  ]
},
{
  id: 'saint-denis-re',
  city: 'Saint-Denis',
  country: 'Réunion',
  airportCode: 'RUN',
  image: `https://images.pexels.com/photos/16854207/pexels-photo-16854207.png${cropParams}`,
  description: 'Réunion is a spectacular French island in the Indian Ocean known for volcanic landscapes, dramatic mountains, tropical forests, waterfalls, black-sand beaches, Creole culture, and the spectacular Piton de la Fournaise.',

  seoTitle: 'Réunion Travel Guide: Volcanoes, Mountains, Beaches & Travel Tips',

  seoDescription: 'Explore Réunion with a guide to Saint-Denis, Piton de la Fournaise, Cirque de Mafate, Cilaos, waterfalls, beaches, hiking and travel tips.',

  keywords: [
    'Réunion travel guide',
    'things to do in Réunion',
    'Réunion Island travel guide',
    'Saint-Denis Réunion',
    'Piton de la Fournaise',
    'Cirque de Mafate',
    'Cilaos Réunion',
    'Réunion hiking',
    'Réunion beaches',
    'Réunion tourism'
  ],

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 130,

  attractions: [
    {
      name: 'Piton de la Fournaise',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    },
    {
      name: 'Saint-Denis',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Cirque de Mafate',
      duration: '1–2 days',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    },
    {
      name: 'Cilaos',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Piton des Neiges',
      duration: '1–2 days',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    },
    {
      name: 'Cascade de Grand Galet',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Réunion is a French overseas department and region in the Indian Ocean and uses the euro.',
    'Roland Garros Airport (RUN) near Saint-Denis is the main international airport.',
    'French is the official language, while Réunion Creole is widely spoken in everyday life.',
    'Réunion is one of the best destinations in the Indian Ocean for hiking, canyoning, volcano experiences, and mountain scenery.',
    'Piton de la Fournaise is one of the world’s most active volcanoes. Check volcanic alerts and trail conditions before visiting.',
    'The island has a tropical climate, but conditions vary significantly between the coast and high mountains.',
    'May to October is generally a popular period for hiking because conditions are often cooler and drier.',
    'A rental car is highly recommended for exploring different parts of the island.',
    'Mountain weather can change quickly, so carry waterproof and warm layers when hiking.',
    'Réunion has both tropical beaches and dramatic volcanic terrain, making it easy to combine relaxation with adventure.',
    'Check current weather, volcanic conditions, road closures, and official travel information before outdoor activities.'
  ]
},
{
  id: 'koror-pw',
  city: 'Koror',
  country: 'Palau',
  airportCode: 'ROR',
  image: `https://images.unsplash.com/photo-1690649416378-1335211d5864?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Koror is the gateway to Palau’s extraordinary marine world, surrounded by turquoise lagoons, limestone islands, coral reefs, hidden beaches, and some of the Pacific’s most spectacular diving and snorkeling sites.',

  budget: 'Luxury',
  tripType: 'Nature',
  bestSeason: 'December to April',
  dailyBudget: 180,

  attractions: [
    {
      name: 'Rock Islands Southern Lagoon',
      duration: 'Full day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Jellyfish Lake',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Permit/Tour dependent'
    },
    {
      name: 'Palau International Coral Reef Center',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Milky Way Lagoon',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'German Channel',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Long Beach',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Tour dependent'
    }
  ],

  travelTips: [
    'Roman Tmetuchl International Airport (ROR) is Palau’s main international airport and gateway to Koror.',
    'December to April is generally a popular period for diving, snorkeling, and outdoor activities.',
    'Palau is one of the world’s premier destinations for diving and marine wildlife.',
    'Most major attractions outside Koror require organized boat tours or other marine transportation.',
    'Permits and conservation fees may apply to certain marine attractions, so check requirements before booking tours.',
    'The Rock Islands are a UNESCO World Heritage Site and should be explored responsibly.',
    'Protect the marine environment by avoiding touching coral, disturbing wildlife, or leaving waste behind.',
    'Bring reef-safe sunscreen, waterproof bags, snorkeling equipment if needed, and protection from the tropical sun.',
    'Palau is relatively remote, so accommodation and tours can be expensive compared with many Southeast Asian destinations.',
    'Check current entry requirements, marine regulations, weather conditions, flight schedules, and local travel information before traveling.'
  ],

  keywords: [
    'Koror travel guide',
    'Palau travel guide',
    'things to do in Koror',
    'Palau tourism',
    'Palau diving',
    'Palau snorkeling',
    'Rock Islands Palau',
    'Jellyfish Lake',
    'Palau itinerary',
    'Palau travel tips'
  ]
},
{
  id: 'port-moresby-pg',
  city: 'Port Moresby',
  country: 'Papua New Guinea',
  airportCode: 'POM',
  image: `https://images.unsplash.com/photo-1615608178738-37d47d27c13d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Papua New Guinea’s coastal capital is the gateway to one of the world’s most culturally and naturally diverse countries, offering tropical landscapes, traditional cultures, coastal scenery, museums, and access to remarkable wildlife and adventure experiences.',

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 90,

  attractions: [
    {
      name: 'National Museum and Art Gallery',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Port Moresby Nature Park',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Paga Hill',
      duration: '1.5 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Ela Beach',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Parliament House',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Adventure Park PNG',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'Jacksons International Airport (POM) is the main international airport serving Port Moresby and Papua New Guinea.',
    'May to October is generally the drier period and is more comfortable for outdoor activities.',
    'Port Moresby is the main gateway for travelers continuing to other regions of Papua New Guinea.',
    'English is one of Papua New Guinea’s official languages, alongside Tok Pisin and Hiri Motu.',
    'Papua New Guinea has extraordinary cultural diversity, with hundreds of distinct languages and communities.',
    'Use reputable transportation, hotels, and established tour operators when exploring Port Moresby.',
    'For trips outside the capital, arrange transportation, accommodation, and guides in advance because infrastructure can be limited.',
    'Papua New Guinea is particularly popular for trekking, diving, birdwatching, wildlife, and cultural experiences.',
    'Respect local customs and ask permission before photographing people or entering culturally significant areas.',
    'Check current entry requirements, security conditions, health information, transportation options, and travel advisories before traveling.'
  ],

  keywords: [
    'Port Moresby travel guide',
    'Papua New Guinea travel guide',
    'things to do in Port Moresby',
    'Port Moresby attractions',
    'Papua New Guinea tourism',
    'Papua New Guinea adventure',
    'Port Moresby itinerary',
    'Papua New Guinea travel tips',
    'PNG travel',
    'places to visit in Papua New Guinea'
  ]
},
{
  id: 'asuncion-py',
  city: 'Asunción',
  country: 'Paraguay',
  airportCode: 'ASU',
  image: `https://images.unsplash.com/photo-1585318822320-300abf39f65d?q=80&w=775&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Paraguay’s riverside capital combines colonial heritage, leafy plazas, historic buildings, lively markets, local food, and a relaxed South American atmosphere that makes it an appealing base for discovering the country.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Palacio de los López',
      duration: '1 hour',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'Panteón Nacional de los Héroes',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Casa de la Independencia',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mercado 4',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Costanera de Asunción',
      duration: '2 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Museo del Barro',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Silvio Pettirossi International Airport (ASU) is the main international airport serving Asunción.',
    'May to September is generally the cooler and drier period and is comfortable for sightseeing.',
    'Asunción is relatively affordable compared with many major South American capitals.',
    'Spanish and Guaraní are Paraguay’s official languages, and both are widely used.',
    'Try traditional Paraguayan foods such as sopa paraguaya, chipa, mbejú, and grilled meats.',
    'The Costanera area is particularly pleasant around sunset and offers views toward the Paraguay River.',
    'Taxis and ride-hailing services are convenient for getting around the city.',
    'Mercado 4 is a lively traditional market where travelers can experience local food, commerce, and everyday life.',
    'Consider combining Asunción with destinations such as Encarnación, the Jesuit missions, or the natural landscapes of the Chaco.',
    'Check current entry requirements, weather conditions, transportation schedules, and local travel information before traveling.'
  ],

  keywords: [
    'Asuncion travel guide',
    'Asunción travel guide',
    'things to do in Asuncion',
    'Asuncion attractions',
    'Paraguay travel guide',
    'Paraguay tourism',
    'Asuncion itinerary',
    'Paraguay travel tips',
    'places to visit in Paraguay',
    'Asuncion vacation'
  ]
},
{
  id: 'moscow-ru',
  city: 'Moscow',
  country: 'Russia',
  airportCode: 'SVO',
  image: `https://images.unsplash.com/photo-1513326738677-b964603b136d?auto=format&fit=crop&w=1600&q=80${cropParams}`,

  description: 'Russia’s vast capital combines centuries of history with grand architecture, world-famous landmarks, extensive museums, elegant parks, and a fascinating blend of imperial heritage and modern city life.',

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 80,

  attractions: [
    {
      name: 'Red Square',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'The Kremlin',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Saint Basil’s Cathedral',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Tretyakov Gallery',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Paid'
    },
    {
      name: 'Gorky Park',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Moscow Metro',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    }
  ],

  travelTips: [
    'Sheremetyevo International Airport (SVO) is one of Moscow’s major international airports.',
    'May to September generally offers the most comfortable conditions for sightseeing, while winter provides a very different experience with snow and shorter daylight hours.',
    'Moscow is enormous, so plan attractions by neighborhood to avoid spending too much time traveling across the city.',
    'The Moscow Metro is not only an important transportation system but is also famous for its elaborate historic stations.',
    'Russian is the primary language, and English may be limited outside major tourist hotels and international businesses.',
    'Moscow has extensive public transportation, including metro, buses, and rail connections.',
    'The city has many museums, theaters, historic buildings, parks, and cultural attractions, so allow several days if you want a deeper experience.',
    'Carry identification and keep important travel documents secure.',
    'International payment options and banking services can be affected by current sanctions and financial restrictions.',
    'Check current entry requirements, flight availability, payment restrictions, local regulations, and official travel advisories before traveling.'
  ],

  keywords: [
    'Moscow travel guide',
    'Russia travel guide',
    'things to do in Moscow',
    'Moscow attractions',
    'Russia tourism',
    'Moscow itinerary',
    'Moscow travel tips',
    'Red Square',
    'Kremlin Moscow',
    'places to visit in Russia'
  ]
},
{
  id: 'kigali-rw',
  city: 'Kigali',
  country: 'Rwanda',
  airportCode: 'KGL',
  image: `https://images.unsplash.com/photo-1687986261123-b17f08f2796c?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Rwanda’s clean and remarkably green capital is a gateway to the country’s mountain landscapes, wildlife experiences, vibrant contemporary culture, and famous gorilla trekking adventures.',

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'June to September, December to February',
  dailyBudget: 70,

  attractions: [
    {
      name: 'Kigali Genocide Memorial',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Kimironko Market',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Kigali City Tower',
      duration: '1 hour',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Inema Arts Center',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Nyamirambo Neighborhood',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Tour dependent'
    },
    {
      name: 'Mount Kigali',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Kigali International Airport (KGL) is Rwanda’s main international airport and the primary gateway to the country.',
    'June to September is generally one of the best periods for gorilla trekking and outdoor activities because it falls within a drier season.',
    'Kigali is known for its cleanliness, greenery, organized streets, and relatively easy-to-navigate city center.',
    'Kinyarwanda, English, French, and Swahili are widely used in Rwanda.',
    'The Kigali Genocide Memorial is an important place of remembrance and should be visited respectfully.',
    'Rwanda is one of Africa’s leading destinations for mountain gorilla trekking, particularly in Volcanoes National Park.',
    'Gorilla trekking permits are limited and expensive, so they should be arranged well in advance.',
    'Kigali can also serve as a starting point for trips to Lake Kivu, Nyungwe National Park, and Akagera National Park.',
    'Plastic bags are restricted in Rwanda, so travelers should be prepared to follow local environmental regulations.',
    'Pack comfortable walking shoes, lightweight clothing, rain protection, and insect repellent.',
    'Check current entry requirements, park regulations, permit availability, weather conditions, and travel advisories before traveling.'
  ],

  keywords: [
    'Kigali travel guide',
    'Rwanda travel guide',
    'things to do in Kigali',
    'Kigali attractions',
    'Rwanda tourism',
    'Rwanda gorilla trekking',
    'Kigali itinerary',
    'Rwanda travel tips',
    'Volcanoes National Park',
    'places to visit in Rwanda'
  ]
},
{
  id: 'brazzaville-cg',
  city: 'Brazzaville',
  country: 'Republic of the Congo',
  airportCode: 'BZV',
  image: `https://images.unsplash.com/photo-1633960721714-48d0a9edb9cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Brazzaville, the capital of the Republic of the Congo, sits along the Congo River and offers a fascinating mix of Central African culture, riverside scenery, colorful markets, historic landmarks, local art, and access to the country’s tropical forests.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'June to September',
  dailyBudget: 50,

  attractions: [
    {
      name: 'Basilique Sainte-Anne du Congo',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Poto-Poto Market',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Pierre Savorgnan de Brazza Memorial',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Congo River Waterfront',
      duration: '2 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'National Museum of the Republic of Congo',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Djoué River',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Maya-Maya Airport (BZV) is the main international airport serving Brazzaville and the Republic of the Congo.',
    'June to September is generally the drier period and can be more comfortable for exploring the capital and planning outdoor activities.',
    'Brazzaville sits directly across the Congo River from Kinshasa in the Democratic Republic of the Congo.',
    'French is the official language, while Lingala and other local languages are also widely spoken.',
    'The city has a strong contemporary art and music scene, making it an interesting destination for travelers interested in Central African culture.',
    'Poto-Poto is one of the city’s well-known neighborhoods and is associated with local art, markets, and everyday life.',
    'Use reputable taxis, private transfers, or established tour operators when traveling around Brazzaville.',
    'If traveling outside the capital, arrange transportation and accommodation in advance because infrastructure can be limited in some areas.',
    'The Congo Basin rainforest offers exceptional wildlife and nature experiences, but trips into remote areas should be organized with experienced local operators.',
    'Keep valuables secure in busy markets and crowded public areas.',
    'Check current entry requirements, local security conditions, health information, transportation availability, and travel advisories before traveling.'
  ],

  keywords: [
    'Brazzaville travel guide',
    'Republic of Congo travel guide',
    'things to do in Brazzaville',
    'Brazzaville attractions',
    'Congo tourism',
    'Republic of Congo tourism',
    'Brazzaville itinerary',
    'Brazzaville travel tips',
    'Congo River',
    'places to visit in Republic of Congo'
  ]
},
{
  id: 'paramaribo-sr',
  city: 'Paramaribo',
  country: 'Suriname',
  airportCode: 'PBM',
  image: `https://images.unsplash.com/photo-1660758899283-3900e1d04f81?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Suriname’s multicultural capital blends Dutch colonial architecture, tropical greenery, lively markets, diverse cuisine, riverside scenery, and a fascinating mix of South American, Caribbean, Asian, African, and Indigenous influences.',

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'February to April, August to November',
  dailyBudget: 60,

  attractions: [
    {
      name: 'Historic Inner City of Paramaribo',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Fort Zeelandia',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Saint Peter and Paul Cathedral',
      duration: '45 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Waterkant',
      duration: '1.5 hours',
      bestTime: 'Sunset',
      entryFee: 'Free'
    },
    {
      name: 'Central Market',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Palmentuin',
      duration: '1 hour',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Johan Adolf Pengel International Airport (PBM) is Suriname’s main international airport and the primary gateway to Paramaribo. :contentReference[oaicite:3]{index=3}',
    'Paramaribo’s historic inner city is recognized for its distinctive Dutch colonial architecture and multicultural heritage.',
    'Dutch is the official language, while Sranan Tongo, Hindi, Javanese, Maroon languages, and other languages are also spoken.',
    'Suriname has one of the most culturally diverse populations in South America, reflected strongly in its food, festivals, architecture, and religious traditions.',
    'Try local specialties such as pom, roti, peanut soup, bakabana, and Surinamese-Javanese dishes.',
    'Paramaribo is relatively relaxed, but traffic and road conditions can vary outside the central areas.',
    'The country is heavily forested, and trips into the interior can offer exceptional rainforest and wildlife experiences.',
    'Organize transportation and accommodation in advance if traveling into remote rainforest regions.',
    'Carry insect repellent, sunscreen, lightweight clothing, and rain protection because of the tropical climate.',
    'Check current entry requirements, transportation schedules, weather conditions, and travel information before traveling.'
  ],

  keywords: [
    'Paramaribo travel guide',
    'Suriname travel guide',
    'things to do in Paramaribo',
    'Paramaribo attractions',
    'Suriname tourism',
    'Paramaribo itinerary',
    'Suriname travel tips',
    'Suriname rainforest',
    'Paramaribo vacation',
    'places to visit in Suriname'
  ]
},
{
  id: 'dakar-sn',
  city: 'Dakar',
  country: 'Senegal',
  airportCode: 'DSS',
  image: `https://images.unsplash.com/photo-1721013244188-5c4f4593ee72?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Senegal’s vibrant coastal capital blends West African culture, Atlantic beaches, colorful markets, historic landmarks, contemporary art, and a lively music and food scene.',

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'November to May',
  dailyBudget: 60,

  attractions: [
    { name: 'Gorée Island', duration: 'Half day', bestTime: 'Morning', entryFee: 'Ferry + site fees' },
    { name: 'African Renaissance Monument', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Marché Sandaga', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'IFAN Museum of African Arts', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Lac Rose', duration: 'Half day', bestTime: 'Morning', entryFee: 'Tour dependent' },
    { name: 'Ngor Beach', duration: '2–3 hours', bestTime: 'Afternoon', entryFee: 'Free' }
  ],

  travelTips: [
    'Blaise Diagne International Airport (DSS) is Senegal’s main international airport and is located outside central Dakar.',
    'November to May is generally a comfortable period for exploring Senegal.',
    'French is the official language, while Wolof and other local languages are widely spoken.',
    'Gorée Island is one of Dakar’s most important cultural and historical excursions.',
    'Try Senegalese dishes such as thieboudienne, yassa, mafé, and bissap.',
    'Use reputable taxis, ride-hailing services, or organized transfers when moving around Dakar.',
    'Markets can be busy, so keep valuables secure and be prepared for persistent vendors.',
    'Senegal can be combined with beach destinations, wildlife reserves, and cultural sites outside Dakar.',
    'Carry sunscreen, lightweight clothing, comfortable shoes, and some rain protection.',
    'Check current entry requirements, weather conditions, ferry schedules, and travel advisories before traveling.'
  ],

  keywords: [
    'Dakar travel guide',
    'Senegal travel guide',
    'things to do in Dakar',
    'Dakar attractions',
    'Senegal tourism',
    'Dakar itinerary',
    'Gorée Island',
    'Senegal travel tips',
    'Dakar beaches',
    'places to visit in Senegal'
  ]
},
{
  id: 'belgrade-rs',
  city: 'Belgrade',
  country: 'Serbia',
  airportCode: 'BEG',
  image: `https://images.unsplash.com/photo-1632343084107-353ad9e95e37?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Serbia’s energetic capital sits where the Sava and Danube rivers meet, combining historic fortresses, Orthodox churches, riverside promenades, lively cafés, nightlife, and a distinctive Balkan atmosphere.',

  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'May to September',
  dailyBudget: 55,

  attractions: [
    { name: 'Belgrade Fortress', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Knez Mihailova Street', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Church of Saint Sava', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Skadarlija', duration: '2 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Nikola Tesla Museum', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Ada Ciganlija', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Varies' }
  ],

  travelTips: [
    'Belgrade Nikola Tesla Airport (BEG) is the main international airport serving Belgrade.',
    'May to September is ideal for enjoying outdoor cafés, parks, riverside areas, and nightlife.',
    'Belgrade is relatively affordable compared with many Western European capitals.',
    'Serbian is the official language, while English is commonly understood in tourist areas.',
    'The city has an extensive public transportation network and taxis are widely available.',
    'Try Serbian specialties such as ćevapi, pljeskavica, burek, kajmak, and rakija.',
    'The confluence of the Sava and Danube is one of Belgrade’s defining geographic features.',
    'Skadarlija is particularly atmospheric in the evening and is known for traditional restaurants and music.',
    'Consider adding Novi Sad, Niš, or Serbia’s mountain regions to a longer trip.',
    'Check current entry requirements, transport schedules, weather, and travel advisories before traveling.'
  ],

  keywords: [
    'Belgrade travel guide',
    'Serbia travel guide',
    'things to do in Belgrade',
    'Belgrade attractions',
    'Serbia tourism',
    'Belgrade itinerary',
    'Belgrade nightlife',
    'Serbia travel tips',
    'Belgrade vacation',
    'places to visit in Serbia'
  ]
},
{
  id: 'basseterre-kn',
  city: 'Basseterre',
  country: 'Saint Kitts and Nevis',
  airportCode: 'SKB',
  image: `https://images.unsplash.com/photo-1645402180516-04de478b1e7b?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Basseterre is the colorful capital of Saint Kitts and Nevis, offering Caribbean beaches, historic sugar plantations, volcanic landscapes, colonial architecture, and a relaxed island atmosphere.',

  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 150,

  attractions: [
    { name: 'Brimstone Hill Fortress', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Basseterre Historic Area', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'South Friars Bay', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Mount Liamuiga', duration: 'Full day', bestTime: 'Early Morning', entryFee: 'Guide dependent' },
    { name: 'Romney Manor', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Pinney’s Beach, Nevis', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' }
  ],

  travelTips: [
    'Robert L. Bradshaw International Airport (SKB) is the main international gateway for Saint Kitts and Nevis.',
    'December to April is generally the most popular period because of the drier weather.',
    'Basseterre is compact and many central attractions can be explored on foot.',
    'English is the official language.',
    'The Eastern Caribbean dollar is widely used.',
    'Ferry services connect Saint Kitts and Nevis, making island-hopping relatively convenient.',
    'Brimstone Hill Fortress is one of the country’s most important historic attractions.',
    'The islands offer snorkeling, diving, hiking, sailing, and beach experiences.',
    'Accommodation can become expensive during peak winter periods, so book early.',
    'Check current entry requirements, ferry schedules, weather conditions, and local travel information before traveling.'
  ],

  keywords: [
    'Basseterre travel guide',
    'Saint Kitts travel guide',
    'Saint Kitts and Nevis tourism',
    'things to do in Basseterre',
    'Saint Kitts attractions',
    'Saint Kitts beaches',
    'Saint Kitts itinerary',
    'Nevis travel',
    'Caribbean vacation',
    'Saint Kitts travel tips'
  ]
},
{
  id: 'castries-lc',
  city: 'Castries',
  country: 'Saint Lucia',
  airportCode: 'UVF',
  image: `https://images.unsplash.com/photo-1738079003703-c452210314f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Saint Lucia’s capital is a lively Caribbean port surrounded by lush mountains, tropical scenery, colorful markets, and easy access to the island’s famous beaches and volcanic landscapes.',

  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 160,

  attractions: [
    { name: 'Castries Market', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Morne Fortune', duration: '2 hours', bestTime: 'Morning', entryFee: 'Varies' },
    { name: 'Vigie Beach', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Pigeon Island National Park', duration: 'Half day', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'The Pitons', duration: 'Full day', bestTime: 'Morning', entryFee: 'Tour dependent' },
    { name: 'Sulphur Springs Park', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' }
  ],

  travelTips: [
    'Hewanorra International Airport (UVF) is Saint Lucia’s main international airport.',
    'December to April is generally the driest and most popular period for visiting.',
    'Saint Lucia is mountainous, so journeys between different parts of the island can take longer than expected.',
    'English is the official language, while Saint Lucian Creole French is also widely spoken.',
    'The island is famous for the Pitons, volcanic landscapes, beaches, rainforests, and luxury resorts.',
    'Castries Market is a good place to experience local food, crafts, spices, and everyday island life.',
    'Consider renting a car or using organized transfers for exploring areas outside Castries.',
    'Try local dishes such as green fig and saltfish, cocoa tea, roti, and fresh seafood.',
    'Bring reef-safe sunscreen, comfortable shoes, swimwear, and rain protection.',
    'Check current entry requirements, attraction schedules, weather conditions, and travel advisories before traveling.'
  ],

  keywords: [
    'Castries travel guide',
    'Saint Lucia travel guide',
    'things to do in Castries',
    'Saint Lucia attractions',
    'Saint Lucia tourism',
    'Saint Lucia beaches',
    'Pitons Saint Lucia',
    'Saint Lucia itinerary',
    'Caribbean vacation',
    'Saint Lucia travel tips'
  ]
},
{
  id: 'kingstown-vc',
  city: 'Kingstown',
  country: 'Saint Vincent and the Grenadines',
  airportCode: 'SVD',
  image: `https://images.unsplash.com/photo-1605287920853-8233b5395077?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Kingstown is the lively capital of Saint Vincent and the Grenadines, surrounded by volcanic hills and Caribbean waters, with historic churches, colorful markets, tropical gardens, and access to beautiful island escapes.',

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to May',
  dailyBudget: 100,

  attractions: [
    { name: 'St. George’s Cathedral', duration: '45 minutes', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Kingstown Market', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Fort Charlotte', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Botanical Gardens', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Vermont Nature Trail', duration: '2–3 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Bequia Island', duration: 'Full day', bestTime: 'Morning', entryFee: 'Ferry dependent' }
  ],

  travelTips: [
    'Argyle International Airport (SVD) is the main international gateway to Saint Vincent and the Grenadines.',
    'December to May is generally a popular period because of the drier conditions.',
    'Kingstown is compact and many central attractions are walkable.',
    'English is the official language.',
    'The Eastern Caribbean dollar is widely used.',
    'Island-hopping is a major part of the Saint Vincent and Grenadines experience.',
    'Bequia, Mustique, Canouan, and the Tobago Cays are popular additions to longer trips.',
    'Boat schedules can be affected by weather, so leave flexibility in your itinerary.',
    'The islands offer excellent snorkeling, sailing, diving, hiking, and beach experiences.',
    'Check ferry and flight schedules, weather conditions, entry requirements, and local travel information before traveling.'
  ],

  keywords: [
    'Kingstown travel guide',
    'Saint Vincent and the Grenadines travel guide',
    'things to do in Kingstown',
    'Saint Vincent tourism',
    'Saint Vincent beaches',
    'Tobago Cays',
    'Bequia travel',
    'Saint Vincent itinerary',
    'Caribbean vacation',
    'Saint Vincent travel tips'
  ]
},
{
  id: 'apia-ws',
  city: 'Apia',
  country: 'Samoa',
  airportCode: 'APW',
  image: `https://images.unsplash.com/photo-1625224588813-cc8d5055493f?q=80&w=865&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Apia is Samoa’s relaxed Pacific capital, surrounded by lush mountains and tropical coastline and offering waterfalls, traditional villages, cultural experiences, markets, and beautiful beaches.',

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to October',
  dailyBudget: 90,

  attractions: [
    { name: 'Robert Louis Stevenson Museum', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Apia Market', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Palolo Deep Marine Reserve', duration: '3 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Papaseea Sliding Rocks', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Piula Cave Pool', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'To Sua Ocean Trench', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' }
  ],

  travelTips: [
    'Faleolo International Airport (APW) is Samoa’s primary international gateway and is approximately 40 km from Apia.',
    'May to October is generally a popular period for outdoor activities and exploring the islands.',
    'Samoa has a strong traditional culture, and visitors should respect village customs and local etiquette.',
    'Samoan and English are widely used.',
    'The Samoan tala is the local currency.',
    'Many beaches, villages, and natural attractions are outside Apia, so renting a car or arranging tours can be useful.',
    'Samoa is known for waterfalls, volcanic landscapes, coral reefs, natural swimming pools, and traditional villages.',
    'Dress modestly when visiting villages and communities, particularly away from tourist beaches.',
    'Sunday is an important day of rest and worship, so some businesses and activities may have limited availability.',
    'Check current flight schedules, entry requirements, weather conditions, attraction hours, and local travel information before traveling.'
  ],

  keywords: [
    'Apia travel guide',
    'Samoa travel guide',
    'things to do in Apia',
    'Samoa tourism',
    'Samoa attractions',
    'Samoa beaches',
    'Samoa itinerary',
    'Samoa travel tips',
    'To Sua Ocean Trench',
    'places to visit in Samoa'
  ]
},

{
  id: 'dushanbe-tj',
  city: 'Dushanbe',
  country: 'Tajikistan',
  airportCode: 'DYU',
  image: `https://images.unsplash.com/photo-1707663154646-06390356b683?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Tajikistan’s elegant capital is surrounded by dramatic mountains and offers grand avenues, traditional markets, museums, parks, and a gateway to some of Central Asia’s most spectacular mountain landscapes.',

  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 45,

  attractions: [
    { name: 'Rudaki Park', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'National Museum of Tajikistan', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Dushanbe Flagpole', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Hissar Fortress', duration: 'Half day', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Mehrgon Market', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Navruz Palace', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Varies' }
  ],

  travelTips: [
    'Dushanbe International Airport (DYU) is the main international airport serving Tajikistan’s capital.',
    'May to October is generally the best period for exploring the city and surrounding mountains.',
    'Tajikistan is highly mountainous, making it an excellent destination for hiking and adventure travel.',
    'Tajik is the official language, while Russian is also widely used.',
    'Dushanbe is relatively affordable compared with many European and major Asian capitals.',
    'Markets are good places to experience local produce, dried fruits, spices, textiles, and traditional foods.',
    'Mountain journeys can take much longer than expected because of road conditions and terrain.',
    'Consider adding the Pamir Mountains and Fann Mountains to a longer Tajikistan itinerary.',
    'Bring layers and suitable footwear for mountain excursions because weather can change quickly.',
    'Check current entry requirements, road conditions, weather, permits, and travel advisories before traveling.'
  ],

  keywords: [
    'Dushanbe travel guide',
    'Tajikistan travel guide',
    'things to do in Dushanbe',
    'Dushanbe attractions',
    'Tajikistan tourism',
    'Tajikistan mountains',
    'Dushanbe itinerary',
    'Tajikistan travel tips',
    'Pamir Mountains',
    'places to visit in Tajikistan'
  ]
},
{
  id: 'dili-tl',
  city: 'Dili',
  country: 'Timor-Leste',
  airportCode: 'DIL',
  image: `https://images.unsplash.com/photo-1717551582495-2d20feb8d730?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Timor-Leste’s coastal capital combines tropical beaches, rugged mountains, Portuguese heritage, vibrant local markets, historic landmarks, and access to some of Southeast Asia’s lesser-known diving and marine experiences.',

  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'May to November',
  dailyBudget: 55,

  attractions: [
    { name: 'Cristo Rei of Dili', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Dili Waterfront', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Santa Cruz Cemetery', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Timor Plaza', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Tais Market', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Dare Memorial Museum', duration: '1 hour', bestTime: 'Morning', entryFee: 'Varies' }
  ],

  travelTips: [
    'Presidente Nicolau Lobato International Airport (DIL) is the main international gateway to Dili and Timor-Leste. :contentReference[oaicite:3]{index=3}',
    'May to November is generally the drier period and is popular for outdoor activities.',
    'Timor-Leste is known for mountainous scenery, beaches, coral reefs, and diving.',
    'Tetum and Portuguese are official languages, while Indonesian and English are also used.',
    'Dili is relatively compact, but transportation is useful for reaching attractions outside the city.',
    'Local markets are good places to find traditional tais textiles and local food.',
    'Diving and snorkeling are particularly popular along parts of the coast.',
    'Road conditions outside Dili can vary, so allow extra time for longer journeys.',
    'Respect local customs, religious sites, and traditional communities.',
    'Check current flight schedules, entry requirements, weather, and local travel information before traveling.'
  ],

  keywords: [
    'Dili travel guide',
    'Timor-Leste travel guide',
    'things to do in Dili',
    'Dili attractions',
    'Timor-Leste tourism',
    'Timor-Leste beaches',
    'Dili itinerary',
    'Timor-Leste travel tips',
    'Timor-Leste diving',
    'places to visit in Timor-Leste'
  ]
},
{
  id: 'lome-tg',
  city: 'Lomé',
  country: 'Togo',
  airportCode: 'LFW',
  image: `https://images.unsplash.com/photo-1580470846411-b0e734c5ffd6?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Togo’s coastal capital offers colorful markets, palm-lined beaches, traditional crafts, vibrant West African culture, lively neighborhoods, and a relaxed Atlantic atmosphere.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 45,

  attractions: [
    { name: 'Grand Marché', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Lomé Cathedral', duration: '45 minutes', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'National Museum of Togo', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Akodessewa Fetish Market', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Lomé Beach', duration: '2–3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Independence Monument', duration: '45 minutes', bestTime: 'Morning', entryFee: 'Free' }
  ],

  travelTips: [
    'Gnassingbé Eyadéma International Airport (LFW) is Lomé’s main international airport. :contentReference[oaicite:4]{index=4}',
    'November to February is generally a comfortable period for exploring Lomé.',
    'French is the official language, while Ewe, Mina, and other local languages are widely spoken.',
    'Lomé has a strong market and artisan culture, particularly around textiles, crafts, food, and traditional products.',
    'Try Togolese dishes such as pâte, grilled fish, akoumé, and local sauces.',
    'Use reputable taxis or established transportation services when getting around.',
    'The city combines a busy urban center with Atlantic beaches and palm-lined coastal areas.',
    'Markets can become crowded, so keep valuables secure.',
    'Carry sunscreen, lightweight clothing, comfortable shoes, and rain protection.',
    'Check current entry requirements, local conditions, transportation, and travel advisories before traveling.'
  ],

  keywords: [
    'Lome travel guide',
    'Lomé travel guide',
    'Togo travel guide',
    'things to do in Lome',
    'Lome attractions',
    'Togo tourism',
    'Lome itinerary',
    'Togo travel tips',
    'Lome beaches',
    'places to visit in Togo'
  ]
},

{
  id: 'nukualofa-to',
  city: "Nuku'alofa",
  country: 'Tonga',
  airportCode: 'TBU',
  image: `https://images.unsplash.com/photo-1673407613168-0a1e260d7803?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Tonga’s peaceful capital offers a glimpse into Polynesian culture, royal heritage, tropical coastlines, traditional markets, and spectacular marine experiences including seasonal whale watching.',

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'June to October',
  dailyBudget: 100,

  attractions: [
    { name: 'Royal Palace', duration: '45 minutes', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Talamahu Market', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Royal Tombs', duration: '45 minutes', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Ha amonga ' + 'a Maui Trilithon', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Mapu’a’a Vaea Blowholes', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Whale Watching', duration: 'Half day', bestTime: 'Morning', entryFee: 'Tour dependent' }
  ],

  travelTips: [
    'Fua amotu International Airport (TBU) is the primary international airport serving Nuku alofa and Tongatapu.',
    'June to October is particularly popular for whale watching and outdoor activities.',
    'Tonga has a strong Polynesian culture, and visitors should respect village customs and local traditions.',
    'Tongan and English are widely used.',
    'The Tongan paʻanga is the local currency.',
    'Whale watching is seasonal and sightings are not guaranteed.',
    'Sunday is an important day of worship, and many businesses and activities operate differently.',
    'Renting a car can be useful for exploring Tongatapu beyond Nuku alofa.',
    'Bring reef-safe sunscreen, swimwear, insect repellent, and lightweight clothing.',
    'Check current flight schedules, entry requirements, whale-watching regulations, weather, and local travel information before traveling.'
  ],

  keywords: [
    "Nuku'alofa travel guide",
    'Tonga travel guide',
    'things to do in Nuku\'alofa',
    'Tonga tourism',
    'Tonga beaches',
    'Tonga whale watching',
    'Tonga attractions',
    'Tonga itinerary',
    'Tonga travel tips',
    'places to visit in Tonga'
  ]
},
{
  id: 'port-of-spain-tt',
  city: 'Port of Spain',
  country: 'Trinidad and Tobago',
  airportCode: 'POS',
  image: `https://images.unsplash.com/photo-1625180724897-8afd02c6d526?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Trinidad and Tobago’s energetic capital combines Caribbean culture, Carnival traditions, historic architecture, lively food markets, green hills, and easy access to beaches and wildlife.',

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'January to May',
  dailyBudget: 85,

  attractions: [
    { name: 'Queen’s Park Savannah', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Royal Botanic Gardens', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'National Museum and Art Gallery', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Varies' },
    { name: 'Brian Lara Promenade', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Maracas Beach', duration: 'Half day', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Caroni Bird Sanctuary', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Tour dependent' }
  ],

  travelTips: [
    'Piarco International Airport (POS) is the main international airport serving Port of Spain. :contentReference[oaicite:8]{index=8}',
    'January to May is a popular period for visiting, especially around Trinidad’s famous Carnival season.',
    'Port of Spain has a diverse food culture influenced by African, Indian, European, Chinese, and Caribbean traditions.',
    'English is the official language.',
    'Try local specialties such as doubles, roti, bake and shark, pelau, and callaloo.',
    'The Northern Range offers hiking, waterfalls, and birdwatching close to the capital.',
    'Maracas Bay is one of the most popular beach excursions from Port of Spain.',
    'Carnival is extremely popular, so accommodation and transportation should be booked well in advance.',
    'Use reputable transportation and follow local advice when exploring unfamiliar areas.',
    'Check current entry requirements, event schedules, weather conditions, and travel advisories before traveling.'
  ],

  keywords: [
    'Port of Spain travel guide',
    'Trinidad and Tobago travel guide',
    'things to do in Port of Spain',
    'Port of Spain attractions',
    'Trinidad tourism',
    'Trinidad Carnival',
    'Port of Spain itinerary',
    'Trinidad travel tips',
    'Maracas Beach',
    'places to visit in Trinidad and Tobago'
  ]
},
{
  id: 'tunis-tn',
  city: 'Tunis',
  country: 'Tunisia',
  airportCode: 'TUN',
  image: `https://images.unsplash.com/photo-1594495293394-d1073510bf22?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Tunisia’s capital combines a fascinating historic medina, French colonial architecture, lively markets, ancient ruins, Mediterranean culture, and easy access to some of North Africa’s most impressive archaeological sites.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'March to May, September to November',
  dailyBudget: 50,

  attractions: [
    { name: 'Medina of Tunis', duration: '3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Bardo National Museum', duration: '2–3 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Carthage Archaeological Site', duration: '3 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Sidi Bou Said', duration: '2–3 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Avenue Habib Bourguiba', duration: '1.5 hours', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Zitouna Mosque', duration: '1 hour', bestTime: 'Morning', entryFee: 'Varies' }
  ],

  travelTips: [
    'Tunis-Carthage International Airport (TUN) is the main airport serving Tunis. :contentReference[oaicite:10]{index=10}',
    'March to May and September to November are generally comfortable periods for sightseeing.',
    'The Medina of Tunis is a UNESCO World Heritage area and is best explored slowly on foot.',
    'Arabic is the official language, while French is widely used.',
    'Tunis is a good base for visiting Carthage, Sidi Bou Said, and other historic destinations around the capital.',
    'Try Tunisian specialties such as couscous, brik, harissa-based dishes, and fresh seafood.',
    'The souks of the Medina are excellent for traditional crafts, textiles, spices, perfumes, and souvenirs.',
    'Summer can be very hot, especially when visiting archaeological sites with limited shade.',
    'Dress respectfully when visiting religious sites.',
    'Check current entry requirements, attraction opening hours, weather conditions, and travel advisories before traveling.'
  ],

  keywords: [
    'Tunis travel guide',
    'Tunisia travel guide',
    'things to do in Tunis',
    'Tunis attractions',
    'Tunisia tourism',
    'Carthage Tunisia',
    'Sidi Bou Said',
    'Tunis itinerary',
    'Tunisia travel tips',
    'places to visit in Tunisia'
  ]
},
{
  id: 'kampala-ug',
  city: 'Kampala',
  country: 'Uganda',
  airportCode: 'EBB',
  image: `https://images.unsplash.com/photo-1675756261486-09bd1e0f6c8a?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Uganda’s energetic capital is the gateway to the country’s remarkable wildlife, lush landscapes, tropical lakes, and mountain adventures, while offering lively markets, cultural experiences, and a taste of East African city life.',

  budget: 'Budget',
  tripType: 'Nature',
  bestSeason: 'June to September, December to February',
  dailyBudget: 50,

  attractions: [
    { name: 'Uganda Museum', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Kasubi Tombs', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Gaddafi National Mosque', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Paid' },
    { name: 'Ndere Cultural Centre', duration: '2–3 hours', bestTime: 'Evening', entryFee: 'Paid' },
    { name: 'Craft Village', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Lake Victoria', duration: 'Half day', bestTime: 'Morning', entryFee: 'Varies' }
  ],

  travelTips: [
    'Entebbe International Airport (EBB) is Uganda’s main international gateway and is located near Entebbe, rather than central Kampala.',
    'June to September and December to February are generally popular periods for wildlife and outdoor activities.',
    'Kampala is busy and traffic can be heavy, so allow extra time when traveling across the city.',
    'English and Swahili are official languages, while Luganda and many other local languages are widely spoken.',
    'Uganda is famous for gorilla trekking, chimpanzee experiences, national parks, and exceptional birdwatching.',
    'Gorilla trekking permits should be arranged well in advance because availability is limited.',
    'Use reputable taxis, ride-hailing services, or established tour operators.',
    'Try local dishes such as matoke, rolex, posho, and Ugandan grilled meats.',
    'Carry insect repellent, sunscreen, comfortable walking shoes, and lightweight rain protection.',
    'Check current entry requirements, park permits, health information, weather conditions, and travel advisories before traveling.'
  ],

  keywords: [
    'Kampala travel guide',
    'Uganda travel guide',
    'things to do in Kampala',
    'Kampala attractions',
    'Uganda tourism',
    'Uganda safari',
    'Uganda gorilla trekking',
    'Kampala itinerary',
    'Uganda travel tips',
    'places to visit in Uganda'
  ]
},
{
  id: 'kyiv-ua',
  city: 'Kyiv',
  country: 'Ukraine',
  airportCode: 'KBP',
  image: `https://images.unsplash.com/photo-1639341267320-2d062b250c0d?q=80&w=929&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Ukraine’s historic capital is known for golden-domed churches, grand boulevards, centuries of Eastern European history, distinctive architecture, museums, parks, and a vibrant cultural identity.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to September',
  dailyBudget: 50,

  attractions: [
    { name: 'Saint Sophia Cathedral', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Kyiv Pechersk Lavra', duration: '3 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Maidan Nezalezhnosti', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Andriyivskyi Descent', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Free' },
    { name: 'Golden Gate', duration: '1 hour', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'National Art Museum of Ukraine', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Paid' }
  ],

  travelTips: [
    'Kyiv Boryspil International Airport (KBP) is Ukraine’s major international airport, but civilian passenger flights are currently affected by the closure of Ukrainian airspace.',
    'Do not assume that flights to Kyiv are operating simply because the airport remains listed in aviation databases.',
    'May to September is normally a pleasant period for sightseeing, although current conditions should always be checked.',
    'Ukrainian is the official language.',
    'Kyiv has an extensive metro and public transportation network.',
    'Ukraine has a rich architectural and cultural heritage, including historic churches, museums, monuments, and public squares.',
    'Current security conditions can vary significantly by region.',
    'Follow official local instructions and avoid restricted or dangerous areas.',
    'Travel planning should account for possible changes to transportation, curfews, infrastructure, and access.',
    'Check current government travel advisories, airport status, security conditions, and transportation information immediately before any trip.'
  ],

  keywords: [
    'Kyiv travel guide',
    'Ukraine travel guide',
    'things to do in Kyiv',
    'Kyiv attractions',
    'Ukraine tourism',
    'Kyiv itinerary',
    'Kyiv travel tips',
    'Kyiv sightseeing',
    'Ukraine culture',
    'places to visit in Ukraine'
  ]
},
{
  id: 'montevideo-uy',
  city: 'Montevideo',
  country: 'Uruguay',
  airportCode: 'MVD',
  image: `https://images.unsplash.com/photo-1676164539863-612beb931dfb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Uruguay’s relaxed capital combines historic neighborhoods, Atlantic beaches, waterfront promenades, colorful markets, elegant architecture, excellent food, and a laid-back South American atmosphere.',

  budget: 'Moderate',
  tripType: 'City',
  bestSeason: 'October to April',
  dailyBudget: 65,

  attractions: [
    { name: 'Ciudad Vieja', duration: '2–3 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Mercado del Puerto', duration: '1.5 hours', bestTime: 'Lunch', entryFee: 'Free' },
    { name: 'Rambla de Montevideo', duration: '2 hours', bestTime: 'Sunset', entryFee: 'Free' },
    { name: 'Plaza Independencia', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Teatro Solís', duration: '1.5 hours', bestTime: 'Afternoon', entryFee: 'Paid' },
    { name: 'Pocitos Beach', duration: '3 hours', bestTime: 'Afternoon', entryFee: 'Free' }
  ],

  travelTips: [
    'Carrasco International Airport (MVD) is the main international airport serving Montevideo.',
    'October to April is popular for enjoying the city’s beaches, waterfront, and outdoor spaces.',
    'Montevideo is relatively relaxed compared with many larger South American capitals.',
    'Spanish is the official language.',
    'Uruguay is famous for beef, asado, mate, chivitos, and excellent local wines.',
    'The Rambla is one of the city’s defining features and is ideal for walking, cycling, and sunset views.',
    'Ciudad Vieja is best explored on foot and contains many historic buildings, plazas, cafés, and galleries.',
    'Punta del Este and Colonia del Sacramento are popular additions to a longer Uruguay itinerary.',
    'Summer is the busiest period along the coast, so accommodation prices can increase.',
    'Check current entry requirements, weather conditions, transport schedules, and local travel information before traveling.'
  ],

  keywords: [
    'Montevideo travel guide',
    'Uruguay travel guide',
    'things to do in Montevideo',
    'Montevideo attractions',
    'Uruguay tourism',
    'Montevideo beaches',
    'Montevideo itinerary',
    'Uruguay travel tips',
    'Montevideo vacation',
    'places to visit in Uruguay'
  ]
},
{
  id: 'tashkent-uz',
  city: 'Tashkent',
  country: 'Uzbekistan',
  airportCode: 'TAS',
  image: `https://images.unsplash.com/photo-1622021109028-8ba1d5374161?q=80&w=726&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Uzbekistan’s modern capital combines grand avenues, Islamic architecture, lively bazaars, Soviet-era landmarks, museums, and excellent transport connections to the legendary Silk Road cities of Samarkand, Bukhara, and Khiva.',

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'April to May, September to October',
  dailyBudget: 45,

  attractions: [
    { name: 'Chorsu Bazaar', duration: '2 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Hazrati Imam Complex', duration: '2 hours', bestTime: 'Morning', entryFee: 'Varies' },
    { name: 'Amir Timur Square', duration: '1 hour', bestTime: 'Evening', entryFee: 'Free' },
    { name: 'Tashkent Metro', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'State Museum of History of Uzbekistan', duration: '2 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Minor Mosque', duration: '1 hour', bestTime: 'Afternoon', entryFee: 'Free' }
  ],

  travelTips: [
    'Islam Karimov Tashkent International Airport (TAS) is Uzbekistan’s main international gateway.',
    'April to May and September to October are generally comfortable periods for exploring Uzbekistan.',
    'Tashkent is an excellent starting point for visiting the historic Silk Road cities of Samarkand, Bukhara, and Khiva.',
    'Uzbek is the official language, while Russian is also widely used.',
    'The Uzbek soums is the local currency.',
    'The Tashkent Metro is both practical transportation and an attraction because of its distinctive station architecture.',
    'Uzbek cuisine includes plov, samsa, lagman, shashlik, and a wide variety of fresh breads and pastries.',
    'High-speed trains make it relatively convenient to connect Tashkent with other major Uzbek destinations.',
    'Summer can become extremely hot, so spring and autumn are generally more comfortable for sightseeing.',
    'Check current entry requirements, train schedules, weather conditions, attraction opening hours, and travel information before traveling.'
  ],

  keywords: [
    'Tashkent travel guide',
    'Uzbekistan travel guide',
    'things to do in Tashkent',
    'Tashkent attractions',
    'Uzbekistan tourism',
    'Silk Road Uzbekistan',
    'Tashkent itinerary',
    'Uzbekistan travel tips',
    'Samarkand Bukhara Khiva',
    'places to visit in Uzbekistan'
  ]
},
{
  id: 'port-vila-vu',
  city: 'Port Vila',
  country: 'Vanuatu',
  airportCode: 'VLI',
  image: `https://images.unsplash.com/photo-1552643450-44f3e5c7d875?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Vanuatu’s tropical capital is a gateway to turquoise lagoons, volcanic landscapes, coral reefs, waterfalls, traditional Melanesian culture, and some of the South Pacific’s most memorable island adventures.',

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'May to October',
  dailyBudget: 100,

  attractions: [
    { name: 'Mele Cascades', duration: '3 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Port Vila Market', duration: '1.5 hours', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Iririki Island', duration: 'Half day', bestTime: 'Morning', entryFee: 'Varies' },
    { name: 'Blue Lagoon', duration: '3 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Ekasup Cultural Village', duration: '2–3 hours', bestTime: 'Afternoon', entryFee: 'Paid' },
    { name: 'Hideaway Island', duration: 'Half day', bestTime: 'Morning', entryFee: 'Tour dependent' }
  ],

  travelTips: [
    'Bauerfield International Airport (VLI) is the main international airport serving Port Vila and Efate.',
    'May to October is generally the drier period and is popular for outdoor activities.',
    'Vanuatu is known for diving, snorkeling, beaches, waterfalls, volcanoes, and traditional Melanesian culture.',
    'Bislama, English, and French are the country’s official languages.',
    'Port Vila is a convenient base for exploring Efate and arranging trips to other islands.',
    'Respect local village customs and ask permission before photographing people or participating in cultural activities.',
    'Marine conditions can change quickly, so follow local advice when swimming, snorkeling, or diving.',
    'Bring reef-safe sunscreen, insect repellent, comfortable shoes, swimwear, and rain protection.',
    'Island transportation can be limited, so arrange transfers and tours in advance.',
    'Check current flight schedules, entry requirements, weather conditions, and travel advisories before traveling.'
  ],

  keywords: [
    'Port Vila travel guide',
    'Vanuatu travel guide',
    'things to do in Port Vila',
    'Vanuatu tourism',
    'Port Vila attractions',
    'Vanuatu beaches',
    'Vanuatu diving',
    'Port Vila itinerary',
    'Vanuatu travel tips',
    'places to visit in Vanuatu'
  ]
},
{
  id: 'caracas-ve',
  city: 'Caracas',
  country: 'Venezuela',
  airportCode: 'CCS',
  image: `https://images.unsplash.com/photo-1722271551043-fef6d612097d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Venezuela’s capital sits in a dramatic valley beneath Ávila Mountain and combines museums, historic squares, lively cultural spaces, modern neighborhoods, and access to the country’s spectacular natural landscapes.',

  budget: 'Budget',
  tripType: 'City',
  bestSeason: 'December to April',
  dailyBudget: 55,

  attractions: [
    { name: 'Avila National Park', duration: 'Half day', bestTime: 'Morning', entryFee: 'Varies' },
    { name: 'Plaza Bolívar', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'National Pantheon of Venezuela', duration: '1 hour', bestTime: 'Morning', entryFee: 'Free' },
    { name: 'Museum of Contemporary Art', duration: '2 hours', bestTime: 'Afternoon', entryFee: 'Paid' },
    { name: 'Teleférico de Caracas', duration: '3 hours', bestTime: 'Morning', entryFee: 'Paid' },
    { name: 'Ciudad Universitaria de Caracas', duration: '2 hours', bestTime: 'Morning', entryFee: 'Varies' }
  ],

  travelTips: [
    'Simón Bolívar International Airport (CCS) is Venezuela’s main international airport and serves Caracas.',
    'December to April is generally a popular period for exploring Caracas and outdoor areas.',
    'Caracas sits in a valley surrounded by mountains, giving the city a distinctive landscape.',
    'Spanish is the official language.',
    'Use reputable transportation and avoid accepting rides or services from unknown individuals.',
    'The city has significant cultural attractions, museums, parks, and historic areas.',
    'Ávila National Park offers hiking and panoramic views over Caracas and the Caribbean coast.',
    'Cash availability, payment systems, transportation, and other services can vary, so plan accordingly.',
    'Venezuela has important security considerations, and conditions can change quickly.',
    'Check current entry requirements, airport operations, local security conditions, currency and payment information, and official travel advisories immediately before traveling.'
  ],

  keywords: [
    'Caracas travel guide',
    'Venezuela travel guide',
    'things to do in Caracas',
    'Caracas attractions',
    'Venezuela tourism',
    'Caracas itinerary',
    'Venezuela travel tips',
    'Avila National Park',
    'Caracas Venezuela',
    'places to visit in Venezuela'
  ]
},
{
  id: 'lusaka-zm',
  city: 'Lusaka',
  country: 'Zambia',
  airportCode: 'LUN',
  image: `https://images.unsplash.com/photo-1643580018337-5af73fe3c21a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${cropParams}`,

  description: 'Zambia’s capital is a relaxed gateway to spectacular African wildlife, national parks, waterfalls, cultural experiences, and the legendary Victoria Falls region.',

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to October',
  dailyBudget: 65,

  attractions: [
    {
      name: 'Lusaka National Museum',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Lusaka National Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'Kabwata Cultural Village',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Lusaka City Market',
      duration: '1.5 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Munda Wanga Environmental Park',
      duration: '3 hours',
      bestTime: 'Morning',
      entryFee: 'Paid'
    },
    {
      name: 'East Park Mall',
      duration: '1.5 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Kenneth Kaunda International Airport (LUN) is Zambia’s main international gateway and is located in Lusaka.',
    'May to October is generally the dry season and one of the best periods for wildlife viewing.',
    'Lusaka is a major starting point for trips to Zambia’s national parks and other regions.',
    'English is the official language, while Bemba, Nyanja, Tonga, Lozi, and other local languages are widely spoken.',
    'Zambia is famous for its wildlife, safari experiences, rivers, waterfalls, and Victoria Falls.',
    'South Luangwa, Lower Zambezi, and Kafue are among the country’s major safari destinations.',
    'Victoria Falls is located near Livingstone, which has its own international airport, Harry Mwaanga Nkumbula International Airport.',
    'Use reputable safari operators and transportation providers when traveling outside Lusaka.',
    'Carry insect repellent, sunscreen, comfortable walking shoes, and lightweight clothing for outdoor activities.',
    'Check current entry requirements, park fees, weather conditions, road conditions, and travel advisories before traveling.'
  ],

  keywords: [
    'Lusaka travel guide',
    'Zambia travel guide',
    'things to do in Lusaka',
    'Lusaka attractions',
    'Zambia tourism',
    'Zambia safari',
    'Victoria Falls Zambia',
    'Lusaka itinerary',
    'Zambia travel tips',
    'places to visit in Zambia'
  ]
},
{
  id: 'st-johns-ag',
  city: 'St. John\'s',
  country: 'Antigua and Barbuda',
  airportCode: 'ANU',
  image: `https://images.pexels.com/photos/16968907/pexels-photo-16968907.jpeg${cropParams}`,
  description: 'Antigua and Barbuda is a Caribbean twin-island destination known for beautiful beaches, turquoise waters, sailing, historic English Harbour, Nelson’s Dockyard, colorful local culture, and the quieter natural beauty of Barbuda.',

  seoTitle: 'Antigua and Barbuda Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore Antigua and Barbuda with a guide to the best beaches, Nelson’s Dockyard, English Harbour, Shirley Heights, Barbuda, local food, attractions and practical travel tips.',

  keywords: [
    'Antigua and Barbuda travel guide',
    'things to do in Antigua',
    'Antigua attractions',
    'Antigua tourism',
    'Barbuda travel guide',
    'best places to visit in Antigua',
    'Antigua beaches',
    'Nelson’s Dockyard',
    'English Harbour Antigua',
    'Shirley Heights Antigua',
    'Caribbean travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 180,

  attractions: [
    {
      name: 'Nelson’s Dockyard',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Shirley Heights',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Dickenson Bay',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Half Moon Bay',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'St. John’s',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Barbuda',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Antigua is known for its many beaches, and exploring different parts of the coastline is one of the best ways to experience the island.',
    'English Harbour and Nelson’s Dockyard are highlights for travelers interested in history, sailing, and scenic harbor views.',
    'Visit Shirley Heights in the late afternoon for panoramic views over English Harbour and the surrounding coastline.',
    'Barbuda offers a quieter experience with long beaches, natural landscapes, and important wildlife areas.',
    'Antigua and Barbuda has a tropical climate, with December to April generally being a popular period for drier weather.',
    'The Eastern Caribbean dollar (XCD) is the official currency, while US dollars are also commonly accepted in many tourist areas.',
    'Antigua drives on the left side of the road, so take extra care if renting a car.',
    'Try local Caribbean dishes and fresh seafood rather than relying only on resort restaurants.',
    'If planning boat trips or excursions to Barbuda, check schedules and weather conditions in advance.',
    'Travelers should check the latest official entry requirements and travel advice before visiting.'
  ]
},
{
  id: 'bridgetown-bb',
  city: 'Bridgetown',
  country: 'Barbados',
  airportCode: 'BGI',
  image: `https://images.pexels.com/photos/32115331/pexels-photo-32115331.jpeg${cropParams}`,
  description: 'Barbados blends beautiful Caribbean beaches with a rich Bajan culture, historic Bridgetown, lively food traditions, rum heritage, coastal landscapes, and a relaxed island atmosphere.',

  seoTitle: 'Barbados Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore Barbados with a guide to Bridgetown, Carlisle Bay, Harrison’s Cave, Bathsheba, Oistins, historic sites, beaches, local food and travel tips.',

  keywords: [
    'Barbados travel guide',
    'things to do in Barbados',
    'Barbados attractions',
    'Barbados tourism',
    'Bridgetown travel guide',
    'best places to visit in Barbados',
    'Barbados beaches',
    'Carlisle Bay Barbados',
    'Bathsheba Barbados',
    'Oistins Barbados',
    'Barbados vacation',
    'Caribbean travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 160,

  attractions: [
    {
      name: 'Historic Bridgetown and Its Garrison',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Carlisle Bay',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bathsheba',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Harrison’s Cave',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Oistins',
      duration: '2–3 hours',
      bestTime: 'Evening',
      entryFee: 'Free'
    },
    {
      name: 'Barbados Museum & Historical Society',
      duration: '1.5–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Bridgetown and its Garrison is a UNESCO World Heritage Site and an excellent starting point for exploring Barbados’ history and culture.',
    'Carlisle Bay is popular for swimming, snorkeling, and seeing marine life in relatively calm waters.',
    'Visit Bathsheba on the east coast for dramatic Atlantic scenery, rock formations, and a completely different side of Barbados.',
    'Oistins is known for its lively food scene and the popular Friday night Fish Fry.',
    'Barbados is the birthplace of rum, so consider visiting a rum heritage site or distillery during your trip.',
    'English is the official language, while Bajan is commonly spoken in everyday conversation.',
    'The Barbadian dollar (BBD) is the local currency, and major tourist areas generally accept international cards.',
    'Barbados drives on the left side of the road, so take extra care if renting a car.',
    'December to April is generally the drier and more popular travel period, while the wetter season runs through much of June to November. :contentReference[oaicite:1]{index=1}',
    'If traveling during the wetter months, check the latest weather and official travel information before planning outdoor activities.'
  ]
},
{
  id: 'cotonou-bj',
  city: 'Cotonou',
  country: 'Benin',
  airportCode: 'COO',
  image: `https://images.pexels.com/photos/8655016/pexels-photo-8655016.jpeg${cropParams}`,
  description: 'Benin’s largest city and economic center, Cotonou combines Atlantic beaches, lively markets, West African culture, vibrant street life, local cuisine, and easy access to historic destinations across southern Benin.',

  seoTitle: 'Cotonou Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Cotonou, Benin with a guide to markets, beaches, local culture, museums, nearby attractions, food, transportation and practical travel tips.',

  keywords: [
    'Cotonou travel guide',
    'things to do in Cotonou',
    'Cotonou attractions',
    'Cotonou tourism',
    'Benin travel guide',
    'best places to visit in Cotonou',
    'Cotonou beaches',
    'Cotonou market',
    'Benin tourism',
    'West Africa travel'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Dantokpa Market',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Fidjrossè Beach',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Cotonou Cathedral',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Artisanal Center of Cotonou',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Ganvié Floating Village',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Ouidah',
      duration: 'Full day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Cotonou is the main commercial and transportation hub of Benin and a practical base for exploring southern parts of the country.',
    'Dantokpa Market offers an intense introduction to local commerce, food, crafts, and everyday life.',
    'Ganvié, a village built on Lake Nokoué, makes an interesting day trip from Cotonou.',
    'Ouidah is worth visiting for its history, cultural heritage, museums, and connection to the history of the transatlantic slave trade.',
    'French is the official language, while Fon, Yoruba, and other local languages are widely spoken.',
    'The West African CFA franc (XOF) is the local currency.',
    'Keep valuables secure in crowded markets and busy public areas.',
    'Travel conditions can vary outside major cities, so check current local conditions before traveling to remote areas.'
  ]
},

{
  id: 'paro-bt',
  city: 'Paro',
  country: 'Bhutan',
  airportCode: 'PBH',
  image: `https://images.pexels.com/photos/37908899/pexels-photo-37908899.jpeg${cropParams}`,
  description: 'Paro is Bhutan’s historic gateway, surrounded by Himalayan mountains and known for its traditional architecture, ancient monasteries, peaceful valleys, and access to the iconic Tiger’s Nest Monastery.',

  seoTitle: 'Paro Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Paro, Bhutan with a guide to Tiger’s Nest Monastery, Paro Dzong, traditional architecture, Himalayan landscapes, local culture and travel tips.',

  keywords: [
    'Paro travel guide',
    'things to do in Paro',
    'Paro Bhutan attractions',
    'Bhutan travel guide',
    'Tiger Nest Monastery',
    'Paro Taktsang',
    'Paro Dzong',
    'Bhutan tourism',
    'best places to visit in Bhutan',
    'Bhutan itinerary'
  ],

  budget: 'Luxury',
  tripType: 'Culture',
  bestSeason: 'March to May, September to November',
  dailyBudget: 200,

  attractions: [
    {
      name: 'Paro Taktsang (Tiger’s Nest Monastery)',
      duration: '5–7 hours',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Rinpung Dzong',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'National Museum of Bhutan',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Kyichu Lhakhang',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Paro Valley',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Drukgyel Dzong',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Paro is home to Bhutan’s main international airport and is the most common starting point for international visitors.',
    'The hike to Tiger’s Nest is challenging for some travelers, so allow several hours and wear comfortable walking shoes.',
    'Bhutan has a strong Buddhist cultural tradition. Dress respectfully when visiting monasteries, temples, and dzongs.',
    'The Bhutanese ngultrum (BTN) is the local currency and is pegged to the Indian rupee.',
    'Bhutan uses a regulated tourism system, and travelers should check the latest visa, entry, and Sustainable Development Fee requirements before booking.',
    'Spring and autumn generally offer excellent conditions for sightseeing and mountain views.',
    'Weather can change quickly in the mountains, so carry layers even during warmer months.',
    'Photography rules can vary inside religious buildings, so follow local instructions.'
  ]
},

{
  id: 'la-paz-bo',
  city: 'La Paz',
  country: 'Bolivia',
  airportCode: 'LPB',
  image: `https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1600&auto=format&fit=crop${cropParams}`,
  description: 'La Paz is Bolivia’s dramatic high-altitude capital, surrounded by the Andes and known for steep streets, colorful markets, Indigenous culture, historic neighborhoods, cable cars, and spectacular mountain scenery.',

  seoTitle: 'La Paz Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore La Paz, Bolivia with a guide to the Witches’ Market, Mi Teleférico, Moon Valley, historic streets, Indigenous culture, attractions and travel tips.',

  keywords: [
    'La Paz travel guide',
    'things to do in La Paz Bolivia',
    'La Paz attractions',
    'La Paz Bolivia tourism',
    'Bolivia travel guide',
    'Witches Market La Paz',
    'Mi Teleferico',
    'Valle de la Luna',
    'best places to visit in La Paz',
    'Bolivia itinerary'
  ],

  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Mi Teleférico',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Witches’ Market',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Plaza Murillo',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Valle de la Luna',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Mercado Rodríguez',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Valle de las Ánimas',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'La Paz sits at a very high elevation, so give yourself time to acclimatize before doing strenuous activities.',
    'Mi Teleférico is one of the best ways to see the city and travel between different areas while avoiding some of the steep roads.',
    'The Witches’ Market offers an interesting look at traditional Andean beliefs and local crafts.',
    'La Paz has a strong Indigenous cultural identity, which is reflected in its markets, festivals, food, clothing, and architecture.',
    'The Bolivian boliviano (BOB) is the local currency.',
    'Temperatures can change quickly because of the altitude, so carry layers even on sunny days.',
    'Use extra caution with valuables in crowded markets and tourist areas.',
    'If visiting high-altitude destinations such as Lake Titicaca or Uyuni after La Paz, plan your route so your body has time to adjust.',
    'Check current transportation conditions and official travel advice before traveling to remote areas.'
  ]
},
{
  id: 'sarajevo-ba',
  city: 'Sarajevo',
  country: 'Bosnia and Herzegovina',
  airportCode: 'SJJ',
  image: `https://images.pexels.com/photos/33794258/pexels-photo-33794258.jpeg${cropParams}`,
  description: 'Sarajevo is a captivating Balkan capital where Ottoman-era streets, Austro-Hungarian architecture, mountain landscapes, lively markets, and diverse cultural traditions come together.',

  seoTitle: 'Sarajevo Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Sarajevo, Bosnia and Herzegovina with a guide to Baščaršija, Latin Bridge, Sarajevo Tunnel, Yellow Fortress, local food, history and travel tips.',

  keywords: [
    'Sarajevo travel guide',
    'things to do in Sarajevo',
    'Sarajevo attractions',
    'Bosnia and Herzegovina travel guide',
    'Baščaršija Sarajevo',
    'Latin Bridge Sarajevo',
    'Sarajevo tourism',
    'best places to visit in Sarajevo',
    'Sarajevo itinerary',
    'Balkan travel guide'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to June, September to October',
  dailyBudget: 50,

  attractions: [
    {
      name: 'Baščaršija Old Bazaar',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Latin Bridge',
      duration: '30 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Yellow Fortress',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Sarajevo Tunnel Museum',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Gazi Husrev-beg Mosque',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Trebević Mountain',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Baščaršija is the historic heart of Sarajevo and is best explored on foot.',
    'Sarajevo combines Ottoman, Austro-Hungarian, and modern influences, making its architecture and neighborhoods particularly interesting.',
    'Try local specialties such as ćevapi, burek, and Bosnian coffee.',
    'The convertible mark (BAM) is the local currency.',
    'The city is surrounded by mountains, so bring comfortable walking shoes if you plan to explore viewpoints and trails.',
    'Respect local customs when visiting mosques and religious sites.',
    'Bosnia and Herzegovina still has some areas where landmines may be present. Stay on marked paths and follow local safety guidance when hiking outside established areas.',
    'Check current transportation and travel information before traveling to remote parts of the country.'
  ]
},

{
  id: 'gaborone-bw',
  city: 'Gaborone',
  country: 'Botswana',
  airportCode: 'GBE',
  image: `https://images.pexels.com/photos/5715513/pexels-photo-5715513.jpeg${cropParams}`,
  description: 'Botswana is a premier African safari destination known for the Okavango Delta, Chobe National Park, vast wilderness, incredible wildlife, and a strong tradition of conservation.',

  seoTitle: 'Botswana Travel Guide: Safari, Attractions & Travel Tips',

  seoDescription: 'Explore Botswana with a guide to the Okavango Delta, Chobe National Park, Makgadikgadi Pans, wildlife, safari experiences and practical travel tips.',

  keywords: [
    'Botswana travel guide',
    'Botswana safari',
    'things to do in Botswana',
    'Botswana attractions',
    'Okavango Delta',
    'Chobe National Park',
    'Botswana tourism',
    'African safari',
    'Botswana wildlife',
    'best places to visit in Botswana'
  ],

  budget: 'Luxury',
  tripType: 'Adventure',
  bestSeason: 'May to October',
  dailyBudget: 300,

  attractions: [
    {
      name: 'Okavango Delta',
      duration: '2–3 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Chobe National Park',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Moremi Game Reserve',
      duration: '1–2 days',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Makgadikgadi Pans',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Central Kalahari Game Reserve',
      duration: '2–3 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Gaborone',
      duration: '1 day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Botswana is primarily a wildlife and wilderness destination, with safari experiences forming the main focus of many trips.',
    'The Okavango Delta is famous for its waterways, wildlife, and traditional mokoro canoe experiences.',
    'Chobe National Park is particularly well known for large elephant populations and river-based wildlife viewing.',
    'The Botswana pula (BWP) is the local currency.',
    'Safari accommodation ranges from campsites to high-end luxury lodges, so costs can vary significantly.',
    'The dry season from May to October is popular for wildlife viewing because animals tend to gather around available water sources.',
    'Follow your guide’s instructions around wildlife and never approach wild animals independently.',
    'Malaria precautions may be recommended for some areas. Consult a qualified travel-health professional before visiting.',
    'Remote safari areas have limited connectivity and services, so prepare for an experience focused on nature rather than city conveniences.'
  ]
},

{
  id: 'bandar-seri-begawan-bn',
  city: 'Bandar Seri Begawan',
  country: 'Brunei',
  airportCode: 'BWN',
  image: `https://images.pexels.com/photos/35851017/pexels-photo-35851017.jpeg${cropParams}`,
  description: 'Bandar Seri Begawan is Brunei’s peaceful capital, known for grand Islamic architecture, the Kampong Ayer water village, royal heritage, tropical rainforest, and a relaxed Southeast Asian atmosphere.',

  seoTitle: 'Brunei Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Brunei with a guide to Bandar Seri Begawan, Sultan Omar Ali Saifuddien Mosque, Kampong Ayer, Royal Regalia Museum, Ulu Temburong and travel tips.',

  keywords: [
    'Brunei travel guide',
    'things to do in Brunei',
    'Bandar Seri Begawan travel guide',
    'Brunei attractions',
    'Kampong Ayer',
    'Sultan Omar Ali Saifuddien Mosque',
    'Brunei tourism',
    'Ulu Temburong National Park',
    'best places to visit in Brunei',
    'Brunei itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'January to May',
  dailyBudget: 90,

  attractions: [
    {
      name: 'Sultan Omar Ali Saifuddien Mosque',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Kampong Ayer',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Royal Regalia Museum',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Jame’ Asr Hassanil Bolkiah Mosque',
      duration: '1 hour',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Ulu Temburong National Park',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Tasek Lama Recreational Park',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Bandar Seri Begawan is the main gateway for exploring Brunei and is known for its peaceful atmosphere and impressive Islamic architecture.',
    'Kampong Ayer is one of Brunei’s most distinctive attractions and is best explored by boat.',
    'Dress modestly when visiting mosques and religious sites.',
    'Brunei uses the Brunei dollar (BND), which is interchangeable at par with the Singapore dollar under the currency interchangeability agreement.',
    'Alcohol sales are restricted in Brunei, and travelers should understand and respect local laws and customs.',
    'Brunei has a tropical climate with high humidity and rainfall throughout the year.',
    'Ulu Temburong National Park offers rainforest adventures, but access generally requires organized transportation and arrangements.',
    'Friday prayer periods can affect opening hours and access to some attractions, so plan sightseeing accordingly.'
  ]
},

{
  id: 'ouagadougou-bf',
  city: 'Ouagadougou',
  country: 'Burkina Faso',
  airportCode: 'OUA',
  image: `https://images.pexels.com/photos/26974534/pexels-photo-26974534.jpeg${cropParams}`,
  description: 'Ouagadougou is Burkina Faso’s capital and cultural center, known for West African arts, traditional crafts, lively markets, music, festivals, and a strong local cultural identity.',

  seoTitle: 'Ouagadougou Travel Guide: Attractions, Culture & Travel Tips',

  seoDescription: 'Explore Ouagadougou, Burkina Faso with a guide to local markets, museums, crafts, cultural attractions, food and important travel information.',

  keywords: [
    'Ouagadougou travel guide',
    'things to do in Ouagadougou',
    'Ouagadougou attractions',
    'Burkina Faso travel guide',
    'Ouagadougou tourism',
    'Burkina Faso culture',
    'Ouagadougou markets',
    'West Africa travel',
    'Burkina Faso attractions',
    'Ouagadougou itinerary'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 40,

  attractions: [
    {
      name: 'National Museum of Burkina Faso',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Village Artisanal de Ouagadougou',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Grand Mosque of Ouagadougou',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Bangr-Weogo Urban Park',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Moro-Naba Palace',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Laongo Sculpture Symposium',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Burkina Faso has a rich tradition of music, dance, sculpture, textiles, and other forms of West African art.',
    'French is the official language, while Mooré and several other local languages are widely spoken.',
    'The West African CFA franc (XOF) is the local currency.',
    'Ouagadougou can be very hot, particularly during the dry season, so plan outdoor activities for cooler parts of the day.',
    'Dress respectfully and ask permission before photographing people, markets, or cultural ceremonies.',
    'Current security conditions in Burkina Faso can be extremely challenging, particularly outside limited areas. Check the latest official travel advisories before considering travel.',
    'Avoid traveling independently into remote or border areas without reliable local guidance and current security information.',
    'Travelers should confirm entry requirements, transportation availability, and security conditions before making plans.'
  ]
},

{
  id: 'bujumbura-bi',
  city: 'Bujumbura',
  country: 'Burundi',
  airportCode: 'BJM',
  image: `https://images.pexels.com/photos/30817106/pexels-photo-30817106.jpeg${cropParams}`,
  description: 'Bujumbura is Burundi’s lakeside city on the shores of Lake Tanganyika, known for tropical scenery, beaches, local markets, nearby nature, and views toward the surrounding hills.',

  seoTitle: 'Bujumbura Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Bujumbura, Burundi with a guide to Lake Tanganyika, beaches, local markets, Rusizi National Park, cultural attractions and practical travel tips.',

  keywords: [
    'Bujumbura travel guide',
    'things to do in Bujumbura',
    'Bujumbura attractions',
    'Burundi travel guide',
    'Bujumbura tourism',
    'Lake Tanganyika Burundi',
    'Rusizi National Park',
    'Burundi attractions',
    'best places to visit in Burundi',
    'Bujumbura itinerary'
  ],

  budget: 'Budget',
  tripType: 'Nature',
  bestSeason: 'June to September',
  dailyBudget: 45,

  attractions: [
    {
      name: 'Lake Tanganyika',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Rusizi National Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Saga Beach',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Livingstone-Stanley Monument',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Bujumbura Central Market',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Kiganda Royal Grounds',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Bujumbura sits on the northeastern shore of Lake Tanganyika and offers a warmer, more tropical atmosphere than many inland parts of Burundi.',
    'Lake Tanganyika is one of the city’s main natural attractions, with beaches and opportunities for lakeside activities.',
    'Rusizi National Park is located near Bujumbura and is known for wetlands and wildlife.',
    'Kirundi and French are widely used in Burundi, with English also used in some tourism and business settings.',
    'The Burundian franc (BIF) is the local currency.',
    'Carry sufficient local currency when traveling outside major hotels and established businesses.',
    'Burundi’s security situation can change quickly. Check the latest official travel advisories and local conditions before traveling.',
    'Avoid isolated areas and remote travel unless reliable local arrangements and current security information are available.',
    'Weather can be warm and humid around Lake Tanganyika, so carry sun protection and stay hydrated.'
  ]
},
{
  id: 'yaounde-cm',
  city: 'Yaoundé',
  country: 'Cameroon',
  airportCode: 'NSI',
  image: `https://images.pexels.com/photos/17290979/pexels-photo-17290979.jpeg${cropParams}`,
  description: 'Cameroon’s capital, Yaoundé, is a green and hilly city known for its museums, markets, cultural heritage, nearby nature, and role as a gateway to exploring one of Central Africa’s most diverse countries.',

  seoTitle: 'Yaoundé Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Yaoundé, Cameroon with a guide to museums, markets, cultural attractions, Mfoundi Market, Mount Fébé, local food and practical travel tips.',

  keywords: [
    'Yaoundé travel guide',
    'things to do in Yaoundé',
    'Yaoundé attractions',
    'Cameroon travel guide',
    'Yaoundé tourism',
    'Cameroon attractions',
    'best places to visit in Yaoundé',
    'Mount Fébé',
    'Cameroon culture',
    'Central Africa travel'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'November to February',
  dailyBudget: 50,

  attractions: [
    {
      name: 'National Museum of Cameroon',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Mfoundi Market',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Basilica of Our Lady of Victories',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mount Fébé',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Mvog-Betsi Zoo',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Blackitude Museum',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Yaoundé is Cameroon’s political capital and an important center for culture, government, and business.',
    'French and English are the official languages, while numerous local languages are also spoken.',
    'The Central African CFA franc (XAF) is the local currency.',
    'Cameroon has different climates across its regions, so check conditions for each area if traveling beyond Yaoundé.',
    'Try local dishes such as ndolé, grilled fish, plantains, and other Cameroonian specialties.',
    'Keep valuables secure in busy markets and crowded areas.',
    'If traveling outside major cities, check current transportation and security conditions before departure.',
    'Check the latest official travel advisories before traveling, particularly for border and remote regions.'
  ]
},

{
  id: 'george-town-ky',
  city: 'George Town',
  country: 'Cayman Islands',
  airportCode: 'GCM',
  image: `https://images.pexels.com/photos/29259548/pexels-photo-29259548.png${cropParams}`,
  description: 'The Cayman Islands offer a polished Caribbean escape known for crystal-clear waters, Seven Mile Beach, exceptional snorkeling and diving, marine life, and the relaxed atmosphere of George Town.',

  seoTitle: 'Cayman Islands Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore the Cayman Islands with a guide to George Town, Seven Mile Beach, Stingray City, snorkeling, diving, Grand Cayman attractions and travel tips.',

  keywords: [
    'Cayman Islands travel guide',
    'things to do in Cayman Islands',
    'Grand Cayman travel guide',
    'George Town Cayman Islands',
    'Seven Mile Beach',
    'Stingray City',
    'Cayman Islands attractions',
    'Cayman Islands tourism',
    'Grand Cayman beaches',
    'Caribbean travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 220,

  attractions: [
    {
      name: 'Seven Mile Beach',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Stingray City',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'George Town',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Cayman Crystal Caves',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Queen Elizabeth II Botanic Park',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Smith Barcadere',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Grand Cayman is the largest of the three Cayman Islands and the main base for most visitors.',
    'Seven Mile Beach is one of the island’s best-known beaches and is popular for swimming and relaxing.',
    'Stingray City offers the opportunity to see southern stingrays in shallow Caribbean waters through organized excursions.',
    'The Cayman Islands are known for excellent diving and snorkeling, with clear water and abundant marine life.',
    'The Cayman Islands dollar (KYD) is the local currency, while US dollars are widely accepted.',
    'The Cayman Islands drive on the left side of the road.',
    'Sun protection is essential in the tropical climate, especially during long days outdoors.',
    'The islands can become more expensive during peak travel periods, so compare accommodation and activity options in advance.'
  ]
},

{
  id: 'bangui-cf',
  city: 'Bangui',
  country: 'Central African Republic',
  airportCode: 'BGF',
  image: `https://images.pexels.com/photos/17290980/pexels-photo-17290980.jpeg${cropParams}`,
  description: 'Bangui is the capital of the Central African Republic, located along the Ubangi River and known for its riverside setting, local markets, cultural life, and access to the landscapes of Central Africa.',

  seoTitle: 'Bangui Travel Guide: Attractions, Culture & Travel Tips',

  seoDescription: 'Explore Bangui, Central African Republic with a guide to the Ubangi River, local markets, cultural attractions, city landmarks and important travel information.',

  keywords: [
    'Bangui travel guide',
    'things to do in Bangui',
    'Bangui attractions',
    'Central African Republic travel guide',
    'Bangui tourism',
    'Central African Republic attractions',
    'Ubangi River',
    'Bangui markets',
    'Central Africa travel',
    'Bangui itinerary'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'December to February',
  dailyBudget: 40,

  attractions: [
    {
      name: 'Ubangi River',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Boganda National Museum',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Bangui Central Market',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Notre-Dame of Bangui',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'K-Cinq Market',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Boali Waterfalls',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Bangui is located on the banks of the Ubangi River and serves as the country’s main urban and cultural center.',
    'French is the official language, while Sango is widely spoken and serves as an important national language.',
    'The Central African CFA franc (XAF) is the local currency.',
    'Bangui has a tropical climate with a pronounced wet season, so check weather conditions when planning outdoor activities.',
    'Travel outside Bangui requires careful planning and reliable local arrangements.',
    'Security conditions in the Central African Republic can be extremely challenging and can change quickly.',
    'Check the latest official travel advisories before considering travel to the country.',
    'Avoid remote areas, border regions, and independent travel without reliable local security information.'
  ]
},

{
  id: 'abidjan-ci',
  city: 'Abidjan',
  country: 'Côte d’Ivoire',
  airportCode: 'ABJ',
  image: `https://images.pexels.com/photos/7381781/pexels-photo-7381781.jpeg${cropParams}`,
  description: 'Abidjan is Côte d’Ivoire’s energetic economic capital, known for modern skylines, vibrant neighborhoods, West African cuisine, lively markets, contemporary culture, and nearby coastal escapes.',

  seoTitle: 'Abidjan Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Abidjan, Côte d’Ivoire with a guide to Plateau, Treichville, Cocody, Banco National Park, local food, markets, culture and travel tips.',

  keywords: [
    'Abidjan travel guide',
    'things to do in Abidjan',
    'Abidjan attractions',
    'Côte d’Ivoire travel guide',
    'Ivory Coast travel guide',
    'Abidjan tourism',
    'Cocody Abidjan',
    'Treichville Abidjan',
    'Banco National Park',
    'West Africa travel'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'November to March',
  dailyBudget: 70,

  attractions: [
    {
      name: 'Plateau District',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'St. Paul’s Cathedral',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Treichville Market',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Cocody',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Banco National Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Abidjan National Museum',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Abidjan is Côte d’Ivoire’s largest city and economic center, with a diverse mix of modern districts and traditional neighborhoods.',
    'French is the official language, while many local languages are spoken throughout the country.',
    'The West African CFA franc (XOF) is the local currency.',
    'Try Ivorian specialties such as attiéké, alloco, grilled fish, and various local sauces.',
    'Abidjan is a large and busy city, so allow extra time for traffic when planning sightseeing.',
    'The city has a tropical climate, with wetter periods during parts of the year.',
    'Keep valuables secure in crowded markets and busy public areas.',
    'If planning excursions outside Abidjan, check current transportation and security conditions before traveling.'
  ]
},

{
  id: 'willemstad-cw',
  city: 'Willemstad',
  country: 'Curaçao',
  airportCode: 'CUR',
  image: `https://images.pexels.com/photos/34872010/pexels-photo-34872010.jpeg${cropParams}`,
  description: 'Curaçao is a colorful Caribbean island known for Willemstad’s Dutch colonial architecture, turquoise coves, coral reefs, vibrant culture, excellent diving, and a distinctive blend of European and Caribbean influences.',

  seoTitle: 'Curaçao Travel Guide: Beaches, Willemstad, Attractions & Travel Tips',

  seoDescription: 'Explore Curaçao with a guide to Willemstad, Handelskade, Playa Kenepa, Christoffel National Park, snorkeling, diving, local food and travel tips.',

  keywords: [
    'Curaçao travel guide',
    'things to do in Curaçao',
    'Curaçao attractions',
    'Willemstad travel guide',
    'Curaçao beaches',
    'Handelskade Willemstad',
    'Playa Kenepa',
    'Christoffel National Park',
    'Curaçao tourism',
    'Caribbean travel guide'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'February to June',
  dailyBudget: 120,

  attractions: [
    {
      name: 'Willemstad Historic Centre',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Handelskade',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Playa Kenepa',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Christoffel National Park',
      duration: 'Half day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Klein Curaçao',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Curaçao Sea Aquarium',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Willemstad’s historic center is known for its colorful Dutch Caribbean architecture and is a UNESCO World Heritage Site.',
    'Curaçao has numerous small coves and beaches, making a rental car useful for exploring beyond Willemstad.',
    'The island is popular for snorkeling and diving because of its clear water and coral reefs.',
    'Papiamentu, Dutch, and English are widely spoken, with Spanish also commonly understood.',
    'The Caribbean guilder (Cg) is the local currency, while major cards are widely accepted in tourist areas.',
    'Curaçao has a relatively dry climate compared with many other Caribbean islands, but conditions can still vary by season.',
    'Use reef-safe sunscreen and avoid touching coral or marine wildlife when snorkeling or diving.',
    'Klein Curaçao is an excellent day trip for beaches and snorkeling, but boat journeys can be several hours long.',
    'Renting a car is useful if you want to visit beaches and attractions spread across the island.'
  ]
},


{
  id: 'san-salvador-sv',
  city: 'San Salvador',
  country: 'El Salvador',
  airportCode: 'SAL',
  image: `https://images.pexels.com/photos/38023550/pexels-photo-38023550.jpeg${cropParams}`,
  description: 'San Salvador is the lively capital of El Salvador, surrounded by volcanoes and known for historic plazas, museums, vibrant food culture, nearby volcanoes, and easy access to Pacific surf towns.',

  seoTitle: 'San Salvador Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore San Salvador, El Salvador with a guide to historic sites, museums, volcanoes, local food, markets, nearby attractions and practical travel tips.',

  keywords: [
    'San Salvador travel guide',
    'things to do in San Salvador',
    'San Salvador attractions',
    'El Salvador travel guide',
    'El Salvador tourism',
    'San Salvador volcano',
    'Santa Ana Volcano',
    'Ruta de las Flores',
    'best places to visit in El Salvador',
    'San Salvador itinerary'
  ],

  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'November to April',
  dailyBudget: 55,

  attractions: [
    {
      name: 'National Palace of El Salvador',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Metropolitan Cathedral of San Salvador',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Monument to the Divine Savior of the World',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'National Museum of Anthropology David J. Guzmán',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'San Salvador Volcano',
      duration: 'Half day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Lake Ilopango',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'San Salvador is the country’s main urban center and a convenient base for exploring volcanoes, archaeological sites, and the Pacific coast.',
    'Spanish is the official language, while English is understood in some tourist and business settings.',
    'The US dollar is the official currency, and Bitcoin was previously recognized as legal tender; check current payment rules before traveling.',
    'El Salvador is known for pupusas, one of the country’s most famous traditional foods.',
    'The dry season from November to April is generally favorable for sightseeing and outdoor activities.',
    'Volcano hikes can be physically demanding, so check trail conditions and use authorized guides where appropriate.',
    'Use reputable transportation and take normal precautions with valuables in busy areas.',
    'If traveling outside San Salvador, check current local conditions and official travel advice before departure.'
  ]
},

{
  id: 'malabo-gq',
  city: 'Malabo',
  country: 'Equatorial Guinea',
  airportCode: 'SSG',
  image: `https://images.pexels.com/photos/36705138/pexels-photo-36705138.jpeg${cropParams}`,
  description: 'Malabo is the historic capital of Equatorial Guinea on Bioko Island, combining Spanish colonial architecture, tropical landscapes, volcanic scenery, coastal views, and access to some of Central Africa’s distinctive wildlife.',

  seoTitle: 'Malabo Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Malabo, Equatorial Guinea with a guide to colonial architecture, Malabo National Park, Pico Basilé, beaches, cultural attractions and travel tips.',

  keywords: [
    'Malabo travel guide',
    'things to do in Malabo',
    'Malabo attractions',
    'Equatorial Guinea travel guide',
    'Equatorial Guinea tourism',
    'Bioko Island',
    'Pico Basilé',
    'Malabo National Park',
    'best places to visit in Equatorial Guinea',
    'Malabo itinerary'
  ],

  budget: 'Luxury',
  tripType: 'Nature',
  bestSeason: 'December to February',
  dailyBudget: 150,

  attractions: [
    {
      name: 'Malabo Old Town',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Santa Isabel Cathedral',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Pico Basilé',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Malabo National Park',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Playa de Arena Blanca',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Moka Valley',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Malabo is located on Bioko Island and has a distinctive mix of Spanish colonial heritage and tropical Central African landscapes.',
    'Spanish is the official language most widely used, with French and Portuguese also recognized as official languages.',
    'The Central African CFA franc (XAF) is the local currency.',
    'Bioko Island has a humid tropical climate with substantial rainfall, so check conditions before planning outdoor activities.',
    'Pico Basilé offers impressive mountain scenery but weather can change quickly at higher elevations.',
    'Travelers should arrange accommodation, transportation, and permits in advance because tourism infrastructure can be limited.',
    'Photography of government buildings, military facilities, and other sensitive locations may be restricted, so ask before taking photographs.',
    'Entry requirements can be more complex than in many other destinations. Confirm visa, documentation, and current travel rules before booking.',
    'Check the latest official travel advisories and local conditions before traveling within Equatorial Guinea.'
  ]
},

{
  id: 'cayenne-gf',
  city: 'Cayenne',
  country: 'French Guiana',
  airportCode: 'CAY',
  image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm08QurR78aztFCgQ-ZUT-hIsytDwYHdoMV3I-Bury40j_1NMUttr31hbG&s=10${cropParams}`,
  description: 'French Guiana is a fascinating corner of South America known for French and Creole culture, tropical rainforest, diverse wildlife, coastal landscapes, and the Guiana Space Centre at Kourou.',

  seoTitle: 'French Guiana Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore French Guiana with a guide to Cayenne, Kourou, Guiana Space Centre, Îles du Salut, rainforest, local culture, attractions and travel tips.',

  keywords: [
    'French Guiana travel guide',
    'things to do in French Guiana',
    'Cayenne travel guide',
    'French Guiana attractions',
    'French Guiana tourism',
    'Guiana Space Centre',
    'Kourou French Guiana',
    'Îles du Salut',
    'French Guiana rainforest',
    'South America travel guide'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'August to November',
  dailyBudget: 100,

  attractions: [
    {
      name: 'Cayenne',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Guiana Space Centre',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Îles du Salut',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Devil’s Island',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Cayenne Market',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Roura & Kaw Nature Reserve',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'French Guiana is an overseas department and region of France, so the euro is the local currency.',
    'French is the official language, while Creole and several Indigenous and Maroon languages are also spoken.',
    'Cayenne is the main urban center, while Kourou is an important base for exploring the space centre and nearby attractions.',
    'The Guiana Space Centre is one of the region’s most distinctive attractions. Check the official schedule and visitor requirements before planning a visit.',
    'French Guiana has a tropical climate with high humidity and rainfall throughout much of the year.',
    'Mosquito protection is important when exploring rainforest and outdoor areas.',
    'Public transportation is limited outside major towns, so organized excursions or a rental car can be useful.',
    'Check current entry requirements and official travel advice before traveling.'
  ]
},

{
  id: 'stanley-fk',
  city: 'Stanley',
  country: 'Falkland Islands',
  airportCode: 'PSY',
  image: `https://images.pexels.com/photos/31307996/pexels-photo-31307996.jpeg${cropParams}`,
  description: 'The Falkland Islands offer a remote South Atlantic escape known for rugged coastlines, windswept landscapes, historic Stanley, abundant seabirds, penguin colonies, and remarkable wildlife encounters.',

  seoTitle: 'Falkland Islands Travel Guide: Wildlife, Stanley & Travel Tips',

  seoDescription: 'Explore the Falkland Islands with a guide to Stanley, penguin colonies, wildlife, historic sites, rugged landscapes, beaches and practical travel tips.',

  keywords: [
    'Falkland Islands travel guide',
    'things to do in Falkland Islands',
    'Stanley Falkland Islands',
    'Falkland Islands wildlife',
    'Falkland Islands penguins',
    'Falkland Islands tourism',
    'Falkland Islands attractions',
    'South Atlantic travel',
    'Falkland Islands itinerary',
    'Stanley travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Nature',
  bestSeason: 'November to March',
  dailyBudget: 250,

  attractions: [
    {
      name: 'Stanley',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Gypsy Cove',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Volunteer Point',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: '1982 Liberation Memorial',
      duration: '30 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Christ Church Cathedral',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'West Falkland',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Stanley is the main settlement and the usual base for visitors exploring the Falkland Islands.',
    'The islands are particularly famous for penguins, including king, gentoo, and rockhopper penguins.',
    'Wildlife excursions often involve long drives or small aircraft, so allow flexibility in your schedule.',
    'The climate is cool, windy, and changeable. Pack waterproof and windproof layers even during summer.',
    'The Falkland Islands pound (FKP) is the local currency, while British pounds are also commonly accepted.',
    'Flights and accommodation can be limited, so booking well in advance is recommended.',
    'Stay on designated paths and follow wildlife-viewing guidelines to avoid disturbing animals.',
    'Mobile connectivity and services can be limited outside Stanley.',
    'Check current flight schedules, entry requirements, and official travel advice before traveling.'
  ]
},

{
  id: 'torshavn-fo',
  city: 'Tórshavn',
  country: 'Faroe Islands',
  airportCode: 'FAE',
  image: `https://images.pexels.com/photos/23525819/pexels-photo-23525819.jpeg${cropParams}`,
  description: 'The Faroe Islands are a dramatic North Atlantic destination of green mountains, sea cliffs, waterfalls, tiny villages, winding roads, and traditional Nordic culture centered around the capital Tórshavn.',

  seoTitle: 'Faroe Islands Travel Guide: Things to Do, Nature & Travel Tips',

  seoDescription: 'Explore the Faroe Islands with a guide to Tórshavn, Saksun, Gjógv, Múlafossur Waterfall, dramatic cliffs, hiking, villages and travel tips.',

  keywords: [
    'Faroe Islands travel guide',
    'things to do in Faroe Islands',
    'Faroe Islands attractions',
    'Torshavn travel guide',
    'Faroe Islands hiking',
    'Múlafossur Waterfall',
    'Saksun Faroe Islands',
    'Gjogv Faroe Islands',
    'Faroe Islands tourism',
    'Nordic travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Adventure',
  bestSeason: 'May to September',
  dailyBudget: 180,

  attractions: [
    {
      name: 'Tórshavn',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Múlafossur Waterfall',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Saksun',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Gjógv',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Mykines',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Kirkjubøur',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Tórshavn is the capital and a convenient base for exploring the surrounding islands and villages.',
    'The Faroe Islands are famous for dramatic landscapes, hiking trails, seabird colonies, waterfalls, and small coastal settlements.',
    'Weather can change extremely quickly, even during summer. Always carry waterproof and warm layers.',
    'Hiking conditions can become difficult in fog, wind, or rain, so check local conditions before setting out.',
    'The Faroese króna is used alongside the Danish krone, and cards are widely accepted.',
    'A rental car is useful for exploring the islands, while ferries, buses, and tunnels connect many destinations.',
    'Some roads and hiking routes require extra care, particularly around cliffs and exposed coastal areas.',
    'Summer offers long daylight hours and is the most popular period for hiking and wildlife experiences.',
    'Check tunnel tolls, ferry schedules, road conditions, and weather before setting out.'
  ]
},

{
  id: 'accra-gh',
  city: 'Accra',
  country: 'Ghana',
  airportCode: 'ACC',
  image: `https://images.pexels.com/photos/12044802/pexels-photo-12044802.jpeg${cropParams}`,
  description: 'Accra is Ghana’s energetic coastal capital, known for vibrant markets, contemporary art, historic landmarks, Atlantic beaches, lively nightlife, and a rich blend of traditional and modern West African culture.',

  seoTitle: 'Accra Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Accra, Ghana with a guide to Independence Square, Kwame Nkrumah Memorial Park, Makola Market, Labadi Beach, local food, culture and travel tips.',

  keywords: [
    'Accra travel guide',
    'things to do in Accra',
    'Accra attractions',
    'Ghana travel guide',
    'Accra tourism',
    'Kwame Nkrumah Memorial Park',
    'Makola Market',
    'Labadi Beach',
    'best places to visit in Accra',
    'Ghana itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'November to March',
  dailyBudget: 70,

  attractions: [
    {
      name: 'Kwame Nkrumah Memorial Park',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Independence Square',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Makola Market',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Labadi Beach',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Jamestown',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'W.E.B. Du Bois Memorial Centre',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Accra is Ghana’s main international gateway and a useful base for exploring the country.',
    'English is the official language, while Twi, Ga, Ewe, and other Ghanaian languages are widely spoken.',
    'The Ghanaian cedi (GHS) is the local currency.',
    'Try local dishes such as jollof rice, waakye, banku, grilled fish, and kelewele.',
    'Accra can be hot and humid, so stay hydrated and use sun protection.',
    'Traffic can be heavy, particularly during weekday rush hours, so allow extra time for journeys.',
    'Keep valuables secure in crowded markets and busy public areas.',
    'If visiting coastal areas or traveling outside Accra, check current local conditions and official travel advice.'
  ]
},

{
  id: 'gibraltar-gi',
  city: 'Gibraltar',
  country: 'Gibraltar',
  airportCode: 'GIB',
  image: `https://images.pexels.com/photos/12073658/pexels-photo-12073658.jpeg${cropParams}`,
  description: 'Gibraltar is a compact Mediterranean destination dominated by the Rock of Gibraltar, offering dramatic sea views, historic tunnels, Mediterranean wildlife, British heritage, and views across the Strait of Gibraltar.',

  seoTitle: 'Gibraltar Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Gibraltar with a guide to the Rock of Gibraltar, Upper Rock Nature Reserve, Europa Point, St Michael’s Cave, monkeys, beaches and travel tips.',

  keywords: [
    'Gibraltar travel guide',
    'things to do in Gibraltar',
    'Gibraltar attractions',
    'Rock of Gibraltar',
    'Upper Rock Nature Reserve',
    'St Michael’s Cave',
    'Europa Point',
    'Gibraltar tourism',
    'Gibraltar itinerary',
    'Gibraltar travel tips'
  ],

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'April to June, September to October',
  dailyBudget: 110,

  attractions: [
    {
      name: 'Rock of Gibraltar',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'St Michael’s Cave',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Included with Rock ticket'
    },
    {
      name: 'Europa Point',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Great Siege Tunnels',
      duration: '1 hour',
      bestTime: 'Afternoon',
      entryFee: 'Included with Rock ticket'
    },
    {
      name: 'Catalan Bay',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Gibraltar Nature Reserve',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Gibraltar is a British Overseas Territory located at the entrance to the Mediterranean.',
    'English is the official language, while Spanish is also widely spoken.',
    'The Gibraltar pound (GIP) is the local currency and is interchangeable with the British pound.',
    'The Barbary macaques on the Rock are wild animals. Do not feed or approach them.',
    'The Rock involves steep paths and uneven terrain, so comfortable footwear is recommended.',
    'Weather can be warm and sunny but strong winds are possible around exposed viewpoints.',
    'Check current border and entry requirements if traveling between Gibraltar and Spain.',
    'The airport is very close to the town center, making Gibraltar convenient for a short city break.'
  ]
},

{
  id: 'nuuk-gl',
  city: 'Nuuk',
  country: 'Greenland',
  airportCode: 'GOH',
  image: `https://images.pexels.com/photos/33348862/pexels-photo-33348862.jpeg${cropParams}`,
  description: 'Greenland offers an extraordinary Arctic experience of enormous icebergs, dramatic fjords, colorful coastal settlements, Arctic wildlife, Indigenous Greenlandic culture, and vast landscapes unlike anywhere else.',

  seoTitle: 'Greenland Travel Guide: Things to Do, Nature & Travel Tips',

  seoDescription: 'Explore Greenland with a guide to Nuuk, Ilulissat Icefjord, Arctic wildlife, Northern Lights, Greenlandic culture, hiking and practical travel tips.',

  keywords: [
    'Greenland travel guide',
    'things to do in Greenland',
    'Nuuk travel guide',
    'Ilulissat Icefjord',
    'Greenland tourism',
    'Greenland Northern Lights',
    'Greenland wildlife',
    'Arctic travel',
    'Greenland hiking',
    'Greenland itinerary'
  ],

  budget: 'Luxury',
  tripType: 'Adventure',
  bestSeason: 'June to September',
  dailyBudget: 250,

  attractions: [
    {
      name: 'Ilulissat Icefjord',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Nuuk',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Greenland National Museum',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Sermermiut Valley',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Nuuk Fjord',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Disko Bay',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Greenland is an autonomous territory within the Kingdom of Denmark and is geographically part of North America.',
    'Greenlandic is the official language, while Danish is also widely used.',
    'The Danish krone (DKK) is the local currency.',
    'Summer is ideal for hiking, boat trips, and experiencing the Midnight Sun in northern areas.',
    'Winter offers opportunities for Northern Lights viewing, dog sledding, and other Arctic experiences.',
    'Weather can change quickly, so pack warm, waterproof, and windproof layers regardless of season.',
    'Transportation between settlements is often by plane or boat because there are no roads connecting most towns.',
    'Wildlife should always be observed from a safe distance and according to local guidance.',
    'Travel can be expensive because of Greenland’s remote location and limited infrastructure, so book transportation and accommodation early.'
  ]
},

{
  id: 'st-georges-gd',
  city: 'St. George’s',
  country: 'Grenada',
  airportCode: 'GND',
  image: `https://images.pexels.com/photos/12145125/pexels-photo-12145125.jpeg${cropParams}`,
  description: 'Grenada is a lush Caribbean island known for colorful St. George’s, tropical beaches, spice plantations, waterfalls, rainforest landscapes, diving, and a rich food and cultural heritage.',

  seoTitle: 'Grenada Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore Grenada with a guide to St. George’s, Grand Anse Beach, Grand Etang National Park, Annandale Falls, spice plantations, diving and travel tips.',

  keywords: [
    'Grenada travel guide',
    'things to do in Grenada',
    'Grenada attractions',
    'St George’s Grenada',
    'Grand Anse Beach',
    'Grand Etang National Park',
    'Grenada tourism',
    'Grenada beaches',
    'Caribbean travel guide',
    'Grenada itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 120,

  attractions: [
    {
      name: 'Grand Anse Beach',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'St. George’s',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Grand Etang National Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Annandale Falls',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Fort George',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Underwater Sculpture Park',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Grenada is known as the Spice Island because of its production of nutmeg, cocoa, cinnamon, cloves, and other spices.',
    'St. George’s is one of the Caribbean’s most scenic capitals, with colorful buildings and a picturesque harbor.',
    'Grand Anse Beach is one of the island’s most popular beaches and is ideal for swimming and relaxing.',
    'The Eastern Caribbean dollar (XCD) is the local currency, while US dollars are commonly accepted in tourist areas.',
    'Grenada drives on the left side of the road.',
    'The island has a tropical climate, with December to April generally being the drier and more popular travel period.',
    'Try local dishes such as oil down, fresh seafood, and Caribbean-style grilled foods.',
    'Mosquito protection and sun protection are useful when spending time outdoors.',
    'Check local weather and official travel advice before planning boat trips or hikes.'
  ]
},

{
  id: 'basse-terre-gp',
  city: 'Basse-Terre',
  country: 'Guadeloupe',
  airportCode: 'PTP',
  image: `https://images.pexels.com/photos/38129343/pexels-photo-38129343.jpeg${cropParams}`,
  description: 'Guadeloupe is a French Caribbean archipelago combining tropical beaches, rainforest-covered mountains, Creole culture, volcanic landscapes, colorful towns, and excellent food across its distinctive islands.',

  seoTitle: 'Guadeloupe Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore Guadeloupe with a guide to Basse-Terre, Grande-Terre, La Soufrière, Carbet Falls, beaches, Creole culture, food and travel tips.',

  keywords: [
    'Guadeloupe travel guide',
    'things to do in Guadeloupe',
    'Guadeloupe attractions',
    'Basse-Terre Guadeloupe',
    'Grande-Terre Guadeloupe',
    'La Soufrière',
    'Guadeloupe beaches',
    'Guadeloupe tourism',
    'French Caribbean travel',
    'Guadeloupe itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 130,

  attractions: [
    {
      name: 'La Soufrière Volcano',
      duration: 'Half day',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    },
    {
      name: 'Carbet Falls',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Pointe-à-Pitre',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Grande Anse Beach',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Guadeloupe National Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Memorial ACTe',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Guadeloupe is an overseas department and region of France and uses the euro.',
    'French is the official language, while Guadeloupean Creole is also widely spoken.',
    'The archipelago has two main wings: mountainous Basse-Terre and flatter, more beach-focused Grande-Terre.',
    'A rental car is useful for exploring beaches, waterfalls, villages, and national park areas.',
    'La Soufrière is an active volcano, so check current trail conditions and restrictions before hiking.',
    'Guadeloupe has a tropical climate with a wetter season and a generally drier period from around December to April.',
    'Try Creole dishes, fresh seafood, accras, bokit, and local rum-based specialties.',
    'The euro (EUR) is the local currency and cards are widely accepted in established businesses.',
    'Check local weather and official guidance before planning hikes or boat excursions.'
  ]
},

{
  id: 'st-peter-port-gg',
  city: 'St. Peter Port',
  country: 'Guernsey',
  airportCode: 'GCI',
  image: `https://images.pexels.com/photos/870752/pexels-photo-870752.jpeg${cropParams}`,
  description: 'Guernsey is a picturesque Channel Island known for rugged coastal cliffs, sandy coves, historic forts, charming St. Peter Port, scenic walking routes, and a distinctive blend of British and French influences.',

  seoTitle: 'Guernsey Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Guernsey with a guide to St. Peter Port, coastal walks, Castle Cornet, beaches, Victor Hugo’s Hauteville House, gardens and travel tips.',

  keywords: [
    'Guernsey travel guide',
    'things to do in Guernsey',
    'St Peter Port travel guide',
    'Guernsey attractions',
    'Guernsey tourism',
    'Castle Cornet',
    'Guernsey beaches',
    'Guernsey coastal walks',
    'Hauteville House',
    'Channel Islands travel'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to September',
  dailyBudget: 120,

  attractions: [
    {
      name: 'St. Peter Port',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Castle Cornet',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Hauteville House',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Cobo Bay',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'German Occupation Museum',
      duration: '1.5–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Petit Bot Bay',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Guernsey is a self-governing Crown Dependency and is not part of the United Kingdom.',
    'English is the main language, while Guernésiais is the traditional local language.',
    'The Guernsey pound (GGP) is used alongside British pounds, and British currency is widely accepted.',
    'Guernsey is known for coastal walking routes, so comfortable shoes are useful for exploring the island.',
    'The island drives on the left side of the road.',
    'Weather can change quickly, particularly along exposed coastal areas, so carry a light waterproof layer.',
    'May to September generally offers the best conditions for walking, beaches, and outdoor activities.',
    'Ferry and flight schedules can vary seasonally, so check connections when planning island-hopping trips.',
    'Respect cliff-edge safety signs and stay on marked paths during coastal walks.'
  ]
},
{
  id: 'douglas-im',
  city: 'Douglas',
  country: 'Isle of Man',
  airportCode: 'IOM',
  image: `https://images.pexels.com/photos/16709931/pexels-photo-16709931.jpeg${cropParams}`,
  description: 'Douglas is the charming capital of the Isle of Man, surrounded by dramatic coastlines, historic castles, Victorian architecture, scenic walking routes, and a unique blend of Manx heritage and British island culture.',

  seoTitle: 'Isle of Man Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore the Isle of Man with a guide to Douglas, Snaefell Mountain, Peel Castle, Castletown, coastal walks, Manx heritage and practical travel tips.',

  keywords: [
    'Isle of Man travel guide',
    'things to do in Isle of Man',
    'Douglas Isle of Man',
    'Isle of Man attractions',
    'Isle of Man tourism',
    'Peel Castle',
    'Snaefell Mountain',
    'Castletown Isle of Man',
    'Isle of Man coastal walks',
    'Isle of Man itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to September',
  dailyBudget: 110,

  attractions: [
    {
      name: 'Douglas',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Snaefell Mountain',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Peel Castle',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Laxey Wheel',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Castletown',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Port Erin',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Douglas is the capital and main urban center of the Isle of Man.',
    'Ronaldsway Airport (IOM) is the island’s only airport and is located in the south of the island.',
    'The Isle of Man is a self-governing Crown Dependency and is not part of the United Kingdom.',
    'English is the main language, while Manx Gaelic is the traditional local language.',
    'The Manx pound is used alongside British pounds, and British currency is widely accepted.',
    'The island drives on the left side of the road.',
    'The Isle of Man is known for scenic coastal walks, historic sites, and mountain landscapes.',
    'Weather can change quickly, particularly around exposed coastal and mountain areas, so carry a waterproof layer.',
    'May to September is generally a good period for hiking, sightseeing, and outdoor activities.',
    'The island can also be reached by ferry from the UK and Ireland, making it useful for travelers combining multiple destinations.'
  ]
},

{
  id: 'tel-aviv-il',
  city: 'Tel Aviv',
  country: 'Israel',
  airportCode: 'TLV',
  image: `https://images.pexels.com/photos/17291323/pexels-photo-17291323.jpeg${cropParams}`,
  description: 'Tel Aviv is Israel’s vibrant Mediterranean city, known for its beaches, Bauhaus architecture, lively markets, modern cafés, nightlife, contemporary culture, and the historic streets of nearby Jaffa.',

  seoTitle: 'Israel Travel Guide: Tel Aviv, Jerusalem, Attractions & Travel Tips',

  seoDescription: 'Explore Israel with a guide to Tel Aviv, Jaffa, Jerusalem, the Dead Sea, historic sites, Mediterranean beaches, local food and practical travel tips.',

  keywords: [
    'Israel travel guide',
    'things to do in Israel',
    'Tel Aviv travel guide',
    'Israel attractions',
    'Tel Aviv attractions',
    'Jaffa Israel',
    'Jerusalem travel guide',
    'Dead Sea Israel',
    'Israel tourism',
    'Israel itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'March to May, September to November',
  dailyBudget: 140,

  attractions: [
    {
      name: 'Jaffa Old City',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Tel Aviv Beaches',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Carmel Market',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Jerusalem Old City',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Dead Sea',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Masada',
      duration: '3–4 hours',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Tel Aviv is one of Israel’s main cultural and commercial centers and a major base for exploring the Mediterranean coast.',
    'Ben Gurion International Airport (TLV) is the main international gateway to Israel.',
    'Hebrew and Arabic are widely used, while English is common in tourist areas.',
    'The Israeli new shekel (ILS) is the local currency.',
    'Tel Aviv is known for its beaches, nightlife, cafés, food markets, and Bauhaus architecture.',
    'Jaffa offers a historic contrast to modern Tel Aviv, with narrow streets, galleries, markets, and Mediterranean views.',
    'Jerusalem, the Dead Sea, and Masada can be visited as longer day trips or separate stops depending on your itinerary.',
    'Israel has diverse climates, so conditions can vary significantly between the Mediterranean coast, Jerusalem, and the desert regions.',
    'Respect local religious customs when visiting sacred sites and dress appropriately.',
    'Security conditions can change quickly. Check the latest official travel advisories, entry requirements, and local transportation information before traveling.'
  ]
},

{
  id: 'st-helier-je',
  city: 'St. Helier',
  country: 'Jersey',
  airportCode: 'JER',
  image: `https://images.pexels.com/photos/29975346/pexels-photo-29975346.jpeg${cropParams}`,
  description: 'Jersey is a charming Channel Island known for dramatic coastlines, sandy beaches, medieval castles, wartime history, scenic countryside, and a distinctive blend of British and French influences.',

  seoTitle: 'Jersey Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Jersey with a guide to St. Helier, Mont Orgueil Castle, Jersey War Tunnels, La Corbière Lighthouse, beaches, coastal walks and travel tips.',

  keywords: [
    'Jersey travel guide',
    'things to do in Jersey',
    'St Helier travel guide',
    'Jersey attractions',
    'Jersey tourism',
    'Mont Orgueil Castle',
    'Jersey War Tunnels',
    'La Corbière Lighthouse',
    'Jersey beaches',
    'Channel Islands travel guide'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to September',
  dailyBudget: 120,

  attractions: [
    {
      name: 'St. Helier',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mont Orgueil Castle',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Jersey War Tunnels',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'La Corbière Lighthouse',
      duration: '1–2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Elizabeth Castle',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'St. Ouen’s Bay',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'St. Helier is Jersey’s capital and the main center for shopping, restaurants, culture, and accommodation.',
    'Jersey Airport (JER) is the island’s main airport, while regular ferry services also connect Jersey with the UK and nearby France.',
    'Jersey is a self-governing Crown Dependency and is not part of the United Kingdom.',
    'English is the main language, while French and the traditional Jersey Norman language Jèrriais are also part of the island’s heritage.',
    'The Jersey pound is used alongside British pounds, and British currency is widely accepted.',
    'Jersey drives on the left side of the road.',
    'The island has an extensive coastline with beaches, cliffs, bays, and scenic walking routes. :contentReference[oaicite:0]{index=0}',
    'Jersey has a fascinating wartime history, including German occupation during World War II and numerous surviving bunkers and tunnels. :contentReference[oaicite:1]{index=1}',
    'Mont Orgueil Castle, Elizabeth Castle, and La Corbière Lighthouse are among the island’s notable landmarks. :contentReference[oaicite:2]{index=2}',
    'Weather can change quickly, particularly along exposed coastal areas, so carry a light waterproof layer.',
    'May to September is generally a good period for beaches, coastal walks, sightseeing, and outdoor activities.'
  ]
},
{
  id: 'tarawa-ki',
  city: 'Tarawa',
  country: 'Kiribati',
  airportCode: 'TRW',
  image: `https://images.pexels.com/photos/18885701/pexels-photo-18885701.jpeg${cropParams}`,
  description: 'Kiribati is a remote Pacific island nation spread across coral atolls, known for turquoise lagoons, palm-lined beaches, World War II history, traditional island culture, and extraordinary ocean landscapes.',

  seoTitle: 'Kiribati Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Kiribati with a guide to Tarawa, Bonriki, Betio, beaches, World War II sites, island culture, marine life and practical travel tips.',

  keywords: [
    'Kiribati travel guide',
    'things to do in Kiribati',
    'Tarawa travel guide',
    'Kiribati attractions',
    'Kiribati tourism',
    'Tarawa attractions',
    'Kiribati beaches',
    'Bonriki International Airport',
    'Betio Kiribati',
    'Pacific Islands travel'
  ],

  budget: 'Budget',
  tripType: 'Beach',
  bestSeason: 'April to October',
  dailyBudget: 70,

  attractions: [
    {
      name: 'South Tarawa',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Betio',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bonriki',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bairiki National Stadium',
      duration: '1 hour',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'World War II Sites',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Kiritimati Island',
      duration: '2–3 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Tarawa is the capital and one of the main population centers of Kiribati.',
    'Bonriki International Airport (TRW) is the main international gateway serving Tarawa. Kiribati currently has two international airports, with the other located on Kiritimati Island.',
    'English and Gilbertese (I-Kiribati) are the official languages.',
    'The Australian dollar (AUD) is the official currency.',
    'Kiribati is spread across a huge area of the Pacific Ocean, so travel between islands can require careful planning.',
    'The climate is tropical and warm throughout the year, with rainfall varying between island groups.',
    'Respect local customs, especially when visiting villages and participating in community or cultural activities.',
    'Bring reef-safe sunscreen, insect repellent, and lightweight clothing for the tropical environment.',
    'Tarawa has important World War II history, particularly around Betio, where numerous wartime sites remain.',
    'Check current flight schedules carefully because international connections to Kiribati are limited. Kiribati Tourism lists Fiji Airways connections through Nadi as well as services to other Pacific destinations.'
  ]
},

{
  id: 'bishkek-kg',
  city: 'Bishkek',
  country: 'Kyrgyzstan',
  airportCode: 'FRU',
  image: `https://images.pexels.com/photos/16993087/pexels-photo-16993087.jpeg${cropParams}`,
  description: 'Kyrgyzstan is a spectacular Central Asian destination known for snow-capped Tian Shan mountains, alpine lakes, vast valleys, nomadic traditions, dramatic landscapes, and the lively capital of Bishkek.',

  seoTitle: 'Kyrgyzstan Travel Guide: Mountains, Lakes, Attractions & Travel Tips',

  seoDescription: 'Explore Kyrgyzstan with a guide to Bishkek, Issyk-Kul Lake, Ala Archa National Park, Song-Kul, nomadic culture, mountain adventures and travel tips.',

  keywords: [
    'Kyrgyzstan travel guide',
    'things to do in Kyrgyzstan',
    'Bishkek travel guide',
    'Kyrgyzstan attractions',
    'Issyk Kul Lake',
    'Ala Archa National Park',
    'Song Kul',
    'Kyrgyzstan tourism',
    'Kyrgyzstan hiking',
    'Central Asia travel guide'
  ],

  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'June to September',
  dailyBudget: 55,

  attractions: [
    {
      name: 'Bishkek',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Ala Archa National Park',
      duration: 'Half day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Issyk-Kul Lake',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Song-Kul Lake',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Burana Tower',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Osh',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Bishkek is the main international gateway for many visitors, with Manas International Airport (FRU) located about 25 km from the city center. :contentReference[oaicite:0]{index=0}',
    'Kyrgyzstan is one of Central Asia’s best destinations for hiking, trekking, horseback riding, and mountain adventures.',
    'Kyrgyz and Russian are widely used, while English is more common in tourist businesses and among younger travelers.',
    'The Kyrgyz som (KGS) is the local currency.',
    'Summer is popular for hiking, mountain travel, and staying in traditional yurts around high-altitude lakes.',
    'Weather can change quickly in the mountains, so carry warm and waterproof layers even during summer.',
    'Ala Archa National Park is one of the easiest mountain escapes from Bishkek.',
    'Issyk-Kul is one of the country’s most famous destinations and offers beaches, mountain scenery, and outdoor activities.',
    'When visiting remote mountain areas, use experienced local guides and check road and weather conditions before departure.',
    'Kyrgyzstan is well suited to a slower road-trip style of travel, but mountain routes can take considerably longer than expected.'
  ]
},

{
  id: 'maseru-ls',
  city: 'Maseru',
  country: 'Lesotho',
  airportCode: 'MSU',
  image: `https://images.pexels.com/photos/28451781/pexels-photo-28451781.jpeg${cropParams}`,
  description: 'Lesotho is a mountainous kingdom surrounded by South Africa, known for dramatic highlands, traditional Basotho culture, waterfalls, mountain villages, scenic roads, and outdoor adventures.',

  seoTitle: 'Lesotho Travel Guide: Mountains, Attractions & Travel Tips',

  seoDescription: 'Explore Lesotho with a guide to Maseru, Maletsunyane Falls, Thaba-Bosiu, Maloti Mountains, Basotho culture, outdoor adventures and travel tips.',

  keywords: [
    'Lesotho travel guide',
    'things to do in Lesotho',
    'Maseru travel guide',
    'Lesotho attractions',
    'Lesotho tourism',
    'Maletsunyane Falls',
    'Thaba Bosiu',
    'Maloti Mountains',
    'Basotho culture',
    'Lesotho itinerary'
  ],

  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'October to April',
  dailyBudget: 55,

  attractions: [
    {
      name: 'Maseru',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Thaba-Bosiu Cultural Village',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Maletsunyane Falls',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Maloti Mountains',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Mokhotlong',
      duration: '1 day',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Sani Pass',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Maseru is the capital and main urban center of Lesotho.',
    'Moshoeshoe I International Airport (MSU) is the main airport serving Maseru.',
    'Lesotho is known as the Kingdom in the Sky because of its high-altitude terrain.',
    'Sesotho and English are the official languages.',
    'The Lesotho loti (LSL) is the local currency and is pegged to the South African rand, which is also widely accepted.',
    'Lesotho is particularly rewarding for hiking, horseback riding, mountain scenery, and road trips.',
    'Mountain weather can change quickly, so carry warm and waterproof layers even during summer.',
    'Crime can be a concern in some areas, so keep valuables secure and use reliable transportation.',
    'The U.S. State Department currently advises increased caution in Lesotho due to crime and health concerns.',
    'Check current road, weather, health, and travel conditions before heading into remote mountain areas.'
  ]
},

{
  id: 'vaduz-li',
  city: 'Vaduz',
  country: 'Liechtenstein',
  airportCode: 'ZRH',
  image: `https://images.pexels.com/photos/5742914/pexels-photo-5742914.jpeg{cropParams}`,
  description: 'Liechtenstein is a tiny Alpine principality between Switzerland and Austria, known for mountain scenery, Vaduz Castle, hiking trails, picturesque villages, museums, and a distinctive European heritage.',

  seoTitle: 'Liechtenstein Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Liechtenstein with a guide to Vaduz, Vaduz Castle, Malbun, Alpine hiking, museums, mountain villages and practical travel tips.',

  keywords: [
    'Liechtenstein travel guide',
    'things to do in Liechtenstein',
    'Vaduz travel guide',
    'Liechtenstein attractions',
    'Liechtenstein tourism',
    'Vaduz Castle',
    'Malbun Liechtenstein',
    'Liechtenstein hiking',
    'best places to visit in Liechtenstein',
    'Alps travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Nature',
  bestSeason: 'May to October',
  dailyBudget: 150,

  attractions: [
    {
      name: 'Vaduz',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Vaduz Castle',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Liechtenstein National Museum',
      duration: '1.5–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Kunstmuseum Liechtenstein',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Malbun',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Fürstensteig Trail',
      duration: 'Half day',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Vaduz is the capital and political center of Liechtenstein.',
    'Liechtenstein does not have its own commercial airport. Zurich Airport (ZRH) in Switzerland is the nearest major international airport and is commonly used by visitors.',
    'Liechtenstein is a landlocked country located between Switzerland and Austria.',
    'German is the official language, while English is widely understood in tourist areas.',
    'The Swiss franc (CHF) is the official currency.',
    'Liechtenstein is part of the Schengen Area even though it is not a member of the European Union.',
    'The country is excellent for hiking, cycling, mountain scenery, and short Alpine getaways.',
    'Malbun is the country’s main mountain resort and is popular for outdoor activities in both summer and winter.',
    'Mountain conditions can change quickly, so check weather forecasts and trail conditions before hiking.',
    'The U.S. State Department currently rates Liechtenstein Level 1, meaning travelers should exercise normal precautions.'
  ]
},

{
  id: 'macau-mo',
  city: 'Macau',
  country: 'Macau',
  airportCode: 'MFM',
  image: `https://images.pexels.com/photos/38347637/pexels-photo-38347637.jpeg${cropParams}`,
  description: 'Macau is a fascinating blend of Portuguese and Chinese heritage, famous for historic streets, ornate temples, grand casinos, waterfront views, and one of Asia’s most distinctive food cultures.',

  seoTitle: 'Macau Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Macau with a guide to Senado Square, Ruins of St. Paul’s, A-Ma Temple, Cotai, Macau Tower, local food and practical travel tips.',

  keywords: [
    'Macau travel guide',
    'things to do in Macau',
    'Macau attractions',
    'Macau tourism',
    'Ruins of St Paul',
    'Senado Square',
    'A-Ma Temple',
    'Macau Tower',
    'Cotai Macau',
    'Macau itinerary'
  ],

  budget: 'Luxury',
  tripType: 'Culture',
  bestSeason: 'October to December',
  dailyBudget: 150,

  attractions: [
    {
      name: 'Ruins of St. Paul’s',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Senado Square',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'A-Ma Temple',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Macau Tower',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Taipa Village',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Cotai Strip',
      duration: '2–3 hours',
      bestTime: 'Evening',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Macau is a Special Administrative Region of China with a distinctive Portuguese-Chinese cultural heritage.',
    'Macau International Airport (MFM) is the territory’s main airport.',
    'Cantonese is widely spoken, while Mandarin and Portuguese are also official languages. English is common in tourist areas.',
    'The Macanese pataca (MOP) is the official currency, while Hong Kong dollars are widely accepted.',
    'Macau is famous for both its historic center and large entertainment and resort complexes in Cotai.',
    'Try local specialties such as Portuguese egg tarts, pork chop buns, Macanese seafood, and other fusion dishes.',
    'October to December generally offers comfortable conditions for walking and sightseeing.',
    'Macau can be reached easily from Hong Kong by ferry or bridge, making it convenient to combine the two destinations.',
    'Check current entry requirements and local regulations before traveling.'
  ]
},

{
  id: 'fort-de-france-mq',
  city: 'Fort-de-France',
  country: 'Martinique',
  airportCode: 'FDF',
  image: `https://images.pexels.com/photos/5769684/pexels-photo-5769684.jpeg${cropParams}`,
  description: 'Martinique is a French Caribbean island known for beautiful beaches, volcanic landscapes, Creole culture, colorful Fort-de-France, rum heritage, lush rainforest, and a distinctive blend of French and Caribbean influences.',

  seoTitle: 'Martinique Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore Martinique with a guide to Fort-de-France, Mount Pelée, Les Salines, Anse Noire, rum distilleries, Creole culture and travel tips.',

  keywords: [
    'Martinique travel guide',
    'things to do in Martinique',
    'Martinique attractions',
    'Fort-de-France travel guide',
    'Martinique beaches',
    'Mount Pelée',
    'Les Salines Martinique',
    'Martinique tourism',
    'French Caribbean',
    'Martinique itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 130,

  attractions: [
    {
      name: 'Fort-de-France',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Les Salines Beach',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mount Pelée',
      duration: 'Half day',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    },
    {
      name: 'Jardin de Balata',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Anse Noire',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Saint-Pierre',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Martinique is an overseas territorial collectivity of France and uses the euro.',
    'Martinique Aimé Césaire International Airport (FDF) is the main airport serving the island.',
    'French is the official language, while Martinican Creole is also widely spoken.',
    'Martinique combines Caribbean beaches with mountainous rainforest and volcanic landscapes.',
    'Mount Pelée is an active volcano, so check current hiking conditions before attempting the trail.',
    'December to April is generally a popular period for drier weather and beach activities.',
    'Try local specialties such as accras, colombo, fresh seafood, and French-Caribbean pastries.',
    'Renting a car is useful for exploring beaches, villages, gardens, and mountain areas across the island.',
    'The island is known for its rum production, and several distilleries offer tours and tastings.',
    'Check current weather, road conditions, and official travel information before outdoor activities.'
  ]
},

{
  id: 'mamoudzou-yt',
  city: 'Mamoudzou',
  country: 'Mayotte',
  airportCode: 'DZA',
  image: `https://images.pexels.com/photos/20588627/pexels-photo-20588627.jpeg${cropParams}`,
  description: 'Mayotte is a French island territory in the Indian Ocean known for its turquoise lagoon, coral reefs, tropical landscapes, marine wildlife, Creole and Comorian culture, and distinctive island atmosphere.',

  seoTitle: 'Mayotte Travel Guide: Beaches, Lagoon, Attractions & Travel Tips',

  seoDescription: 'Explore Mayotte with a guide to Mamoudzou, the world-famous lagoon, Mount Choungui, marine life, beaches, markets, culture and practical travel tips.',

  keywords: [
    'Mayotte travel guide',
    'things to do in Mayotte',
    'Mamoudzou travel guide',
    'Mayotte attractions',
    'Mayotte tourism',
    'Mayotte lagoon',
    'Mount Choungui',
    'Mayotte beaches',
    'Mayotte diving',
    'Indian Ocean travel guide'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'May to October',
  dailyBudget: 120,

  attractions: [
    {
      name: 'Mamoudzou',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mayotte Lagoon',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Mount Choungui',
      duration: '3–4 hours',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    },
    {
      name: 'Saziley Nature Reserve',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Moya Beach',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mamoudzou Market',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Mayotte is an overseas department and region of France in the Indian Ocean and uses the euro.',
    'Dzaoudzi–Pamandzi International Airport (DZA) is the main airport serving Mayotte.',
    'French is the official language, while Shimaore and Kibushi are also widely spoken.',
    'The Mayotte lagoon is one of the island’s biggest attractions, with opportunities for snorkeling, diving, and boat trips.',
    'Mayotte has a tropical climate with a warmer and wetter season and a generally drier period from May to October.',
    'Marine wildlife includes dolphins, sea turtles, whales, and diverse coral-reef species.',
    'Use reef-safe sunscreen and avoid touching coral or marine animals.',
    'Roads can be busy around Mamoudzou, so allow extra time for journeys.',
    'Some outdoor areas are remote, so use reputable local guides and organized excursions where appropriate.',
    'Check current weather, ferry schedules, local conditions, and official travel information before traveling.'
  ]
},

{
  id: 'noumea-nc',
  city: 'Nouméa',
  country: 'New Caledonia',
  airportCode: 'NOU',
  image: `https://images.pexels.com/photos/28431009/pexels-photo-28431009.jpeg${cropParams}`,
  description: 'Nouméa is the vibrant capital of New Caledonia, known for turquoise lagoons, French-inspired cafés, beautiful beaches, Melanesian culture, island excursions, and easy access to the South Pacific’s spectacular natural landscapes.',

  seoTitle: 'New Caledonia Travel Guide: Beaches, Nouméa & Travel Tips',

  seoDescription: 'Explore New Caledonia with a guide to Nouméa, Anse Vata Beach, Baie des Citrons, Îlot Maître, cultural attractions, lagoons and practical travel tips.',

  keywords: [
    'New Caledonia travel guide',
    'things to do in New Caledonia',
    'Nouméa travel guide',
    'New Caledonia attractions',
    'Nouméa attractions',
    'New Caledonia beaches',
    'Anse Vata Beach',
    'Baie des Citrons',
    'New Caledonia tourism',
    'South Pacific travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'September to November',
  dailyBudget: 180,

  attractions: [
    {
      name: 'Anse Vata Beach',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Baie des Citrons',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Tjibaou Cultural Centre',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Nouméa City Centre',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Îlot Maître',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Blue River National Park',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Nouméa is the capital and main tourism hub of New Caledonia.',
    'La Tontouta International Airport (NOU) is the main international gateway, located outside central Nouméa.',
    'French is the official language, while Kanak languages are also spoken across New Caledonia.',
    'The Pacific franc (XPF) is the local currency.',
    'New Caledonia is famous for its enormous lagoon, coral reefs, beaches, and marine life.',
    'September to November generally offers comfortable conditions for outdoor activities and sightseeing.',
    'French-Caribbean and Melanesian influences can be seen in the island’s food, architecture, markets, and culture.',
    'New Caledonia is currently Level 2: Exercise Increased Caution due to crime, with additional caution advised outside Nouméa at night. Check current conditions before traveling.',
    'Weather and sea conditions can affect island excursions, so confirm boat schedules before departure.'
  ]
},

{
  id: 'managua-ni',
  city: 'Managua',
  country: 'Nicaragua',
  airportCode: 'MGA',
  image: `https://images.pexels.com/photos/5274756/pexels-photo-5274756.jpeg${cropParams}`,
  description: 'Nicaragua is a diverse Central American destination known for volcanic landscapes, colonial cities, Pacific beaches, freshwater lakes, tropical nature, and the colorful culture of Managua, Granada, and León.',

  seoTitle: 'Nicaragua Travel Guide: Volcanoes, Beaches, Cities & Travel Tips',

  seoDescription: 'Explore Nicaragua with a guide to Managua, Granada, León, Ometepe Island, volcanoes, Pacific beaches, colonial architecture and travel tips.',

  keywords: [
    'Nicaragua travel guide',
    'things to do in Nicaragua',
    'Managua travel guide',
    'Nicaragua attractions',
    'Granada Nicaragua',
    'Leon Nicaragua',
    'Ometepe Island',
    'Nicaragua volcanoes',
    'Nicaragua beaches',
    'Central America travel guide'
  ],

  budget: 'Budget',
  tripType: 'Adventure',
  bestSeason: 'November to April',
  dailyBudget: 55,

  attractions: [
    {
      name: 'Managua',
      duration: '1 day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Granada',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'León',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Ometepe Island',
      duration: '2–3 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Masaya Volcano',
      duration: 'Half day',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'San Juan del Sur',
      duration: '1–2 days',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Managua is the capital and main international gateway to Nicaragua.',
    'Augusto C. Sandino International Airport (MGA) serves Managua and is the country’s main international airport.',
    'Spanish is the official language, while English and Indigenous languages are also spoken in some regions.',
    'The Nicaraguan córdoba (NIO) is the local currency.',
    'Nicaragua is known for volcano boarding, surfing, hiking, colonial cities, lakes, and tropical landscapes.',
    'The dry season from November to April is generally popular for sightseeing and outdoor activities.',
    'Granada and León are excellent choices for travelers interested in colonial architecture, culture, and history.',
    'Ometepe Island offers hiking, beaches, wildlife, and views around its two volcanic peaks.',
    'Nicaragua is currently Level 3: Reconsider Travel due to crime, health, wrongful detention, and arbitrary enforcement of local laws. Check the latest official advisory before traveling.',
    'Use reputable transportation and keep valuables secure, particularly in busy urban and tourist areas.'
  ]
},

{
  id: 'skopje-mk',
  city: 'Skopje',
  country: 'North Macedonia',
  airportCode: 'SKP',
  image: `https://images.pexels.com/photos/34556257/pexels-photo-34556257.jpeg${cropParams}`,
  description: 'North Macedonia is a fascinating Balkan destination known for historic towns, Ottoman-era architecture, mountain landscapes, Lake Ohrid, ancient heritage, and the lively capital of Skopje.',

  seoTitle: 'North Macedonia Travel Guide: Skopje, Lake Ohrid & Travel Tips',

  seoDescription: 'Explore North Macedonia with a guide to Skopje, Lake Ohrid, Matka Canyon, Old Bazaar, historic monasteries, mountains and practical travel tips.',

  keywords: [
    'North Macedonia travel guide',
    'things to do in North Macedonia',
    'Skopje travel guide',
    'North Macedonia attractions',
    'Lake Ohrid',
    'Matka Canyon',
    'Old Bazaar Skopje',
    'North Macedonia tourism',
    'Balkan travel guide',
    'North Macedonia itinerary'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to June, September to October',
  dailyBudget: 55,

  attractions: [
    {
      name: 'Old Bazaar Skopje',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Stone Bridge',
      duration: '30 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Matka Canyon',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Lake Ohrid',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Ohrid Old Town',
      duration: '3–4 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Mavrovo National Park',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Skopje is the capital and main urban center of North Macedonia.',
    'Skopje International Airport (SKP) is the main international airport.',
    'Macedonian is the official language, while Albanian is also widely used.',
    'The Macedonian denar (MKD) is the local currency.',
    'Lake Ohrid is one of the country’s most famous destinations and is ideal for combining history, nature, and lakeside relaxation.',
    'Matka Canyon is an easy nature escape from Skopje, offering hiking, cliffs, caves, and boat trips.',
    'Spring and autumn are excellent seasons for walking and sightseeing, while summer is popular around Lake Ohrid.',
    'Try traditional dishes such as tavče gravče, ajvar, shopska salad, and grilled meats.',
    'North Macedonia is currently Level 1: Exercise Normal Precautions.',
    'Mountain weather can change quickly, so check conditions before hiking in remote areas.'
  ]
},

{
  id: 'saipan-mp',
  city: 'Saipan',
  country: 'Northern Mariana Islands',
  airportCode: 'SPN',
  image: `https://images.pexels.com/photos/12198111/pexels-photo-12198111.jpeg${cropParams}`,
  description: 'The Northern Mariana Islands are a tropical Pacific destination known for turquoise waters, coral reefs, World War II history, dramatic cliffs, tropical beaches, and the relaxed island atmosphere of Saipan.',

  seoTitle: 'Northern Mariana Islands Travel Guide: Saipan, Beaches & Travel Tips',

  seoDescription: 'Explore the Northern Mariana Islands with a guide to Saipan, Managaha Island, The Grotto, Banzai Cliff, World War II sites, beaches and travel tips.',

  keywords: [
    'Northern Mariana Islands travel guide',
    'Saipan travel guide',
    'things to do in Saipan',
    'Northern Mariana Islands attractions',
    'Saipan beaches',
    'Managaha Island',
    'The Grotto Saipan',
    'Banzai Cliff',
    'Northern Mariana Islands tourism',
    'Pacific Islands travel guide'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to June',
  dailyBudget: 130,

  attractions: [
    {
      name: 'Managaha Island',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'The Grotto',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Banzai Cliff',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'American Memorial Park',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Micro Beach',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Mount Tapochau',
      duration: '1–2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Saipan is the largest island and the main tourism hub of the Northern Mariana Islands.',
    'Saipan International Airport (SPN) is the main airport serving the islands.',
    'The Northern Mariana Islands are a U.S. commonwealth in the western Pacific.',
    'English is widely used, while Chamorro and Carolinian are also important local languages.',
    'The US dollar (USD) is the local currency.',
    'The islands are known for snorkeling, diving, beaches, World War II history, and tropical landscapes.',
    'The Grotto is a popular diving and snorkeling location, but conditions can be challenging and should be assessed locally.',
    'December to June is generally a popular period for outdoor activities, although tropical weather can occur year-round.',
    'Respect memorials and historic sites, particularly those connected to World War II.',
    'Check current weather, marine conditions, flight schedules, and local travel information before planning island excursions.'
  ]
},
{
  id: 'jamestown-sh',
  city: 'Jamestown',
  country: 'Saint Helena',
  airportCode: 'HLE',
  image: `https://images.pexels.com/photos/38014819/pexels-photo-38014819.jpeg${cropParams}`,
  description: 'Saint Helena is a remote South Atlantic island known for dramatic volcanic landscapes, rugged coastlines, historic Jamestown, Napoleon’s exile, hiking trails, and remarkable isolation.',

  seoTitle: 'Saint Helena Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Saint Helena with a guide to Jamestown, Longwood House, Diana’s Peak, Napoleon’s history, hiking trails, coastal scenery and travel tips.',

  keywords: [
    'Saint Helena travel guide',
    'things to do in Saint Helena',
    'Jamestown Saint Helena',
    'Saint Helena attractions',
    'Saint Helena tourism',
    'Longwood House',
    'Diana’s Peak',
    'Napoleon Saint Helena',
    'Saint Helena hiking',
    'South Atlantic travel'
  ],

  budget: 'Moderate',
  tripType: 'Adventure',
  bestSeason: 'March to May, September to November',
  dailyBudget: 100,

  attractions: [
    {
      name: 'Jamestown',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Longwood House',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Diana’s Peak',
      duration: '3–4 hours',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    },
    {
      name: 'Jacob’s Ladder',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Napoleon’s Tomb',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Jonathan the Tortoise',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Saint Helena is a British Overseas Territory in the South Atlantic Ocean.',
    'Saint Helena Airport (HLE) provides air access to the island.',
    'English is the main language and the Saint Helena pound is used alongside British pounds.',
    'The island is famous for its connection with Napoleon Bonaparte, who was exiled here from 1815 until his death in 1821.',
    'Saint Helena is excellent for hiking, birdwatching, wildlife, history, and dramatic coastal scenery.',
    'The island is remote, so flights and accommodation should be booked well in advance.',
    'Weather can change quickly in the highlands, so carry layers and waterproof clothing.',
    'Roads are narrow and winding in many areas, so allow extra time when traveling around the island.',
    'Respect protected natural areas and follow local guidance when hiking.'
  ]
},

{
  id: 'saint-pierre-pm',
  city: 'Saint-Pierre',
  country: 'Saint-Pierre and Miquelon',
  airportCode: 'FSP',
  image: `https://images.pexels.com/photos/24454807/pexels-photo-24454807.jpeg${cropParams}`,
  description: 'Saint-Pierre and Miquelon is a small French archipelago near Newfoundland known for colorful coastal towns, French culture, rugged Atlantic scenery, seafood, hiking, and a unique North American setting.',

  seoTitle: 'Saint-Pierre and Miquelon Travel Guide: Things to Do & Travel Tips',

  seoDescription: 'Explore Saint-Pierre and Miquelon with a guide to Saint-Pierre, Miquelon-Langlade, museums, coastal landscapes, local food, hiking and travel tips.',

  keywords: [
    'Saint-Pierre and Miquelon travel guide',
    'things to do in Saint-Pierre and Miquelon',
    'Saint-Pierre travel guide',
    'Miquelon travel',
    'Saint-Pierre attractions',
    'Saint-Pierre and Miquelon tourism',
    'Miquelon-Langlade',
    'French islands near Canada',
    'North Atlantic travel',
    'Saint-Pierre itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'June to September',
  dailyBudget: 110,

  attractions: [
    {
      name: 'Saint-Pierre',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Miquelon-Langlade',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Musée de l’Arche',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Île aux Marins',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Cap de Miquelon',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Langlade Coastal Trails',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Saint-Pierre and Miquelon is a French overseas collectivity located just off the coast of Newfoundland, Canada.',
    'Saint-Pierre Airport (FSP) serves the island of Saint-Pierre, while Miquelon Airport serves Miquelon.',
    'French is the official language and the euro is the local currency.',
    'The islands have a cool maritime climate, with mild summers and cold winters.',
    'June to September is generally the most comfortable period for hiking and sightseeing.',
    'Seafood is an important part of the local food culture.',
    'The islands are remote, so check flight and ferry schedules carefully before planning your trip.',
    'Weather can change quickly, particularly along the coast, so pack warm and waterproof layers.',
    'Saint-Pierre and Miquelon is a good choice for travelers looking for a quiet destination with French culture and North Atlantic scenery.'
  ]
},

{
  id: 'san-marino-sm',
  city: 'San Marino',
  country: 'San Marino',
  airportCode: 'RMI',
  image: `https://images.pexels.com/photos/33308341/pexels-photo-33308341.jpeg${cropParams}`,
  description: 'San Marino is one of Europe’s smallest countries, perched on Mount Titano and known for medieval towers, historic streets, panoramic views, charming squares, and centuries of independent heritage.',

  seoTitle: 'San Marino Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore San Marino with a guide to the historic center, Guaita Tower, Cesta Tower, Palazzo Pubblico, Mount Titano and travel tips.',

  keywords: [
    'San Marino travel guide',
    'things to do in San Marino',
    'San Marino attractions',
    'San Marino tourism',
    'Guaita Tower',
    'Cesta Tower',
    'Mount Titano',
    'San Marino old town',
    'San Marino itinerary',
    'Europe travel guide'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'April to June, September to October',
  dailyBudget: 90,

  attractions: [
    {
      name: 'Guaita Tower',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Cesta Tower',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Piazza della Libertà',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Palazzo Pubblico',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Basilica of San Marino',
      duration: '1 hour',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Mount Titano',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'San Marino is a microstate completely surrounded by Italy and is one of the world’s oldest surviving republics.',
    'San Marino does not have its own commercial airport. Federico Fellini International Airport (RMI) in Rimini, Italy, is one of the closest airports.',
    'Italian is the official language and the euro is the official currency.',
    'The historic center and Mount Titano are UNESCO World Heritage-listed.',
    'The three towers of San Marino are among the country’s most recognizable landmarks.',
    'The historic center is largely pedestrian-friendly, but streets can be steep and uneven.',
    'Spring and autumn are excellent for comfortable sightseeing and walking.',
    'San Marino is easy to combine with a trip to northern or central Italy.',
    'Check current travel requirements and transportation connections before visiting.'
  ]
},

{
  id: 'sao-tome-st',
  city: 'São Tomé',
  country: 'São Tomé and Príncipe',
  airportCode: 'TMS',
  image: `https://images.pexels.com/photos/2213443/pexels-photo-2213443.jpeg${cropParams}`,
  description: 'São Tomé and Príncipe is a tropical island nation in the Gulf of Guinea known for volcanic peaks, rainforest, cocoa plantations, secluded beaches, colonial architecture, and rich biodiversity.',

  seoTitle: 'São Tomé and Príncipe Travel Guide: Beaches, Nature & Travel Tips',

  seoDescription: 'Explore São Tomé and Príncipe with a guide to São Tomé, beaches, cocoa plantations, rainforest, Pico de São Tomé, Príncipe Island and travel tips.',

  keywords: [
    'São Tomé and Príncipe travel guide',
    'things to do in São Tomé',
    'São Tomé travel guide',
    'São Tomé attractions',
    'Príncipe Island',
    'São Tomé beaches',
    'São Tomé tourism',
    'Pico de São Tomé',
    'São Tomé cocoa plantations',
    'Gulf of Guinea travel'
  ],

  budget: 'Moderate',
  tripType: 'Nature',
  bestSeason: 'June to September',
  dailyBudget: 90,

  attractions: [
    {
      name: 'São Tomé City',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Pico de São Tomé',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Roça Agostinho Neto',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Praia Piscina',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Príncipe Island',
      duration: '2–3 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Ossobó Natural Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'São Tomé is the capital and main gateway to São Tomé and Príncipe.',
    'São Tomé International Airport (TMS) is the main airport on São Tomé Island.',
    'Portuguese is the official language, while Forro and other local languages are also spoken.',
    'The dobra (STN) is the local currency.',
    'The islands are known for rainforest, cocoa plantations, volcanic landscapes, beaches, and exceptional biodiversity.',
    'June to September is generally a popular period for exploring the islands because conditions are often drier.',
    'Medical facilities are limited, and the current U.S. advisory is Level 3: Reconsider Travel due to unrest and health risks.',
    'Travel insurance with medical evacuation coverage is strongly recommended.',
    'Cash is important because card acceptance can be limited outside major hotels and businesses.',
    'Check current flight schedules, health requirements, weather, and official travel advice before traveling.'
  ]
},

{
  id: 'freetown-sl',
  city: 'Freetown',
  country: 'Sierra Leone',
  airportCode: 'FNA',
  image: `https://images.pexels.com/photos/36607738/pexels-photo-36607738.jpeg${cropParams}`,
  description: 'Freetown is Sierra Leone’s vibrant coastal capital, known for tropical beaches, mountainous scenery, lively markets, historic sites, local music, and a welcoming West African culture.',

  seoTitle: 'Freetown Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore Freetown, Sierra Leone with a guide to Tacugama Chimpanzee Sanctuary, Lumley Beach, Cotton Tree, historic sites, markets and travel tips.',

  keywords: [
    'Freetown travel guide',
    'things to do in Freetown',
    'Freetown attractions',
    'Sierra Leone travel guide',
    'Sierra Leone tourism',
    'Lumley Beach',
    'Tacugama Chimpanzee Sanctuary',
    'Freetown beaches',
    'Sierra Leone attractions',
    'West Africa travel guide'
  ],

  budget: 'Budget',
  tripType: 'Nature',
  bestSeason: 'November to April',
  dailyBudget: 65,

  attractions: [
    {
      name: 'Lumley Beach',
      duration: '2–3 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Tacugama Chimpanzee Sanctuary',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Cotton Tree',
      duration: '30 minutes',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'National Museum of Sierra Leone',
      duration: '1–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Aberdeen',
      duration: '2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Tokeh Beach',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Freetown is Sierra Leone’s capital and main cultural and commercial center.',
    'Freetown International Airport (FNA) is located on the mainland near Lungi, across the estuary from Freetown.',
    'English is the official language, while Krio is widely used in everyday communication.',
    'The Sierra Leonean leone (SLE) is the local currency.',
    'Sierra Leone is known for beautiful Atlantic beaches, tropical landscapes, and wildlife experiences.',
    'November to April is generally a popular period for visiting because it is the drier season.',
    'The current U.S. travel advisory is Level 2: Exercise Increased Caution due to crime, unrest, and inadequate health infrastructure.',
    'Avoid demonstrations and large gatherings and take extra care at night.',
    'Medical facilities can be limited, so comprehensive travel insurance is recommended.',
    'Use reputable transportation and check current local conditions before traveling outside Freetown.'
  ]
},

{
  id: 'philipsburg-sx',
  city: 'Philipsburg',
  country: 'Sint Maarten',
  airportCode: 'SXM',
  image: `https://images.pexels.com/photos/4389536/pexels-photo-4389536.jpeg${cropParams}`,
  description: 'Sint Maarten is a lively Caribbean destination known for turquoise beaches, cruise ports, vibrant nightlife, duty-free shopping, French-Dutch culture, and spectacular views around its island coastline.',

  seoTitle: 'Sint Maarten Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore Sint Maarten with a guide to Philipsburg, Maho Beach, Great Bay, Orient Bay, Fort Amsterdam, shopping and travel tips.',

  keywords: [
    'Sint Maarten travel guide',
    'things to do in Sint Maarten',
    'Philipsburg travel guide',
    'Sint Maarten attractions',
    'Maho Beach',
    'Great Bay Beach',
    'Fort Amsterdam Sint Maarten',
    'Sint Maarten tourism',
    'Caribbean travel guide',
    'Sint Maarten itinerary'
  ],

  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 160,

  attractions: [
    {
      name: 'Maho Beach',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Great Bay Beach',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Philipsburg',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Fort Amsterdam',
      duration: '1 hour',
      bestTime: 'Late Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Orient Bay',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Loterie Farm',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Philipsburg is the capital of the Dutch side of the island of Saint Martin.',
    'Princess Juliana International Airport (SXM) is the main international airport serving Sint Maarten.',
    'Dutch and English are official languages, while French and local Caribbean dialects are also commonly heard.',
    'The Netherlands Antillean guilder is being replaced by the Caribbean guilder, so check current currency arrangements before traveling. US dollars are widely accepted.',
    'Sint Maarten shares the island with the French collectivity of Saint-Martin, making it easy to experience two cultures in one trip.',
    'Maho Beach is famous for its proximity to the airport runway and aircraft viewing.',
    'December to April is generally the most popular period for beach holidays.',
    'The island drives on the right side of the road.',
    'The current U.S. travel advisory is Level 1: Exercise Normal Precautions.',
    'Use normal precautions with valuables in crowded tourist and nightlife areas.'
  ]
},

{
  id: 'bratislava-sk',
  city: 'Bratislava',
  country: 'Slovakia',
  airportCode: 'BTS',
  image: `https://images.pexels.com/photos/21625704/pexels-photo-21625704.jpeg${cropParams}`,
  description: 'Bratislava is Slovakia’s charming capital on the Danube, known for its medieval old town, hilltop castle, colorful streets, riverside views, cafés, and easy access to Central Europe.',

  seoTitle: 'Slovakia Travel Guide: Bratislava, Mountains & Travel Tips',

  seoDescription: 'Explore Slovakia with a guide to Bratislava, Bratislava Castle, High Tatras, Spiš Castle, historic towns, nature and practical travel tips.',

  keywords: [
    'Slovakia travel guide',
    'things to do in Slovakia',
    'Bratislava travel guide',
    'Slovakia attractions',
    'Bratislava Castle',
    'High Tatras',
    'Spiš Castle',
    'Slovakia tourism',
    'Slovakia hiking',
    'Central Europe travel guide'
  ],

  budget: 'Budget',
  tripType: 'Culture',
  bestSeason: 'May to June, September to October',
  dailyBudget: 75,

  attractions: [
    {
      name: 'Bratislava Old Town',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Bratislava Castle',
      duration: '1.5–2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Devín Castle',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'High Tatras',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Spiš Castle',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Košice Old Town',
      duration: '2–3 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'Bratislava is Slovakia’s capital and lies on the Danube close to Austria and Hungary.',
    'Bratislava Airport (BTS) is the country’s main international airport, while Vienna Airport is also commonly used because of its proximity.',
    'Slovak is the official language, while English and German are widely understood in tourist areas.',
    'The euro (EUR) is the local currency.',
    'Slovakia combines historic cities with mountain landscapes, castles, caves, and national parks.',
    'The High Tatras are particularly popular for hiking in summer and winter sports during the colder months.',
    'Spring and autumn are excellent for city sightseeing and hiking, while December is popular for Christmas markets.',
    'Try local dishes such as bryndzové halušky, kapustnica, and Slovak pastries.',
    'Slovakia is currently Level 1: Exercise Normal Precautions.',
    'Check mountain weather and trail conditions before hiking in the High Tatras.'
  ]
},

{
  id: 'atafu-tk',
  city: 'Atafu',
  country: 'Tokelau',
  airportCode: 'N/A',
  image: `https://images.pexels.com/photos/5784899/pexels-photo-5784899.jpeg${cropParams}`,
  description: 'Tokelau is a remote Polynesian territory in the South Pacific known for pristine atolls, turquoise lagoons, traditional island communities, coral reefs, and an untouched tropical environment.',

  seoTitle: 'Tokelau Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Tokelau with a guide to Atafu, Nukunonu, Fakaofo, lagoons, coral reefs, traditional Polynesian culture and practical travel tips.',

  keywords: [
    'Tokelau travel guide',
    'things to do in Tokelau',
    'Tokelau attractions',
    'Tokelau tourism',
    'Atafu Tokelau',
    'Nukunonu Tokelau',
    'Fakaofo Tokelau',
    'Tokelau islands',
    'South Pacific travel',
    'Tokelau itinerary'
  ],

  budget: 'Budget',
  tripType: 'Beach',
  bestSeason: 'April to October',
  dailyBudget: 70,

  attractions: [
    {
      name: 'Atafu Atoll',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Nukunonu Atoll',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Fakaofo Atoll',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Tokelau Lagoons',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Local Villages',
      duration: '1–2 hours',
      bestTime: 'Afternoon',
      entryFee: 'Free'
    },
    {
      name: 'Coral Reefs',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Tokelau is a remote territory of New Zealand consisting of three main atolls: Atafu, Nukunonu, and Fakaofo.',
    'Tokelau has no airport. Access is primarily by boat from Samoa, so transportation requires careful advance planning.',
    'Tokelauan and English are widely used.',
    'The New Zealand dollar (NZD) is the local currency.',
    'Tokelau is a very remote destination with limited tourism infrastructure and accommodation.',
    'The islands are best suited to travelers interested in traditional Polynesian culture, marine life, quiet beaches, and remote island experiences.',
    'Weather is tropical throughout the year, with conditions influenced by the South Pacific climate.',
    'Respect village customs and local community rules when visiting the atolls.',
    'Boat schedules can be limited and weather-dependent, so allow flexibility in your itinerary.',
    'Bring essential supplies and medications because shopping and medical facilities are limited.'
  ]
},

{
  id: 'ashgabat-tm',
  city: 'Ashgabat',
  country: 'Turkmenistan',
  airportCode: 'ASB',
  image: `https://images.pexels.com/photos/28707997/pexels-photo-28707997.jpeg${cropParams}`,
  description: 'Turkmenistan is a fascinating Central Asian destination known for monumental Ashgabat, ancient Silk Road sites, vast deserts, archaeological ruins, and distinctive Turkmen traditions.',

  seoTitle: 'Turkmenistan Travel Guide: Ashgabat, Attractions & Travel Tips',

  seoDescription: 'Explore Turkmenistan with a guide to Ashgabat, Darvaza Gas Crater, ancient Merv, Köýtendag, Silk Road heritage and practical travel tips.',

  keywords: [
    'Turkmenistan travel guide',
    'things to do in Turkmenistan',
    'Ashgabat travel guide',
    'Turkmenistan attractions',
    'Ashgabat attractions',
    'Darvaza Gas Crater',
    'Ancient Merv',
    'Turkmenistan tourism',
    'Silk Road Turkmenistan',
    'Turkmenistan itinerary'
  ],

  budget: 'Moderate',
  tripType: 'Culture',
  bestSeason: 'April to May, September to October',
  dailyBudget: 100,

  attractions: [
    {
      name: 'Ashgabat',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'National Museum of Turkmenistan',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Darvaza Gas Crater',
      duration: 'Full Day',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    },
    {
      name: 'Ancient Merv',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Köýtendag Mountains',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Yangykala Canyon',
      duration: 'Full Day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Ashgabat is the capital and main cultural center of Turkmenistan.',
    'Ashgabat International Airport (ASB) is the main international airport.',
    'Turkmen is the official language, while Russian is also commonly understood.',
    'The Turkmenistan manat (TMT) is the local currency.',
    'Turkmenistan is famous for its Silk Road heritage, desert landscapes, archaeological sites, and unusual modern architecture.',
    'The Darvaza Gas Crater is one of the country’s most recognizable attractions and is located in the Karakum Desert.',
    'Independent tourism can involve significant planning, and visa and tour requirements should be checked well before departure.',
    'Photography can be restricted around government buildings and other sensitive locations, so follow local instructions.',
    'The climate is strongly continental, with very hot summers and cold winters.',
    'Turkmenistan is currently Level 1: Exercise Normal Precautions according to the U.S. State Department.',
    'Check current visa requirements, entry rules, transportation arrangements, and local regulations before traveling.'
  ]
},

{
  id: 'providenciales-tc',
  city: 'Providenciales',
  country: 'Turks and Caicos Islands',
  airportCode: 'PLS',
  image: `https://images.pexels.com/photos/9400834/pexels-photo-9400834.jpeg${cropParams}`,
  description: 'The Turks and Caicos Islands are a Caribbean paradise known for powder-soft beaches, crystal-clear turquoise water, coral reefs, luxury resorts, marine life, and some of the region’s best snorkeling and diving.',

  seoTitle: 'Turks and Caicos Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore Turks and Caicos with a guide to Providenciales, Grace Bay Beach, Chalk Sound, snorkeling, diving, Grand Turk and practical travel tips.',

  keywords: [
    'Turks and Caicos travel guide',
    'things to do in Turks and Caicos',
    'Providenciales travel guide',
    'Turks and Caicos attractions',
    'Grace Bay Beach',
    'Chalk Sound',
    'Grand Turk',
    'Turks and Caicos beaches',
    'Turks and Caicos tourism',
    'Caribbean travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 220,

  attractions: [
    {
      name: 'Grace Bay Beach',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Chalk Sound National Park',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Smith’s Reef',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Grand Turk',
      duration: '1–2 days',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Princess Alexandra National Park',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Little Water Cay',
      duration: 'Half day',
      bestTime: 'Morning',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Providenciales is the main tourism hub and the most visited island in the Turks and Caicos Islands.',
    'Providenciales International Airport (PLS) is the main international gateway.',
    'English is the official language and the US dollar (USD) is the local currency.',
    'Grace Bay is famous for its clear turquoise water, white sand, and extensive reef system.',
    'Turks and Caicos is particularly popular for snorkeling, diving, boating, and whale watching.',
    'December to April is generally the most popular period because of favorable weather and lower rainfall.',
    'The islands drive on the left side of the road, although most vehicles are left-hand-drive.',
    'The current U.S. travel advisory is Level 2: Exercise Increased Caution due to crime. :contentReference[oaicite:1]{index=1}',
    'Petty crime can occur in popular tourist areas, so keep valuables secure and avoid leaving belongings unattended on beaches.',
    'Check weather and marine conditions before boat trips, snorkeling, or diving excursions.'
  ]
},

{
  id: 'charlotte-amalie-vi',
  city: 'Charlotte Amalie',
  country: 'United States Virgin Islands',
  airportCode: 'STT',
  image: `https://images.pexels.com/photos/15304264/pexels-photo-15304264.jpeg${cropParams}`,
  description: 'The United States Virgin Islands are a Caribbean getaway known for turquoise waters, white-sand beaches, coral reefs, sailing, historic towns, and beautiful tropical landscapes across St. Thomas, St. John, and St. Croix.',

  seoTitle: 'U.S. Virgin Islands Travel Guide: Beaches, Attractions & Travel Tips',

  seoDescription: 'Explore the U.S. Virgin Islands with a guide to St. Thomas, St. John, St. Croix, Charlotte Amalie, Magen’s Bay, Virgin Islands National Park and travel tips.',

  keywords: [
    'US Virgin Islands travel guide',
    'United States Virgin Islands travel',
    'things to do in US Virgin Islands',
    'St Thomas travel guide',
    'St John USVI',
    'St Croix travel guide',
    'Charlotte Amalie',
    'Magens Bay',
    'Virgin Islands National Park',
    'US Virgin Islands beaches'
  ],

  budget: 'Moderate',
  tripType: 'Beach',
  bestSeason: 'December to April',
  dailyBudget: 150,

  attractions: [
    {
      name: 'Charlotte Amalie',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Magens Bay Beach',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Virgin Islands National Park',
      duration: 'Full Day',
      bestTime: 'Early Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Trunk Bay',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Coral World Ocean Park',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Christiansted',
      duration: '2–3 hours',
      bestTime: 'Morning',
      entryFee: 'Free'
    }
  ],

  travelTips: [
    'The U.S. Virgin Islands consist primarily of St. Thomas, St. John, and St. Croix.',
    'Cyril E. King Airport (STT) is the main airport serving St. Thomas and is one of the main gateways to the islands.',
    'English is the main language and the US dollar (USD) is the local currency.',
    'The islands are popular for beaches, snorkeling, diving, sailing, hiking, and island-hopping.',
    'St. John is especially known for Virgin Islands National Park and protected beaches.',
    'St. Thomas offers shopping, restaurants, beaches, viewpoints, and easy access to boat excursions.',
    'St. Croix has a more relaxed atmosphere with historic towns, beaches, and cultural attractions.',
    'December to April is generally the most popular period because of favorable Caribbean weather.',
    'The islands drive on the left side of the road even though most vehicles are left-hand-drive.',
    'Hurricane season runs from June through November, so check the latest weather information when planning a trip.',
    'Check current ferry schedules and transportation arrangements before traveling between the islands.'
  ]
},

{
  id: 'vatican-city-va',
  city: 'Vatican City',
  country: 'Vatican City',
  airportCode: 'FCO',
  image: `https://images.pexels.com/photos/12839801/pexels-photo-12839801.jpeg${cropParams}`,
  description: 'Vatican City is the world’s smallest independent state and the spiritual center of the Catholic Church, home to St. Peter’s Basilica, the Vatican Museums, the Sistine Chapel, and some of the world’s most important Renaissance art and architecture.',

  seoTitle: 'Vatican City Travel Guide: Things to Do, Attractions & Travel Tips',

  seoDescription: 'Explore Vatican City with a guide to St. Peter’s Basilica, Vatican Museums, Sistine Chapel, St. Peter’s Square, Vatican Gardens and practical travel tips.',

  keywords: [
    'Vatican City travel guide',
    'things to do in Vatican City',
    'Vatican City attractions',
    'Vatican Museums',
    'Sistine Chapel',
    'St Peter’s Basilica',
    'St Peter’s Square',
    'Vatican City tourism',
    'Vatican City itinerary',
    'Rome Vatican travel guide'
  ],

  budget: 'Luxury',
  tripType: 'Culture',
  bestSeason: 'March to May, September to October',
  dailyBudget: 100,

  attractions: [
    {
      name: 'St. Peter’s Basilica',
      duration: '2–3 hours',
      bestTime: 'Early Morning',
      entryFee: 'Free'
    },
    {
      name: 'Vatican Museums',
      duration: '3–4 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Sistine Chapel',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Included with Vatican Museums'
    },
    {
      name: 'St. Peter’s Square',
      duration: '1 hour',
      bestTime: 'Morning',
      entryFee: 'Free'
    },
    {
      name: 'Vatican Gardens',
      duration: '2 hours',
      bestTime: 'Morning',
      entryFee: 'Varies'
    },
    {
      name: 'Castel Sant’Angelo',
      duration: '2 hours',
      bestTime: 'Late Afternoon',
      entryFee: 'Varies'
    }
  ],

  travelTips: [
    'Vatican City is an independent city-state completely surrounded by Rome, Italy.',
    'Vatican City does not have its own commercial airport. Rome Fiumicino Airport (FCO) is the main international airport used by visitors.',
    'Italian is widely used, while Latin is the official language of the Holy See. English is common in tourist areas.',
    'The euro (EUR) is the official currency.',
    'St. Peter’s Basilica is generally free to enter, while the Vatican Museums and Sistine Chapel require tickets.',
    'Book Vatican Museums tickets in advance, especially during peak travel periods.',
    'Dress respectfully when visiting churches and religious sites. Shoulders and knees should generally be covered.',
    'Large bags, tripods, and certain items may not be permitted inside attractions, so check the latest visitor rules before entering.',
    'The Vatican Museums can become extremely crowded. Visiting early in the day can make the experience more comfortable.',
    'Vatican City is easily combined with a Rome itinerary because it is located within the city of Rome.',
    'Check current opening hours, ticket requirements, security rules, and official visitor information before your visit.'
  ]
},

];