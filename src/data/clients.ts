import { ClientCaseStudy } from '../types';

export const CLIENT_CASE_STUDIES: ClientCaseStudy[] = [
  {
    id: 'lumina-skin-labs',
    name: 'Lumina Skin Labs',
    category: 'ecommerce',
    categoryLabel: 'D2C Skincare & Beauty',
    tagline: 'Hyper-scaling clinical botanical skincare to ₹4.5+ Crore annualized omnichannel run rate',
    logoText: 'LUMINA',
    location: 'Mumbai & Bangalore, India',
    founded: '2021',
    heroImage: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80',
    initialRevenue: '₹3,50,000 / mo',
    currentRevenue: '₹38,50,000 / mo',
    growthMultiplier: '11.0x',
    roasAchieved: '5.8x Blended',
    cacReduction: '-58% CAC',
    timeframe: '7 Months',
    summary: 'Lumina was struggling with high customer acquisition costs on Meta and high RTO rates. Groowth Mantra rebuilt their creative engine, launched a high-converting UGC pipeline, and restructured Meta Advantage+ shopping campaigns with automated COD verification.',
    challenge: 'High blended CAC (₹620 on a ₹890 AOV), customer churn after first purchase, creative fatigue within 10 days, and zero server-side attribution tracking.',
    solution: [
      'Deployed server-side Conversions API (CAPI) with custom first-party data capture',
      'Engineered a 40+ asset/month UGC creator engine testing 8 hook variations per concept',
      'Built a personalized skincare quiz funnel that boosted conversion rate from 1.8% to 4.6%',
      'Introduced automated post-purchase WhatsApp & email replenishment flows increasing 90-day LTV by 84%'
    ],
    keyStrategies: [
      {
        title: 'Creative Angle Diversification',
        description: 'Pivoted from glossy studio product shots to problem-first creator teardowns focusing on dermatological micro-routines.',
        impact: '+310% CTR increase on Meta'
      },
      {
        title: 'Post-Purchase LTV Architecture',
        description: 'Engineered a dynamic 5-stage WhatsApp & email replenishment protocol timed to average jar depletion cycles.',
        impact: '42% repeat purchase rate'
      },
      {
        title: 'Advantage+ Bid Strategy Restructure',
        description: 'Consolidated ad sets into broad demographic targeting powered by heavy creative testing in sandboxes before scaling.',
        impact: 'Dropped CAC from ₹620 to ₹260'
      }
    ],
    channelsUsed: ['Meta Ads (Advantage+)', 'Instagram Reels & UGC', 'Google Shopping & PMax', 'WhatsApp & Email CRM', 'Shopify Plus CRO'],
    resultsBreakdown: [
      { metric: 'Monthly Revenue', before: '₹3,50,000', after: '₹38,50,000', change: '+1,000%' },
      { metric: 'Blended ROAS', before: '1.4x', after: '5.8x', change: '+314%' },
      { metric: 'Cost Per Acquisition (CAC)', before: '₹620.00', after: '₹260.00', change: '-58.1%' },
      { metric: 'Store Conversion Rate', before: '1.82%', after: '4.65%', change: '+155%' },
      { metric: 'Customer 90-Day LTV', before: '₹950.00', after: '₹1,760.00', change: '+85.1%' }
    ],
    testimonial: {
      quote: "Groowth Mantra didn't just run ads—they rebuilt our entire unit economics. We went from burning cash at ₹3.5L/mo to a highly profitable multi-crore run rate in under a year. Their creative velocity is unmatched.",
      author: 'Elena Vance',
      role: 'Co-Founder & CEO',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    creativeAngles: [
      { hook: '"Why your 7-step skincare is ruining your skin barrier"', format: 'UGC Problem-Agitate', ctr: '3.84%', roas: '6.4x' },
      { hook: '"Dermatologist reacts to viral glass skin trend"', format: 'Authority Reaction Video', ctr: '4.12%', roas: '5.9x' },
      { hook: '"30-Day Before & After Time Lapse (Zero Filter)"', format: 'Split Screen Comparison', ctr: '4.65%', roas: '7.1x' }
    ]
  },
  {
    id: 'vertex-ai-cloud',
    name: 'Vertex AI Cloud',
    category: 'b2b-saas',
    categoryLabel: 'Enterprise AI & Cloud Infrastructure',
    tagline: 'Scaling B2B Enterprise Qualified Pipeline to ₹14.5 Crore ARR',
    logoText: 'VERTEX.AI',
    location: 'Gurugram & San Francisco',
    founded: '2022',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    initialRevenue: '₹6,50,000 / mo ARR',
    currentRevenue: '₹1,20,00,000 / mo ARR',
    growthMultiplier: '18.4x ARR',
    roasAchieved: '8.4x Pipeline ROI',
    cacReduction: '-47% Demo Cost',
    timeframe: '9 Months',
    summary: 'Vertex AI needed enterprise CTO and VP of Engineering leads for their automated DevOps infrastructure platform. Groowth Mantra deployed a precision Account-Based Marketing (ABM) engine combining LinkedIn Conversational Ads, programmatic search intent, and high-converting technical whitepaper interactive calculators.',
    challenge: 'Sales cycle exceeding 6 months, high cost per qualified enterprise demo, and low organic search visibility for high-intent infrastructure keywords.',
    solution: [
      'Architected precision LinkedIn ABM campaigns targeting 2,500 named corporate accounts',
      'Engineered an interactive Cloud Latency & Cost Calculator tool that captured 1,400+ technical leads',
      'Built a programmatic SEO library of 180+ comparison pages against legacy enterprise platforms',
      'Synchronized CRM scoring with Google Ads offline conversion tracking'
    ],
    keyStrategies: [
      {
        title: 'Interactive ROI Assessment Tools',
        description: 'Replaced standard PDF lead magnets with a real-time web calculator estimating compute savings in seconds.',
        impact: '24% visitor-to-demo conversion'
      },
      {
        title: 'Full-Funnel LinkedIn ABM Funnel',
        description: 'Sequenced thought leadership content to C-suite executives followed by tactical direct demo invitations.',
        impact: '84 Enterprise POs closed'
      },
      {
        title: 'Offline Conversion Syncing',
        description: 'Trained Google Search bidding algorithms on SQLs (Sales Qualified Leads) rather than generic form fills.',
        impact: '3.2x increase in pipeline quality'
      }
    ],
    channelsUsed: ['LinkedIn ABM Ads', 'Google High-Intent Search', 'Programmatic SEO Engine', 'HubSpot RevOps', 'Interactive Web Tools'],
    resultsBreakdown: [
      { metric: 'Annual Recurring Pipeline', before: '₹1.0 Cr', after: '₹14.5 Cr', change: '+1,350%' },
      { metric: 'Cost Per SQL Demo', before: '₹12,400', after: '₹3,600', change: '-71.0%' },
      { metric: 'Organic Search Traffic', before: '3,100 / mo', after: '68,400 / mo', change: '+2,106%' },
      { metric: 'Sales Velocity (Days to Close)', before: '142 Days', after: '68 Days', change: '-52.1%' }
    ],
    testimonial: {
      quote: "The precision of Groowth Mantra's ABM engine is unmatched in B2B marketing. They filled our sales calendar with tier-1 enterprise prospects that closed at triple our historic ACV.",
      author: 'Marcus Chen',
      role: 'Chief Revenue Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    creativeAngles: [
      { hook: '"Calculate how much cloud overcharges your microservices"', format: 'Interactive Web Tool Ad', ctr: '4.8%', roas: '9.2x Pipeline' },
      { hook: '"Why Tier-1 CTOs are modernizing infrastructure in 2026"', format: 'Executive Whitepaper Carousel', ctr: '3.4%', roas: '7.8x Pipeline' }
    ]
  },
  {
    id: 'apex-flow-athletics',
    name: 'Apex Flow Athletics',
    category: 'ecommerce',
    categoryLabel: 'Performance Athleisure & Sportswear',
    tagline: 'From niche activewear store to ₹48 Lakh / month athleisure powerhouse',
    logoText: 'APEX FLOW',
    location: 'New Delhi & Mumbai',
    founded: '2020',
    heroImage: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    initialRevenue: '₹5,50,000 / mo',
    currentRevenue: '₹48,00,000 / mo',
    growthMultiplier: '8.7x',
    roasAchieved: '4.9x Blended',
    cacReduction: '-52% Ad Cost',
    timeframe: '6 Months',
    summary: 'Apex Flow faced intense competition from legacy sportswear giants. Groowth Mantra created a community-driven drop model, viral athletic testing reels, and an omnichannel paid media strategy across Meta, Instagram, and YouTube Shorts.',
    challenge: 'High inventory holding costs, lack of brand differentiation, stagnant ad ROAS around 1.6x, and heavy reliance on discount codes.',
    solution: [
      'Designed a countdown "Drop Schedule" system generating organic FOMO and WhatsApp VIP waitlists',
      'Created high-octane macro-shot athletic performance video creatives highlighting sweat-wicking durability',
      'Optimized product pages with 1-click checkout, instant bundle upsells, and size predictor AI',
      'Expanded into Google PMax and YouTube Shorts direct-response ads'
    ],
    keyStrategies: [
      {
        title: 'Limited Drop Product Strategy',
        description: 'Shifted product launches to monthly timed capsule drops with VIP early WhatsApp access.',
        impact: '₹18 Lakh in first 24 hours of drop'
      },
      {
        title: 'Dynamic Bundle Builder CRO',
        description: 'Engineered an interactive outfit builder on product pages allowing mix-and-match discounts.',
        impact: 'AOV jumped from ₹1,250 to ₹2,450'
      }
    ],
    channelsUsed: ['Meta Dynamic Product Ads', 'Instagram Reels & Influencer Drops', 'YouTube Performance Ads', 'WhatsApp Broadcasts', 'Smart Upsells'],
    resultsBreakdown: [
      { metric: 'Monthly Revenue', before: '₹5,50,000', after: '₹48,00,000', change: '+772%' },
      { metric: 'Average Order Value (AOV)', before: '₹1,250', after: '₹2,450', change: '+96.0%' },
      { metric: 'WhatsApp & Email Attributed Revenue', before: '11%', after: '38%', change: '+245%' },
      { metric: 'Return On Ad Spend (ROAS)', before: '1.65x', after: '4.92x', change: '+198%' }
    ],
    testimonial: {
      quote: "Groowth Mantra gave our brand an undeniable pulse. Their creative production quality rivals global giants, but executed with pure performance-driven ruthlessness.",
      author: 'David Sterling',
      role: 'Founder & Head of Product',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    creativeAngles: [
      { hook: '"Squat test with 140kg: Does this fabric hold up?"', format: 'Extreme Stress Test Video', ctr: '5.1%', roas: '6.2x' },
      { hook: '"Gym wear that actually fits your athletic build"', format: 'Problem-Solution Showcase', ctr: '3.9%', roas: '4.8x' }
    ]
  },
  {
    id: 'finguard-wealth',
    name: 'FinGuard Wealth',
    category: 'fintech',
    categoryLabel: 'FinTech & Smart Wealth App',
    tagline: 'Acquiring 240,000+ funded retail investor accounts at record low CAC',
    logoText: 'FINGUARD',
    location: 'Mumbai & Bangalore',
    founded: '2022',
    heroImage: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
    initialRevenue: '12,000 Active Users',
    currentRevenue: '254,000 Active Users',
    growthMultiplier: '21x User Base',
    roasAchieved: '6.2x LTV/CAC',
    cacReduction: '-64% CPI',
    timeframe: '8 Months',
    summary: 'FinGuard launched a breakthrough automated wealth and tax-optimization micro-investment app. In a hyper-regulated fintech landscape, Groowth Mantra engineered compliant, viral educational ad funnels and deep-funnel search marketing.',
    challenge: 'Strict financial compliance rules, high cost per funded account, and drop-off during KYC verification identity stages.',
    solution: [
      'Produced 60+ educational financial literacy video hooks simplifying compound interest and SIP wealth building',
      'Optimized the onboarding funnel, cutting KYC verification drop-off by 43%',
      'Scaled Google Universal App Campaigns (UAC) with custom keyword intent clusters',
      'Implemented deep-linking tracking with AppsFlyer to attribute funded account milestones'
    ],
    keyStrategies: [
      {
        title: 'Compliance-Proof Creative Framework',
        description: 'Developed modular ad scripts pre-approved by compliance teams that hooked retail audiences.',
        impact: 'Over 8.5M video views'
      },
      {
        title: 'Deep-Funnel Bidding on First Deposit',
        description: 'Switched ad network optimization from mere app download to ₹500 initial account deposit.',
        impact: '76% funded account conversion'
      }
    ],
    channelsUsed: ['Google UAC & Search', 'Meta Mobile App Install Ads', 'AppsFlyer Attribution', 'Financial Influencer Network'],
    resultsBreakdown: [
      { metric: 'Funded Active Accounts', before: '12,000', after: '254,000', change: '+2,016%' },
      { metric: 'Cost Per Funded Account', before: '₹1,450', after: '₹520', change: '-64.1%' },
      { metric: 'Assets Under Management (AUM)', before: '₹120 Cr', after: '₹2,500 Cr', change: '+1,983%' },
      { metric: 'KYC Onboarding Completion Rate', before: '34%', after: '77%', change: '+126%' }
    ],
    testimonial: {
      quote: "Acquiring real funded users in fintech is brutally expensive. Groowth Mantra engineered creative campaigns that not only passed strict regulatory scrutiny but cut our acquisition cost by two-thirds.",
      author: 'Sophia Al-Mansoor',
      role: 'VP of Growth & Strategy',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      verified: true
    },
    creativeAngles: [
      { hook: '"How smart investors optimize compounding automatically"', format: 'Visual Infographic Explainer', ctr: '4.4%', roas: '7.2x' },
      { hook: '"I started a ₹2,000/month SIP for 12 months—here are my verified returns"', format: 'Real User Case Review', ctr: '5.3%', roas: '8.1x' }
    ]
  }
];

export const CLIENT_LOGOS = [
  { name: 'Lumina Skin Labs', industry: 'D2C Skincare', revenue: '₹4.5+ Cr' },
  { name: 'Vertex AI Cloud', industry: 'Enterprise SaaS', revenue: '₹14.5 Cr ARR' },
  { name: 'Apex Flow Athletics', industry: 'Athleisure', revenue: '₹5.8 Cr+' },
  { name: 'FinGuard Wealth', industry: 'FinTech', revenue: '₹2,500 Cr AUM' },
  { name: 'EduVibe Academy', industry: 'EdTech', revenue: '₹3.6 Cr+' },
  { name: 'VitalPure Nutrition', industry: 'Health & Wellness', revenue: '₹4.2 Cr+' },
  { name: 'Nordic Clean Co.', industry: 'Home D2C', revenue: '₹2.8 Cr+' },
  { name: 'Stratos Security', industry: 'Cybersecurity B2B', revenue: '₹9.5 Cr Pipeline' }
];

export const AGENCY_STATS = {
  totalRevenueGenerated: '₹150+ Crore',
  averageRoas: '4.8x',
  clientRetentionRate: '98.4%',
  scaledBrandsCount: '240+',
  activeCampaignBudget: '₹25+ Crore'
};
