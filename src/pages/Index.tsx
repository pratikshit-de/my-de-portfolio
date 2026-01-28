import { Suspense } from "react";
import Scene3D from "@/components/Scene3D";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/projects/ProjectsSection";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* 3D Background */}
      <Suspense fallback={<div className="fixed inset-0 bg-background" />}>
        <Scene3D />
      </Suspense>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
