import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles, Shield, Star, Book, Heart, Search, Plus, Minus } from "lucide-react";

const faqs = [
  {
    category: "Puja Services",
    icon: Heart,
    color: "rose",
    questions: [
      {
        q: "How do I book a puja service?",
        a: "You can book a puja service through our website by selecting the type of puja, choosing a date and time, and making the payment. Our team will confirm the booking and assign an experienced priest."
      },
      {
        q: "Are your priests verified and experienced?",
        a: "Absolutely. All our priests undergo a thorough verification process including background checks and Vedic knowledge assessment."
      },
      {
        q: "What areas do you provide home visit services?",
        a: "We provide home visit puja services across India including Delhi NCR, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, and all major cities."
      },
      {
        q: "How much time does a typical puja take?",
        a: "The duration varies by puja type. Simple pujas take 30-45 minutes, while elaborate ceremonies can take 2-3 hours. We provide estimated timings during booking."
      },
      {
        q: "Do you provide samagri or do we need to arrange it?",
        a: "We provide all necessary puja samagri as part of our service packages. You don't need to arrange anything unless you prefer specific items."
      }
    ]
  },
  {
    category: "Online Puja & Process",
    icon: Sparkles,
    color: "amber",
    questions: [
      {
        q: "How does the online puja work?",
        a: "Our online puja service is conducted via secure video call where our priests perform rituals at our sacred facility. You can witness the entire ceremony live and participate through guided mantras."
      },
      {
        q: "What is included in the puja package?",
        a: "Each puja package includes: experienced priest services, all required samagri, prasad delivery, digital recording, and personalized mantras."
      },
      {
        q: "Can I customize the puja rituals?",
        a: "Yes, we offer personalized puja customization. You can add specific rituals, mantras, or duration extensions based on your requirements and family traditions."
      },
      {
        q: "Will I receive prasad for online pujas?",
        a: "Yes, we courier the blessed prasad to your address within 3-5 business days after the puja completion, packed hygienically and with care."
      }
    ]
  },
  {
    category: "Payment & Refunds",
    icon: Shield,
    color: "emerald",
    questions: [
      {
        q: "What payment methods do you accept?",
        a: "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets. All transactions are 100% secure and encrypted."
      },
      {
        q: "Is there a cancellation policy?",
        a: "Yes, you can cancel up to 24 hours before the scheduled puja for a full refund. Cancellations within 24 hours are subject to a 25% processing fee."
      },
      {
        q: "Do you offer any discounts or packages?",
        a: "We regularly offer seasonal discounts and have special packages for multiple puja bookings. Subscribe to our newsletter for exclusive offers and early bird discounts."
      }
    ]
  },
  {
    category: "Consultation & Support",
    icon: Book,
    color: "blue",
    questions: [
      {
        q: "Can I consult with a priest before booking?",
        a: "Absolutely! We offer free 15-minute consultations with our experienced priests to help you choose the right puja based on your needs and auspicious timings."
      },
      {
        q: "What if I need help during the puja?",
        a: "Our support team is available throughout the puja ceremony. You can contact us via phone, WhatsApp, or the live chat feature for instant assistance."
      },
      {
        q: "Do you provide astrology services?",
        a: "Yes, we have certified Vedic astrologers available for horoscope readings, muhurat selection, and personalized remedial solutions. Book a consultation through our website."
      }
    ]
  }
];

