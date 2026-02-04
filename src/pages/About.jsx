import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Phone, Users, Heart, Award, Globe, Shield, Sparkles, BookOpen, Star, CheckCircle, Clock, MapPin, ChevronRight } from "lucide-react";
import { Layout } from '@/components/layout/Layout';
import bgImage from "../assets/banners/image2.png"
import about from "../assets/aboutImage/acharyaji.jpg"
import OurMission from "../assets/aboutPage/OurMission.png"
import OurVision from "../assets/aboutPage/OurVision.png"
import PujaServices1 from "../assets/aboutPage/PujaServices1.png"
import Vastu from "../assets/aboutPage/Vastu.png"
import AstrologyServices from "../assets/aboutPage/AstrologyServices.png"
import Healing_Wellness from "../assets/aboutPage/Healing&Wellness.png"

const AboutUs = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const stats = [
    { value: '50,000+', label: 'Happy Devotees', icon: Users },
    { value: '10+', label: 'Years Experience', icon: Award },
    { value: '100+', label: 'Verified Acharyas', icon: Users },
    { value: 'Pan-India', label: 'Service Coverage', icon: Globe }
  ];

  const services = [
    {
      Image:PujaServices1,
      title: "Puja Services",
      items: ["Griha Pravesh Puja", "Satyanarayan Katha", "Rudrabhishek", "Navgraha Shanti", "Marriage & Vivah Puja", "Pitru Dosh Puja", "Havan & Yagya"],
      color: "from-orange-500 to-red-600"
    },
    {
      Image:AstrologyServices,
      title: "Astrology Services",
      items: ["Kundli Making & Matching", "Manglik / Kaal Sarp / Pitru Dosh", "Career, Marriage & Business", "Numerology & Tarot", "Shani Sade Sati Analysis"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      Image:Vastu,
      title: "Vastu & Spiritual Products",
      items: ["Home & Office Vastu", "Feng Shui", "Gemstones & Rudraksha", "Yantra", "Energized Spiritual Products"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      Image:Healing_Wellness,
      title: "Healing & Wellness",
      items: ["Reiki Healing", "Crystal Healing", "Chakra & Aura Cleansing", "Meditation Guidance"],
      color: "from-green-500 to-emerald-600"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Devotion',
      description: 'Every ritual is performed with utmost devotion and sincerity following proper Vedic traditions.',
    },
    {
      icon: Award,
      title: 'Authenticity',
      description: 'We preserve ancient traditions and authentic shastra-based practices.',
    },
    {
      icon: Users,
      title: 'Service',
      description: 'Dedicated to serving devotees with humility, transparency and care.',
    },
  ];

  const whyChoose = [
    { icon: "", title: "100% Authentic Vedic Rituals", desc: "Traditional vidhi followed" },
    { icon: "", title: "Verified Acharyas", desc: "Experienced spiritual experts" },
    { icon: "", title: "At-home & Online Services", desc: "Convenience at your doorstep" },
    { icon: "", title: "Proper Mantra & Vidhi", desc: "Shastra-based procedures" },
    { icon: "", title: "Transparent Consultation", desc: "Clear pricing & guidance" },
    { icon: "", title: "Thousands Satisfied", desc: "Trusted by devotees nationwide" }
  ];

  return (
   <Layout>
     {/* Yeh wrapper div min-height 80vh set karega */}
     <div className="min-h-[80vh]">
       <div className="min-h-screen bg-background">
        {/* Hero Section */}
    <section className="relative py-10 sm:py-14 md:py-20 text-white overflow-hidden">

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

    {/* ✅ Single Professional Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/55" />

    {/* Soft depth glow (optional but premium) */}
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl opacity-50" />
    <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl opacity-50" />
  </div>

  {/* Content */}
  <div className="container mx-auto px-4 relative z-10">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center"
    >
      <span className="inline-block px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
        About Us
      </span>

      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)]">
        Preserving Sanatan Traditions with<br />
        <span className="text-yellow-300">Authentic Vedic Wisdom</span>
      </h1>

      <p className="text-lg md:text-xl text-orange-100 leading-relaxed drop-shadow">
        A trusted spiritual platform offering authentic puja services, Vedic astrology,
        vastu consultation, and healing solutions — performed by experienced and learned Acharyas.
      </p>
    </motion.div>
  </div>

</section>


        {/* Stats Section */}
        <section className="pt-20 pb-8 -mt-10 relative z-10">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-2xl shadow-amber-100 p-3 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Story Section - Who We Are */}
        <section className="py-5 overflow-x-hidden">
          <div className="container mx-auto px-4 ">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="inline-block px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-medium mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text text-transparent mb-6">
                  Bridging Tradition and Convenience
                </h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  <strong className="text-orange-600">Acharya Ji Online</strong> is a digital spiritual platform dedicated to bringing Sanatan Dharma closer to every household. We connect devotees with experienced priests, astrologers, and spiritual experts for authentic pujas, astrology services, vastu solutions, and spiritual guidance — both online and at your location.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  What started as a small initiative to connect families with local priests has grown into a comprehensive platform serving thousands of devotees across India. Our team of verified priests, religious scholars, and dedicated support staff ensures that every ritual carries the sanctity and authenticity it deserves.
                </p>
                <div className="space-y-3">
                  {[
                    'Authentic Vedic rituals',
                    'Verified Acharyas',
                    'Transparent pricing',
                    'Personalized guidance'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
               <div className="w-full h-[400px] sm:h-[400px] md:h-[530px] rounded-2xl overflow-hidden border-4 border-orange-200 relative">
  {/* Background Image */}
  <img
    src={about}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark + Orange Overlay */}
  {/* <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-orange-900/30 to-red-900/40" /> */}

  {/* Center Animated Icon */}
  <div className="absolute inset-0 flex items-center justify-center">
    {/* <motion.div
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="w-24 h-24 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shadow-2xl border-4 border-white/30"
    >
      <span className="text-3xl sm:text-5xl">🙏</span>
    </motion.div> */}
  </div>
</div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-10 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-800 to-amber-500 bg-clip-text text-transparent mb-4">
                Our Vision & Mission
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-4">
             <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-orange-200 overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute inset-0 opacity-30">
    <img
      src={OurVision}
      alt=""
      className="w-full h-full bg-cover"
    />
  </div>

  {/* Content */}
  <div className="relative z-10">
    <div className="text-6xl mb-6 text-center"></div>
    <h3 className="text-2xl font-bold text-orange-600 mb-4 text-center">
      Our Vision
    </h3>
    <p className="text-gray-700 leading-relaxed text-center">
      To make authentic Sanatan rituals and Vedic knowledge accessible to everyone, anywhere in the world.
    </p>
  </div>
</motion.div>


              <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ delay: 0.2 }}
  className="relative bg-white rounded-2xl p-8 shadow-lg border-2 border-red-200 overflow-hidden"
