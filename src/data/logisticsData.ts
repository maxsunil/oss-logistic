import logo from '../assets/images/logo.jpg';
import heroFleet from '../assets/images/hero-fleet.jpg';
import roadFtlFreight from '../assets/images/road-ftl-freight.jpg';
import roadExpressVan from '../assets/images/road-express-van.jpg';
import greenFleetHighway from '../assets/images/green-fleet-highway.jpg';
import aboutHubOperations from '../assets/images/about-hub-operations.jpg';
import processDispatchControl from '../assets/images/process-dispatch-control.jpg';

export type PageRoute =
  | 'home'
  | 'about'
  | 'services'
  | 'franchise'
  | 'process'
  | 'network'
  | 'why-us'
  | 'contact';

export interface NavItem {
  id: PageRoute;
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'franchise', label: 'Franchise', path: '/franchise' },
  { id: 'process', label: 'Process', path: '/process' },
  { id: 'network', label: 'Network', path: '/network' },
  { id: 'why-us', label: 'Why Us', path: '/why-us' },
  { id: 'contact', label: 'Contact Us', path: '/contact' },
];

export const COMPANY_INFO = {
  name: 'OSS Logistics ',
  tagline: 'Connecting Your World',
  motto: 'Faster • Safer • Greener',
  phonePrimary: '+91 22 4890 7200',
  phoneSecondary: '+91 98200 44120',
  email: 'info@oss-logistics.com',
  addressShort: '402, 4th floor, Sheetal Enclave, Near Vibgyor School, Chincholi Bunder, Malad West, Mumbai-400064.',
  addressFull: '402, 4th floor, Sheetal Enclave, Near Vibgyor School, Chincholi Bunder, Malad West, Mumbai-400064.',
};

export const IMAGES = {
  logo,
  heroFleet,
  roadFtlFreight,
  roadExpressVan,
  greenFleetHighway,
  aboutHubOperations,
  processDispatchControl,
};

export interface HubZone {
  id: string;
  code: string;
  title: string;
  mobileTitle: string;
  hubs: string[];
  highlight: string;
  corridors: string;
}

export const HUB_ZONES: HubZone[] = [
  {
    id: 'west',
    code: 'WEST ZONE • 9 HUBS',
    title: 'Mumbai & Gujarat',
    mobileTitle: 'Mumbai, Pune & Gujarat',
    hubs: [
      'Navi Mumbai',
      'Bhiwandi',
      'Chakan',
      'Ahmedabad',
      'Surat',
      'Vapi',
      'Vadodara',
      'Nashik',
      'Rajkot',
    ],
    highlight: 'Daily departures • 18+ bays',
    corridors: 'NH-48 Mumbai–Ahmedabad–Pune Industrial Belt',
  },
  {
    id: 'north',
    code: 'NORTH ZONE • 7 HUBS',
    title: 'Delhi NCR & Jaipur',
    mobileTitle: 'Delhi NCR & Rajasthan',
    hubs: ['Gurugram', 'Kundli', 'Noida', 'Bhiwadi', 'Jaipur', 'Ludhiana', 'Rudrapur'],
    highlight: '24–48 hr express lanes',
    corridors: 'Delhi–Jaipur–Ludhiana Express Relay Network',
  },
  {
    id: 'south',
    code: 'SOUTH ZONE • 7 HUBS',
    title: 'Bengaluru & Chennai',
    mobileTitle: 'Bengaluru, Chennai & Hyd',
    hubs: [
      'Nelamangala',
      'Hosur',
      'Sriperumbudur',
      'Hyderabad',
      'Coimbatore',
      'Kochi',
      'Vijayawada',
    ],
    highlight: 'Cold-chain & auto corridors',
    corridors: 'NH-44 & NH-48 Southern Auto & Pharma Lanes',
  },
  {
    id: 'east',
    code: 'EAST & CENTRAL • 5 HUBS',
    title: 'Kolkata & Nagpur',
    mobileTitle: 'Kolkata, Nagpur & Indore',
    hubs: ['Dankuni', 'Jamshedpur', 'Raipur', 'Nagpur', 'Pithampur (Indore)'],
    highlight: 'Heavy steel & plant lanes',
    corridors: 'Central Multimodal & Eastern Industrial Steel Corridor',
  },
];
