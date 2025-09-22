import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import StateSection from "@/components/sections/StateSection";
import TestimonialSection from "@/components/sections/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServiceSection />
      <StateSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
