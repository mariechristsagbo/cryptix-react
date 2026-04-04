import type { PricingPlan } from "./types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    monthlyPrice: "€0",
    yearlyPrice: "€0",
    description: "Perfect for beginners exploring crypto trading",
    features: [
      "Trade 50+ cryptocurrencies",
      "Standard trading fees (0.8%)",
      "Basic wallet security",
      "Mobile & desktop access",
      "Email support",
      "Market analysis tools",
      "Real-time price alerts"
    ]
  },
  {
    name: "Pro",
    badge: "Popular",
    monthlyPrice: "€12",
    yearlyPrice: "€10",
    description: "Advanced tools for serious traders",
    features: [
      "Reduced fees (0.4% per trade)",
      "Priority transaction processing",
      "Advanced charting & indicators",
      "Portfolio analytics dashboard",
      "Staking rewards (up to 12% APY)",
      "API access for automation",
      "Priority support (2h response)"
    ]
  },
  {
    name: "Business",
    monthlyPrice: "€39",
    yearlyPrice: "€31",
    description: "Built for institutions and high-volume traders",
    features: [
      "Ultra-low fees (0.1% per trade)",
      "Dedicated account manager",
      "OTC desk for large orders",
      "White-label solutions",
      "Custom API limits",
      "Multi-user team accounts",
      "24/7 phone support"
    ]
  }
];
