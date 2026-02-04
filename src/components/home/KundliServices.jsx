import React, { useState, useEffect } from 'react';
import { Book, Heart, AlertCircle, Calendar, ArrowRight, Sparkles, Star, Zap, Shield } from 'lucide-react';
import GetFreeKundli from "../../assets/kundli/GetFreeKundli.png"
import KundliMatching from "../../assets/kundli/KundliMatching.png"
import ManglikDoshCheck from "../../assets/kundli/ManglikDoshCheck.jpg"
import ShaniSadeSati from "../../assets/kundli/ShaniSadeSati.jpg"

const KundliServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
    
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      id: 1,
      icon: Book,
      title: 'Get Free Kundli',
      description: 'Complete birth chart analysis with detailed planetary positions',
      features: ['Detailed Birth Chart', 'Planetary Positions', 'Dasha Predictions', 'Life Insights'],
      price: 'FREE',
      gradient: 'from-saffron to-orange-600',
      bgImage: GetFreeKundli,
      cta: 'Generate Free Kundli',
      popular: true
    },
    {
      id: 2,
      icon: Heart,
      title: 'Kundli Matching',
      description: 'Check compatibility for marriage with detailed Guna Milan analysis',
      features: ['36 Gunas Analysis', 'Manglik Check', 'Compatibility Score', 'Marriage Timing'],
      price: '₹500',
      gradient: 'from-maroon to-red-700',
      bgImage: KundliMatching,
      cta: 'Match Kundli Now',
      popular: true
    },
    {
      id: 3,
      icon: AlertCircle,
      title: 'Manglik Dosh Check',
      description: 'Identify Manglik Dosha and get personalized remedies',
      features: ['Manglik Analysis', 'Dosha Strength', 'Remedy Solutions', 'Expert Guidance'],
      price: '₹299',
      gradient: 'from-red-600 to-red-800',
      bgImage: ManglikDoshCheck,
      cta: 'Check Manglik Dosh',
      popular: false
    },
    {
      id: 4,
      icon: Calendar,
      title: 'Shani Sade Sati',
      description: 'Know your Sade Sati period and receive protective remedies',
      features: ['Current Phase', 'Impact Analysis', 'Timing Predictions', 'Remedial Measures'],
      price: '₹399',
      gradient: 'from-purple-900 to-indigo-900',
      bgImage: ShaniSadeSati,
      cta: 'Check Sade Sati',
      popular: false
    }
  ];

  return (
    <div className="relative py-10 px-3 overflow-hidden bg-gradient-to-br from-cream via-white to-saffron-light/15">
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #FF9933 0.6px, transparent 0.6px)`,
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-saffron/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-saffron to-maroon text-white px-5 py-1.5 rounded-full text-xs font-semibold mb-5 shadow">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Accurate Vedic Astrology
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-saffron via-maroon to-gold bg-clip-text text-transparent">
            Kundli Services
          </h2>
          
          <p className="text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
            Get detailed astrological insights with <span className="font-bold text-maroon">authentic Vedic calculations</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeService === index;
            
            return (
              <div
                key={service.id}
                className={`relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                <div className={`relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 h-full border group ${
                  isActive ? 'border-saffron scale-[1.02]' : 'border-gray-100 scale-100'
                }`}>
                  
                  {service.popular && (
                    <div className="absolute top-3 right-3 z-20">
                      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow flex items-center gap-1">
                        <Zap className="w-2.5 h-2.5" />
                        Popular
                      </div>
                    </div>
                  )}

                  <div className="relative h-44 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover  bg-center transition-transform duration-400 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.bgImage}')` }}
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 transform transition-all duration-400 ${
                        isActive ? 'scale-105 rotate-6' : 'scale-100 rotate-0'
                      }`}>
                        <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    <div className="absolute bottom-3 right-3">
                      <div className="bg-white/90 backdrop-blur-sm text-maroon px-3 py-1.5 rounded-lg font-bold text-base shadow">
                        {service.price}
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold text-maroon mb-2 font-serif">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-700">
                          <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center flex-shrink-0`}>
                            <Shield className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                          </div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`w-full py-2.5 rounded-lg font-bold text-white bg-gradient-to-r ${service.gradient} hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5 group-hover:gap-2 text-sm`}>
                      {service.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {isActive && (
                    <div className="absolute inset-0 bg-gradient-to-t from-saffron/15 via-transparent to-transparent pointer-events-none rounded-2xl" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 pointer-events-none" />
                </div>
              </div>
            );
          })}
        </div>

        <div className={`relative overflow-hidden rounded-2xl transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-saffron via-maroon to-gold" />
          
          <div className="absolute inset-0 opacity-15" style={{
            backgroundImage: `radial-gradient(circle, #FFFFFF 1px, transparent 1px)`,
            backgroundSize: '20px 20px'
          }} />

          <div className="relative z-10 px-6 py-10 md:py-12 text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
                <Star className="w-3.5 h-3.5 animate-spin-slow" />
                Get Started Today
              </div>

              <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
                Unlock Your Destiny with Vedic Wisdom
              </h3>
              
              <p className="text-base text-gold-light mb-6 leading-relaxed">
                Join <span className="font-bold text-white">50,000+ satisfied users</span> who discovered their life path through our accurate Kundli analysis
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button className="group bg-white text-maroon px-8 py-3 rounded-lg font-bold text-base shadow-lg hover:shadow-gold transition-all duration-300 flex items-center gap-2.5 hover:scale-[1.02]">
                  <Book className="w-5 h-5" />
                  Generate Kundli Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <button className="group border border-white text-white px-6 py-3 rounded-lg font-bold text-base backdrop-blur-sm hover:bg-white hover:text-maroon transition-all duration-300 flex items-center gap-1.5">
                  <Heart className="w-4 h-4" />
                  Match Kundli
                </button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-white/90 text-xs">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4" />
                  <span>100% Accurate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  <span>Instant Results</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-white" />
                  <span>4.9/5 Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { number: '50K+', label: 'Happy Users' },
            { number: '100%', label: 'Accurate Reports' },
            { number: '24/7', label: 'Support Available' },
            { number: '₹0', label: 'Basic Kundli Free' }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 text-center shadow-lg border border-gray-100 hover:border-saffron transition-all duration-300 hover:transform hover:scale-[1.02]"
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent mb-1.5">
                {stat.number}
              </div>
              <div className="text-gray-600 text-xs font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .from-saffron { --tw-gradient-from: #FF9933; }
        .to-saffron-dark { --tw-gradient-to: #FF6600; }
        .from-maroon { --tw-gradient-from: #800000; }
        .to-maroon-dark { --tw-gradient-to: #5C0000; }
        .from-gold { --tw-gradient-from: #FFD700; }
        .to-gold-dark { --tw-gradient-to: #DAA520; }
        .bg-cream { background-color: #FFF8E7; }
        .bg-gold-light { background-color: #FFEAA7; }
        .bg-saffron-light { background-color: #FFCC99; }
        .text-saffron { color: #FF9933; }
        .text-maroon { color: #800000; }
        .text-gold-light { color: #FFEAA7; }
        .border-saffron { border-color: #FF9933; }
        .shadow-gold { box-shadow: 0 16px 40px rgba(255, 215, 0, 0.2); }
      `}</style>
    </div>
  );
};

export default KundliServices;