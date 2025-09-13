import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import CertificatesSection from "@/components/CertificatesSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import ProjectSection from "@/components/ProjectSection"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
