import React, { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { BookOpen, Calendar, ArrowRight, Clock, User, Tag, Sparkles, TrendingUp, ChevronLeft, ChevronRight, Eye, Heart, Share2, ExternalLink, Bookmark, MessageCircle, Zap, Star, Award, Globe, Users, BarChart, Target } from 'lucide-react';
import Astrology_vs_Horoscope_Complete_Guide from "../../assets/blogs/Astrology vs Horoscope_ Complete Guide.jpg"
import Gemstones_Celestial_Healing from "../../assets/blogs/Gemstones_ Celestial Healing.jpg"
import Griha_Pravesh_Puja_Ultimate_Guide from "../../assets/blogs/Griha Pravesh Puja_ Ultimate Guide.jpg"
import Meditation_Techniques_Ancient_to_Modern from "../../assets/blogs/Meditation Techniques_ Ancient to Modern.jpg"
import Navgraha_Shanti_Planetary_Harmony from "../../assets/blogs/Navgraha Shanti_ Planetary Harmony.jpg"
import Vastu_Shastra_Modern_Applications from "../../assets/blogs/Vastu Shastra_ Modern Applications.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const BlogsKnowledge = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [likeCount, setLikeCount] = useState([0, 0, 0, 0, 0, 0]);
  const [bookmarked, setBookmarked] = useState([false, false, false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const swiperRef = useRef(null);
  const containerRef = useRef(null);
  const autoplayTimeout = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (autoplayTimeout.current) {
        clearTimeout(autoplayTimeout.current);
      }
    };
  }, []);

  const blogs = [
    {
      id: 1,
      title: 'Astrology vs Horoscope: Complete Guide',
      excerpt: 'A comprehensive analysis distinguishing Vedic astrology from Western horoscope predictions with scientific perspectives.',
      category: 'Astrology Knowledge',
      readTime: '6 min',
      date: 'Jan 12, 2026',
      author: 'Dr. Priya Mishra',
      authorRole: 'Chief Astrologer',
      image: Astrology_vs_Horoscope_Complete_Guide,
      gradient: 'from-purple-500 via-indigo-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-purple-50/80 to-blue-50/60',
      views: 32450,
      tags: ['Vedic Astrology', 'Science', 'Predictions'],
      url: '/blog/astrology-vs-horoscope',
      level: 'Advanced',
      rating: 4.9
    },
    {
      id: 2,
      title: 'Griha Pravesh Puja: Ultimate Guide',
      excerpt: 'Step-by-step guide to performing house warming ceremonies with authentic rituals and modern adaptations.',
      category: 'Puja Masterclass',
      readTime: '8 min',
      date: 'Jan 14, 2026',
      author: 'Acharya Vikram',
      authorRole: 'Vedic Scholar',
      image: Griha_Pravesh_Puja_Ultimate_Guide,
      gradient: 'from-amber-500 via-orange-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-amber-50/80 to-orange-50/60',
      views: 43120,
      tags: ['Home Rituals', 'Ceremonies', 'Blessings'],
      url: '/blog/griha-pravesh-puja',
      level: 'Intermediate',
      rating: 4.8
    },
    {
      id: 3,
      title: 'Navgraha Shanti: Planetary Harmony',
      excerpt: 'Deep dive into nine planetary influences and powerful remedies for balancing cosmic energies in daily life.',
      category: 'Advanced Rituals',
      readTime: '7 min',
      date: 'Jan 08, 2026',
      author: 'Pandit Suresh',
      authorRole: 'Planetary Expert',
      image: Navgraha_Shanti_Planetary_Harmony,
      gradient: 'from-indigo-500 via-purple-500 to-pink-500',
      bgColor: 'bg-gradient-to-br from-indigo-50/80 to-purple-50/60',
      views: 22890,
      tags: ['Planets', 'Remedies', 'Cosmic Energy'],
      url: '/blog/navgraha-shanti-puja',
      level: 'Expert',
      rating: 4.9
    },
    {
      id: 4,
      title: 'Vastu Shastra: Modern Applications',
      excerpt: 'Integrating ancient architectural science with contemporary living spaces for enhanced prosperity and wellbeing.',
      category: 'Vastu Science',
      readTime: '9 min',
      date: 'Jan 05, 2026',
      author: 'Vastu Expert',
      authorRole: 'Architectural Consultant',
      image: Vastu_Shastra_Modern_Applications,
      gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
      bgColor: 'bg-gradient-to-br from-emerald-50/80 to-teal-50/60',
      views: 54210,
      tags: ['Architecture', 'Energy Flow', 'Modern Living'],
      url: '/blog/vastu-shastra',
      level: 'Intermediate',
      rating: 4.7
    },
    {
      id: 5,
      title: 'Gemstones: Celestial Healing',
      excerpt: 'Scientific exploration of gemstones and their profound impact on physical, emotional, and spiritual wellbeing.',
      category: 'Healing Remedies',
      readTime: '7 min',
      date: 'Jan 03, 2026',
      author: 'Gem Specialist',
      authorRole: 'Gemologist',
      image: Gemstones_Celestial_Healing,
      gradient: 'from-rose-500 via-pink-500 to-fuchsia-500',
      bgColor: 'bg-gradient-to-br from-rose-50/80 to-pink-50/60',
      views: 32780,
      tags: ['Gemology', 'Healing', 'Astrology'],
      url: '/blog/gemstones-powers',
      level: 'Advanced',
      rating: 4.8
    },
    {
      id: 6,
      title: 'Meditation Techniques: Ancient to Modern',
      excerpt: 'Blending traditional meditation practices with neuroscience-backed techniques for optimal mental clarity.',
      category: 'Mind & Spirit',
      readTime: '5 min',
      date: 'Jan 18, 2026',
      author: 'Yoga Master',
      authorRole: 'Meditation Guru',
      image: Meditation_Techniques_Ancient_to_Modern,
      gradient: 'from-blue-500 via-cyan-500 to-teal-500',
      bgColor: 'bg-gradient-to-br from-blue-50/80 to-cyan-50/60',
      views: 29840,
      tags: ['Meditation', 'Wellness', 'Spiritual'],
      url: '/blog/meditation-techniques',
      level: 'Beginner',
      rating: 4.9
    }
  ];

  const categories = [
    { name: 'All Articles', count: 156, icon: BookOpen, color: 'from-purple-400 to-pink-400', bg: 'bg-purple-50' },
    { name: 'Astrology', count: 42, icon: Sparkles, color: 'from-blue-400 to-indigo-400', bg: 'bg-blue-50' },
    { name: 'Puja Guide', count: 38, icon: Tag, color: 'from-amber-400 to-orange-400', bg: 'bg-amber-50' },
    { name: 'Vastu', count: 28, icon: TrendingUp, color: 'from-emerald-400 to-green-400', bg: 'bg-emerald-50' },
    { name: 'Remedies', count: 32, icon: Zap, color: 'from-rose-400 to-pink-400', bg: 'bg-rose-50' },
    { name: 'Spiritual', count: 16, icon: Star, color: 'from-indigo-400 to-purple-400', bg: 'bg-indigo-50' }
  ];

  const stats = [
    { icon: Users, value: '50K+', label: 'Monthly Readers', color: 'text-blue-500', bg: 'bg-blue-50' },
    { icon: Globe, value: '120+', label: 'Countries', color: 'text-emerald-500', bg: 'bg-emerald-50' },
    { icon: BarChart, value: '98%', label: 'Satisfaction', color: 'text-amber-500', bg: 'bg-amber-50' },
    { icon: Award, value: '4.9/5', label: 'Rating', color: 'text-purple-500', bg: 'bg-purple-50' }
  ];

  const handleLike = (index, e) => {
    e.stopPropagation();
    const newLikes = [...likeCount];
    newLikes[index] += 1;
    setLikeCount(newLikes);
  };

  const handleBookmark = (index, e) => {
    e.stopPropagation();
    const newBookmarked = [...bookmarked];
    newBookmarked[index] = !newBookmarked[index];
    setBookmarked(newBookmarked);
  };

  const handleShare = (blog, e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.origin + blog.url,
      });
    } else {
      navigator.clipboard.writeText(window.location.origin + blog.url);
      // Show toast notification
      const event = new CustomEvent('showToast', { 
        detail: { message: 'Link copied to clipboard!', type: 'success' } 
      });
      window.dispatchEvent(event);
    }
  };

  const handleReadArticle = (blogUrl, e) => {
    e.stopPropagation();
    // Navigate to article
    window.location.href = blogUrl;
  };

  const handleCardClick = (blogUrl) => {
    window.location.href = blogUrl;
  };

  const handleNext = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (swiperRef.current?.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
    
    if (autoplayTimeout.current) {
      clearTimeout(autoplayTimeout.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    
    autoplayTimeout.current = setTimeout(() => {
      if (swiperRef.current?.swiper && !isHovering) {
        swiperRef.current.swiper.autoplay.start();
      }
    }, 1000);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-3 h-3 ${i < Math.floor(rating) ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`}
          strokeWidth={2}
        />
      );
    }
    return stars;
  };

  return (
    <section ref={containerRef} className="relative py-10 px-4 sm:px-6 overflow-hidden bg-white">
      {/* Beautiful Light Background with Gradient Mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-pink-100 to-white" />
        
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, #CBD5E1 1px, transparent 1px), linear-gradient(to bottom, #CBD5E1 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Floating Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-purple-100/40 to-blue-100/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-br from-amber-100/30 to-orange-100/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-1/4">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-300 to-blue-300 animate-bounce"
              style={{
                left: `${i * 40}px`,
                top: `${i * 20}px`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-50 to-indigo-50 text-purple-700 rounded-full text-sm font-semibold mb-5 shadow-sm border border-purple-100 hover:shadow-md transition-shadow duration-300">
            <BookOpen className="w-4 h-4" strokeWidth={2.5} />
            <span className="tracking-wide">Knowledge Hub</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>
          
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold mb-5 text-black-500 leading-tight">
            Discover <span className="text-yellow-500">Ancient Wisdom</span> for Modern Life
          </h1>
          
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Curated spiritual knowledge blending timeless traditions with contemporary insights
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`${stat.bg} rounded-xl p-4 shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-2.5 ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} strokeWidth={1.5} />
                </div>
                <div className={`text-xl font-bold ${stat.color} text-center mb-1`}>{stat.value}</div>
                <div className="text-sm text-slate-600 text-center">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Auto-rotation Status */}
        <div className="flex justify-center mb-8">
          <div className={`flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-400 shadow-sm ${
            isHovering 
              ? 'bg-amber-50 text-amber-700 border border-amber-200' 
              : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
          }`}>
            <div className={`w-2 h-2 rounded-full animate-pulse ${isHovering ? 'bg-amber-500' : 'bg-emerald-500'}`} />
            <span className="text-sm font-medium">
              {isHovering ? 'Paused • Hovering' : 'Auto-rotating • Every 4 seconds'}
            </span>
            <Clock className="w-4 h-4" />
          </div>
        </div>

        {/* Main Carousel Container */}
        <div 
          className="relative mb-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between z-30 pointer-events-none px-4">
            <button
              onClick={handlePrev}
              className="group w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:text-white transition-all duration-300 hover:scale-110 pointer-events-auto border border-slate-200 hover:border-purple-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronLeft className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
            </button>
            
            <button
              onClick={handleNext}
              className="group w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-700 hover:text-white transition-all duration-300 hover:scale-110 pointer-events-auto border border-slate-200 hover:border-purple-500 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" strokeWidth={2.5} />
            </button>
          </div>

          {/* Main Carousel - 3 Cards Layout */}
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={isMobile ? 1 : 3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
              waitForTransition: true,
            }}
            speed={600}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: -40,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                effect: 'slide',
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
                effect: 'coverflow',
              },
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="pb-4"
          >
            {blogs.map((blog, index) => (
              <SwiperSlide key={blog.id}>
                {({ isActive }) => (
                  <div className={`transform transition-all duration-500 ${
                    isActive 
                      ? 'scale-100 opacity-100 translate-y-0' 
                      : 'scale-90 opacity-70 translate-y-2'
                  }`}>
                    <div 
                      className={`group relative overflow-hidden rounded-2xl bg-white border transition-all duration-400 h-full cursor-pointer
                        ${isActive 
                          ? 'border-purple-200 shadow-xl hover:shadow-2xl' 
                          : 'border-slate-100 shadow-lg hover:shadow-xl'
                        } hover:-translate-y-2`}
                      onClick={() => handleCardClick(blog.url)}
                    >
                      {/* Card Background */}
                      <div className={`absolute inset-0 ${blog.bgColor} opacity-50`} />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                        <div className={`px-3 py-1.5 rounded-lg bg-gradient-to-r ${blog.gradient} text-white text-xs font-bold shadow`}>
                          {blog.category}
                        </div>
                        
                        <div className={`px-2.5 py-1 rounded-md text-xs font-bold shadow ${
                          blog.level === 'Beginner' ? 'bg-emerald-100 text-emerald-800' :
                          blog.level === 'Intermediate' ? 'bg-amber-100 text-amber-800' :
                          'bg-rose-100 text-rose-800'
                        }`}>
                          {blog.level}
                        </div>
                      </div>

                      {/* Bookmark Button */}
                      <button
                        onClick={(e) => handleBookmark(index, e)}
                        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-600 hover:text-purple-600 shadow-sm hover:shadow transition-all duration-300 hover:scale-110"
                      >
                        <Bookmark 
                          className={`w-4.5 h-4.5 transition-all duration-300 ${bookmarked[index] ? 'fill-purple-500 text-purple-500' : ''}`} 
                          strokeWidth={2} 
                        />
                      </button>

                      {/* Image Section */}
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={blog.image}
                          alt={blog.title}
                          className="absolute inset-0 w-full h-full bg-cover transition-transform duration-500 group-hover:scale-110"
                          loading="lazy"
                        />
                        
                        <div className={`absolute inset-0 bg-gradient-to-t ${blog.gradient} opacity-10 mix-blend-multiply`} />
                        
                        {/* Views Counter */}
                        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded text-xs font-medium">
                          <Eye className="w-3.5 h-3.5" />
                          <span>{blog.views.toLocaleString()}</span>
                        </div>

                        {/* Rating */}
                        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm text-slate-700 px-2.5 py-1 rounded text-xs font-medium">
                          <div className="flex gap-0.5">
                            {renderStars(blog.rating)}
                          </div>
                          <span className="font-bold">{blog.rating}</span>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="relative p-5">
                        {/* Title Section */}
                        <div className="mb-4">
                          <div className="flex items-start justify-between gap-3 mb-3">
                            <h3 className="text-lg font-bold text-slate-900 line-clamp-2 group-hover:text-purple-700 flex-1 transition-colors duration-300">
                              {blog.title}
                            </h3>
                            <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-purple-600 mt-1 flex-shrink-0 transition-colors duration-300" strokeWidth={2} />
                          </div>
                          
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
                            {blog.excerpt}
                          </p>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-5">
                          {blog.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-700 text-xs font-medium transition-all duration-300"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Author & Meta Info */}
                        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 flex items-center justify-center">
                              <User className="w-5 h-5 text-white" strokeWidth={2} />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-slate-900">{blog.author}</div>
                              <div className="text-xs text-slate-500">{blog.authorRole}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 text-xs text-slate-600">
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              <span className="font-medium">{blog.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              <span className="font-medium">{blog.readTime}</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            {/* Like Button */}
                            <button 
                              onClick={(e) => handleLike(index, e)}
                              className="flex items-center gap-1.5 text-slate-600 hover:text-rose-500 transition-all duration-300"
                            >
                              <Heart 
                                className={`w-4.5 h-4.5 transition-all duration-300 ${likeCount[index] > 0 ? 'fill-rose-400 text-rose-400' : ''}`} 
                                strokeWidth={2} 
                              />
                              <span className="text-sm font-bold">{likeCount[index]}</span>
                            </button>
                            
                            {/* Share Button */}
                            <button 
                              onClick={(e) => handleShare(blog, e)}
                              className="flex items-center gap-1.5 text-slate-600 hover:text-purple-600 transition-all duration-300"
                            >
                              <Share2 className="w-4.5 h-4.5" strokeWidth={2} />
                              <span className="text-sm font-bold">Share</span>
                            </button>
                            
                            {/* Comment Button */}
                            <button className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-all duration-300">
                              <MessageCircle className="w-4.5 h-4.5" strokeWidth={2} />
                              <span className="text-sm font-bold">Discuss</span>
                            </button>
                          </div>
                          
                          {/* Read Button */}
                          <button 
                            onClick={(e) => handleReadArticle(blog.url, e)}
                            className={`flex items-center gap-2 bg-gradient-to-r ${blog.gradient} text-white px-4 py-2.5 rounded-lg font-bold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 shadow-md`}
                          >
                            <span>Read Article</span>
                            <ArrowRight className="w-4 h-4" strokeWidth={3} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

       

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <button
                key={index}
                className={`group relative overflow-hidden ${category.bg} rounded-xl px-4 py-3 border border-slate-100 hover:border-transparent transition-all duration-300 hover:-translate-y-1`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 text-slate-600 group-hover:text-white transition-colors duration-300`} strokeWidth={2} />
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-white transition-colors duration-300">
                    {category.name}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs font-bold transition-colors duration-300
                    ${category.name === 'All Articles' ? 'bg-purple-100 text-purple-700 group-hover:bg-white/30 group-hover:text-white' :
                    category.name === 'Astrology' ? 'bg-blue-100 text-blue-700 group-hover:bg-white/30 group-hover:text-white' :
                    category.name === 'Puja Guide' ? 'bg-amber-100 text-amber-700 group-hover:bg-white/30 group-hover:text-white' :
                    category.name === 'Vastu' ? 'bg-emerald-100 text-emerald-700 group-hover:bg-white/30 group-hover:text-white' :
                    category.name === 'Remedies' ? 'bg-rose-100 text-rose-700 group-hover:bg-white/30 group-hover:text-white' :
                    'bg-indigo-100 text-indigo-700 group-hover:bg-white/30 group-hover:text-white'
                  }`}>
                    {category.count}
                  </span>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </button>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="relative overflow-hidden rounded-2xl shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-indigo-50" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-gray-400 to-yellow-500" />
          
          <div className="relative px-8 py-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
                Continue Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-800">Learning Journey</span>
              </h3>
              
              <p className="text-slate-600 text-lg mb-4 leading-relaxed">
                Subscribe for exclusive spiritual insights and ancient wisdom delivered to your inbox weekly
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-amber-500 text-white px-7 py-2 rounded-xl font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2.5">
                  <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Explore All Articles</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <button className="group border border-slate-300 text-slate-700 px-6 py-2 rounded-xl font-bold text-sm hover:bg-white hover:border-purple-300 hover:text-purple-700 transition-all duration-300 hover:scale-105 shadow-sm">
                  <span>Subscribe Newsletter</span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 mt-7 text-sm text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Target className="w-4 h-4" />
                  <span>Expert-Curated Content</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>Updated Weekly</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>Verified Sources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .swiper-pagination-bullet {
          background: #CBD5E1;
          opacity: 0.6;
          width: 8px;
          height: 8px;
          transition: all 0.4s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: linear-gradient(135deg, #A855F7, #6366F1);
          opacity: 1;
          width: 28px;
          border-radius: 14px;
          box-shadow: 0 4px 12px rgba(168, 85, 247, 0.2);
        }
        
        .swiper-pagination {
          position: relative !important;
          margin-top: 2rem;
        }
      `}</style>
    </section>
  );
};

export default BlogsKnowledge;