import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import about from "../../assets/aboutImage/acharyaji.jpg"

const features = [
  'Experienced & Certified Pandits',
  'Authentic Vedic Rituals',
  'Services across all faiths',
  'Home Visit & Online Options',
  'Premium Puja Materials',
  '24/7 Customer Support',
];

export function About() {
  return (
    <section className="py-14 overflow-hidden">
      <div className="container mx-auto px-3">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-sandalwood-light">
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-saffron/20 via-gold/20 to-maroon/20" />
              
              {/* Divine Pattern Overlay */}
              <div className="absolute inset-0 divine-pattern opacity-10" />
              
              {/* Main Image */}
              <img 
                src={about} 
                alt="Acharya Ji performing puja ceremony" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              
              
              {/* Overlay Gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="absolute -bottom-5 -right-5 bg-white rounded-lg shadow-lg p-5 max-w-[280px] border border-sandalwood/20 backdrop-blur-sm z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-saffron to-gold flex items-center justify-center shadow-md">
                  
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-maroon">15+</p>
                  <p className="text-xs text-gray-600">Years of Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-saffron/10 to-gold/10 text-maroon rounded-full text-xs font-medium mb-3">
              About Acharya Ji
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-5 text-gray-900">
              Bringing Divine Blessings to Your Home
            </h2>
            <p className="text-gray-600 mb-5 leading-relaxed text-sm">
              Acharya Ji is a trusted platform for authentic spiritual services, connecting devotees 
              with experienced priests and religious scholars. We believe in preserving ancient 
              traditions while making them accessible to modern families.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Whether you seek blessings for a new beginning, wish to perform ancestral rites, 
              or want to celebrate festivals with proper rituals, our team ensures every ceremony 
              is conducted with devotion and authenticity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-1.5 bg-white/50 p-2 rounded-lg"
                >
                  <CheckCircle className="w-4 h-4 text-saffron flex-shrink-0" />
                  <span className="text-xs text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-to-r from-saffron to-gold hover:from-saffron/90 hover:to-gold/90 text-white border-none">
                <Link to="/about">Learn More About Us</Link>
              </Button>
              <Button asChild variant="outline" className="border-saffron text-saffron hover:bg-saffron/10">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}