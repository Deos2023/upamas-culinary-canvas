import Hero from '@/components/Hero';
import CounterSection from '@/components/CounterSection';
import FeaturedMenu from '@/components/FeaturedMenu';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import HerStory from '@/components/AboutUpama';
import GallerySection from '@/components/GallerySection';

const Index = () => {
  return (
    <main>
      <Hero />
      <CounterSection />
      <AboutSection />
      <HerStory />
      <FeaturedMenu />
      <ServicesSection />
      <GallerySection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
