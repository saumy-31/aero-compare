export interface Destination {
  id: string;
  city: string;
  country: string;
  airportCode: string;
  image: string;
  description: string;
  budget: 'Budget' | 'Moderate' | 'Luxury';
  tripType: 'Beach' | 'Adventure' | 'City' | 'Culture' | 'Nature';
  bestSeason: string;
  dailyBudget: number;
  attractions: string[];
  travelTips: string[];
}

export const MOCK_DESTINATIONS: Destination[] = [
  {
    id: 'bali-id',
    city: 'Bali',
    country: 'Indonesia',
    airportCode: 'DPS',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800',
    description: 'A paradise known for its forested volcanic mountains, iconic rice paddies, beaches and coral reefs.',
    budget: 'Budget',
    tripType: 'Beach',
    bestSeason: 'April to October',
    dailyBudget: 65,
    attractions: ['Uluwatu Temple', 'Tegallalang Rice Terrace', 'Sacred Monkey Forest', 'Seminyak Beach'],
    travelTips: ['Rent a scooter for cheap transport', 'Respect local temple dress codes', 'Use ride-hailing apps like Gojek']
  },
  {
    id: 'tokyo-jp',
    city: 'Tokyo',
    country: 'Japan',
    airportCode: 'NRT',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&q=80&w=800',
    description: 'Japan’s busy capital, mixing the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.',
    budget: 'Luxury',
    tripType: 'City',
    bestSeason: 'March to May (Spring)',
    dailyBudget: 150,
    attractions: ['Shibuya Crossing', 'Senso-ji Temple', 'Tokyo Skytree', 'Meiji Shrine'],
    travelTips: ['Buy a Suica card for transit', 'Learn basic Japanese greetings', 'Convenience stores offer great cheap meals']
  },
  {
    id: 'cappadocia-tr',
    city: 'Cappadocia',
    country: 'Turkey',
    airportCode: 'NAV',
    image: 'https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?auto=format&fit=crop&q=80&w=800',
    description: 'Famed for its unique geological features called fairy chimneys and breathtaking sunrise hot air balloon rides.',
    budget: 'Moderate',
    tripType: 'Adventure',
    bestSeason: 'April to June',
    dailyBudget: 90,
    attractions: ['Hot Air Balloon Flight', 'Göreme Open Air Museum', 'Derinkuyu Underground City'],
    travelTips: ['Book balloon rides months in advance', 'Stay in a cave hotel', 'Wear comfortable hiking shoes']
  },
  {
    id: 'rome-it',
    city: 'Rome',
    country: 'Italy',
    airportCode: 'FCO',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=800',
    description: 'The capital of Italy is a sprawling, cosmopolitan city with nearly 3,000 years of globally influential art and architecture.',
    budget: 'Moderate',
    tripType: 'Culture',
    bestSeason: 'September to November',
    dailyBudget: 120,
    attractions: ['The Colosseum', 'Vatican Museums', 'Trevi Fountain', 'Pantheon'],
    travelTips: ['Carry a reusable water bottle (nasoni fountains are everywhere)', 'Validate your train tickets', 'Beware of pickpockets in crowded areas']
  }
];