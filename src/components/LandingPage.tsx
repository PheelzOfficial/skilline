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
import PageLoader from "@/components/ui/PageLoader";

/**
 * Skilline marketing landing page.
 *
 * Sections stack in reading order. Layout is fluid throughout: copy reflows,
 * grids collapse column by column, and the illustration clusters carried over
 * from the Figma export scale proportionally inside their columns.
 */
export default function LandingPage() {
  return (
    <div className="bg-white">
      <PageLoader />
      <HeroSection />
      <main>
        <PartnerLogosSection />
        <AllInOneSection />
        <WhatIsSkillineSection />
        <WhatYouCanDoSection />
        <FeaturesSection />
        <IntegrationsSection />
        <TestimonialsSection />
        <NewsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
