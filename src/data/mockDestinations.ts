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
  }
];