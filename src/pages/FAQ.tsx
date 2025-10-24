import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: 'What types of events do you cater?',
      answer: 'We cater to all types of events including weddings, corporate events, birthday parties, religious functions (annaprashan, pujas, havans), anniversaries, and social gatherings. Whether it\'s an intimate family dinner or a grand celebration with hundreds of guests, we have you covered.',
    },
    {
      question: 'Do you provide catering for small gatherings?',
      answer: 'Absolutely! We cater to events of all sizes. Whether you need food for 20 people or 2000, we can customize our services to meet your requirements. Our flexible packages ensure quality service regardless of event size.',
    },
    {
      question: 'Can we customize the menu?',
      answer: 'Yes, definitely! We understand every event is unique. You can work with us to create a customized menu that suits your preferences, dietary restrictions, and budget. We can blend traditional Bengali dishes with contemporary options as per your requirements.',
    },
    {
      question: 'Do you offer home delivery?',
      answer: 'Yes, we provide home delivery services for food orders. For our packaged items like rotis, luchis, and kachoris, delivery is available throughout Kolkata. For event catering, we bring everything to your venue and handle the complete setup.',
    },
    {
      question: 'What areas do you serve in Kolkata?',
      answer: 'We serve all across Kolkata and surrounding areas including North Kolkata, South Kolkata, Salt Lake, New Town, Howrah, and other regions. We\'re based in Sodepur but our services extend throughout the greater Kolkata metropolitan area.',
    },
    {
      question: 'How far in advance should we book?',
      answer: 'For large events like weddings, we recommend booking at least 2-3 months in advance to ensure availability. For smaller events, 2-3 weeks notice is usually sufficient. However, we also accommodate last-minute bookings based on our availability.',
    },
    {
      question: 'Do you provide service staff?',
      answer: 'Yes, we provide professional service staff for events. Our team includes experienced servers, helpers, and supervisors who ensure smooth service throughout your event. The number of staff is determined based on your guest count and service requirements.',
    },
    {
      question: 'What are your food hygiene and safety standards?',
      answer: 'We maintain the highest standards of food hygiene and safety. All our ingredients are fresh and sourced from reliable vendors. Our kitchen follows strict cleanliness protocols, and our staff is trained in food safety practices. We use only high-quality cooking oil and maintain proper food storage temperatures.',
    },
    {
      question: 'Can you accommodate dietary restrictions?',
      answer: 'Yes, we can accommodate various dietary requirements including vegetarian, vegan, gluten-free, and sattvik food options. Please inform us about any specific dietary needs when booking, and we\'ll customize the menu accordingly.',
    },
    {
      question: 'What is included in your catering package?',
      answer: 'Our standard catering package includes food preparation, transportation, setup, service staff, serving equipment, and cleanup. We can also arrange additional services like tables, chairs, decorations, and crockery rental as per your requirements.',
    },
    {
      question: 'Do you provide tastings before the event?',
      answer: 'Yes, for large events and weddings, we offer menu tasting sessions so you can sample the dishes and finalize your menu. This helps ensure you\'re completely satisfied with your selections before the big day.',
    },
    {
      question: 'What are your payment terms?',
      answer: 'We typically require an advance booking amount to confirm your date. The payment schedule can be discussed and customized based on the event size. We accept cash, bank transfers, and digital payments for your convenience.',
    },
    {
      question: 'What about the automatic roti making machine?',
      answer: 'We are authorized dealers for high-quality automatic roti making machines. We provide complete sales, installation, training, and after-sales service. The machines are perfect for restaurants, hotels, catering businesses, and commercial kitchens. Various capacity options are available.',
    },
    {
      question: 'Do you provide maintenance for roti machines?',
      answer: 'Yes, we offer comprehensive maintenance and repair services for automatic roti making machines. This includes regular servicing, spare parts supply, technical support, and troubleshooting. Annual maintenance contracts are also available.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies based on the event type and timing. Generally, if cancellation is done well in advance (more than a month before the event), the advance amount is refundable after deducting a small processing fee. For last-minute cancellations, terms may vary. Please discuss specific terms when booking.',
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
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find answers to common questions about our catering services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-card rounded-lg px-6 border shadow-sm hover:shadow-md transition-shadow"
                  >
                    <AccordionTrigger className="text-left font-semibold">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Still Have <span className="text-primary">Questions?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Feel free to reach out to us directly. We're here to help!
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
              href="mailto:upamabanerjee98@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition"
            >
              Email Us
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
