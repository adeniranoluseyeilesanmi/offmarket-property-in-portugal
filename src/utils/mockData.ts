
export interface Property {
  id: string;
  address: string;
  city: string;
  postcode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  squareFeet: number;
  description: string;
  ownerInfo: {
    name: string;
    contact: string;
    email: string;
    situation?: string;
  };
  images: string[];
  aiMatchScore: number;
  potentialValue: number;
  listedStatus: 'off-market' | 'coming-soon' | 'lead';
  dateAdded: string;
  lastContact?: string;
  notes?: string;
}

export const mockProperties: Property[] = [
  {
    id: '1',
    address: '123 Wisteria Lane',
    city: 'Manchester',
    postcode: 'M1 2AB',
    price: 450000,
    bedrooms: 4,
    bathrooms: 2,
    propertyType: 'Detached House',
    squareFeet: 2100,
    description: 'Beautiful detached property with garden in need of minor renovations. Owner relocating for work and looking for a quick sale. Property has been in the family for 15 years.',
    ownerInfo: {
      name: 'James Wilson',
      contact: '07700 900123',
      email: 'james.wilson@example.com',
      situation: 'Relocating for work'
    },
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 92,
    potentialValue: 520000,
    listedStatus: 'off-market',
    dateAdded: '2023-10-15'
  },
  {
    id: '2',
    address: '45 Park Avenue',
    city: 'Liverpool',
    postcode: 'L3 9YZ',
    price: 325000,
    bedrooms: 3,
    bathrooms: 1,
    propertyType: 'Semi-Detached',
    squareFeet: 1500,
    description: 'Charming semi-detached property in a quiet neighborhood. Current owners are looking to downsize now that children have moved out. Property has great potential for extension.',
    ownerInfo: {
      name: 'Sarah Johnson',
      contact: '07700 900456',
      email: 'sarah.j@example.com',
      situation: 'Downsizing'
    },
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 87,
    potentialValue: 380000,
    listedStatus: 'coming-soon',
    dateAdded: '2023-11-02'
  },
  {
    id: '3',
    address: '7 Oakwood Drive',
    city: 'Birmingham',
    postcode: 'B1 1TA',
    price: 550000,
    bedrooms: 5,
    bathrooms: 3,
    propertyType: 'Detached House',
    squareFeet: 2800,
    description: 'Large family home with extensive gardens and a double garage. Owners are retiring and planning to move abroad. Some modernization required but excellent structure.',
    ownerInfo: {
      name: 'Robert & Mary Taylor',
      contact: '07700 900789',
      email: 'r.taylor@example.com',
      situation: 'Retiring abroad'
    },
    images: ['https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 95,
    potentialValue: 650000,
    listedStatus: 'off-market',
    dateAdded: '2023-09-28'
  },
  {
    id: '4',
    address: '15 Victoria Street',
    city: 'London',
    postcode: 'E1 6TD',
    price: 720000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'Apartment',
    squareFeet: 950,
    description: 'Modern apartment in a prime location. Owner has inherited another property and is motivated to sell quickly. Property has been completely renovated 2 years ago.',
    ownerInfo: {
      name: 'Daniel Smith',
      contact: '07700 900234',
      email: 'd.smith@example.com',
      situation: 'Inherited another property'
    },
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'],
    aiMatchScore: 89,
    potentialValue: 795000,
    listedStatus: 'lead',
    dateAdded: '2023-11-10'
  },
  {
    id: '5',
    address: '22 Hill Road',
    city: 'Bristol',
    postcode: 'BS1 4QP',
    price: 400000,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'Terraced House',
    squareFeet: 1600,
    description: 'Beautifully maintained period terraced house with original features. Owners are separating and need to sell within the next few months.',
    ownerInfo: {
      name: 'Lisa Brown',
      contact: '07700 900567',
      email: 'lisa.b@example.com',
      situation: 'Divorce/Separation'
    },
    images: ['https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 91,
    potentialValue: 460000,
    listedStatus: 'off-market',
    dateAdded: '2023-10-05'
  },
  {
    id: '6',
    address: '8 Riverside Apartments',
    city: 'Manchester',
    postcode: 'M3 4BT',
    price: 280000,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'Apartment',
    squareFeet: 850,
    description: 'Modern riverside apartment with balcony and secure parking. Current owner is an investor looking to liquidate assets for a new venture.',
    ownerInfo: {
      name: 'Thomas Green',
      contact: '07700 900890',
      email: 't.green@example.com',
      situation: 'Investment liquidation'
    },
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 84,
    potentialValue: 310000,
    listedStatus: 'coming-soon',
    dateAdded: '2023-11-15'
  }
];

export const propertyTypes = [
  'Any Type',
  'Detached House',
  'Semi-Detached',
  'Terraced House',
  'Apartment',
  'Bungalow',
  'Cottage',
  'Mansion',
  'Farm',
  'Land'
];

export const cities = [
  'Any Location',
  'London',
  'Manchester',
  'Birmingham',
  'Liverpool',
  'Bristol',
  'Leeds',
  'Edinburgh',
  'Glasgow',
  'Cardiff',
  'Belfast'
];

export const priceRanges = [
  { min: 0, max: 250000, label: 'Under £250,000' },
  { min: 250000, max: 500000, label: '£250,000 - £500,000' },
  { min: 500000, max: 750000, label: '£500,000 - £750,000' },
  { min: 750000, max: 1000000, label: '£750,000 - £1,000,000' },
  { min: 1000000, max: 10000000, label: 'Over £1,000,000' }
];

export const bedroomOptions = [
  'Any',
  '1+',
  '2+',
  '3+',
  '4+',
  '5+'
];
