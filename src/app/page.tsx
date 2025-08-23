import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import ServiceSection from "@/components/sections/ServiceSection";
import StateSection from "@/components/sections/StateSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <StateSection />
      <ServiceSection />
      {/* spacer to separate content from footer */}
      {/* <div className="h-24" aria-hidden="true" /> */}
      <Footer />
    </div>
  );
}
