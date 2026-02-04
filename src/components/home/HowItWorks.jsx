import React, { useState, useEffect } from 'react';
import { Search, UserCheck, Calendar, MapPin, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      icon: Search,
      title: 'Choose Service',
      description: 'Select from Pooja, Astrology, or Spiritual Consultation',
      color: '#FF9933',
      gradient: 'from-saffron to-saffron-dark'
    },
    {
      icon: UserCheck,
      title: 'Select Pandit/Astrologer',
      description: 'Pick verified expert based on ratings and experience',
      color: '#800000',
      gradient: 'from-maroon to-maroon-dark'
    },
    {
      icon: Calendar,
      title: 'Book Date & Time',
      description: 'Choose your convenient date and time slot',
      color: '#FFD700',
      gradient: 'from-gold to-gold-dark'
    },
    {
      icon: MapPin,
      title: 'Online/Offline Service',
      description: 'Get service at home or connect virtually via video call',
      color: '#138808',
      gradient: 'from-green-600 to-green-700'
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
        <div className="absolute top-16 left-8 w-60 h-60 bg-saffron/15 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob" />
        <div className="absolute top-32 right-8 w-60 h-60 bg-maroon/15 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-16 left-1/2 w-60 h-60 bg-gold/15 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
          <div className="inline-flex items-center gap-1.5 bg-gradient-to-r from-saffron to-maroon text-white px-5 py-1.5 rounded-full text-xs font-semibold mb-5 shadow">
            <Sparkles className="w-3.5 h-3.5" />
            Simple & Easy Process
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-saffron via-maroon to-gold bg-clip-text text-transparent">
            How It Works
          </h2>
          
          <p className="text-base text-gray-700 max-w-xl mx-auto leading-relaxed">
            Book your spiritual service in just <span className="font-bold text-maroon">4 simple steps</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            
            return (
              <div
                key={index}
                className={`relative transition-all duration-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                }`}
                style={{ transitionDelay: `${index * 120}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div
                  className={`relative bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-400 h-full border ${
                    isActive ? 'border-saffron scale-[1.02]' : 'border-transparent scale-100'
                  }`}
                >
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-saffron to-maroon rounded-xl flex items-center justify-center text-white font-bold text-base shadow transform rotate-12 hover:rotate-0 transition-transform duration-300">
                    {index + 1}
                  </div>

                  <div className="relative mb-5">
                    <div
                      className={`w-16 h-16 mx-auto rounded-xl bg-gradient-to-br ${step.gradient} flex items-center justify-center shadow transform transition-all duration-400 ${
                        isActive ? 'scale-105 rotate-3' : 'scale-100 rotate-0'
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.8} />
                    </div>
                    
                    {isActive && (
                      <div
                        className="absolute inset-0 rounded-xl blur-xl opacity-30 animate-pulse"
                        style={{ backgroundColor: step.color }}
                      />
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-maroon mb-2 text-center font-serif">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 text-center leading-relaxed text-xs">
                    {step.description}
                  </p>

                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron via-maroon to-gold rounded-b-2xl" />
                  )}
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 z-20 transform -translate-y-1/2">
                    <ArrowRight 
                      className={`w-6 h-6 transition-all duration-400 ${
                        isActive ? 'text-saffron scale-110' : 'text-gray-300'
                      }`}
                      strokeWidth={2}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-gray-200 h-2 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-saffron via-maroon to-gold rounded-full transition-all duration-600 ease-out"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 px-1">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index <= activeStep ? 'bg-saffron scale-110' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className={`text-center transition-all duration-800 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 bg-white rounded-xl p-5 shadow border border-saffron/15">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500">Ready to begin?</p>
                <p className="font-bold text-maroon font-serif text-sm">Start Your Spiritual Journey</p>
              </div>
            </div>
            
            <button className="group bg-gradient-to-r from-saffron to-maroon hover:from-saffron-dark hover:to-maroon-dark text-white px-6 py-2.5 rounded-lg font-bold shadow hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 text-sm">
              Book Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(24px, -40px) scale(1.05);
          }
          66% {
            transform: translate(-16px, 16px) scale(0.95);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
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
      `}</style>
    </div>
  );
};

export default HowItWorks;