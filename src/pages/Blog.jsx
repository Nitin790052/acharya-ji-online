import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {X, Calendar,MapPin, Clock, Search, ChevronRight, BookOpen, Star, TrendingUp, MessageCircle, Phone } from "lucide-react";
import { Layout } from '@/components/layout/Layout';
import bgImage from "../assets/banners/image1.png"
import image1 from "../assets/blogPage/imageId1.png"
import image2 from "../assets/blogPage/imageId2.png"
import image3 from "../assets/blogPage/imageId3.png"
import image4 from "../assets/blogPage/imageId4.png"
import image5 from "../assets/blogPage/imageId5.png"
import image6 from "../assets/blogPage/imageId6.png"
import image7 from "../assets/blogPage/imageId7.png"
import image8 from "../assets/blogPage/imageId8.png"
import image9 from "../assets/blogPage/imageId9.png"
import image10 from "../assets/blogPage/imageId10.png"
import image11 from "../assets/blogPage/imageId11.png"
import image12 from "../assets/blogPage/imageId12.png"
import image13 from "../assets/blogPage/imageId13.png"
import image14 from "../assets/blogPage/imageId14.png"
import image15 from "../assets/blogPage/imageId15.png"



const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMedia,setSelectMedia] = useState(null);

  const categories = [
    "All",
    "Puja Vidhi",
    "Astrology",
    "Kundli & Dosh",
    "Vastu Shastra",
    "Healing & Spirituality",
    "Gemstones & Remedies",
    "Festivals & Muhurat",
    "Mantras & Rituals"
  ];

  const featuredBlogs = [
    {
      id: 1,
      title: "Griha Pravesh Puja Vidhi & Shubh Muhurat",
      excerpt: "Complete guide on performing Griha Pravesh with proper vidhi, samagri list, and auspicious dates for 2026.",
      image: image1,
      category: "Puja Vidhi",
      readTime: "8 min",
      date: "Jan 15, 2026"
    },
    {
      id: 2,
      title: "Satyanarayan Katha Benefits & Complete Rules",
      excerpt: "Learn the spiritual significance, proper procedure, and divine benefits of performing Satyanarayan Puja.",
      image: image2,
      category: "Puja Vidhi",
      readTime: "6 min",
      date: "Jan 12, 2026"
    },
    {
      id: 3,
      title: "How Kundli Matching Works in Marriage",
      excerpt: "Understanding Ashtakoot Milan, Guna matching, and importance of horoscope compatibility in Vedic astrology.",
      image: image3,
      category: "Kundli & Dosh",
      readTime: "10 min",
      date: "Jan 10, 2026"
    },
    {
      id: 4,
      title: "Navgraha Shanti Puja: Purpose & Procedure",
      excerpt: "Detailed explanation of Navgraha Shanti Puja, its importance, rituals, and astrological benefits.",
      image: image4,
      category: "Puja Vidhi",
      readTime: "9 min",
      date: "Jan 08, 2026"
    },
    {
      id: 5,
      title: "Pitru Dosh: Causes, Effects & Remedies",
      excerpt: "Know what Pitru Dosh is, how it affects life, and the effective Vedic remedies to reduce its impact.",
      image: image5,
      category: "Kundli & Dosh",
      readTime: "7 min",
      date: "Jan 05, 2026"
    },
    {
      id: 6,
      title: "Lakshmi Puja at Home: Step-by-Step Guide",
      excerpt: "A simple step-by-step guide to perform Lakshmi Puja at home for wealth, peace, and prosperity.",
      image: image6,
      category: "Puja Vidhi",
      readTime: "5 min",
      date: "Jan 03, 2026"
    }
  ];

  const latestArticles = [
    {
      id: 7,
      title: "Rudrabhishek Puja: Complete Vidhi & Benefits",
      excerpt: "Powerful Shiva puja for peace, prosperity and dosh nivaran. Learn the authentic procedure.",
      image: image7,
      category: "Puja Vidhi",
      readTime: "7 min",
      date: "Jan 8, 2026"
    },
    {
      id: 8,
      title: "Navgraha Shanti: When & Why to Perform",
      excerpt: "Understanding planetary doshas and their remedies through Navgraha Shanti Puja.",
      image: image8,
      category: "Astrology",
      readTime: "9 min",
      date: "Jan 6, 2026"
    },
    {
      id: 9,
      title: "Pitru Dosh: Lakshan aur Upaay",
      excerpt: "Complete guide on identifying Pitru Dosh symptoms and effective remedies as per Vedic astrology.",
      image: image9,
      category: "Kundli & Dosh",
      readTime: "8 min",
      date: "Jan 4, 2026"
    },
    {
      id: 10,
      title: "Shani Sade Sati: Myth vs Truth",
      excerpt: "Scientific explanation of Saturn's 7.5 year transit and how to navigate it positively.",
      image: image10,
      category: "Astrology",
      readTime: "11 min",
      date: "Jan 2, 2026"
    },
    {
      id: 11,
      title: "Best Gemstones for Career Growth",
      excerpt: "Discover which gemstones align with your profession and boost success according to Vedic astrology.",
      image: image11,
      category: "Gemstones & Remedies",
      readTime: "6 min",
      date: "Dec 30, 2025"
    },
    {
      id: 12,
      title: "Vastu Tips for Peaceful Home",
      excerpt: "Simple yet powerful Vastu corrections you can make without major renovations.",
      image: image12,
      category: "Vastu Shastra",
      readTime: "7 min",
      date: "Dec 28, 2025"
    },
    {
      id: 13,
      title: "Reiki Healing: Basics & Benefits",
      excerpt: "Introduction to energy healing, chakra balancing and how Reiki can transform your life.",
      image: image13,
      category: "Healing & Spirituality",
      readTime: "9 min",
      date: "Dec 26, 2025"
    },
    {
      id: 14,
      title: "Diwali Lakshmi Puja Complete Vidhi",
      excerpt: "Step-by-step guide for performing authentic Lakshmi Puja on Diwali for prosperity.",
      image: image14,
      category: "Festivals & Muhurat",
      readTime: "10 min",
      date: "Dec 24, 2025"
    },
    {
      id: 15,
      title: "Powerful Daily Mantras for Peace",
      excerpt: "Essential mantras to chant daily for mental peace, positivity and spiritual growth.",
      image: image15,
      category: "Mantras & Rituals",
      readTime: "5 min",
      date: "Dec 22, 2025"
    }
  ];

  const popularReads = [
    "Manglik Dosh: Complete Analysis & Remedies",
    "Kaal Sarp Dosh Nivaran Puja",
    "Marriage Muhurat Calendar 2026",
    "Navratri Puja Guide for 9 Days",
    "Office Vastu Mistakes to Avoid"
  ];

  const knowledgeSections = [
    {
      icon: "🔔",
      title: "Puja & Rituals",
      topics: ["Puja ka importance", "Vidhi & samagri", "Benefits & dosh nivaran"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: "🔮",
      title: "Astrology & Kundli",
      topics: ["Kundli banana ka process", "Manglik / Kaal Sarp Dosh", "Dasha analysis"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: "🧿",
      title: "Vastu Shastra",
      topics: ["Home vastu tips", "Office vastu mistakes", "Remedies without demolition"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: "🌿",
      title: "Healing & Mantras",
      topics: ["Reiki basics", "Chakra imbalance signs", "Powerful daily mantras"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  // Combine all articles for search and filter
  const allArticles = useMemo(() => [...featuredBlogs, ...latestArticles], []);

  // Filter logic for both search and category
  const filteredArticles = useMemo(() => {
    let result = allArticles;

    // 1. First apply category filter
    if (activeCategory !== "All") {
      result = result.filter(article => article.category === activeCategory);
    }

    // 2. Then apply search filter if search query exists
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.category.toLowerCase().includes(query)
      );
    }

    return result;
  }, [activeCategory, searchQuery, allArticles]);

  // Separate filtered featured and latest articles
  const filteredFeaturedBlogs = filteredArticles.filter(article => 
    featuredBlogs.some(fb => fb.id === article.id)
  );

  const filteredLatestArticles = filteredArticles.filter(article => 
    latestArticles.some(la => la.id === article.id)
  );

  // Check if no results found
  const noResultsFound = filteredArticles.length === 0;

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory("All");
    setSearchQuery("");
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 via-white to-red-50">
        {/* Hero Section */}
   <section className="relative py-12 sm:py-16 md:py-20 text-white overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={bgImage}
      alt="Background"
      className="w-full h-full bg-cover"
      style={{
        filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
      }}
    />

    {/* ✅ SINGLE PROFESSIONAL OVERLAY (same as previous banners) */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />

    {/* Soft depth lights (image blur nahi hogi) */}
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
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
        Sacred Knowledge from<br />
        <span className="text-yellow-300">Vedic Wisdom</span>
      </h1>

      <p className="text-lg md:text-xl text-orange-100 leading-relaxed mb-8 drop-shadow">
        Authentic insights on Puja, Astrology, Kundli, Vastu & Spiritual Healing by experienced Acharyas
      </p>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

          <input
            type="text"
            placeholder="Search for puja vidhi, kundli dosh, vastu tips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-10 py-4 rounded-full text-gray-900 font-medium shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-300"
          />

          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          )}
        </div>

        {searchQuery && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-200 mt-2 text-sm"
          >
            {filteredArticles.length} results found for "{searchQuery}"
          </motion.p>
        )}
      </div>
    </motion.div>
  </div>

</section>



        {/* Categories */}
        <section className="py-8 sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-orange-100 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    if (activeCategory === category) {
                      setActiveCategory("All");
                    } else {
                      setActiveCategory(category);
                    }
                  }}
                  className={`px-6 py-2.5 rounded-full font-bold whitespace-nowrap transition-all duration-300 flex items-center gap-1 ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg scale-105"
                      : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                  }`}
                >
                  {category}
                  {activeCategory === category && (
                    <span className="ml-1">✕</span>
                  )}
                </button>
              ))}
              {(activeCategory !== "All" || searchQuery) && (
                <button
                  onClick={resetFilters}
                  className="px-6 py-2.5 rounded-full font-bold whitespace-nowrap bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
                >
                  Reset Filters
                </button>
              )}
            </div>
          </div>
        </section>

        {/* Show message if no results found */}
        {noResultsFound ? (
          <section className="py-20">
            <div className="container mx-auto px-4 text-center">
              <div className="text-8xl mb-6"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                No articles found!
              </h2>
              <p className="text-gray-600 mb-8">
                Try a different search term or select another category
              </p>
              <button
                onClick={resetFilters}
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow hover:scale-105 duration-300"
              >
                Show All Articles
              </button>
            </div>
          </section>
        ) : (
          <>
            {/* Featured Blogs */}
            {filteredFeaturedBlogs.length > 0 && (
              <section className="py-10">
                <div className="container mx-auto px-4 max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <div className="inline-block px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-bold mb-4">
                      Featured Articles
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-800 to-amber-500 bg-clip-text text-transparent">
                      Must-Read Spiritual Guides
                    </h2>
                  </motion.div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {filteredFeaturedBlogs.map((blog, idx) => (
                      <motion.div
                        key={blog.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group cursor-pointer"
                        onClick={()=>{
                          console.log("media name",blog);
                          setSelectMedia(blog);
                        }}
                      >
                                             <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-orange-100 hover:border-orange-400 hover:scale-105 flex flex-col h-full">
                       <div className="bg-gradient-to-br from-orange-500 to-red-600 h-48 flex items-center justify-center relative overflow-hidden">
                         <div className="absolute inset-0 bg-cover" />
                         <img src={blog.image} alt="" />
                       </div>
                       <div className="p-6 flex flex-col flex-grow">
                         <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-3">
                           {blog.category}
                         </div>
                         <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                           {blog.title}
                         </h3>
                         <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-3 flex-grow">
                           {blog.excerpt}
                         </p>
                         <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
                           <div className="flex items-center gap-4">
                             <span className="flex items-center gap-1">
                               <Clock className="w-3.5 h-3.5" />
                               {blog.readTime}
                             </span>
                             <span className="flex items-center gap-1">
                               <Calendar className="w-3.5 h-3.5" />
                               {blog.date}
                             </span>
                           </div>
                           <ChevronRight className="w-5 h-5 text-orange-600 group-hover:translate-x-1 transition-transform" />
                         </div>
                       </div>
                     </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Knowledge Sections - Only show when not searching */}
            {!searchQuery && (
              <section className="py-10 bg-gradient-to-br from-orange-50 to-red-50">
                <div className="container mx-auto px-4 max-w-7xl">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                  >
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-800 to-amber-500 bg-clip-text text-transparent mb-4">
                      Knowledge Categories
                    </h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
                  </motion.div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {knowledgeSections.map((section, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
                      >
                        <div className="text-5xl mb-4 text-center">{section.icon}</div>
                        <h3 className={`text-xl font-bold mb-4 text-center bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                          {section.title}
                        </h3>
                        <ul className="space-y-2">
                          {section.topics.map((topic, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Latest Articles with Sidebar */}
            <section className="py-10">
              <div className="container mx-auto px-4 max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-12"
                >
                  <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-800 to-amber-500 bg-clip-text text-transparent mb-4">
                    {searchQuery ? `Search Results (${filteredArticles.length})` : `Latest Articles`}
                  </h2>
                  <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 rounded-full" />
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Articles Grid */}
                  <div className={`${!searchQuery ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                    {filteredLatestArticles.length > 0 ? (
                      <div className="grid md:grid-cols-2 gap-6">
                        {filteredLatestArticles.map((article, idx) => (
                          <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group cursor-pointer"
                          >
                            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 flex flex-col h-full">
  
  {/* Image Container - Responsive Height */}
  <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
    <img 
      src={article.image} 
      alt={article.title}
      className="absolute inset-0 w-full h-full bg-cover "
    />
    {/* Optional gradient overlay */}
    <div className="" />
  </div>
  
  {/* Content Section */}
  <div className="p-4 sm:p-5 flex flex-col flex-grow">
    <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold mb-3">
      {article.category}
    </div>
    
    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 min-h-[2.5rem] sm:min-h-[2.8rem]">
      {article.title}
    </h3>
    
    <p className="text-gray-600 text-sm mb-3 sm:mb-4 line-clamp-2 flex-grow">
      {article.excerpt}
    </p>
    
    <div className="flex items-center justify-between text-xs text-gray-500 mt-auto">
      <span className="flex items-center gap-1">
        <Clock className="w-3.5 h-3.5" />
        {article.readTime}
      </span>
      <span className="text-xs">{article.date}</span>
    </div>
  </div>
</div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      !noResultsFound && (
                        <p className="text-center text-gray-500 py-8">
                          No latest articles found for the selected filters
                        </p>
                      )
                    )}
                  </div>

                  {/* Sidebar - Only show when not searching */}
                  {!searchQuery && (
                    <div className="space-y-6">
                      {/* Popular Reads */}
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 sticky top-24"
                      >
                        <div className="flex items-center gap-2 mb-6">
                          <TrendingUp className="w-5 h-5 text-orange-600" />
                          <h3 className="text-xl font-bold text-gray-900">Popular Reads</h3>
                        </div>
                        <ul className="space-y-4">
                          {popularReads.map((read, idx) => (
                            <li key={idx}>
                              <div className="group flex items-start gap-3 hover:bg-orange-50 p-3 rounded-xl transition-all cursor-pointer">
                                <Star className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                                  {read}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    </div>
                  )}
                </div>
              </div>
            </section>

            {/* Ask an Acharya Section */}
            <section className="py-10 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white">
              <div className="container mx-auto px-4 max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl mb-5"></div>
                  <h2 className="text-2xl md:text-3xl font-extrabold mb-3">
                    Have a Question about Puja, Kundli or Dosh?
                  </h2>
                  <p className="text-xl text-orange-100 mb-7">
                    Get personalized guidance from experienced Acharyas
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Ask a Question
                    </button>
                    <button className="bg-yellow-400 text-orange-900 px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Talk to Astrologer
                    </button>
                    <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Book Puja
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Trust & Authority */}
            <section className="py-12 bg-orange-50">
              <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 text-center"
                >
                  <BookOpen className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Authentic Vedic Knowledge
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All articles are written and reviewed by experienced Acharyas, astrologers and vastu experts following authentic Vedic scriptures. Our content is based on traditional wisdom combined with practical guidance for modern devotees.
                  </p>
                </motion.div>
              </div>
            </section>
          </>
        )}
        {/* Lightbox Modal */}
    <AnimatePresence>
  {selectedMedia && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectMedia(null)}
      className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
    >
      {/* Close Button - Responsive Positioning */}
      <button
        onClick={() => setSelectMedia(null)}
        className="fixed top-3 sm:top-4 md:top-5 right-3 sm:right-4 md:right-5 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition z-50"
      >
        <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Modal Box - Responsive Sizing */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl sm:rounded-2xl md:rounded-3xl w-full max-w-[95vw] sm:max-w-[90vw] md:max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto shadow-2xl"
      >
        {/* IMAGE SECTION - Responsive Height */}
        <div className="relative h-64 sm:h-72 md:h-[22rem] lg:h-[30rem] xl:h-[34rem] bg-black flex items-center justify-center">
          <img
            src={selectedMedia.image}
            alt={selectedMedia.title}
            className="absolute inset-0 w-full h-full bg-cover "
          />
        </div>

        {/* CONTENT SECTION - Responsive Padding */}
        <div className="p-4 sm:p-5 md:p-6 lg:p-8">
          {/* Category - Responsive Text */}
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-2 bg-orange-100 text-orange-700 rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4">
            {selectedMedia.category}
          </span>

          {/* Title - Responsive Text Size */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
            {selectedMedia.title}
          </h2>

          {/* Description - Responsive Text */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-5 md:mb-6">
            {selectedMedia.excerpt}
          </p>

          {/* Meta Info - Responsive Spacing */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-gray-600 mb-6 sm:mb-7 md:mb-8">
            <span className="flex items-center gap-1 sm:gap-2">
              <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
              {selectedMedia.readTime}
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-orange-600" />
              {selectedMedia.date}
            </span>
          </div>

          {/* CTA BUTTONS - Responsive Layout */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-5 md:pt-6 border-t border-gray-200">
            <button className="w-full sm:flex-1 bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-full font-bold hover:shadow-xl hover:scale-[1.02] transition-all text-sm sm:text-base">
              Read Full Article
            </button>

            <button className="w-full sm:flex-1 bg-yellow-400 text-orange-900 px-4 py-3 sm:px-5 sm:py-3 md:px-6 md:py-4 rounded-full font-bold hover:shadow-xl hover:scale-[1.02] transition-all text-sm sm:text-base">
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

export default Blog;