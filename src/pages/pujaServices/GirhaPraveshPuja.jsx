import React, { useState } from 'react';
import { Home, Clock, CheckCircle, Star, Phone, Calendar, Users, Shield, ArrowRight, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import banner from "../../assets/banners/bannerGirhaPage.png"

export default function GrihaPraveshPuja() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showMuhuratModal, setShowMuhuratModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    preferredDate: '',
    pujaType: 'home',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    alert('Booking request submitted! Our team will contact you soon.');
    setShowBookingModal(false);
    setFormData({
      name: '', phone: '', email: '', city: '', preferredDate: '', pujaType: 'home', message: ''
    });
  };

  const handleMuhuratSubmit = (e) => {
    e.preventDefault();
    alert('Muhurat consultation request submitted! Our Acharya will contact you soon.');
    setShowMuhuratModal(false);
  };

  const BookingModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-orange-600">Book Griha Pravesh Puja</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your city"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Puja Mode</label>
                <select
                  name="pujaType"
                  value={formData.pujaType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="home">Home Visit Puja</option>
                  <option value="online">Online Puja (Live Video)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Any special requirements or questions..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  const MuhuratModal = ({ show, onClose }) => {
    if (!show) return null;
    const [muhuratData, setMuhuratData] = useState({
      name: '',
      phone: '',
      dob: '',
      time: '',
      place: ''
    });

    const handleMuhuratChange = (e) => {
      setMuhuratData({ ...muhuratData, [e.target.name]: e.target.value });
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-orange-600">Muhurat Consultation</h3>
              <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleMuhuratSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={muhuratData.name}
                  onChange={handleMuhuratChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={muhuratData.phone}
                  onChange={handleMuhuratChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  value={muhuratData.dob}
                  onChange={handleMuhuratChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Time of Birth (If known)</label>
                <input
                  type="time"
                  name="time"
                  value={muhuratData.time}
                  onChange={handleMuhuratChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Place of Birth</label>
                <input
                  type="text"
                  name="place"
                  value={muhuratData.place}
                  onChange={handleMuhuratChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="City, State"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors shadow-md hover:shadow-lg"
              >
                Get Muhurat Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
        <div className="min-h-screen bg-white">
      {/* Sticky Booking Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setShowBookingModal(true)}
          className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-700 transition-all transform hover:scale-105 flex items-center gap-2"
        >
          <Calendar size={20} />
          Book Puja Now
        </button>
      </div>

      {/* Hero Section */}
   <section className="relative py-32 px-4 text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={banner}
      alt="Griha Pravesh Puja"
      className="w-full h-full bg-cover"
      style={{
        filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
      }}
    />

    {/* ✅ Single Professional Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b
                    from-black/65 via-black/45 to-black/65" />

    {/* Soft brand glow (same system as other banners) */}
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-500/15 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-yellow-400/10 blur-3xl" />
  </div>

  {/* Content (UNCHANGED) */}
  <div className="max-w-4xl mx-auto text-center relative z-10">
    <h1 className="text-4xl md:text-5xl font-bold mb-4
                   drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
      Griha Pravesh Puja
    </h1>

    <p className="text-xl md:text-2xl mb-8 text-orange-100
                  drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
      Shanti, Sukh aur Samriddhi ke liye Vaidik Vidhi se Puja
    </p>

    <button
      onClick={() => setShowBookingModal(true)}
      className="bg-white text-orange-600 px-8 py-4 rounded-lg
                 font-bold text-lg hover:bg-orange-50 transition-all
                 shadow-xl hover:shadow-2xl inline-flex items-center gap-2
                 transform hover:scale-105"
    >
      Book Griha Pravesh Puja
      <ArrowRight size={20} />
    </button>
  </div>

</section>


      {/* What is Griha Pravesh Puja */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What is Griha Pravesh Puja?</h2>
          <div className="bg-orange-50 p-8 rounded-lg">
            <p className="text-gray-800 text-lg mb-6 leading-relaxed">
              Griha Pravesh Puja ek mahatvapurna vaidik vidhi hai jo naye ghar mein pehli baar pravesh karne se pehle ki jaati hai. 
              Yeh puja ghar ko shuddh karke positive energy aur divine blessings ko invite karti hai.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Naye ghar mein construction ke dauran bani negative energies ko door karti hai</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Vastu dosh nivaran aur ghar ki suraksha ke liye zaroori</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Parivar mein sukh, shanti, aur samriddhi laane ke liye</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Devtaon ka aashirwad praapt karne ke liye</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Griha Pravesh */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Types of Griha Pravesh Puja</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Home className="text-blue-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-blue-600 mb-3 text-center">Apurna Griha Pravesh</h3>
              <div className="mb-3">
                <p className="font-semibold text-gray-700">When to perform:</p>
                <p className="text-gray-600">Jab ghar poori tarah complete na ho</p>
              </div>
              <p className="text-gray-700">
                Construction ke dauran ya jab ghar abhi mukammal nahi hua ho, tab yeh vidhi ki jaati hai. 
                Is puja ke baad aap ghar mein temporarily reh sakte hain.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-2 border-orange-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              </div>
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="text-orange-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-orange-600 mb-3 text-center">Sapurna Griha Pravesh</h3>
              <div className="mb-3">
                <p className="font-semibold text-gray-700">When to perform:</p>
                <p className="text-gray-600">Jab ghar fully ready ho</p>
              </div>
              <p className="text-gray-700">
                Jab ghar ka construction pura ho gaya ho aur sabhi kaam complete ho, tab yeh mukhya Griha Pravesh puja ki jaati hai. 
                Yeh sabse important aur comprehensive puja hoti hai.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto">
                <ArrowRight className="text-green-600" size={28} />
              </div>
              <h3 className="text-xl font-bold text-green-600 mb-3 text-center">Dwandwah Griha Pravesh</h3>
              <div className="mb-3">
                <p className="font-semibold text-gray-700">When to perform:</p>
                <p className="text-gray-600">Purana ghar chhod kar naya ghar</p>
              </div>
              <p className="text-gray-700">
                Jab aap apna purana ghar chhod kar naye ghar mein shift ho rahe ho, tab yeh puja ki jaati hai. 
                Yeh transition ko smooth aur shubh banata hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Shubh Muhurat */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <Clock className="w-10 h-10 text-orange-600 mr-4" />
              <h2 className="text-3xl font-bold text-gray-900">Shubh Muhurat & Timing</h2>
            </div>
            <button
              onClick={() => setShowMuhuratModal(true)}
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Get Muhurat Consultation
            </button>
          </div>
          
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-lg border-l-4 border-orange-600">
            <p className="text-gray-800 text-lg mb-6">
              Griha Pravesh ke liye sahi muhurat ka chayan bahut hi mahatvapurna hai. Hamare anubhavi Acharya aapki kundli, 
              nakshatra aur graha sthiti dekhkar sabse shubh muhurat nirdharit karte hain.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Kundli Analysis</h4>
                <p className="text-gray-600 text-sm">Aapki date of birth aur nakshatra ke anusaar muhurat</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Tithi Check</h4>
                <p className="text-gray-600 text-sm">Shubh tithi aur nakshatra ka nirdharan</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Grah Dosh Avoid</h4>
                <p className="text-gray-600 text-sm">Grah dosh avoid karke sabse suitable time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Puja Samagri */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Puja Samagri Arrangement</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="flex items-start mb-6">
              <CheckCircle className="w-8 h-8 text-green-600 mr-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete Samagri Arrangement</h3>
                <p className="text-gray-700">
                  Acharya Ji Online ki taraf se complete puja samagri ki vyavastha ki jaati hai. Aapko kisi bhi cheez ki chinta karne ki zaroorat nahi hai.
                </p>
              </div>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
              <h4 className="font-bold text-gray-900 mb-4 text-center">Complete Puja Samagri List</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Kalash, nariyal, supari</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Hawan samagri aur samidha</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Agarbatti, dhoop, kapoor</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Moli, chunri, phool mala</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Gangajal, panchamrit</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Fruits aur mishtan for prasad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Puja Process */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Puja Process - Step by Step</h2>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Ganesh Puja', desc: 'Vighn vinashak Ganesh ji ki aradhana' },
              { step: 2, title: 'Kalash Sthapana', desc: 'Mangal kalash ki sthapana' },
              { step: 3, title: 'Navgraha Shanti', desc: 'Navgraha dosh nivaran' },
              { step: 4, title: 'Havan', desc: 'Vaidik havan vidhi' },
              { step: 5, title: 'Vastu Shanti', desc: 'Ghar ki Vastu shanti' },
              { step: 6, title: 'Aarti & Prasad', desc: 'Samapan aarti aur prasad vitaran' }
            ].map((item) => (
              <div key={item.step} className="flex items-start bg-orange-50 p-6 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl mr-6 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mode of Puja */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Mode of Puja</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500">
              <Home className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Home Visit Puja</h3>
              <p className="text-gray-700 mb-4">
                Hamare anubhavi Acharya aapke ghar aakar puja karwate hain
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Pan-India availability</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complete puja samagri arrangement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Scheduled timing pe punctual arrival</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Personal guidance and blessings</span>
                </li>
              </ul>
              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
              >
                Book Home Visit Puja
              </button>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-blue-500">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Online Puja (Live Video)</h3>
              <p className="text-gray-700 mb-4">
                Live video call ke through aap puja mein participate kar sakte hain
              </p>
              <ul className="space-y-2 text-gray-600 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>NRI clients ke liye perfect option</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Real-time puja ke saath connection</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Step-by-step guidance available</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Recording available for future reference</span>
                </li>
              </ul>
              <button
                onClick={() => setShowBookingModal(true)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Book Online Puja
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="py-16 px-4 bg-orange-600 text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Why Book With Acharya Ji Online?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Experienced Vedic Acharyas</h4>
                <p className="text-orange-100">10+ years experience ke qualified pandits</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Shastra-based Vidhi</h4>
                <p className="text-orange-100">Poori tarah se vedic scriptures ke anusaar</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Transparent Pricing</h4>
                <p className="text-orange-100">Koi hidden charges nahi, clear pricing</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">On-time & Professional</h4>
                <p className="text-orange-100">Samay ka palan aur professional conduct</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Pan-India Service</h4>
                <p className="text-orange-100">Across India aur NRI clients ke liye available</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Thousands of Happy Families</h4>
                <p className="text-orange-100">5000+ successful Griha Pravesh pujas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rajesh Sharma', location: 'Delhi', text: 'Hamare Griha Pravesh ke baad se ghar mein positive energy aur shanti mehsoos ho rahi hai. Acharya ji ne bahut hi sahi tarike se puja karwayi.' },
              { name: 'Priya Mehta', location: 'Mumbai', text: 'NRI hone ke karan humne online puja karwayi. Bahut hi professional aur systematic tarike se sabkuch hua. Highly recommended!' },
              { name: 'Amit Verma', location: 'Bangalore', text: 'Muhurat se lekar puja samagri tak sab kuch Acharya Ji Online ne sambhala. Stress-free experience raha.' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-3">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: 'Griha Pravesh kab nahi karna chahiye?', a: 'Kharamaas, pitru paksha, aur ashubh nakshatra mein Griha Pravesh nahi karna chahiye. Hamare Acharya aapki kundli dekh kar shubh muhurat suggest karte hain.' },
              { q: 'Kya raat mein Griha Pravesh ho sakti hai?', a: 'Nahi, Griha Pravesh din ke samay, suryoday ke baad aur suryast se pehle karna shubh hota hai.' },
              { q: 'Saturday ya Tuesday ko Griha Pravesh ho sakti hai?', a: 'Haan, agar tithi aur nakshatra shubh ho to Saturday ya Tuesday ko bhi Griha Pravesh kiya ja sakta hai. Muhurat sabse important hai.' },
              { q: 'Puja ka duration kitna hota hai?', a: 'Sampurna Griha Pravesh Puja ka duration typically 2 se 3 ghante ka hota hai, vidhi ke anusaar.' },
              { q: 'Kya online puja bhi effective hoti hai?', a: 'Haan, bilkul. Online puja mein bhi same vaidik vidhi follow ki jaati hai. Live video call ke through aap puja mein participate kar sakte hain.' },
              { q: 'Ghar mein koi special arrangement chahiye?', a: 'Ek saaf aur pavitra jagah jahan hawan kiya ja sake, aur family members puja mein shamil ho sakein. Baki sab kuch hum sambhaltay hain.' }
            ].map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-lg shadow-md group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                  {faq.q}
                  <span className="text-orange-600 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-gray-700 mt-4 pl-4 border-l-4 border-orange-200">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Apne Naye Ghar Mein Shubh Aarambh Karein</h2>
          <p className="text-xl mb-8 text-orange-100">
            Vaidik vidhi se Griha Pravesh Puja book karein aur divine blessings paayen
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowBookingModal(true)}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition shadow-lg"
            >
              Book Griha Pravesh Puja
            </button>
            <a
              href="tel:+919876543210"
              className="bg-orange-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-900 transition shadow-lg flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Talk to Acharya
            </a>
            <button
              onClick={() => setShowMuhuratModal(true)}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition shadow-lg flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Get Muhurat
            </button>
          </div>
        </div>
      </section>

      {/* Modals */}
      <BookingModal show={showBookingModal} onClose={() => setShowBookingModal(false)} />
      <MuhuratModal show={showMuhuratModal} onClose={() => setShowMuhuratModal(false)} />
    </div>
    </Layout>
  );
}