import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/918240594541"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:animate-pulse" />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+918240594541"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow group"
        aria-label="Call Now"
      >
        <Phone size={24} className="group-hover:animate-pulse" />
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
