import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sparkles, Home, Video, Star, Package, Truck, Gift, ArrowRight } from 'lucide-react';
import Puja_Services from "../../assets/coreServices/poojaServices.png"
import Astrology_Consultation from "../../assets/coreServices/astrologer.png"
import Kundli_Services from "../../assets/coreServices/KundliServices.png"
import Vastu_Remedies from "../../assets/coreServices/Vastu&Remedies.png"
import Healing_Spiritual from "../../assets/coreServices/Healing&Spiritual.png"
import Shop from "../../assets/coreServices/Samagri&Gemstones.png"
import HomePooja from "../../assets/detailedServices/HomeVisitPuja.png"
import OnlinePuja from "../../assets/detailedServices/OnlinePuja.png"
import SpecialAnushthan from "../../assets/detailedServices/SpecialAnushthan.png"
import PujaSamagri from "../../assets/detailedServices/PujaSamagri.png"
import PrasadDelivery from "../../assets/detailedServices/PrasadDelivery.png"
import FestivalSpecials from "../../assets/detailedServices/FestivalSpecials.png"

const coreServices = [
  {
    image: Puja_Services,
    title: 'Puja Services',
    description: 'Online & Offline Puja',
    href: '/puja',
    gradient: 'from-orange-500 to-red-600',
    icon: '🔱'
  },
  {
    image: Astrology_Consultation,
    title: 'Astrology Consultation',
    description: 'Expert Astrologers',
    href: '/astrology',
    gradient: 'from-purple-500 to-indigo-600',
    icon: '🔮'
  },
  {
    image: Kundli_Services,
    title: 'Kundli Services',
    description: 'Birth Chart Analysis',
    href: '/kundli',
    gradient: 'from-amber-500 to-orange-600',
    icon: '📜'
  },
  {
    image: Vastu_Remedies,
    title: 'Vastu & Remedies',
    description: 'Space Harmonization',
    href: '/vastu',
    gradient: 'from-teal-500 to-cyan-600',
    icon: '🧿'
  },
  {
    image: Healing_Spiritual,
    title: 'Healing & Spiritual',
    description: 'Energy Cleansing',
    href: '/spiritual',
    gradient: 'from-green-500 to-emerald-600',
    icon: '🌿'
  },
  {
    image: Shop,
    title: 'Shop',
    description: 'Samagri & Gemstones',
    href: '/shop',
    gradient: 'from-pink-500 to-rose-600',
    icon: '🛒'
  },
];

const services = [
  {
    icon: Video,
    title: 'Online Puja',
    description: 'Live virtual ceremonies conducted by experienced priests from sacred locations.',
    href: '/puja/online',
    gradient: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    Image: OnlinePuja
  },
  {
    icon: Home,
    title: 'Home Visit Puja',
    description: 'Authentic rituals performed at your home by our certified pandits.',
    href: '/puja/offline',
    gradient: 'from-amber-500 to-orange-600',
    bgGradient: 'from-amber-50 to-orange-50',
    Image: HomePooja
  },
  {
    icon: Star,
    title: 'Special Anushthan',
    description: 'Elaborate multi-day ceremonies for major life events and wishes.',
    href: '/puja/anushthan',
    gradient: 'from-red-600 to-pink-600',
    bgGradient: 'from-red-50 to-pink-50',
    Image: SpecialAnushthan
  },
  {
    icon: Package,
    title: 'Puja Samagri',
    description: 'Premium quality puja items sourced from authentic suppliers.',
    href: '/samagri/essentials',
    gradient: 'from-purple-600 to-indigo-600',
    bgGradient: 'from-purple-50 to-indigo-50',
    Image: PujaSamagri
  },
  {
    icon: Truck,
    title: 'Prasad Delivery',
    description: 'Sacred offerings delivered fresh to your doorstep from temples.',
    href: '/products/prasad',
    gradient: 'from-green-600 to-teal-600',
    bgGradient: 'from-green-50 to-teal-50',
    Image: PrasadDelivery
  },
  {
    icon: Gift,
    title: 'Festival Specials',
    description: 'Curated packages for festivals with all essential items.',
    href: '/products/festival',
    gradient: 'from-pink-600 to-rose-600',
    bgGradient: 'from-pink-50 to-rose-50',
    Image:FestivalSpecials
  },
];

const staggeredContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const floatingCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      delay: index * 0.1,
    }
  }),
  hover: (index) => ({
    y: -10,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  })
};

export function Services() {
  return (
    <>
      <section className="py-8 md:py-10 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-center mb-8 md:mb-10"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-red-700 rounded-full text-xs font-semibold mb-3 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Quick Access
            </motion.span>
            
            <h2 className="text-xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-orange-700 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            
            <p className="text-gray-600 text-xs md:text-sm max-w-2xl mx-auto">
              Choose from our comprehensive range of spiritual and wellness services
            </p>
          </motion.div>

          <motion.div
            variants={staggeredContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 relative"
          >
            {coreServices.map((service, index) => (
              <motion.div 
                key={service.title}
                custom={index}
                variants={floatingCardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="group relative"
                style={{
                  zIndex: coreServices.length - index,
                }}
              >
                <Link
                  to={service.href}
                  className="relative flex flex-col items-center text-center bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-orange-300 h-full"
                >
                  <div className="relative w-full min-h-[130px] md:min-h-[180px] overflow-hidden">
                    <motion.img 
                      src={service.image} 
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-fit-stretch"
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                        display: 'block'
                      }}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    
                    <div className="absolute top-3 right-3 z-20">
                      <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center border border-gray-200 shadow-sm">
                        <span className="text-lg">{service.icon}</span>
                      </div>
                    </div>
                    
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent z-10">
                      <h3 className="text-sm md:text-base font-bold mb-1 text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-100 drop-shadow">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient}`} />
                  </div>
                  
                  <div className="relative p-3 pt-2 w-full">
                    <div className="flex items-center justify-center gap-1.5">
                      <span className="text-xs text-gray-600 group-hover:text-orange-600 font-medium transition-colors duration-300">
                        View Details
                      </span>
                      <ArrowRight className="w-3 h-3 text-gray-500 group-hover:text-orange-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500 -z-10`} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-5 md:py-6 bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-8 w-60 h-60 bg-orange-200/30 rounded-full blur-2xl" />
          <div className="absolute bottom-16 right-8 w-80 h-80 bg-red-200/20 rounded-full blur-2xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10 md:mb-14"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-red-700 rounded-full text-xs font-semibold mb-5 shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Our Divine Services
            </motion.span>
            
            <h2 className="text-2xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-orange-700 via-red-600 to-pink-600 bg-clip-text text-transparent">
              Spiritual Services for Every Need
            </h2>
            
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              From daily worship to grand ceremonies, we offer comprehensive spiritual services 
              to bring divine blessings into your life.
            </p>
          </motion.div>

          <motion.div
            variants={staggeredContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
          >
            {services.map((service, index) => (
              <motion.div 
                key={service.title} 
                custom={index}
                variants={floatingCardVariants}
                className="group"
              >
                <Link
                  to={service.href}
                  className="relative block h-full bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100"
                >
                  <div className="relative min-h-[160px] md:min-h-[230px] overflow-hidden">
                    {service.Image && (
                      <motion.img 
                        src={service.Image} 
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-fit-stretch"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'fill',
                          display: 'block'
                        }}
                      />
                    )}
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                    
                    <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg z-10`}>
                      <service.icon className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10 bg-gradient-to-t from-black/50 to-transparent p-3 rounded">
                      <h3 className="text-lg font-bold mb-1 drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="relative p-5 md:p-6 flex flex-col min-h-[140px]">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-orange-600 font-semibold text-xs group-hover:gap-2 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>

                  <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`} />
                  
                  <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-15 rounded-bl-full transition-opacity duration-500`} />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-10 md:mt-14"
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:gap-3"
            >
              View All Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}