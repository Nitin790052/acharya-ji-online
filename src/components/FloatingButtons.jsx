import { useState } from "react";
import { Link } from "react-router-dom";
import { X, Phone, Mail, MessageCircle, Facebook, Youtube, Instagram, Bot, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [poojaOpen, setPoojaOpen] = useState(false);
  const [astrologerOpen, setAstrologerOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <>
      {/* LEFT SIDE - Book Pooja Button */}
      <div className="hidden lg:block fixed left-0 top-[24%] z-[999]">
        <motion.button
          onClick={() => setPoojaOpen(true)}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden"
        >
          <div className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white pl-1 pr-1 py-2 rounded-r-2xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 via-orange-400/50 to-orange-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            <div className="relative flex flex-col items-center gap-2">
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 30px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white/20 p-2 rounded-xl backdrop-blur-sm border border-white/30"
              >
                <Calendar className="w-3 h-3 drop-shadow-lg" />
              </motion.div>
              <div 
                className="text-[11px] font-extrabold tracking-[0.15em] uppercase leading-tight"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                Book Pooja
              </div>
            </div>
            
            <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse" />
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-gray-700">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-orange-400" />
                <div>
                  <div className="text-sm font-bold">Book Pooja Services</div>
                  <div className="text-xs text-gray-400">Expert pandits available</div>
                </div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-3 h-3 bg-gray-900 rotate-45 border-l border-b border-gray-700" />
            </div>
          </div>
        </motion.button>
      </div>

      {/* LEFT SIDE - Call to Astrologer Button */}
      <div className="hidden lg:block fixed left-0 top-[48%] z-[999]">
        <motion.button
          onClick={() => setAstrologerOpen(true)}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.98 }}
          className="group relative overflow-hidden"
        >
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 text-white pl-1.5 pr-1.5 py-2 rounded-r-2xl shadow-2xl hover:shadow-purple-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/50 to-purple-400/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            <div className="relative flex flex-col items-center gap-1.5">
              <motion.div 
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(255,255,255,0.3)",
                    "0 0 30px rgba(255,255,255,0.5)",
                    "0 0 20px rgba(255,255,255,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="bg-white/20 p-1.5 rounded-xl backdrop-blur-sm border border-white/30"
              >
                <Phone className="w-3 h-3 drop-shadow-lg" />
              </motion.div>
              <div 
                className="text-[10px] font-extrabold tracking-[0.15em] uppercase leading-tight"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
                Call Astrologer
              </div>
            </div>
            
            <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse" />
            <div className="absolute bottom-2 right-2 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-gray-700">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="text-sm font-bold">Talk to Astrologer</div>
                  <div className="text-xs text-gray-400">Get instant guidance</div>
                </div>
              </div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-3 h-3 bg-gray-900 rotate-45 border-l border-b border-gray-700" />
            </div>
          </div>
        </motion.button>
      </div>

      {/* LEFT BOTTOM - Email & WhatsApp */}
     // LEFT BOTTOM - Email & WhatsApp section mein yeh add karein:
