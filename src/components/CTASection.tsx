import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Make Your Event <span className="text-primary">Memorable?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            Contact us today for a free consultation and let us help you create an unforgettable culinary experience
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.a
              href="tel:+918240594541"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Phone className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Call Us</p>
                <p className="font-semibold">8240594541</p>
              </div>
            </motion.a>

            <motion.a
              href="mailto:upamabanerjee98@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-2 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Mail className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email Us</p>
                <p className="font-semibold text-sm">upamabanerjee98@gmail.com</p>
              </div>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 p-6 bg-card rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <MapPin className="text-primary" size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Visit Us</p>
                <p className="font-semibold text-sm">Sodepur, Kolkata</p>
              </div>
            </motion.div>
          </div>

          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            <Link to="/contact">Get Free Quote Now</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
