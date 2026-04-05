export interface NavLink {
  label: string;
  href: string;
}

export interface BenefitItem {
  title: string;
  description: string;
}

export interface CryptoItem {
  name: string;
  symbol: string;
  price: string;
  change: string;
  logoUrl: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
}

export interface PricingPlan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Assets {
  heroDashboard: string;
  testimonialIcon: string;
  testimonialAvatar: string;
  footerLogo: string;
}
