import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import menuBackground from "@/assets/food.jpeg";

const FeaturedMenu = () => {
  const menuItems = [
    {
      name: "Roti",
      price: "₹2.50/pc",
      description: "Fresh handmade rotis",
      category: "Wholesale",
    },
    {
      name: "Luchi",
      price: "₹2/pc",
      description: "50 pc packet",
      category: "Wholesale",
    },
    {
      name: "Hing Kachori",
      price: "₹4/pc",
      description: "24 pc packet",
      category: "Wholesale",
    },
    {
      name: "Peas Kachori",
      price: "₹4/pc",
      description: "25 pc packet",
      category: "Wholesale",
    },
    {
      name: "Dal Poori",
      price: "₹4/pc",
      description: "25 pc packet",
      category: "Wholesale",
    },
    {
      name: "Radha Ballavi",
      price: "₹4/pc",
      description: "25 pc packet",
      category: "Wholesale",
    },
    {
      name: "Plain Paratha",
      price: "₹5/pc",
      description: "25 pc packet",
      category: "Wholesale",
    },
    {
      name: "Egg Roll Base",
      price: "₹8/pc",
      description: "25 pc packet",
      category: "Wholesale",
    },
  ];

  return (
    <section
      className=" bg-muted/30 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${menuBackground})`,
      }}
    >
      <div className="container mx-auto px-4 bg-black/60">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">
            ✦ OUR MENU ✦
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Authentic <span className="text-primary">Bengali Delights</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Freshly prepared daily with traditional recipes and premium
            ingredients
          </p>
        </motion.div>Non

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow hover-scale group">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {item.description}
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {item.price}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
