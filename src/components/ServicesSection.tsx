import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, Briefcase, Cake, Sparkles, Settings, Users } from 'lucide-react';
import weddingCatering from '@/assets/wedding-catering.jpg';

const ServicesSection = () => {
  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'Make your special day memorable with our premium wedding catering services',
    },
    {
      icon: Briefcase,
      title: 'Corporate Events',
      description: 'Professional catering for meetings, seminars, and corporate gatherings',
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Delightful food arrangements for celebrations of all sizes',
    },
    {
      icon: Sparkles,
      title: 'Religious Functions',
      description: 'Traditional sattvik food options for pujas and religious ceremonies',
    },
    {
      icon: Settings,
      title: 'Roti Machine Sales',
      description: 'Authorized dealer for automatic roti making machines',
    },
    {
      icon: Users,
      title: 'Machine Service',
      description: 'Comprehensive maintenance and support for roti machines',
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">✦ WHAT WE OFFER ✦</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive catering solutions for every occasion and event type
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
              >
                <service.icon className="text-primary" size={32} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={weddingCatering}
            alt="Professional Catering Services"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex items-center">
            <div className="container mx-auto px-8 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Plan Your Event?
              </h3>
              <p className="text-lg mb-6 max-w-xl">
                Let us handle the catering while you enjoy your special moment. Get a free quote today!
              </p>
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
