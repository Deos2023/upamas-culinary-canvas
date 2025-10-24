import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      event: 'Wedding Reception',
      rating: 5,
      text: 'Upama\'s Kitchen made our wedding unforgettable! The food was absolutely delicious and the service was impeccable. All our guests were raving about the authentic Bengali dishes.',
    },
    {
      name: 'Rajesh Kumar',
      event: 'Corporate Event',
      rating: 5,
      text: 'We hired them for our annual corporate meet and were thoroughly impressed. Professional service, timely delivery, and the food quality exceeded our expectations.',
    },
    {
      name: 'Anita Das',
      event: 'Birthday Party',
      rating: 5,
      text: 'The rotis and luchis were so fresh and tasty! Everyone at my daughter\'s birthday party loved the food. Upama Banerjee personally ensured everything was perfect.',
    },
    {
      name: 'Amit Ghosh',
      event: 'Puja Ceremony',
      rating: 5,
      text: 'Perfect catering for our religious function. They understood our requirements for sattvik food and delivered exactly what we needed. Highly recommended!',
    },
  ];

  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-semibold tracking-wider mb-4">✦ TESTIMONIALS ✦</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Read what our satisfied customers have to say about our services
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="fill-primary text-primary" size={20} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.event}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
