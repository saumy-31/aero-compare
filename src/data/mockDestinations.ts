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
  attractions: string[];
  travelTips: string[];
}

// Global Unsplash parameters guarantee a perfect 800x600 crop with NO borders
const cropParams = '?auto=format&fit=crop&w=800&h=600&q=80';

export const MOCK_DESTINATIONS: Destination[] = [
  // --- ASIA ---
  {
    id: 'bali-id', city: 'Bali', country: 'Indonesia', airportCode: 'DPS',
    image: `https://images.unsplash.com/photo-1537996194471-e657df975ab4${cropParams}`,
    description: 'A paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
    budget: 'Budget', tripType: 'Beach', bestSeason: 'April to October', dailyBudget: 65,
    attractions: ['Uluwatu Temple', 'Tegallalang Rice Terrace'], travelTips: ['Rent a scooter', 'Use Gojek']
  },
  {
    id: 'tokyo-jp', city: 'Tokyo', country: 'Japan', airportCode: 'NRT',
    image: `https://images.unsplash.com/photo-1540959733332-eab4deabeeaf${cropParams}`,
    description: 'Japan’s busy capital, mixing the ultramodern and the traditional.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'March to May', dailyBudget: 150,
    attractions: ['Shibuya Crossing', 'Senso-ji Temple'], travelTips: ['Buy a Suica card', 'Eat at convenience stores']
  },
  {
    id: 'kyoto-jp', city: 'Kyoto', country: 'Japan', airportCode: 'KIX', 
    image: `https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e${cropParams}`,
    description: 'Famous for its classical Buddhist temples, gardens, imperial palaces, and traditional wooden houses.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'March to May', dailyBudget: 120,
    attractions: ['Fushimi Inari Shrine', 'Arashiyama Bamboo Grove'], travelTips: ['Rent a bicycle', 'Visit shrines at sunrise']
  },
  {
    id: 'osaka-jp', city: 'Osaka', country: 'Japan', airportCode: 'KIX', 
    image: `https://images.unsplash.com/photo-1590559899731-a382839cecdf${cropParams}`,
    description: 'A large port city and commercial center known for its modern architecture, nightlife and hearty street food.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'September to November', dailyBudget: 110,
    attractions: ['Osaka Castle', 'Dotonbori'], travelTips: ['Try Takoyaki', 'Explore Namba at night']
  },
  {
    id: 'seoul-kr', city: 'Seoul', country: 'South Korea', airportCode: 'ICN', 
    image: `https://images.unsplash.com/photo-1538681105587-85640961bf8b${cropParams}`,
    description: 'A massive metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'September to November', dailyBudget: 100,
    attractions: ['Gyeongbokgung Palace', 'Myeong-dong'], travelTips: ['Get a T-money card', 'Try Korean BBQ']
  },
  {
    id: 'singapore-sg', city: 'Singapore', country: 'Singapore', airportCode: 'SIN', 
    image: `https://images.unsplash.com/photo-1525625299386-1ea8af095813${cropParams}`,
    description: 'A global financial center with a tropical climate and multicultural population.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'February to April', dailyBudget: 160,
    attractions: ['Gardens by the Bay', 'Marina Bay Sands'], travelTips: ['Use the MRT', 'Chewing gum is banned']
  },
  {
    id: 'bangkok-th', city: 'Bangkok', country: 'Thailand', airportCode: 'BKK', 
    image: `https://images.unsplash.com/photo-1508009603885-50cf7cbf0076${cropParams}`,
    description: 'Thailand’s capital is known for ornate shrines and vibrant street life.',
    budget: 'Budget', tripType: 'City', bestSeason: 'November to February', dailyBudget: 50,
    attractions: ['Grand Palace', 'Wat Arun'], travelTips: ['Negotiate Tuk-Tuks before riding']
  },
  {
    id: 'phuket-th', city: 'Phuket', country: 'Thailand', airportCode: 'HKT', 
    image: `https://images.unsplash.com/photo-1581793751508-30517f8b9115${cropParams}`,
    description: 'A rainforested, mountainous island in the Andaman Sea, with some of Thailand’s most popular beaches.',
    budget: 'Budget', tripType: 'Beach', bestSeason: 'November to April', dailyBudget: 60,
    attractions: ['Patong Beach', 'Phi Phi Islands'], travelTips: ['Rent a motorbike safely']
  },
  {
    id: 'kuala-lumpur-my', city: 'Kuala Lumpur', country: 'Malaysia', airportCode: 'KUL', 
    image: `https://images.unsplash.com/photo-1596422846543-75c6fc198f07${cropParams}`,
    description: 'The modern capital of Malaysia known for its iconic Petronas Twin Towers.',
    budget: 'Budget', tripType: 'City', bestSeason: 'May to July', dailyBudget: 55,
    attractions: ['Petronas Towers', 'Batu Caves'], travelTips: ['Use Grab for transport']
  },
  {
    id: 'dubai-ae', city: 'Dubai', country: 'UAE', airportCode: 'DXB', 
    image: `https://images.unsplash.com/photo-1512453979438-515cb62eb292${cropParams}`,
    description: 'A city of skyscrapers, ports, and beaches, where big business takes place alongside sun-seeking tourism.',
    budget: 'Luxury', tripType: 'Luxury', bestSeason: 'November to March', dailyBudget: 250,
    attractions: ['Burj Khalifa', 'Palm Jumeirah'], travelTips: ['Dress modestly in public spaces']
  },
  {
    id: 'abu-dhabi-ae', city: 'Abu Dhabi', country: 'UAE', airportCode: 'AUH', 
    image: `https://images.unsplash.com/photo-1512632578888-169bbbc64f33${cropParams}`,
    description: 'The capital of the UAE, focusing on cultural attractions, mega-malls, and luxury resorts.',
    budget: 'Luxury', tripType: 'Culture', bestSeason: 'November to March', dailyBudget: 200,
    attractions: ['Sheikh Zayed Grand Mosque', 'Louvre Abu Dhabi'], travelTips: ['Respect local customs']
  },
  {
    id: 'hong-kong-hk', city: 'Hong Kong', country: 'Hong Kong', airportCode: 'HKG', 
    image: `https://images.unsplash.com/photo-1507525428034-b723cf961d3e${cropParams}`,
    description: 'A vibrant, densely populated urban center known for its skyline and deep natural harbor.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'October to December', dailyBudget: 180,
    attractions: ['Victoria Peak', 'Star Ferry'], travelTips: ['Get an Octopus Card', 'Dim sum is a must']
  },
  {
    id: 'maldives-mv', city: 'Maldives', country: 'Maldives', airportCode: 'MLE', 
    image: `https://images.unsplash.com/photo-1514282401047-d79a71a590e8${cropParams}`,
    description: 'A tropical nation in the Indian Ocean composed of 26 ring-shaped atolls.',
    budget: 'Luxury', tripType: 'Beach', bestSeason: 'November to April', dailyBudget: 400,
    attractions: ['Maafushi', 'Banana Reef'], travelTips: ['Seaplanes are the best transport']
  },
  {
    id: 'goa-in', city: 'Goa', country: 'India', airportCode: 'GOI', 
    image: `https://images.unsplash.com/photo-1512343879784-a960bf40e7f2${cropParams}`,
    description: 'A coastal state in India known for its beautiful beaches, Portuguese heritage, and nightlife.',
    budget: 'Budget', tripType: 'Beach', bestSeason: 'November to February', dailyBudget: 45,
    attractions: ['Baga Beach', 'Dudhsagar Falls'], travelTips: ['Rent a scooter', 'Try Goan fish curry']
  },
  {
    id: 'jaipur-in', city: 'Jaipur', country: 'India', airportCode: 'JAI', 
    image: `https://images.unsplash.com/photo-1477587458883-47145ed94245${cropParams}`,
    description: 'The "Pink City" of India, known for its royal heritage and stunning palaces.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'October to March', dailyBudget: 40,
    attractions: ['Amber Palace', 'Hawa Mahal'], travelTips: ['Bargain at local markets']
  },
  {
    id: 'kerala-in', city: 'Kerala', country: 'India', airportCode: 'COK', 
    image: `https://images.unsplash.com/photo-1602216056096-3b40cc0c9944${cropParams}`,
    description: 'Known for its palm-lined beaches and tranquil backwaters.',
    budget: 'Moderate', tripType: 'Nature', bestSeason: 'September to March', dailyBudget: 60,
    attractions: ['Munnar Tea Gardens', 'Alleppey Backwaters'], travelTips: ['Book a houseboat']
  },

  // --- EUROPE ---
  {
    id: 'paris-fr', city: 'Paris', country: 'France', airportCode: 'CDG',
    image: `https://images.unsplash.com/photo-1499856871958-5b9627545d1a${cropParams}`,
    description: 'France\'s capital, a major European city and global center for art, fashion, gastronomy and culture.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'April to June', dailyBudget: 160,
    attractions: ['Eiffel Tower', 'Louvre Museum'], travelTips: ['Beware of pickpockets']
  },
  {
    id: 'london-uk', city: 'London', country: 'UK', airportCode: 'LHR',
    image: `https://images.unsplash.com/photo-1513635269975-59663e0ac1ad${cropParams}`,
    description: 'The capital of England and the United Kingdom, is a 21st-century city with history stretching back to Roman times.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'May to September', dailyBudget: 170,
    attractions: ['Big Ben', 'London Eye'], travelTips: ['Get an Oyster Card']
  },
  {
    id: 'rome-it', city: 'Rome', country: 'Italy', airportCode: 'FCO',
    image: `https://images.unsplash.com/photo-1552832230-c0197dd311b5${cropParams}`,
    description: 'The capital of Italy is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art and architecture.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'September to November', dailyBudget: 120,
    attractions: ['The Colosseum', 'Trevi Fountain'], travelTips: ['Carry a reusable water bottle']
  },
  {
    id: 'venice-it', city: 'Venice', country: 'Italy', airportCode: 'VCE', 
    image: `https://images.unsplash.com/photo-1514890547357-a9ee288728e0${cropParams}`,
    description: 'Built on more than 100 small islands in a lagoon in the Adriatic Sea, with no roads, just canals.',
    budget: 'Luxury', tripType: 'Culture', bestSeason: 'September to November', dailyBudget: 180,
    attractions: ['St. Mark\'s Basilica', 'Rialto Bridge'], travelTips: ['Walk to avoid expensive gondolas']
  },
  {
    id: 'milan-it', city: 'Milan', country: 'Italy', airportCode: 'MXP', 
    image: `https://images.unsplash.com/photo-1533235651586-3f191b70c326${cropParams}`,
    description: 'A metropolis in Italy\'s northern Lombardy region, is a global capital of fashion and design.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'April to May', dailyBudget: 150,
    attractions: ['Duomo di Milano', 'Galleria Vittorio Emanuele II'], travelTips: ['Aperitivo is a must']
  },
  {
    id: 'barcelona-es', city: 'Barcelona', country: 'Spain', airportCode: 'BCN', 
    image: `https://images.unsplash.com/photo-1583422409516-2895a77ef244${cropParams}`,
    description: 'The cosmopolitan capital of Spain’s Catalonia region, known for its art and architecture.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'May to June', dailyBudget: 110,
    attractions: ['Sagrada Familia', 'Park Güell'], travelTips: ['Dinner is eaten late']
  },
  {
    id: 'madrid-es', city: 'Madrid', country: 'Spain', airportCode: 'MAD', 
    image: `https://images.unsplash.com/photo-1539037116277-4db20889f2d4${cropParams}`,
    description: 'Spain\'s central capital, a city of elegant boulevards and expansive, manicured parks.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'September to November', dailyBudget: 100,
    attractions: ['Prado Museum', 'Royal Palace'], travelTips: ['Tapas are free with drinks in some bars']
  },
  {
    id: 'amsterdam-nl', city: 'Amsterdam', country: 'Netherlands', airportCode: 'AMS', 
    image: `https://images.unsplash.com/photo-1512470876302-972faa2aa9a4${cropParams}`,
    description: 'Known for its artistic heritage, elaborate canal system and narrow houses.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'April to May', dailyBudget: 130,
    attractions: ['Rijksmuseum', 'Anne Frank House'], travelTips: ['Don\'t walk in the bike lanes']
  },
  {
    id: 'prague-cz', city: 'Prague', country: 'Czech Republic', airportCode: 'PRG', 
    image: `https://images.unsplash.com/photo-1519677100203-a0e668c92439${cropParams}`,
    description: 'Nicknamed "the City of a Hundred Spires," known for its Old Town Square.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'May to September', dailyBudget: 70,
    attractions: ['Charles Bridge', 'Prague Castle'], travelTips: ['Drink the local beer']
  },
  {
    id: 'vienna-at', city: 'Vienna', country: 'Austria', airportCode: 'VIE', 
    image: `https://images.unsplash.com/photo-1516550893923-42d28e5677af${cropParams}`,
    description: 'Austria’s capital lies in the country’s east on the Danube River, shaped by intellectual and musical legacies.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'April to October', dailyBudget: 110,
    attractions: ['Schönbrunn Palace', 'St. Stephen\'s Cathedral'], travelTips: ['Enjoy coffee house culture']
  },
  {
    id: 'santorini-gr', city: 'Santorini', country: 'Greece', airportCode: 'JTR', 
    image: `https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e${cropParams}`,
    description: 'A volcanic island in the Cyclades group of the Greek islands, famous for dramatic views and sunsets.',
    budget: 'Luxury', tripType: 'Beach', bestSeason: 'September to October', dailyBudget: 160,
    attractions: ['Oia', 'Red Beach'], travelTips: ['Stay in Oia for views']
  },
  {
    id: 'mykonos-gr', city: 'Mykonos', country: 'Greece', airportCode: 'JMK', 
    image: `https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a${cropParams}`,
    description: 'An island in the Cyclades group in the Aegean Sea, popularly known for its summer party atmosphere.',
    budget: 'Luxury', tripType: 'Beach', bestSeason: 'June to September', dailyBudget: 200,
    attractions: ['Paradise Beach', 'Little Venice'], travelTips: ['Book beach clubs early']
  },
  {
    id: 'zurich-ch', city: 'Zurich', country: 'Switzerland', airportCode: 'ZRH', 
    image: `https://images.unsplash.com/photo-1515488764276-beab7607c1e6${cropParams}`,
    description: 'A global center for banking and finance, located at the north end of Lake Zurich.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'June to August', dailyBudget: 220,
    attractions: ['Lake Zurich', 'Old Town'], travelTips: ['Trains are always on time']
  },
  {
    id: 'interlaken-ch', city: 'Interlaken', country: 'Switzerland', airportCode: 'ZRH', 
    image: `https://images.unsplash.com/photo-1527668752968-14dc70a27c95${cropParams}`,
    description: 'A traditional resort town in the mountainous Bernese Oberland region of central Switzerland.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'June to September', dailyBudget: 180,
    attractions: ['Jungfraujoch', 'Lake Thun'], travelTips: ['Ideal for paragliding']
  },
  {
    id: 'istanbul-tr', city: 'Istanbul', country: 'Turkey', airportCode: 'IST', 
    image: `https://images.unsplash.com/photo-1524231757912-21f4fe3a7200${cropParams}`,
    description: 'A major city in Turkey that straddles Europe and Asia across the Bosphorus Strait.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'September to November', dailyBudget: 50,
    attractions: ['Hagia Sophia', 'Grand Bazaar'], travelTips: ['Bargain at the bazaar']
  },

  // --- NORTH AMERICA ---
  {
    id: 'new-york-us', city: 'New York', country: 'USA', airportCode: 'JFK',
    image: `https://images.unsplash.com/photo-1496442226224-f726719e73b2${cropParams}`,
    description: 'The city that never sleeps, known for its towering skyscrapers, Broadway shows, and Central Park.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'September to November', dailyBudget: 200,
    attractions: ['Statue of Liberty', 'Central Park'], travelTips: ['Eat a dollar slice of pizza']
  },
  {
    id: 'los-angeles-us', city: 'Los Angeles', country: 'USA', airportCode: 'LAX', 
    image: `https://images.unsplash.com/photo-1518481612222-68bab828fd58${cropParams}`,
    description: 'The entertainment capital of the world, offering beaches, Hollywood glamour, and perfect weather.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'March to May', dailyBudget: 140,
    attractions: ['Hollywood Walk of Fame', 'Santa Monica Pier'], travelTips: ['Traffic is always bad']
  },
  {
    id: 'miami-us', city: 'Miami', country: 'USA', airportCode: 'MIA', 
    image: `https://images.unsplash.com/photo-1514363990992-56c4b6851484${cropParams}`,
    description: 'An international city at Florida\'s southeastern tip, famous for its beaches and vibrant nightlife.',
    budget: 'Moderate', tripType: 'Beach', bestSeason: 'March to May', dailyBudget: 150,
    attractions: ['South Beach', 'Little Havana'], travelTips: ['Sunscreen is mandatory']
  },
  {
    id: 'las-vegas-us', city: 'Las Vegas', country: 'USA', airportCode: 'LAS', 
    image: `https://images.unsplash.com/photo-1605810736005-9fa524fc2fb4${cropParams}`,
    description: 'The ultimate playground known for its vibrant nightlife, 24-hour casinos, and entertainment options.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'March to May', dailyBudget: 130,
    attractions: ['The Strip', 'Bellagio Fountains'], travelTips: ['Distances on the strip are deceiving']
  },
  {
    id: 'san-francisco-us', city: 'San Francisco', country: 'USA', airportCode: 'SFO', 
    image: `https://images.unsplash.com/photo-1501594907352-04cda38ebc29${cropParams}`,
    description: 'A hilly city on the tip of a peninsula surrounded by the Pacific Ocean and San Francisco Bay.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'September to November', dailyBudget: 180,
    attractions: ['Golden Gate Bridge', 'Alcatraz Island'], travelTips: ['Ride a cable car']
  },
  {
    id: 'toronto-ca', city: 'Toronto', country: 'Canada', airportCode: 'YYZ', 
    image: `https://images.unsplash.com/photo-1514565131-fce0801e5785${cropParams}`,
    description: 'A dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic CN Tower.',
    budget: 'Moderate', tripType: 'City', bestSeason: 'April to May', dailyBudget: 110,
    attractions: ['CN Tower', 'Ripley\'s Aquarium'], travelTips: ['Explore the PATH underground']
  },
  {
    id: 'vancouver-ca', city: 'Vancouver', country: 'Canada', airportCode: 'YVR', 
    image: `https://images.unsplash.com/photo-1559511260-66a654ae982a${cropParams}`,
    description: 'A bustling west coast seaport in British Columbia, surrounded by mountains.',
    budget: 'Moderate', tripType: 'Nature', bestSeason: 'June to September', dailyBudget: 120,
    attractions: ['Stanley Park', 'Capilano Suspension Bridge'], travelTips: ['It rains often, bring an umbrella']
  },

  // --- SOUTH AMERICA ---
  {
    id: 'rio-de-janeiro-br', city: 'Rio de Janeiro', country: 'Brazil', airportCode: 'GIG', 
    image: `https://images.unsplash.com/photo-1483729558449-99ef09a8c325${cropParams}`,
    description: 'A huge seaside city in Brazil, famed for its Copacabana and Ipanema beaches.',
    budget: 'Moderate', tripType: 'Beach', bestSeason: 'December to March', dailyBudget: 70,
    attractions: ['Christ the Redeemer', 'Copacabana'], travelTips: ['Don\'t flash valuables']
  },
  {
    id: 'buenos-aires-ar', city: 'Buenos Aires', country: 'Argentina', airportCode: 'EZE', 
    image: `https://images.unsplash.com/photo-1589909202802-8f4aadce1849${cropParams}`,
    description: 'Argentina’s big, cosmopolitan capital city, known for its European atmosphere and passionate tango.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'April to June', dailyBudget: 50,
    attractions: ['Teatro Colón', 'Casa Rosada'], travelTips: ['Dinner is very late']
  },
  {
    id: 'lima-pe', city: 'Lima', country: 'Peru', airportCode: 'LIM', 
    image: `https://images.unsplash.com/photo-1527318041928-868ee3a4cc48${cropParams}`,
    description: 'Peru\'s capital, a bustling metropolis and one of South America’s largest cities.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'December to April', dailyBudget: 45,
    attractions: ['Plaza de Armas', 'Miraflores'], travelTips: ['Lima is a culinary capital, eat well']
  },

  // --- AFRICA ---
  {
    id: 'cape-town-za', city: 'Cape Town', country: 'South Africa', airportCode: 'CPT', 
    image: `https://images.unsplash.com/photo-1580060839134-75a5edca2e99${cropParams}`,
    description: 'A port city on South Africa’s southwest coast, on a peninsula beneath the imposing Table Mountain.',
    budget: 'Moderate', tripType: 'Nature', bestSeason: 'November to February', dailyBudget: 90,
    attractions: ['Table Mountain', 'Cape of Good Hope'], travelTips: ['Rent a car to explore']
  },
  {
    id: 'marrakech-ma', city: 'Marrakech', country: 'Morocco', airportCode: 'RAK', 
    image: `https://images.unsplash.com/photo-1539020140153-e479b8c22e70${cropParams}`,
    description: 'A former imperial city in western Morocco, home to mosques, palaces and gardens.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'March to May', dailyBudget: 50,
    attractions: ['Jemaa el-Fnaa', 'Majorelle Garden'], travelTips: ['Haggle in the souks']
  },
  {
    id: 'zanzibar-tz', city: 'Zanzibar', country: 'Tanzania', airportCode: 'ZNZ', 
    image: `https://images.unsplash.com/photo-1586861635167-e5223aadc9fe${cropParams}`,
    description: 'An archipelago off the coast of East Africa, known for pristine beaches and spice farms.',
    budget: 'Moderate', tripType: 'Beach', bestSeason: 'June to October', dailyBudget: 80,
    attractions: ['Stone Town', 'Nungwi Beach'], travelTips: ['Try the local spices']
  },
  {
    id: 'cairo-eg', city: 'Cairo', country: 'Egypt', airportCode: 'CAI', 
    image: `https://images.unsplash.com/photo-1553603227-234b9b9a895b${cropParams}`,
    description: 'Egypt’s sprawling capital, set on the Nile River, known for its antiquities.',
    budget: 'Budget', tripType: 'Culture', bestSeason: 'October to April', dailyBudget: 40,
    attractions: ['Giza Pyramids', 'Egyptian Museum'], travelTips: ['Negotiate everything']
  },

  // --- OCEANIA ---
  {
    id: 'sydney-au', city: 'Sydney', country: 'Australia', airportCode: 'SYD', 
    image: `https://images.unsplash.com/photo-1506973032731-59b96d764dce${cropParams}`,
    description: 'Capital of New South Wales and one of Australia\'s largest cities, best known for its harborfront Opera House.',
    budget: 'Luxury', tripType: 'City', bestSeason: 'September to November', dailyBudget: 150,
    attractions: ['Sydney Opera House', 'Bondi Beach'], travelTips: ['Sunscreen is crucial']
  },
  {
    id: 'melbourne-au', city: 'Melbourne', country: 'Australia', airportCode: 'MEL', 
    image: `https://images.unsplash.com/photo-1514395462725-fb4566210144${cropParams}`,
    description: 'The coastal capital of the southeastern Australian state of Victoria, known for arts and coffee.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'March to May', dailyBudget: 130,
    attractions: ['Federation Square', 'Great Ocean Road'], travelTips: ['Experience the coffee culture']
  },
  {
    id: 'auckland-nz', city: 'Auckland', country: 'New Zealand', airportCode: 'AKL', 
    image: `https://images.unsplash.com/photo-1507699622108-4be3abd695ad${cropParams}`,
    description: 'Based around 2 large harbours, a major city in the north of New Zealand\'s North Island.',
    budget: 'Moderate', tripType: 'Nature', bestSeason: 'March to May', dailyBudget: 110,
    attractions: ['Sky Tower', 'Waiheke Island'], travelTips: ['Ferry to Waiheke for wine tasting']
  },
  {
    id: 'queenstown-nz', city: 'Queenstown', country: 'New Zealand', airportCode: 'ZQN', 
    image: `https://images.unsplash.com/photo-1517594422361-5e18d04ec31f${cropParams}`,
    description: 'A resort town in Otago in the south-west of New Zealand\'s South Island, known as the adventure capital.',
    budget: 'Luxury', tripType: 'Adventure', bestSeason: 'December to February', dailyBudget: 160,
    attractions: ['Milford Sound', 'Coronet Peak'], travelTips: ['Great for skiing in winter']
  },

  // --- UNIQUE / BUCKET LIST ---
  {
    id: 'cappadocia-tr', city: 'Cappadocia', country: 'Turkey', airportCode: 'NAV',
    image: `https://images.unsplash.com/photo-1641128324972-af3212f0f6bd${cropParams}`,
    description: 'Famed for its unique geological features called fairy chimneys and breathtaking sunrise hot air balloon rides.',
    budget: 'Moderate', tripType: 'Adventure', bestSeason: 'April to June', dailyBudget: 90,
    attractions: ['Hot Air Balloon Flight', 'Göreme Open Air Museum'], travelTips: ['Book balloon rides months in advance']
  },
  {
    id: 'reykjavik-is', city: 'Reykjavik', country: 'Iceland', airportCode: 'KEF', 
    image: `https://images.unsplash.com/photo-1504829857797-cb23428f7004${cropParams}`,
    description: 'The capital of Iceland, known for its striking landscape, volcanoes, and geothermal pools.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'June to August', dailyBudget: 200,
    attractions: ['Blue Lagoon', 'Golden Circle'], travelTips: ['Rent a 4x4 for winter']
  },
  {
    id: 'lapland-fi', city: 'Lapland', country: 'Finland', airportCode: 'RVN', 
    image: `https://images.unsplash.com/photo-1517299694464-9646b9c9f425${cropParams}`,
    description: 'Finland’s northernmost region, a sparsely populated area bordering Sweden, Norway, and Russia.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'December to March', dailyBudget: 180,
    attractions: ['Santa Claus Village', 'Northern Lights'], travelTips: ['Dress in extreme layers']
  },
  {
    id: 'petra-jo', city: 'Petra', country: 'Jordan', airportCode: 'AMM', 
    image: `https://images.unsplash.com/photo-1571401834311-209a3dc8f643${cropParams}`,
    description: 'A famous archaeological site in Jordan\'s southwestern desert, featuring rock-cut architecture.',
    budget: 'Moderate', tripType: 'Culture', bestSeason: 'March to May', dailyBudget: 80,
    attractions: ['The Treasury', 'The Monastery'], travelTips: ['Start early to beat crowds and heat']
  },
  {
    id: 'banff-ca', city: 'Banff', country: 'Canada', airportCode: 'YYC', 
    image: `https://images.unsplash.com/photo-1533588265089-22a450a8047f${cropParams}`,
    description: 'A resort town within Banff National Park in Alberta, renowned for its mountainous surroundings and hot springs.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'June to August', dailyBudget: 150,
    attractions: ['Lake Louise', 'Moraine Lake'], travelTips: ['Book accommodations a year in advance']
  },
  {
    id: 'machu-picchu-pe', city: 'Machu Picchu', country: 'Peru', airportCode: 'CUZ', 
    image: `https://images.unsplash.com/photo-1526392060635-c061dfa34138${cropParams}`,
    description: 'An Incan citadel set high in the Andes Mountains in Peru, above the Urubamba River valley.',
    budget: 'Moderate', tripType: 'Adventure', bestSeason: 'May to October', dailyBudget: 100,
    attractions: ['Inca Trail', 'Sun Gate'], travelTips: ['Acclimatize in Cusco first']
  },
  {
    id: 'swiss-alps-ch', city: 'Swiss Alps', country: 'Switzerland', airportCode: 'ZRH', 
    image: `https://images.unsplash.com/photo-1464822759023-fed622ff2c3b${cropParams}`,
    description: 'The highest and most extensive mountain range system that lies entirely in Europe.',
    budget: 'Luxury', tripType: 'Nature', bestSeason: 'December to March', dailyBudget: 250,
    attractions: ['Matterhorn', 'Glacier Express'], travelTips: ['Get a Swiss Travel Pass']
  },
  {
    id: 'bora-bora-pf', city: 'Bora Bora', country: 'French Polynesia', airportCode: 'BOB', 
    image: `https://images.unsplash.com/photo-1582967667825-992e5f58bc16${cropParams}`,
    description: 'A small South Pacific island northwest of Tahiti in French Polynesia, surrounded by sand-fringed motus.',
    budget: 'Luxury', tripType: 'Luxury', bestSeason: 'May to October', dailyBudget: 500,
    attractions: ['Mount Otemanu', 'Coral Gardens'], travelTips: ['Stay in an overwater bungalow']
  },
  {
    id: 'seychelles-sc', city: 'Seychelles', country: 'Seychelles', airportCode: 'SEZ', 
    image: `https://images.unsplash.com/photo-1520612620556-9a25db9316d8${cropParams}`,
    description: 'An archipelago of 115 islands in the Indian Ocean, off East Africa.',
    budget: 'Luxury', tripType: 'Beach', bestSeason: 'April to May', dailyBudget: 250,
    attractions: ['Anse Source d\'Argent', 'Vallée de Mai'], travelTips: ['Island hopping by ferry is easy']
  },
  {
    id: 'iceland-is', city: 'Iceland', country: 'Iceland', airportCode: 'KEF', 
    image: `https://images.unsplash.com/photo-1476610182048-b716b8518aae${cropParams}`,
    description: 'A Nordic island nation, defined by its dramatic landscape with volcanoes, geysers, hot springs and lava fields.',
    budget: 'Luxury', tripType: 'Adventure', bestSeason: 'June to August', dailyBudget: 190,
    attractions: ['Gullfoss Falls', 'Vatnajokull Glacier'], travelTips: ['Stick to marked paths']
  }
];