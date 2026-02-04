import React, { useState } from 'react';
import { Send, CheckCircle, Users, TrendingUp, Shield, Clock, ChevronDown, ChevronUp, Menu, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import banner from "../assets/banners/bannerCareer1.png"
import bgImage from "../assets/careerPage/careerBack.png"
import image1 from "../assets/careerPage/image1.png"
import image2 from "../assets/careerPage/image2.png"
import image3 from "../assets/careerPage/image3.png"
import image4 from "../assets/careerPage/image4.png"
import image5 from "../assets/careerPage/image5.png"
import image6 from "../assets/careerPage/image6.png"

export default function Career() {
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
  const [activeSection, setActiveSection] = useState('home');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
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
    
    if (!formData.city.trim()) {
      newErrors.city = 'City is required';
    }
    
    if (!formData.expertise) {
      newErrors.expertise = 'Please select your area of expertise';
    }
    
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
          fullName: '',
          mobile: '',
          email: '',
          city: '',
          expertise: '',
          experience: '',
          services: [],
          bio: ''
        });
      }, 5000);
    } else {
      const firstErrorField = Object.keys(errors)[0];
      const element = document.getElementsByName(firstErrorField)[0];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'eligibility', label: 'Who Can Apply' },
    { id: 'benefits', label: 'Why Join Us' },
    { id: 'roles', label: 'Roles' },
    { id: 'process', label: 'Process' },
    { id: 'apply', label: 'Apply Now' }
  ];

  return (
  <Layout>
     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white relative overflow-hidden">
      {/* Combined Elegant Dots Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#f97316_0.5px,transparent_0.5px)] [background-size:40px_40px] opacity-[0.08]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#dc2626_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.05]"></div>
        <div className="absolute inset-0 opacity-20" 
          style={{
            backgroundImage: `url(${banner})`,
            backgroundSize: '100px , 80px '
          }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10"></div>
      </div>

      {/* Hero Section */}
    <section
  id="home"
  className="relative text-white overflow-hidden flex items-center px-6 z-10
             h-[400px] sm:h-[450px] md:h-[500px]"
>
  {/* Background */}
  <div className="absolute inset-0">
    <img
      src={bgImage}
      alt="Career Opportunities"
      className="w-full h-full bg-cover"
      style={{
        filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
      }}
    />

    {/* SINGLE PROFESSIONAL OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
      Join Our Network of Learned Acharyas
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl text-orange-100 mb-4 drop-shadow">
      Work with Acharya Ji Online
    </p>

    <p className="text-base sm:text-lg text-orange-50 mb-6 max-w-2xl mx-auto opacity-90">
      A trusted platform for Puja, Astrology, Kundli, Vastu & Healing experts
    </p>

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold shadow-lg hover:scale-105 transition">
        Apply as Acharya
      </button>
      <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition">
        Join as Expert
      </button>
    </div>
  </div>
</section>


{/* Secondary Navigation - Positioned below the hero */}
<div className="max-w-6xl mx-auto -mt-6 md:-mt-8 px-6 relative z-20">
  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
    <div className="flex flex-wrap justify-center">
      {[
        { id: 'home', label: 'Home' },
        { id: 'eligibility', label: 'Who Can Apply' },
        { id: 'benefits', label: 'Why Join Us' },
        { id: 'roles', label: 'Roles' },
        { id: 'process', label: 'Process' },
        { id: 'apply', label: 'Apply Now' }
      ].map((item, idx) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`flex-1 min-w-[140px] px-6 py-4 text-center font-medium transition ${
            item.id === 'home'
              ? 'bg-orange-600 text-white'
              : 'text-gray-700 hover:bg-orange-50'
          } ${idx !== 0 ? 'border-l border-gray-200' : ''}`}
        >
          {item.label}
        </button>
      ))}
    </div>
  </div>