<div className="hidden lg:flex fixed left-4 bottom-6 z-[999] flex-col gap-3">
  {/* Email Button */}
  <motion.a
    href="mailto:contact@acharyajionline.com"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.95 }}
    className="relative bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white p-4 rounded-full shadow-xl hover:shadow-blue-500/50 transition-all duration-300 group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    <Mail className="w-5 h-5 relative z-10 drop-shadow-lg" />
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute inset-0 border-2 border-blue-400 rounded-full"
    />
    
    <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-gray-700">
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-blue-400" />
          <span className="text-sm font-bold">Email Us</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-3 h-3 bg-gray-900 rotate-45 border-l border-b border-gray-700" />
      </div>
    </div>
  </motion.a>

  {/* WhatsApp Button with Enhanced Design */}
  <motion.a
    href="https://wa.me/919876543210?text=Hello%20Acharya%20Ji%20Online%2C%20I%20need%20assistance%20with%20spiritual%20services"
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, rotate: -5 }}
    whileTap={{ scale: 0.95 }}
    className="relative bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-green-500/50 transition-all duration-300 group overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    
    {/* WhatsApp Icon */}
    <div className="relative z-10">
      <svg className="w-5 h-5 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </div>
    
    <motion.div
      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
      className="absolute inset-0 border-2 border-green-400 rounded-full"
    />
    
    {/* WhatsApp Pulse Animation */}
    <motion.div
      animate={{ scale: [1, 2, 1], opacity: [0.3, 0, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      className="absolute inset-0 bg-green-500 rounded-full"
    />
    
    {/* Hover Tooltip */}
    <div className="absolute left-full ml-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
      <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-gray-700">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-sm font-bold">WhatsApp Us</span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-3 h-3 bg-gray-900 rotate-45 border-l border-b border-gray-700" />
      </div>
    </div>
    
    {/* Online Status Dot */}
    <div className="absolute top-2 right-2 w-2 h-2 bg-green-300 rounded-full z-20">
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="w-full h-full bg-green-300 rounded-full"
      />
    </div>
  </motion.a>
</div>

      {/* RIGHT SIDE - Social Media */}
      <div className="hidden lg:flex fixed right-4 bottom-64 z-[999] flex-col gap-3">
        <motion.a
          href="https://facebook.com/acharyajionline"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white p-3.5 rounded-full shadow-xl hover:shadow-blue-500/50 transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <Facebook className="w-5 h-5 relative z-10 drop-shadow-lg" />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-blue-400 rounded-full"
          />
          
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-gray-700">
              <div className="flex items-center gap-2">
                <Facebook className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-sm font-bold">Facebook</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 bg-gray-900 rotate-45 border-r border-t border-gray-700" />
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://youtube.com/@acharyajionline"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white p-3.5 rounded-full shadow-xl hover:shadow-red-500/50 transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <Youtube className="w-5 h-5 relative z-10 drop-shadow-lg" />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            className="absolute inset-0 border-2 border-red-400 rounded-full"
          />
          
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-gray-700">
              <div className="flex items-center gap-2">
                <Youtube className="w-3.5 h-3.5 text-red-400" />
                <span className="text-sm font-bold">YouTube</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 bg-gray-900 rotate-45 border-r border-t border-gray-700" />
            </div>
          </div>
        </motion.a>

        <motion.a
          href="https://instagram.com/acharyajionline"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white p-3.5 rounded-full shadow-xl hover:shadow-pink-500/50 transition-all duration-300 group overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          <Instagram className="w-5 h-5 relative z-10 drop-shadow-lg" />
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            className="absolute inset-0 border-2 border-pink-400 rounded-full"
          />
          
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-2.5 rounded-xl shadow-2xl border border-gray-700">
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-pink-400" />
                <span className="text-sm font-bold">Instagram</span>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 bg-gray-900 rotate-45 border-r border-t border-gray-700" />
            </div>
          </div>
        </motion.a>
      </div>

      {/* RIGHT BOTTOM - Chatbot */}
      <div className="fixed right-5 bottom-5 z-[999]">
        <motion.button
          onClick={() => setChatbotOpen(true)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="relative bg-gradient-to-br from-orange-500 via-red-500 to-red-600 hover:from-orange-400 hover:via-red-400 hover:to-red-500 text-white p-5 rounded-full shadow-2xl transition-all duration-300 group overflow-hidden"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          </motion.div>
          
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.8, 0, 0.8] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 border-2 border-orange-300 rounded-full"
          />
          <motion.div
            animate={{ scale: [1, 2, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            className="absolute inset-0 border-2 border-red-300 rounded-full"
          />
          
          <Bot className="w-7 h-7 relative z-10 drop-shadow-2xl" />
          
          <div className="absolute w-4 h-4 bg-green-400 rounded-full -top-0.5 -right-0.5 border-3 border-white z-20">
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-full h-full bg-green-400 rounded-full"
            />
          </div>
          
          <div className="absolute right-full mr-6 top-1/2 -translate-y-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
            <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-5 py-3 rounded-xl shadow-2xl border border-gray-700">
              <div className="flex items-center gap-3">
                <Bot className="w-5 h-5 text-orange-400" />
                <div>
                  <div className="text-sm font-bold flex items-center gap-2">
                    Chat with us! 
                    <span className="text-lg">💬</span>
                  </div>
                  <div className="text-xs text-gray-400">Available 24/7</div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-3 h-3 bg-gray-900 rotate-45 border-r border-t border-gray-700" />
            </div>
          </div>
        </motion.button>
      </div>

      {/* Book Pooja Sidebar */}
      <AnimatePresence>
        {poojaOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setPoojaOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[998]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-full max-w-[440px] bg-gradient-to-b from-white to-orange-50/30 shadow-2xl z-[999] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 px-6 py-6 text-white shadow-lg z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-extrabold mb-1 flex items-center gap-2">
                      <Calendar className="w-6 h-6" />
                      Book Pooja Services
                    </h2>
                    <p className="text-sm text-orange-50 font-medium">Complete your spiritual rituals with expert pandits</p>
                  </div>
                  <button 
                    onClick={() => setPoojaOpen(false)}
                    className="hover:bg-white/20 p-2.5 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                {[
                  { name: 'Griha Pravesh Puja', desc: 'House warming ceremony', icon: '🏠' },
                  { name: 'Satyanarayan Katha', desc: 'Lord Vishnu worship', icon: '🙏' },
                  { name: 'Rudrabhishek', desc: 'Lord Shiva abhishekam', icon: '🕉️' },
                  { name: 'Navgraha Shanti Puja', desc: 'Planetary peace ritual', icon: '🪐' },
                  { name: 'Marriage Puja', desc: 'Wedding ceremonies', icon: '💑' },
                ].map((pooja, idx) => (
                  <Link
                    key={idx}
                    to={`/puja/${pooja.name.toLowerCase().replace(/ /g, '-')}`}
                    onClick={() => setPoojaOpen(false)}
                    className="block group"
                  >
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="border-2 border-orange-100 hover:border-orange-400 rounded-2xl p-5 transition-all duration-300 hover:shadow-xl bg-white hover:scale-[1.02] hover:-translate-y-1"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-5xl filter drop-shadow-lg">{pooja.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-gray-900 group-hover:text-orange-600 transition-colors mb-1">
                            {pooja.name}
                          </h3>
                          <p className="text-sm text-gray-600 font-medium">{pooja.desc}</p>
                        </div>
                        <div className="text-orange-400 group-hover:text-orange-600 transition-all group-hover:translate-x-1">
                          →
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Call Astrologer Sidebar */}
      <AnimatePresence>
        {astrologerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setAstrologerOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[998]"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 left-0 h-full w-full max-w-[440px] bg-gradient-to-b from-white to-purple-50/30 shadow-2xl z-[999] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 px-6 py-6 text-white shadow-lg z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-extrabold mb-1 flex items-center gap-2">
                      <Phone className="w-6 h-6" />
                      Call to Astrologer
                    </h2>
                    <p className="text-sm text-purple-50 font-medium">Get personalized astrology consultation</p>
                  </div>
                  <button 
                    onClick={() => setAstrologerOpen(false)}
                    className="hover:bg-white/20 p-2.5 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-purple-50 via-indigo-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 shadow-lg"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-gradient-to-br from-purple-600 to-indigo-600 p-3 rounded-xl shadow-md">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-gray-800 mb-1">
                        Talk to Expert Astrologer
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        Get instant solutions to your problems
                      </p>
                    </div>
                  </div>
                  <a 
                    href="tel:+919876543210" 
                    className="block text-3xl font-extrabold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-indigo-500 transition-all mb-3"
                  >
                    +91 98765 43210
                  </a>
                  <div className="flex items-center gap-2 text-sm text-gray-600 font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Available 24/7 for your guidance
                  </div>
                </motion.div>

                {[
                  { name: 'Career Astrology', icon: '💼' },
                  { name: 'Marriage Astrology', icon: '💑' },
                  { name: 'Business Astrology', icon: '📈' },
                  { name: 'Health Astrology', icon: '🏥' },
                  { name: 'Kundli Matching', icon: '🔮' },
                ].map((service, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-2 border-purple-100 hover:border-purple-400 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 bg-white cursor-pointer hover:scale-[1.02]"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-4xl filter drop-shadow-lg">{service.icon}</div>
                      <h3 className="font-bold text-base text-gray-800">{service.name}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Chatbot Sidebar */}
      <AnimatePresence>
        {chatbotOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setChatbotOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[998]"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-[440px] bg-gradient-to-b from-white to-orange-50/30 shadow-2xl z-[999] overflow-y-auto"
            >
              <div className="sticky top-0 bg-gradient-to-r from-orange-600 via-orange-500 to-red-600 px-6 py-6 text-white shadow-lg z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-extrabold mb-1 flex items-center gap-2">
                      <Bot className="w-6 h-6" />
                      Acharya Ji Assistant
                    </h2>
                    <p className="text-sm text-orange-50 font-medium">How can I help you today?</p>
                  </div>
                  <button 
                    onClick={() => setChatbotOpen(false)}
                    className="hover:bg-white/20 p-2.5 rounded-xl transition-all duration-300 backdrop-blur-sm"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 text-center border-2 border-orange-200 shadow-lg"
                >
                  <div className="bg-gradient-to-br from-orange-500 to-red-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                    <Bot className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-extrabold text-xl text-gray-900 mb-2">Welcome! 🙏</h3>
                  <p className="text-sm text-gray-700 font-medium leading-relaxed">
                    I'm here to assist you with pooja bookings, astrology services, and answer your questions.
                  </p>
                </motion.div>
                
                <div className="mt-6 space-y-3">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Quick Actions</p>
                  {[
                    { text: 'Book a Pooja', icon: '📿' },
                    { text: 'Talk to Astrologer', icon: '🔮' },
                    { text: 'Check Kundli', icon: '⭐' },
                    { text: 'View Services', icon: '📋' }
                  ].map((action, idx) => (
                    <motion.button 
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="w-full text-left px-5 py-4 bg-white border-2 border-orange-100 hover:border-orange-400 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{action.icon}</span>
                        <span className="text-sm font-bold text-gray-800 group-hover:text-orange-600 transition-colors">{action.text}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingButtons;