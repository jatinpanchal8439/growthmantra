import { PricingPlan } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Growth',
    tagline: 'Ideal for local businesses, early-stage startups, and growing D2C brands.',
    price: '₹15,000',
    period: '/ month',
    description: 'Establish high-converting digital foundations, local search dominance, and initial paid ad testing.',
    popular: false,
    bestFor: 'Local businesses, professionals & emerging stores looking to scale',
    ctaText: 'Get Free Consultation',
    whatsappMessage: 'Hello Groowth Mantra, I am interested in the Starter Growth Plan (₹15,000/mo). Please share more details.',
    features: [
      'High-Speed Responsive Website',
      'Meta Ad Campaign Setup',
      'Local & Technical SEO Setup',
      'Monthly Ad Spend up to ₹50,000',
      'Monthly Performance Report'
    ],
    notIncluded: [
      '4K In-Studio Video Production',
      'Headless Development'
    ]
  },
  {
    id: 'growth',
    name: 'Growth Scale',
    badge: 'Most Popular',
    tagline: 'Engineered for scaling Indian eCommerce stores, B2B SaaS & high-growth brands.',
    price: '₹35,000',
    period: '/ month',
    description: 'Full-funnel digital acceleration combining custom web development, paid ad scaling, and viral creative production.',
    popular: true,
    bestFor: 'D2C eCommerce, B2B companies & regional leaders scaling to ₹10L+ revenue',
    ctaText: 'Start Your Project',
    whatsappMessage: 'Hello Groowth Mantra, I am interested in the Growth Scale Plan (₹35,000/mo). Please share more details.',
    features: [
      'Custom eCommerce / WordPress Store',
      'Full Paid Ads Scaling (Meta, Google)',
      'Monthly Ad Spend up to ₹2,50,000',
      'Advanced On-Page & Competitor SEO',
      'Bi-Weekly Review Calls'
    ],
    notIncluded: [
      'National Award Gala & Event Production'
    ]
  },
  {
    id: 'premium',
    name: 'Enterprise Dominance',
    badge: 'High Impact',
    tagline: 'End-to-end full-stack marketing powerhouse for established brands and industry leaders.',
    price: '₹75,000',
    period: '/ month',
    description: 'Omnichannel market dominance with custom tech, aggressive media buying, and direct strategy.',
    popular: false,
    bestFor: 'Established brands, multi-location enterprises & national D2C leaders',
    ctaText: 'Discuss Your Project',
    whatsappMessage: 'Hello Groowth Mantra, I am interested in the Enterprise Dominance Plan (₹75,000/mo). Please share more details.',
    features: [
      'Bespoke Headless Web Architecture',
      'Aggressive Omnichannel Media Buying',
      'Unlimited Ad Spend Scaling',
      'Programmatic SEO & Digital PR',
      'Priority 24/7 VIP Hotline'
    ]
  }
];

export const SERVICE_PACKAGES_DATA = [
  {
    title: 'Website Design & Development',
    category: 'Development',
    price: 'Starting at ₹25,000 (One-Time)',
    timeline: '7 - 14 Days Delivery',
    points: ['Responsive Mobile-First UI/UX', 'SEO Optimized & Sub-Second Speed', 'Free Domain & SSL Integration', '1 Year Free Technical Support']
  },
  {
    title: 'Shopify / eCommerce Store Build',
    category: 'eCommerce',
    price: 'Starting at ₹35,000 (One-Time)',
    timeline: '10 - 20 Days Delivery',
    points: ['High-Converting Product Pages', 'Payment Gateway (Razorpay/Stripe)', 'Automated WhatsApp Tracking', '1-Click Checkout & Upsells']
  },
  {
    title: 'Performance Marketing (Ads)',
    category: 'Paid Media',
    price: 'Starting at ₹15,000 / month',
    timeline: 'Live within 48 Hours',
    points: ['Meta & Google Ads Setup', 'High-Converting Ad Copy & Creatives', 'Audience Retargeting Funnels', 'ROAS Optimization & Daily Monitoring']
  },
  {
    title: 'Social Media & Viral Reels',
    category: 'Content',
    price: 'Starting at ₹18,000 / month',
    timeline: 'Monthly Content Calendar',
    points: ['Trending Scriptwriting & Hooks', 'Video Editing with Captions', 'Instagram & YouTube Shorts Growth', 'Influencer Seeding & Collaborations']
  }
];
