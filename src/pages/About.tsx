import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Award, Users, Heart } from "lucide-react";
import rotiMachine from "@/assets/roti-machine.jpg";
import roti from "@/assets/videos/machine4.mp4";
import { useRef, useEffect, useState } from "react";

const About = () => {
  const videoRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (videoRef.current) {
            videoRef.current.play().catch((error) => {
              console.log("Auto-play failed:", error);
            });
          }
        } else {
          setIsInView(false);
          if (videoRef.current) {
            videoRef.current.pause();
          }
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-gradient-to-br from-primary/10 to-secondary/10 bg-fixed bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${rotiMachine})` }}
      >
        {/* Absolute overlay covering entire section */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content container with absolute positioning */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-primary">Upama's Kitchen</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A legacy of authentic Bengali cuisine and hospitality,
                established in 2019
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded on{" "}
                <span className="font-semibold text-foreground">
                  April 4th, 2019
                </span>
                , by{" "}
                <span className="font-semibold text-primary">
                  Upama Banerjee
                </span>
                , our journey began with a simple vision: to bring authentic
                Bengali flavors to every celebration in Kolkata.
              </p>
              <p className="text-muted-foreground mb-4">
                What started as a small catering service has grown into a
                trusted name, serving over 5000 happy clients and catering to
                more than 1000 events. We take pride in our traditional recipes
                passed down through generations, combined with modern hygiene
                standards and professional service.
              </p>
              <p className="text-muted-foreground">
                From intimate family gatherings to grand weddings, corporate
                events to religious ceremonies, we ensure every event is
                memorable with our delicious food and impeccable service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-primary/10 p-6 rounded-xl">
                <Users size={40} className="text-primary mb-4" />
                <p className="text-3xl font-bold mb-2">5000+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-xl">
                <Award size={40} className="text-secondary mb-4" />
                <p className="text-3xl font-bold mb-2">1000+</p>
                <p className="text-sm text-muted-foreground">Events Catered</p>
              </div>
              <div className="bg-primary/10 p-6 rounded-xl">
                <Heart size={40} className="text-primary mb-4" />
                <p className="text-3xl font-bold mb-2">6+</p>
                <p className="text-sm text-muted-foreground">Years Service</p>
              </div>
              <div className="bg-secondary/10 p-6 rounded-xl">
                <Award size={40} className="text-secondary mb-4" />
                <p className="text-3xl font-bold mb-2">1L+</p>
                <p className="text-sm text-muted-foreground">Rotis Served</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roti Machine Business */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl shadow-2xl overflow-hidden bg-black/5">
                <video
                  ref={videoRef}
                  src={roti}
                  title="Automatic Roti Making Machine"
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={rotiMachine} // Optional: Add a poster frame
                />

                {/* Custom Video Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        if (videoRef.current.paused) {
                          videoRef.current.play();
                        } else {
                          videoRef.current.pause();
                        }
                      }
                    }}
                    className="text-white hover:text-primary transition-colors"
                  >
                    {isInView ? "⏸️" : "▶️"}
                  </button>
                  <div className="w-px h-4 bg-white/30"></div>
                  <button
                    onClick={() => {
                      if (videoRef.current) {
                        videoRef.current.muted = !videoRef.current.muted;
                      }
                    }}
                    className="text-white hover:text-primary transition-colors"
                  >
                    🔈
                  </button>
                </div>

                {/* Loading State */}
                {!isInView && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                  </div>
                )}
              </div>

              {/* Video Description */}
              <p className="text-sm text-muted-foreground mt-3 text-center">
                Watch our automatic roti machine in action - producing perfect
                rotis every time
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Automatic Roti Making{" "}
                <span className="text-primary">Machine Dealer</span>
              </h2>
              <p className="text-muted-foreground mb-4">
                As authorized dealers, we provide high-quality automatic roti
                making machines perfect for restaurants, hotels, catering
                businesses, and commercial kitchens.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Sales & Installation</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete setup and installation support for all machine
                      models
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      Service & Maintenance
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Regular maintenance and quick repair services to keep your
                      operations running
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full mt-1">
                    <Award size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Training & Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive training for your staff and ongoing
                      technical support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">We'd love to hear from you</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6 bg-card rounded-xl shadow-lg"
            >
              <MapPin size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">
                6/6 Ekford Road, Joyram Enclave, Phase-2, Shop no G-4 & G-5,
                Sodepur Girja 8 no Rail Gate, Kolkata - 700115
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6 bg-card rounded-xl shadow-lg"
            >
              <Phone size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <a
                href="tel:+918240594541"
                className="block text-sm text-primary hover:underline mb-1"
              >
                8240594541
              </a>
              <a
                href="tel:+919007294740"
                className="block text-sm text-primary hover:underline"
              >
                9007294740
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center p-6 bg-card rounded-xl shadow-lg"
            >
              <Mail size={40} className="text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <a
                href="mailto:upamabanerjee98@gmail.com"
                className="text-sm text-primary hover:underline"
              >
                upamabanerjee98@gmail.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
