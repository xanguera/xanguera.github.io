import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CVSection from "@/components/CVSection";
import PublicationsSection from "@/components/PublicationsSection";
import ThesisSection from "@/components/ThesisSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CVSection />
      <PublicationsSection />
      <ThesisSection />
      <Footer />
    </div>
  );
};

export default Index;
