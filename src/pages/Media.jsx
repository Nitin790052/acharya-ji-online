import React, { useState } from 'react';
import { Play, ExternalLink, Calendar, MapPin, Award, Newspaper, Video, Users, Instagram, Facebook, Youtube, X } from 'lucide-react';
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
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={item.image} alt={item.title} className="w-full h-48 bg-cover" />
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-orange-600 mb-2">
          <Newspaper className="w-4 h-4" />
          <span className="font-medium">{item.publication}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-gray-500 flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {item.date}
          </span>
          <button className="text-orange-600 hover:text-orange-700 text-sm font-medium flex items-center gap-1">
            Read Article <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );

  const VideoCard = ({ item }) => (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={() => setSelectedVideo(item)}
    >
      <div className="relative">
        <img src={item.thumbnail} alt={item.title} className="w-full h-48 bg-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-50 transition-all">
          <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
            <Play className="w-6 h-6 text-white ml-1" fill="white" />
          </div>
        </div>
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
          {item.duration}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h3>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>{item.views} views</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {item.date}
          </span>
        </div>
      </div>
    </div>
  );

  const EventCard = ({ item }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={item.image} alt={item.title} className="w-full h-48 bg-cover" />
      <div className="p-5">
        <div className="flex items-center gap-2 text-sm text-purple-600 mb-2">
          <Users className="w-4 h-4" />
          <span className="font-medium">{item.attendees} attendees</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{item.description}</p>
        <div className="space-y-2 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{item.date}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const AwardCard = ({ item }) => (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 p-6">
      <div className="flex items-start gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
          <Award className="w-8 h-8 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{item.organization}</p>
          <span className="inline-block bg-orange-600 text-white text-xs px-3 py-1 rounded-full">
            {item.year}
          </span>
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
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <img src={item.image} alt={item.title} className="w-full h-48 bg-cover" />
        <div className="p-5">
          <div className="flex items-center gap-2 text-sm text-blue-600 mb-2">
            <PlatformIcon className="w-4 h-4" />
            <span className="font-medium capitalize">{item.platform}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
          <div className="flex items-center justify-between text-sm text-gray-600">
            <span>{item.engagement}</span>
            <span>{item.date}</span>
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
     <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Hero Section */}
<div className="relative text-white py-20 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src={banner}
      alt="Acharya Ji Media Coverage"
      className="w-full h-full object-cover"
      style={{
        filter: 'brightness(1.05) contrast(1.05) saturate(1.1)'
      }}
    />

    {/* Single Professional Overlay (KEY PART) */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/55" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
      Acharya Ji in Media & Public Platforms
    </h1>

    <p className="text-xl text-orange-100 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
      Spreading Vedic wisdom through trusted media channels and digital platforms
    </p>

    {/* Stats */}
    <div className="flex flex-wrap justify-center gap-8 mt-12">
      {[
        { value: '50K+', label: 'YouTube Subscribers' },
        { value: '35K+', label: 'Instagram Followers' },
        { value: '100+', label: 'Media Features' },
        { value: '25+', label: 'Public Events' }
      ].map((item, i) => (
        <div
          key={i}
          className="bg-black/30 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-lg"
        >
          <div className="text-3xl font-bold">{item.value}</div>
          <div className="text-orange-200 text-sm">{item.label}</div>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Filter Tabs */}
      <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide gap-4 py-4">
            {filters.map(filter => {
              const Icon = filter.icon;
              return (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center gap-2 px-6 py-2 rounded-full font-medium transition-all whitespace-nowrap ${
                    activeFilter === filter.id
                      ? 'bg-orange-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Media Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getFilteredItems().map(item => renderCard(item))}
        </div>

        {getFilteredItems().length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No content available in this category yet.</p>
          </div>
        )}
      </div>

      {/* Conversion CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16 mt-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want Personal Guidance from Acharya Ji?</h2>
          <p className="text-orange-100 text-lg mb-8">
            Get expert consultation on astrology, vastu, puja services, and spiritual guidance
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors">
              Book Consultation
            </button>
            <button className="bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Chat
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition-colors">
              Book Puja
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div className="bg-white rounded-lg max-w-4xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b flex items-center justify-between">
              <h3 className="font-bold text-lg">{selectedVideo.title}</h3>
              <button 
                onClick={() => setSelectedVideo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-gray-900 flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </div>
   </Layout>
  );
};

export default Media;