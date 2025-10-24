import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import menuBackground from "@/assets/food.jpeg";
const Menu = () => {
  const [filter, setFilter] = useState("All");

  const menuItems = [
    {
      name: "Roti",
      price: "₹2.50/pc",
      description: "Fresh handmade rotis",
      category: "Retail",
      type: "Veg",
    },
    {
      name: "Luchi",
      price: "₹2/pc",
      description: "50 pc packet",
      category: "Wholesale",
      type: "Veg",
    },
    {
      name: "Hing Kachori",
      price: "₹4/pc",
      description: "24 pc packet",
      category: "Popular",
      type: "Veg",
    },
    {
      name: "Peas Kachori",
      price: "₹4/pc",
      description: "25 pc packet",
      category: "Popular",
      type: "Veg",
    },
    {
      name: "Dal Poori",
      price: "₹4/pc",
      description: "25 pc packet",
      category: "Retail",
      type: "Veg",
    },
    {
      name: "Radha Ballavi",
      price: "₹4/pc",
      description: "25 pc packet",
      category: "Popular",
      type: "Veg",
    },
    {
      name: "Plain Paratha",
      price: "₹5/pc",
      description: "25 pc packet",
      category: "Retail",
      type: "Veg",
    },
    {
      name: "Egg Roll Base",
      price: "₹8/pc",
      description: "25 pc packet",
      category: "Retail",
      type: "Non-Veg",
    },
  ];

  const filters = ["All", "Veg", "Non-Veg", "Popular", "Retail", "Wholesale"];

  const filteredItems =
    filter === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.type === filter || item.category === filter
        );

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section
        className="relative h-screen bg-gradient-to-br from-primary/10 to-secondary/10 bg-fixed bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${menuBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center ">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                Our <span className="text-primary">Menu</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Authentic Bengali delicacies made fresh daily with traditional
                recipes. Preserving generations of culinary heritage in every
                bite we serve. Experience the true taste of Bengal with
                time-honored cooking techniques.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filterItem) => (
              <Button
                key={filterItem}
                variant={filter === filterItem ? "default" : "outline"}
                onClick={() => setFilter(filterItem)}
                className={
                  filter === filterItem ? "bg-primary hover:bg-primary/90" : ""
                }
              >
                {filterItem}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow hover-scale h-full">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold">{item.name}</h3>
                      <Badge
                        variant={
                          item.type === "Veg" ? "secondary" : "destructive"
                        }
                      >
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-2xl font-bold text-primary">
                        {item.price}
                      </p>
                      <Badge variant="outline">{item.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">
                No items found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Want to Order in <span className="text-primary">Bulk?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us for special bulk pricing and wholesale rates for your
            events or business needs
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="tel:+918240594541">Call for Bulk Orders</a>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Menu;
