import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play, MapPin, Calendar, ChevronRight, MessageCircle, Phone, Star, Search, Check } from "lucide-react";
import { Layout } from '@/components/layout/Layout';
import banner from "../assets/banners/image4.png"
import image1 from "../assets/galleryPage/imageId1.png";
import image2 from "../assets/galleryPage/imageId2.png";
import image3 from "../assets/galleryPage/imageId3.png";
import image4 from "../assets/galleryPage/imageId4.png";
import image5 from "../assets/galleryPage/imageId5.png";
import image6 from "../assets/galleryPage/imageId6.png";
import image7 from "../assets/galleryPage/imageId7.png";
import image8 from "../assets/galleryPage/imageId8.png";
import image9 from "../assets/galleryPage/imageId9.png";
import image10 from "../assets/galleryPage/imageId10.png";
import image11 from "../assets/galleryPage/imageId11.png";
import image12 from "../assets/galleryPage/imageId12.png";
import image13 from "../assets/galleryPage/imageId13.png";
import image14 from "../assets/galleryPage/imageId14.png";
import image15 from "../assets/galleryPage/imageId15.png";
import image16 from "../assets/galleryPage/imageId16.png";
import image17 from "../assets/galleryPage/imageId17.png";
import image18 from "../assets/galleryPage/imageId18.png";
import image19 from "../assets/galleryPage/imageId19.png";
import image20 from "../assets/galleryPage/imageId20.png";
import image21 from "../assets/galleryPage/imageId21.png";
import image22 from "../assets/galleryPage/imageId22.png";
import image23 from "../assets/galleryPage/imageId23.png";
import image24 from "../assets/galleryPage/imageId24.png";
import image25 from "../assets/galleryPage/imageId25.png";
import image26 from "../assets/galleryPage/imageId26.png";
import image27 from "../assets/galleryPage/imageId27.png";
import image28 from "../assets/galleryPage/imageId28.png";
import image29 from "../assets/galleryPage/imageId29.png";


