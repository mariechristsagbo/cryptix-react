import { useState } from "react";

import "../landing.css";

import { Footer } from "../components/layout/Footer";
import { Navbar } from "../components/layout/Navbar";
import { CryptoTickerSection } from "../components/sections/CryptoTickerSection";
import { FaqSection } from "../components/sections/FaqSection";
import { FinalCtaSection } from "../components/sections/FinalCtaSection";
import { HeroSection } from "../components/sections/HeroSection";
import { PricingSection } from "../components/sections/PricingSection";
import { StepsSection } from "../components/sections/StepsSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { WhySection } from "../components/sections/WhySection";
import { useReveal } from "../hooks/useReveal";

export function CryptixPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useReveal();

  return (
    <div className="min-h-screen bg-[#08070e] text-white">
      <Navbar
        isOpen={isMenuOpen}
        onToggle={() => setIsMenuOpen((current) => !current)}
        onNavigate={() => setIsMenuOpen(false)}
      />
      <HeroSection />
      <WhySection />
      <CryptoTickerSection />
      <StepsSection />
      <TestimonialsSection />
      <PricingSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  );
}
