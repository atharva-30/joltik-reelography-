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

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    title: 'Birthday Reels',
    items: [
      { id: 'b1', title: 'Sarah\'s 21st Bash', thumbnail: 'https://picsum.photos/400/600?random=1', views: '15k', link: '#' },
      { id: 'b2', title: 'Rohan\'s Surprise', thumbnail: 'https://picsum.photos/400/600?random=2', views: '8.5k', link: '#' },
      { id: 'b3', title: 'Sweet 16 Montage', thumbnail: 'https://picsum.photos/400/600?random=3', views: '12k', link: '#' },
    ]
  },
  {
    title: 'Wedding Reels',
    items: [
      { id: 'w1', title: 'Royal Jaipur Wedding', thumbnail: 'https://picsum.photos/400/600?random=4', views: '45k', link: '#' },
      { id: 'w2', title: 'Beachside Vows', thumbnail: 'https://picsum.photos/400/600?random=5', views: '32k', link: '#' },
      { id: 'w3', title: 'Haldi Ceremony Highlights', thumbnail: 'https://picsum.photos/400/600?random=6', views: '28k', link: '#' },
    ]
  },
  {
    title: 'Building Site Reels',
    items: [
      { id: 're1', title: 'Skyline Luxury Apts', thumbnail: 'https://picsum.photos/400/600?random=7', views: '10k', link: '#' },
      { id: 're2', title: 'Modern Villa Tour', thumbnail: 'https://picsum.photos/400/600?random=8', views: '5k', link: '#' },
      { id: 're3', title: 'Commercial Complex', thumbnail: 'https://picsum.photos/400/600?random=9', views: '7.2k', link: '#' },
    ]
  },
  {
    title: 'Commercial Outlet Reels',
    items: [
      { id: 'c1', title: 'Urban Coffee House', thumbnail: 'https://picsum.photos/400/600?random=10', views: '55k', link: '#' },
      { id: 'c2', title: 'Neon Gym Promo', thumbnail: 'https://picsum.photos/400/600?random=11', views: '22k', link: '#' },
      { id: 'c3', title: 'Fashion Boutique Launch', thumbnail: 'https://picsum.photos/400/600?random=12', views: '18k', link: '#' },
    ]
  },
  {
    title: 'Music Videos',
    items: [
      { id: 'm1', title: 'Midnight Drive - MV', thumbnail: 'https://picsum.photos/400/600?random=13', views: '120k', link: '#' },
      { id: 'm2', title: 'Rap Cypher Edit', thumbnail: 'https://picsum.photos/400/600?random=14', views: '80k', link: '#' },
      { id: 'm3', title: 'Acoustic Cover', thumbnail: 'https://picsum.photos/400/600?random=15', views: '45k', link: '#' },
    ]
  },
];

export const SERVICES: Service[] = [
  {
    title: 'Event Reel Editing',
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