const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "All", label: "All", icon: "" },
    { id: "Puja Rituals", label: "Puja Rituals", icon: "" },
    { id: "Home Puja", label: "Home Puja", icon: "" },
    { id: "Online Puja", label: "Online Puja", icon: "" },
    { id: "Temple Puja", label: "Temple Puja", icon: "" },
    { id: "Festival Puja", label: "Festival Puja", icon: "" },
    { id: "Astrology Sessions", label: "Astrology", icon: "" },
    { id: "Vastu Visits", label: "Vastu", icon: "" },
    { id: "Healing Sessions", label: "Healing", icon: "" },
    { id: "Client Moments", label: "Client Moments", icon: "" },
    { id: "Behind the Scenes", label: "Behind Scenes", icon: "" }
  ];

  const galleryItems = [
    // Puja Rituals
    {
      id: 1,
      type: "image",
      category: "Puja Rituals",
      title: "Griha Pravesh Puja",
      caption: "Complete Griha Pravesh ceremony with all Vedic rituals",
      location: "South Delhi",
      date: "Jan 15, 2026",
      image: image1,
      tags: ["griha pravesh", "new home", "puja"]
    },
    {
      id: 2,
      type: "image",
      category: "Puja Rituals",
      title: "Satyanarayan Katha",
      caption: "Traditional Satyanarayan Puja performed with pure devotion",
      location: "Noida",
      date: "Jan 12, 2026",
      image:image2,
      tags: ["satyanarayan", "katha", "puja"]
    },
    {
      id: 3,
      type: "video",
      category: "Puja Rituals",
      title: "Rudrabhishek Puja Live",
      caption: "Powerful Rudrabhishek ceremony for Lord Shiva",
      location: "Gurugram",
      date: "Jan 10, 2026",
      image: image3,
      tags: ["rudrabhishek", "shiva", "abhishek"]
    },
    {
      id: 4,
      type: "image",
      category: "Puja Rituals",
      title: "Navgraha Shanti Puja",
      caption: "Planetary peace ceremony for harmony and prosperity",
      location: "Delhi",
      date: "Jan 8, 2026",
      image: image4,
      tags: ["navgraha", "shanti", "planets"]
    },
    {
      id: 5,
      type: "image",
      category: "Puja Rituals",
      title: "Havan Ceremony",
      caption: "Sacred fire ritual for purification and blessings",
      location: "Ghaziabad",
      date: "Jan 6, 2026",
      image: image5,
      tags: ["havan", "yagya", "fire ritual"]
    },

    // Home Puja
    {
      id: 6,
      type: "image",
      category: "Home Puja",
      title: "Family Puja at Home",
      caption: "Acharya ji conducting puja with entire family",
      location: "Dwarka, Delhi",
      date: "Jan 14, 2026",
      image: image6,
      tags: ["family puja", "home", "blessing"]
    },
    {
      id: 7,
      type: "image",
      category: "Home Puja",
      title: "Lakshmi Puja Setup",
      caption: "Beautiful puja arrangement at client's residence",
      location: "Ghaziabad",
      date: "Jan 11, 2026",
      image: image7,
      tags: ["lakshmi", "wealth", "prosperity"]
    },
    {
      id: 8,
      type: "image",
      category: "Home Puja",
      title: "Ganesh Puja at Home",
      caption: "Removing obstacles with Lord Ganesh's blessings",
      location: "Faridabad",
      date: "Jan 9, 2026",
      image: image8,
      tags: ["ganesh", "obstacles", "home puja"]
    },

    // Online Puja
    {
      id: 9,
      type: "video",
      category: "Online Puja",
      title: "Virtual Satyanarayan Puja",
      caption: "Client joining live online puja from USA",
      location: "Online Session",
      date: "Jan 13, 2026",
      image: image9,
      tags: ["online puja", "virtual", "usa"]
    },
    {
      id: 10,
      type: "image",
      category: "Online Puja",
      title: "Online Puja Prasad",
      caption: "Showing prasad to client through video call",
      location: "Online",
      date: "Jan 9, 2026",
      image: image10,
      tags: ["online", "prasad", "blessing"]
    },
    {
      id: 11,
      type: "video",
      category: "Online Puja",
      title: "Live Rudrabhishek Online",
      caption: "International client attending puja from UK",
      location: "Online",
      date: "Jan 7, 2026",
      image: image11,
      tags: ["online", "international", "uk"]
    },

    // Temple Puja
    {
      id: 12,
      type: "image",
      category: "Temple Puja",
      title: "Hanuman Temple Puja",
      caption: "Special puja performed at ancient Hanuman temple",
      location: "Connaught Place",
      date: "Jan 7, 2026",
      image: image12,
      tags: ["hanuman", "temple", "devotion"]
    },
    {
      id: 13,
      type: "image",
      category: "Temple Puja",
      title: "Vishnu Temple Darshan",
      caption: "Morning aarti and puja at Vishnu temple",
      location: "ISKCON Delhi",
      date: "Jan 5, 2026",
      image: image13,
      tags: ["vishnu", "temple", "aarti"]
    },

    // Festival Puja
    {
      id: 14,
      type: "video",
      category: "Festival Puja",
      title: "Diwali Lakshmi Puja",
      caption: "Grand Diwali celebration with traditional rituals",
      location: "Multiple Homes",
      date: "Nov 1, 2025",
      image: image14,
      tags: ["diwali", "lakshmi", "festival"]
    },
    {
      id: 15,
      type: "image",
      category: "Festival Puja",
      title: "Mahashivratri Celebration",
      caption: "All-night vigil and Shiva abhishek",
      location: "Various Temples",
      date: "Feb 26, 2025",
      image: image15,
      tags: ["mahashivratri", "shiva", "festival"]
    },
    {
      id: 16,
      type: "image",
      category: "Festival Puja",
      title: "Navratri Celebration",
      caption: "Nine days of divine worship and devotion",
      location: "Delhi NCR",
      date: "Oct 3, 2025",
      image: image16,
      tags: ["navratri", "durga", "festival"]
    },

    // Astrology Sessions
    {
      id: 17,
      type: "image",
      category: "Astrology Sessions",
      title: "Kundli Reading Session",
      caption: "Detailed horoscope analysis and guidance",
      location: "Office",
      date: "Jan 16, 2026",
      image: image17,
      tags: ["kundli", "astrology", "horoscope"]
    },
    {
      id: 18,
      type: "image",
      category: "Astrology Sessions",
      title: "Online Astrology Consultation",
      caption: "One-on-one consultation via video call",
      location: "Online",
      date: "Jan 14, 2026",
      image: image18,
      tags: ["consultation", "online", "astrology"]
    },
    {
      id: 19,
      type: "image",
      category: "Astrology Sessions",
      title: "Marriage Matching",
      caption: "Kundli matching for prospective bride and groom",
      location: "Noida",
      date: "Jan 12, 2026",
      image: image19,
      tags: ["marriage", "matching", "kundli"]
    },

    // Vastu Visits
    {
      id: 20,
      type: "image",
      category: "Vastu Visits",
      title: "Home Vastu Inspection",
      caption: "Complete vastu analysis of new apartment",
      location: "Greater Noida",
      date: "Jan 13, 2026",
      image: image20,
      tags: ["vastu", "home", "inspection"]
    },
    {
      id: 21,
      type: "image",
      category: "Vastu Visits",
      title: "Office Vastu Consultation",
      caption: "Corporate office vastu corrections",
      location: "Cyber City",
      date: "Jan 11, 2026",
      image: image21,
      tags: ["office", "vastu", "business"]
    },

    // Healing Sessions
    {
      id: 22,
      type: "image",
      category: "Healing Sessions",
      title: "Reiki Healing Session",
      caption: "Energy healing and chakra balancing",
      location: "Healing Center",
      date: "Jan 15, 2026",
      image: image22,
      tags: ["reiki", "healing", "energy"]
    },
    {
      id: 23,
      type: "image",
      category: "Healing Sessions",
      title: "Crystal Therapy",
      caption: "Gemstone healing and aura cleansing",
      location: "South Delhi",
      date: "Jan 12, 2026",
      image: image23,
      tags: ["crystal", "therapy", "healing"]
    },

    // Client Moments
    {
      id: 24,
      type: "image",
      category: "Client Moments",
      title: "Happy Client Family",
      caption: "After successful Griha Pravesh puja",
      location: "Noida",
      date: "Jan 16, 2026",
      image: image24,
      tags: ["client", "happy", "testimonial"]
    },
    {
      id: 25,
      type: "image",
      category: "Client Moments",
      title: "Blessings & Gratitude",
      caption: "Client receiving blessings post-puja",
      location: "Delhi",
      date: "Jan 14, 2026",
      image: image25,
      tags: ["blessing", "gratitude", "client"]
    },
    {
      id: 26,
      type: "image",
      category: "Client Moments",
      title: "Five-Star Feedback",
      caption: "Client sharing their wonderful experience",
      location: "Gurugram",
      date: "Jan 13, 2026",
      image: image26,
      tags: ["feedback", "review", "5star"]
    },

    // Behind the Scenes
    {
      id: 27,
      type: "image",
      category: "Behind the Scenes",
      title: "Puja Preparation",
      caption: "Arranging samagri before ceremony",
      location: "Office",
      date: "Jan 15, 2026",
      image: image27,
      tags: ["preparation", "samagri", "behind"]
    },
    {
      id: 28,
      type: "video",
      category: "Behind the Scenes",
      title: "Travel to Client Location",
      caption: "Our team reaching client's home",
      location: "En Route",
      date: "Jan 13, 2026",
      image: image28,
      tags: ["travel", "team", "journey"]
    },
    {
      id: 29,
      type: "image",
      category: "Behind the Scenes",
      title: "Setting Up Havan Kund",
      caption: "Preparing sacred fire pit for ritual",
      location: "Client Home",
      date: "Jan 10, 2026",
      image: image29,
      tags: ["setup", "havan", "preparation"]
    }
  ];

  // Filter logic
  const filteredGallery = galleryItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Stats
  const stats = [
    { icon: "", value: "500+", label: "Pujas Completed" },
    { icon: "", value: "1000+", label: "Happy Clients" },
    { icon: "", value: "4.9/5", label: "Average Rating" },
    { icon: "", value: "50+", label: "Cities Served" }
  ];

  // Handler functions
  const handleBookPuja = (item) => {
    console.log("Booking puja:", item.title);
    alert(`Booking request for: ${item.title}\n\nYou will be contacted by our team shortly!`);
    // In production: navigate to booking page or open booking modal
  };

  const handleTalkToAcharya = () => {
    console.log("Talk to Acharya clicked");
    alert("Connecting to Acharya Ji...\n\nPhone: +91-XXXXXXXXXX\nWhatsApp: Available");
    // In production: open WhatsApp or call functionality
  };

  const handleCategoryChange = (categoryId) => {
    console.log("Category changed to:", categoryId);
    setActiveCategory(categoryId);
  };

  const handleSearchChange = (query) => {
    console.log("Search query:", query);
    setSearchQuery(query);
  };

  const handleClearFilters = () => {
    console.log("Clearing all filters");
    setSearchQuery("");
    setActiveCategory("All");
  };

  return (
    <Layout>
<div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
      {/* Hero Section */}
<section className="relative py-5 sm:py-7 md:py-8 text-white overflow-hidden">

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

    {/* ✅ SINGLE PROFESSIONAL OVERLAY (same as upar wala) */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

    {/* Subtle depth lights (image blur nahi hogi) */}
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl opacity-50" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl opacity-50" />
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center"
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
        Sacred Moments &<br />
        <span className="text-yellow-300">Divine Rituals</span>
      </h1>

      <p className="text-xl md:text-2xl text-orange-100 leading-relaxed mb-7 drop-shadow">
        Real pujas, real blessings, real experiences
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-7">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-black/30 backdrop-blur-md rounded-2xl p-3 border border-white/20 shadow-lg"
          >
            <div className="text-3xl mb-2">{stat.icon}</div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-orange-200">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto">
        <input
          type="text"
          placeholder="Search by puja type, location, or tag..."
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-6 py-4 rounded-full text-gray-900 font-medium shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300"
        />
      </div>
    </motion.div>
  </div>

</section>



      {/* Category Filters */}
      <section className="py-6 sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-orange-100 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.label}</span>
                {activeCategory === category.id && (
                  <Check className="w-4 h-4" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Results Info */}
      {(searchQuery || activeCategory !== "All") && (
        <div className="container mx-auto px-4 max-w-7xl py-6">
          <div className="flex items-center justify-between flex-wrap gap-4 bg-orange-50 rounded-2xl p-4 border-2 border-orange-200">
            <p className="text-gray-700">
              {searchQuery && (
                <span className="font-semibold">Search: "{searchQuery}"</span>
              )}
              {searchQuery && activeCategory !== "All" && " • "}
              {activeCategory !== "All" && (
                <span className="font-semibold">Category: {activeCategory}</span>
              )}
              {" → "}
              <span className="font-bold text-orange-600">
                {filteredGallery.length} {filteredGallery.length === 1 ? 'item' : 'items'} found
              </span>
            </p>
            <button
              onClick={handleClearFilters}
              className="text-sm bg-orange-600 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-700 transition-colors flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Clear Filters
            </button>
          </div>
        </div>
      )}

      {/* Gallery Grid */}
      <section className="py-10">
  <div className="container mx-auto px-4 max-w-7xl">
    {filteredGallery.length > 0 ? (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredGallery.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            onClick={() => {
              console.log("Opening modal for:", item.title);
              setSelectedMedia(item);
            }}
            className="group cursor-pointer h-full"
          >
            {/* CARD */}
            <div className="bg-white h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-400 hover:scale-105 flex flex-col">
              
              {/* IMAGE / VIDEO */}
              <div
                className={`relative h-64 bg-gradient-to-br ${item.color} flex items-center justify-center text-8xl overflow-hidden`}
              >
                <div className="absolute inset-0 " />
                <img src={item.image} alt="" className="w-full h-full object-cover" />

                {/* Play Button */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                      <Play
                        className="w-8 h-8 text-orange-600 ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                )}

                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-orange-600">
                  {item.category}
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-bold text-white">
                  {item.type === "video" ? "Video" : "Photo"}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.caption}
                </p>

                {/* BOTTOM FIXED CONTENT */}
                <div className="mt-auto">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-orange-500" />
                        {item.date}
                      </span>
                    </div>

                    <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-orange-50 text-orange-600 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ) : (
      /* NO RESULTS */
      <div className="text-center py-20">
        <div className="text-6xl mb-6"></div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          No items found
        </h3>
        <p className="text-gray-600 mb-6">
          Try adjusting your search or filter to find what you're looking for.
        </p>
        <button
          onClick={handleClearFilters}
          className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all"
        >
          View All Gallery
        </button>
      </div>
    )}
  </div>
</section>


      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-6"></div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              Want Similar Puja for Your Family?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Book authentic Vedic puja with experienced Acharya Ji
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => handleBookPuja({ title: "Custom Puja" })}
                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Book Puja Now
              </button>
              <button 
                onClick={handleTalkToAcharya}
                className="bg-yellow-400 text-orange-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Talk to Acharya
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-orange-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200 text-center hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">100% Authentic</h3>
              <p className="text-gray-600 text-sm">All rituals performed as per Vedic scriptures</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200 text-center hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Experienced Acharyas</h3>
              <p className="text-gray-600 text-sm">10+ years of puja and astrology expertise</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-200 text-center hover:border-orange-400 transition-colors">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Trusted by 1000+</h3>
              <p className="text-gray-600 text-sm">Families across India and abroad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              console.log("Closing modal");
              setSelectedMedia(null);
            }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto my-8"
            >
              {/* Media Preview */}
              <div className={`relative h-96 bg-gradient-to-br ${selectedMedia.color} flex items-center justify-center text-9xl`}>
                <div className="absolute inset-0 " />
                <img src={selectedMedia.image} alt="" className="w-full h-full bg-cover"/>
                {selectedMedia.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <button 
                      onClick={() => console.log("Play video:", selectedMedia.title)}
                      className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                    >
                      <Play className="w-10 h-10 text-orange-600 ml-1" fill="currentColor" />
                    </button>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-4">
                  {selectedMedia.category}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedMedia.title}</h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">{selectedMedia.caption}</p>
                
                {/* Meta Info */}
                <div className="flex flex-wrap gap-6 mb-6 text-gray-600">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{selectedMedia.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{selectedMedia.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{selectedMedia.type === "video" ? "Video" : "Photo"}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedMedia.tags.map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => handleBookPuja(selectedMedia)}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Book This Puja
                  </button>
                  <button 
                    onClick={handleTalkToAcharya}
                    className="flex-1 bg-yellow-400 text-orange-900 px-6 py-4 rounded-full font-bold hover:shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Talk to Acharya
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    </Layout>
  );
};

export default Gallery;