import ProjectsSection from "@/components/ProjectsSection";
import FlagshipProject from "@/components/FlagshipProject";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden pt-20">
      <FlagshipProject />
      <ProjectsSection />
      <Footer />
    </main>
  );
}
