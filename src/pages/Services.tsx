import { motion } from "framer-motion";
import {
  Heart,
  Briefcase,
  Cake,
  Sparkles,
  Settings,
  Users,
  Check,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import servicebg from "@/assets/grp1.jpeg";
import { useEffect } from "react";
const Services = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  const services = [
    {
      icon: Heart,
      title: "Wedding Catering",
      description:
        "Make your special day unforgettable with our comprehensive wedding catering services",
      features: [
        "Customized menu planning",
        "Traditional Bengali wedding feast",
        "Professional service staff",
        "Elegant presentation",
        "From intimate to grand weddings",
      ],
    },
    {
      icon: Briefcase,
      title: "Corporate Events",
      description:
        "Professional catering solutions for all your business events",
      features: [
        "Conferences & seminars",
        "Office parties & celebrations",
        "Training sessions",
        "High-tea setups",
        "Flexible timing options",
      ],
    },
    {
      icon: Cake,
      title: "Birthday Parties",
      description:
        "Delightful food arrangements for birthday celebrations of all ages",
      features: [
        "Kid-friendly menu options",
        "Adult party packages",
        "Custom cake arrangements",
        "Themed food presentations",
        "Party planning support",
      ],
    },
    {
      icon: Sparkles,
      title: "Religious Functions",
      description:
        "Traditional sattvik food options for religious ceremonies and pujas",
      features: [
        "Annaprashan ceremonies",
        "Puja celebrations",
        "Havan arrangements",
        "Sattvik food options",
        "Traditional recipes",
      ],
    },
    {
      icon: Settings,
      title: "Roti Machine Sales",
      description:
        "Authorized dealer for high-quality automatic roti making machines",
      features: [
        "Commercial-grade machines",
        "Various capacity options",
        "Installation support",
        "Warranty coverage",
        "Training included",
      ],
    },
    {
      icon: Users,
      title: "Machine Service",
      description:
        "Comprehensive maintenance and repair services for roti machines",
      features: [
        "Regular maintenance",
        "Quick repair service",
        "Spare parts supply",
        "Technical support",
        "Annual contracts available",
      ],
    },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative h-screen bg-gradient-to-br from-primary/10 to-secondary/10 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${servicebg})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Our <span className="text-primary">Services</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Comprehensive catering and equipment solutions for every
                occasion. From intimate gatherings to grand celebrations, we
                handle every detail. Your one-stop solution for memorable events
                and flawless execution.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-8">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6"
                    >
                      <service.icon className="text-primary" size={32} />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <Check
                            size={20}
                            className="text-primary mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What makes Upama's Kitchen the preferred choice for catering in
              Kolkata
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Authentic Recipes</h3>
              <p className="text-muted-foreground">
                Traditional Bengali recipes passed down through generations
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Professional Team</h3>
              <p className="text-muted-foreground">
                Experienced and courteous staff to serve your guests
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                Premium ingredients and strict hygiene standards
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            Ready to Book <span className="text-primary">Our Services?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get in touch with us today for a free consultation and customized
            quote
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/contact">Contact Us Now</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Services;