const colorClasses = {
  rose: {
    bg: "from-rose-500 to-pink-600",
    light: "bg-rose-50",
    border: "border-rose-200",
    text: "text-rose-600",
    hover: "hover:bg-rose-50"
  },
  amber: {
    bg: "from-amber-500 to-orange-600",
    light: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    hover: "hover:bg-amber-50"
  },
  emerald: {
    bg: "from-emerald-500 to-green-600",
    light: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
    hover: "hover:bg-emerald-50"
  },
  blue: {
    bg: "from-blue-500 to-indigo-600",
    light: "bg-blue-50",
    border: "border-blue-200",
    text: "text-blue-600",
    hover: "hover:bg-blue-50"
  }
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCat, setActiveCat] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const activeColor = colorClasses[faqs[activeCat].color];

  return (
    <section className="py-12 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Modern Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-50" />
              <div className="relative px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white font-bold flex items-center gap-2 text-sm">
                <Book className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight">
            <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
              Get Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Answers Here
            </span>
          </h2>

          <p className="text-base text-slate-600 max-w-2xl mx-auto mb-6">
            Quick solutions to common questions about our divine puja services
          </p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-3 rounded-2xl border-2 border-slate-200 focus:border-blue-500 focus:outline-none shadow-lg bg-white/80 backdrop-blur-sm text-slate-800 placeholder:text-slate-400"
              />
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-4 mt-6 flex-wrap"
          >
            {[
              { icon: Star, label: "5000+ Pujas Conducted", color: "text-amber-500", bg: "bg-amber-50" },
              { icon: Shield, label: "100% Verified Priests", color: "text-emerald-500", bg: "bg-emerald-50" },
              { icon: Heart, label: "10k+ Happy Devotees", color: "text-rose-500", bg: "bg-rose-50" }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`flex items-center gap-2 px-4 py-2 ${stat.bg} rounded-xl shadow-md border border-slate-200/50`}
              >
                <stat.icon className={`w-4 h-4 ${stat.color}`} />
                <span className="font-semibold text-slate-700 text-sm">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Category Tabs - Vertical on Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="sticky top-24 space-y-2">
              <h3 className="font-bold text-slate-900 text-base mb-3 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
                Categories
              </h3>
              
              {faqs.map((cat, idx) => {
                const Icon = cat.icon;
                const colors = colorClasses[cat.color];
                const isActive = activeCat === idx;
                
                return (
                  <motion.button
                    key={idx}
                    onClick={() => {
                      setActiveCat(idx);
                      setOpenIndex(null);
                    }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                      isActive 
                        ? 'shadow-xl' 
                        : 'shadow-md hover:shadow-lg'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} opacity-${isActive ? '100' : '0'} group-hover:opacity-100 transition-opacity`} />
                    
                    <div className={`relative p-3 ${isActive ? 'bg-transparent' : 'bg-white'} transition-colors`}>
                      <div className="flex items-center gap-2">
                        <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : colors.light} transition-colors`}>
                          <Icon className={`w-4 h-4 ${isActive ? 'text-white' : colors.text}`} />
                        </div>
                        <div className="text-left flex-1">
                          <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-800'}`}>
                            {cat.category}
                          </div>
                          <div className={`text-xs ${isActive ? 'text-white/80' : 'text-slate-500'}`}>
                            {cat.questions.length} questions
                          </div>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-white rounded-full shadow-lg"
                          />
                        )}
                      </div>
                    </div>
                  </motion.button>
                );
              })}

              {/* Quick Contact Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 shadow-lg"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="font-bold text-orange-900 text-sm">We're Online!</span>
                </div>
                <p className="text-xs text-orange-800 mb-3">
                  Need instant help? Chat with our support team now
                </p>
                <a
                  href="tel:+919876543210"
                  className="block text-center px-3 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-bold text-xs hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Call Now
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* FAQ Accordion - Main Content */}
          <div className="lg:col-span-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCat}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-3"
              >
                {faqs[activeCat].questions.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group"
                    >
                      <div
                        className={`relative overflow-hidden rounded-2xl bg-white border-2 transition-all duration-300 ${
                          isOpen 
                            ? `${activeColor.border} shadow-2xl shadow-${faqs[activeCat].color}-500/20` 
                            : 'border-slate-200 hover:border-slate-300 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {/* Question */}
                        <button
                          onClick={() => toggleFAQ(idx)}
                          className="w-full p-4 text-left flex items-start gap-3"
                        >
                          <motion.div
                            animate={{ rotate: isOpen ? 90 : 0 }}
                            className={`flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center font-bold transition-all ${
                              isOpen 
                                ? `bg-gradient-to-br ${activeColor.bg} text-white shadow-lg` 
                                : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'
                            }`}
                          >
                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                          </motion.div>
                          
                          <div className="flex-1 pt-0.5">
                            <h3 className={`font-bold text-base mb-1 transition-colors ${
                              isOpen ? activeColor.text : 'text-slate-800 group-hover:text-slate-900'
                            }`}>
                              {faq.q}
                            </h3>
                            <p className="text-xs text-slate-500">
                              Click to {isOpen ? 'collapse' : 'expand'}
                            </p>
                          </div>
                        </button>

                        {/* Answer */}
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className={`px-4 pb-4 pt-2 border-t-2 ${activeColor.border}`}>
                                <div className="flex gap-3">
                                  <div className="flex-shrink-0 w-8 h-8 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold shadow-lg text-sm">
                                    A
                                  </div>
                                  <div className="flex-1 pt-0.5">
                                    <p className="text-slate-700 leading-relaxed mb-3 text-sm">
                                      {faq.a}
                                    </p>
                                    
                                    {/* Badges */}
                                    <div className="flex flex-wrap gap-2">
                                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 rounded-lg border border-emerald-200">
                                        <Shield className="w-4 h-4 text-emerald-600" />
                                        <span className="text-xs font-semibold text-emerald-700">Verified</span>
                                      </div>
                                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 rounded-lg border border-amber-200">
                                        <Sparkles className="w-4 h-4 text-amber-600" />
                                        <span className="text-xs font-semibold text-amber-700">Authentic</span>
                                      </div>
                                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-lg border border-blue-200">
                                        <Star className="w-4 h-4 text-blue-600" />
                                        <span className="text-xs font-semibold text-blue-700">Trusted</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </AnimatePresence>

            {/* Bottom CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 shadow-2xl"
            >
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              </div>
              
              <div className="relative flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                  >
                    <Sparkles className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="text-white">
                    <h3 className="text-xl font-black mb-1">
                      Still Have Questions?
                    </h3>
                    <p className="text-white/90 text-xs mb-2">
                      Our expert team is ready to help you 24/7
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        <span className="font-semibold">Online Now</span>
                      </div>
                      <div className="text-white/70">•</div>
                      <span className="text-white/70">Avg. response: <strong className="text-white">2 min</strong></span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-2 flex-shrink-0">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:+919876543210"
                    className="px-6 py-2.5 bg-white text-purple-600 font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all text-sm"
                  >
                    Call Now
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="px-6 py-2.5 bg-white/10 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/30 hover:bg-white/20 transition-all text-sm"
                  >
                    Contact Us
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}