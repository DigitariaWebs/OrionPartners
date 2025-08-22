import Header from "@/components/layout/Header";
import AboutSection from "@/components/sections/AboutSection";
import HeroSection from "@/components/sections/HeroSection";
import StateSection from "@/components/sections/StateSection";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <StateSection />
    </div>
  );
}
