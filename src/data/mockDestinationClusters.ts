export interface DestinationCluster {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  description: string;
  image: string;
  seoTitle: string;
  seoDescription: string;
}

export const MIN_ARTICLES_FOR_DESTINATION_HUB = 5;

export const ALL_DESTINATION_CLUSTERS: Record<string, DestinationCluster> = {
  japan: {
    slug: 'japan',
    name: 'Japan',
    country: 'Japan',
    tagline: 'Timeless Traditions, Rail Journeys & Modern Metropolises',
    description: 'Immerse yourself in Japan with deep dispatches on historic Kyoto alleys, Tokyo transit hacks, seasonal packing strategies, and regional rail itineraries.',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Japan Travel Guides: Kyoto, Tokyo, Culture & Rail Hacks | FlySava',
    seoDescription: 'Curated Japan travel dispatches by FlySava. Discover Kyoto cultural etiquette, Tokyo transit tips, seasonal itineraries, and smart flight booking strategies.'
  },
  thailand: {
    slug: 'thailand',
    name: 'Thailand',
    country: 'Thailand',
    tagline: 'Islands, Vibrant Cities & Street Food Culture',
    description: 'Explore Thailand with curated editorial guides covering Bangkok street food, serene southern islands, temple etiquette, flight booking tricks, and budget-friendly itineraries.',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Thailand Travel Guides: Places, Food, Itineraries & Flights | FlySava',
    seoDescription: 'Explore Thailand with FlySava through in-depth destination guides, culinary culture, flight booking strategies, and practical travel wisdom.'
  },
  italy: {
    slug: 'italy',
    name: 'Italy',
    country: 'Italy',
    tagline: 'Historic Cities, Culinary Art & Coastal Escapes',
    description: 'Discover Italy through detailed guides on Rome, Florence, Venice, the Amalfi Coast, scenic rail journeys, and authentic regional dining.',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Italy Travel Guides: Rome, Florence, Food & Rail Tips | FlySava',
    seoDescription: 'Explore Italy with FlySava: curated city itineraries, high-speed rail advice, culinary traditions, and travel hacks for Rome and beyond.'
  },
  uae: {
    slug: 'uae',
    name: 'UAE',
    country: 'United Arab Emirates',
    tagline: 'Architectural Marvels, Desert Escapes & Aviation Hubs',
    description: 'Navigate Dubai, Abu Dhabi, and beyond with actionable guides on long-haul stopover bookings, luxury stays, cultural customs, and budget desert experiences.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'UAE Travel Guides: Dubai, Abu Dhabi & Stopover Hacks | FlySava',
    seoDescription: 'Plan your trip to the UAE with FlySava. Explore Dubai city guides, Abu Dhabi cultural itineraries, airline stopovers, and desert road trip tips.'
  },
  france: {
    slug: 'france',
    name: 'France',
    country: 'France',
    tagline: 'Iconic Landmarks, Wine Regions & Riviera Getaways',
    description: 'Plan your journey across France with guides covering Parisian neighborhoods, French Riviera coastlines, budget transit, and cultural etiquette.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'France Travel Guides: Paris, Provence & Travel Tips | FlySava',
    seoDescription: 'Discover France with FlySava: Parisian neighborhood explorations, regional travel guides, flight advice, and cultural tips.'
  },
  'south-korea': {
    slug: 'south-korea',
    name: 'South Korea',
    country: 'South Korea',
    tagline: 'K-Culture, Mountain Temples & Futuristic Skylines',
    description: 'Experience South Korea with in-depth itineraries for Seoul, Busan, Jeju Island, high-speed KTX hacks, and local street food guides.',
    image: 'https://images.unsplash.com/photo-1538485399081-7191377e8241?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'South Korea Travel Guides: Seoul, Busan & Transit Hacks | FlySava',
    seoDescription: 'Explore South Korea with FlySava. Detailed Seoul itineraries, Busan coastal highlights, street food maps, and transit wisdom.'
  },
  'united-kingdom': {
    slug: 'united-kingdom',
    name: 'United Kingdom',
    country: 'United Kingdom',
    tagline: 'Historic Castles, Countryside Trails & Cosmopolitan Hubs',
    description: 'Plan your journey through the UK with guides covering London neighborhood secrets, Scottish Highlands road trips, Cotswolds villages, and transit passes.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'United Kingdom Travel Guides: London, Scotland & Itineraries | FlySava',
    seoDescription: 'Explore the UK with FlySava. In-depth guides for London, Edinburgh, scenic road trips, train travel tips, and flight booking hacks.'
  },
  switzerland: {
    slug: 'switzerland',
    name: 'Switzerland',
    country: 'Switzerland',
    tagline: 'Alpine Peaks, Panoramic Rail Journeys & Crystal Lakes',
    description: 'Navigate Switzerland with detailed dispatches on Swiss Travel Pass hacks, scenic alpine trains, Lucerne lake cruises, and hiking itineraries.',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Switzerland Travel Guides: Alps, Scenic Trains & Rail Passes | FlySava',
    seoDescription: 'Plan your Swiss getaway with FlySava. Comprehensive guides to the Swiss Alps, panoramic train routes, Zurich, and budget travel advice.'
  },
  spain: {
    slug: 'spain',
    name: 'Spain',
    country: 'Spain',
    tagline: 'Moorish Heritage, Tapas Culture & Mediterranean Coastlines',
    description: 'Explore Spain through detailed itineraries covering Barcelona architecture, Madrid art quarters, Andalusia road trips, and regional culinary trails.',
    image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Spain Travel Guides: Barcelona, Madrid, Tapas & Coastal Escapes | FlySava',
    seoDescription: 'Discover Spain with FlySava: curated city itineraries, high-speed rail advice, tapas etiquette, and flight hacks across Andalusia and Catalonia.'
  },
  singapore: {
    slug: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    tagline: 'Garden Metropolises, Hawker Feasts & Future Forward Design',
    description: 'Navigate Singapore effortlessly with curated guides on hawker center dining, Marina Bay sights, Changi Airport stopover tips, and MRT navigation.',
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Singapore Travel Guides: Hawker Food, Transit & Stopovers | FlySava',
    seoDescription: 'Explore Singapore with FlySava through expert city guides, budget hawker culinary dispatches, and smart flight stopover strategies.'
  },
  vietnam: {
    slug: 'vietnam',
    name: 'Vietnam',
    country: 'Vietnam',
    tagline: 'Karst Bays, Historic Old Quarters & Street Culinary Lore',
    description: 'Discover Vietnam from north to south with dispatches covering Hanoi street food, Ha Long Bay cruising, Hoi An tailor shops, and cross-country train rides.',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Vietnam Travel Guides: Hanoi, Ha Long, Street Food & Trains | FlySava',
    seoDescription: 'Plan your Vietnam trip with FlySava. Curated travel guides for Hanoi, Da Nang, Saigon, scenic overland routes, and visa advice.'
  },
  indonesia: {
    slug: 'indonesia',
    name: 'Indonesia',
    country: 'Indonesia',
    tagline: 'Tropical Volcanos, Emerald Terraces & Island Sanctuaries',
    description: 'Explore Indonesia with insider guides on Bali cultural retreats, Komodo sailing expeditions, Java volcano treks, and sustainable island travel.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Indonesia Travel Guides: Bali, Island Hopping & Volcanos | FlySava',
    seoDescription: 'Discover Indonesia with FlySava: curated itineraries across Bali, Lombok, Komodo, domestic flight advice, and regional travel wisdom.'
  },
  greece: {
    slug: 'greece',
    name: 'Greece',
    country: 'Greece',
    tagline: 'Ancient Acropolises, Whitewashed Villages & Aegean Waters',
    description: 'Navigate Greece with curated dispatches on Athens archaeological secrets, Cyclades ferry hopping, Cretan culinary traditions, and sunset viewpoints.',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Greece Travel Guides: Athens, Island Ferry Routes & Stays | FlySava',
    seoDescription: 'Explore Greece with FlySava. Practical guides on island hopping, Athens historical trails, flight tips, and Mediterranean travel wisdom.'
  },
  portugal: {
    slug: 'portugal',
    name: 'Portugal',
    country: 'Portugal',
    tagline: 'Pastel Alleys, Atlantic Surfs & Sun-Drenched Vineyards',
    description: 'Experience Portugal through detailed itineraries for Lisbon tram routes, Porto wine cellars, Algarve coastal cliffs, and budget regional trains.',
    image: 'https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Portugal Travel Guides: Lisbon, Porto, Algarve & Transit | FlySava',
    seoDescription: 'Plan your Portugal journey with FlySava: curated city itineraries, coastal getaways, pastel de nata spots, and smart train travel tips.'
  },
  turkey: {
    slug: 'turkey',
    name: 'Turkey',
    country: 'Turkey',
    tagline: 'Crossroad of Continents, Bazaars & Fairy Chimney Valleys',
    description: 'Immerse yourself in Turkey with guides on Istanbul Bosphorus ferries, Cappadocia hot air balloons, Turquoise Coast sailing, and ancient ruins.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Turkey Travel Guides: Istanbul, Cappadocia & Coastal Trips | FlySava',
    seoDescription: 'Discover Turkey with FlySava: comprehensive Istanbul city walks, Cappadocia planning advice, domestic flight connections, and local market tips.'
  },
  germany: {
    slug: 'germany',
    name: 'Germany',
    country: 'Germany',
    tagline: 'Bavarian Castles, River Valleys & Avant-Garde Cities',
    description: 'Plan your trip across Germany with dispatches covering Berlin creative scenes, Munich beer halls, romantic Rhine Valley trains, and Black Forest drives.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Germany Travel Guides: Berlin, Bavaria, Castles & Rail | FlySava',
    seoDescription: 'Explore Germany with FlySava through expert city guides, Deutsche Bahn travel hacks, castle itineraries, and seasonal festival advice.'
  },
  netherlands: {
    slug: 'netherlands',
    name: 'Netherlands',
    country: 'Netherlands',
    tagline: 'Canal Rings, Cycling Highways & World-Class Museums',
    description: 'Explore the Netherlands with guides on Amsterdam canal circuits, tulip field bike paths, Utrecht day trips, and Dutch rail system tips.',
    image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Netherlands Travel Guides: Amsterdam, Cycling & Rail Hacks | FlySava',
    seoDescription: 'Plan your Dutch adventure with FlySava. Curated Amsterdam neighborhood itineraries, regional day trips, cycling routes, and flight booking tricks.'
  },
  malaysia: {
    slug: 'malaysia',
    name: 'Malaysia',
    country: 'Malaysia',
    tagline: 'Rainforest Canopies, Colonial Ports & Multi-Ethnic Cuisines',
    description: 'Discover Malaysia through detailed itineraries for Kuala Lumpur skyline views, Penang street food courts, Langkawi beaches, and Borneo eco-treks.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Malaysia Travel Guides: Kuala Lumpur, Penang Food & Islands | FlySava',
    seoDescription: 'Explore Malaysia with FlySava. In-depth culinary walks in Penang, Kuala Lumpur transit hacks, island guides, and budget flight routes.'
  },
  maldives: {
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    tagline: 'Overwater Luxury, Coral Atolls & Azure Lagoons',
    description: 'Plan your Maldivian escape with guides on local island guesthouses, private resort speedboats, house reef diving, and seaplane booking tips.',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Maldives Travel Guides: Atolls, Overwater Villas & Island Ferries | FlySava',
    seoDescription: 'Navigate the Maldives with FlySava. Practical advice for resort transfers, local island budget travel, flight deals, and reef excursions.'
  },
  qatar: {
    slug: 'qatar',
    name: 'Qatar',
    country: 'Qatar',
    tagline: 'Islamic Art, Dune Safaris & Contemporary Corniches',
    description: 'Navigate Doha and beyond with curated dispatches on Souq Waqif strolls, National Museum architecture, desert dune bashing, and Hamad Airport stopovers.',
    image: 'https://images.pexels.com/photos/35158210/pexels-photo-35158210.jpeg',
    seoTitle: 'Qatar Travel Guides: Doha, Museum Walks & Transit Stopovers | FlySava',
    seoDescription: 'Plan your Qatar stopover or vacation with FlySava. Curated Doha itineraries, luxury hotel reviews, transit visa tips, and flight hacks.'
  },
  'saudi-arabia': {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    country: 'Saudi Arabia',
    tagline: 'Ancient Nabataean Tombs, Red Sea Corals & Desert Oasis',
    description: 'Discover Saudi Arabia with guides covering AlUla heritage landscapes, historic Jeddah lanes, Riyadh architecture, and high-speed rail links.',
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Saudi Arabia Travel Guides: AlUla, Jeddah & Desert Routes | FlySava',
    seoDescription: 'Explore Saudi Arabia with FlySava: comprehensive visitor guides, tourist visa walk-throughs, cultural advice, and high-speed rail tips.'
  },
  egypt: {
    slug: 'egypt',
    name: 'Egypt',
    country: 'Egypt',
    tagline: 'Pharaonic Wonders, Nile Feluccas & Red Sea Reefs',
    description: 'Navigate Egypt with detailed guides on Giza Pyramids logistics, Luxor tomb explorations, Nile cruise bookings, and Red Sea diving in Hurghada.',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Egypt Travel Guides: Pyramids, Nile Cruises & Cairo Tips | FlySava',
    seoDescription: 'Plan your Egyptian itinerary with FlySava. Practical guidance for Cairo museums, Nile river trips, scam prevention, and flight connections.'
  },
  morocco: {
    slug: 'morocco',
    name: 'Morocco',
    country: 'Morocco',
    tagline: 'Labyrinthine Medinas, Atlas Passes & Sahara Dunes',
    description: 'Experience Morocco through curated dispatches on Marrakech riads, Fes tanneries, Chefchaouen photography, and Sahara camel treks.',
    image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Morocco Travel Guides: Marrakech, Sahara Treks & Medinas | FlySava',
    seoDescription: 'Explore Morocco with FlySava: curated riad stays, medina navigation wisdom, desert road trips, and regional train travel tips.'
  },
  india: {
    slug: 'india',
    name: 'India',
    country: 'India',
    tagline: 'Royal Forts, Spiritual Rivers & Coastal Backwaters',
    description: 'Explore India with comprehensive guides covering Golden Triangle routes, Kerala backwater houseboats, Himalayan valleys, and train booking hacks.',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'India Travel Guides: Golden Triangle, Kerala & Train Hacks | FlySava',
    seoDescription: 'Discover India with FlySava. Curated dispatches on Rajasthan palaces, train ticketing systems, street culinary safety, and flight deals.'
  },
  australia: {
    slug: 'australia',
    name: 'Australia',
    country: 'Australia',
    tagline: 'Coastal Highways, Coral Reefs & Red Center Horizons',
    description: 'Plan your Australian expedition with guides on Sydney harbor ferries, Great Ocean Road driving, Great Barrier Reef dives, and domestic air travel.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Australia Travel Guides: Sydney, Melbourne & Coastal Drives | FlySava',
    seoDescription: 'Explore Australia with FlySava: road trip itineraries, national park planning, domestic flight hacks, and coastal highlights.'
  },
  'new-zealand': {
    slug: 'new-zealand',
    name: 'New Zealand',
    country: 'New Zealand',
    tagline: 'Glacial Fjords, Alpine Treks & Campervan Freedom',
    description: 'Explore New Zealand across both islands with guides on campervan routes, Queenstown alpine activities, Milford Sound cruises, and Great Walks.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'New Zealand Travel Guides: South Island Road Trips & Treks | FlySava',
    seoDescription: 'Plan your New Zealand adventure with FlySava. Comprehensive campervan advice, scenic hiking routes, ferry crossings, and flight tips.'
  },
  'united-states': {
    slug: 'united-states',
    name: 'United States',
    country: 'United States',
    tagline: 'National Parks, Iconic Skylines & Cross-Country Roads',
    description: 'Navigate the US with curated itineraries covering New York cultural landmarks, California coastal highways, Southwest canyons, and domestic air passes.',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'United States Travel Guides: NYC, National Parks & Road Trips | FlySava',
    seoDescription: 'Discover the US with FlySava: curated road trips, national park itineraries, budget flight hacks, and city transit advice.'
  },
  canada: {
    slug: 'canada',
    name: 'Canada',
    country: 'Canada',
    tagline: 'Turquoise Lakes, Rugged Rockies & Maritime Ports',
    description: 'Plan your Canadian journey with guides on Banff and Jasper national parks, Vancouver coastal dining, Via Rail routes, and winter getaways.',
    image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Canada Travel Guides: Banff, Rockies & City Itineraries | FlySava',
    seoDescription: 'Explore Canada with FlySava through expert Rocky Mountain guides, Montreal cultural tips, road trip routes, and flight booking tricks.'
  },
  mexico: {
    slug: 'mexico',
    name: 'Mexico',
    country: 'Mexico',
    tagline: 'Mayan Pyramids, Colonial Quarters & Caribbean Cenotes',
    description: 'Discover Mexico through curated guides on Mexico City culinary scenes, Oaxaca artisanal villages, Yucatan cenotes, and domestic flight connections.',
    image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Mexico Travel Guides: CDMX, Yucatan Cenotes & Food Trails | FlySava',
    seoDescription: 'Plan your Mexico trip with FlySava. Practical advice on Mexico City neighborhoods, Yucatan coastlines, bus networks, and flight deals.'
  },
  brazil: {
    slug: 'brazil',
    name: 'Brazil',
    country: 'Brazil',
    tagline: 'Rainforest Rivers, Samba Beats & Dramatic Coastlines',
    description: 'Experience Brazil with guides on Rio de Janeiro viewpoints, Iguazu Falls logistics, Salvador Afro-Brazilian culture, and Amazon river expeditions.',
    image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1200&q=80',
    seoTitle: 'Brazil Travel Guides: Rio, Iguazu Falls & Coastal Escapes | FlySava',
    seoDescription: 'Explore Brazil with FlySava through in-depth Rio city guides, domestic aviation tips, rainforest excursions, and regional travel wisdom.'
  },
  china: {
  slug: 'china',
  name: 'China',
  country: 'China',
  tagline: 'Ancient Cities, Mountain Landscapes & Modern China',
  description: 'Explore China through detailed travel guides covering Beijing landmarks, Shanghai city life, historic towns, regional food, high-speed rail journeys, and practical tips for navigating one of the world’s most diverse countries.',
  image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=1200&q=80',
  seoTitle: 'China Travel Guides: Beijing, Shanghai, Food & Rail Travel | FlySava',
  seoDescription: 'Curated China travel guides by FlySava. Discover Beijing history, Shanghai neighborhoods, regional food, high-speed rail routes, and practical travel tips.'
},

austria: {
  slug: 'austria',
  name: 'Austria',
  country: 'Austria',
  tagline: 'Alpine Landscapes, Imperial Cities & Classical Culture',
  description: 'Discover Austria through detailed travel guides covering Vienna architecture, Salzburg’s historic streets, Alpine villages, scenic train journeys, Austrian food, seasonal travel, and practical tips for exploring the country.',
  image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=1200&q=80',
  seoTitle: 'Austria Travel Guides: Vienna, Salzburg, Alps & Food | FlySava',
  seoDescription: 'Curated Austria travel guides by FlySava. Explore Vienna culture, Salzburg, Alpine landscapes, scenic rail journeys, Austrian food, and practical travel tips.'
},

norway: {
  slug: 'norway',
  name: 'Norway',
  country: 'Norway',
  tagline: 'Fjords, Arctic Landscapes & Scenic Road Journeys',
  description: 'Explore Norway with travel guides covering Oslo city life, dramatic fjords, Lofoten landscapes, northern lights, scenic rail routes, road trips, Norwegian food, and practical seasonal travel advice.',
  image: 'https://images.pexels.com/photos/17241175/pexels-photo-17241175.jpeg',
  seoTitle: 'Norway Travel Guides: Fjords, Oslo, Lofoten & Northern Lights | FlySava',
  seoDescription: 'Curated Norway travel guides by FlySava. Discover Oslo, Norwegian fjords, Lofoten, northern lights, scenic routes, food, and practical travel tips.'
},

philippines: {
  slug: 'philippines',
  name: 'Philippines',
  country: 'Philippines',
  tagline: 'Tropical Islands, Coastal Adventures & Local Life',
  description: 'Discover the Philippines through detailed guides covering Manila, Palawan, Cebu, Boracay, island-hopping routes, Filipino food, beaches, local transportation, and practical tips for exploring the islands.',
  image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80',
  seoTitle: 'Philippines Travel Guides: Islands, Beaches, Food & Itineraries | FlySava',
  seoDescription: 'Curated Philippines travel guides by FlySava. Explore Manila, Palawan, Cebu, island-hopping routes, Filipino food, beaches, and practical travel tips.'
},

nepal: {
  slug: 'nepal',
  name: 'Nepal',
  country: 'Nepal',
  tagline: 'Himalayan Trails, Ancient Cities & Mountain Culture',
  description: 'Explore Nepal with travel guides covering Kathmandu heritage, Pokhara lakeside life, Himalayan trekking routes, mountain villages, Nepali food, spiritual sites, and practical tips for traveling through the country.',
  image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
  seoTitle: 'Nepal Travel Guides: Kathmandu, Pokhara, Trekking & Food | FlySava',
  seoDescription: 'Curated Nepal travel guides by FlySava. Discover Kathmandu heritage, Pokhara, Himalayan trekking, mountain villages, Nepali food, and practical travel advice.'
},



peru: {
  slug: 'peru',
  name: 'Peru',
  country: 'Peru',
  tagline: 'Andean Landscapes, Ancient Cities & Pacific Flavors',
  description: 'Explore Peru with detailed travel guides covering Lima food culture, Cusco streets, Machu Picchu planning, Sacred Valley journeys, Andean landscapes, Peruvian cuisine, and practical travel tips.',
  image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=80',
  seoTitle: 'Peru Travel Guides: Lima, Cusco, Machu Picchu & Food | FlySava',
  seoDescription: 'Curated Peru travel guides by FlySava. Discover Lima, Cusco, Machu Picchu, the Sacred Valley, Peruvian cuisine, and practical itinerary tips.'
},

croatia: {
  slug: 'croatia',
  name: 'Croatia',
  country: 'Croatia',
  tagline: 'Adriatic Coastlines, Historic Cities & Island Escapes',
  description: 'Discover Croatia through travel guides covering Dubrovnik walls, Split old streets, Zagreb city life, Adriatic islands, coastal road trips, Croatian food, and practical tips for exploring the country.',
  image: 'https://images.pexels.com/photos/27651093/pexels-photo-27651093.jpeg',
  seoTitle: 'Croatia Travel Guides: Dubrovnik, Split, Islands & Food | FlySava',
  seoDescription: 'Curated Croatia travel guides by FlySava. Explore Dubrovnik, Split, Zagreb, Adriatic islands, coastal routes, Croatian food, and practical travel tips.'
},
albania: {
  slug: 'albania',
  name: 'Albania',
  country: 'Albania',
  tagline: 'Adriatic Beaches, Mountain Towns & Balkan Adventures',
  description: 'Discover Albania through travel guides covering Tirana city life, Riviera beaches, Berat and Gjirokastër, Albanian Alps, local food, road trips, and practical tips for exploring the country.',
  image: 'https://images.pexels.com/photos/20739912/pexels-photo-20739912.jpeg',
  seoTitle: 'Albania Travel Guides: Riviera, Tirana, Mountains & Food | FlySava',
  seoDescription: 'Curated Albania travel guides by FlySava. Explore Tirana, the Albanian Riviera, Berat, Gjirokastër, mountain landscapes, local food, and practical travel tips.'
},

argentina: {
  slug: 'argentina',
  name: 'Argentina',
  country: 'Argentina',
  tagline: 'Buenos Aires Streets, Patagonia & Wild Landscapes',
  description: 'Discover Argentina through travel guides covering Buenos Aires neighborhoods, Patagonia, Iguazú Falls, Mendoza wine country, Argentine food, road trips, and practical tips for exploring the country.',
  image: 'https://images.pexels.com/photos/13609326/pexels-photo-13609326.jpeg',
  seoTitle: 'Argentina Travel Guides: Buenos Aires, Patagonia & Food | FlySava',
  seoDescription: 'Curated Argentina travel guides by FlySava. Explore Buenos Aires, Patagonia, Iguazú Falls, Mendoza, Argentine food, scenic routes, and practical travel tips.'
},

belgium: {
  slug: 'belgium',
  name: 'Belgium',
  country: 'Belgium',
  tagline: 'Medieval Cities, Belgian Chocolate & European Charm',
  description: 'Discover Belgium through travel guides covering Brussels, Bruges, Ghent, Antwerp, Belgian chocolate and beer culture, historic streets, local food, and practical tips for exploring the country.',
  image: 'https://images.pexels.com/photos/19713205/pexels-photo-19713205.jpeg',
  seoTitle: 'Belgium Travel Guides: Brussels, Bruges, Ghent & Food | FlySava',
  seoDescription: 'Curated Belgium travel guides by FlySava. Explore Brussels, Bruges, Ghent, Antwerp, Belgian chocolate, local food, historic cities, and practical travel tips.'
},

colombia: {
  slug: 'colombia',
  name: 'Colombia',
  country: 'Colombia',
  tagline: 'Caribbean Coastlines, Coffee Country & Colorful Cities',
  description: 'Discover Colombia through travel guides covering Bogotá, Medellín, Cartagena, the Caribbean coast, coffee regions, Colombian food, nature escapes, and practical tips for exploring the country.',
  image: 'https://images.pexels.com/photos/16637471/pexels-photo-16637471.jpeg',
  seoTitle: 'Colombia Travel Guides: Bogotá, Medellín, Cartagena & Food | FlySava',
  seoDescription: 'Curated Colombia travel guides by FlySava. Explore Bogotá, Medellín, Cartagena, coffee country, Caribbean beaches, Colombian food, and practical travel tips.'
},

denmark: {
  slug: 'denmark',
  name: 'Denmark',
  country: 'Denmark',
  tagline: 'Copenhagen Design, Coastal Towns & Nordic Living',
  description: 'Discover Denmark through travel guides covering Copenhagen, colorful harbor districts, coastal towns, Danish food, design culture, cycling, castles, and practical tips for exploring the country.',
  image: 'https://images.pexels.com/photos/14252683/pexels-photo-14252683.jpeg',
  seoTitle: 'Denmark Travel Guides: Copenhagen, Castles, Food & Coast | FlySava',
  seoDescription: 'Curated Denmark travel guides by FlySava. Explore Copenhagen, Danish castles, coastal towns, cycling culture, local food, design, and practical travel tips.'
},

finland: {
  slug: 'finland',
  name: 'Finland',
  country: 'Finland',
  tagline: 'Northern Lights, Forests, Lakes & Nordic Calm',
  description: 'Discover Finland through travel guides covering Helsinki, Lapland, Finnish lakes, northern lights, saunas, national parks, Finnish food, and practical tips for exploring the country.',
  image: 'https://images.pexels.com/photos/3693623/pexels-photo-3693623.jpeg',
  seoTitle: 'Finland Travel Guides: Helsinki, Lapland, Lakes & Northern Lights | FlySava',
  seoDescription: 'Curated Finland travel guides by FlySava. Explore Helsinki, Lapland, Finnish lakes, northern lights, saunas, local food, and practical travel tips.'
},

};

export const MOCK_DESTINATION_CLUSTERS: DestinationCluster[] = Object.values(ALL_DESTINATION_CLUSTERS);