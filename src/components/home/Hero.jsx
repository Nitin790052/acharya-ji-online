import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import image1 from "../../assets/banners/image1.png";
import image2 from "../../assets/banners/image4.png";
import image3 from "../../assets/banners/image3.png";

const slides = [
  {
    id: 1,
    title: "Divine Blessings at Your Doorstep",
    subtitle: "Experience sacred rituals performed by experienced priests",
    cta: "Book a Puja",
    ctaLink: "/puja/online",
    gradient: "from-saffron/90 via-saffron-dark/85 to-maroon/80",
    image: image1,
  },
  {
    id: 2,
    title: "Sacred Rituals & Anushthans",
    subtitle: "Traditional ceremonies with authentic Vedic mantras",
    cta: "Explore Services",
    ctaLink: "/puja/anushthan",
    gradient: "from-maroon/90 via-saffron-dark/85 to-gold/80",
    image: image2,
  },
  {
    id: 3,
    title: "Pure Puja Samagri Delivered",
    subtitle: "Premium quality items for your spiritual practices",
    cta: "Shop Now",
    ctaLink: "/products",
    gradient: "from-gold-dark/90 via-saffron/85 to-maroon/80",
    image: image3,
  },
];

export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section className="relative h-[75vh] min-h-[460px] overflow-hidden">
      <div className="absolute inset-0 divine-pattern opacity-50" />

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image with Light Overlay */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Main Background Image - 80% VISIBLE (20% light) */}
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 10, ease: "linear" }}
            >
              {/* Image Container - Fills entire banner with 80% opacity */}
              <div className="relative w-full h-full">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="absolute inset-0 w-full h-full object-fill"
                  style={{
                    opacity: 1, // 80% visible, 20% lightened
                    filter: 'brightness(1.1) contrast(1.05)'
                  }}
                />
              </div>
            </motion.div>
            
            {/* Dark Overlay for Text Readability - Reduced opacity */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)'
              }}
            />
            
            {/* Additional Blur Effects */}
            <motion.div
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{
                rotate: { duration: 60, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-gold/15 rounded-full blur-3xl opacity-60"
            />
            <motion.div
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{
                rotate: { duration: 45, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
              className="absolute -bottom-40 -left-40 w-80 h-80 bg-saffron-light/15 rounded-full blur-3xl opacity-60"
            />
          </div>

          <div className="container mx-auto px-5 h-full flex items-center">
  <div className="max-w-3xl text-white relative z-10 drop-shadow-2xl font-normal">
    
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="mb-4"
    >
      <span className="inline-block px-4 py-2 bg-white/30 backdrop-blur-md rounded-full text-sm font-medium text-white border border-white/40">
        ✨ Welcome to Acharya Ji
      </span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
    >
      {slides[current].title}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="text-lg md:text-xl text-white/95 mb-8 max-w-xl font-medium"
    >
      {slides[current].subtitle}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="flex flex-wrap gap-4"
    >
      <Button asChild variant="gold" size="xl" className="shadow-xl hover:shadow-2xl">
        <Link to={slides[current].ctaLink}>
          {slides[current].cta}
        </Link>
      </Button>

      <Button
        asChild
        variant="outlineDivine"
        size="xl"
        className="border-white text-white hover:bg-white hover:text-maroon shadow-lg backdrop-blur-md border-2"
      >
        <Link to="/contact">Contact Us</Link>
      </Button>
    </motion.div>

  </div>
</div>

        </motion.div>
      </AnimatePresence>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/45 transition-all z-20 shadow-xl border border-white/40"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/45 transition-all z-20 shadow-xl border border-white/40"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`h-3 rounded-full transition-all duration-300 backdrop-blur-md ${
              index === current
                ? "w-8 bg-gold"
                : "w-3 bg-white/70 hover:bg-white/90"
            }`}
          />
        ))}
      </div>
    </section>
  );
}