</div>

      {/* Who Can Apply */}
      <section id="eligibility" className="py-10 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Who Can Apply?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Pandit / Acharya', desc: 'Puja, Havan, Dosh Nivaran' },
              { title: 'Astrologer', desc: 'Vedic, KP, Numerology' },
              { title: 'Vastu Consultant', desc: 'Home & Office Vastu' },
              { title: 'Reiki / Healing Expert', desc: 'Energy Healing Practices' },
              { title: 'Tarot / Palmistry Expert', desc: 'Divination Services' },
              { title: 'Puja Samagri Vendors', desc: 'Authentic Materials Supplier' }
            ].map((category, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-black to-orange-500 p-6 rounded-lg shadow-md border-l-4 border-orange-500 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                <p className="text-gray-300">{category.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-orange-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Minimum Requirements</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Minimum 3+ years of experience in your field</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Authentic Vedic knowledge and traditional practices</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Professional behaviour and client communication skills</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Willingness to work online and offline as per client needs</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section id="benefits" className="py-10 px-6 bg-gray-50 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Why Work With Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Users className="w-8 h-8" />, title: 'Regular Client Leads', desc: 'Get consistent puja and consultation bookings from verified clients',image:image1 },
              { icon: <TrendingUp className="w-8 h-8" />, title: 'Flexible Opportunities', desc: 'Choose between online consultations and home visit services',image:image2 },
              { icon: <Clock className="w-8 h-8" />, title: 'Flexible Working Hours', desc: 'Set your own availability and manage your schedule',image:image3 },
              { icon: <Shield className="w-8 h-8" />, title: 'Transparent Payments', desc: 'Clear payment terms with timely disbursements' ,image:image4},
              { icon: <CheckCircle className="w-8 h-8" />, title: 'Respectful Environment', desc: 'Work in a professional and spiritual atmosphere',image:image5 },
              { icon: <Users className="w-8 h-8" />, title: 'Global Reach', desc: 'Serve clients across India and internationally',image:image6 }
            ].map((benefit, idx) => (
             <div
           key={idx}
           className="relative bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-cover bg-center overflow-hidden group"
           style={{backgroundImage:`url(${benefit.image})`}}
         >
           {/* Dark Overlay for Better Text Visibility */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/70 transition-all duration-300"></div>
           
           {/* Content */}
           <div className="relative z-10">
             <div className="text-white flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
               {benefit.icon}
             </div>
             <h3 className="text-xl font-semibold mb-3 text-white drop-shadow-lg">{benefit.title}</h3>
             <p className="text-orange-100 drop-shadow-md">{benefit.desc}</p>
           </div>
         </div>
          ))}
          </div>
        </div>
      </section>

      {/* Available Roles */}
      <section id="roles" className="py-10 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Available Roles & Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Puja Performing Acharya', desc: 'Conduct traditional pujas, havans, and religious ceremonies for clients seeking spiritual guidance and blessings.', mode: 'Online / Onsite' },
              { title: 'Vedic Astrologer', desc: 'Provide kundli readings, horoscope analysis, and astrological consultations based on Vedic principles.', mode: 'Online / Hybrid' },
              { title: 'Vastu Consultant', desc: 'Offer expert advice on home and office Vastu to bring harmony, prosperity, and positive energy.', mode: 'Onsite / Hybrid' },
              { title: 'Healing Practitioner', desc: 'Provide Reiki, energy healing, and holistic wellness sessions for physical and mental wellbeing.', mode: 'Online / Onsite' },
              { title: 'Puja Samagri Partner', desc: 'Supply authentic puja materials, sacred items, and religious essentials to our growing client base.', mode: 'Partnership' }
            ].map((role, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-gray-600 to-black p-6 rounded-lg shadow-md border-t-4 border-orange-500 hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold mb-3 text-white">{role.title}</h3>
                <p className="text-yellow-400 mb-4">{role.desc}</p>
                <span className="inline-block bg-gradient-to-r from-white to-amber-600 text-black px-3 py-1 rounded-full text-sm font-medium">
                  {role.mode}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
     <section id="process" className="py-12 px-4 md:px-6 bg-gradient-to-b from-white via-white to-gray-800 relative z-10">
  <div className="max-w-6xl mx-auto">
    
    {/* Main Heading */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
      How It Works?
    </h2>
    
    {/* Two Sub-Sections Side by Side */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      
      {/* Sub-Section 1: Before Joining */}
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-xl"></div>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-4 border-orange-500 relative z-10">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Join Our Network</h3>
              <p className="text-gray-600 text-sm">Steps to become part of our community</p>
            </div>
          </div>
          
          <div className="space-y-5">
            {[
              { step: '1', title: 'Apply Online', desc: 'Fill our application form' },
              { step: '2', title: 'Document Verification', desc: 'Our team verifies credentials' },
              { step: '3', title: 'Knowledge Assessment', desc: 'Brief discussion about expertise' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold mr-4 shadow group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-1 border-b border-gray-100 pb-5 group-last:border-b-0 group-last:pb-0">
                  <h4 className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Sub-Section 2: After Joining */}
      <div className="relative">
        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full blur-xl"></div>
        
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border-t-4 border-amber-500 relative z-10">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mr-4 shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">Start Earning</h3>
              <p className="text-gray-600 text-sm">Begin your professional journey</p>
            </div>
          </div>
          
          <div className="space-y-5">
            {[
              { step: '4', title: 'Training & Onboarding', desc: 'Learn platform processes' },
              { step: '5', title: 'Receive Bookings', desc: 'Start getting client requests' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-center group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold mr-4 shadow group-hover:scale-110 transition-transform">
                  {item.step}
                </div>
                <div className="flex-1 border-b border-gray-100 pb-5 group-last:border-b-0 group-last:pb-0">
                  <h4 className="font-semibold text-gray-800 group-hover:text-amber-600 transition-colors">{item.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
            
            {/* Bonus Step */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold mr-4 shadow">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Grow Your Practice</h4>
                  <p className="text-gray-600 text-sm mt-1">Expand your reach and income</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    {/* Connecting Arrow between sections */}
    <div className="hidden lg:flex justify-center mt-8">
      <div className="flex items-center space-x-2 text-orange-600">
        <span className="text-sm font-medium">Complete Step 1 to proceed</span>
        <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </div>
    </div>
    
  </div>
</section>

      {/* Application Form */}
      <section id="apply" className="py-10 px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
            Apply Now
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Submit your profile and join our trusted network of spiritual experts
          </p>
          
          {submitted && (
            <div className="mb-6 bg-green-50 border-2 border-green-500 text-green-800 px-6 py-4 rounded-lg">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Application Submitted Successfully!</p>
                  <p className="text-sm mt-1">Thank you for your application! Our team will review your profile and contact you within 2-3 business days.</p>
                </div>
              </div>
            </div>
          )}

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                    errors.mobile ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter 10-digit mobile number"
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  City / Location <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                    errors.city ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Your city"
                />
                {errors.city && (
                  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Area of Expertise <span className="text-red-500">*</span>
                </label>
                <select
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-orange-500 ${
                    errors.expertise ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select expertise</option>
                  <option value="puja">Puja / Acharya</option>
                  <option value="astrology">Astrology</option>
                  <option value="vastu">Vastu</option>
                  <option value="healing">Healing / Reiki</option>
                  <option value="tarot">Tarot / Palmistry</option>
                  <option value="vendor">Puja Samagri Vendor</option>
                </select>
                {errors.expertise && (
                  <p className="text-red-500 text-sm mt-1">{errors.expertise}</p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Years of Experience</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  placeholder="Years"
                  min="0"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-3">Preferred Services</label>
              <div className="grid md:grid-cols-2 gap-3">
                {['Online Puja', 'Home Visit Puja', 'Online Consultation', 'Vastu Visit', 'Healing Sessions', 'Supply Samagri'].map(service => (
                  <div key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      id={service}
                      checked={formData.services.includes(service)}
                      onChange={() => handleCheckboxChange(service)}
                      className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                    />
                    <label htmlFor={service} className="ml-2 text-gray-700 cursor-pointer">
                      {service}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-medium mb-2">Short Bio / Experience</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                placeholder="Tell us about your experience, qualifications, and approach..."
              ></textarea>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 rounded-lg font-semibold hover:from-orange-700 hover:to-red-700 transition flex items-center justify-center transform hover:scale-105"
            >
              <Send className="w-5 h-5 mr-2" />
              Submit Your Profile
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 px-6 bg-gradient-to-r from-gray-100 to-pink-200 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            What Our Experts Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Pandit Sharma', location: 'Varanasi', text: 'Acharya Ji Online has provided me with regular puja bookings and the payment process is completely transparent. It is a trustworthy platform.' },
              { name: 'Jyotish Acharya Verma', location: 'Jaipur', text: 'Working with this platform has helped me reach clients across India. The professional support and respectful environment make it an excellent choice.' },
              { name: 'Vastu Expert Gupta', location: 'Delhi', text: 'The flexibility to work both online and offline has expanded my practice significantly. The team is supportive and understands our needs.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code of Conduct */}
      <section className="py-10 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Our Code of Conduct & Ethics
          </h2>
          <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-600">
            <p className="text-gray-700 mb-6">
              As a member of our spiritual community, we expect all experts to uphold the highest standards of integrity and professionalism.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Perform only authentic rituals and traditional practices with complete devotion</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Never make false promises or guarantees to clients seeking spiritual guidance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Maintain complete confidentiality and respect client privacy at all times</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                <span>Provide transparent and honest guidance without any manipulation or exploitation</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-10 px-6 bg-gray-50 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              { q: 'How does the payment process work?', a: 'Payments are processed transparently on a weekly or monthly basis depending on your preference. You will receive clear invoices and timely disbursements for all completed services.' },
              { q: 'How are online pujas conducted?', a: 'Online pujas are conducted via video call where you perform the ritual while the client observes and participates. We provide technical support to ensure smooth sessions.' },
              { q: 'Am I restricted to a specific location?', a: 'No, you can serve clients from anywhere. For online consultations, location does not matter. For home visits, you can set your preferred service areas.' },
              { q: 'What documents are required for onboarding?', a: 'Basic identity proof, address proof, and any relevant certificates or credentials that establish your expertise in your field.' }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-orange-50 transition"
                >
                  <h3 className="text-lg font-semibold text-gray-800">{faq.q}</h3>
                  {expandedFaq === idx ? (
                    <ChevronUp className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  )}
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 px-6 bg-gradient-to-r from-orange-600 to-red-600 text-white relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Be a Part of a Trusted Spiritual Platform
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join thousands of devotees and seekers on their spiritual journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('apply')}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition transform hover:scale-105"
            >
              Apply as Acharya
            </button>
            <button
              onClick={() => scrollToSection('apply')}
              className="bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-800 transition border-2 border-white transform hover:scale-105"
            >
              Contact Career Team
            </button>
          </div>
        </div>
      </section>
    </div>
  </Layout>
  );
}