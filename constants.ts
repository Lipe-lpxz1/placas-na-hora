import { PriceCategory, FeatureItem } from './types';

export const WHATSAPP_NUMBER = "5511962572574";

export const createWhatsAppLink = (message: string) => 
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const WHATSAPP_DEFAULT_MESSAGE = "Olá! Gostaria de fazer um orçamento para uma placa.";
export const WHATSAPP_LINK = createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE);

export const FEATURES: FeatureItem[] = [
  {
    title: "Rapidez Extrema",
    description: "Não perca tempo em filas. Sua placa é estampada e entregue em minutos enquanto você toma um café.",
    iconName: "Clock"
  },
  {
    title: "Padrão Oficial",
    description: "Material de alta resistência, com película refletiva homologada e QR Code de segurança oficial do Mercosul.",
    iconName: "ShieldCheck"
  },
  {
    title: "Preço Justo",
    description: "Sem taxas escondidas. Oferecemos o melhor custo-benefício da região com total transparência.",
    iconName: "BadgeDollarSign"
  }
];

export const PRICING_DATA: PriceCategory[] = [
  {
    id: 'motos',
    title: 'Motos',
    iconName: 'Bike',
    description: 'Para motocicletas, motonetas e triciclos.',
    items: [
      { service: 'Placa Padrão (1ª Via)', value: 'R$ 80,00', highlight: true },
      { service: 'Segunda Via (Reposição)', value: 'R$ 200,00' },
    ]
  },
  {
    id: 'carros',
    title: 'Carros e Utilitários',
    iconName: 'Car',
    description: 'Para veículos de passeio, caminhonetes e caminhões.',
    items: [
      { service: 'Primeira Via', value: 'R$ 120,00', highlight: true },
      { service: 'Segunda Via (Par Dianteira/Traseira)', value: 'R$ 250,00' },
    ]
  },
  {
    id: 'especiais',
    title: 'Especiais e Coleção',
    iconName: 'Star',
    description: 'Modelos diferenciados para colecionadores e decoração.',
    items: [
      { service: 'Placa Preta (Colecionador)', value: 'R$ 300,00' },
      { service: 'Placa Mini / Reduzida', value: 'R$ 300,00' },
      { service: 'Decorativa', value: 'A partir de R$ 160,00' },
    ]
  }
];