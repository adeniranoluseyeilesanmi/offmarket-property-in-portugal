export interface VendorFinancing {
  available: boolean;
  downPaymentRequired: number; // percentage
  interestRate: number; // percentage
  termYears: number;
  monthlyPayment?: number;
  conditions: string[];
  reasonForOffering: string;
}

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
  vendorFinancing: VendorFinancing;
}

export const mockProperties: Property[] = [
  {
    id: '1',
    address: 'Rua das Flores, 123',
    city: 'Lisboa',
    postcode: '1200-192',
    price: 450000,
    bedrooms: 4,
    bathrooms: 2,
    propertyType: 'Moradia Isolada',
    squareFeet: 2100,
    description: 'Bela moradia isolada com jardim necessitando de pequenas renovações. Proprietário relocando-se por trabalho e procurando venda rápida. Propriedade na família há 15 anos.',
    ownerInfo: {
      name: 'João Silva',
      contact: '+351 912 345 678',
      email: 'joao.silva@exemplo.com',
      situation: 'Relocação por trabalho'
    },
    images: ['https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 92,
    potentialValue: 520000,
    listedStatus: 'off-market',
    dateAdded: '2023-10-15',
    vendorFinancing: {
      available: true,
      downPaymentRequired: 25,
      interestRate: 4.5,
      termYears: 15,
      monthlyPayment: 2584,
      conditions: ['Entrada mínima 25%', 'Seguro de vida obrigatório', 'Escritura em 30 dias'],
      reasonForOffering: 'Necessidade de liquidez rápida para nova aquisição'
    }
  },
  {
    id: '2',
    address: 'Avenida da Liberdade, 45',
    city: 'Porto',
    postcode: '4000-322',
    price: 325000,
    bedrooms: 3,
    bathrooms: 1,
    propertyType: 'Moradia Geminada',
    squareFeet: 1500,
    description: 'Encantadora moradia geminada em bairro tranquilo. Proprietários procuram reduzir agora que os filhos saíram de casa. Propriedade com grande potencial para ampliação.',
    ownerInfo: {
      name: 'Maria Santos',
      contact: '+351 918 765 432',
      email: 'maria.s@exemplo.com',
      situation: 'Redução de tamanho'
    },
    images: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 87,
    potentialValue: 380000,
    listedStatus: 'coming-soon',
    dateAdded: '2023-11-02',
    vendorFinancing: {
      available: false,
      downPaymentRequired: 0,
      interestRate: 0,
      termYears: 0,
      conditions: [],
      reasonForOffering: ''
    }
  },
  {
    id: '3',
    address: 'Quinta do Sol, 7',
    city: 'Braga',
    postcode: '4700-123',
    price: 550000,
    bedrooms: 5,
    bathrooms: 3,
    propertyType: 'Moradia Isolada',
    squareFeet: 2800,
    description: 'Grande casa familiar com extensos jardins e garagem dupla. Proprietários reformando-se e planejando mudar-se para o estrangeiro. Alguma modernização necessária mas excelente estrutura.',
    ownerInfo: {
      name: 'Roberto & Ana Costa',
      contact: '+351 933 456 789',
      email: 'r.costa@exemplo.com',
      situation: 'Reforma no estrangeiro'
    },
    images: ['https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 95,
    potentialValue: 650000,
    listedStatus: 'off-market',
    dateAdded: '2023-09-28',
    vendorFinancing: {
      available: true,
      downPaymentRequired: 30,
      interestRate: 5.2,
      termYears: 20,
      monthlyPayment: 2563,
      conditions: ['Entrada 30%', 'Taxa fixa por 5 anos', 'Avaliação bancária necessária'],
      reasonForOffering: 'Facilitar venda rápida antes da mudança'
    }
  },
  {
    id: '4',
    address: 'Rua Augusta, 15',
    city: 'Lisboa',
    postcode: '1100-048',
    price: 720000,
    bedrooms: 2,
    bathrooms: 2,
    propertyType: 'Apartamento',
    squareFeet: 950,
    description: 'Apartamento moderno em localização premium. Proprietário herdou outro imóvel e está motivado para vender rapidamente. Propriedade completamente renovada há 2 anos.',
    ownerInfo: {
      name: 'Carlos Oliveira',
      contact: '+351 924 567 890',
      email: 'c.oliveira@exemplo.com',
      situation: 'Herdou outro imóvel'
    },
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80'],
    aiMatchScore: 89,
    potentialValue: 795000,
    listedStatus: 'lead',
    dateAdded: '2023-11-10',
    vendorFinancing: {
      available: true,
      downPaymentRequired: 20,
      interestRate: 3.8,
      termYears: 25,
      monthlyPayment: 2688,
      conditions: ['Entrada mínima 20%', 'Rendimento comprovado', 'Seguro habitação'],
      reasonForOffering: 'Investimento em novo negócio'
    }
  },
  {
    id: '5',
    address: 'Travessa da Paz, 22',
    city: 'Coimbra',
    postcode: '3000-456',
    price: 400000,
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'Moradia em Banda',
    squareFeet: 1600,
    description: 'Casa de época lindamente mantida com características originais. Proprietários separando-se e precisam vender nos próximos meses.',
    ownerInfo: {
      name: 'Luísa Ferreira',
      contact: '+351 917 678 901',
      email: 'luisa.f@exemplo.com',
      situation: 'Divórcio/Separação'
    },
    images: ['https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 91,
    potentialValue: 460000,
    listedStatus: 'off-market',
    dateAdded: '2023-10-05',
    vendorFinancing: {
      available: false,
      downPaymentRequired: 0,
      interestRate: 0,
      termYears: 0,
      conditions: [],
      reasonForOffering: ''
    }
  },
  {
    id: '6',
    address: 'Apartamentos Riverside, 8',
    city: 'Porto',
    postcode: '4150-123',
    price: 280000,
    bedrooms: 2,
    bathrooms: 1,
    propertyType: 'Apartamento',
    squareFeet: 850,
    description: 'Apartamento moderno junto ao rio com varanda e estacionamento seguro. Atual proprietário é um investidor procurando liquidar ativos para novo empreendimento.',
    ownerInfo: {
      name: 'Tomás Verde',
      contact: '+351 935 789 012',
      email: 't.verde@exemplo.com',
      situation: 'Liquidação de investimento'
    },
    images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80'],
    aiMatchScore: 84,
    potentialValue: 310000,
    listedStatus: 'coming-soon',
    dateAdded: '2023-11-15',
    vendorFinancing: {
      available: true,
      downPaymentRequired: 15,
      interestRate: 4.2,
      termYears: 30,
      monthlyPayment: 1169,
      conditions: ['Entrada flexível a partir de 15%', 'Taxa variável após 3 anos'],
      reasonForOffering: 'Necessita de capital para novo projeto'
    }
  }
];

export const propertyTypes = [
  'Qualquer Tipo',
  'Moradia Isolada',
  'Moradia Geminada',
  'Moradia em Banda',
  'Apartamento',
  'Bungalow',
  'Quinta',
  'Mansão',
  'Terreno'
];

export const cities = [
  'Qualquer Localização',
  'Lisboa',
  'Porto',
  'Braga',
  'Coimbra',
  'Aveiro',
  'Faro',
  'Évora',
  'Viseu',
  'Leiria',
  'Setúbal'
];

export const priceRanges = [
  { min: 0, max: 250000, label: 'Abaixo de €250.000' },
  { min: 250000, max: 500000, label: '€250.000 - €500.000' },
  { min: 500000, max: 750000, label: '€500.000 - €750.000' },
  { min: 750000, max: 1000000, label: '€750.000 - €1.000.000' },
  { min: 1000000, max: 10000000, label: 'Acima de €1.000.000' }
];

export const bedroomOptions = [
  'Qualquer',
  '1+',
  '2+',
  '3+',
  '4+',
  '5+'
];
