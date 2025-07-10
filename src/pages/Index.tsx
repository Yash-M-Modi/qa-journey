
import HeroSection from '@/components/HeroSection';
import RoleOverview from '@/components/RoleOverview';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <RoleOverview />
      <Footer />
    </div>
  );
};

export default Index;
