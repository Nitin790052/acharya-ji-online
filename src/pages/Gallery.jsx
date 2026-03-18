import { useState } from "react";
import { X, Play, MapPin, Calendar, ChevronRight, MessageCircle, Phone, Star, Search, Check, Award, Sparkles, Camera, Video, Clock, Leaf } from "lucide-react";
import { Layout } from '@/components/layout/Layout';
import { usePageBanner } from "@/hooks/usePageBanner";

import image1 from "../assets/galleryPage/imageId1.webp";
import image2 from "../assets/galleryPage/imageId2.webp";
import image3 from "../assets/galleryPage/imageId3.webp";
import image4 from "../assets/galleryPage/imageId4.webp";
import image5 from "../assets/galleryPage/imageId5.webp";
import image6 from "../assets/galleryPage/imageId6.webp";
import image7 from "../assets/galleryPage/imageId7.webp";
import image8 from "../assets/galleryPage/imageId8.webp";
import image9 from "../assets/galleryPage/imageId9.webp";
import image10 from "../assets/galleryPage/imageId10.webp";
import image11 from "../assets/galleryPage/imageId11.webp";
import image12 from "../assets/galleryPage/imageId12.webp";
import image13 from "../assets/galleryPage/imageId13.webp";
import image14 from "../assets/galleryPage/imageId14.webp";
import image15 from "../assets/galleryPage/imageId15.webp";
import image16 from "../assets/galleryPage/imageId16.webp";
import image17 from "../assets/galleryPage/imageId17.webp";
import image18 from "../assets/galleryPage/imageId18.webp";
import image19 from "../assets/galleryPage/imageId19.webp";
import image20 from "../assets/galleryPage/imageId20.webp";
import image21 from "../assets/galleryPage/imageId21.webp";
import image22 from "../assets/galleryPage/imageId22.webp";
import image23 from "../assets/galleryPage/imageId23.webp";
import image24 from "../assets/galleryPage/imageId24.webp";
import image25 from "../assets/galleryPage/imageId25.webp";
import image26 from "../assets/galleryPage/imageId26.webp";
import image27 from "../assets/galleryPage/imageId27.webp";
import image28 from "../assets/galleryPage/imageId28.webp";
import image29 from "../assets/galleryPage/imageId29.webp";

