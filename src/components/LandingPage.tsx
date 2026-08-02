import AllInOneSection from "@/components/sections/AllInOneSection";
import FeaturesSection from "@/components/sections/features/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import NewsSection from "@/components/sections/NewsSection";
import PartnerLogosSection from "@/components/sections/PartnerLogosSection";
import SiteFooter from "@/components/sections/SiteFooter";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhatIsSkillineSection from "@/components/sections/WhatIsSkillineSection";
import WhatYouCanDoSection from "@/components/sections/WhatYouCanDoSection";

/**
 * Skilline marketing landing page.
 *
 * Rendered from a Figma export, so every section is absolutely positioned
 * against a fixed 1920x11494px canvas. Sections are listed back-to-front:
 * the header paints last so its artwork overlaps the sections below it.
 */
export default function LandingPage() {
  return (
    <div className="bg-white relative size-full">
      <SiteFooter />
      <NewsSection />
      <TestimonialsSection />
      <IntegrationsSection />
      <FeaturesSection />
      <WhatYouCanDoSection />
      <WhatIsSkillineSection />
      <AllInOneSection />
      <PartnerLogosSection />
      <HeroSection />
    </div>
  );
}
