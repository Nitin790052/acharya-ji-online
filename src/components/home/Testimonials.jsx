import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles, MapPin, Award, ThumbsUp, CheckCircle, Calendar, Phone, Users, TrendingUp, Shield, Clock, MessageCircle } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      city: 'Mumbai',
      rating: 5,
      feedback: 'The Griha Pravesh puja was performed beautifully. The pandit ji was very knowledgeable and explained everything clearly. Highly recommended for anyone moving into a new home!',
      service: 'Griha Pravesh Puja',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
      designation: 'Homeowner',
      date: '2 weeks ago',
      readTime: '2 min'
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      city: 'Delhi',
      rating: 5,
      feedback: 'Excellent astrology consultation! The predictions were spot on and the remedies suggested really worked for my career growth.',
      service: 'Astrology Consultation',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
      designation: 'Business Professional',
      date: '3 weeks ago',
      readTime: '3 min'
    },
    {
      id: 3,
      name: 'Anita Desai',
      city: 'Bangalore',
      rating: 5,
      feedback: 'Amazing Vastu consultation for our new office. Within 3 months we saw significant improvement in business.',
      service: 'Office Vastu',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
      designation: 'Entrepreneur',
      date: '1 month ago',
      readTime: '4 min'
    },
    {
      id: 4,
      name: 'Vikram Singh',
      city: 'Jaipur',
      rating: 5,
      feedback: 'The kundli matching service was very detailed and accurate. It helped us make the right decision for our son\'s marriage.',
      service: 'Kundli Matching',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face',
      designation: 'Parent',
      date: '2 weeks ago',
      readTime: '5 min'
    },
    {
      id: 5,
      name: 'Meera Patel',
      city: 'Ahmedabad',
      rating: 5,
      feedback: 'Very professional service. The Satyanarayan Katha was performed with complete authenticity. All family members were satisfied.',
      service: 'Satyanarayan Katha',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face',
      designation: 'Homemaker',
      date: '3 days ago',
      readTime: '3 min'
    },
    {
      id: 6,
      name: 'Amit Verma',
      city: 'Pune',
      rating: 5,
      feedback: 'The gemstone recommendation was perfect for my Rashi. Noticed positive changes within weeks. Great consultation with follow-up support!',
      service: 'Gemstone Consultation',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
      designation: 'Corporate Executive',
      date: '1 week ago',
      readTime: '4 min'
    }
  ];

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-3.5 h-3.5 ${index < rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`}
        strokeWidth={1.5}
      />
    ));
  };

  return (
    <div className="relative py-10 px-4 min-h-screen bg-black">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #F97316 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0'
          }}
        />
        
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, #DC2626 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '20px 20px'
          }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
        
        <div className="absolute top-10 left-10 w-32 h-32">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-orange-400/20 animate-float"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="absolute bottom-10 right-10 w-32 h-32">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-red-400/20 animate-float"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${Math.random() * 10 + 10}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold mb-4 shadow-lg">
            <Sparkles className="w-4 h-4" />
            Client Testimonials
            <div className="ml-1 w-1 h-1 bg-white rounded-full animate-pulse" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Real Stories, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">Real Impact</span>
          </h2>
          
          <p className="text-gray-600 text-base max-w-xl mx-auto mb-8 relative">
            <span className="relative z-10">Discover why thousands trust us for authentic spiritual guidance</span>
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-orange-100 rounded-full" />
            <span className="absolute -bottom-2 -left-2 w-3 h-3 bg-red-100 rounded-full" />
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {[
              { icon: Star, value: '4.9/5', label: 'Avg Rating', color: 'from-yellow-500 to-amber-500' },
              { icon: Award, value: '98%', label: 'Satisfaction', color: 'from-green-500 to-emerald-500' },
              { icon: Users, value: '10K+', label: 'Clients', color: 'from-blue-500 to-cyan-500' },
              { icon: MapPin, value: '50+', label: 'Cities', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                <div 
                  className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #F97316 1px, transparent 1px)`,
                    backgroundSize: '20px 20px'
                  }}
                />
                
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-2 shadow-md relative z-10`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 text-center mb-1 relative z-10">{stat.value}</div>
                <div className="text-sm text-gray-600 text-center relative z-10">{stat.label}</div>
                
                <div className="absolute top-2 left-2 w-1 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                <div className="absolute top-2 right-2 w-1 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
                <div className="absolute bottom-2 right-2 w-1 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full" />
              </div>
            ))}
          </div>
        </div>

        <div 
          className="relative mb-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-20 pointer-events-none px-3">
            <button
              ref={navigationPrevRef}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white transition-all duration-300 hover:scale-110 pointer-events-auto border border-gray-200/50 hover:border-transparent group"
            >
              <ChevronLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
            <button
              ref={navigationNextRef}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-xl flex items-center justify-center text-gray-700 hover:bg-gradient-to-r hover:from-orange-600 hover:to-red-600 hover:text-white transition-all duration-300 hover:scale-110 pointer-events-auto border border-gray-200/50 hover:border-transparent group"
            >
              <ChevronRight className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="absolute top-4 right-4 z-20">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg backdrop-blur-sm text-xs font-medium transition-all duration-300 shadow-lg ${
              isHovered 
                ? 'bg-amber-100/80 text-amber-800 border border-amber-200/50' 
                : 'bg-emerald-100/80 text-emerald-800 border border-emerald-200/50'
            }`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${isHovered ? 'bg-amber-500' : 'bg-emerald-500'}`} />
              <span>{isHovered ? 'Paused' : 'Auto-playing'}</span>
              <Clock className="w-3.5 h-3.5" />
            </div>
          </div>

          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={24}
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides={true}
            loop={true}
            speed={500}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: isMobile ? 0 : -40,
              depth: 80,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 16,
                effect: 'slide',
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
                effect: 'coverflow',
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}
            className="pb-1"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                {({ isActive }) => (
                  <div className={`transform transition-all duration-400 ${
                    isActive 
                      ? 'scale-100 opacity-100 translate-y-0' 
                      : 'scale-90 opacity-60 translate-y-3'
                  }`}>
                    <div className="relative rounded-xl overflow-hidden min-h-[400px] flex flex-col group">
                      <div 
                        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, #F97316 1px, transparent 1px)`,
                          backgroundSize: '30px 30px'
                        }}
                      />
                      
                      <div className="relative bg-white/95 backdrop-blur-sm rounded-xl border border-gray-200/50 shadow-xl flex-1 flex flex-col overflow-hidden">
                        <div className="bg-gradient-to-br from-orange-50/80 to-amber-50/80 p-5 backdrop-blur-sm">
                          <div className="flex flex-col items-center text-center mb-4">
                            <div className="relative mb-4">
                              <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-white/80 shadow-lg">
                                <img 
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover"
                                  onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=ff6b35&color=fff&size=120`;
                                  }}
                                />
                              </div>
                              <div className="absolute bottom-0 right-0">
                                <div className="w-7 h-7 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-sm">
                                  <CheckCircle className="w-3.5 h-3.5 text-white" strokeWidth={2} />
                                </div>
                              </div>
                            </div>
                            
                            <div className="w-full">
                              <h4 className="text-base font-bold text-gray-900">{testimonial.name}</h4>
                              <div className="flex items-center justify-center gap-1.5 text-gray-600 text-xs mt-0.5">
                                <MapPin className="w-3.5 h-3.5" />
                                <span>{testimonial.city}</span>
                                <span className="text-gray-400">•</span>
                                <span className="font-semibold text-orange-600">{testimonial.designation}</span>
                              </div>
                            </div>
                            
                            <div className="flex gap-0.5 mt-3">
                              {renderStars(testimonial.rating)}
                            </div>
                          </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                          <div className="relative mb-5 flex-1">
                            <Quote className="absolute -top-2 -left-1 w-6 h-6 text-orange-100/50" />
                            <p className="text-gray-700 leading-relaxed text-sm pl-5 italic min-h-[90px]">
                              "{testimonial.feedback}"
                            </p>
                          </div>
                          
                          <div className="mb-5">
                            <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1.5 rounded-md shadow-md text-xs font-bold">
                              <Award className="w-3.5 h-3.5" strokeWidth={2} />
                              {testimonial.service}
                            </div>
                          </div>
                          
                          <div className="mt-auto pt-4 border-t border-gray-100/50">
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                <span>{testimonial.date}</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{testimonial.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {isActive && (
                          <div className="absolute inset-0 border-2 border-orange-400/30 rounded-xl pointer-events-none" />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-xl mb-4">
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800" />
          
          <div className="relative px-6 py-4 md:px-5 md:py-6">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-3">
                Begin Your Spiritual Journey
              </h3>
              
              <p className="text-gray-300 text-base mb-4 max-w-lg mx-auto">
                Join thousands who have found peace, prosperity, and happiness through our guidance
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                <button className="group relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-5 py-2 rounded-lg font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <Phone className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Book Consultation</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>

                <button className="group relative bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-lg font-bold text-sm border border-white/30 hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 overflow-hidden">
                  <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, #FFFFFF 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Schedule Visit</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </div>

              <div className="mt-3 pt-3 border-t border-white/20">
                <div className="text-white/80 text-xs mb-1">Need immediate assistance?</div>
                <div className="text-xl font-bold text-white mb-1">+91 98765 43210</div>
                <div className="text-white/60 text-xs">24/7 Support Available</div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs text-gray-400">
                {[
                  { icon: Shield, text: '100% Confidential' },
                  { icon: TrendingUp, text: 'Verified Results' },
                  { icon: MessageCircle, text: 'Post-Service Support' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1.5">
                    <item.icon className="w-3.5 h-3.5" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-xs">
            All testimonials are from verified clients. Names and photos are used with permission.
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-1 bg-gradient-to-r from-orange-400 to-red-400 rounded-full"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(10px) translateX(15px);
          }
        }

        .animate-float {
          animation: float infinite linear;
        }

        .swiper-pagination-bullet {
          background: #9CA3AF;
          opacity: 0.5;
          width: 6px;
          height: 6px;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #F97316, #EF4444);
          opacity: 1;
          width: 20px;
          border-radius: 10px;
        }
        
        .swiper-pagination {
          position: relative !important;
          margin-top: 1.5rem;
        }

        .rounded-full img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%;
        }

        @media (max-width: 768px) {
          .swiper-slide {
            opacity: 1 !important;
            transform: scale(1) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;