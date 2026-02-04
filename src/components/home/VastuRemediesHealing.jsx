import React, { useState, useEffect } from 'react';
import { Home, Building2, Gem, Circle, Leaf, ArrowRight, Sparkles, Shield, Star, CheckCircle } from 'lucide-react';
import Gemstones from "../../assets/vastuRamadies/Gemstones.jpg"
import healing  from "../../assets/vastuRamadies/healing.png"
import HomeVastu from "../../assets/vastuRamadies/Home Vastu.jpg"
import OfficeVastu from "../../assets/vastuRamadies/Office Vastu.jpg"
import Rudraksha from "../../assets/vastuRamadies/Rudraksha.jpg"

const VastuRemediesHealing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, []);

  const services = [
    {
      id: 1,
      icon: Home,
      title: 'Home Vastu',
      description: 'Transform your home into a sanctuary of positive energy and prosperity',
      features: ['Direction Analysis', 'Room Placement', 'Energy Flow', 'Remedies'],
      price: '₹2,999',
      gradient: 'from-saffron to-orange-600',
      bgImage: HomeVastu,
      popular: true,
      benefits: ['Harmony', 'Prosperity', 'Health']
    },
    {
      id: 2,
      icon: Building2,
      title: 'Office Vastu',
      description: 'Enhance productivity and business growth with optimal office energy',
      features: ['Desk Placement', 'Cash Counter', 'Staff Seating', 'Success Zone'],
      price: '₹4,999',
      gradient: 'from-maroon to-red-800',
      bgImage: OfficeVastu,
      popular: true,
      benefits: ['Growth', 'Wealth', 'Success']
    },
    {
      id: 3,
      icon: Gem,
      title: 'Gemstones',
      description: 'Certified gemstones to strengthen planetary positions and bring luck',
      features: ['Personalized Selection', 'Certified Stones', 'Energized', 'Wearing Guide'],
      price: 'From ₹1,500',
      gradient: 'from-pink-600 to-rose-700',
      bgImage: Gemstones,
      popular: false,
      benefits: ['Protection', 'Fortune', 'Power']
    },
    {
      id: 4,
      icon: Circle,
      title: 'Rudraksha',
      description: 'Sacred beads for spiritual growth, peace, and divine blessings',
      features: ['Original Nepali', 'Multiple Mukhi', 'Energized', 'Certificate'],
      price: 'From ₹500',
      gradient: 'from-orange-700 to-red-800',
      bgImage: Rudraksha,
      popular: false,
      benefits: ['Peace', 'Focus', 'Blessing']
    },
    {
      id: 5,
      icon: Leaf,
      title: 'Reiki & Chakra Healing',
      description: 'Balance your energy centers for holistic wellness and inner peace',
      features: ['Chakra Balance', 'Energy Healing', 'Aura Cleansing', 'Stress Relief'],
      price: '₹1,999',
      gradient: 'from-green-600 to-emerald-700',
      bgImage: healing,
      popular: false,
      benefits: ['Wellness', 'Balance', 'Healing']
    }
  ];

  return (
    <div className="relative py-10 px-3 overflow-hidden bg-gradient-to-br from-cream via-saffron-light/15 to-gold-light/20">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #FF9933 0.8px, transparent 0.8px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-60 h-60 bg-saffron/15 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float-slow" />
        <div className="absolute bottom-16 right-8 w-64 h-64 bg-maroon/15 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float-slower" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gold/15 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-float" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-saffron to-maroon text-white px-5 py-1.5 rounded-full text-xs font-semibold mb-5 shadow">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Transform Your Life
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-saffron via-maroon to-gold bg-clip-text text-transparent">
            Vastu, Remedies & Healing
          </h2>
          
          <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Ancient wisdom meets modern solutions for <span className="font-bold text-maroon">holistic well-being</span> and prosperity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <div
                key={service.id}
                className={`relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                } ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                style={{ transitionDelay: `${index * 80}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-400 h-full border border-gray-100 hover:border-saffron group">
                  
                  {service.popular && (
                    <div className="absolute top-3 right-3 z-20">
                      <div className="bg-gradient-to-r from-saffron to-maroon text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow flex items-center gap-1 animate-pulse">
                        <Star className="w-2.5 h-2.5 fill-white" />
                        Trending
                      </div>
                    </div>
                  )}

                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-600 group-hover:scale-105"
                      style={{ backgroundImage: `url('${service.bgImage}')` }}
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-30 transition-opacity duration-400`} />
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/40 shadow-xl transform transition-all duration-400 ${
                        isHovered ? 'scale-105 rotate-6' : 'scale-100 rotate-0'
                      }`}>
                        <Icon className="w-10 h-10 text-white" strokeWidth={1.8} />
                      </div>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
                      {service.benefits.map((benefit, idx) => (
                        <div
                          key={idx}
                          className="bg-white/90 backdrop-blur-sm text-gray-800 px-2 py-0.5 rounded-full text-[10px] font-semibold shadow"
                        >
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2.5">
                      <h3 className="text-xl font-bold text-maroon font-serif flex-1">
                        {service.title}
                      </h3>
                      <div className={`bg-gradient-to-r ${service.gradient} text-white px-2.5 py-1 rounded-lg font-bold text-xs shadow whitespace-nowrap ml-2`}>
                        {service.price}
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3 text-xs leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-2 gap-1.5 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`w-full py-2.5 rounded-lg font-bold text-white bg-gradient-to-r ${service.gradient} hover:shadow transition-all duration-300 flex items-center justify-center gap-1.5 group-hover:gap-2 text-sm`}>
                      Consult Expert
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 pointer-events-none" />
                  
                  {isHovered && (
                    <div className={`absolute inset-0 bg-gradient-to-t from-saffron/8 to-transparent pointer-events-none rounded-2xl`} />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className={`bg-gradient-to-r from-saffron via-maroon to-gold rounded-2xl p-6 md:p-10 text-center shadow-xl transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              <Shield className="w-3.5 h-3.5" />
              Certified & Authentic
            </div>

            <h3 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
              Why Choose Our Services?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
              {[
                { icon: Shield, title: '100% Authentic', desc: 'Certified products & genuine guidance' },
                { icon: Star, title: 'Expert Consultation', desc: '20+ years experienced consultants' },
                { icon: CheckCircle, title: 'Proven Results', desc: '10,000+ satisfied clients' }
              ].map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <ItemIcon className="w-8 h-8 text-white mx-auto mb-2.5" />
                    <h4 className="text-white font-bold text-base mb-1.5">{item.title}</h4>
                    <p className="text-white/80 text-xs">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
              <button className="group bg-white text-maroon px-8 py-3 rounded-lg font-bold text-base shadow-lg hover:shadow-gold transition-all duration-300 flex items-center gap-2.5 hover:scale-[1.02]">
                <Sparkles className="w-5 h-5" />
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <button className="group border border-white text-white px-6 py-3 rounded-lg font-bold text-base backdrop-blur-sm hover:bg-white hover:text-maroon transition-all duration-300 flex items-center gap-1.5">
                <Shield className="w-4 h-4" />
                View Certificates
              </button>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-5 mt-8 transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { number: '10K+', label: 'Happy Clients', icon: Star },
            { number: '100%', label: 'Satisfaction Rate', icon: CheckCircle },
            { number: '20+', label: 'Years Experience', icon: Shield },
            { number: '5000+', label: 'Remedies Provided', icon: Sparkles }
          ].map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 text-center shadow border border-gray-100 hover:border-saffron transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <StatIcon className="w-7 h-7 mx-auto mb-2.5 text-saffron" />
                <div className="text-3xl font-bold bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent mb-1.5">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-xs font-semibold">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-16px) translateX(8px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-24px); }
        }

        @keyframes float-slower {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
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
        .bg-gold-light { background-color: #FFEAA7; }
        .text-saffron { color: #FF9933; }
        .text-maroon { color: #800000; }
        .border-saffron { border-color: #FF9933; }
        .shadow-gold { box-shadow: 0 16px 40px rgba(255, 215, 0, 0.3); }
        .from-saffron\/10 { --tw-gradient-from: rgba(255, 153, 51, 0.1); }
        .bg-saffron\/20 { background-color: rgba(255, 153, 51, 0.2); }
        .bg-maroon\/20 { background-color: rgba(128, 0, 0, 0.2); }
        .bg-gold\/20 { background-color: rgba(255, 215, 0, 0.2); }
      `}</style>
    </div>
  );
};

export default VastuRemediesHealing;