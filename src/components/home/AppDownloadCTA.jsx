import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Star, Zap, Shield, Clock, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

const AppDownloadCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 150);
  }, []);

  const features = [
    { icon: Zap, text: 'Instant Booking' },
    { icon: Clock, text: '24/7 Support' },
    { icon: Shield, text: 'Secure Payments' },
    { icon: Star, text: 'Expert Pandits' }
  ];

  const stats = [
    { number: '50K+', label: 'Downloads' },
    { number: '4.8★', label: 'App Rating' },
    { number: '10K+', label: 'Reviews' }
  ];

  return (
    <div className="relative py-14 px-3 overflow-hidden bg-gradient-to-br from-saffron via-maroon to-maroon-dark">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='48' height='48' viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.4'%3E%3Cpath d='M28.8 27.2v-3.2h-1.6v3.2h-3.2v1.6h3.2v3.2h1.6v-3.2h3.2v-1.6h-3.2zm0-24V0h-1.6v3.2h-3.2v1.6h3.2v3.2h1.6V4.8h3.2V3.2h-3.2zM4.8 27.2v-3.2H3.2v3.2H0v1.6h3.2v3.2h1.6v-3.2h3.2v-1.6H4.8zM4.8 3.2V0H3.2v3.2H0v1.6h3.2v3.2h1.6V4.8h3.2V3.2H4.8z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-8 w-80 h-80 bg-gold/15 rounded-full blur-2xl animate-pulse-slow" />
        <div className="absolute bottom-16 right-8 w-64 h-64 bg-saffron/15 rounded-full blur-2xl animate-pulse-slower" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-semibold mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              Download Our App Now
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5 text-white">
              Book Puja <br />
              <span className="bg-gradient-to-r from-gold via-saffron-light to-gold bg-clip-text text-transparent">
                Anytime, Anywhere
              </span>
            </h2>

            {/* Description */}
            <p className="text-base text-gold-light mb-6 leading-relaxed">
              Experience divine services at your fingertips. Book pandits, get astrology consultations, and order puja samagri with just a few taps.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-lg p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-gold to-saffron flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-white font-semibold text-xs">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              {/* Google Play */}
              <a
                href="#"
                className="group flex items-center gap-2.5 bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">GET IT ON</div>
                  <div className="text-base font-bold leading-tight">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a
                href="#"
                className="group flex items-center gap-2.5 bg-black hover:bg-gray-900 text-white px-5 py-3 rounded-lg transition-all duration-300 hover:scale-[1.02] shadow"
              >
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-base font-bold leading-tight">App Store</div>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-5">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-gold mb-1">{stat.number}</div>
                  <div className="text-xs text-gold-light">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className={`relative transition-all duration-800 delay-250 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="relative">
              {/* Glowing Circle Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-gold/25 to-saffron/25 blur-2xl animate-pulse" />
              </div>

              {/* Phone Mockup */}
              <div className="relative mx-auto max-w-xs">
                {/* Phone Frame */}
                <div className="relative bg-gray-900 rounded-[2.5rem] p-2.5 shadow-xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                    {/* App Screenshot - You can replace with actual screenshot */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cream via-white to-saffron-light/20">
                      {/* App Header */}
                      <div className="bg-gradient-to-r from-saffron to-maroon p-4 pb-10">
                        <div className="flex items-center justify-between text-white mb-5">
                          <div className="flex items-center gap-1.5">
                            <Sparkles className="w-5 h-5" />
                            <span className="font-bold text-lg">Acharya Ji</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white/20 rounded-full px-2.5 py-0.5">
                            <Star className="w-3.5 h-3.5 fill-gold text-gold" />
                            <span className="text-xs font-bold">4.8</span>
                          </div>
                        </div>
                        <h3 className="text-white text-xl font-bold mb-1.5">Welcome Back!</h3>
                        <p className="text-white/80 text-xs">Book your spiritual service today</p>
                      </div>

                      {/* Service Cards */}
                      <div className="px-3 -mt-6 space-y-2.5">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl p-3 shadow flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-saffron to-orange-600 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-maroon text-xs">Book Puja</h4>
                            <p className="text-gray-600 text-[10px]">Online & Offline</p>
                          </div>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl p-3 shadow flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-maroon to-red-700 flex items-center justify-center">
                            <Star className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-maroon text-xs">Talk to Astrologer</h4>
                            <p className="text-gray-600 text-[10px]">24/7 Available</p>
                          </div>
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl p-3 shadow flex items-center gap-3 opacity-60">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-yellow-600 flex items-center justify-center">
                            <Download className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-maroon text-xs">Free Kundli</h4>
                            <p className="text-gray-600 text-[10px]">Generate Now</p>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="absolute bottom-0 inset-x-0 bg-white border-t border-gray-100 py-1.5 px-5">
                        <div className="flex justify-around">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`w-6 h-6 rounded-md ${i === 1 ? 'bg-saffron' : 'bg-gray-200'}`} />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full animate-shine" />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow animate-float">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 w-14 h-14 bg-gradient-to-br from-saffron to-maroon rounded-full flex items-center justify-center shadow animate-float" style={{ animationDelay: '0.5s' }}>
                  <Star className="w-6 h-6 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className={`mt-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center transition-all duration-800 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-5 text-white">
            <Smartphone className="w-10 h-10" />
            <div className="flex-1 max-w-xl">
              <h3 className="text-xl font-bold mb-1.5">
                Experience Spiritual Services On-The-Go
              </h3>
              <p className="text-gold-light text-sm">
                Download now and get <span className="font-bold text-gold">₹100 OFF</span> on your first booking
              </p>
            </div>
            <button className="bg-gold hover:bg-gold-dark text-maroon px-6 py-3 rounded-lg font-bold text-base shadow hover:shadow-md transition-all duration-300 flex items-center gap-1.5 hover:scale-[1.02]">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.03); }
        }

        @keyframes pulse-slower {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }

        .from-saffron { --tw-gradient-from: #FF9933; }
        .bg-saffron { background-color: #FF9933; }
        .bg-saffron-light { background-color: #FFCC99; }
        .from-maroon { --tw-gradient-from: #800000; }
        .to-maroon-dark { --tw-gradient-to: #5C0000; }
        .bg-maroon-dark { background-color: #5C0000; }
        .from-gold { --tw-gradient-from: #FFD700; }
        .to-gold-dark { --tw-gradient-to: #DAA520; }
        .bg-gold { background-color: #FFD700; }
        .bg-gold-dark { background-color: #DAA520; }
        .text-gold { color: #FFD700; }
        .text-gold-light { color: #FFEAA7; }
        .bg-cream { background-color: #FFF8E7; }
        .text-maroon { color: #800000; }
      `}</style>
    </div>
  );
};

export default AppDownloadCTA;