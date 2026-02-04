import React, { useState, useEffect } from 'react';
import { Home, Book, Droplets, Star, Users, ArrowRight, Sparkles, Clock, IndianRupee, ChevronLeft, ChevronRight } from 'lucide-react';
import grahPravesh from "../../assets/popularServices/GrihaPraveshPuja.png"
import LakshmiPuja from "../../assets/popularServices/LakshmiPuja1.png"
import NavgrahaShanti from "../../assets/popularServices/NavgrahaShantiPuja.png"
import PitruDosh from "../../assets/popularServices/PitruDoshPuja1.png"
import Rudrabhishek from "../../assets/popularServices/Rudrabhishek1.png"
import satyaNarayankatha from "../../assets/popularServices/satyaNarayankatha1.png"

const PopularPujaServices = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200);
  }, []);

  const pujaServices = [
    {
      id: 1,
      icon: Home,
      name: 'Griha Pravesh Puja',
      description: 'Invoke divine blessings for your new home with sacred rituals',
      duration: '2-3 hours',
      price: '₹5,100',
      popular: true,
      gradient: 'from-saffron to-saffron-dark',
      bgGradient: 'from-saffron/10 to-saffron-dark/5',
      iconColor: '#FF9933',
      features: ['Vastu Shanti', 'Ganesh Puja', 'Navagraha Puja'],
      Image:grahPravesh,
    },
    {
      id: 2,
      icon: Book,
      name: 'Satyanarayan Katha',
      description: 'Sacred storytelling ceremony for prosperity and harmony',
      duration: '1.5-2 hours',
      price: '₹3,100',
      popular: true,
      gradient: 'from-maroon to-maroon-dark',
      bgGradient: 'from-maroon/10 to-maroon-dark/5',
      iconColor: '#800000',
      features: ['Prasad Distribution', 'Vedic Mantras', 'Complete Vidhi'],
      Image:satyaNarayankatha,
    },
    {
      id: 3,
      icon: Droplets,
      name: 'Rudrabhishek',
      description: 'Sacred bathing ritual of Lord Shiva for blessings and peace',
      duration: '1-1.5 hours',
      price: '₹2,100',
      popular: true,
      gradient: 'from-gold to-gold-dark',
      bgGradient: 'from-gold/10 to-gold-dark/5',
      iconColor: '#FFD700',
      features: ['Abhishekam', 'Rudra Mantras', 'Bel Patra Offering'],
      Image:Rudrabhishek,
    },
    {
      id: 4,
      icon: Star,
      name: 'Navgraha Shanti Puja',
      description: 'Planetary peace ritual to harmonize cosmic influences',
      duration: '2-2.5 hours',
      price: '₹4,100',
      popular: false,
      gradient: 'from-orange-500 to-orange-600',
      bgGradient: 'from-orange-500/10 to-orange-600/5',
      iconColor: '#F97316',
      features: ['Nine Planet Puja', 'Homa Ritual', 'Gemstone Guidance'],
      Image:NavgrahaShanti,
    },
    {
      id: 5,
      icon: Users,
      name: 'Pitru Dosh Puja',
      description: 'Ancestral peace ritual for family harmony and prosperity',
      duration: '2-3 hours',
      price: '₹5,500',
      popular: false,
      gradient: 'from-purple-600 to-purple-700',
      bgGradient: 'from-purple-600/10 to-purple-700/5',
      iconColor: '#9333EA',
      features: ['Tarpan Vidhi', 'Pind Daan', 'Brahmin Bhojan'],
      Image:PitruDosh,
    },
    {
      id: 6,
      icon: Sparkles,
      name: 'Lakshmi Puja',
      description: 'Invoke goddess of wealth for prosperity and abundance',
      duration: '1.5-2 hours',
      price: '₹3,500',
      popular: false,
      gradient: 'from-pink-500 to-pink-600',
      bgGradient: 'from-pink-500/10 to-pink-600/5',
      iconColor: '#EC4899',
      features: ['Wealth Rituals', 'Coins Offering', 'Aarti'],
      Image:LakshmiPuja,
    }
  ];

  const itemsPerSlide = 3;
  const maxSlides = Math.ceil(pujaServices.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
  };

  return (
    <div className="relative py-10 px-3 sm:px-4 overflow-hidden bg-gradient-to-br from-cream via-white to-saffron-light/10">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #FF9933 0px, #FF9933 1px, transparent 1px, transparent 15px)`,
        }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-48 h-48 bg-saffron/10 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-maroon/10 rounded-full blur-2xl animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 w-56 h-56 bg-gold/10 rounded-full blur-2xl animate-float" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-saffron to-maroon text-white px-4 py-1.5 rounded-full text-xs font-semibold mb-4 shadow">
            <Sparkles className="w-3 h-3 animate-pulse" />
            Most Booked Services
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-saffron via-maroon to-gold bg-clip-text text-transparent">
            Popular Puja Services
          </h2>
          
          <p className="text-sm sm:text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
            Traditional rituals performed by <span className="font-bold text-maroon">experienced priests</span> with authentic Vedic mantras
          </p>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
          {pujaServices.map((puja, index) => {
            const Icon = puja.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={puja.id}
                className={`relative transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onMouseEnter={() => setActiveCard(index)}
              >
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full border group ${
                  isActive ? 'border-saffron scale-105' : 'border-gray-100 scale-100'
                }`}>
                  
                  {puja.popular && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className="bg-gradient-to-r from-saffron to-maroon text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                        Popular
                      </div>
                    </div>
                  )}

                  <div className={`relative h-60  bg-gradient-to-br ${puja.bgGradient} overflow-hidden`}>
                    <img src={puja.Image} alt="" />
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: `radial-gradient(circle, ${puja.iconColor} 1px, transparent 1px)`,
                      backgroundSize: '15px 15px'
                    }} />
                    
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${puja.gradient} flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                        isActive ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                      }`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 px-4 pb-4">
                    <h3 className="text-lg sm:text-xl font-bold text-maroon mb-2 text-center font-serif">
                      {puja.name}
                    </h3>
                    
                    <p className="text-gray-600 text-center mb-3 text-xs leading-relaxed">
                      {puja.description}
                    </p>

                    <div className="space-y-1.5 mb-3">
                      {puja.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <div className="w-1 h-1 rounded-full bg-gradient-to-r from-saffron to-maroon" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mb-3 text-xs text-gray-600 border-t border-gray-100 pt-3">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-saffron" />
                        <span>{puja.duration}</span>
                      </div>
                      <div className="flex items-center gap-0.5 font-bold text-maroon text-base">
                        <IndianRupee className="w-3.5 h-3.5" />
                        <span>{puja.price.replace('₹', '')}</span>
                      </div>
                    </div>

                    <button className={`w-full py-2.5 rounded-lg font-bold text-white bg-gradient-to-r ${puja.gradient} hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5 text-sm group-hover:gap-2`}>
                      Book Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {pujaServices.map((puja) => {
                const Icon = puja.icon;
                
                return (
                  <div key={puja.id} className="w-full flex-shrink-0 px-3">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                      {puja.popular && (
                        <div className="absolute top-3 right-3 z-10">
                          <div className="bg-gradient-to-r from-saffron to-maroon text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                            Popular
                          </div>
                        </div>
                      )}

                      <div className={`relative h-28 bg-gradient-to-br ${puja.bgGradient}`}>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${puja.gradient} flex items-center justify-center shadow-lg`}>
                            <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                          </div>
                        </div>
                      </div>

                      <div className="pt-12 px-4 pb-4">
                        <h3 className="text-lg font-bold text-maroon mb-2 text-center font-serif">
                          {puja.name}
                        </h3>
                        
                        <p className="text-gray-600 text-center mb-3 text-xs">
                          {puja.description}
                        </p>

                        <div className="space-y-1.5 mb-3">
                          {puja.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-600">
                              <div className="w-1 h-1 rounded-full bg-gradient-to-r from-saffron to-maroon" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mb-3 text-xs text-gray-600 border-t border-gray-100 pt-3">
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-saffron" />
                            <span>{puja.duration}</span>
                          </div>
                          <div className="flex items-center gap-0.5 font-bold text-maroon text-base">
                            <IndianRupee className="w-3.5 h-3.5" />
                            <span>{puja.price.replace('₹', '')}</span>
                          </div>
                        </div>

                        <button className={`w-full py-2.5 rounded-lg font-bold text-white bg-gradient-to-r ${puja.gradient} hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5 text-sm`}>
                          Book Now
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-maroon hover:bg-saffron hover:text-white transition-all z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-maroon hover:bg-saffron hover:text-white transition-all z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-1.5 mt-4">
            {[...Array(maxSlides)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide ? 'w-6 bg-saffron' : 'w-1.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className={`text-center mt-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-saffron to-maroon hover:from-saffron-dark hover:to-maroon-dark text-white px-8 py-3 rounded-lg font-bold shadow hover:shadow-lg transition-all duration-300 text-sm">
            View All Puja Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 10s ease-in-out infinite;
        }

        .from-saffron { --tw-gradient-from: #FF9933; }
        .to-saffron-dark { --tw-gradient-to: #FF6600; }
        .from-maroon { --tw-gradient-from: #800000; }
        .to-maroon-dark { --tw-gradient-to: #5C0000; }
        .from-gold { --tw-gradient-from: #FFD700; }
        .to-gold-dark { --tw-gradient-to: #DAA520; }
        .bg-cream { background-color: #FFF8E7; }
        .bg-saffron-light { background-color: #FFCC99; }
        .text-saffron { color: #FF9933; }
        .text-maroon { color: #800000; }
        .border-saffron { border-color: #FF9933; }
        .from-saffron\/10 { --tw-gradient-from: rgba(255, 153, 51, 0.1); }
        .to-saffron-dark\/5 { --tw-gradient-to: rgba(255, 102, 0, 0.05); }
        .from-maroon\/10 { --tw-gradient-from: rgba(128, 0, 0, 0.1); }
        .to-maroon-dark\/5 { --tw-gradient-to: rgba(92, 0, 0, 0.05); }
        .from-gold\/10 { --tw-gradient-from: rgba(255, 215, 0, 0.1); }
        .to-gold-dark\/5 { --tw-gradient-to: rgba(218, 165, 32, 0.05); }
        .bg-saffron\/10 { background-color: rgba(255, 153, 51, 0.1); }
        .bg-maroon\/10 { background-color: rgba(128, 0, 0, 0.1); }
        .bg-gold\/10 { background-color: rgba(255, 215, 0, 0.1); }
      `}</style>
    </div>
  );
};

export default PopularPujaServices;