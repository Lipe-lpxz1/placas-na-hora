import { LucideIcon } from 'lucide-react';

export interface PriceItem {
  service: string;
  value: string;
  highlight?: boolean;
}

export interface PriceCategory {
  id: string;
  title: string;
  iconName: 'Bike' | 'Car' | 'Star';
  description: string;
  items: PriceItem[];
}

export interface FeatureItem {
  title: string;
  description: string;
  iconName: 'Clock' | 'ShieldCheck' | 'BadgeDollarSign';
}