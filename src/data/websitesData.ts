import { ClientWebsite } from '../types';

export const CLIENT_WEBSITES_DATA: ClientWebsite[] = [
  {
    id: 'lumina-skin-labs-store',
    name: 'Lumina Skin Labs',
    clientName: 'Lumina Botanical D2C',
    category: 'ecommerce',
    categoryLabel: 'D2C Skincare & Beauty',
    url: 'https://luminaskinlabs.example.com',
    displayUrl: 'luminaskinlabs.com',
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    previewImage: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80',
    mobilePreviewImage: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80',
    tagline: 'High-Speed Headless Shopify Store with 1-Click Dynamic Upsells',
    description: 'Custom headless storefront engineered for ultra-fast mobile loading and sub-second checkout. Integrated with a dynamic diagnostic skincare quiz that tripled baseline conversion rates.',
    techStack: ['Shopify Plus', 'Next.js 15', 'Tailwind CSS', 'Klaviyo CAPI', 'Stripe Elements', 'Fastly CDN'],
    features: [
      'Interactive 60-Second Skin Diagnostic Quiz Funnel',
      'Dynamic Cart Drawer with Real-Time Tiered Free Gifts',
      'Server-Side Meta Conversions API & GA4 Server Container',
      'Subscription Replenishment Engine via Recharge API',
      'Instant Apple Pay & Google Pay Express Checkout'
    ],
    results: {
      conversionRate: '4.65% (+155%)',
      monthlyTraffic: '420,000+ Visitors',
      speedScore: 98,
      revenueScaled: '₹48 Cr ARR'
    },
    liveDate: 'Q1 2025',
    highlightBadge: 'Flagship D2C Store'
  },
  {
    id: 'vertex-ai-portal',
    name: 'Vertex AI Cloud Enterprise',
    clientName: 'Vertex AI Inc.',
    category: 'saas',
    categoryLabel: 'Enterprise AI SaaS',
    url: 'https://vertexai.example.com',
    displayUrl: 'vertexai.io',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Interactive DevOps Latency Engine & Enterprise Lead Capture Web App',
    description: 'A high-contrast, interactive enterprise web platform featuring an interactive real-time cloud computing latency calculator and custom documentation portal.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'HubSpot Enterprise', 'Vercel Edge', 'D3.js Charts'],
    features: [
      'Interactive Real-Time Cloud Latency & ROI Calculator',
      'Automated HubSpot CRM Lead Scoring & Routing',
      '180+ Programmatic SEO Landing Pages for Competitor Teardowns',
      'Interactive Live Terminal & API Playground Simulation',
      'SOC2 Compliant Enterprise Contact Gateways'
    ],
    results: {
      conversionRate: '24.2% Demo Rate',
      monthlyTraffic: '185,000+ Engineers',
      speedScore: 99,
      revenueScaled: '₹152 Cr Pipeline'
    },
    liveDate: 'Q2 2025',
    highlightBadge: 'Enterprise B2B'
  },
  {
    id: 'apex-flow-store',
    name: 'Apex Flow Athletics',
    clientName: 'Apex Athletics Global',
    category: 'fashion',
    categoryLabel: 'Athleisure & Performance Wear',
    url: 'https://apexflowathletics.example.com',
    displayUrl: 'apexflowathletics.com',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    previewImage: 'https://images.unsplash.com/photo-1483721074577-8329ef318884?auto=format&fit=crop&w=1200&q=80',
    tagline: 'High-Demand Drop Architecture & 3D Interactive Fitting System',
    description: 'Engineered a high-concurrency drop system that seamlessly handles 25,000 concurrent checkouts in 3 minutes with zero queue crashes and viral social integrations.',
    techStack: ['Shopify Plus', 'Three.js 3D Viewer', 'Cloudflare Workers', 'Gorgias Live Chat', 'TikTok Pixel CAPI'],
    features: [
      'Interactive 3D Product Swatch & Fabric Texture Viewer',
      'Limited-Time Drop Countdown with SMS Instant Passwords',
      'Personalized Size & Fit Recommendation ML Algorithm',
      'Post-Purchase Instant 1-Click Upsell Modal',
      'User-Generated Instagram Reel Feed on Product Pages'
    ],
    results: {
      conversionRate: '5.12% (+180%)',
      monthlyTraffic: '750,000+ Shoppers',
      speedScore: 96,
      revenueScaled: '₹62 Cr Annual'
    },
    liveDate: 'Q3 2025',
    highlightBadge: 'Viral Drop Scale'
  },
  {
    id: 'finguard-wealth-app',
    name: 'FinGuard Wealth',
    clientName: 'FinGuard Financial LLC',
    category: 'fintech',
    categoryLabel: 'FinTech & Automated Wealth',
    url: 'https://finguardwealth.example.com',
    displayUrl: 'finguardwealth.app',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    previewImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Bank-Grade Automated Onboarding Web Portal & Portfolio Simulator',
    description: 'Compliant, slick financial onboarding funnel with real-time Plaid banking integration, KYC automation, and an interactive compound interest simulator.',
    techStack: ['Next.js', 'Plaid API', 'Supabase Auth', 'Framer Motion', 'Segment CDP', 'Mixpanel'],
    features: [
      'Interactive 30-Year Wealth Projection Simulator',
      '3-Minute Frictionless Bank Verification & KYC Onboarding',
      'Algorithmic Tax-Loss Harvesting Interactive Dashboard',
      'Multi-Factor Authentication & Biometric Auth Gateway',
      'Direct Apple Search Ads Tracking Attribution'
    ],
    results: {
      conversionRate: '38.4% Account Fund',
      monthlyTraffic: '310,000+ Users',
      speedScore: 97,
      revenueScaled: '₹2,650 Cr AUM'
    },
    liveDate: 'Q4 2025',
    highlightBadge: 'FinTech Portal'
  },
  {
    id: 'eduvibe-academy',
    name: 'EduVibe Masterclass',
    clientName: 'EduVibe Global',
    category: 'edtech',
    categoryLabel: 'EdTech & Executive Learning',
    url: 'https://eduvibeacademy.example.com',
    displayUrl: 'eduvibeacademy.com',
    heroImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    previewImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
    tagline: 'High-Converting Cohort Enrollment Funnel & Video Masterclass Hub',
    description: 'An immersive cinematic course platform with interactive syllabus preview, live masterclass countdown timers, and automated payment installments via Klarna/Afterpay.',
    techStack: ['Webflow', 'Memberstack', 'Mux Video Streaming', 'Stripe Subscriptions', 'Zapier Automation'],
    features: [
      'Interactive Video Curriculum Teardown & Free Lesson Previews',
      'Live Masterclass Seat Counter with Real-Time Urgency Triggers',
      'Alumni Salary ROI Calculator with Verified Case Studies',
      'Split-Payment Checkout Integrations (Klarna & Affirm)',
      'Automated Discord & Slack Community Onboarding'
    ],
    results: {
      conversionRate: '6.40% (+190%)',
      monthlyTraffic: '260,000+ Students',
      speedScore: 99,
      revenueScaled: '₹35 Cr Course ARR'
    },
    liveDate: 'Q1 2026',
    highlightBadge: 'EdTech Hub'
  },
  {
    id: 'velour-haute-couture',
    name: 'Velour Haute Maison',
    clientName: 'Velour Paris & New York',
    category: 'fashion',
    categoryLabel: 'Luxury Designer Lifestyle',
    url: 'https://velourcouture.example.com',
    displayUrl: 'velourcouture.com',
    heroImage: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80',
    previewImage: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&w=1200&q=80',
    tagline: 'Ultra-Luxury Editorial Lookbook & Private VIP Clienteling Portal',
    description: 'An editorial, high-fashion web experience with fluid typography, immersive runway video backgrounds, and a private VIP concierge reservation system.',
    techStack: ['Shopify Plus', 'GSAP Animation', 'Tailwind CSS', 'Sanity CMS', 'Klaviyo VIP'],
    features: [
      'Runway Lookbook with Direct "Shop the Look" Hotspots',
      'Private Concierge Appointment & Showroom Booking Engine',
      'Digital Certificate of Authenticity (NFT / Blockchain Backed)',
      'Multi-Currency & Global Duty Calculator for 45 Countries',
      'Bespoke Monogramming Preview Configurator'
    ],
    results: {
      conversionRate: '3.90% (+120%)',
      monthlyTraffic: '190,000+ VIP Shoppers',
      speedScore: 95,
      revenueScaled: '₹74 Cr Luxury GMV'
    },
    liveDate: 'Q2 2026',
    highlightBadge: 'Luxury Editorial'
  }
];
