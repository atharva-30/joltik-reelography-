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
  { label: 'From the Editor', href: '#testimonials' },
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
    videos: [
      'https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1',
    ],
  },
  {
    id: 4,
    title: 'Building Site Reels',
    videos: [
      'https://go.screenpal.com/player/cTlIb3nYOEd?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlIbqnYOEA?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlIbYnYOEp?autoplay=0&muted=1&loop=1&controls=1',
    ],
  },
  {
    id: 5,
    title: 'Music Videos',
    videos: [
      'https://go.screenpal.com/player/cTlIbbnYOEy?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlIb6nYOE2?autoplay=0&muted=1&loop=1&controls=1',
      'https://go.screenpal.com/player/cTlIbrnYOEG?autoplay=0&muted=1&loop=1&controls=1',
    ],
  },
];

/* ---------------- SERVICES ---------------- */

export const SERVICES: Service[] = [
  {
    title: 'Event Reels',
    description:
      'High-energy edits that capture crowd reactions, key moments, and the overall vibe of live events.',
    deliverables: [
      'Fast-paced storytelling',
      'Beat-synced cuts',
      'Highlight-driven flow',
    ],
    priceRange: '₹5,000 – ₹10,000',
    icon: PartyPopper,
  },
  {
    title: 'Commercial Outlet Reels',
    description:
      'Short-form promotional reels designed to visually sell products, spaces, and brand identity.',
    deliverables: [
      'Product-focused framing',
      'Smooth transitions',
      'Attention-grabbing hooks',
    ],
    priceRange: '₹8,000 – ₹15,000',
    icon: ShoppingBag,
  },
  {
    title: 'Wedding Reels',
    description:
      'Emotion-driven cinematic reels that summarize the essence of the wedding day.',
    deliverables: [
      'Story-based sequencing',
      'Soft cinematic color tones',
      'Music-synced emotional moments',
    ],
    priceRange: '₹12,000 – ₹25,000',
    icon: Video,
  },
  {
    title: 'Music Video Reels',
    description:
      'Creative edits built around rhythm, mood, and artist personality.',
    deliverables: [
      'Beat-focused cuts',
      'Visual flow consistency',
      'Performance-driven pacing',
    ],
    priceRange: '₹10,000 – ₹20,000',
    icon: Music,
  },
  {
    title: 'Real Estate Reels',
    description:
      'Clean and smooth walkthrough-style reels showcasing architecture and spatial flow.',
    deliverables: [
      'Stabilized motion',
      'Wide-frame emphasis',
      'Informative text highlights',
    ],
    priceRange: '₹6,000 – ₹12,000',
    icon: Building2,
  },
];

/* ---------------- TESTIMONIALS ---------------- */

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Event Organizer',
    content:
      'Atharva transformed our event footage into a masterpiece. The pacing was incredible and engagement skyrocketed on our page!',
    image: 'https://picsum.photos/100/100?random=20',
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Pop Singer',
    content:
      'Joltik Reelography understands rhythm. My music video teaser was edited perfectly to the beat. Highly recommended.',
    image: 'https://picsum.photos/100/100?random=21',
  },
  {
    id: 3,
    name: 'Elite Properties',
    role: 'Real Estate Agency',
    content:
      'Professional, fast, and the quality is unmatched. Our property walkthroughs look cinematic now.',
    image: 'https://picsum.photos/100/100?random=22',
  },
  {
    id: 4,
    name: 'Mike & Jenny',
    role: 'Newlyweds',
    content:
      'We cried watching our wedding reel. He captured the emotions so beautifully. Thank you Atharva!',
    image: 'https://picsum.photos/100/100?random=23',
  },
];
