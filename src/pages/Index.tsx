import Hero from '@/components/Hero';
import CounterSection from '@/components/CounterSection';
import FeaturedMenu from '@/components/FeaturedMenu';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <main>
      <Hero />
      <CounterSection />
      <AboutSection />
      <FeaturedMenu />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
};

export default Index;
