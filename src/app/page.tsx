import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContactSection from "@/components/sections/ContactSection";
import DistinctionsSection from "@/components/sections/DistinctionsSection";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import StateSection from "@/components/sections/StateSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import ValuePropositionSection from "@/components/sections/ValuePropositionSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ValuePropositionSection />
      <ServiceSection />
      <StateSection />
      <DistinctionsSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
