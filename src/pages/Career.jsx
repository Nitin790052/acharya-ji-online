import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Send, CheckCircle, Users, TrendingUp, Shield, Clock, ChevronDown, ChevronUp,
  X, Sparkles, Award, Star, Sparkle, BookOpen, MapPin, Phone, MessageCircle,
  Briefcase, GraduationCap, DollarSign, Globe, ChevronRight, Heart
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { usePageBanner } from "@/hooks/usePageBanner";

import bgImage from "../assets/careerPage/careerBack.webp"
import image1 from "../assets/careerPage/image1.webp"
import image2 from "../assets/careerPage/image2.webp"
import image3 from "../assets/careerPage/image3.webp"
import image4 from "../assets/careerPage/image4.webp"
import image5 from "../assets/careerPage/image5.webp"
import image6 from "../assets/careerPage/image6.webp"

export default function Career() {
  const banner = usePageBanner();
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    city: '',
    expertise: '',
    experience: '',
    services: [],
    bio: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.expertise) newErrors.expertise = 'Please select your area of expertise';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: '', mobile: '', email: '', city: '',
          expertise: '', experience: '', services: [], bio: ''
        });
      }, 5000);
    }
  };

  const eligibility = [
    { title: "Pandit / Acharya", image: image1, items: ["Puja performing skills", "Vedic knowledge", "Excellence in shastra", "3+ years exp"] },
    { title: "Vedic Astrologer", image: image2, items: ["Kundli analysis", "Horoscope matching", "Remedial guidance", "Scientific approach"] },
    { title: "Vastu Consultant", image: image3, items: ["Residential vastu", "Commercial analysis", "Map reading", "Practical remedies"] },
    { title: "Healing Expert", image: image4, items: ["Reiki practitioners", "Energy healers", "Chakra cleansing", "Wellness guidance"] }
  ];

  const benefits = [
    { icon: Users, title: 'Regular Bookings', desc: 'Get consistent leads from verified global devotees.' },
    { icon: TrendingUp, title: 'Flexible Income', desc: 'Set your own schedule and earn as per your commitment.' },
    { icon: Clock, title: 'Growth & Support', desc: 'Dedicated technical team to support your online sessions.' },
    { icon: Shield, title: 'Trust & Reputation', desc: "Be part of India's most trusted spiritual platform." },
    { icon: BookOpen, title: 'Vedic Community', desc: 'Collaborate with fellow learned experts and scholars.' },
    { icon: Globe, title: 'Global Exposure', desc: 'Reach clients in India and internationally without travel.' }
  ];

  const roles = [
    { title: 'Ritual Acharya', desc: 'Expert in various Shanti Pujas, Havans, and festive rituals.', icon: GraduationCap },
    { title: 'Spiritual Guru', desc: 'Guiding seekers through astrology and spiritual consultations.', icon: Award },
    { title: 'Healing Master', desc: 'Spreading positivity through Reiki and energy healing.', icon: Heart }
  ];

  const testimonials = [
    { name: "Pandit S. Jha", text: "Acharya Ji Online gave me a platform to reach devotees worldwide while maintaining the sanctity of Vedic rituals.", location: "Varanasi, India" },
    { name: "Acharya R. Sharma", text: "The most professional and respectful platform for spiritual experts. Timely payments and great support.", location: "Haridwar, India" },
    { name: "Dr. A. Verma", text: "Joining this network expanded my astrology practice significantly. Truly a divine bridge to modern devotees.", location: "Delhi, India" }
  ];

  return (
    <Layout>
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
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-8 shadow-2xl">
                <Award className="w-4 h-4 text-[#FFC107]" />
                <span className="text-[#FFC107] text-xs md:text-sm font-black uppercase tracking-widest">{banner.badge}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] uppercase">
                {banner.titleHighlight1} <br />
                <span className="text-yellow-300">{banner.titleHighlight2} {banner.titleHighlight3}</span> {banner.titleEnd}
              </h1>
              <p className="text-lg md:text-xl text-amber-100 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow">
                {banner.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Eligibility Section (About Us "What We Offer" Style) */}
        <section id="eligibility" className="py-12 md:py-16 bg-[#FAF9F6] relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d97706 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <Star className="w-3.5 h-3.5" />
                <span>Opportunities</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">Who Can <span className="text-orange-600">Apply?</span></h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-1 bg-orange-200 rounded-full" />
                <Sparkles className="w-5 h-5 text-orange-400" />
                <div className="w-12 h-1 bg-orange-200 rounded-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-[90rem] mx-auto">
              {eligibility.map((service, idx) => (
                <div key={idx} className="group/card h-full animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}>
                  <div className="relative h-full p-[1.5px] rounded-3xl bg-amber-400/40 hover:bg-amber-500 transition-all duration-700 shadow-xl shadow-amber-200/10 hover:shadow-amber-200/30 flex flex-col">
                    <div className="relative flex-grow bg-[#FCFBF7] rounded-[1.4rem] overflow-hidden flex flex-col group-hover/card:bg-white transition-all duration-500">

                      <div className="absolute top-0 right-0 w-48 h-48 bg-amber-100/40 rounded-full blur-[80px] -mr-24 -mt-24 group-hover/card:bg-amber-400/20 transition-all duration-1000" />

                      <div className="relative m-2.5 mb-3 rounded-2xl overflow-hidden shadow-lg h-36 md:h-40 z-10">
                        <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-all duration-[2.5s] group-hover/card:scale-110 group-hover/card:rotate-1" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A130F]/80 via-transparent to-transparent opacity-60 group-hover/card:opacity-40 transition-opacity duration-700" />
                        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-white/60 rounded-tl-xl group-hover/card:border-amber-400 transition-all duration-500" />
                        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-white/40 rounded-br-xl group-hover/card:border-amber-400 transition-all duration-500" />
                      </div>

                      <div className="flex flex-col flex-grow px-4 pb-5 text-center relative z-20">
                        <h3 className="text-base md:text-lg font-black text-[#2A1D13] mb-1.5 tracking-wide uppercase transition-colors group-hover/card:text-amber-600">
                          {service.title}
                        </h3>

                        <div className="flex items-center justify-center gap-3 mb-4">
                          <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent via-amber-200 to-amber-500 group-hover/card:w-12 transition-all duration-700" />
                          <Sparkle className="w-5 h-5 text-amber-500 fill-amber-500/10 group-hover/card:rotate-90 transition-transform duration-700" />
                          <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent via-amber-200 to-amber-500 group-hover/card:w-12 transition-all duration-700" />
                        </div>

                        <ul className="space-y-2 mb-5 text-left">
                          {service.items.slice(0, 3).map((item, i) => (
                            <li key={i} className="flex items-center gap-3">
                              <div className="w-6 h-6 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover/card:bg-amber-600">
                                <CheckCircle className="w-3.5 h-3.5 text-amber-600 group-hover/card:text-white" />
                              </div>
                              <span className="text-xs font-bold text-[#4A3427]/80 group-hover/card:text-[#2A1D13] transition-colors">{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-auto">
                          <button onClick={() => document.getElementById('apply').scrollIntoView({ behavior: 'smooth' })} className="group/btn relative w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#2A1D13] text-amber-400 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 hover:bg-amber-600 hover:text-white shadow-lg group-hover/card:-translate-y-1">
                            <span>Apply Now</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits (About Us "Why Choose Us" Style) */}
        <section id="benefits" className="py-12 md:py-16 bg-[#FFFDF7] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl -ml-32 -mb-32" />
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] mb-4">
                <Shield className="w-3.5 h-3.5" />
                <span>Acharya Benefits</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Why Join <span className="text-orange-600">Our Network?</span></h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-1 bg-orange-200 rounded-full" /><Sparkles className="w-5 h-5 text-orange-400" /><div className="w-12 h-1 bg-orange-200 rounded-full" />
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {benefits.map((item, idx) => (
                <div key={idx} className="group bg-white p-5 md:p-6 hover:shadow-[0_20px_40px_-15px_rgba(255,165,0,0.15)] transition-all duration-500 border-2 border-orange-100 flex items-start gap-4 md:gap-5 rounded-none relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}>
                  <div className="absolute top-0 right-0 w-2 h-0 group-hover:h-full bg-orange-500 transition-all duration-500" />
                  <div className="w-16 h-16 rounded-none bg-orange-50 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-600 transition-all duration-500 shadow-inner">
                    <item.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-all transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-[#4A3427] mb-2 leading-tight group-hover:text-orange-600 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 text-sm font-semibold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Roles (About Us "Core Values" Style) */}
        <section id="roles" className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-black text-[#4A3427] mb-2">Available <span className="text-orange-600">Roles</span></h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-1 bg-orange-200 rounded-full" /><Sparkles className="w-5 h-5 text-orange-400" /><div className="w-12 h-1 bg-orange-200 rounded-full" />
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
              {roles.map((value, index) => (
                <div key={value.title} className="bg-[#FFFAF3] p-4 py-6 text-center border-b-[6px] border-orange-500 shadow-md hover:shadow-2xl transition-all duration-500 rounded-none relative group overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}>
                  <div className="absolute top-4 right-4 text-orange-200/50 group-hover:text-orange-400 transition-all duration-700"><Sparkles className="w-5 h-5" /></div>
                  <div className="w-14 h-14 rounded-sm bg-white mx-auto mb-5 flex items-center justify-center shadow-md group-hover:shadow-xl transition-all duration-500 border border-orange-100/50 relative">
                    <div className="absolute inset-0 bg-orange-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left opacity-10" />
                    <value.icon className="w-7 h-7 text-orange-600 group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <h3 className="text-lg font-black text-[#4A3427] mb-3 uppercase tracking-wider group-hover:text-orange-600 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 font-bold leading-relaxed text-xs">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form  */}
        <section id="apply" className="py-12 md:py-16 bg-[#FFFCF5] relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <div className="text-center mb-10 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-black text-[#4A3427] mb-6 uppercase tracking-widest">Application <span className="text-orange-600">Form</span></h2>

              {/* Center Icon Section similar to About "Our Belief" */}
              <div className="relative flex justify-center items-center mb-8">
                <div className="absolute w-24 h-[1px] bg-orange-200 left-1/2 -translate-x-[160%]" />
                <div className="relative group">
                  <Send className="w-20 h-20 text-orange-600 opacity-10 absolute inset-0 -z-10 animate-pulse" />
                  <Send className="w-16 h-16 text-orange-600/20" />
                  <Sparkles className="w-5 h-5 text-orange-400 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                </div>
                <div className="absolute w-24 h-[1px] bg-orange-200 left-1/2 translate-x-[60%]" />
              </div>

            </div>

            <div className="bg-white p-8 md:p-12 border-t-[8px] border-orange-600 shadow-2xl relative animate-fade-in-up">
              {submitted && (
                <div className="mb-8 bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 flex items-center gap-4">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0" />
                  <p className="text-sm font-bold uppercase">Application Sent! Our team will contact you in 48 hours.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-[#4A3427] uppercase tracking-widest mb-2">Full Name</label>
                    <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} className="w-full px-5 py-4 bg-[#FAF9F6] border border-orange-100 focus:border-orange-500 focus:outline-none transition-all font-semibold text-gray-800 placeholder-gray-400 text-sm" placeholder="Acharya Name" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#4A3427] uppercase tracking-widest mb-2">Mobile Number</label>
                    <input type="tel" name="mobile" value={formData.mobile} onChange={handleInputChange} className="w-full px-5 py-4 bg-[#FAF9F6] border border-orange-100 focus:border-orange-500 focus:outline-none transition-all font-semibold text-gray-800 placeholder-gray-400 text-sm" placeholder="10 Digit Number" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-black text-[#4A3427] uppercase tracking-widest mb-2">Expertise</label>
                    <select name="expertise" value={formData.expertise} onChange={handleInputChange} className="w-full px-5 py-4 bg-[#FAF9F6] border border-orange-100 focus:border-orange-500 focus:outline-none transition-all font-semibold text-gray-800 text-sm appearance-none">
                      <option value="" className="text-gray-400">Select Field</option>
                      <option value="puja">Puja / Acharya</option>
                      <option value="astrology">Astrology</option>
                      <option value="healing">Wellness / Healing</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] font-black text-[#4A3427] uppercase tracking-widest mb-2">Location</label>
                    <input type="text" name="city" value={formData.city} onChange={handleInputChange} className="w-full px-5 py-4 bg-[#FAF9F6] border border-orange-100 focus:border-orange-500 focus:outline-none transition-all font-semibold text-gray-800 placeholder-gray-400 text-sm" placeholder="Your City" />
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black text-[#4A3427] uppercase tracking-widest mb-2">Short Bio</label>
                  <textarea name="bio" value={formData.bio} onChange={handleInputChange} rows="4" className="w-full px-5 py-4 bg-[#FAF9F6] border border-orange-100 focus:border-orange-500 focus:outline-none transition-all font-semibold text-gray-800 placeholder-gray-400 text-sm italic" placeholder="Your experience and specialization..."></textarea>
                </div>

                <button type="submit" className="group relative w-full bg-[#E8453C] hover:bg-[#CC3B34] text-white py-5 rounded-none font-black text-xs uppercase tracking-[0.3em] shadow-xl transition-all flex items-center justify-center gap-3 overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2"><Send className="w-4 h-4" /> Send Application</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Testimonials (About Us Style) */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="container mx-auto px-4 max-w-6xl relative z-10">
            <div className="text-center mb-16 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-[10px] font-extrabold uppercase tracking-[0.2em] mb-4">
                <Star className="w-3.5 h-3.5 fill-green-700" />
                <span>Expert Feedback</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#4A3427] mb-6">Experience of <span className="text-orange-600">Our Acharyas</span></h2>
              <div className="flex items-center justify-center gap-2">
                <div className="w-12 h-1 bg-orange-200 rounded-full" /><Sparkles className="w-5 h-5 text-orange-400" /><div className="w-12 h-1 bg-orange-200 rounded-full" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
              {testimonials.map((review, idx) => (
                <div key={idx} className="bg-[#FFFDF7] p-6 md:p-7 border border-orange-100 shadow-lg rounded-2xl relative animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}>
                  <div className="absolute -top-4 -left-2 text-6xl text-orange-100 font-serif">"</div>
                  <div className="flex gap-1 mb-4 relative z-10">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />)}
                  </div>
                  <p className="text-gray-600 font-medium text-sm mb-6 leading-relaxed relative z-10 italic">"{review.text}"</p>
                  <div className="border-t border-orange-100 pt-4">
                    <h4 className="font-extrabold text-[#4A3427] text-sm">{review.name}</h4>
                    <p className="text-xs text-orange-600 font-semibold">{review.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section (About Us Style) */}
        <section className="py-12 md:py-16 bg-white border-t border-orange-50">
          <div className="container mx-auto px-4 text-center max-w-5xl">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A1B13] mb-4 tracking-tight uppercase">Become a Part of Our <span className="text-[#E8453C]">Divine Family</span></h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-[1.5px] bg-orange-200" />
                <Sparkles className="w-5 h-5 text-orange-400" />
                <div className="w-10 h-[1.5px] bg-orange-200" />
              </div>
              <p className="text-gray-600 mb-10 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">Start your professional spiritual journey with India's most trusted platform. Join a network of dedicated Vedic experts and Acharyas.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button onClick={() => document.getElementById('apply').scrollIntoView({ behavior: 'smooth' })} className="group relative bg-[#E8453C] hover:bg-[#CC3B34] text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2"><Briefcase className="w-4 h-4" /> Join as Expert</span>
                </button>
                <button className="group relative bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2"><Phone className="w-4 h-4" /> Career Support</span>
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}
