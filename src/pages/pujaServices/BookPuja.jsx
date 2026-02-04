import React, { useState } from 'react';
import {  Clock, CheckCircle, MessageCircle, Users, Award, Star, Home, Video } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import banner from "../../assets/banners/bannerBookPuja.png"
import image1 from "../../assets/bookPooja/image1.png"
import image2 from "../../assets/bookPooja/image2.png"
import image3 from "../../assets/bookPooja/image3.png"
import image4 from "../../assets/bookPooja/image4.png"
import image5 from "../../assets/bookPooja/image5.png"
import image6 from "../../assets/bookPooja/image6.png"
import image7 from "../../assets/bookPooja/image7.png"


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
    image:image1,
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
    image:image2,
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
    image:image3,
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
    image:image4,
  },
  {
    id: 'pitru-dosh',
    name: 'Pitru Dosh Puja',
    description: 'पितरों की शांति और पितृ दोष निवारण',
    duration: '2-3 hours',
    modes: ['Online', 'Home Visit'],
    whenToPerform: 'अमावस्या, श्राद्ध पक्ष',
    benefits: 'पितृ दोष दूर होना, पारिवारिक समस्याओं का समाधान',
    whoPerforms: 'कुंडली में पितृ दोष वाले लोग',
    price: 'Starting from ₹4,100',
    image:image5,
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
    image:image6,
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
    image:image7,
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
  const [selectedPuja, setSelectedPuja] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    pujaType: '',
    date: '',
    mode: '',
    message: ''
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handlePujaSelect = (puja) => {
    setSelectedPuja(puja);
    setFormData({ ...formData, pujaType: puja.name });
    setShowBookingForm(true);
    window.scrollTo({ top: document.getElementById('booking-section').offsetTop - 100, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.mobile || !formData.city || !formData.pujaType || !formData.mode) {
      alert('कृपया सभी आवश्यक जानकारी भरें');
      return;
    }
    console.log('Booking Data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setShowBookingForm(false);
      setSelectedPuja(null);
      setFormData({
        name: '',
        mobile: '',
        city: '',
        pujaType: '',
        date: '',
        mode: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <Layout>
<div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      
      {/* Hero Section */}
<div className="relative py-10 sm:py-14 md:py-16 px-4 text-white overflow-hidden
                min-h-[300px] md:min-h-[400px] flex items-center">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={banner}
      alt="Banner"
      className="w-full h-full bg-cover"
      style={{
        filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
      }}
    />

    {/* ✅ Single Professional Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/60" />

    {/* Soft premium glow (optional but clean) */}
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/10 blur-3xl opacity-50" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-400/10 blur-3xl opacity-50" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-5xl mx-auto text-center px-4 w-full">
    <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl
                   font-bold mb-4 md:mb-6 leading-tight
                   drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
      Book Authentic Puja with Experienced Acharyas
    </h1>

    <p className="text-lg sm:text-xl md:text-2xl text-orange-100
                  mb-6 font-medium drop-shadow">
      Sacred Rituals Performed as per Vedic Shastras
    </p>

    <p className="text-base sm:text-lg text-orange-50
                  mb-8 md:mb-10 max-w-3xl mx-auto opacity-90">
      Online & Home Visit Puja Services available across India
    </p>

    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      <button
        onClick={() =>
          document
            .getElementById("puja-selection")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="bg-white text-orange-600 px-6 sm:px-8 py-3 sm:py-4
                   rounded-xl font-bold hover:bg-orange-50
                   transition-all duration-300 shadow-xl
                   hover:shadow-2xl transform hover:scale-105
                   text-base sm:text-lg">
        Book Puja Now
      </button>

      <button
        className="border-2 border-white/80 text-white
                   px-6 sm:px-8 py-3 sm:py-4 rounded-xl
                   font-bold hover:bg-white/10 backdrop-blur-sm
                   transition-all duration-300 hover:border-white
                   transform hover:scale-105 text-base sm:text-lg">
        Talk to Expert
      </button>
    </div>
  </div>
</div>


      {/* How It Works Section */}
      <div className="py-10 px-4 bg-white relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/20 via-amber-50/10 to-yellow-50/5"></div>
  
  <div className="max-w-6xl mx-auto relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent mb-6">
      How It Works
    </h2>
    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10 text-base">
      Simple 5-step process to book your puja service
    </p>
    
    {/* Steps Container */}
    <div className="relative">
      {/* Connecting Line for Desktop */}
      <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-amber-200 to-orange-200"></div>
      
      {/* Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
        {/* Step 1 */}
        <div className="relative">
          <div className="flex flex-col items-center">
            {/* Step Number Circle */}
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">1</span>
              {/* Active Glow */}
              <div className="absolute inset-0 rounded-full border-2 border-orange-300 animate-ping opacity-30"></div>
            </div>
            
            {/* Step Content */}
            <div className="text-center">
              <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-1.5">Select Puja</h3>
              <p className="text-gray-600 text-sm md:text-base">अपनी पूजा चुनें</p>
              <p className="text-gray-500 text-xs mt-1">Browse our puja catalog</p>
            </div>
          </div>
          
          {/* Arrow for Mobile */}
          <div className="sm:hidden flex justify-center mt-4">
            <div className="w-8 h-8 text-orange-400 rotate-90">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Arrow for Desktop (Right) */}
          <div className="hidden md:block absolute top-8 -right-2 lg:-right-4 xl:-right-6">
            <div className="w-8 h-8 text-orange-300">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">2</span>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-1.5">Choose Date & Time</h3>
              <p className="text-gray-600 text-sm md:text-base">तारीख और समय</p>
              <p className="text-gray-500 text-xs mt-1">Pick your convenient slot</p>
            </div>
          </div>
          
          <div className="sm:hidden flex justify-center mt-4">
            <div className="w-8 h-8 text-orange-400 rotate-90">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="hidden md:block absolute top-8 -right-2 lg:-right-4 xl:-right-6">
            <div className="w-8 h-8 text-orange-300">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">3</span>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-1.5">Provide Details</h3>
              <p className="text-gray-600 text-sm md:text-base">जानकारी दें</p>
              <p className="text-gray-500 text-xs mt-1">Fill booking form</p>
            </div>
          </div>
          
          <div className="sm:hidden flex justify-center mt-4">
            <div className="w-8 h-8 text-orange-400 rotate-90">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="hidden md:block absolute top-8 -right-2 lg:-right-4 xl:-right-6">
            <div className="w-8 h-8 text-orange-300">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">4</span>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-1.5">Acharya Assigned</h3>
              <p className="text-gray-600 text-sm md:text-base">आचार्य नियुक्ति</p>
              <p className="text-gray-500 text-xs mt-1">Expert priest assigned</p>
            </div>
          </div>
          
          <div className="sm:hidden flex justify-center mt-4">
            <div className="w-8 h-8 text-orange-400 rotate-90">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="hidden md:block absolute top-8 -right-2 lg:-right-4 xl:-right-6">
            <div className="w-8 h-8 text-orange-300">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Step 5 */}
        <div className="relative">
          <div className="flex flex-col items-center">
            <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-50 to-amber-50 rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg">
              <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent">5</span>
              {/* Success Check for last step */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="font-bold text-lg md:text-xl text-gray-800 mb-1.5">Puja Performed</h3>
              <p className="text-gray-600 text-sm md:text-base">पूजा संपन्न</p>
              <p className="text-gray-500 text-xs mt-1">Receive blessings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* CTA Button */}
    {/* <div className="text-center mt-12">
      <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
        Start Your Puja Journey
      </button>
      <p className="text-gray-500 text-sm mt-3">Simple, fast, and divine experience</p>
    </div> */}
  </div>
</div>

      {/* Puja Selection Section */}
  <div id="puja-selection" className="py-10 px-4 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/40 via-yellow-50/30 to-amber-50/20"></div>
  
  {/* Floating Elements */}
  <div className="absolute top-10 left-5 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-yellow-200/10 rounded-full blur-xl"></div>
  <div className="absolute bottom-10 right-5 w-40 h-40 bg-gradient-to-br from-amber-200/20 to-orange-200/10 rounded-full blur-xl"></div>
  <div className="absolute top-1/3 right-10 w-20 h-20 bg-gradient-to-br from-yellow-200/15 to-orange-200/10 rounded-full blur-lg"></div>
  <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-gradient-to-br from-amber-200/15 to-yellow-200/10 rounded-full blur-lg"></div>
  
  {/* Subtle Dot Pattern */}
  <div className="absolute inset-0 opacity-[0.03]" style={{
    backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 1px)`,
    backgroundSize: '30px 30px'
  }}></div>

  <div className="max-w-6xl mx-auto relative z-10">
    <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-600 via-amber-500 to-orange-600 bg-clip-text text-transparent mb-8 relative">
      Select Your Puja Service
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"></div>
    </h2>
    
    {/* Cards Container with Max Height and Scroll */}
    <div className="relative">
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-h-[700px] overflow-y-auto pr-2"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#fb923c #fef3c7'
        }}
      >
       {pujaServices.map((puja) => (
  <div 
    key={puja.id}
    className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-t-4 border-orange-500 transition-all duration-300 ease-out transform hover:scale-[1.03] hover:shadow-2xl hover:border-red-500 hover:z-10 relative group"
    style={{
      backgroundImage: `url('${puja.image}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
  >
    {/* Background Overlay for Readability */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70 rounded-xl"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent rounded-xl"></div>
    
    {/* Card Top Gradient Accent */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 z-10"></div>
    
    <div className="p-6 relative z-10">
      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">{puja.name}</h3>
      <p className="text-gray-600 text-sm mb-4 group-hover:text-gray-800 transition-colors duration-300">{puja.description}</p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
          <Clock className="w-4 h-4 text-orange-600 group-hover:text-red-500 transition-colors duration-300" />
          <span>Duration: {puja.duration}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <div className="flex gap-1 flex-wrap">
            {puja.modes.includes('Online') && (
              <span className="bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 mb-1 group-hover:from-blue-100 group-hover:to-blue-200 group-hover:text-blue-800 transition-all duration-300 shadow-sm">
                <Video className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                Online
              </span>
            )}
            {puja.modes.includes('Home Visit') && (
              <span className="bg-gradient-to-r from-green-50 to-green-100 text-green-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 mb-1 group-hover:from-green-100 group-hover:to-green-200 group-hover:text-green-800 transition-all duration-300 shadow-sm">
                <Home className="w-3.5 h-3.5 group-hover:scale-110 transition-transform duration-300" />
                Home Visit
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 pt-4 mb-4 group-hover:border-orange-100 transition-colors duration-300">
        <p className="text-orange-600 font-bold text-lg group-hover:text-red-600 transition-colors duration-300">
          <span className="text-sm text-gray-500 font-normal">Starting from</span> {puja.price}
        </p>
      </div>

      <button
        onClick={() => handlePujaSelect(puja)}
        className="w-full bg-gradient-to-r from-orange-500 to-amber-600 text-white font-bold py-3.5 rounded-lg hover:from-orange-600 hover:to-red-600 hover:text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg group-hover:shadow-orange-200"
      >
        Book This Puja
      </button>
    </div>
    
    {/* Hover Glow Effect */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-400/0 via-orange-300/0 to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none z-0"></div>
  </div>
))}
      </div>
      
      {/* Scroll Indicator - Only shows when there are more than 6 cards */}
      {pujaServices.length > 6 && (
        <div className="mt-4 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <span className="animate-bounce">↓</span>
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent font-medium">
              Scroll for more puja services
            </span>
            <span className="animate-bounce">↓</span>
          </div>
        </div>
      )}
    </div>
    
    {/* Total Services Count */}
    <div className="text-center mt-6 pt-4 border-t border-orange-100">
      <p className="text-gray-600 text-sm">
        Showing <span className="font-semibold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">{Math.min(pujaServices.length, 6)}</span> of <span className="font-semibold bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent">{pujaServices.length}</span> puja services
      </p>
    </div>
  </div>
</div>

<style jsx>{`
  /* Custom Scrollbar Styling */
  .overflow-y-auto::-webkit-scrollbar {
    width: 8px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-track {
    background: linear-gradient(180deg, #fef3c7, #ffedd5);
    border-radius: 4px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #fb923c, #f59e0b, #ea580c);
    border-radius: 4px;
  }
  
  .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #f97316, #eab308, #c2410c);
  }
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
  
  .animate-bounce {
    animation: bounce 1.5s infinite;
  }
`}</style>

     

      {/* Booking Form Section */}
      {showBookingForm && (
  <section id="booking-section" className="py-12 px-4 bg-white">
    <div className="max-w-6xl mx-auto">

      {/* GRID WRAPPER */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* ================= LEFT SIDE ================= */}
        {/* WHY HAVAN & YAGYA */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-orange-100 lg:sticky lg:top-24">
          <h2 className="text-2xl font-bold text-gray-800 mb-5">
            Why Havan & Yagya?
          </h2>

          <div className="space-y-5 text-sm sm:text-base">

            <div>
              <h4 className="font-semibold text-orange-600 mb-1">
                कब करनी चाहिए?
              </h4>
              <p className="text-gray-700">
                किसी भी शुभ अवसर पर
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 mb-1">
                कौन लोग करवाते हैं?
              </h4>
              <p className="text-gray-700">
                सभी भक्तगण
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-orange-600 mb-1">
                क्या लाभ होते हैं?
              </h4>
              <p className="text-gray-700">
                वातावरण शुद्धि, नकारात्मक ऊर्जा का नाश, इच्छापूर्ति
              </p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        {/* BOOKING FORM */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-xl p-6 sm:p-8 border-2 border-orange-200">

          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Complete Your Booking
          </h2>

          {submitted ? (
            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center">
              <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Booking Confirmed!
              </h3>
              <p className="text-green-700">
                आपकी पूजा बुकिंग सफलतापूर्वक हो गई है
              </p>
            </div>
          ) : (
            <div className="space-y-5">

              {/* Full Name */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  placeholder="आपका पूरा नाम"
                />
              </div>

              {/* Mobile + City */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="10 digit mobile"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    City / Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="आपका शहर"
                  />
                </div>
              </div>

              {/* Puja Type */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Puja Type <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="pujaType"
                  value={formData.pujaType}
                  readOnly
                  className="w-full px-4 py-3 border-2 border-orange-300 rounded-lg bg-orange-50 font-semibold text-orange-800"
                />
              </div>

              {/* Date + Mode */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Mode <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="mode"
                    value={formData.mode}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select Mode</option>
                    {selectedPuja.modes.map((mode) => (
                      <option key={mode} value={mode}>
                        {mode}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 resize-none"
                  placeholder="कोई विशेष जानकारी..."
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-lg shadow-lg"
                >
                  Confirm Puja Booking
                </button>

                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg"
                >
                  Request Callback
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  </section>
)}


      {/* Puja Samagri Section */}
      <div className="py-10 px-4 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-8">
            Puja Samagri - We Take Care of Everything
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-5">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Samagri Included</h3>
              <p className="text-gray-600 text-sm">सभी आवश्यक सामग्री शामिल</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Provided by Acharya</h3>
              <p className="text-gray-600 text-sm">आचार्य द्वारा व्यवस्था</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Home Delivery</h3>
              <p className="text-gray-600 text-sm">घर पर डिलीवरी उपलब्ध</p>
            </div>
          </div>
          <p className="mt-8 text-gray-700 text-lg font-semibold">
            All required puja samagri will be arranged as per Vedic guidelines
          </p>
        </div>
      </div>

      {/* Our Acharyas Section */}
      <div className="py-10 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-4">
            Our Experienced Acharyas
          </h2>
          <p className="text-center text-gray-600 mb-10 text-lg">
            Learned in Vedas, Puranas & Traditional Rituals
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {acharyas.map((acharya, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg shadow-lg p-3 text-center border-2 border-orange-200">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">{acharya.name}</h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-orange-600" />
                  <span className="text-gray-700 font-semibold">{acharya.experience}</span>
                </div>
                <p className="text-gray-600 mb-3">{acharya.expertise}</p>
                <div className="flex items-center justify-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-gray-800">{acharya.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-8 sm:py-10 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-extrabold text-center 
      bg-gradient-to-r from-orange-600 to-amber-500 
      bg-clip-text text-transparent mb-12">
      Frequently Asked Questions
    </h2>

    {/* FAQ Grid */}
    <div className="grid gap-4 md:gap-6">

      {/* FAQ Card */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-7 border border-orange-100">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">
          Online puja kaise hoti hai?
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Online puja में आचार्य जी video call के माध्यम से पूजा करते हैं। आप अपने घर से ही देख सकते हैं और पूजा में शामिल हो सकते हैं। Sankalp आपके नाम से लिया जाता है।
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-7 border border-orange-100">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">
          Home visit puja में क्या include होता है?
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Home visit में आचार्य जी आपके घर आकर पूजा करते हैं। सभी आवश्यक सामग्री, मंत्र उच्चारण, हवन (यदि हो), और पूजा की पूर्ण विधि शामिल है।
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-7 border border-orange-100">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">
          Kitne din pehle book karna chahiye?
        </h3>
        <p className="text-gray-600 leading-relaxed">
          सामान्य पूजा के लिए 2-3 दिन पहले बुकिंग करें। विशेष पूजा या शादी जैसे बड़े आयोजनों के लिए 7-10 दिन पहले बुक करना बेहतर है।
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 sm:p-7 border border-orange-100">
        <h3 className="font-bold text-lg sm:text-xl text-gray-800 mb-3">
          Puja के बाद क्या follow करना होता है?
        </h3>
        <p className="text-gray-600 leading-relaxed">
          आचार्य जी पूजा के बाद आपको प्रसाद और विशेष निर्देश देंगे। कुछ पूजाओं में post-puja rituals या niyam पालन की सलाह दी जाती है।
        </p>
      </div>

    </div>
  </div>
</div>

      {/* Final CTA Section */}
      <div className="bg-gradient-to-r from-orange-200 to-amber-300 text-black py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Sacred Ritual with Faith & Authenticity
          </h2>
          <p className="text-xl text-orange-700 mb-8">
            Experienced Acharyas | Vedic Traditions | Pan-India Service
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => document.getElementById('puja-selection').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-600 px-10 py-4 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-xl text-lg"
            >
              Book Puja Now
            </button>
            <button className="bg-green-600 text-white px-10 py-4 rounded-lg font-bold hover:bg-green-700 transition-all shadow-xl flex items-center gap-2 text-lg">
              <MessageCircle className="w-6 h-6" />
              Talk to Expert
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
    );
}