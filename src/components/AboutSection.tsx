import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Award, Users, Heart } from 'lucide-react';
import bengaliBreakfast from '@/assets/food2.jpeg';

const AboutSection = () => {
  const features = [
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Premium ingredients and traditional recipes',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals at your service',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish crafted with care and passion',
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl hover-scale">
              <img
                src={bengaliBreakfast}
                alt="Authentic Bengali Breakfast"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-sm font-medium mb-2 text-primary">✦ ESTABLISHED 2019 ✦</p>
                <h3 className="text-2xl font-bold">Authentic Bengali Cuisine</h3>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-sm font-semibold tracking-wider mb-4">
              ✦ ABOUT US ✦
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Serving Taste with <span className="text-primary">Tradition</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded by <span className="font-semibold text-foreground">Upama Mukherjee</span> on
              April 4th, 2019, Upama's Kitchen & Caterer has become a trusted name in authentic
              Bengali catering services throughout Kolkata.
            </p>
            <p className="text-muted-foreground mb-8">
              From intimate family gatherings to grand weddings and corporate events, we bring the
              authentic taste of Bengal to your special occasions. We're also proud authorized dealers
              for automatic roti making machines, offering both sales and comprehensive service support.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
