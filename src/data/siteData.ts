export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  highlights: string[];
  deliverables: string[];
  featured?: boolean;
  badge?: string;
}

export interface WebPackageTier {
  name: string;
  price: string;
  period: string;
  bestFor: string;
  inclusions: string[];
  ctaText: string;
  popular: boolean;
}

export interface CustomAddon {
  title: string;
  price: string;
}

export interface IndustryUseCase {
  id: string;
  industry: string;
  headline: string;
  description: string;
  workflows: string[];
  sampleCallTrigger: string;
  sampleOutcome: string;
}

export interface CallScenario {
  id: string;
  industry: string;
  callerName: string;
  callerPhone: string;
  callerIntent: string;
  companyName: string;
  agentName: string;
  duration: string;
  appointmentSlot: string;
  crmStatus: string;
  summaryPoints: string[];
  transcript: {
    speaker: 'ai' | 'caller';
    time: string;
    text: string;
    actionTag?: string;
  }[];
  workflowNodes: {
    step: string;
    label: string;
    detail: string;
    status: 'completed' | 'active';
  }[];
}

export const CONTACT_INFO = {
  email: 'shivamsaini76203@gmail.com',
  phone: '+91 76203 59189',
  phoneRaw: '+917620359189',
  whatsappUrl:
    'https://wa.me/917620359189?text=Hi%20TREXX%20Solutions%2C%20I%20would%20like%20to%20discuss%20an%20AI%20automation%20or%20web%20project.',
  location: 'India · Serving Clients Globally',
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'ai-receptionist',
    title: 'AI Receptionists & Voice AI Agents',
    category: 'Flagship Autonomous Voice System',
    tagline: '24/7 intelligent voice agents that answer calls, converse naturally, and book appointments automatically.',
    description:
      'Eliminate missed calls and front-desk bottlenecks forever. Our custom-trained AI receptionists pick up every incoming call on the first ring, hold natural human-like conversations, resolve customer FAQs, qualify leads, schedule appointments into your calendar, and log structured call summaries directly into your workflow.',
    highlights: [
      '24/7 incoming call handling with zero hold time',
      'Natural, human-like voice cadence & context awareness',
      'Real-time appointment booking & calendar synchronization',
      'Automated lead capture, call summaries & intelligent routing',
    ],
    deliverables: ['Voice Agent Architecture', 'Calendar & CRM Sync', 'Live Call Transcripts', 'Intelligent Escalation'],
    featured: true,
    badge: 'Flagship Product',
  },
  {
    id: 'ai-workflow-automation',
    title: 'Intelligent Business & WhatsApp Automation',
    category: 'Operations & Messaging Systems',
    tagline: 'Connect your calls, forms, WhatsApp channels, and internal tools into self-driving workflows.',
    description:
      'Replace repetitive manual follow-ups and fragmented spreadsheets with intelligent automation pipelines. From automated WhatsApp confirmations and lead routing to reservation engines and custom webhook triggers, we engineer workflows that run reliably around the clock.',
    highlights: [
      'Automated WhatsApp inquiry & booking flows',
      'Online reservation & appointment scheduling pipelines',
      'Lead qualification & instant notification triggers',
      'End-to-end operational workflow orchestration',
    ],
    deliverables: ['WhatsApp Automation', 'Booking Engines', 'Webhook Pipelines', 'CRM Triggers'],
  },
  {
    id: 'custom-web-design',
    title: 'Custom UI/UX & Brand Web Design',
    category: 'Product & Interface Design',
    tagline: 'Every pixel crafted uniquely for your brand — no generic templates, no shortcuts.',
    description:
      'We design high-authority digital experiences, interactive product showcases, and visual systems built to command trust and convert visitors into paying customers. Engineered in Figma and Framer with purposeful motion design and clear visual hierarchy.',
    highlights: [
      'Bespoke brand-aligned visual systems & typography',
      'Interactive Figma & Framer prototyping',
      'Conversion-focused user journeys & layouts',
      'Micro-interactions & smooth motion architecture',
    ],
    deliverables: ['UI/UX Systems', 'Framer & Interactive Design', 'Brand Identity', 'Design Systems'],
  },
  {
    id: 'fullstack-web-development',
    title: 'Fast Full-Stack Web & SaaS Development',
    category: 'Frontend & Platform Engineering',
    tagline: 'From concept to launch in weeks, not months — plus we add your website directly on Google Maps where needed.',
    description:
      'We build lightning-fast, mobile-responsive websites, multi-page business platforms, and SaaS applications using React, Next.js, Node.js, Framer, and Webflow. For local businesses, we also embed interactive maps and add/link your new website directly onto your Google Maps listing so nearby customers can discover you effortlessly.',
    highlights: [
      'React, Next.js & Node.js modern stack architecture',
      '100% mobile-responsive across all viewports',
      'Add & link your website directly on Google Maps where needed',
      'Interactive services catalogs, galleries & fast deployment',
    ],
    deliverables: ['React & Next.js', 'Google Maps Website Listing', 'Mobile Responsive', 'Multi-Page Platforms'],
  },
  {
    id: 'backend-admin-dashboards',
    title: 'Custom Backend, Databases & Admin Portals',
    category: 'Data & Internal Infrastructure',
    tagline: 'Dedicated backend systems, structured databases, and custom admin dashboards.',
    description:
      'Go beyond static pages with custom backend architectures, database integrations, advanced multi-step forms, and bespoke internal admin dashboards that let your team monitor inquiries, bookings, and operations in one place.',
    highlights: [
      'Custom Admin Dashboards & control panels',
      'Database design & secure API integrations',
      'Advanced custom forms & data validation',
      'Google Maps location & third-party API integrations',
    ],
    deliverables: ['Admin Dashboards', 'Database Integration', 'Custom Backend APIs', 'Advanced Forms'],
  },
  {
    id: 'seo-conversion-support',
    title: 'SEO, Google Maps Presence & Cloud Support',
    category: 'Growth & Long-Term Partnership',
    tagline: 'Search-engine & Google Maps ready from day one, deployed on modern cloud infrastructure.',
    description:
      'Every system we ship is engineered for search visibility, fast core web vitals, and measurable conversion lift. Where needed, we also add and connect your website on Google Maps so local customers searching for your services can click straight through to your site. Includes Vercel cloud deployment and ongoing maintenance.',
    highlights: [
      'Add & link your business website on Google Maps where needed',
      'Technical SEO structure & local search optimization',
      'Production deployment on Vercel & global CDNs',
      'Dedicated monthly maintenance & feature updates',
    ],
    deliverables: ['Google Maps Website Setup', 'SEO Ready', 'Vercel Cloud Deploy', 'Ongoing Support'],
  },
];

