import React, { useState } from 'react';
import {
  Clock, CheckCircle, MessageCircle, Users, Award, Star, Home, Video,
  Sparkles, Sparkle, Shield, Calendar, Phone, MapPin, ChevronRight, BookOpen, X
} from 'lucide-react';
import { Link } from "react-router-dom";
import { Layout } from '@/components/layout/Layout';
import { usePageBanner } from "@/hooks/usePageBanner";

import image1 from "../../assets/bookPooja/image1.webp"
import image2 from "../../assets/bookPooja/image2.webp"
import image3 from "../../assets/bookPooja/image3.webp"
import image4 from "../../assets/bookPooja/image4.webp"
import image5 from "../../assets/bookPooja/image5.webp"
import image6 from "../../assets/bookPooja/image6.webp"
import image7 from "../../assets/bookPooja/image7.webp"

const pujaServices = [
  {
    id: 'griha-pravesh',
    name: 'Griha Pravesh Puja',
    description: 'नए घर में प्रवेश से पहले शांति और समृद्धि के लिए',
    duration: '2-3 hours',
    modes: ['Online', 'Home Visit'],
    whenToPerform: 'नए घर में प्रवेश करने से पहले',
    benefits: 'घर में सकारात्मक ऊर्जा, शांति और समृद्धि',
    whoPerforms: 'नया घर लेने वाले परिवार',
    price: 'Starting from ₹5,100',
    image: image1,
  },
  {
    id: 'satyanarayan-katha',
    name: 'Satyanarayan Katha',
    description: 'सुख, समृद्धि और मनोकामना पूर्ति के लिए',
    duration: '1.5-2 hours',
    modes: ['Online', 'Home Visit'],
    whenToPerform: 'पूर्णिमा या शुभ दिन पर',
    benefits: 'मनोकामना पूर्ति, परिवार में सुख-शांति',
    whoPerforms: 'सभी परिवार जो भगवान की कृपा चाहते हैं',
    price: 'Starting from ₹2,100',
    image: image2,
  },
  {
    id: 'rudrabhishek',
    name: 'Rudrabhishek',
    description: 'भगवान शिव की विशेष पूजा और अभिषेक',
    duration: '2 hours',
    modes: ['Online', 'Home Visit'],
    whenToPerform: 'सोमवार, महाशिवरात्रि या श्रावण मास',
    benefits: 'रोग निवारण, मानसिक शांति, शत्रु नाश',
    whoPerforms: 'भगवान शिव के भक्त, रोग निवारण चाहने वाले',
    price: 'Starting from ₹3,100',
    image: image3,
  },
  {
    id: 'navgraha-shanti',
    name: 'Navgraha Shanti Puja',
    description: 'नौ ग्रहों की शांति और दोष निवारण',
    duration: '3-4 hours',
    modes: ['Online', 'Home Visit'],
    whenToPerform: 'जन्मदिन, ग्रह दोष होने पर',
    benefits: 'ग्रह दोष निवारण, जीवन में संतुलन',
    whoPerforms: 'कुंडली में ग्रह दोष वाले लोग',
    price: 'Starting from ₹5,100',
    image: image4,
  },
  {
    id: 'pitru-dosh',
    name: 'Pitru Dosh Puja',
    description: 'पितरों की शांति और पितृ दोष निवारण',
    duration: '2-3 hours',
    benefits: 'पितृ दोष दूर होना, पारिवारिक समस्याओं का समाधान',
    whenToPerform: 'अमावस्या, श्राद्ध पक्ष',
    whoPerforms: 'कुंडली में पितृ दोष वाले लोग',
    modes: ['Online', 'Home Visit'],
    price: 'Starting from ₹4,100',
    image: image5,
  },
  {
    id: 'vivah-puja',
    name: 'Marriage / Vivah Puja',
    description: 'विवाह के शुभ मुहूर्त पर संपन्न होने वाली पूजा',
    duration: '3-4 hours',
    modes: ['Home Visit'],
    whenToPerform: 'विवाह के दिन',
    benefits: 'सुखी वैवाहिक जीवन, आशीर्वाद',
    whoPerforms: 'विवाह करने वाले परिवार',
    price: 'Starting from ₹11,000',
    image: image6,
  },
  {
    id: 'havan-yagya',
    name: 'Havan & Yagya',
    description: 'विशेष संकल्प और मनोकामना के लिए हवन',
    duration: '2-3 hours',
    modes: ['Online', 'Home Visit'],
    whenToPerform: 'किसी भी शुभ अवसर पर',
    benefits: 'वातावरण शुद्धि, इच्छा पूर्ति',
    whoPerforms: 'सभी भक्तगण',
    price: 'Starting from ₹3,100',
    image: image7,
  }
];

