import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight } from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Online Puja Booking', href: '/puja/online' },
    { label: 'Personalized Rituals', href: '/puja/offline' },
    { label: 'Special Anushthan', href: '/puja/anushthan' },
    { label: 'Two Bidders Ceremony', href: '/bidders' },
    { label: 'Home Consecration', href: '/services/home-puja' },
    { label: 'Vedic Astrology Consultation', href: '/services/astrology' },
  ],
  products: [
    { label: 'Sacred Puja Essentials', href: '/samagri/essentials' },
    { label: 'Divine Idols & Murtis', href: '/samagri/idols' },
    { label: 'Blessed Prasad Delivery', href: '/products/prasad' },
    { label: 'Complete Puja Kits', href: '/products/kits' },
    { label: 'Rudraksha & Gemstones', href: '/products/rudraksha' },
    { label: 'Vedic Books & Scriptures', href: '/products/books' },
  ],
  company: [
    { label: 'About Acharya Ji', href: '/about' },
    { label: 'Divine Insights Blog', href: '/blog' },
    { label: 'Sacred Gallery', href: '/gallery' },
    { label: 'Contact for Guidance', href: '/contact' },
    { label: 'Testimonials', href: '/testimonials' },
    { label: 'Our Gurukul', href: '/gurukul' },
  ],
  astrology: [
    { label: 'Free Kundli Generation', href: '/astrology/kundli' },
    { label: 'Kundli Matching', href: '/astrology/matching' },
    { label: 'Manglik Dosh Analysis', href: '/astrology/manglik' },
    { label: 'Shani Sade Sati', href: '/astrology/sade-sati' },
    { label: 'Career & Finance', href: '/astrology/career' },
    { label: 'Vastu Consultation', href: '/astrology/vastu' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Section */}
          <div className="flex flex-col space-y-5">
            <div className="flex items-center gap-3 mb-2">
              <div className="relative group">
                <div className="absolute -inset-2 bg-amber-500/10 rounded-xl blur-xl group-hover:bg-amber-500/20 transition-all duration-700" />
                
                <div className="relative w-16 h-16 rounded-xl p-[1.5px] bg-gradient-to-br from-amber-600 via-amber-200 to-amber-900 shadow-lg overflow-hidden">
                  
                  <div className="w-full h-full rounded-[10px] bg-gray-900/10 flex items-center justify-center p-2 backdrop-blur-md">
                    
                    <img 
                      src="/logo.png" 
                      alt="Acharya Ji Logo" 
                      className="w-full h-full object-contain filter drop-shadow-[0_2px_5px_rgba(255,255,255,0.1)] group-hover:scale-110 transition-transform duration-500" 
                    />
                    
                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-amber-200/50 rounded-tl-sm" />
                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-amber-200/50 rounded-br-sm" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold bg-gradient-to-r from-amber-200 to-amber-500 bg-clip-text text-transparent">
                  Acharya Ji
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-amber-500/80 font-bold">
                  Vedic Wisdom • Sacred Rituals
                </p>
              </div>
            </div>
            
            <p className="text-sm text-gray-300 leading-relaxed">
              Bringing authentic Vedic traditions and sacred rituals to your doorstep with pure devotion and ancient wisdom.
            </p>

            <div className="flex gap-3 mt-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/5 text-gray-400 border border-white/10 hover:border-amber-500 hover:text-amber-500 hover:bg-amber-500/10 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="space-y-4">
            <h4 className="text-amber-500 font-medium text-sm mb-3">
              Divine Services
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.services.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-gray-300 hover:text-amber-400 flex items-center group transition-all duration-300">
                    <ArrowRight className="w-0 h-3.5 group-hover:w-3.5 mr-0 group-hover:mr-1.5 opacity-0 group-hover:opacity-100 text-amber-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Astrology Links */}
          <div className="space-y-4">
            <h4 className="text-amber-500 font-medium text-sm mb-3">
              Vedic Astrology
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.astrology.slice(0, 4).map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-sm text-gray-300 hover:text-amber-400 flex items-center group transition-all duration-300">
                    <ArrowRight className="w-0 h-3.5 group-hover:w-3.5 mr-0 group-hover:mr-1.5 opacity-0 group-hover:opacity-100 text-amber-500 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h4 className="text-amber-500 font-medium text-sm mb-3">
              Contact Us
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <MapPin className="w-4 h-4 text-amber-500" />
                </div>
                <span className="text-sm text-gray-300 leading-snug">
                  Varanasi, India - 221001
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-amber-500" />
                </div>
                <a href="tel:+919876543210" className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 rounded bg-amber-500/10 border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-4 h-4 text-amber-500" />
                </div>
                <a href="mailto:guidance@acharyaji.com" className="text-sm text-gray-300 hover:text-amber-400 transition-colors">
                  guidance@acharyaji.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-5 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 font-medium text-center sm:text-left">
              © {new Date().getFullYear()} ACHARYA JI. ALL RIGHTS RESERVED.
            </p>
            <div className="flex gap-5 text-xs text-gray-500">
              <Link to="/privacy" className="hover:text-amber-500 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-amber-500 transition-colors">Terms of Service</Link>
              <Link to="/refund" className="hover:text-amber-500 transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}