export const WEB_DEVELOPMENT_TIERS: WebPackageTier[] = [
  {
    name: 'Starter Website',
    price: '₹2,999',
    period: 'onwards',
    bestFor: 'Small Businesses, Local Services, Portfolios',
    inclusions: [
      'Responsive Website Design',
      'Mobile-Friendly Layout',
      'Up to 3 Pages',
      'Contact Form & WhatsApp Integration',
      'Add Website to Google Maps (Where Needed)',
      'Basic Deployment Support',
    ],
    ctaText: 'Get Started',
    popular: false,
  },
  {
    name: 'Growth Website',
    price: '₹4,999',
    period: 'onwards',
    bestFor: 'Clinics, Hospitality, Local Businesses, Startups',
    inclusions: [
      'Everything in Starter Website',
      'Up to 5 Pages',
      'Menu / Services & Gallery Section',
      'Google Maps Integration & Website Listing Setup',
      'Enhanced Conversion UI/UX',
      'Priority Launch Support',
    ],
    ctaText: 'Book a Call',
    popular: true,
  },
  {
    name: 'Business Pro Website',
    price: '₹7,999',
    period: 'onwards',
    bestFor: 'Growing Businesses and High-Volume Startups',
    inclusions: [
      'Everything in Growth Website',
      'Backend Integration (Basic)',
      'Database Integration (Basic)',
      'Advanced Custom Forms',
      'Google Maps & Local SEO Setup',
      'Additional Custom Features',
    ],
    ctaText: 'Discuss Project',
    popular: false,
  },
];

export const CUSTOM_ADDONS: CustomAddon[] = [
  { title: 'AI Voice Receptionist Setup', price: 'Custom Scoped' },
  { title: 'Google Maps Website Listing Setup', price: 'Included Where Needed' },
  { title: 'Admin Dashboard', price: '₹3,000 onwards' },
  { title: 'Custom Forms / Backend', price: '₹800 onwards' },
  { title: 'Extra Page', price: '₹500 onwards' },
  { title: 'Monthly Maintenance', price: '₹300–₹1,000/month' },
];

