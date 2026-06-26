import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import FlagshipProject from "@/components/FlagshipProject";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import CertificationsSection from "@/components/CertificationsSection";
import TechStackCarousel from "@/components/TechStackCarousel";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <FlagshipProject />
      <ExperienceTimeline />
      <CertificationsSection />
      <TechStackCarousel />
      <ResumeSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
