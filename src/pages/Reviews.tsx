import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Priya Sharma',
      event: 'Wedding Reception - January 2025',
      rating: 5,
      text: 'Absolutely phenomenal service! Upama\'s Kitchen made our wedding day perfect. The authentic Bengali cuisine was a huge hit with all our guests. From the crispy luchis to the delicious kachoris, everything was fresh and flavorful. The team was professional, punctual, and went above and beyond to ensure everything was perfect.',
      location: 'Salt Lake, Kolkata',
    },
    {
      name: 'Rajesh Kumar',
      event: 'Corporate Annual Meet - December 2024',
      rating: 5,
      text: 'We hired Upama\'s Kitchen for our company\'s annual conference with 200+ attendees. Their professionalism was outstanding. The food quality exceeded our expectations, and the presentation was elegant. They managed everything seamlessly, from setup to cleanup. Highly recommend for corporate events!',
      location: 'Park Street, Kolkata',
    },
    {
      name: 'Anita Das',
      event: 'Birthday Party - November 2024',
      rating: 5,
      text: 'Celebrated my daughter\'s 5th birthday with Upama\'s Kitchen catering. The rotis were so soft and fresh - everyone was amazed! They customized the menu to include kid-friendly options while maintaining authentic Bengali flavors. Upama personally supervised everything. Truly exceptional service!',
      location: 'New Town, Kolkata',
    },
    {
      name: 'Amit Ghosh',
      event: 'Annaprashan Ceremony - October 2024',
      rating: 5,
      text: 'Perfect catering for our grandson\'s annaprashan. They understood our requirements for traditional sattvik food and delivered exactly what we needed. The purity of ingredients and traditional cooking methods were evident in every dish. Very satisfied with their service.',
      location: 'Howrah',
    },
    {
      name: 'Sneha Mukherjee',
      event: 'Office Inauguration - September 2024',
      rating: 5,
      text: 'Hired them for our new office inauguration. The high-tea setup was beautiful and the food was delicious. They were flexible with timing and accommodated all our last-minute requests. The parathas and kachoris were especially popular. Will definitely book again!',
      location: 'Sector V, Salt Lake',
    },
    {
      name: 'Debashis Sen',
      event: 'Durga Puja Bhog - September 2024',
      rating: 5,
      text: 'We ordered bhog for our community Durga Puja. The quantity was perfect, quality was excellent, and delivery was right on time. Everyone praised the authentic taste. Upama\'s Kitchen has become our go-to caterer for all puja events.',
      location: 'Behala, Kolkata',
    },
    {
      name: 'Ritu Banerjee',
      event: 'Housewarming Party - August 2024',
      rating: 5,
      text: 'Excellent food and service for our griha pravesh ceremony. The menu was well-balanced with both traditional and contemporary items. The presentation was beautiful and the taste was authentic. Guests couldn\'t stop complimenting the food!',
      location: 'Jadavpur, Kolkata',
    },
    {
      name: 'Subrata Roy',
      event: 'Roti Machine Purchase - July 2024',
      rating: 5,
      text: 'Purchased an automatic roti making machine for my restaurant from Upama\'s Kitchen. The machine quality is excellent, installation was smooth, and they provided thorough training. After-sales service is also prompt. Great investment for my business!',
      location: 'Barasat',
    },
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
              Customer <span className="text-primary">Reviews</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See what our happy clients have to say about our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="fill-primary text-primary" size={24} />
                ))}
              </div>
              <p className="text-3xl font-bold text-primary mb-1">5.0</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-2">5000+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-4xl font-bold text-primary mb-2">1000+</p>
              <p className="text-sm text-muted-foreground">Events Catered</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="fill-primary text-primary" size={20} />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{review.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-bold text-foreground mb-1">{review.name}</p>
                      <p className="text-sm text-primary mb-1">{review.event}</p>
                      <p className="text-xs text-muted-foreground">{review.location}</p>
                    </div>
                  </CardContent>
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
            Want to Be Our Next <span className="text-primary">Happy Client?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the same quality and service that our clients rave about
          </p>
          <motion.a
            href="tel:+918240594541"
            whileHover={{ scale: 1.05 }}
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition text-lg"
          >
            Book Your Event Today
          </motion.a>
        </div>
      </section>
    </main>
  );
};

export default Reviews;
