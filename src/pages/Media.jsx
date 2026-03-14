import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
  Play, ExternalLink, Calendar, MapPin, Award, Newspaper,
  Video, Users, Instagram, Facebook, Youtube, X,
  Sparkle, Sparkles, Star, CheckCircle, Shield,
  ChevronRight, Phone, BookOpen, Clock, Heart, Globe
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import banner from "../assets/banners/bannerMedia.png"
import image1 from "../assets/mediaPage/imageM1.png"
import image2 from "../assets/mediaPage/imageM2.png"
import image3 from "../assets/mediaPage/imageM3.png"
import image4 from "../assets/mediaPage/imageM4.png"
import image5 from "../assets/mediaPage/imageM5.png"
import image6 from "../assets/mediaPage/imageM6.png"
import image7 from "../assets/mediaPage/imageM7.png"
import image8 from "../assets/mediaPage/imageM8.png"
import image9 from "../assets/mediaPage/imageM9.png"


const Media = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Sample Media Data
  const mediaData = {
    news: [
      {
        id: 1,
        type: 'news',
        title: 'Acharya Ji Explains Importance of Navgraha Shanti',
        excerpt: 'Leading astrologer shares insights on planetary remedies and their significance in modern times.',
        publication: 'Spiritual Times',
        date: '15 Dec 2024',
        image: image9,
        link: '#'
      },
      {
        id: 2,
        type: 'news',
        title: 'Vastu Remedies for Modern Homes - Expert Opinion',
        excerpt: 'Practical Vastu solutions for contemporary living spaces without major renovations.',
        publication: 'Home & Living Magazine',
        date: '3 Jan 2025',
        image:
          image8,
        link: '#'
      },
      {
        id: 3,
        type: 'news',
        title: 'Ancient Wisdom Meets Modern Astrology',
        excerpt: 'How traditional Vedic practices are helping people navigate contemporary challenges.',
        publication: 'Daily Dharma',
        date: '28 Nov 2024',
        image:
          image7,
        link: '#'
      }
    ],
    videos: [
      {
        id: 4,
        type: 'video',
        title: 'Understanding Shani Sade Sati - Complete Guide',
        duration: '12:45',
        views: '25K',
        date: '10 Jan 2025',
        thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80',
        videoId: 'dQw4w9WgXcQ'
      },
      {
        id: 5,
        type: 'video',
        title: 'Navratri Puja Vidhi - Step by Step',
        duration: '18:30',
        views: '42K',
        date: '5 Oct 2024',
        thumbnail: 'https://images.unsplash.com/photo-1604608672516-f1b9b1a4a0f5?w=800&q=80',
        videoId: 'dQw4w9WgXcQ'
      },
      {
        id: 6,
        type: 'video',
        title: 'Career Astrology Q&A Session',
        duration: '22:15',
        views: '18K',
        date: '20 Dec 2024',
        thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
        videoId: 'dQw4w9WgXcQ'
      },
      {
        id: 7,
        type: 'video',
        title: 'Marriage Matching & Kundli Analysis',
        duration: '15:20',
        views: '35K',
        date: '2 Jan 2025',
        thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
        videoId: 'dQw4w9WgXcQ'
      }
    ],
    events: [
      {
        id: 8,
        type: 'event',
        title: 'Vedic Astrology Workshop - Delhi',
        location: 'Connaught Place, New Delhi',
        date: '18 Nov 2024',
        attendees: '200+',
        description: 'Two-day intensive workshop on Vedic astrology fundamentals and practical applications.',
        image: image6
      },
      {
        id: 9,
        type: 'event',
        title: 'Maha Shivaratri Special Seminar',
        location: 'Community Hall, Dwarka',
        date: '8 Mar 2024',
        attendees: '350+',
        description: 'Special discourse on significance of Maha Shivaratri and powerful remedies.',
        image: image5
      },
      {
        id: 10,
        type: 'event',
        title: 'Vastu for Prosperity - Public Talk',
        location: 'India Habitat Centre',
        date: '5 Sep 2024',
        attendees: '150+',
        description: 'Interactive session on Vastu principles for home and business prosperity.',
        image: image4
      }
    ],
    awards: [
      {
        id: 11,
        type: 'award',
        title: 'Best Vedic Astrologer Award 2024',
        organization: 'Indian Astrology Council',
        year: '2024',
        image: image7
      },
      {
        id: 12,
        type: 'award',
        title: 'Excellence in Traditional Knowledge',
        organization: 'Spiritual Leaders Forum',
        year: '2023',
        image: image8
      },
      {
        id: 13,
        type: 'award',
        title: 'Community Service Recognition',
        organization: 'Delhi Cultural Society',
        year: '2024',
        image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&q=80'
      }
    ],
    social: [
      {
        id: 14,
        type: 'social',
        platform: 'instagram',
        title: 'Daily Astrology Tips',
        engagement: '15K likes',
        date: '2 days ago',
        image: image3
      },
      {
        id: 15,
        type: 'social',
        platform: 'youtube',
        title: 'Remedies for Mercury Retrograde',
        engagement: '8K views',
        date: '1 week ago',
        image: image2
      },
      {
        id: 16,
        type: 'social',
        platform: 'facebook',
        title: 'Live Session Announcement',
        engagement: '12K reach',
        date: '3 days ago',
        image: image1
      }
    ]
  };

  const filters = [
    { id: 'all', label: 'All Media', icon: Newspaper },
    { id: 'news', label: 'News & Press', icon: Newspaper },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'events', label: 'Events', icon: Users },
    { id: 'awards', label: 'Awards', icon: Award },
    { id: 'social', label: 'Social Media', icon: Instagram }
  ];

  const getAllItems = () => {
    return [...mediaData.news, ...mediaData.videos, ...mediaData.events, ...mediaData.awards, ...mediaData.social]
      .sort((a, b) => b.id - a.id);
  };

  const getFilteredItems = () => {
    if (activeFilter === 'all') return getAllItems();
    return mediaData[activeFilter] || [];
  };

  const NewsCard = ({ item }) => (
    <div className="group/card h-full animate-fade-in-up" style={{ animationFillMode: 'both' }}>
      <div className="relative h-full p-[1.5px] rounded-3xl bg-amber-400/40 hover:bg-amber-500 transition-all duration-700 shadow-xl shadow-amber-200/10 hover:shadow-amber-200/30 flex flex-col">
        <div className="relative flex-grow bg-[#FCFBF7] rounded-[1.4rem] overflow-hidden flex flex-col group-hover/card:bg-white transition-all duration-500">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-100/40 rounded-full blur-[80px] -mr-24 -mt-24 group-hover/card:bg-amber-400/20 transition-all duration-1000" />

          <div className="relative m-2.5 mb-3 rounded-2xl overflow-hidden shadow-lg h-44 z-10">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-all duration-[2.5s] group-hover/card:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute top-3 left-3 px-2 py-1 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 text-[10px] text-white font-bold uppercase tracking-wider">
              {item.publication}
            </div>
          </div>

          <div className="flex flex-col flex-grow px-5 pb-5 text-center relative z-20">
            <h3 className="text-base md:text-lg font-black text-[#2A1D13] mb-2 line-clamp-2 uppercase group-hover/card:text-amber-600 transition-colors">
              {item.title}
            </h3>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-amber-200 group-hover/card:w-12 transition-all duration-700" />
              <Sparkle className="w-4 h-4 text-amber-500 group-hover/card:rotate-90 transition-transform duration-700" />
              <div className="h-[1px] w-8 bg-amber-200 group-hover/card:w-12 transition-all duration-700" />
            </div>

            <p className="text-gray-600 text-xs font-semibold mb-4 line-clamp-2 leading-relaxed italic">
              "{item.excerpt}"
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-amber-100 pt-4">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                {item.date}
              </span>
              <a href={item.link} className="text-amber-600 hover:text-amber-700 text-[10px] font-black uppercase tracking-widest flex items-center gap-1">
                Read More <ChevronRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const VideoCard = ({ item }) => (
    <div
      className="group/card h-full cursor-pointer animate-fade-in-up"
      style={{ animationFillMode: 'both' }}
      onClick={() => setSelectedVideo(item)}
    >
      <div className="relative h-full p-[1.5px] rounded-3xl bg-amber-400/40 hover:bg-amber-500 transition-all duration-700 shadow-xl shadow-amber-200/10 flex flex-col">
        <div className="relative flex-grow bg-[#FCFBF7] rounded-[1.4rem] overflow-hidden flex flex-col group-hover/card:bg-white transition-all duration-500">
          <div className="relative m-2.5 mb-3 rounded-2xl overflow-hidden shadow-lg h-44 z-10 group/video">
            <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover/video:bg-black/50 transition-all">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center group-hover/video:scale-110 transition-transform shadow-2xl">
                <Play className="w-6 h-6 text-white ml-1 fill-white" />
              </div>
            </div>
            <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg border border-white/20">
              {item.duration}
            </div>
          </div>

          <div className="flex flex-col flex-grow px-5 pb-5 text-center relative z-20">
            <h3 className="text-base md:text-lg font-black text-[#2A1D13] mb-2 line-clamp-2 uppercase group-hover/card:text-amber-600 transition-colors">
              {item.title}
            </h3>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-amber-200 group-hover/card:w-12 transition-all duration-700" />
              <Video className="w-4 h-4 text-amber-500" />
              <div className="h-[1px] w-8 bg-amber-200 group-hover/card:w-12 transition-all duration-700" />
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-amber-100 pt-4">
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                {item.views} views
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                {item.date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const EventCard = ({ item }) => (
    <div className="group/card h-full animate-fade-in-up" style={{ animationFillMode: 'both' }}>
      <div className="relative h-full p-[1.5px] rounded-3xl bg-amber-400/40 hover:bg-amber-500 transition-all duration-700 shadow-xl shadow-amber-200/10 flex flex-col">
        <div className="relative flex-grow bg-[#FCFBF7] rounded-[1.4rem] overflow-hidden flex flex-col group-hover/card:bg-white transition-all duration-500">
          <div className="relative m-2.5 mb-3 rounded-2xl overflow-hidden shadow-lg h-44 z-10">
            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
            <div className="absolute top-3 left-3 px-3 py-1 bg-orange-600 text-white text-[10px] font-bold rounded-full border border-orange-400 shadow-lg uppercase tracking-wider">
              {item.attendees} attendees
            </div>
          </div>

          <div className="flex flex-col flex-grow px-5 pb-5 text-center relative z-20">
            <h3 className="text-base md:text-lg font-black text-[#2A1D13] mb-2 uppercase group-hover/card:text-amber-600 transition-colors">
              {item.title}
            </h3>

            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-[1px] w-8 bg-amber-200 group-hover/card:w-12 transition-all duration-700" />
              <Users className="w-4 h-4 text-amber-500" />
              <div className="h-[1px] w-8 bg-amber-200 group-hover/card:w-12 transition-all duration-700" />
            </div>

            <p className="text-gray-600 text-xs font-semibold mb-4 line-clamp-2 leading-relaxed">
              {item.description}
            </p>

            <div className="mt-auto space-y-2 border-t border-amber-100 pt-4">
              <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] font-bold uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-amber-600" />
                <span>{item.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const AwardCard = ({ item }) => (
    <div className="group/card h-full animate-fade-in-up" style={{ animationFillMode: 'both' }}>
      <div className="relative h-full p-[1.5px] rounded-3xl bg-gradient-to-br from-amber-400 to-orange-500 hover:shadow-2xl transition-all duration-500 flex flex-col">
        <div className="relative flex-grow bg-[#FCFBF7] rounded-[1.4rem] overflow-hidden flex flex-col p-6 group-hover/card:bg-white transition-all">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mb-4 shadow-inner group-hover/card:scale-110 transition-transform duration-500">
              <Award className="w-10 h-10 text-amber-600" />
            </div>

            <h3 className="text-lg font-black text-[#2A1D13] mb-1 uppercase tracking-wide">
              {item.title}
            </h3>

            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-[1px] w-6 bg-amber-300" />
              <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
              <div className="h-[1px] w-6 bg-amber-300" />
            </div>

            <p className="text-gray-600 text-xs font-bold uppercase mb-4 tracking-widest">{item.organization}</p>

            <div className="mt-auto">
              <span className="inline-block bg-[#2A1D13] text-amber-400 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
                Year: {item.year}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const SocialCard = ({ item }) => {
    const platformIcons = {
      instagram: Instagram,
      youtube: Youtube,
      facebook: Facebook
    };
    const PlatformIcon = platformIcons[item.platform];

    return (
      <div className="group/card h-full animate-fade-in-up" style={{ animationFillMode: 'both' }}>
        <div className="relative h-full p-[1.5px] rounded-3xl bg-amber-400/40 hover:bg-amber-500 transition-all duration-700 shadow-xl flex flex-col">
          <div className="relative flex-grow bg-[#FCFBF7] rounded-[1.4rem] overflow-hidden flex flex-col group-hover/card:bg-white transition-all duration-500">
            <div className="relative m-2.5 mb-3 rounded-2xl overflow-hidden shadow-lg h-44 z-10">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110" />
              <div className="absolute inset-0 bg-black/30 group-hover/card:bg-black/40 transition-all" />
              <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 flex items-center justify-center">
                <PlatformIcon className="w-4 h-4 text-white" />
              </div>
            </div>

            <div className="flex flex-col flex-grow px-5 pb-5 text-center relative z-20">
              <h3 className="text-base font-black text-[#2A1D13] mb-3 uppercase group-hover/card:text-amber-600 transition-colors">
                {item.title}
              </h3>

              <div className="mt-auto flex items-center justify-between border-t border-amber-100 pt-4">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  {item.engagement}
                </span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                  {item.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCard = (item) => {
    switch (item.type) {
      case 'news': return <NewsCard key={item.id} item={item} />;
      case 'video': return <VideoCard key={item.id} item={item} />;
      case 'event': return <EventCard key={item.id} item={item} />;
      case 'award': return <AwardCard key={item.id} item={item} />;
      case 'social': return <SocialCard key={item.id} item={item} />;
      default: return null;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#FAF9F6] relative overflow-hidden">
        {/* Divine Background Ornaments (consistent with About page) */}
        <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[120px] -z-10" />

        {/* Hero Section (About page style) */}
        <section className="relative h-[320px] sm:h-[320px] md:h-[360px] lg:h-[370px] flex items-center py-[20px] text-white overflow-hidden">
          <div className="absolute inset-0">
            <img src={banner} alt="Background" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/65" />
            <div className="absolute inset-0 backdrop-blur-[1px]" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-8 shadow-2xl">
                <Award className="w-4 h-4 text-[#FFC107]" />
                <span className="text-[#FFC107] text-xs md:text-sm font-black uppercase tracking-widest">DIVINE SERVICES HUB</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] uppercase">
                Acharya Ji in <br />
                <span className="text-yellow-300">Media & Public Platforms</span>
              </h1>
              <p className="text-lg md:text-xl text-amber-100 leading-relaxed font-medium max-w-2xl mx-auto mb-4 drop-shadow">
                Spreading Vedic wisdom, performing sacred rituals, and guiding thousands through traditional wisdom and spiritual enlightenment.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section (Premium Cards) */}
        <section className="py-12 md:py-16 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { value: '50K+', label: 'Subscribers', icon: Youtube },
                { value: '35K+', label: 'Followers', icon: Instagram },
                { value: '100+', label: 'Features', icon: Newspaper },
                { value: '25+', label: 'Public Events', icon: Users }
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/80 backdrop-blur-xl px-8 py-5 rounded-2xl border-b-4 border-orange-500 shadow-xl flex flex-col items-center min-w-[160px] group hover:-translate-y-2 transition-transform animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.1}s`, animationFillMode: 'both' }}
                >
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center mb-3 group-hover:bg-orange-600 transition-colors">
                    <item.icon className="w-5 h-5 text-orange-600 group-hover:text-white" />
                  </div>
                  <div className="text-2xl font-black text-[#2A1D13]">{item.value}</div>
                  <div className="text-orange-600 text-[10px] font-black uppercase tracking-widest">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filter Tabs (Refined Style) */}
        <div className="sticky top-0 z-40 bg-[#FAF9F6]/80 backdrop-blur-md border-b border-orange-100/50 mb-12">
          <div className="container mx-auto px-4 overflow-x-auto">
            <div className="flex justify-center gap-3 py-6 min-w-max">
              {filters.map(filter => {
                const Icon = filter.icon;
                const isActive = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all duration-500 border ${isActive
                      ? 'bg-[#2A1D13] text-amber-400 border-[#2A1D13] shadow-lg -translate-y-0.5'
                      : 'bg-white text-gray-600 border-orange-100 hover:border-orange-200 hover:bg-orange-50/50'
                      }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-orange-600'}`} />
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <section className="pb-20">
          <div className="container mx-auto px-4 max-w-7xl">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {getFilteredItems().map(item => renderCard(item))}
            </div>

            {getFilteredItems().length === 0 && (
              <div
                className="text-center py-12 md:py-16 flex flex-col items-center animate-fade-in"
              >
                <Sparkles className="w-12 h-12 text-orange-200 mb-4" />
                <p className="text-gray-400 font-bold uppercase tracking-widest">Divine content arriving soon...</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section (Matched to About page) */}
        <section className="py-12 md:py-16 bg-white border-t border-orange-50">
          <div className="container mx-auto px-4 text-center max-w-5xl">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50/50 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                <Heart className="w-3.5 h-3.5" />
                <span>Spiritual Connection</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A1B13] mb-4 tracking-tight uppercase">
                Experience the <span className="text-[#E8453C]">Divine Grace</span>
              </h2>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="w-10 h-[1.5px] bg-orange-200" />
                <Sparkles className="w-5 h-5 text-orange-400" />
                <div className="w-10 h-[1.5px] bg-orange-200" />
              </div>
              <p className="text-gray-600 mb-10 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                Join Acharya Ji's spiritual family and discover the profound impact of
                authentic Vedic rituals and divine guidance in your life.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/puja/online">
                  <button className="group relative bg-[#E8453C] hover:bg-[#CC3B34] text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center gap-2.5">
                      <Calendar className="w-4 h-4" /> Book Sacred Puja
                    </span>
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="group relative bg-[#F59E0B] hover:bg-[#D97706] text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                    <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    <span className="relative flex items-center gap-2.5">
                      <Phone className="w-4 h-4" /> professional Consultation
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Video Modal (Consistent styling) */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="bg-[#FCFBF7] rounded-3xl max-w-4xl w-full overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-amber-200/50 animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-5 border-b border-amber-100 flex items-center justify-between bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-8 bg-orange-600 rounded-full" />
                  <h3 className="font-black text-[#2A1D13] text-sm md:text-base uppercase tracking-wider">{selectedVideo.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="p-2 hover:bg-orange-50 rounded-full transition-colors group"
                >
                  <X className="w-6 h-6 text-gray-400 group-hover:text-orange-600 transition-colors" />
                </button>
              </div>
              <div className="aspect-video bg-black flex items-center justify-center">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6 bg-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-black text-gray-400 uppercase tracking-widest">{selectedVideo.views} Views</span>
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  <span className="text-xs font-black text-orange-600 uppercase tracking-widest">{selectedVideo.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-[10px] font-black text-amber-600 uppercase tracking-widest">Acharya Ji Official</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Media;