const Gallery = () => {
  const banner = usePageBanner();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "All", "Puja Rituals", "Home Puja", "Online Puja", "Temple Puja", "Festival Puja",
    "Astrology Sessions", "Vastu Visits", "Healing Sessions", "Client Moments", "Behind the Scenes"
  ];

  const galleryItems = [
    { id: 1, type: "image", category: "Puja Rituals", title: "Griha Pravesh Puja", caption: "Complete Griha Pravesh ceremony with all Vedic rituals", location: "South Delhi", date: "Jan 15, 2026", image: image1, tags: ["griha pravesh", "new home", "puja"] },
    { id: 2, type: "image", category: "Puja Rituals", title: "Satyanarayan Katha", caption: "Traditional Satyanarayan Puja performed with pure devotion", location: "Noida", date: "Jan 12, 2026", image: image2, tags: ["satyanarayan", "katha", "puja"] },
    { id: 3, type: "video", category: "Puja Rituals", title: "Rudrabhishek Puja Live", caption: "Powerful Rudrabhishek ceremony for Lord Shiva", location: "Gurugram", date: "Jan 10, 2026", image: image3, tags: ["rudrabhishek", "shiva", "abhishek"] },
    { id: 4, type: "image", category: "Puja Rituals", title: "Navgraha Shanti Puja", caption: "Planetary peace ceremony for harmony and prosperity", location: "Delhi", date: "Jan 8, 2026", image: image4, tags: ["navgraha", "shanti", "planets"] },
    { id: 5, type: "image", category: "Puja Rituals", title: "Havan Ceremony", caption: "Sacred fire ritual for purification and blessings", location: "Ghaziabad", date: "Jan 6, 2026", image: image5, tags: ["havan", "yagya", "fire ritual"] },
    { id: 6, type: "image", category: "Home Puja", title: "Family Puja at Home", caption: "Acharya ji conducting puja with entire family", location: "Dwarka, Delhi", date: "Jan 14, 2026", image: image6, tags: ["family puja", "home", "blessing"] },
    { id: 7, type: "image", category: "Home Puja", title: "Lakshmi Puja Setup", caption: "Beautiful puja arrangement at client's residence", location: "Ghaziabad", date: "Jan 11, 2026", image: image7, tags: ["lakshmi", "wealth", "prosperity"] },
    { id: 8, type: "image", category: "Home Puja", title: "Ganesh Puja at Home", caption: "Removing obstacles with Lord Ganesh's blessings", location: "Faridabad", date: "Jan 9, 2026", image: image8, tags: ["ganesh", "obstacles", "home puja"] },
    { id: 9, type: "video", category: "Online Puja", title: "Virtual Satyanarayan Puja", caption: "Client joining live online puja from USA", location: "Online Session", date: "Jan 13, 2026", image: image9, tags: ["online puja", "virtual", "usa"] },
    { id: 10, type: "image", category: "Online Puja", title: "Online Puja Prasad", caption: "Showing prasad to client through video call", location: "Online", date: "Jan 9, 2026", image: image10, tags: ["online", "prasad", "blessing"] },
    { id: 11, type: "video", category: "Online Puja", title: "Live Rudrabhishek Online", caption: "International client attending puja from UK", location: "Online", date: "Jan 7, 2026", image: image11, tags: ["online", "international", "uk"] },
    { id: 12, type: "image", category: "Temple Puja", title: "Hanuman Temple Puja", caption: "Special puja performed at ancient Hanuman temple", location: "Connaught Place", date: "Jan 7, 2026", image: image12, tags: ["hanuman", "temple", "devotion"] },
    { id: 13, type: "image", category: "Temple Puja", title: "Vishnu Temple Darshan", caption: "Morning aarti and puja at Vishnu temple", location: "ISKCON Delhi", date: "Jan 5, 2026", image: image13, tags: ["vishnu", "temple", "aarti"] },
    { id: 14, type: "video", category: "Festival Puja", title: "Diwali Lakshmi Puja", caption: "Grand Diwali celebration with traditional rituals", location: "Multiple Homes", date: "Nov 1, 2025", image: image14, tags: ["diwali", "lakshmi", "festival"] },
    { id: 15, type: "image", category: "Festival Puja", title: "Mahashivratri Celebration", caption: "All-night vigil and Shiva abhishek", location: "Various Temples", date: "Feb 26, 2025", image: image15, tags: ["mahashivratri", "shiva", "festival"] },
    { id: 16, type: "image", category: "Festival Puja", title: "Navratri Celebration", caption: "Nine days of divine worship and devotion", location: "Delhi NCR", date: "Oct 3, 2025", image: image16, tags: ["navratri", "durga", "festival"] },
    { id: 17, type: "image", category: "Astrology Sessions", title: "Kundli Reading Session", caption: "Detailed horoscope analysis and guidance", location: "Office", date: "Jan 16, 2026", image: image17, tags: ["kundli", "astrology", "horoscope"] },
    { id: 18, type: "image", category: "Astrology Sessions", title: "Online Astrology Consultation", caption: "One-on-one consultation via video call", location: "Online", date: "Jan 14, 2026", image: image18, tags: ["consultation", "online", "astrology"] },
    { id: 19, type: "image", category: "Astrology Sessions", title: "Marriage Matching", caption: "Kundli matching for prospective bride and groom", location: "Noida", date: "Jan 12, 2026", image: image19, tags: ["marriage", "matching", "kundli"] },
    { id: 20, type: "image", category: "Vastu Visits", title: "Home Vastu Inspection", caption: "Complete vastu analysis of new apartment", location: "Greater Noida", date: "Jan 13, 2026", image: image20, tags: ["vastu", "home", "inspection"] },
    { id: 21, type: "image", category: "Vastu Visits", title: "Office Vastu Consultation", caption: "Corporate office vastu corrections", location: "Cyber City", date: "Jan 11, 2026", image: image21, tags: ["office", "vastu", "business"] },
    { id: 22, type: "image", category: "Healing Sessions", title: "Reiki Healing Session", caption: "Energy healing and chakra balancing", location: "Healing Center", date: "Jan 15, 2026", image: image22, tags: ["reiki", "healing", "energy"] },
    { id: 23, type: "image", category: "Healing Sessions", title: "Crystal Therapy", caption: "Gemstone healing and aura cleansing", location: "South Delhi", date: "Jan 12, 2026", image: image23, tags: ["crystal", "therapy", "healing"] },
    { id: 24, type: "image", category: "Client Moments", title: "Happy Client Family", caption: "After successful Griha Pravesh puja", location: "Noida", date: "Jan 16, 2026", image: image24, tags: ["client", "happy", "testimonial"] },
    { id: 25, type: "image", category: "Client Moments", title: "Blessings & Gratitude", caption: "Client receiving blessings post-puja", location: "Delhi", date: "Jan 14, 2026", image: image25, tags: ["blessing", "gratitude", "client"] },
    { id: 26, type: "image", category: "Client Moments", title: "Five-Star Feedback", caption: "Client sharing their wonderful experience", location: "Gurugram", date: "Jan 13, 2026", image: image26, tags: ["feedback", "review", "5star"] },
    { id: 27, type: "image", category: "Behind the Scenes", title: "Puja Preparation", caption: "Arranging samagri before ceremony", location: "Office", date: "Jan 15, 2026", image: image27, tags: ["preparation", "samagri", "behind"] },
    { id: 28, type: "video", category: "Behind the Scenes", title: "Travel to Client Location", caption: "Our team reaching client's home", location: "En Route", date: "Jan 13, 2026", image: image28, tags: ["travel", "team", "journey"] },
    { id: 29, type: "image", category: "Behind the Scenes", title: "Setting Up Havan Kund", caption: "Preparing sacred fire pit for ritual", location: "Client Home", date: "Jan 10, 2026", image: image29, tags: ["setup", "havan", "preparation"] }
  ];

  const filteredGallery = galleryItems.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const stats = [
    { value: "500+", label: "Pujas Completed" },
    { value: "1000+", label: "Happy Clients" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "50+", label: "Cities Served" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-[#FCFBF7]">
        <div className="absolute top-[10%] right-0 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[120px] -z-10" />

        {/* Hero Section */}
        <section className="relative h-[320px] sm:h-[320px] md:h-[360px] lg:h-[370px] flex items-center py-[20px] text-white overflow-hidden">
          <div className="absolute inset-0">
            {banner.imageUrl ? (
              <img src={`${BACKEND_URL}${banner.imageUrl}`} alt="Background" className="w-full h-full object-cover object-top" />
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
              <p className="text-lg md:text-xl text-amber-100 leading-relaxed max-w-2xl mx-auto font-medium drop-shadow mb-8">
                {banner.subtitle}
              </p>

              <div className="max-w-lg mx-auto relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-orange-600" />
                  <input
                    type="text"
                    placeholder="Search archives..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-white/95 backdrop-blur-xl text-gray-900 font-bold shadow-2xl focus:outline-none border-2 border-transparent focus:border-amber-500 transition-all placeholder:text-gray-400 text-xs"
                  />
                  {searchQuery && (
                    <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-orange-600 font-black">✕</button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 sticky top-0 bg-white/90 backdrop-blur-md z-40 border-b border-orange-100/50 shadow-sm overflow-x-auto [&::-webkit-scrollbar]:h-2.5 [&::-webkit-scrollbar-track]:bg-orange-50 [&::-webkit-scrollbar-thumb]:bg-orange-400/80 hover:[&::-webkit-scrollbar-thumb]:bg-orange-500 [&::-webkit-scrollbar-thumb]:rounded-full">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 min-w-max justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 flex items-center gap-2 border ${activeCategory === category
                    ? "bg-[#2A1D13] text-amber-400 border-[#2A1D13] shadow-lg -translate-y-0.5"
                    : "bg-white text-gray-600 border-orange-100 hover:border-orange-200 hover:bg-orange-50/50"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 relative">
          <div className="container mx-auto px-4 max-w-7xl">
            {filteredGallery.length === 0 ? (
              <div className="text-center py-12 md:py-16 animate-fade-in">
                <Camera className="w-20 h-20 text-orange-200 mx-auto mb-6" />
                <h2 className="text-3xl font-black text-[#2A1D13] mb-4 uppercase tracking-tight">No moments found!</h2>
                <p className="text-gray-500 font-medium mb-10 max-w-md mx-auto">We couldn't find any results matching your filters. Please try again.</p>
                <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="bg-[#E8453C] hover:bg-black text-white px-10 py-4 rounded-xl font-medium text-xs uppercase tracking-widest transition-all">Show All Moments</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredGallery.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedMedia(item)}
                    className="group/card cursor-pointer animate-fade-in-up"
                    style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: 'both' }}
                  >
                    <div className="relative h-full p-[1.5px] rounded-3xl bg-amber-400/40 hover:bg-amber-500 transition-all duration-700 shadow-xl flex flex-col group-hover/card:bg-orange-500">
                      <div className="relative flex-grow bg-[#FCFBF7] rounded-[1.4rem] overflow-hidden flex flex-col group-hover/card:bg-white transition-all duration-500 text-center">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/40 rounded-full blur-[60px] -mr-16 -mt-16 group-hover/card:bg-amber-400/20 transition-all duration-1000" />
                        <div className="relative m-2.5 mb-3 rounded-2xl overflow-hidden shadow-lg h-56 z-10">
                          <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-[2.5s] group-hover/card:scale-110" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                          <div className="absolute top-4 left-4 px-3 py-1 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-[10px] text-white font-medium uppercase tracking-wider">
                            {item.type === "video" ? <div className="flex items-center gap-1.5"><Video className="w-3 h-3" /> Video</div> : <div className="flex items-center gap-1.5"><Camera className="w-3 h-3" /> Photo</div>}
                          </div>
                          {item.type === "video" && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover/card:scale-110 transition-transform">
                                <Play className="w-6 h-6 text-[#E8453C] ml-1" fill="currentColor" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="px-5 pb-6 flex flex-col flex-1 relative z-20">
                          <h3 className="text-lg font-black text-[#2A1D13] mb-2 line-clamp-1 uppercase tracking-wider group-hover/card:text-orange-600 transition-colors">
                            {item.title}
                          </h3>
                          <div className="flex items-center justify-center gap-3 mb-4">
                            <div className="h-[1.5px] w-8 bg-gradient-to-r from-transparent via-amber-200 to-amber-500 group-hover/card:w-12 transition-all duration-700" />
                            <Sparkles className="w-5 h-5 text-amber-500" />
                            <div className="h-[1.5px] w-8 bg-gradient-to-l from-transparent via-amber-200 to-amber-500 group-hover/card:w-12 transition-all duration-700" />
                          </div>
                          <p className="text-gray-500 font-medium text-xs mb-4 line-clamp-2 leading-relaxed italic">
                            "{item.caption}"
                          </p>
                          <div className="mt-auto flex items-center justify-between border-t border-amber-100 pt-4">
                            <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-amber-600" />
                              {item.location}
                            </span>
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-1.5">
                              {item.date}
                              <ChevronRight className="w-4 h-4 text-orange-600 group-hover/card:translate-x-1 transition-transform ml-1" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

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
              <p className="text-gray-600 mb-12 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                Book your personalized Vedic rituals and experience the profound impact of authentic spiritual ceremonies performed with devotion.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="group relative bg-[#E8453C] hover:bg-[#CC3B34] text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2.5">
                    <MessageCircle className="w-4 h-4" /> Book Puja Now
                  </span>
                </button>
                <button className="group relative bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2.5">
                    <Phone className="w-4 h-4" /> Consult Expert
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {selectedMedia && (
          <div
            onClick={() => setSelectedMedia(null)}
            className="fixed inset-0 bg-[#1A130F]/95 backdrop-blur-md z-[100] flex items-center justify-center p-4 scrollbar-hide animate-fade-in"
          >
            <button onClick={() => setSelectedMedia(null)} className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-[#E8453C] rounded-full flex items-center justify-center transition-all duration-300 z-[110] shadow-2xl border border-white/20 group">
              <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform" />
            </button>
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-[2rem] overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex flex-col md:flex-row animate-scale-in"
            >
              <div className="w-full md:w-3/5 h-[300px] md:h-auto relative bg-[#1A130F]">
                <img src={selectedMedia.image} alt={selectedMedia.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A1D13] to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className="bg-amber-500 text-white px-3 py-1 text-[10px] font-medium uppercase tracking-widest mb-3 inline-block rounded-full">Sacred Vision</span>
                  <h2 className="text-3xl font-black uppercase tracking-tight leading-tight drop-shadow-2xl">{selectedMedia.title}</h2>
                </div>
              </div>
              <div className="w-full md:w-2/5 p-8 md:p-10 overflow-y-auto bg-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-[1.5px] bg-amber-500" />
                  <span className="text-xs font-black text-amber-600 uppercase tracking-[0.2em]">{selectedMedia.category}</span>
                </div>
                <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8 italic">"{selectedMedia.caption}"</p>
                <div className="space-y-4 mb-10 border-t border-orange-50 pt-8">
                  <div className="flex items-center justify-between pb-3 border-b border-orange-50 text-[10px] font-medium text-gray-400 uppercase tracking-widest">
                    <span>Location & Date</span>
                    <span className="font-black text-[#2A1D13] text-sm uppercase flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-orange-600" /> {selectedMedia.location} • {selectedMedia.date}</span>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="w-full bg-[#E8453C] hover:bg-black text-white py-5 rounded-xl font-medium text-[10px] uppercase tracking-[0.3em] transition-all">Book Similar Puja</button>
                  <button onClick={() => setSelectedMedia(null)} className="w-full bg-[#2A1D13] hover:bg-black text-white py-5 rounded-xl font-medium text-[10px] uppercase tracking-[0.3em] transition-all border border-amber-400/30">Back to Gallery</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Gallery;

