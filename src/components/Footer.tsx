import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">Upama's Kitchen</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Serving Taste with Tradition since 2019. Your trusted partner for authentic Bengali catering and automatic roti making machines.
            </p>
            <p className="text-xs text-muted-foreground">Established: 04/04/2019</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/menu" className="hover:text-primary transition-colors">Our Menu</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Wedding Catering</li>
              <li>Corporate Events</li>
              <li>Birthday Parties</li>
              <li>Religious Functions</li>
              <li>Roti Machine Sales</li>
              <li>Machine Service & Support</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">
                  6/6 Ekford Road, Joyram Enclave, Phase-2, Shop no G-4 & G-5, Sodepur, Kolkata - 700115
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:upamabanerjee98@gmail.com" className="text-muted-foreground hover:text-primary">
                  upamabanerjee98@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <div className="text-muted-foreground">
                  <a href="tel:+918240594541" className="hover:text-primary block">8240594541</a>
                  <a href="tel:+919007294740" className="hover:text-primary block">9007294740</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Upama's Kitchen & Caterer. All rights reserved. Developed & Maintained by <span className="text-primary font-medium">Digital Exposure Online Services</span>
            <span className="mx-2">|</span>
            Owner: <span className="text-primary font-medium">Upama Mukherjee</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
