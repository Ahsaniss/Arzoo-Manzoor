import Navigation from "@/components/Navigation"
import HeroSection from "@/components/HeroSection"
import AboutSection from "@/components/AboutSection"
import SkillsSection from "@/components/SkillsSection"
import CertificatesSection from "@/components/CertificatesSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
