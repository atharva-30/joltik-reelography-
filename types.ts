import { LucideIcon } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  title: string;
  thumbnail: string;
  views?: string;
  link: string;
}

export interface PortfolioCategory {
  title: string;
  items: PortfolioItem[];
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
  priceRange: string;
  icon: LucideIcon;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}