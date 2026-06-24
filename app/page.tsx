import type { Metadata } from "next";
import { GrainOverlay } from "@/animations/grain-overlay";

export const metadata: Metadata = {
  title: "Solz Designs — Premium Web & Brand Design Studio",
  description:
    "Zimbabwe's premium creative studio. We build high-converting websites, bold brand identities, and immersive digital experiences.",
  alternates: { canonical: "https://solzdesigns.co.zw" },
};
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
