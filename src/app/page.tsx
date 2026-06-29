import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";

import ExperienceTimeline from "@/components/ExperienceTimeline";
import TechStackCarousel from "@/components/TechStackCarousel";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />

      <ExperienceTimeline />
      <TechStackCarousel />
      <ContactSection />
      <Footer />
    </main>
  );
}
