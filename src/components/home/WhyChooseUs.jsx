import React, { useState, useEffect } from 'react';
import { CheckCircle, Shield, Award, Lock, Headphones, Users, Star, Sparkles } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
    
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 5);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: Award,
      title: 'Verified Pandits & Astrologers',
      description: 'Certified experts with 10+ years experience',
      gradient: 'from-saffron to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Authentic Puja Samagri',
      description: 'Premium quality items from trusted vendors',
      gradient: 'from-maroon to-red-700'
    },
    {
      icon: Lock,
      title: 'Secure Payments',
      description: 'SSL encrypted with multiple payment options',
      gradient: 'from-gold to-yellow-600'
    },
    {
      icon: Headphones,
      title: 'Online & Offline Support',
      description: '24/7 customer support via call, chat or video',
      gradient: 'from-green-600 to-emerald-700'
    },
    {
      icon: Users,
      title: '10,000+ Happy Clients',
      description: 'Trusted by thousands for spiritual needs',
      gradient: 'from-purple-600 to-indigo-700'
    }
  ];

  const stats = [
    { icon: Shield, count: '50+', label: 'Expert Pandits' },
    { icon: Star, count: '4.9/5', label: 'Client Rating' },
    { icon: Award, count: '100%', label: 'Authentic' },
    { icon: Users, count: '10K+', label: 'Happy Clients' }
  ];

  return (
    <div className="relative py-10 px-3 overflow-hidden bg-gradient-to-br from-cream via-white to-saffron-light/15">
      <div className="absolute inset-0 opacity-4">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #FF9933 0.8px, transparent 0.8px)`,
          backgroundSize: '24px 24px'
        }} />
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-16 w-56 h-56 bg-saffron/8 rounded-full blur-2xl animate-float-slow" />
        <div className="absolute bottom-16 left-16 w-56 h-56 bg-gold/8 rounded-full blur-2xl animate-float" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-saffron to-maroon text-white px-5 py-1.5 rounded-full text-xs font-semibold mb-5 shadow">
            <Sparkles className="w-3.5 h-3.5" />
            Your Trust is Our Priority
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-saffron via-maroon to-gold bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          
          <p className="text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
            Experience the perfect blend of <span className="font-bold text-maroon">tradition and trust</span>
          </p>
        </div>

        <div className={`grid grid-cols-2 md:grid-cols-4 gap-5 mb-12 transition-all duration-800 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-5 text-center shadow border border-gray-100 hover:border-saffron transition-all duration-300 hover:transform hover:scale-[1.02]"
              >
                <div className="w-12 h-12 mx-auto mb-2.5 rounded-lg bg-gradient-to-br from-saffron to-maroon flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" strokeWidth={1.8} />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-saffron to-maroon bg-clip-text text-transparent mb-1.5">
                  {stat.count}
                </div>
                <div className="text-gray-600 text-xs font-semibold">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeFeature === index;
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${(index + 4) * 80}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`bg-white rounded-2xl p-6 shadow hover:shadow-md transition-all duration-400 h-full border group ${
                  isActive ? 'border-saffron scale-[1.02]' : 'border-gray-100'
                }`}>
                  
                  <div className="relative mb-5">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow transform transition-all duration-400 ${
                      isActive ? 'scale-105 rotate-3' : 'scale-100 rotate-0'
                    }`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.8} />
                    </div>
                    
                    {isActive && (
                      <div className="absolute inset-0 rounded-xl blur-lg opacity-30 animate-pulse" style={{ 
                        background: feature.gradient.includes('saffron') ? '#FF9933' : 
                                   feature.gradient.includes('maroon') ? '#800000' : 
                                   feature.gradient.includes('gold') ? '#FFD700' : 
                                   feature.gradient.includes('green') ? '#059669' : '#9333EA'
                      }} />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-maroon mb-2 font-serif">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {feature.description}
                  </p>

                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron via-maroon to-gold rounded-b-2xl" />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-800 rounded-2xl" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-24px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .from-saffron { --tw-gradient-from: #FF9933; }
        .to-saffron-dark { --tw-gradient-to: #FF6600; }
        .from-maroon { --tw-gradient-from: #800000; }
        .to-maroon-dark { --tw-gradient-to: #5C0000; }
        .from-gold { --tw-gradient-from: #FFD700; }
        .to-gold-dark { --tw-gradient-to: #DAA520; }
        .bg-cream { background-color: #FFF8E7; }
        .bg-saffron-light { background-color: #FFCC99; }
        .text-maroon { color: #800000; }
        .border-saffron { border-color: #FF9933; }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;