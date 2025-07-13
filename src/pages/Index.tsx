import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WelcomeSection from "@/components/WelcomeSection";
import DetailsSection from "@/components/DetailsSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WelcomeSection />
      <DetailsSection />
      <RSVPSection />
      <Footer />
    </div>
  );
};

export default Index;