export const SKILLS_AND_STACK = [
  'AI Voice Agents & Receptionists',
  'Workflow & CRM Automation',
  'React & Next.js',
  'Node.js',
  'Framer',
  'Webflow',
  'Google Maps & Local SEO Setup',
  'Figma & Prototyping',
  'Performance Optimization',
  'Brand Identity',
  'Motion Design',
  'Visual Systems',
];

export const INDUSTRY_USE_CASES: IndustryUseCase[] = [
  {
    id: 'healthcare',
    industry: 'Clinics & Healthcare',
    headline: 'Instant patient triage, appointment scheduling, and Google Maps discovery.',
    description:
      'Handle high call volumes without overwhelming reception staff. AI agents verify patient needs, schedule consultations, and send WhatsApp confirmations—while we also link your clinic website directly on Google Maps so nearby patients find and book with you easily.',
    workflows: [
      '24/7 patient appointment booking & rescheduling',
      'Clinic website added & linked on Google Maps',
      'Urgent inquiry escalation & WhatsApp directions',
    ],
    sampleCallTrigger: '"Hi, I need to book a dental consultation for tomorrow afternoon."',
    sampleOutcome: 'Slot confirmed for 3:30 PM · Patient profile logged · Google Maps pin sent',
  },
  {
    id: 'realestate',
    industry: 'Real Estate Agencies',
    headline: 'Qualify property buyers 24/7 and book site visits while your agents close deals.',
    description:
      'Never lose a high-intent property lead calling after hours. Your AI receptionist answers listing questions, captures budget and location preferences, schedules property viewings, and shares interactive Google Maps property locations.',
    workflows: [
      'Inbound listing inquiry capture & qualification',
      'Automated property viewing calendar scheduling',
      'Google Maps office & property location integration',
    ],
    sampleCallTrigger: '"I saw the 3BHK listing online—is it still available for a viewing this weekend?"',
    sampleOutcome: 'Lead qualified (High Intent) · Viewing booked Saturday 11:00 AM · Broker notified',
  },
  {
    id: 'hospitality',
    industry: 'Restaurants & Hospitality',
    headline: 'Seamless table reservations, Google Maps website linking, and peak-hour call handling.',
    description:
      'When your floor team is busy serving guests, your AI voice agent and digital platform handle table bookings, private party inquiries, and dietary questions—plus we link your website directly on Google Maps so diners searching nearby can view your menu and reserve instantly.',
    workflows: [
      'Automated table reservation & party size handling',
      'Website & digital menu linked directly on Google Maps',
      'Instant WhatsApp booking confirmation & directions',
    ],
    sampleCallTrigger: '"Do you have a table for 6 on Friday at 8 PM, and do you have outdoor seating?"',
    sampleOutcome: 'Table for 6 reserved (Patio) · Special note saved · Confirmation sent',
  },
  {
    id: 'ecommerce',
    industry: 'E-Commerce & Retail',
    headline: 'Instant order status support, storefront discovery, and post-purchase automation.',
    description:
      'Turn support calls and web inquiries into repeat sales. Automate product availability checks, return policy questions, order tracking inquiries, and connect retail showroom locations to Google Maps where needed.',
    workflows: [
      '24/7 customer inquiry & FAQ resolution',
      'Order lookup & callback routing for VIP orders',
      'Conversion-optimized storefront & Google Maps retail pin',
    ],
    sampleCallTrigger: '"I want to check the status of my bulk subscription order."',
    sampleOutcome: 'Order verified · Delivery timeline shared · Support ticket auto-resolved',
  },
  {
    id: 'professional',
    industry: 'Professional Services',
    headline: 'Consultancy discovery calls, client intake, and local Google Maps visibility.',
    description:
      'For law firms, interior design studios, financial advisors, and agencies—capture every prospect inquiry, collect project scope details, book discovery calls automatically, and link your website on Google Maps for local authority.',
    workflows: [
      'Structured client intake & budget screening',
      'Automated discovery call calendar booking',
      'Website connected to Google Maps business listing',
    ],
    sampleCallTrigger: '"We are looking to redesign our commercial office space next quarter."',
    sampleOutcome: 'Scope captured · 30-min Discovery Call scheduled · Brief generated',
  },
  {
    id: 'startups',
    industry: 'Startups & High-Volume Ops',
    headline: 'Scale operations without scaling repetitive operational headcount.',
    description:
      'Combine a high-converting SaaS web presence with custom admin dashboards, automated onboarding workflows, and AI voice agents that handle inbound demo requests around the clock.',
    workflows: [
      'Inbound demo scheduling & product FAQ handling',
      'Custom admin dashboards & database pipelines',
      'End-to-end CRM & webhook workflow automation',
    ],
    sampleCallTrigger: '"Can your team walk us through an enterprise deployment for our 3 branches?"',
    sampleOutcome: 'Enterprise lead tagged · Technical demo booked · Team alert sent',
  },
];

