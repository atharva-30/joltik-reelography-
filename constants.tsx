import {
  Video,
  PartyPopper,
  Building2,
  ShoppingBag,
  Music,
} from 'lucide-react';

import { NavLink, Service, Testimonial } from './types';

/* ---------------- NAVIGATION ---------------- */

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

/* ---------------- PORTFOLIO REELS ---------------- */

export const PORTFOLIO_REELS = [
  {
    id: 1,
    title: 'Weddingg Reels',
    videos: [
      'https://go.screenpal.com/player/cTlvlFnrexj?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlvlFnrexQ?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlvlFnrexi?autoplay=0&muted=1&loop=1&controls=1',
    ],
  },
  {
    id: 2,
    title: 'Commercial Outlet Reels',
    videos: [
      'https://go.screenpal.com/player/cTlIb3nYOEd?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlIbqnYOEA?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1',
    ],
  },
  {
    id: 3,
    title: 'Birthday Reels',
    vid
