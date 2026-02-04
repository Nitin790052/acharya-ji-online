import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Phone, Calendar } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-divine opacity-95" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full text-sm font-medium mb-6">
              Begin Your Spiritual Journey
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6">
              Ready to Experience Divine Blessings?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Book your puja today and let our experienced priests bring sacred rituals 
              to your doorstep. Experience peace, prosperity, and spiritual fulfillment.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild variant="gold" size="xl">
                <Link to="/puja/online" className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book a Puja Now
                </Link>
              </Button>
              <Button asChild size="xl" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/30">
                <a href="tel:+919876543210" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Us: +91 98765 43210
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}