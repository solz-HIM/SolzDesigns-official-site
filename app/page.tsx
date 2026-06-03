import { GrainOverlay } from "@/animations/grain-overlay";
import { LoadingScreen } from "@/components/loading-screen";
import { Navigation } from "@/components/navigation";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { Footer } from "@/components/footer";
import { AboutSection } from "@/sections/about";
import { CtaSection } from "@/sections/cta";
import { HeroSection } from "@/sections/hero";
import { ProcessSection } from "@/sections/process";
import { ServicesSection } from "@/sections/services";
import { WhyChooseUsSection } from "@/sections/why-choose-us";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <LoadingScreen />
      <GrainOverlay />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <ProcessSection />
        <CtaSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
