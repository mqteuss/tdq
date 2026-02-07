export interface EnergyType {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  obtained: string;
  usage: string;
  pros: string[];
  cons: string[];
  impacts: string;
  examples: string[];
  iconName: string;
  imageUrl: string;
}

export interface Transformation {
  id: string;
  from: string;
  to: string;
  description: string;
  industrialApplication: string;
  icon: string;
}

export type Theme = 'light' | 'dark';

export interface UserContextType {
  name: string;
  setName: (name: string) => void;
  theme: Theme;
  toggleTheme: () => void;
}