export const HERO_SCENARIOS: CallScenario[] = [
  {
    id: 'clinic',
    industry: 'Healthcare Clinic',
    callerName: 'Arjun Verma',
    callerPhone: '+91 98204 •••41',
    callerIntent: 'Appointment Booking · Priority',
    companyName: 'Apex Dental & Aesthetics',
    agentName: 'TREXX Voice Agent v2.4',
    duration: '01:28',
    appointmentSlot: 'Tomorrow, 4:00 PM IST',
    crmStatus: 'Patient Record Synced',
    summaryPoints: [
      'Requested consultation for ceramic dental veneer evaluation',
      'Verified availability with Dr. Mehra for Thursday at 4:00 PM',
      'Dispatched WhatsApp calendar invite & Google Maps clinic location',
    ],
    transcript: [
      {
        speaker: 'ai',
        time: '00:02',
        text: 'Thank you for calling Apex Dental Studio. This is Aria, your AI receptionist. How can I help you today?',
        actionTag: 'Call Answered · 180ms Latency',
      },
      {
        speaker: 'caller',
        time: '00:09',
        text: 'Hi, I’d like to book a consultation with Dr. Mehra for tomorrow afternoon if there’s an opening.',
      },
      {
        speaker: 'ai',
        time: '00:14',
        text: 'I can certainly help with that. Checking Dr. Mehra’s schedule for tomorrow—we have openings at 2:30 PM and 4:00 PM. Which works best for you?',
        actionTag: 'Calendar Queried · 2 Slots Found',
      },
      {
        speaker: 'caller',
        time: '00:24',
        text: '4:00 PM works great. My name is Arjun Verma.',
      },
      {
        speaker: 'ai',
        time: '00:29',
        text: 'Perfect, Arjun. I’ve confirmed your consultation for tomorrow at 4:00 PM and sent a WhatsApp confirmation with our Google Maps location to your number.',
        actionTag: 'Appointment Locked · Maps Link Sent',
      },
    ],
    workflowNodes: [
      { step: '01', label: 'Inbound Voice Stream', detail: 'Answered on 1st ring · Noise-cancelled audio', status: 'completed' },
      { step: '02', label: 'Intent & Entity Extraction', detail: 'Intent: Consultation · Provider: Dr. Mehra', status: 'completed' },
      { step: '03', label: 'Live Calendar Sync', detail: 'Slot locked: Tomorrow 16:00 IST', status: 'completed' },
      { step: '04', label: 'Post-Call Automation', detail: 'WhatsApp + Google Maps link & Summary logged', status: 'active' },
    ],
  },
  {
    id: 'hospitality',
    industry: 'Hospitality & Dining',
    callerName: 'Meera Nair',
    callerPhone: '+91 97112 •••89',
    callerIntent: 'Table Reservation · 6 Guests',
    companyName: 'The Grand Pavilion',
    agentName: 'TREXX Voice Concierge',
    duration: '01:12',
    appointmentSlot: 'Friday, 8:30 PM · Courtyard',
    crmStatus: 'Table #14 Reserved',
    summaryPoints: [
      'Confirmed Friday dinner reservation for 6 guests at 8:30 PM',
      'Noted outdoor courtyard seating preference & 1 vegan menu request',
      'Sent interactive digital menu, booking pass & Google Maps pin via WhatsApp',
    ],
    transcript: [
      {
        speaker: 'ai',
        time: '00:01',
        text: 'Good evening, thank you for calling The Grand Pavilion. How may I assist you with your reservation or inquiry?',
        actionTag: 'Call Answered · Peak Rush Mode',
      },
      {
        speaker: 'caller',
        time: '00:08',
        text: 'Hi! Do you have a table for six people this Friday around 8:30 PM, ideally in the courtyard?',
      },
      {
        speaker: 'ai',
        time: '00:13',
        text: 'Let me check our Friday evening seating. Yes, we have a courtyard table for six available at 8:30 PM. Shall I reserve it under your name?',
        actionTag: 'Table Inventory Checked · Available',
      },
      {
        speaker: 'caller',
        time: '00:21',
        text: 'Yes please, under Meera Nair. Also, do you have vegan options on the dinner menu?',
      },
      {
        speaker: 'ai',
        time: '00:27',
        text: 'Your courtyard table for six is confirmed for Friday at 8:30 PM, Meera. We have a full plant-based section—I’ve just texted our website menu and Google Maps directions to your phone.',
        actionTag: 'Reservation Confirmed · Menu Dispatched',
      },
    ],
    workflowNodes: [
      { step: '01', label: 'Inbound Call Intercept', detail: 'Handled during peak dinner service', status: 'completed' },
      { step: '02', label: 'Seating & FAQ Resolution', detail: 'Party of 6 · Courtyard + Vegan FAQ answered', status: 'completed' },
      { step: '03', label: 'Reservation Engine Sync', detail: 'Table #14 assigned for Friday 20:30', status: 'completed' },
      { step: '04', label: 'Guest Experience Trigger', detail: 'Website menu & Google Maps pin delivered', status: 'active' },
    ],
  },
  {
    id: 'realestate',
    industry: 'Real Estate & Interiors',
    callerName: 'Vikram Khanna',
    callerPhone: '+91 98101 •••62',
    callerIntent: 'Site Visit & Project Consultation',
    companyName: 'Crestline Estates & Design',
    agentName: 'TREXX Lead Qualifier AI',
    duration: '01:54',
    appointmentSlot: 'Saturday, 11:30 AM · Site Tour',
    crmStatus: 'High-Intent Lead Created',
    summaryPoints: [
      'Qualified buyer inquiring about 4,200 sq.ft. commercial studio space',
      'Captured timeline (Q2 move-in) and scheduled on-site tour',
      'Routed structured lead brief & Google Maps site pin before call ended',
    ],
    transcript: [
      {
        speaker: 'ai',
        time: '00:02',
        text: 'Welcome to Crestline Estates & Design. I’m your AI property concierge. Are you calling about a specific listing or design consultation?',
        actionTag: 'Call Answered · Lead Capture Active',
      },
      {
        speaker: 'caller',
        time: '00:10',
        text: 'I’m calling about the commercial studio space in Gurgaon. Is it available for a walkthrough this Saturday?',
      },
      {
        speaker: 'ai',
        time: '00:16',
        text: 'Yes, the 4,200 sq.ft. Gurgaon studio is currently available. Our senior advisor can host a private walkthrough this Saturday at 11:30 AM. Would that suit your schedule?',
        actionTag: 'Listing Verified · Advisor Calendar Checked',
      },
      {
        speaker: 'caller',
        time: '00:26',
        text: 'Saturday at 11:30 AM is ideal. This is Vikram Khanna.',
      },
      {
        speaker: 'ai',
        time: '00:32',
        text: 'Wonderful, Vikram. I’ve booked your site visit for Saturday at 11:30 AM, shared the brochure and Google Maps location on your WhatsApp, and briefed our senior advisor.',
        actionTag: 'Site Visit Booked · Advisor Notified',
      },
    ],
    workflowNodes: [
      { step: '01', label: 'After-Hours Lead Capture', detail: 'Answered at 9:45 PM outside office hours', status: 'completed' },
      { step: '02', label: 'Property & Scope Qualification', detail: '4,200 sq.ft. Commercial Studio verified', status: 'completed' },
      { step: '03', label: 'Advisor Calendar Booking', detail: 'Walkthrough scheduled Saturday 11:30 AM', status: 'completed' },
      { step: '04', label: 'CRM & Brochure Dispatch', detail: 'Floorplan PDF + Google Maps pin sent', status: 'active' },
    ],
  },
];
