import { 
  Video, 
  PartyPopper, 
  Building2, 
  ShoppingBag, 
  Music, 
  Plane,
  Clapperboard
} from 'lucide-react';
import { NavLink, PortfolioCategory, Service, Testimonial } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export const PORTFOLIO_REELS = [
  {
    id: 1,
    title: "Birthday Reels",
    videos: [
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
    ],
  },
  {
    id: 2,
    title: "Wedding Reels",
    videos: [
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
    ],
  },
  {
    id: 3,
    title: "Building Site Reels",
    videos: [
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
    ],
  },
  {
    id: 4,
    title: "Commercial Outlet Reels",
    videos: [
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
    ],
  },
  {
    id: 5,
    title: "Music Videos",
    videos: [
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
      "https://go.screenpal.com/player/cTlIXfnYO3k?autoplay=0&muted=1&loop=1&controls=1",
    ],
  },
];


export const SERVICES: Service[] = [
  {
    title: 'Event Reels',
    description: 'High-energy edits that capture crowd reactions, key moments, and the overall vibe of live events.',
    deliverables: [
      'Fast-paced storytelling',
      'Beat-synced cuts',
      'Highlight-driven flow'
    ],
    icon: PartyPopper
  },
  {
    title: 'Commercial / Outlet Promos',
    description: 'Short-form promotional reels designed to visually sell products, spaces, and brand identity.',
    deliverables: [
      'Product-focused framing',
      'Smooth transitions',
      'Attention-grabbing hooks'
    ],
    icon: ShoppingBag
  },
  {
    title: 'Wedding Highlight Reels',
    description: 'Emotion-driven cinematic reels that summarize the essence of the wedding day.',
    deliverables: [
      'Story-based sequencing',
      'Soft cinematic color tones',
      'Music-synced emotional moments'
    ],
    icon: Video
  },
  {
    title: 'Music Video Reels',
    description: 'Creative edits built around rhythm, mood, and artist personality.',
    deliverables: [
      'Beat-focused cuts',
      'Visual flow consistency',
      'Performance-driven pacing'
    ],
    icon: Music
  },
  {
    title: 'Real Estate / Building Reels',
    description: 'Clean and smooth walkthrough-style reels showcasing architecture and spatial flow.',
    deliverables: [
      'Stabilized motion',
      'Wide-frame emphasis',
      'Informative text highlights'
    ],
    icon: Building2
  },
];


export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Event Organizer",
    content: "Atharva transformed our event footage into a masterpiece. The pacing was incredible and engagement skyrocketed on our page!",
    image: "https://picsum.photos/100/100?random=20"
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Pop Singer",
    content: "Joltik Reelography understands rhythm. My music video teaser was edited perfectly to the beat. Highly recommended.",
    image: "https://picsum.photos/100/100?random=21"
  },
  {
    id: 3,
    name: "Elite Properties",
    role: "Real Estate Agency",
    content: "Professional, fast, and the quality is unmatched. Our property walkthroughs look cinematic now.",
    image: "https://picsum.photos/100/100?random=22"
  },
  {
    id: 4,
    name: "Mike & Jenny",
    role: "Newlyweds",
    content: "We cried watching our wedding reel. He captured the emotions so beautifully. Thank you Atharva!",
    image: "https://picsum.photos/100/100?random=23"
  }
];