>
  {/* Background Image */}
  <div className="absolute inset-0 opacity-30">
    <img
      src={OurMission}
      alt=""
      className="w-full h-full bg-cover"
    />
  </div>

  {/* Content */}
  <div className="relative z-10">
    <div className="text-6xl mb-6 text-center"></div>

    <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">
      Our Mission
    </h3>

    <ul className="space-y-3">
      {[
        "Preserve traditional puja vidhi",
        "Provide accurate astrology & kundli services",
        "Offer trusted spiritual and vastu solutions",
        "Spread peace, positivity & dharmic values"
      ].map((item, idx) => (
        <li key={idx} className="flex items-start gap-3">
          <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <span className="text-gray-700 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </div>
</motion.div>

            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-10">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-800 to-amber-500 bg-clip-text text-transparent mb-4">
                What We Offer
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6 rounded-full" />
              <p className="text-gray-600 max-w-3xl mx-auto">
                Comprehensive spiritual services aligned with your needs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  onMouseEnter={() => setHoveredService(idx)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group relative"
                >
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-100 hover:border-orange-300 transition-all duration-300 h-full ${hoveredService === idx ? 'scale-105 shadow-2xl' : ''}`}>
                    <div className="w-full h-40 border-2 border-x-orange-500 border-y-maroon rounded-sm"><img src={service.Image} alt="" className="w-full h-full inset-0 bg-cover" /></div> 
                    <h3 className={`text-xl font-bold mb-4 text-center bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                      {service.title}
                    </h3>
                    <ul className="space-y-2">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-10 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="container mx-auto px-4 max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-800 to-amber-500 bg-clip-text text-transparent mb-4">
                Why Choose Acharya Ji Online
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6 rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChoose.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-400 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-7 bg-gradient-to-br from-orange-600 via-red-600 to-orange-700 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Core Values
              </h2>
              <p className="text-orange-100 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm border border-white/20"
                >
                  <div className="w-10 h-10 rounded-full bg-yellow-400 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-orange-900" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-orange-100">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Belief */}
        <section className="py-10 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-800 to-amber-500 bg-clip-text text-transparent mb-6">Our Belief</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We believe that spirituality is not superstition — it is science rooted in ancient wisdom. Every puja, mantra, and ritual performed through Acharya Ji Online follows proper shastra-based vidhi to bring peace, prosperity, and positivity.
              </p>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl mb-6"></div>
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-800 to-amber-500 bg-clip-text text-transparent mb-6">
                Begin Your Spiritual Journey With Us
              </h2>
              <p className="text-gray-600 mb-10 text-lg">
                Join thousands of satisfied families who trust Acharya Ji Online for their spiritual needs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/puja/online">
                  <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Book Puja Now
                  </button>
                </Link>
                <Link to="/astrology">
                  <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Talk to Astrologer
                  </button>
                </Link>
                <Link to="/kundli">
                  <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Generate Free Kundli
                  </button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
     </div>
   </Layout>
  );
};

export default AboutUs;