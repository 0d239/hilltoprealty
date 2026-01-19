export interface Listing {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  lotSize: string;
  yearBuilt: number;
  propertyType: string;
  status: 'active' | 'pending' | 'sold';
  description: string;
  features: string[];
  images: string[];
}

export const listings: Listing[] = [
  {
    id: '1',
    address: '425 Hillcrest Drive',
    city: 'Hollister',
    state: 'CA',
    zip: '95023',
    price: 725000,
    bedrooms: 4,
    bathrooms: 2.5,
    sqft: 2150,
    lotSize: '0.25 acres',
    yearBuilt: 2018,
    propertyType: 'Single Family',
    status: 'active',
    description: 'Beautiful modern home in desirable Hollister neighborhood. Open floor plan with abundant natural light, gourmet kitchen with stainless steel appliances, and spacious backyard perfect for entertaining.',
    features: ['Central A/C', 'Hardwood Floors', '2-Car Garage', 'Granite Counters', 'Covered Patio'],
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop'],
  },
  {
    id: '2',
    address: '1892 San Juan Road',
    city: 'Hollister',
    state: 'CA',
    zip: '95023',
    price: 589000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1650,
    lotSize: '6,500 sqft',
    yearBuilt: 2005,
    propertyType: 'Single Family',
    status: 'active',
    description: 'Charming single-story home with upgraded kitchen, new flooring throughout, and a peaceful backyard retreat. Conveniently located near schools and shopping.',
    features: ['Single Story', 'Updated Kitchen', 'New Flooring', 'Low Maintenance Yard', 'Quiet Street'],
    images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop'],
  },
  {
    id: '3',
    address: '3421 Vineyard Lane',
    city: 'Hollister',
    state: 'CA',
    zip: '95023',
    price: 895000,
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3200,
    lotSize: '0.5 acres',
    yearBuilt: 2020,
    propertyType: 'Single Family',
    status: 'pending',
    description: 'Stunning executive home with panoramic views of the surrounding hills. Features include a chef\'s kitchen, home office, three-car garage, and resort-style backyard with pool.',
    features: ['Pool', 'Mountain Views', 'Home Office', '3-Car Garage', 'Smart Home'],
    images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'],
  },
  {
    id: '4',
    address: '567 Orchard Way',
    city: 'San Juan Bautista',
    state: 'CA',
    zip: '95045',
    price: 465000,
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1100,
    lotSize: '5,000 sqft',
    yearBuilt: 1985,
    propertyType: 'Single Family',
    status: 'active',
    description: 'Cozy starter home in historic San Juan Bautista. Walking distance to downtown shops and restaurants. Great investment opportunity with rental potential.',
    features: ['Historic District', 'Walking Distance to Downtown', 'Mature Trees', 'Original Hardwood'],
    images: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&h=600&fit=crop'],
  },
  {
    id: '5',
    address: '2100 Ridgemark Drive',
    city: 'Hollister',
    state: 'CA',
    zip: '95023',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3800,
    lotSize: '1 acre',
    yearBuilt: 2022,
    propertyType: 'Single Family',
    status: 'active',
    description: 'Luxurious custom-built estate in prestigious Ridgemark community. No detail spared with imported Italian tile, custom millwork, wine cellar, and outdoor kitchen.',
    features: ['Wine Cellar', 'Outdoor Kitchen', 'Custom Built', 'Golf Course Views', 'Gated Community'],
    images: ['https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop'],
  },
  {
    id: '6',
    address: '789 Sunset Avenue',
    city: 'Hollister',
    state: 'CA',
    zip: '95023',
    price: 549000,
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1450,
    lotSize: '7,200 sqft',
    yearBuilt: 1998,
    propertyType: 'Single Family',
    status: 'sold',
    description: 'Well-maintained home in established neighborhood. Features include an open concept living area, large master suite, and beautifully landscaped yard.',
    features: ['Open Concept', 'Large Master', 'RV Parking', 'Fruit Trees', 'Corner Lot'],
    images: ['https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=800&h=600&fit=crop'],
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
}
