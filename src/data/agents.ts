export interface Agent {
  id: string;
  name: string;
  title: string;
  license: string;
  phone: string;
  email: string;
  image: string;
  bio: string;
  specialties: string[];
}

export const agents: Agent[] = [
  {
    id: 'henry-estrada',
    name: 'Enrique "Henry" Estrada',
    title: 'Owner/Broker, GRI',
    license: 'DRE# 01200315',
    phone: '(408) 804-1511',
    email: 'EstradaSold@MyHillTopRealty.com',
    image: 'https://global.acceleragent.com/usr/13705421761/1161817043.jpg',
    bio: 'Henry Estrada is your Hollister CA Real Estate Specialist, bringing expert knowledge and valuable experience blended with the latest technology to serve both buyers and sellers in the San Benito County area. With deep roots in the community and a commitment to personalized service, Henry has helped countless families find their perfect home.',
    specialties: [
      'Residential Sales',
      'First-Time Homebuyers',
      'Investment Properties',
      'Relocation Services',
      'Market Analysis',
    ],
  },
];

export const companyInfo = {
  name: 'Hilltop Realty',
  tagline: 'Your Hollister CA Real Estate Specialist',
  address: '330 Tres Pinos Rd, Suite F8-3',
  city: 'Hollister',
  state: 'CA',
  zip: '95023',
  phone: '(831) 637-1055',
  fax: '(831) 637-1355',
  email: 'EstradaSold@MyHillTopRealty.com',
  social: {
    instagram: 'https://instagram.com/enriquehenryestrada',
    facebook: 'https://facebook.com/EnriqueEstradaCA',
  },
  mlsAffiliations: ['MLSListings (Bay Area)', 'MetroList (Sacramento)', 'Fresno MLS'],
};
