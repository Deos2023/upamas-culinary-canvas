import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Briefcase,
  Cake,
  Sparkles,
  Settings,
  Users,
  Star,
  Award,
  Clock,
  CheckCircle,
  Phone,
} from "lucide-react";
import weddingCatering from "@/assets/wedding-catering.jpg";
import food from "@/assets/food.jpeg";

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Roti Machine Sales",
      description: "Authorized dealer for automatic roti making machines",
    },
    {
      icon: Users,
      title: "Machine Service",
      description: "Comprehensive maintenance and support for roti machines",
    },
    {
      icon: Heart,
      title: "Wedding Catering",
      description:
        "Make your special day memorable with our premium wedding catering services",
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Professional catering for meetings, seminars, and corporate gatherings",
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description: "Delightful food arrangements for celebrations of all sizes",
    },
    {
      icon: Sparkles,
      title: "Religious Functions",
      description:
        "Traditional sattvik food options for pujas and religious ceremonies",
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients" },
    { number: "1000+", label: "Events Catered" },
    { number: "6+", label: "Years Experience" },
    { number: "10L+", label: "Rotis Served" },
  ];

  const features = [
    "100% Hygienic Kitchen",
    "Traditional Recipes",
    "Fresh Ingredients",
    "On-time Delivery",
    "Customizable Menus",
    "Professional Staff",
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">
            ✦ WHAT WE OFFER ✦
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive catering solutions for every occasion and event type
          </p>
        </motion.div>

        {/* Enhanced Rotating Image Section with Side Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
          {/* Left Side - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Award className="text-primary" size={28} />
                Why Choose Us?
              </h3>

              {/* Features List */}
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle size={14} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.6 }}
                    className="text-center p-4 bg-primary/5 rounded-lg border border-primary/10"
                  >
                    <p className="text-2xl font-bold text-primary mb-1">
                      {stat.number}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Center - Rotating Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center items-center"
          >
            {/* Outer Rotating Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-96 h-96 border-2 border-primary/20 rounded-full"
            />

            {/* Middle Rotating Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute w-80 h-80 border border-primary/30 rounded-full"
            />

            {/* Floating Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-96 h-96"
            >
              {[0, 60, 120, 180, 240, 300].map((angle, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center backdrop-blur-sm"
                  style={{
                    top: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Star className="text-primary" size={20} />
                </motion.div>
              ))}
            </motion.div>

            {/* Main Rotating Image */}
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              }}
              className="relative w-64 h-64 rounded-full border-4 border-primary/20 shadow-2xl overflow-hidden"
            >
              <img
                src={food}
                alt="Traditional Bengali Thali"
                className="w-full h-full object-cover"
              />

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full" />
            </motion.div>

            {/* Center Decoration */}
            <div className="absolute w-8 h-8 bg-primary rounded-full shadow-lg shadow-primary/30" />
          </motion.div>

          {/* Right Side - Quick Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-3">
                <Clock className="text-primary" size={28} />
                Quick Services
              </h3>

              {/* Service Highlights */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="p-4 bg-secondary/5 rounded-lg border border-secondary/10"
                >
                  <h4 className="font-semibold text-secondary mb-2">
                    Free Consultation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Get personalized menu suggestions and quotes
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-4 bg-primary/5 rounded-lg border border-primary/10"
                >
                  <h4 className="font-semibold text-primary mb-2">
                    24/7 Support
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Available for urgent bookings and inquiries
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="p-4 bg-green-500/5 rounded-lg border border-green-500/10"
                >
                  <h4 className="font-semibold text-green-600 mb-2">
                    Flexible Packages
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Customizable options for every budget
                  </p>
                </motion.div>
              </div>

              {/* Quick CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Link to="/contact">
                    <Phone size={16} className="mr-2" />
                    Call Now
                  </Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Get instant response for urgent requirements
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-border/50 hover:border-primary/20"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors"
              >
                <service.icon className="text-primary" size={32} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA with Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl group"
        >
          <img
            src={weddingCatering}
            alt="Professional Catering Services"
            className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 flex items-center">
            <div className="container mx-auto px-8 text-white">
              <motion.h3
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Ready to Plan Your Event?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg mb-6 max-w-xl"
              >
                Let us handle the catering while you enjoy your special moment.
                Get a free quote today!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 hover:scale-105 transition-transform"
                >
                  <Link to="/contact">Get Free Quote</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
