import React, { useState } from 'react';
import { Phone, Mail, MessageCircle, MapPin, Clock, Globe, Send, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import banner from "../assets/banners/bannerContact2.png"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic yahan implement karoge
    console.log('Form Data:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        mobile: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
   <Layout>
     <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
      
      {/* Hero Section */}
  <div className="relative py-12 sm:py-14 md:py-28 px-4 text-white overflow-hidden">

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

    {/* ✅ SINGLE PROFESSIONAL OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

    {/* Soft depth lights (no image blur) */}
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl opacity-50" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl opacity-50" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
      Get in Touch with Acharya Ji Online
    </h1>

    <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto drop-shadow">
      Puja booking, astrology consultation, kundli queries, vastu guidance
      ya general questions — hum aapki madad ke liye yahan hain
    </p>
  </div>
</div>



      {/* Quick Contact Options */}
      <div className="max-w-6xl mx-auto px-4 mt-4 mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-lg shadow-lg px-4 py-3 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
            <Phone className="w-8 h-8 text-orange-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Call / WhatsApp</h3>
            <p className="text-gray-600 text-sm mb-3">Talk to our support team or astrologer</p>
            <a href="tel:+919876543210" className="text-orange-600 font-semibold hover:underline">
              +91 98765 43210
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-lg px-4 py-3 border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
            <MessageCircle className="w-8 h-8 text-amber-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Talk to Astrologer</h3>
            <p className="text-gray-600 text-sm mb-3">Instant or scheduled consultation</p>
            <button className="text-amber-600 font-semibold hover:underline">
              Book Now
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg px-4 py-3 border-t-4 border-red-500 hover:shadow-xl transition-shadow">
            <div className="w-8 h-8 text-red-600 mb-3 font-bold text-2xl">ॐ</div>
            <h3 className="font-bold text-lg mb-2">Book Puja</h3>
            <p className="text-gray-600 text-sm mb-3">Online or home-visit puja booking</p>
            <button className="text-red-600 font-semibold hover:underline">
              Book Puja
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-lg px-4 py-3 border-t-4 border-blue-500 hover:shadow-xl transition-shadow">
            <Mail className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="font-bold text-lg mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm mb-3">Detailed queries & documents</p>
            <a href="mailto:support@acharyajionline.com" className="text-blue-600 font-semibold hover:underline break-all">
              support@acharyajionline.com
            </a>
          </div>

        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Your Query</h2>
              
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Query Submitted Successfully!</h3>
                  <p className="text-green-700">Hum jaldi hi aapko contact karenge</p>
                </div>
              ) : (
                <div className="space-y-5">
                  
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                      placeholder="Enter your full name"
                    />
                  </div>

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
                        pattern="[0-9]{10}"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        placeholder="10 digit mobile number"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        Email (Optional)
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Subject <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                    >
                      <option value="">Select a subject</option>
                      <option value="puja">Puja Booking</option>
                      <option value="astrology">Astrology Consultation</option>
                      <option value="kundli">Kundli / Dosh</option>
                      <option value="vastu">Vastu Healing</option>
                      <option value="general">General Query</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition resize-none"
                      placeholder="Apni query detail mein likhein..."
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-gray-600 to-amber-600 text-white font-bold py-4 rounded-lg hover:from-orange-700 hover:to-amber-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Request a Callback
                  </button>

                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Service Quick Links */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Service Links</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-orange-500 pl-4 py-2">
                  <p className="text-sm text-gray-600">Looking for Puja Services?</p>
                  <a href="#" className="text-orange-600 font-semibold hover:underline">Book Puja</a>
                </div>
                <div className="border-l-4 border-amber-500 pl-4 py-2">
                  <p className="text-sm text-gray-600">Want Astrology Consultation?</p>
                  <a href="#" className="text-amber-600 font-semibold hover:underline">Talk to Astrologer</a>
                </div>
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="text-sm text-gray-600">Need Kundli Matching / Dosh?</p>
                  <a href="#" className="text-red-600 font-semibold hover:underline">Go to Kundli</a>
                </div>
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="text-sm text-gray-600">Interested in Vastu / Healing?</p>
                  <a href="#" className="text-blue-600 font-semibold hover:underline">Explore Services</a>
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Support Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Location</p>
                    <p className="text-sm text-gray-600">Delhi NCR, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Support Hours</p>
                    <p className="text-sm text-gray-600">Monday - Sunday</p>
                    <p className="text-sm text-gray-600">8 AM - 10 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-gray-800">Service Area</p>
                    <p className="text-sm text-gray-600">Pan-India & International (Online)</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg border-2 border-orange-200 p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-3">Our Commitment</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Your details are kept 100% confidential</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>No spam calls</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Authentic guidance by experienced Acharyas</p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <p>Transparent pricing & processes</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            
            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">How soon will I get a callback?</h3>
              <p className="text-gray-600">Hum 24 hours ke andar aapko contact karenge. Urgent cases ke liye directly call ya WhatsApp karein.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Is online puja as effective?</h3>
              <p className="text-gray-600">Ji haan, hamare experienced Acharyas Vedic rituals ko poori shraddha aur accuracy ke saath perform karte hain. Aapka sankalp aur vishwas sabse important hai.</p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">How are astrologers verified?</h3>
              <p className="text-gray-600">Hamare sabhi astrologers experienced hain aur verified certifications ke saath. Unke profile check kar sakte hain.</p>
            </div>

            <div className="pb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-2">Can I book puja for parents / family?</h3>
              <p className="text-gray-600">Bilkul! Aap apne parivar ke kisi bhi sadasya ke liye puja book kar sakte hain. Bas unki details provide karni hogi.</p>
            </div>

          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-orange-200 to-amber-300 text-black py-10 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let Us Help You Find Clarity, Peace & Divine Guidance
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition-all shadow-lg">
              Book Puja
            </button>
            <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-bold hover:bg-amber-50 transition-all shadow-lg">
              Talk to Astrologer
            </button>
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-green-700 transition-all shadow-lg flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </div>

    </div>
   </Layout>
  );
}