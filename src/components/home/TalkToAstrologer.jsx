import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, Award, TrendingUp, Heart, Briefcase, ChevronLeft, ChevronRight, Sparkles, Video } from 'lucide-react';
import image1 from "../../assets/astrologors/AcharyaVikramJoshi.jpg"
import image2 from "../../assets/astrologors/DrPriyaMishra.jpg"
import image3 from "../../assets/astrologors/PanditRajeshSharma.png"
import image4 from "../../assets/astrologors/PanditSureshPandey.jpg"

const TalkToAstrologer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % astrologers.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const astrologers = [
    {
      id: 1,
      name: 'Pandit Rajesh Sharma',
      image: image1,
      experience: '15+ Years',
      rating: 4.9,
      reviews: 2847,
      specialization: ['Vedic Astrology', 'Kundli Analysis', 'Gemstone Consultation'],
      languages: ['Hindi', 'English', 'Sanskrit'],
      online: true,
      consultations: '5000+',
      expertise: ['Career', 'Marriage', 'Business']
    },
    {
      id: 2,
      name: 'Dr. Priya Mishra',
      image: image2,
      experience: '12+ Years',
      rating: 4.8,
      reviews: 1923,
      specialization: ['Tarot Reading', 'Numerology', 'Palmistry'],
      languages: ['Hindi', 'English', 'Marathi'],
      online: true,
      consultations: '3500+',
      expertise: ['Career', 'Marriage', 'Health']
    },
    {
      id: 3,
      name: 'Acharya Vikram Joshi',
      image: image3,
      experience: '20+ Years',
      rating: 5.0,
      reviews: 3421,
      specialization: ['KP Astrology', 'Prashna Kundali', 'Vastu'],
      languages: ['Hindi', 'English', 'Gujarati'],
      online: true,
      consultations: '7500+',
      expertise: ['Business', 'Career', 'Finance']
    },
    {
      id: 4,
      name: 'Pandit Suresh Pandey',
      image: image4,
      experience: '18+ Years',
      rating: 4.9,
      reviews: 2156,
      specialization: ['Lal Kitab', 'Remedies', 'Match Making'],
      languages: ['Hindi', 'English', 'Punjabi'],
      online: false,
      consultations: '4200+',
      expertise: ['Marriage', 'Love', 'Family']
    }
  ];

  const services = [
    {
      icon: Briefcase,
      title: 'Career Guidance',
      description: 'Job, promotion, career change predictions',
      color: '#FF9933',
      gradient: 'from-saffron to-orange-600'
    },
    {
      icon: Heart,
      title: 'Marriage & Love',
      description: 'Match making, relationship compatibility',
      color: '#800000',
      gradient: 'from-maroon to-red-700'
    },
    {
      icon: TrendingUp,
      title: 'Business & Finance',
      description: 'Business growth, investment guidance',
      color: '#FFD700',
      gradient: 'from-gold to-yellow-600'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % astrologers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + astrologers.length) % astrologers.length);
  };

  return (
    <div className="relative py-10 px-3 overflow-hidden bg-gradient-to-br from-maroon via-maroon-dark to-saffron-dark">
      <div className="absolute inset-0 opacity-15">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gold rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-8 w-80 h-80 bg-saffron/15 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-16 left-8 w-64 h-64 bg-gold/15 rounded-full blur-2xl animate-pulse-slower" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-gold to-saffron text-maroon px-5 py-1.5 rounded-full text-xs font-semibold mb-5 shadow animate-glow">
            <Sparkles className="w-3.5 h-3.5 animate-spin-slow" />
            Live Consultation Available
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-white">
            Talk to <span className="bg-gradient-to-r from-gold via-saffron to-gold bg-clip-text text-transparent">Expert Astrologers</span>
          </h2>
          
          <p className="text-base text-gold-light max-w-xl mx-auto leading-relaxed">
            Get personalized guidance from <span className="font-bold text-gold">verified astrologers</span> available 24/7
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 transition-all duration-800 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="relative group"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:border-gold/50 transition-all duration-300 hover:transform hover:scale-[1.02]">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-3 group-hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-1.5 font-serif">
                    {service.title}
                  </h3>
                  
                  <p className="text-gold-light text-xs">
                    {service.description}
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 rounded-xl" />
                </div>
              </div>
            );
          })}
        </div>

        <div className={`transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-bold text-center text-white mb-8 font-serif">
            Meet Our <span className="text-gold">Expert Astrologers</span>
          </h3>

          <div className="hidden lg:grid lg:grid-cols-4 gap-5 mb-10">
            {astrologers.map((astrologer, index) => (
              <div
                key={astrologer.id}
                className="relative group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-400 hover:shadow-gold/40 hover:transform hover:scale-[1.02]">
                  <div className="relative h-40  overflow-hidden">
                    <img
                      src={astrologer.image}
                      alt={astrologer.name}
                      className="w-full h-full bg-cover transition-transform duration-400 group-hover:scale-105"
                    />
                    
                    {astrologer.online && (
                      <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                        Online
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-4">
                    <h4 className="text-lg font-bold text-maroon mb-1.5 font-serif">
                      {astrologer.name}
                    </h4>

                    <div className="flex items-center gap-1.5 mb-2.5">
                      <div className="flex items-center gap-1 bg-gold/20 px-1.5 py-0.5 rounded-md">
                        <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                        <span className="text-xs font-bold text-maroon">{astrologer.rating}</span>
                      </div>
                      <span className="text-xs text-gray-600">({astrologer.reviews})</span>
                    </div>

                    <div className="flex items-center gap-2.5 mb-2.5 text-xs text-gray-600">
                      <div className="flex items-center gap-1">
                        <Award className="w-3.5 h-3.5 text-saffron" />
                        <span>{astrologer.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                        <span>{astrologer.consultations}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {astrologer.expertise.map((exp, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] bg-gradient-to-r from-saffron/10 to-maroon/10 text-maroon px-1.5 py-0.5 rounded-full border border-saffron/30"
                        >
                          {exp}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      <button className="group/btn flex items-center justify-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-2 rounded-lg font-bold text-xs shadow transition-all duration-300">
                        <Phone className="w-3.5 h-3.5 group-hover/btn:animate-bounce" />
                        Call
                      </button>
                      <button className="group/btn flex items-center justify-center gap-1.5 bg-gradient-to-r from-saffron to-maroon hover:from-saffron-dark hover:to-maroon-dark text-white py-2 rounded-lg font-bold text-xs shadow transition-all duration-300">
                        <MessageCircle className="w-3.5 h-3.5 group-hover/btn:animate-bounce" />
                        Chat
                      </button>
                    </div>
                  </div>

                  {hoveredCard === index && (
                    <div className="absolute inset-0 bg-gradient-to-t from-gold/15 to-transparent pointer-events-none rounded-2xl" />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:hidden relative">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-400 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {astrologers.map((astrologer) => (
                  <div key={astrologer.id} className="w-full flex-shrink-0 px-3">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                      <div className="relative h-56 bg-cover">
                        <img
                          src={astrologer.image}
                          alt={astrologer.name}
                          className="w-full h-full "
                        />
                        
                        {astrologer.online && (
                          <div className="absolute top-3 right-3 flex items-center gap-1 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                            Online
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>

                      <div className="p-4">
                        <h4 className="text-xl font-bold text-maroon mb-1.5 font-serif">
                          {astrologer.name}
                        </h4>

                        <div className="flex items-center gap-1.5 mb-2.5">
                          <div className="flex items-center gap-1 bg-gold/20 px-1.5 py-0.5 rounded-md">
                            <Star className="w-3.5 h-3.5 text-gold fill-gold" />
                            <span className="text-xs font-bold text-maroon">{astrologer.rating}</span>
                          </div>
                          <span className="text-xs text-gray-600">({astrologer.reviews})</span>
                        </div>

                        <div className="flex items-center gap-2.5 mb-2.5 text-xs text-gray-600">
                          <div className="flex items-center gap-1">
                            <Award className="w-3.5 h-3.5 text-saffron" />
                            <span>{astrologer.experience}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                            <span>{astrologer.consultations}</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-3">
                          {astrologer.expertise.map((exp, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] bg-gradient-to-r from-saffron/10 to-maroon/10 text-maroon px-1.5 py-0.5 rounded-full border border-saffron/30"
                            >
                              {exp}
                            </span>
                          ))}
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          <button className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-green-500 to-green-600 text-white py-2.5 rounded-lg font-bold text-xs shadow">
                            <Phone className="w-4 h-4" />
                            Call Now
                          </button>
                          <button className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-saffron to-maroon text-white py-2.5 rounded-lg font-bold text-xs shadow">
                            <MessageCircle className="w-4 h-4" />
                            Chat Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2.5 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-maroon hover:bg-gold hover:text-white transition-all z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2.5 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center text-maroon hover:bg-gold hover:text-white transition-all z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <div className="flex justify-center gap-1.5 mt-4">
              {astrologers.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentSlide ? 'w-6 bg-gold' : 'w-1.5 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={`text-center mt-8 transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center animate-pulse">
                <Video className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-gold text-xs">Available 24/7</p>
                <p className="font-bold text-white text-base">First Consultation FREE</p>
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-gold to-saffron hover:from-gold-dark hover:to-saffron-dark text-maroon px-6 py-2.5 rounded-lg font-bold shadow hover:shadow-xl transition-all duration-300 flex items-center gap-1.5 text-sm">
              View All Astrologers
              <Star className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.05); }
        }

        @keyframes pulse-slower {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(1.08); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 16px rgba(255, 215, 0, 0.4); }
          50% { box-shadow: 0 0 32px rgba(255, 215, 0, 0.6); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-twinkle {
          animation: twinkle ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
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
        .bg-maroon { background-color: #800000; }
        .bg-maroon-dark { background-color: #5C0000; }
        .text-gold { color: #FFD700; }
        .text-gold-light { color: #FFEAA7; }
        .text-maroon { color: #800000; }
        .border-gold { border-color: #FFD700; }
        .shadow-gold { box-shadow: 0 8px 32px rgba(255, 215, 0, 0.25); }
      `}</style>
    </div>
  );
};

export default TalkToAstrologer;