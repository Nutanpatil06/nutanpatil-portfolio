import { Navbar } from '@/components/Navbar';
import { ParticleBackground } from '@/components/ParticleBackground';
import { HeroSection } from '@/components/sections/HeroSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { EducationSection } from '@/components/sections/EducationSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ResearchSection } from '@/components/sections/ResearchSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <ResearchSection />
        <BlogSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
