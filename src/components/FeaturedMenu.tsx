import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Shield, Truck } from "lucide-react";
import menuBackground from "@/assets/food.jpeg";
import rotiImage from "@/assets/images/roti.jpg";
import daal from "@/assets/images/daalPoori.jpg";
import hing from "@/assets/images/hing.jpg";
import luchi from "@/assets/images/luchi.jpg";
import paratha from "@/assets/images/paratha.jpg";
import peas from "@/assets/images/peas.jpg";
import radhaballavi from "@/assets/images/radhaBallavi.jpg";
import roll from "@/assets/images/roll.jpg";

const FeaturedMenu = () => {
  const menuItems = [
    {
      name: "Frozen Roti",
      price: "₹3/pc",
      quantity: "100pc & onwards",
      description: "Fresh handmade rotis(100 pc & onwards)",
      category: "Retail",
      type: "Veg",
      img: rotiImage,
      popular: true,
    },
    {
      name: "Luchi",
      price: "₹2/pc",
      description: "50 pc packet - Perfect for festivals",
      category: "Wholesale",
      type: "Veg",
      img: luchi,
      popular: false,
    },
    {
      name: "Hing Kachori",
      price: "₹5/pc",
      description: "25 pc packet - Crispy & flavorful",
      category: "Popular",
      type: "Veg",
      img: hing,
      popular: true,
    },
    {
      name: "Peas Kachori",
      price: "₹5/pc",
      description: "25 pc packet - Stuffed with spiced peas",
      category: "Popular",
      type: "Veg",
      img: peas,
      popular: true,
    },
    {
      name: "Dal Poori",
      price: "₹5/pc",
      description: "25 pc packet - Lentil stuffed goodness",
      category: "Retail",
      type: "Veg",
      img: daal,
      popular: false,
    },
    {
      name: "Radha Ballavi",
      price: "₹5/pc",
      description: "25 pc packet - Traditional Bengali delight",
      category: "Popular",
      type: "Veg",
      img: radhaballavi,
      popular: true,
    },
    {
      name: "Plain Paratha",
      price: "₹5/pc",
      description: "25 pc packet - Flaky and buttery",
      category: "Retail",
      type: "Veg",
      img: paratha,
      popular: false,
    },
    {
      name: "Roll Base",
      price: "₹8/pc",
      description: "25 pc packet - Perfect for wraps",
      category: "Retail",
      type: "Non-Veg",
      img: roll,
      popular: false,
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Fresh Daily",
      description: "Made fresh every morning",
    },
    {
      icon: Shield,
      title: "Hygienic",
      description: "100% hygienic preparation",
    },
    {
      icon: Star,
      title: "Traditional",
      description: "Authentic Bengali recipes",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and reliable service",
    }
  ];

  return (
    <section className="relative py-20 bg-fixed bg-cover bg-center">
      {/* Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${menuBackground})` }}
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 bg-primary/20 px-4 py-2 rounded-full mb-6"
          >
            <Star className="w-4 h-4 text-primary" fill="currentColor" />
            <span className="text-primary text-sm font-semibold tracking-wider">
              ✦ OUR SIGNATURE DISHES ✦
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Taste of <span className="text-primary">Bengal</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience authentic Bengali flavors crafted with generations of
            culinary wisdom. Each dish tells a story of tradition and taste.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <feature.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 h-full overflow-hidden border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {item.popular && (
                      <Badge className="bg-yellow-500 hover:bg-yellow-600">
                        <Star className="w-3 h-3 mr-1" fill="white" />
                        Popular
                      </Badge>
                    )}
                    <Badge
                      variant={
                        item.type === "Veg" ? "secondary" : "destructive"
                      }
                    >
                      {item.type}
                    </Badge>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {item.name}
                    </h3>
                    <span className="text-lg font-semibold text-primary bg-primary/20 px-2 py-1 rounded">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center">
                    <Badge
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {item.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Experience Authentic Bengali Cuisine?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Link to="/menu">View Full Menu</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-gold hover:bg-white hover:text-black px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <a href="tel:+918240594541">Call to Order</a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
