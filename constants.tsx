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



export const SERVICES: Service[] = [
  {
    title: 'Event Reel Editing',
    
export const PORTFOLIO_CATEGORIES = [
  {
    title: "Music Reels",
    items: [
      {
        id: 1,
        title: "Hip Hop Reel",
        thumbnail: "/thumbnails/music1.jpg",
        videoId: "cTlIXfnYO3k",
      },
      {
        id: 2,
        title: "Beat Drop",
        thumbnail: "/thumbnails/music2.jpg",
        videoId: "REPLACE_2",
      },
      {
        id: 3,
        title: "DJ Promo",
        thumbnail: "/thumbnails/music3.jpg",
        videoId: "REPLACE_3",
      },
    ],
  },

  {
    title: "Wedding Reels",
    items: [
      {
        id: 4,
        title: "Bride Entry",
        thumbnail: "/thumbnails/wedding1.jpg",
        videoId: "REPLACE_4",
      },
      {
        id: 5,
        title: "Couple Edit",
        thumbnail: "/thumbnails/wedding2.jpg",
        videoId: "REPLACE_5",
      },
      {
        id: 6,
        title: "Reception",
        thumbnail: "/thumbnails/wedding3.jpg",
        videoId: "REPLACE_6",
      },
    ],
  },
];

    description: 'Capturing the energy and key moments of your events with fast-paced cuts.',
    deliverables: ['30-60 sec Reel', 'Color Grading', 'Sound Design'],
    priceRange: 'Starts at $150',
    icon: PartyPopper
  },
  {
    title: 'Commercial / Outlet Promo',
    description: 'High-conversion edits designed to showcase products and store ambiance.',
    deliverables: ['Trend Research', 'Dynamic Transitions', 'CTA Overlay'],
    priceRange: 'Starts at $200',
    icon: ShoppingBag
  },
  {
    title: 'Wedding Highlights',
    description: 'Cinematic storytelling that immortalizes your special day emotionally.',
    deliverables: ['Cinematic Color Grade', 'Slow Motion', 'Music Sync'],
    priceRange: 'Starts at $300',
    icon: Video
  },
  {
    title: 'Music Video Editing',
    description: 'Professional cuts, effects, and flow for artists and bands.',
    deliverables: ['VFX Basics', 'Beat Sync', '4K Export'],
    priceRange: 'Starts at $400',
    icon: Music
  },
  {
    title: 'Building/Real Estate',
    description: 'Smooth, stabilizing walkthroughs that sell properties faster.',
    deliverables: ['Speed Ramping', 'Text Overlay', 'Wide Angle Corrections'],
    priceRange: 'Starts at $180',
    icon: Building2
  },
  {
    title: 'Travel / Cinematic',
    description: 'Inspiring travelogues that bring destinations to life.',
    deliverables: ['Soundscapes', 'LUTS', 'Story Arc'],
    priceRange: 'Starts at $250',
    icon: Plane
  }
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
