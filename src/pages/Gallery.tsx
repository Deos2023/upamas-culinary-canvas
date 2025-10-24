import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-catering.jpg';
import weddingImage from '@/assets/wedding-catering.jpg';
import bengaliBreakfast from '@/assets/bengali-breakfast.jpg';
import rotiMachine from '@/assets/roti-machine.jpg';

const Gallery = () => {
  const galleryImages = [
    { src: heroImage, title: 'Premium Catering Setup', category: 'Events' },
    { src: weddingImage, title: 'Wedding Buffet', category: 'Weddings' },
    { src: bengaliBreakfast, title: 'Bengali Breakfast Platter', category: 'Food' },
    { src: rotiMachine, title: 'Automatic Roti Machine', category: 'Equipment' },
    { src: heroImage, title: 'Fresh Luchis & Kachoris', category: 'Food' },
    { src: weddingImage, title: 'Corporate Event Catering', category: 'Events' },
    { src: bengaliBreakfast, title: 'Traditional Bengali Dishes', category: 'Food' },
    { src: rotiMachine, title: 'Commercial Kitchen Setup', category: 'Equipment' },
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A glimpse into our delicious creations and successful events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <p className="text-sm font-medium text-primary mb-1">{image.category}</p>
                        <h3 className="text-lg font-bold">{image.title}</h3>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Want Us to Create <span className="text-primary">Magic</span> at Your Event?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us make your celebration memorable with our delicious food and professional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+918240594541"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Call: 8240594541
            </motion.a>
            <motion.a
              href="https://wa.me/918240594541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#128C7E] transition"
            >
              WhatsApp Us
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
