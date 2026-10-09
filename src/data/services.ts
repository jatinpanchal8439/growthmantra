import { ServicePillar, ServiceItem, Testimonial } from '../types';

export const ALL_SERVICES: ServiceItem[] = [
  {
    id: 'web-design-dev',
    title: 'Website Design & Development',
    category: 'Engineering & UI/UX',
    shortDescription: 'Custom, modern, and high-converting responsive websites built with Next.js, React, and clean code for maximum business impact.',
    description: 'We design and engineer bespoke web platforms tailored to your brand identity. Every website features sub-second load times, mobile-first design, interactive elements, and conversion-optimized architectures that convert visitors into paying clients.',
    iconName: 'LayoutTemplate',
    deliverables: [
      'Bespoke Mobile-First UI/UX Design',
      'Clean Next.js / React / TypeScript Architecture',
      'Sub-Second Core Web Vitals Performance',
      'Interactive Micro-Animations & Dynamic Forms',
      'Full SEO Semantic Structure & Schema'
    ],
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript', 'Figma'],
    startingPrice: 'Starting at ₹25,000',
    sampleOutcome: 'Average +65% increase in visitor engagement and inquiry submissions.',
    badge: 'Core Service'
  },
  {
    id: 'shopify-development',
    title: 'Shopify Development',
    category: 'eCommerce',
    shortDescription: 'High-converting Shopify & Shopify Plus stores designed to maximize Average Order Value (AOV) and direct sales.',
    description: 'From high-speed custom Liquid themes to headless Shopify Plus architectures, we construct digital storefronts built to scale to ₹1 Crore+ monthly revenue with 1-click checkouts and dynamic upsells.',
    iconName: 'ShoppingBag',
    deliverables: [
      'Custom Shopify Theme Development',
      '1-Click Checkout & Dynamic Cart Upsells',
      'Payment Gateway Integration (Razorpay, Paytm, Cashfree, Stripe)',
      'Automated WhatsApp Order & Tracking Alerts',
      'Subscription & Bundle Custom Logic'
    ],
    technologies: ['Shopify Plus', 'Liquid', 'Hydrogen', 'Razorpay', 'Recharge'],
    startingPrice: 'Starting at ₹35,000',
    sampleOutcome: '4.6% average storewide conversion rate with under 1.2s page load.',
    badge: 'Popular'
  },
  {
    id: 'wordpress-development',
    title: 'WordPress Development',
    category: 'Content & CMS',
    shortDescription: 'Enterprise WordPress, WooCommerce, and custom CMS websites that give you total content freedom with bulletproof security.',
    description: 'We develop fast, secure, and easily editable WordPress and WooCommerce platforms with custom Gutenberg blocks, zero plugin bloat, and automated backups.',
    iconName: 'Globe',
    deliverables: [
      'Custom WordPress Theme & Block Development',
      'WooCommerce Custom Checkout Flow',
      'Advanced Speed Caching & Security Hardening',
      'Lead Generation & CRM Form Synchronization',
      'Multilingual & Multi-Region Support'
    ],
    technologies: ['WordPress', 'WooCommerce', 'PHP', 'MySQL', 'WP Rocket'],
    startingPrice: 'Starting at ₹20,000',
    sampleOutcome: '95+ Google PageSpeed score with intuitive backend management.',
  },
  {
    id: 'seo-search-engine-optimization',
    title: 'SEO (Search Engine Optimization)',
    category: 'Organic Growth',
    shortDescription: 'Rank #1 on Google for high-intent business keywords to generate continuous free, high-converting organic traffic.',
    description: 'Our data-driven SEO strategy combines technical site optimization, competitive keyword clustering, content marketing, and high-authority digital PR backlinks to dominate search engine results.',
    iconName: 'Search',
    deliverables: [
      'Comprehensive 100-Point Technical SEO Audit',
      'High-Intent Commercial Keyword Research',
      'On-Page Optimization & Schema Markup',
      'Google Business Profile Local Map Pack Ranking',
      'High-Authority White-Hat Backlink Building'
    ],
    technologies: ['Google Search Console', 'Ahrefs', 'Semrush', 'Screaming Frog', 'SurferSEO'],
    startingPrice: 'Starting at ₹15,000 / mo',
    sampleOutcome: '+240% average increase in organic search traffic within 90 days.',
    badge: 'High ROI'
  },
  {
    id: 'google-ads-ppc',
    title: 'Google Ads & PPC Management',
    category: 'Paid Search',
    shortDescription: 'Capture high-intent buyers actively searching for your services with profitable Google Search, Shopping, and YouTube Ads.',
    description: 'We architect granular Google Ads campaigns optimized for real leads and revenue rather than wasted clicks. Features negative keyword scrubbing, smart bidding, and offline CRM conversion sync.',
    iconName: 'Target',
    deliverables: [
      'High-Intent Google Search Ad Campaigns',
      'Google Shopping & Performance Max (PMax) Campaigns',
      'YouTube In-Stream Video Ad Scaling',
      'Conversion Tracking & Server-Side GA4 Attribution',
      'Continuous Bid & Negative Keyword Optimization'
    ],
    technologies: ['Google Ads', 'Google Tag Manager', 'GA4', 'Looker Studio'],
    startingPrice: 'Starting at ₹18,000 / mo',
    sampleOutcome: '4.8x average Google Ads ROAS with high buyer intent.',
  },
  {
    id: 'meta-ads-scaling',
    title: 'Meta Ads (Facebook & Instagram)',
    category: 'Paid Social',
    shortDescription: 'Scale your brand profitably with high-converting Meta Advantage+ shopping campaigns, dynamic retargeting, and creative testing.',
    description: 'We manage millions in ad spend across Facebook and Instagram using broad audience scaling, algorithmic bidding, and systematic creative testing frameworks.',
    iconName: 'TrendingUp',
    deliverables: [
      'Meta Advantage+ Shopping & Broad Scale Architecture',
      'Server-Side Conversions API (CAPI) Pixel Setup',
      'Dynamic Product Catalog Retargeting',
      'High-Converting Direct-Response Ad Copywriting',
      'Creative Sandbox Testing to Winner Scale Matrix'
    ],
    technologies: ['Meta Ads Manager', 'Conversions API (CAPI)', 'Northbeam', 'Triple Whale'],
    startingPrice: 'Starting at ₹20,000 / mo',
    sampleOutcome: '5.2x average ROAS with rapid scaling ability.',
    badge: 'Scale Fast'
  },
  {
    id: 'social-media-marketing',
    title: 'Social Media Marketing & Reels',
    category: 'Social Growth',
    shortDescription: 'Build an engaged, loyal community on Instagram, LinkedIn, and YouTube with viral content, trending reels, and authentic storytelling.',
    description: 'Our creative team creates monthly content calendars, viral short-form video hooks, graphic carousels, and community engagement protocols that establish industry authority.',
    iconName: 'Instagram',
    deliverables: [
      'Monthly Content Strategy & Editorial Calendar',
      '15+ High-Engagement Reels & Short Videos',
      'High-Impact Graphic Carousels & Infographics',
      'Influencer Collaboration & Seeding Management',
      'Active Community DM & Comment Engagement'
    ],
    technologies: ['Instagram', 'LinkedIn', 'YouTube Shorts', 'Premiere Pro', 'Canva Pro'],
    startingPrice: 'Starting at ₹18,000 / mo',
    sampleOutcome: '85M+ verified views across agency-managed accounts.',
  },
  {
    id: 'branding-creative-design',
    title: 'Branding & Creative Design',
    category: 'Brand Identity',
    shortDescription: 'Memorable brand identities, logos, color palettes, visual guidelines, and packaging that turn businesses into iconic brands.',
    description: 'We create distinct visual identities that command premium pricing. From logo design and typography systems to packaging and pitch decks, we give your brand an unforgettable pulse.',
    iconName: 'Sparkles',
    deliverables: [
      'Complete Brand Identity & Logo Suite',
      'Typography, Color System & Design Guidelines',
      'Social Media Kit & Stationery Templates',
      'eCommerce Packaging & Label Design',
      'Investor Pitch Deck & Corporate Presentations'
    ],
    technologies: ['Adobe Illustrator', 'Photoshop', 'Figma', 'Blender 3D'],
    startingPrice: 'Starting at ₹25,000',
    sampleOutcome: 'Elevated brand perception enabling 30-50% higher product price points.',
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    category: 'Growth Strategy',
    shortDescription: 'Data-driven, full-funnel customer acquisition campaigns across all channels designed to maximize profitability and ROAS.',
    description: 'A holistic growth engine that unifies paid ads, conversion rate optimization, email marketing, and retention workflows to scale revenue predictably.',
    iconName: 'Zap',
    deliverables: [
      'Multi-Channel Blended Acquisition Strategy',
      'CAC Reduction & Unit Economics Optimization',
      'Cross-Channel Attribution & Dashboard Reporting',
      'Omnichannel Retargeting Sequences',
      'Weekly P&L and ROAS War Room Reviews'
    ],
    technologies: ['Meta', 'Google', 'YouTube', 'Klaviyo', 'Triple Whale'],
    startingPrice: 'Starting at ₹30,000 / mo',
    sampleOutcome: 'Over ₹150 Crore in verified revenue scaled for clients.',
    badge: 'Full Stack'
  },
  {
    id: 'ecommerce-development',
    title: 'eCommerce Development',
    category: 'eCommerce',
    shortDescription: 'End-to-end eCommerce infrastructure with seamless Indian payment gateways, shipping integrations, and inventory synchronization.',
    description: 'We build enterprise eCommerce platforms with automated COD verification, Razorpay/UPI express checkouts, Shiprocket logistics integrations, and WhatsApp order status updates.',
    iconName: 'Layers',
    deliverables: [
      'Full-Stack eCommerce Web Architecture',
      'UPI & Indian Payment Gateway Integrations',
      'Automated COD OTP Verification Protocol',
      'Shiprocket / Delhivery Courier Automation',
      'Multi-Warehouse Inventory Management'
    ],
    technologies: ['Shopify Plus', 'WooCommerce', 'Next.js', 'Razorpay', 'Shiprocket'],
    startingPrice: 'Starting at ₹40,000',
    sampleOutcome: 'Reduced checkout abandonment by 42% and eliminated RTO losses.',
  },
  {
    id: 'landing-page-development',
    title: 'Landing Page Development',
    category: 'Conversion',
    shortDescription: 'High-speed, conversion-focused single-page sales funnels crafted specifically to convert paid ad traffic into customers.',
    description: 'Every headline, testimonial placement, CTA, and offer structure is psychologically engineered to maximize click-throughs and form submissions for ad campaigns.',
    iconName: 'FileText',
    deliverables: [
      'Direct-Response Copywriting & Offer Structuring',
      'Sub-Second Mobile Loading Speed Optimization',
      'Interactive Quiz & Lead Magnet Funnels',
      '1-Click WhatsApp Lead Submission Integration',
      'A/B Headline and Layout Split Testing'
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'Figma', 'Vercel Edge'],
    startingPrice: 'Starting at ₹15,000',
    sampleOutcome: 'Average 12% to 28% visitor-to-lead conversion rates.',
  },
  {
    id: 'website-optimization-cro',
    title: 'Website Optimization & CRO',
    category: 'Conversion Optimization',
    shortDescription: 'Speed up your website, remove checkout bottlenecks, and boost your conversion rate without increasing your ad spend.',
    description: 'We analyze real user behavior through heatmaps, session recordings, and funnel analytics to diagnose leaks and optimize your website for maximum conversions and 95+ PageSpeed.',
    iconName: 'Activity',
    deliverables: [
      'Comprehensive CRO Funnel & Leak Teardown',
      'Core Web Vitals Speed Boost (90+ PageSpeed Score)',
      'Heatmap & User Session Friction Analysis',
      'Cart Drawer & Checkout Streamlining',
      'Continuous Multivariate A/B Testing'
    ],
    technologies: ['Google PageSpeed', 'Hotjar', 'Microsoft Clarity', 'VWO', 'PostHog'],
    startingPrice: 'Starting at ₹15,000',
    sampleOutcome: 'Boosted average conversion rate by +64% within 30 days.',
    badge: 'Fast Results'
  }
];

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'build',
    pillar: 'BUILD',
    title: 'Full-Funnel Web & Tech Infrastructure',
    subtitle: 'High-Converting Websites, Shopify, WordPress & Speed CRO',
    description: 'We construct bulletproof digital growth infrastructure. From server-side tracking and custom landing pages to automated CRO testing loops, we ensure every visitor has a high-probability path to conversion.',
    color: 'from-[#07579D] to-[#078CCB]',
    iconName: 'LayoutTemplate',
    deliverables: [
      'Custom Headless & Modular High-Speed Landing Pages',
      'Server-Side Conversions API (CAPI) & First-Party Pixel Setup',
      'Continuous A/B & Multivariate CRO Testing Matrix',
      'Indian Payment Gateways (Razorpay, UPI) & 1-Click Checkout',
      'Interactive Quiz & Assessment Lead Capture Funnels'
    ],
    kpis: ['Conversion Rate (CVR)', 'Average Order Value (AOV)', 'Bounce Rate', 'Tracking Accuracy'],
    tools: ['Shopify Plus', 'WordPress', 'Next.js', 'Elevar CAPI', 'Razorpay', 'VWO'],
    sampleOutcome: 'Average +64% storewide conversion rate lift in 45 days'
  },
  {
    id: 'brand',
    pillar: 'BRAND',
    title: 'Creative Studio & Brand Identity',
    subtitle: 'Direct-Response UGC, 3D Assets & Viral Hook Velocity',
    description: 'Creative is the new targeting algorithm. Our in-house creative lab scriptwrites, shoots, edits, and iterates 40-60 net-new ad creatives per month across static, motion graphics, creator UGC, and 3D product animations.',
    color: 'from-[#078CCB] to-[#09B5E5]',
    iconName: 'Sparkles',
    deliverables: [
      'In-House Direct Response UGC Creator Network',
      'High-Energy 3D Motion Graphics & Product Explainer Reels',
      'Systematic 8-Variation Ad Hook Matrix & Fast Iterations',
      'Static Scroll-Stopper Banners & Infographic Carousels',
      'Brand Identity, Voice & Visual Guideline Systems'
    ],
    kpis: ['Thumb-Stop Rate (3s)', 'Click-Through Rate (CTR)', 'Hook Retention', 'ROAS per Creative'],
    tools: ['Premiere Pro', 'After Effects', 'Blender 3D', 'Figma', 'Frame.io'],
    sampleOutcome: 'Produces 50+ tested assets/month with high click-through retention'
  },
  {
    id: 'grow',
    pillar: 'GROW',
    title: 'Performance Paid Media Acquisition',
    subtitle: 'Meta, Google Search, YouTube, PMax & LinkedIn Scaling',
    description: 'Ruthless, data-driven paid advertising designed to scale revenue with positive unit economics. We manage millions in ad spend with algorithmic bid management, broad audience targeting, and multi-touch attribution.',
    color: 'from-[#07579D] to-[#09B5E5]',
    iconName: 'TrendingUp',
    deliverables: [
      'Meta Advantage+ Shopping & Broad Scale Architecture',
      'Google Search, Performance Max & YouTube In-Stream Ads',
      'Local Business Google Maps & Lead Generation Campaigns',
      'LinkedIn Account-Based Marketing (ABM) for Enterprise B2B',
      'Omnichannel Retargeting & Cart Recovery'
    ],
    kpis: ['Blended ROAS', 'Customer Acquisition Cost (CAC)', 'MER (Marketing Efficiency Ratio)', 'Net Profit'],
    tools: ['Meta Ads Manager', 'Google Ads', 'YouTube Ads', 'Triple Whale', 'Northbeam'],
    sampleOutcome: '4.8x average portfolio ROAS with rapid scaling ability'
  },
  {
    id: 'scale',
    pillar: 'SCALE',
    title: 'SEO, Retention & LTV Expansion',
    subtitle: 'WhatsApp/Email Lifecycle, Organic SEO Dominance & LTV',
    description: 'True wealth is built on customer lifetime value and organic search dominance. We build automated retention engines that turn one-time purchasers into repeat buyers while ranking #1 for high-intent keywords.',
    color: 'from-[#031A3D] to-[#078CCB]',
    iconName: 'Repeat',
    deliverables: [
      'Automated WhatsApp & Email Customer Retention Flows',
      'High-Authority Keyword SEO & Google Business Profile Ranking',
      'VIP Loyalty & Gamified Subscription Optimization',
      'Omnichannel Retargeting & Churn Prevention Protocols',
      'Content Syndication & Digital PR Authority Building'
    ],
    kpis: ['Customer Lifetime Value (LTV)', 'Repeat Purchase Rate', 'Organic Search Revenue', 'WhatsApp Open Rate'],
    tools: ['WhatsApp API', 'Klaviyo', 'Ahrefs', 'Semrush', 'Google Search Console'],
    sampleOutcome: 'Drives 35-45% of total brand revenue from zero-ad-spend organic channels'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Elena Vance',
    company: 'Lumina Skin Labs',
    role: 'Co-Founder & CEO',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    highlight: 'Scaled to ₹38 Lakh/mo in 7 months with 5.8x ROAS',
    quote: 'Groowth Mantra changed everything for our brand. In a competitive eCommerce market, their creative velocity and tracking tripled our revenue while cutting customer acquisition costs in half.',
    verifiedRevenue: '₹4.5+ Cr Run Rate',
    industry: 'D2C Skincare & Beauty'
  },
  {
    id: 'test-2',
    clientName: 'Rajesh Sharma',
    company: 'Vertex AI Cloud',
    role: 'Chief Revenue Officer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    highlight: '₹14.5 Crore enterprise pipeline generated in 9 months',
    quote: 'The precision of their B2B LinkedIn and high-intent search strategy is unlike anything we have seen. We booked qualified meetings with enterprise technology leaders every single week on autopilot.',
    verifiedRevenue: '₹14.5 Cr Pipeline',
    industry: 'Enterprise B2B SaaS'
  },
  {
    id: 'test-3',
    clientName: 'Vikram Malhotra',
    company: 'Apex Flow Athletics',
    role: 'Founder & Managing Director',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    highlight: 'Grew from ₹5 Lakh/mo to ₹48 Lakh/mo at 4.9x ROAS',
    quote: 'Their creative production and Shopify speed optimization gave our store an undeniable pulse. The product drop strategy they engineered produced over ₹18 Lakh in sales in our first 24 hours.',
    verifiedRevenue: '₹5.8 Cr Annualized',
    industry: 'Athleisure & Apparel'
  },
  {
    id: 'test-4',
    clientName: 'Ananya Singhania',
    company: 'FinGuard Wealth',
    role: 'VP of Growth',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    highlight: 'Acquired 240k+ active investors at 64% lower CAC',
    quote: 'Navigating financial marketing compliance while maintaining explosive user growth is challenging. Groowth Mantra cracked the code for our mobile app and scaled our assets under management significantly.',
    verifiedRevenue: '₹2,500 Cr AUM',
    industry: 'FinTech & Wealth'
  }
];