const acharyas = [
  {
    name: 'Pandit Raghunath Sharma',
    experience: '25+ years',
    expertise: 'Vedic Rituals & Havan',
    rating: 4.9
  },
  {
    name: 'Acharya Vishwanath Joshi',
    experience: '18+ years',
    expertise: 'Graha Dosh & Puja',
    rating: 4.8
  },
  {
    name: 'Pandit Hari Om Tiwari',
    experience: '20+ years',
    expertise: 'Marriage & Vivah Puja',
    rating: 4.9
  }
];

export default function BookPuja() {
  const banner = usePageBanner();
  const [selectedPuja, setSelectedPuja] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    pujaType: '',
    date: '',
    mode: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState({});

  const bookingSteps = [
    { n: "1", t: "Select Puja", s: "Browse catalog", d: "अपनी पूजा चुनें" },
    { n: "2", t: "Date & Time", s: "Pick a slot", d: "तारीख और समय" },
    { n: "3", t: "Provide Info", s: "Fill detail form", d: "जानकारी दें" },
    { n: "4", t: "Priest Match", s: "Expert assigned", d: "आचार्य नियुक्ति" },
    { n: "5", t: "Ritual Done", s: "Divine blessings", d: "पूजा संपन्न" }
  ];

  const validateStep = (step) => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.pujaType) newErrors.pujaType = "Please select a puja";
    } else if (step === 2) {
      if (!formData.date) newErrors.date = "Please select a date";
      if (!formData.mode) newErrors.mode = "Please select a mode";
    } else if (step === 3) {
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.mobile || formData.mobile.length < 10) newErrors.mobile = "Valid mobile number is required";
      if (!formData.city) newErrors.city = "City is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 3) {
        // Automatically move to step 4 (Simulated match)
        setCurrentStep(4);
        setTimeout(() => {
          handleSubmit();
        }, 3000);
      } else {
        setCurrentStep(prev => prev + 1);
      }
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handlePujaSelect = (puja) => {
    setSelectedPuja(puja);
    setFormData({ ...formData, pujaType: puja.name });
    setErrors({});
    setCurrentStep(2); // Start at Step 2 if coming from a specific puja card
    setShowBookingForm(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setCurrentStep(5);
    setTimeout(() => {
      setSubmitted(false);
      setShowBookingForm(false);
      setSelectedPuja(null);
      setCurrentStep(1);
      setFormData({
        name: '', mobile: '', city: '', pujaType: '', date: '', mode: '', message: ''
      });
    }, 4000);
  };

  return (
    <Layout>
      <div className="min-h-[80vh]">
        <div className="min-h-screen bg-background">
          {/* Hero Section */}
          <section className="relative h-[320px] sm:h-[320px] md:h-[360px] lg:h-[370px] flex items-center py-[20px] text-white overflow-hidden">
            <div className="absolute inset-0">
              {banner.imageUrl ? (
                <img src={`http://127.0.0.1:5000${banner.imageUrl}`} alt="Background" className="w-full h-full object-cover object-top" />
              ) : (
                <div className="absolute inset-0 bg-[#2A1D13]/90" />
              )}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.2),transparent_50%)]" />
            </div>
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/30 mb-8 shadow-2xl">
                  <Award className="w-4 h-4 text-[#FFC107]" />
                  <span className="text-[#FFC107] text-xs md:text-sm font-black uppercase tracking-widest">{banner.badge}</span>
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] uppercase">
                  {banner.titleHighlight1} <br />
                  <span className="text-yellow-300">{banner.titleHighlight2} {banner.titleHighlight3}</span> {banner.titleEnd}
                </h1>
                <p className="text-lg md:text-xl text-amber-100 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow mb-10">
                  {banner.subtitle}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => document.getElementById("puja-selection")?.scrollIntoView({ behavior: "smooth" })}
                    className="group relative bg-[#E8453C] hover:bg-[#CC3B34] text-white px-10 py-4 font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-2xl transition-all duration-300 overflow-hidden rounded-none"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center gap-2 font-black"><Calendar className="w-5 h-5" /> Book Puja Now</span>
                  </button>
                  <button
                    className="group relative bg-[#2A1D13]/80 backdrop-blur-md border border-white/20 hover:bg-[#2A1D13] text-white px-10 py-4 font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-2xl transition-all duration-300 rounded-none"
                  >
                    <span className="relative flex items-center gap-2 font-black"><Phone className="w-5 h-5 text-yellow-300" /> Talk to Expert</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-12 md:py-16 bg-white relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -z-10" />
            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50/50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Our Process</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2A1B13] mb-4 uppercase tracking-tight">How It <span className="text-orange-600">Works</span></h2>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                  <Sparkles className="w-5 h-5 text-orange-400" />
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                </div>
              </div>

              <div className="relative max-w-5xl mx-auto">
                <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-200 to-transparent"></div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-4">
                  {[
                    { n: "1", t: "Select Puja", s: "Browse catalog", d: "अपनी पूजा चुनें" },
                    { n: "2", t: "Date & Time", s: "Pick a slot", d: "तारीख और समय" },
                    { n: "3", t: "Provide Info", s: "Fill detail form", d: "जानकारी दें" },
                    { n: "4", t: "Priest Match", s: "Expert assigned", d: "आचार्य नियुक्ति" },
                    { n: "5", t: "Ritual Done", s: "Divine blessings", d: "पूजा संपन्न" }
                  ].map((step, idx) => (
                    <div key={idx} className="relative flex flex-col items-center animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}>
                      <div className="relative w-20 h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-none flex flex-col items-center justify-center mb-5 border-4 border-white shadow-xl z-10">
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">{step.n}</span>
                        {idx === 0 && <div className="absolute inset-0 rounded-none border-2 border-orange-300 animate-ping opacity-30"></div>}
                        {idx === 4 && (
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-none flex items-center justify-center border-2 border-white shadow-md">
                            <CheckCircle className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </div>
                      <div className="text-center">
                        <h3 className="font-bold text-[#4A3427] text-sm uppercase tracking-wider mb-1">{step.t}</h3>
                        <p className="text-orange-600 text-xs font-semibold mb-1">{step.d}</p>
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{step.s}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Puja Selection Section */}
          <section id="puja-selection" className="py-12 md:py-16 bg-[#FAF9F6] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d97706 1px, transparent 0)', backgroundSize: '32px 32px' }} />
            <div className="container mx-auto px-4 max-w-6xl relative z-10">
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50/50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Star className="w-3.5 h-3.5" />
                  <span>Divine Selection</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2A1B13] mb-4 uppercase tracking-tight">Select Your <span className="text-orange-600">Puja Service</span></h2>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                  <Sparkles className="w-5 h-5 text-orange-400" />
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar p-2">
                  {pujaServices.map((puja, idx) => (
                    <div
                      key={puja.id}
                      className="bg-white rounded-none shadow-xl hover:shadow-2xl border border-orange-100 hover:border-orange-400 transition-all duration-500 overflow-hidden flex flex-col group animate-fade-in-up"
                      style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}
                    >
                      <div className="relative h-52 overflow-hidden shrink-0">
                        <img src={puja.image} alt={puja.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
                        <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg flex items-center gap-1.5">
                          <Star className="w-3 h-3 fill-white" /> Vedic
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                          <h3 className="text-2xl font-bold text-white leading-tight uppercase tracking-tight group-hover:text-orange-300 transition-colors drop-shadow-lg">{puja.name}</h3>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <p className="text-gray-500 text-sm font-semibold mb-4 line-clamp-2 leading-relaxed italic">"{puja.description}"</p>
                        <div className="flex flex-col gap-3 mb-6">
                          <div className="flex items-center gap-2 text-xs font-bold text-[#4A3427] bg-[#FFFAF3] w-max px-3 py-1.5 border border-orange-100 uppercase tracking-widest">
                            <Clock className="w-4 h-4 text-orange-600" />
                            <span>{puja.duration}</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {puja.modes.map((mode, i) => (
                              <span key={i} className={`inline-flex items-center gap-1 text-[10px] font-black px-2.5 py-1 uppercase tracking-widest ${mode === 'Online' ? 'bg-blue-50 text-blue-700 border border-blue-100' : 'bg-green-50 text-green-700 border border-green-100'}`}>
                                {mode === 'Online' ? <Video className="w-3 h-3" /> : <Home className="w-3 h-3" />}
                                {mode}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto pt-5 border-t border-orange-50 flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] mb-1">Starting From</span>
                            <span className="text-xl font-black text-[#2A1D13] uppercase">{puja.price.replace('Starting from ', '')}</span>
                          </div>
                          <button
                            onClick={() => handlePujaSelect(puja)}
                            className="bg-[#E8453C] hover:bg-black text-white font-black text-xs uppercase tracking-[0.2em] px-6 py-3 shadow-lg transition-all duration-300 rounded-none"
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {pujaServices.length > 6 && (
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-orange-600 bg-orange-50 px-6 py-2.5 rounded-none shadow-sm animate-bounce cursor-default border border-orange-100">
                      <span>↓ Scroll for more services ↓</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Booking Modal */}
          {showBookingForm && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 animate-fade-in">
              <div
                onClick={() => setShowBookingForm(false)}
                className="absolute inset-0 bg-black/70 backdrop-blur-md"
              />
              
              <div
                className="relative w-full max-w-5xl bg-white shadow-2xl overflow-hidden flex flex-col max-h-[95vh] md:max-h-[90vh] rounded-none animate-scale-in"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setShowBookingForm(false)}
                  className="absolute top-4 right-4 z-50 text-gray-400 hover:text-orange-600 transition-colors bg-white/80 p-1 backdrop-blur-sm"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Step Indicator Header - Matching User's Image */}
                <div className="bg-[#FAF9F6] border-b border-orange-100 p-6 md:p-8 shrink-0">
                  <div className="relative max-w-4xl mx-auto">
                    {/* Progress Line */}
                    <div className="absolute top-10 left-[10%] right-[10%] h-[1.5px] bg-orange-100 hidden md:block">
                      <div 
                        className="h-full bg-orange-500 transition-all duration-500"
                        style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                      />
                    </div>

                    <div className="grid grid-cols-5 gap-2 relative z-10">
                      {bookingSteps.map((step, idx) => {
                        const stepNum = idx + 1;
                        const isActive = currentStep === stepNum;
                        const isCompleted = currentStep > stepNum;

                        return (
                          <div key={idx} className="flex flex-col items-center">
                            <div 
                              className={`w-10 h-10 md:w-16 md:h-16 flex items-center justify-center border-4 border-white shadow-lg relative transition-all duration-300 ${
                                isActive ? 'bg-white' : isCompleted ? 'bg-orange-50' : 'bg-white/50'
                              }`}
                            >
                              {isCompleted ? (
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 md:w-7 md:h-7 bg-green-500 flex items-center justify-center border-2 border-white shadow-md">
                                  <CheckCircle className="w-3 h-3 md:w-4 md:h-4 text-white" />
                                </div>
                              ) : null}
                              <span className={`text-lg md:text-2xl font-bold ${
                                isActive ? 'text-orange-600' : isCompleted ? 'text-orange-400' : 'text-gray-300'
                              }`}>
                                {step.n}
                              </span>
                              {isActive && (
                                <div className="absolute inset-0 border-2 border-orange-300 animate-pulse opacity-40"></div>
                              )}
                            </div>
                            <div className="mt-3 text-center hidden md:block">
                              <h4 className={`text-[10px] font-black uppercase tracking-widest mb-0.5 ${isActive ? 'text-orange-600' : 'text-[#4A3427]'}`}>
                                {step.t}
                              </h4>
                              <p className="text-orange-600 text-[9px] font-bold uppercase mb-0.5">{step.d}</p>
                              <p className="text-gray-400 text-[8px] font-bold uppercase tracking-[0.2em]">{step.s}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                  {/* Sidebar Info - Hidden on mobile for brevity */}
                  <div className="hidden lg:block w-72 bg-[#2A1D13] p-10 text-white relative">
                    <div className="relative z-10">
                      <div className="w-12 h-12 bg-orange-600 flex items-center justify-center mb-8">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold mb-8 uppercase tracking-tighter border-b border-white/10 pb-4">Booking Info</h3>
                      
                      <div className="space-y-8">
                        <div>
                          <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                            <Star className="w-3 h-3" /> Selected
                          </p>
                          <p className="text-lg font-bold text-white uppercase leading-tight">{formData.pujaType || "Not Selected"}</p>
                        </div>
                        
                        {formData.date && (
                          <div>
                            <p className="text-orange-400 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                              <Clock className="w-3 h-3" /> Scheduled
                            </p>
                            <p className="text-white font-bold">{formData.date}</p>
                          </div>
                        )}

                        <div className="pt-10">
                          <p className="text-[10px] text-amber-100/50 font-bold leading-relaxed italic uppercase tracking-[0.1em]">
                            Vedic Rituals performed by verified Acharyas.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step Content Area */}
                  <div className="flex-1 overflow-y-auto p-6 md:p-12 custom-scrollbar bg-white">
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold text-[#2A1D13] uppercase tracking-tight">Select <span className="text-orange-600">Puja</span></h2>
                          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">Which service do you require?</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {pujaServices.map((puja) => (
                            <button
                              key={puja.id}
                              onClick={() => {
                                setSelectedPuja(puja);
                                setFormData(prev => ({ ...prev, pujaType: puja.name }));
                                setErrors({});
                              }}
                              className={`p-4 text-left border-2 transition-all duration-300 flex items-center gap-4 group ${
                                formData.pujaType === puja.name 
                                ? 'border-orange-500 bg-orange-50/50' 
                                : 'border-gray-100 hover:border-orange-200'
                              }`}
                            >
                              <div className="w-12 h-12 shrink-0 bg-white shadow-md overflow-hidden">
                                <img src={puja.image} alt="" className="w-full h-full object-cover" />
                              </div>
                              <div className="flex-1">
                                <h4 className={`text-sm font-black uppercase tracking-tight ${formData.pujaType === puja.name ? 'text-orange-600' : 'text-[#4A3427]'}`}>
                                  {puja.name}
                                </h4>
                                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{puja.price}</p>
                              </div>
                            </button>
                          ))}
                        </div>
                        {errors.pujaType && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.pujaType}</p>}
                        <div className="pt-8 flex justify-end">
                          <button onClick={nextStep} className="bg-[#E8453C] hover:bg-black text-white font-black text-xs uppercase tracking-[0.2em] px-10 py-4 shadow-xl transition-all duration-300">Continue</button>
                        </div>
                      </div>
                    )}

                    {currentStep === 2 && (
                      <div className="space-y-8 animate-fade-in">
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold text-[#2A1D13] uppercase tracking-tight">Date & <span className="text-orange-600">Mode</span></h2>
                          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">Pick a slot for {selectedPuja?.name}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Select Preferred Date *</label>
                            <input 
                              type="date" 
                              name="date" 
                              value={formData.date} 
                              onChange={handleChange} 
                              className={`w-full bg-orange-50/30 border ${errors.date ? 'border-red-300' : 'border-gray-100'} px-5 py-4 font-bold text-[#4A3427] focus:border-orange-500 outline-none`} 
                            />
                            {errors.date && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.date}</p>}
                          </div>

                          <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Puja Mode *</label>
                            <div className="grid grid-cols-1 gap-3">
                              {selectedPuja?.modes.map(mode => (
                                <button
                                  key={mode}
                                  onClick={() => setFormData(prev => ({ ...prev, mode }))}
                                  className={`flex items-center gap-4 p-4 border-2 transition-all duration-300 ${
                                    formData.mode === mode 
                                    ? 'border-orange-500 bg-orange-50/50' 
                                    : 'border-gray-100 hover:border-orange-100'
                                  }`}
                                >
                                  <div className={`w-10 h-10 flex items-center justify-center ${formData.mode === mode ? 'bg-orange-600 text-white' : 'bg-white text-orange-600'}`}>
                                    {mode === 'Online' ? <Video className="w-5 h-5" /> : <Home className="w-5 h-5" />}
                                  </div>
                                  <div className="text-left">
                                    <h4 className="text-sm font-black uppercase tracking-tight">{mode}</h4>
                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em]">{mode === 'Online' ? 'Connect via Video' : 'Acharya at Home'}</p>
                                  </div>
                                </button>
                              ))}
                            </div>
                            {errors.mode && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.mode}</p>}
                          </div>
                        </div>

                        <div className="pt-8 flex justify-between">
                          <button onClick={prevStep} className="text-gray-400 hover:text-orange-600 font-black text-xs uppercase tracking-[0.2em]">← Back</button>
                          <button onClick={nextStep} className="bg-[#E8453C] hover:bg-black text-white font-black text-xs uppercase tracking-[0.2em] px-10 py-4 shadow-xl">Continue</button>
                        </div>
                      </div>
                    )}

                    {currentStep === 3 && (
                      <div className="space-y-6 animate-fade-in">
                        <div className="mb-8">
                          <h2 className="text-3xl font-bold text-[#2A1D13] uppercase tracking-tight">Your <span className="text-orange-600">Details</span></h2>
                          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em] mt-2">Enter your contact information</p>
                        </div>

                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Full Name *</label>
                              <input type="text" name="name" value={formData.name} onChange={handleChange} className={`w-full bg-orange-50/30 border ${errors.name ? 'border-red-300' : 'border-gray-100'} px-5 py-4 font-bold text-[#4A3427] focus:border-orange-500 outline-none`} placeholder="Yogesh Sharma" />
                              {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.name}</p>}
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Mobile No *</label>
                              <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className={`w-full bg-orange-50/30 border ${errors.mobile ? 'border-red-300' : 'border-gray-100'} px-5 py-4 font-bold text-[#4A3427] focus:border-orange-500 outline-none`} placeholder="9876543210" />
                              {errors.mobile && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.mobile}</p>}
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">City/Location *</label>
                            <input type="text" name="city" value={formData.city} onChange={handleChange} className={`w-full bg-orange-50/30 border ${errors.city ? 'border-red-300' : 'border-gray-100'} px-5 py-4 font-bold text-[#4A3427] focus:border-orange-500 outline-none`} placeholder="New Delhi" />
                            {errors.city && <p className="text-red-500 text-[10px] font-bold uppercase tracking-widest">{errors.city}</p>}
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Special Requests (Optional)</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="2" className="w-full bg-orange-50/30 border border-gray-100 px-5 py-4 font-bold text-[#4A3427] focus:border-orange-500 outline-none resize-none" placeholder="Any specific requirements?"></textarea>
                          </div>
                        </div>

                        <div className="pt-8 flex justify-between">
                          <button onClick={prevStep} className="text-gray-400 hover:text-orange-600 font-black text-xs uppercase tracking-[0.2em]">← Back</button>
                          <button onClick={nextStep} className="bg-[#E8453C] hover:bg-black text-white font-black text-xs uppercase tracking-[0.2em] px-10 py-4 shadow-xl">Submit Booking</button>
                        </div>
                      </div>
                    )}

                    {currentStep === 4 && (
                      <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                        <div className="relative mb-12">
                          <div className="w-32 h-32 bg-orange-50 rounded-full flex items-center justify-center animate-[spin_4s_linear_infinite]">
                            <div className="absolute inset-0 border-t-4 border-orange-600 rounded-full"></div>
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Users className="w-12 h-12 text-orange-600 animate-pulse" />
                          </div>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-[#2A1D13] uppercase tracking-tighter mb-4">
                          Matching <span className="text-orange-600">Expert Acharya</span>
                        </h2>
                        <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] max-w-sm mx-auto leading-relaxed">
                          Finding the most suitable verified expert for your {formData.pujaType}...
                        </p>
                        
                        <div className="mt-12 flex items-center gap-2 justify-center">
                          <span className="w-2 h-2 bg-orange-600 animate-bounce"></span>
                          <span className="w-2 h-2 bg-orange-600 animate-bounce [animation-delay:0.2s]"></span>
                          <span className="w-2 h-2 bg-orange-600 animate-bounce [animation-delay:0.4s]"></span>
                        </div>
                      </div>
                    )}

                    {currentStep === 5 && (
                      <div className="h-full flex flex-col items-center justify-center text-center py-10 animate-fade-in">
                        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8 shadow-inner">
                          <CheckCircle className="w-14 h-14 text-green-600 animate-[bounce_1s_ease-in-out_infinite]" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#2A1D13] uppercase tracking-tight mb-6">Booking <span className="text-green-600">Confirmed!</span></h2>
                        <div className="space-y-4 mb-10">
                          <p className="text-[#4A3427] font-bold text-lg leading-relaxed">
                            आपकी पूजा सफलतापूर्वक बुक हो गई है।
                          </p>
                          <p className="text-gray-400 text-[10px] font-black uppercase tracking-[0.2em] max-w-md mx-auto">
                            Our spiritual desk will contact you at <span className="text-orange-600">{formData.mobile}</span> within 15-30 minutes for final scheduling and priest assignment.
                          </p>
                        </div>
                        
                        <div 
                          className="bg-[#FFFAF3] p-4 border border-orange-100 w-full max-w-sm animate-fade-in"
                          style={{ animationDelay: '0.5s', animationFillMode: 'both' }}
                        >
                          <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-[#2A1D13]">
                            <span>Booking ID</span>
                            <span className="text-orange-600">#{Math.random().toString(36).substr(2, 8).toUpperCase()}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Puja Samagri Section */}
          <section className="py-12 md:py-16 bg-[#FFFDF7] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="container mx-auto px-4 max-w-7xl relative z-10">
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50/50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Quality Assurance</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2A1B13] mb-4 uppercase tracking-tight">Puja <span className="text-orange-600">Samagri</span></h2>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                  <Sparkle className="w-5 h-5 text-orange-400" />
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { t: "Samagri Included", s: "सभी आवश्यक सामग्री शामिल", d: "Pure and authenticated samagri provided for every ritual type." },
                  { t: "Verified Sources", s: "आचार्य द्वारा व्यवस्था", d: "Directly sourced from trusted Vedic material suppliers." },
                  { t: "On-Time Arrival", s: "घर पर उपलब्धता", d: "Materials delivered to your doorstep 1 hour before the puja." }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-8 text-center border-b-4 border-orange-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-500 group rounded-none animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}>
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="font-bold text-[#4A3427] mb-2 uppercase tracking-tight text-lg">{item.t}</h3>
                    <p className="text-orange-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">{item.s}</p>
                    <p className="text-gray-400 text-xs font-semibold leading-relaxed">{item.d}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-white border-2 border-dashed border-orange-200 p-6 text-center max-w-3xl mx-auto rounded-none">
                <p className="text-[#4A3427] text-lg font-bold italic tracking-wide uppercase text-sm">
                  "All required puja samagri will be arranged as per strict Vedic guidelines"
                </p>
              </div>
            </div>
          </section>

          {/* Our Acharyas Section */}
          <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50/50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <Users className="w-3.5 h-3.5" />
                  <span>Verified Experts</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2A1B13] mb-4 uppercase tracking-tight">Our Trusted <span className="text-orange-600">Acharyas</span></h2>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                  <Sparkles className="w-5 h-5 text-orange-400" />
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {acharyas.map((acharya, index) => (
                  <div
                    key={index}
                    className="bg-[#FFFAF3] p-6 text-center border border-orange-100 shadow-xl hover:shadow-2xl transition-all duration-500 relative group rounded-none animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                  >
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="w-20 h-20 bg-white rounded-none mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform border-4 border-[#FFFAF3] outline outline-1 outline-orange-200">
                      <Users className="w-10 h-10 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-[#4A3427] mb-1.5 uppercase tracking-widest text-base">{acharya.name}</h3>
                    <div className="flex items-center justify-center gap-1.5 mb-2 text-[9px] font-bold text-orange-600 uppercase tracking-widest bg-orange-50 py-1 px-3 w-max mx-auto border border-orange-100">
                      <Award className="w-3.5 h-3.5" />
                      <span>{acharya.experience} Exp</span>
                    </div>
                    <p className="text-gray-500 font-semibold text-[10px] mb-4 uppercase tracking-widest leading-relaxed h-8 flex items-center justify-center">{acharya.expertise}</p>
                    <div className="flex items-center justify-center gap-1 relative z-10 pt-4 border-t border-orange-100">
                      {[...Array(5)].map((_, i) => <Star key={i} className={`w-3.5 h-3.5 ${i < Math.floor(acharya.rating) ? "fill-amber-500 text-amber-500" : "text-gray-300"}`} />)}
                      <span className="font-bold text-gray-800 ml-1 text-xs">{acharya.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-16 bg-[#FAF9F6] relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl relative z-10">
              <div className="text-center mb-12 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50/50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Knowledge Base</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#2A1B13] mb-4 uppercase tracking-tight">Got <span className="text-orange-600">Questions?</span></h2>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                  <Sparkles className="w-5 h-5 text-orange-400" />
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { q: "Online puja kaise hoti hai?", a: "Online puja में आचार्य जी video call के माध्यम से पूजा करते हैं। आप अपने घर से ही देख सकते हैं और पूजा में शामिल हो सकते हैं।" },
                  { q: "Home visit puja में क्या include होता है?", a: "Home visit में आचार्य जी आपके घर आकर पूजा करते हैं। सभी आवश्यक सामग्री और पूजा की पूर्ण विधि शामिल है।" },
                  { q: "Kitne din pehle book karna chahiye?", a: "सामान्य पूजा के लिए 2-3 दिन पहले और विशेष आयोजनों के लिए 7-10 दिन पहले बुक करना बेहतर है।" },
                  { q: "Puja के बाद क्या follow करना होता है?", a: "आचार्य जी पूजा के बाद आपको प्रसाद और विशेष आशीर्वाद निर्देश देंगे जिनका पालन करना शुभ होता है।" }
                ].map((faq, idx) => (
                  <div
                    key={idx}
                    className={`group bg-white p-8 border border-orange-100 hover:border-orange-500 transition-all duration-500 relative rounded-none animate-fade-in-${idx % 2 === 0 ? 'left' : 'right'}`}
                  >
                    <div className="absolute top-0 right-0 w-8 h-8 bg-orange-50 flex items-center justify-center group-hover:bg-orange-600 transition-colors rounded-none" />
                    <h3 className="text-base font-bold text-[#4A3427] mb-2 uppercase tracking-tight leading-tight group-hover:text-orange-600 transition-colors">"{faq.q}"</h3>
                    <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.15em] leading-relaxed italic">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-12 md:py-16 bg-white border-t border-orange-50">
            <div className="container mx-auto px-4 text-center max-w-5xl">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50/50 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sacred Connections</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A1B13] mb-4 tracking-tight uppercase">Begin Your <span className="text-[#E8453C]">Divine Journey</span></h2>
                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                  <Sparkles className="w-5 h-5 text-orange-400" />
                  <div className="w-10 h-[1.5px] bg-orange-200" />
                </div>
                <p className="text-gray-600 mb-10 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                  Experience the sacred traditions with digital convenience and ancient wisdom. Book your personalized Vedic rituals today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button
                    onClick={() => document.getElementById('puja-selection').scrollIntoView({ behavior: 'smooth' })}
                    className="group relative bg-[#E8453C] hover:bg-[#CC3B34] text-white px-10 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative z-10 flex items-center gap-3"><Calendar className="w-5 h-5" /> Book Now</span>
                  </button>
                  <button className="group relative bg-white hover:bg-orange-50 text-[#F59E0B] border-2 border-[#F59E0B] px-10 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] transition-all duration-300 overflow-hidden">
                    <span className="relative flex items-center gap-3"><Phone className="w-5 h-5" /> Contact Us</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #FFFAF3; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #FFC107; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #E8453C; }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }
      `}</style>
    </Layout>
  );
}
