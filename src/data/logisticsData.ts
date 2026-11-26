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
  name: 'OSS Logistics LLP',
  tagline: 'Connecting Your World',
  motto: 'Faster • Safer • Greener',
  phonePrimary: '+91 22 4890 7200',
  phoneSecondary: '+91 98200 44120',
  email: 'dispatch@osslogistics.in',
  addressShort: '402, 4th floor, Sheetal Enclave, Near Vibgyor School, Chincholi Bunder, Malad West, Mumbai-400064.',
  addressFull: '402, 4th floor, Sheetal Enclave, Near Vibgyor School, Chincholi Bunder, Malad West, Mumbai-400064.',
};

export const IMAGES = {
  logo: 'https://lh3.googleusercontent.com/aida/ALJJyrBlIr3E4TbxqGyp4HRLG5X5GMBRcKHSN-dJO8BCMgDZRmDddLVy1Y0Uldj9LSKXgFio7zQKDwD8mpYCKfH29WPP_foURIFBRnLqpjN1_qHP6e_rOXsjWjyknPA14jECsJhP98debYX9B0i2qAkk_ma5yCV9Md3bP-c6Otr66oB2BCbwuHc6QEC0i-xCnChbtAtiBzNoTYLIIsk-_jrF7zqh9IkvFonSJZVv4keDZzT0p2bxOlkqKvMYHBVV',
  heroFleet:
    'https://lh3.googleusercontent.com/aida/ALJJyrCTJFNEl5nrydr0fJ1ciVbRqGZXHegI0bibx_xWn5exB5U1i3RE5_v69XFQ885PSrubr0AK6cTPMu3BTj_gFzwZCMMvTFRRPt-cGGOmjrzywb7xX-Djt9el1yn8q8HhmJd8xMXwbPjQLTW1PNrGu8Nw-VkdvaelmR0OuITuYvL_1mBl2b4rIXWoDpEJispmWeNt2N_iYs3kIog_zgp-BnVtn6PryJOKwV1Sd-GuDGv8--DFHG8',
  roadFtlFreight:
    'https://lh3.googleusercontent.com/aida/ALJJyrC1Y6BYpkkZ6hvSbx3KN4cDkiJvlS23vXzDKguANqoNfiCp3Ewqp1gGGblT9f9nU-hIxRVaxJ2pswq2VnExD9x5TpYj5IxHeJGfYZgeE66UjzSd2bQkmR29NKG-VPDgCOp_PA-x7mMyfg9YZSFRNBPpxzXAdSrDVKpp_dYNQgAhQrNs8iNAYc4qPObvFFb0hXktMkasvI-SUiebnEzXc0CVZ0qdwIfL0SuXDPCkPix1osC-g8GkiASC-fQ',
  roadExpressVan:
    'https://lh3.googleusercontent.com/aida/ALJJyrBIWglG9QHVMXea_BW7D2Wvr3BK9WEWexM1wBX8mEQJsdbLIC7wOrMIC6-cTg0I84GyRa5hP5imlJJQE9M_GJKyj0N0TFsvvr2ariLyjoqz3x4lyOa1OggbqENIkydw-aa3PUdn7k6p_7HuFSFvmZUHhpjhR8AffHsDZdTMMiZyW-rRDAPBQpE8I42wIpTtJFhvSOncejf0VEUFa8i7fwSRDQKlllZPskLn8f2MgM94iNzAmT_0BMP2ecSi',
  greenFleetHighway:
    'https://lh3.googleusercontent.com/aida/ALJJyrCLdNXcYkUYXyrC8uwbYcifHj6SfWoH8Qe3d-JYB9QuMTQohoPAcZBmi_TLQSFIE0vvoFo_dOG_ZD6WuPRbiDFr6x1k7eurMDmloidKOwDUsUiBYV6bonFYYsFU3aY1xSRK8c3O1_JHxHZ8uwkFhlaAKEOoDtc0AuOAZhFYQGLyazIX1ygmqSkjqiBt5JD9EXudSEAa9gOILxXT-QyhvGcT6VhCBz50lwjEmB9vqdeaRtsGLxPMPHxExiQ7rYEb',
  aboutHubOperations:
    'https://lh3.googleusercontent.com/aida/ALJJyrAkqWhJ613RPLWr6QxKVGZ9kQkUT140R6kLsKx0XfA4eWAf1kbe-4uPuO49nETQg3NZV71JLvUPj0qu5akYNyoJm9oit7UN3UizsTmcvM1nehU13ZAkVb6Q26jb4sZHrwxgxNBtEXX2z2E7JJ8Mdc8vIh3LMcoDnERmosfEC5Jv6B8bI7XvGPmk83EheANToinztQS68-GzNNjW1QSuAiFOBvKzthMEzDG9UjiyzqtvtjqNbXij-6wWRZMRQ0hAWw',
  processDispatchControl:
    'https://lh3.googleusercontent.com/aida/ALJJyrCsq30tDPJDjbTp3BuIWawGB8kVtEhHYufY0vm9JE8xffiiSrziST6rZmI1dZ6JTUf3nsU5mc9bpc__ZlyNJ8EykGjYhHswsohvWUnx-JcwrvZIeYoqLozPtdh-Pm-uyTVAAxy-syI1YgmjMPHgjip26CVj0XePSy4-lcBu3LOexnNNHvnPBZ64r73_OcBHxnrK7jWiPBLMMvLLfeXzD_NKPnxHSJ6a7mYHeppCW8B3pzpcklhxZO1iBIc93WYyBI813No',
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
