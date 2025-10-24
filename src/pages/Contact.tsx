import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: 'Missing Information',
        description: "Please fill in at least your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Format the message for WhatsApp
      const whatsappMessage = `
🎯 *New Website Inquiry - Upama's Kitchen*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email || 'Not provided'}
📞 *Phone:* ${formData.phone}
💬 *Message:* ${formData.message || 'No additional message'}

*Submitted via Website Contact Form*
      `.trim();

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(whatsappMessage);
      
      // Create WhatsApp URL
      const whatsappUrl = `https://wa.me/918240594541?text=${encodedMessage}`;
      
      // Small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success toast
      toast({
        title: 'Message Ready!',
        description: "You're being redirected to WhatsApp to send your inquiry.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });
      
    } catch (error) {
      toast({
        title: 'Error',
        description: "Failed to prepare WhatsApp message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-black/60 to-slate-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 ">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We'd love to hear from you. Contact us for bookings or any queries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <a href="tel:+918240594541" className="text-sm text-primary hover:underline block">
                    8240594541
                  </a>
                  <a href="tel:+919007294740" className="text-sm text-primary hover:underline block">
                    9007294740
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:upamabanerjee98@gmail.com"
                    className="text-sm text-primary hover:underline"
                  >
                    upamabanerjee98@gmail.com
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-sm text-muted-foreground">
                    6/6 Ekford Road, Joyram Enclave, Sodepur, Kolkata - 700115
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-sm text-muted-foreground">
                    Mon - Sun: 8:00 AM - 10:00 PM
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event requirements..."
                    rows={6}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Preparing WhatsApp...
                    </>
                  ) : (
                    'Send via WhatsApp'
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Find Us</h2>
              <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.2!2d88.4!3d22.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQyJzAwLjAiTiA4OMKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Upama's Kitchen Location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;