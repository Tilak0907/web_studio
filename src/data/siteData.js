export const BUSINESS_INFO = {
  brandName: 'KOPPEL WEB STUDIO',
  operatingName: '1001658259 ONTARIO CORP.',
  shortMark: 'SK',
  ownerName: 'Sean Koppel',
  ownerTitle: 'Owner & Principal Web Designer',
  businessType: 'Website Design Company',
  tagline: 'Bespoke Web Design & Digital Craft',
  address: {
    street: '129 Guelph Street',
    city: 'Oshawa',
    province: 'Ontario',
    postalCode: 'L1H 6H8',
    country: 'Canada',
    full: '129 Guelph Street, Oshawa, Ontario, L1H 6H8, Canada',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=129+Guelph+Street,+Oshawa,+Ontario,+L1H+6H8,+Canada',
  },
  phone: '437-443-8165',
  phoneHref: 'tel:+14374438165',
  email: 'seankoppel6@gmail.com',
  emailHref: 'mailto:seankoppel6@gmail.com',
  serviceArea: 'Oshawa, Durham Region, GTA & Across Canada',
};

export const NAV_LINKS = [
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Work' },
  { id: 'process', label: 'Process' },
  { id: 'packages', label: 'Packages' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

export const HERO_METRICS = [
  { value: '100%', label: 'Mobile-First & Responsive' },
  { value: '<1s', label: 'Targeted Page Load' },
  { value: 'Direct', label: 'Owner-Led Execution' },
];

export const STUDIO_BANNERS = {
  heroBackdrop:
    'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?auto=format&fit=crop&w=1920&q=85',
  heroShowcase:
    'https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?auto=format&fit=crop&w=1400&q=85',
  heroShowcaseFallback:
    'https://images.unsplash.com/photo-1542837336-d14bdf342f9b?auto=format&fit=crop&w=1400&q=85',
  heroShowcaseAlt:
    'Modern responsive web design setup on laptop and monitor in a dark creative studio',
  featureBanner:
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1920&q=85',
  featureAlt:
    'Modern website design studio desk with MacBook Pro and desktop display — 1001658259 Ontario Corp.',
};

export const SERVICES = [
  {
    id: 'custom-web-design',
    number: '01',
    icon: 'Layout',
    title: 'Custom Website Design',
    description:
      'Tailor-made visual systems built from a blank canvas—no generic cookie-cutter templates. Every typographic detail, color pairing, and section is shaped around your brand.',
    tags: ['Bespoke UI', 'Brand Alignment', 'Modern Layouts'],
  },
  {
    id: 'responsive-engineering',
    number: '02',
    icon: 'Smartphone',
    title: 'Mobile-First Responsive Design',
    description:
      'Fluid grid architectures that look crisp and effortless on every screen—from compact smartphones and tablets to widescreen 4K desktop displays.',
    tags: ['Fluid Grids', 'Touch-Friendly UX', 'Cross-Browser'],
  },
  {
    id: 'ux-architecture',
    number: '03',
    icon: 'Compass',
    title: 'UI/UX Strategy & Prototyping',
    description:
      'Intuitive navigation menus, clear information hierarchy, and conversion-focused user journeys designed to guide visitors smoothly toward calling or inquiring.',
    tags: ['Wireframing', 'Conversion UX', 'Accessibility'],
  },
  {
    id: 'ecommerce-storefronts',
    number: '04',
    icon: 'ShoppingBag',
    title: 'E-Commerce & Boutique Storefronts',
    description:
      'High-trust digital storefronts with streamlined product showcases, frictionless browsing, and editorial presentation that elevates perceived brand value.',
    tags: ['Product Showcases', 'Fast Checkout UX', 'Catalog Design'],
  },
  {
    id: 'website-redesign',
    number: '05',
    icon: 'Sparkles',
    title: 'Website Redesign & Modernization',
    description:
      'Transform an outdated, slow, or non-responsive website into a sharp, contemporary digital flagship without losing your established brand equity.',
    tags: ['Visual Refresh', 'UX Audit', 'Modern CSS & React'],
  },
  {
    id: 'performance-seo',
    number: '06',
    icon: 'Gauge',
    title: 'Performance, SEO & Accessibility',
    description:
      'Clean semantic markup, lightning-fast loading assets, technical SEO foundations, and WCAG-conscious contrast so customers and search engines love your site.',
    tags: ['Core Web Vitals', 'On-Page SEO', 'WCAG Contrast'],
  },
];

export const PORTFOLIO_CATEGORIES = ['All', 'Corporate', 'Architecture', 'E-Commerce', 'Hospitality'];

export const PORTFOLIO_ITEMS = [
  {
    id: 'northshore-arch',
    title: 'Northshore Custom Homes',
    category: 'Architecture',
    location: 'Durham Region, ON',
    year: '2026',
    summary:
      'Editorial portfolio and consultation platform for a bespoke residential builder featuring fluid galleries and effortless mobile navigation.',
    deliverables: ['Responsive Web Design', 'Interactive Project Gallery', 'Lead Inquiry Flow'],
    metrics: '+64% consultation requests',
    theme: 'light-stone',
    urlPreview: 'northshorehomes.ca',
    mockupData: {
      badge: 'CUSTOM ARCHITECTURE',
      headline: 'Timeless residences built for Ontario living.',
      statA: '42+ Homes',
      statB: '99 Lighthouse',
    },
  },
  {
    id: 'meridian-advisory',
    title: 'Meridian Financial Advisory',
    category: 'Corporate',
    location: 'Toronto & Oshawa, ON',
    year: '2026',
    summary:
      'Executive corporate web presence designed for high-net-worth wealth advisors, pairing authoritative typography with clear service architecture.',
    deliverables: ['Corporate Website', 'Executive UI System', 'Mobile Consultation Menu'],
    metrics: '0.8s average load time',
    theme: 'obsidian-gold',
    urlPreview: 'meridianadvisory.ca',
    mockupData: {
      badge: 'WEALTH MANAGEMENT',
      headline: 'Clarity and stewardship for modern families.',
      statA: '$420M AUM',
      statB: 'AA Accessible',
    },
  },
  {
    id: 'atelier-lumen',
    title: 'Atelier Lumen Lighting',
    category: 'E-Commerce',
    location: 'Ontario, Canada',
    year: '2025',
    summary:
      'Minimalist boutique storefront highlighting handcrafted architectural lighting with tactile hover states and distraction-free mobile shopping.',
    deliverables: ['Storefront UI/UX', 'Product Showcase Cards', 'Responsive Catalog'],
    metrics: '2.4x mobile engagement',
    theme: 'warm-editorial',
    urlPreview: 'atelierlumen.ca',
    mockupData: {
      badge: 'HANDCRAFTED STUDIO',
      headline: 'Sculptural brass & glass luminaires.',
      statA: '38 Collections',
      statB: 'Mobile First',
    },
  },
  {
    id: 'harbour-table',
    title: 'The Harbour Table Bistro',
    category: 'Hospitality',
    location: 'Oshawa Waterfront, ON',
    year: '2025',
    summary:
      'Single-page dining experience with interactive seasonal menu tabs, instant one-tap reservations, and atmospheric dark-mode art direction.',
    deliverables: ['Single-Page Website', 'Interactive Menu UX', 'Local SEO Structure'],
    metrics: '+51% mobile menu views',
    theme: 'deep-emerald',
    urlPreview: 'harbourtable.ca',
    mockupData: {
      badge: 'SEASONAL KITCHEN',
      headline: 'Modern Canadian dining by the lake.',
      statA: '4.9★ Local',
      statB: '1-Tap Booking',
    },
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discovery & Brand Strategy',
    duration: 'Days 1–3',
    description:
      'We start with a focused conversation directly with Sean Koppel to map your goals, target audience, essential menus, and competitive positioning.',
  },
  {
    step: '02',
    title: 'Visual Direction & Wireframes',
    duration: 'Days 4–8',
    description:
      'We establish a cohesive premium palette, typography pairing, and section structure so you can approve the exact look and user flow early.',
  },
  {
    step: '03',
    title: 'Modern Responsive Build',
    duration: 'Days 9–16',
    description:
      'Your site is engineered using clean, modern React and CSS with meticulous attention to mobile responsiveness, fluid interactions, and fast load speeds.',
  },
  {
    step: '04',
    title: 'Polish, QA & Launch',
    duration: 'Days 17–21',
    description:
      'Comprehensive testing across iOS, Android, and desktop browsers, on-page SEO checks, and a smooth handover with full ownership.',
  },
];

export const PACKAGES = [
  {
    id: 'essential',
    name: 'Essential Presence',
    badge: 'Single-Page Studio',
    price: '$1,450',
    period: 'CAD • One-time project',
    description:
      'Ideal for local businesses, consultants, and service providers needing a sleek, high-trust single-page website.',
    features: [
      'Custom single-page responsive design',
      'Tailored navigation menu & smooth scroll',
      'Premium typography & curated color palette',
      'Click-to-call, email & map integration',
      'Core on-page SEO & speed optimization',
      '2 rounds of collaborative revisions',
    ],
    highlighted: false,
  },
  {
    id: 'business-growth',
    name: 'Business Growth',
    badge: 'Most Popular',
    price: '$2,900',
    period: 'CAD • One-time project',
    description:
      'Comprehensive website design crafted to position established businesses as the premier choice in their market.',
    features: [
      'Everything in Essential Presence',
      'Multi-section or multi-view React architecture',
      'Interactive portfolio, service & FAQ modules',
      'Conversion-focused inquiry & lead capture UX',
      'Custom SVG graphics & micro-interactions',
      'Cross-device QA testing & 30-day launch support',
    ],
    highlighted: true,
  },
  {
    id: 'custom-flagship',
    name: 'Custom Flagship',
    badge: 'Bespoke Scope',
    price: 'Custom',
    period: 'Tailored proposal',
    description:
      'For growing brands, e-commerce boutiques, and corporate teams seeking an elevated digital flagship with custom components.',
    features: [
      'Full UI/UX design system & component library',
      'E-commerce storefront or interactive product showcase',
      'Brand visual refinement & art direction',
      'Advanced performance & WCAG accessibility audit',
      'Priority scheduling directly with Sean Koppel',
      'Dedicated post-launch refinement window',
    ],
    highlighted: false,
  },
];

export const FAQS = [
  {
    question: 'Will my website look and work seamlessly on mobile phones?',
    answer:
      'Absolutely. Every website we design is architected mobile-first—meaning navigation menus, typography, spacing, and buttons are carefully engineered for smartphones, tablets, and desktops alike.',
  },
  {
    question: 'Who will I be working with during my project?',
    answer:
      'You work directly with Sean Koppel, owner of 1001658259 Ontario Corp. There are no layers of account managers or outsourced handoffs—just clear, responsive communication from concept to launch.',
  },
  {
    question: 'How long does it typically take to design and build a website?',
    answer:
      'A focused single-page business website is typically completed in 2 to 3 weeks, while larger multi-section or custom flagship projects generally take 3 to 5 weeks depending on scope and feedback speed.',
  },
  {
    question: 'Do you only serve clients in Oshawa, Ontario?',
    answer:
      'While we are proudly based at 129 Guelph Street in Oshawa, Ontario, we collaborate smoothly with businesses across the Durham Region, the Greater Toronto Area, and throughout Canada.',
  },
  {
    question: 'Can you redesign my existing website to feel more modern?',
    answer:
      'Yes. Website modernizations are one of our core specialties. We evaluate your current content and user flow, then rebuild the visual presentation and responsiveness to reflect the quality of your business today.',
  },
];

