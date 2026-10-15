export interface ClientCaseStudy {
  id: string;
  name: string;
  category: 'ecommerce' | 'b2b-saas' | 'fintech' | 'health-wellness' | 'edtech';
  categoryLabel: string;
  tagline: string;
  logoText: string;
  location: string;
  founded: string;
  heroImage: string;
  initialRevenue: string;
  currentRevenue: string;
  growthMultiplier: string;
  roasAchieved: string;
  cacReduction: string;
  timeframe: string;
  summary: string;
  challenge: string;
  solution: string[];
  keyStrategies: {
    title: string;
    description: string;
    impact: string;
  }[];
  channelsUsed: string[];
  resultsBreakdown: {
    metric: string;
    before: string;
    after: string;
    change: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    avatar: string;
    verified: boolean;
  };
  creativeAngles: {
    hook: string;
    format: string;
    ctr: string;
    roas: string;
  }[];
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  iconName: string;
  deliverables: string[];
  technologies: string[];
  startingPrice: string;
  sampleOutcome: string;
  badge?: string;
}

export interface ServicePillar {
  id: string;
  pillar: 'BUILD' | 'BRAND' | 'GROW' | 'SCALE';
  title: string;
  subtitle: string;
  description: string;
  color: string;
  iconName: string;
  deliverables: string[];
  kpis: string[];
  tools: string[];
  sampleOutcome: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  notIncluded?: string[];
  bestFor: string;
  ctaText: string;
  whatsappMessage: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  company: string;
  role: string;
  avatar: string;
  rating: number;
  highlight: string;
  quote: string;
  verifiedRevenue: string;
  industry: string;
  videoPreviewUrl?: string;
}

export interface GrowthMetricTicker {
  totalRevenueGenerated: string;
  averageRoas: string;
  clientRetentionRate: string;
  scaledBrandsCount: string;
  activeCampaignBudget: string;
}

export interface AuditFormData {
  websiteUrl: string;
  industry: string;
  monthlyAdSpend: string;
  biggestChallenge: string;
  targetRevenueGoal: string;
  email: string;
  companyName: string;
}

export interface ContactFormData {
  full_name: string;
  phone: string;
  email: string;
  company?: string;
  service?: string;
  budget?: string;
  message: string;
  honeypot?: string;
}

export interface AuditReport {
  overallScore: number;
  funnelLeakGrade: string;
  creativeGrade: string;
  seoAuthorityGrade: string;
  estimatedMissedMonthlyRevenue: number;
  topOpportunities: {
    title: string;
    impact: 'High' | 'Critical' | 'Medium';
    timeToImplement: string;
    potentialRoi: string;
    description: string;
  }[];
  customRoadmap: {
    week: string;
    focus: string;
    actions: string[];
  }[];
}

export type AppPage = 
  | 'overview' 
  | 'about'
  | 'services' 
  | 'websites' 
  | 'case-studies' 
  | 'pricing'
  | 'contact'
  | 'blog'
  | 'social-media' 
  | 'events-awards' 
  | 'roi-calculator' 
  | 'command-center'
  | 'privacy-policy';

export interface ClientWebsite {
  id: string;
  name: string;
  clientName: string;
  category: 'ecommerce' | 'saas' | 'fintech' | 'fashion' | 'edtech' | 'healthcare' | 'wordpress' | 'shopify';
  categoryLabel: string;
  url: string;
  displayUrl: string;
  heroImage: string;
  previewImage: string;
  mobilePreviewImage?: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  results: {
    conversionRate: string;
    monthlyTraffic: string;
    speedScore: number;
    revenueScaled: string;
  };
  liveDate: string;
  highlightBadge: string;
}

export interface SocialMediaPost {
  id: string;
  platform: 'instagram' | 'tiktok' | 'youtube' | 'linkedin';
  accountName: string;
  accountHandle: string;
  accountAvatar: string;
  verified: boolean;
  contentType: 'reel' | 'carousel' | 'ugc-teardown' | 'influencer-seeding' | 'viral-hook';
  mediaUrl: string;
  videoDuration?: string;
  caption: string;
  hookHeadline: string;
  hashtags: string[];
  stats: {
    views: string;
    likes: string;
    comments: string;
    shares: string;
    roasMultiplier: string;
    ctrRate: string;
  };
  productFeatured: string;
  clientBrand: string;
  audioTrack: string;
  creativePillar: string;
}

export interface DigitalEventAward {
  id: string;
  title: string;
  subtitle: string;
  category: 'award-show' | 'brand-summit' | 'creator-gala' | 'digital-stream';
  categoryLabel: string;
  year: string;
  date: string;
  venue: string;
  location: string;
  badgeText: string;
  heroImage: string;
  gallery: string[];
  description: string;
  scopeOfWork: string[];
  stats: {
    inPersonAttendees: string;
    liveStreamViewers: string;
    pressCoverages: string;
    socialImpressions: string;
    sponsorMediaValue: string;
  };
  keyHighlights: string[];
  celebrityVIPs: {
    name: string;
    title: string;
    image: string;
  }[];
  awardsWonOrPresented?: {
    category: string;
    winner: string;
    trophy: string;
  }[];
  sponsorLogos: string[];
}
