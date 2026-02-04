import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

// Utility function for className merging
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Button component
const Button = ({ variant, size, className, children, ...props }) => {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center transition-colors',
        variant === 'ghost' && 'hover:bg-gray-100',
        size === 'icon' && 'h-10 w-10',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  {
    label: 'Puja Services',
    href: '/pujaServices',
    children: [
      { label: 'Book Puja', href: '/pujaServices/bookPuja' },
      { label: 'Griha Pravesh Puja', href: '/pujaServices/girhaPraveshPuja' },
      { label: 'Satyanarayan Katha', href: '' },
       { label: 'Rudrabhishek', href: '' },
        { label: 'Navgraha Shanti Puja', href: '' },
         { label: 'Vastu Shanti Puja', href: '' },
          { label: 'Marriage / Vivah Puja', href: '' },
           { label: 'Pitru Dosh Puja', href: '' },
            { label: 'Havan & Yagya', href: '' },
            { label: ' All Puja Services', href: '' },
    ],
  },
  {
    label: 'Astrology Services',
    href: '/astrology',
    children: [
      { label: 'Talk to Astrologer', href: '' },
      { label: 'Career Astrology', href: '' },
      { label: 'Marriage Astrology', href: '' },
      { label: 'Business Astrology', href: '' },
      { label: 'Health Astrology', href: '' },
      { label: 'Numerology', href: '' },
      { label: 'Tarot Reading', href: '' },
      { label: 'Palmistry', href: '' },
      { label: 'Gemstone Suggestion', href: '' },
    ],
  },
  {
    label: 'Kundli',
    href: '/kundli',
    children: [
      { label: 'Get Your Kundli', href: '' },
      { label: 'Kundli Matching', href: '' },
      { label: 'Manglik Dosh Check', href: '' },
      { label: 'Kaal Sarp Dosh', href: '' },
      { label: 'Pitru Dosh', href: '' },
      { label: 'Shani Sade Sati', href: '' },
      { label: 'Dasha Analysis', href: '' },
      { label: 'Kundli Remedies', href: '' },
    ],
  },
  {
    label: 'Vastu',
    href: '/vastu',
    children: [
      { label: 'Vastu Consultation', href: '' },
      { label: 'Home / Office Vastu', href: '' },
      { label: 'Feng Shui', href: '' },
      { label: 'Gemstones', href: '' },
      { label: 'Rudraksha', href: '' },
      { label: 'Yantra', href: '' },
      { label: 'Energized Products', href: '' },
    ],
  },
  {
    label: 'Healing',
    href: '/spiritual',
    children: [
      { label: 'Reiki Healing', href: '' },
      { label: 'Crystal Healing', href: '' },
      { label: 'Chakra Balancing', href: '' },
      { label: 'Aura Cleansing', href: '' },
      { label: 'Meditation Guidance', href: '' },
    ],
  },
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'Puja Samagri', href: '' },
      { label: 'Gemstones', href: '' },
      { label: 'Yantra', href: '' },
    ],
  },
  {
    label: 'Learn',
    href: '/learn',
    children: [
      { label: 'Astrology Courses', href: '' },
      { label: 'Puja Vidhi Guides', href: '' },
      { label: 'Mantra Chanting', href: '' },
      { label: 'Blogs & Articles', href: '' },
    ],
  },
  { label: 'Career', href: '/career' },
  { label: 'Media', href: '/media' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

// const navItems = [
//   { label: 'Home', href: '/' },
//   { label: 'About Us', href: '/about' },
//   {
//     label: 'Puja Services',
//     href: '/puja',
//     children: [
//       { label: 'Online Puja', href: '/puja/online',  },
//       { label: 'Offline Puja', href: '/puja/offline',  },
//       { label: 'Special Anushthan', href: '/puja/anushthan',  },
//     ],
//   },
//    {
//     label: 'Astrology Services',
//     href: '/puja',
//     children: [
//       { label: 'Online Puja', href: '/puja/online',  },
//       { label: 'Offline Puja', href: '/puja/offline',  },
//       { label: 'Special Anushthan', href: '/puja/anushthan',  },
//     ],
//   },
//    {
//     label: 'Kundli',
//     href: '/puja',
//     children: [
//       { label: 'Online Puja', href: '/puja/online',  },
//       { label: 'Offline Puja', href: '/puja/offline',  },
//       { label: 'Special Anushthan', href: '/puja/anushthan',  },
//     ],
//   },
//    {
//     label: 'Vastu & Remedies',
//     href: '/puja',
//     children: [
//       { label: 'Online Puja', href: '/puja/online',  },
//       { label: 'Offline Puja', href: '/puja/offline',  },
//       { label: 'Special Anushthan', href: '/puja/anushthan',  },
//     ],
//   },
//    {
//     label: 'Spritual & Healing',
//     href: '/puja',
//     children: [
//       { label: 'Online Puja', href: '/puja/online',  },
//       { label: 'Offline Puja', href: '/puja/offline',  },
//       { label: 'Special Anushthan', href: '/puja/anushthan',  },
//     ],
//   },
//    {
//     label: 'Shop',
//     href: '/puja',
//     children: [
//       { label: 'Online Puja', href: '/puja/online',  },
//       { label: 'Offline Puja', href: '/puja/offline',  },
//       { label: 'Special Anushthan', href: '/puja/anushthan',  },
//     ],
//   },
//    {
//     label: 'Learn',
//     href: '/puja',
//     children: [
//       { label: 'Online Puja', href: '/puja/online',  },
//       { label: 'Offline Puja', href: '/puja/offline',  },
//       { label: 'Special Anushthan', href: '/puja/anushthan',  },
//     ],
//   },
//   // {
//   //   label: 'Puja Samagri',
//   //   href: '/samagri',
//   //   children: [
//   //     { label: 'Puja Essentials', href: '/samagri/essentials',  },
//   //     { label: 'Idols & Murtis', href: '/samagri/idols',  },
//   //     { label: 'Hawan & Ritual Items', href: '/samagri/hawan',  },
//   //   ],
//   // },
//   // {
//   //   label: 'Products',
//   //   href: '/products',
//   //   children: [
//   //     { label: 'Prasad Delivery', href: '/products/prasad',  },
//   //     { label: 'Puja Kits', href: '/products/kits',  },
//   //     { label: 'Festival Specials', href: '/products/festival',  },
//   //   ],
//   // },
//   // { label: 'Two Bidders', href: '/bidders' },
//   { label: 'Gallery', href: '/gallery' },
//   { label: 'Blog', href: '/blog' },
//   { label: 'Contact', href: '/contact' },
// ];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (href) => {
    // Replace with your actual router logic
    return window.location.pathname === href;
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100/50"
    >
      <div className="container mx-auto px-4 lg:px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          
          {/* Logo Section */}
          <Link to="/" className="relative group flex items-center py-1 no-underline">
            <div className="absolute inset-0 bg-orange-100/40 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <motion.div whileHover={{ scale: 1.02 }} className="relative z-10">
              <img 
                src="/logo.png" 
                alt="Acharya Ji" 
                className="h-10 md:h-16 w-auto object-contain transition-all duration-300" 
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - OPTIMIZED */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
  to={item.href}
  className={cn(
    "relative px-3 py-2 rounded-lg flex items-center gap-1 text-[13px] font-medium whitespace-nowrap transition-colors duration-300",
    "after:absolute after:left-3 after:-bottom-0.5 after:h-[3px] after:w-0 after:bg-orange-600 after:rounded-full after:transition-all after:duration-300 after:ease-out",
    "hover:after:w-[calc(100%-1.5rem)] hover:text-red-700 hover:bg-orange-50/60",
    isActive(item.href) && "text-orange-500 bg-orange-50 shadow-sm after:w-[calc(100%-1.5rem)]"
  )}
>
  {item.label}
  {item.children && (
    <ChevronDown
      className={cn(
        "w-3.5 h-3.5 transition-transform duration-300",
        activeDropdown === item.label && "rotate-180"
      )}
    />
  )}
</Link>


                {/* Dropdown Desktop - OPTIMIZED */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-orange-100 overflow-hidden z-50"
                    >
                      <div className="p-1.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block p-2.5 rounded-lg hover:bg-orange-50 transition-all group"
                          >
                            <span className="block text-[13px] font-semibold text-gray-800 group-hover:text-red-700 transition-colors">
                              {child.label}
                            </span>
                            {child.description && (
                              <p className="text-xs text-gray-500 mt-0.5 leading-tight group-hover:text-gray-600">
                                {child.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                      <div className="h-1 bg-gradient-to-r from-orange-400 to-red-600" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-red-700 hover:bg-orange-50 rounded-xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu Content - OPTIMIZED */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-orange-100 bg-white"
            >
              <div className="py-3 space-y-1 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <MobileNavItem 
                    key={item.label} 
                    item={item} 
                    onClose={() => setMobileMenuOpen(false)} 
                    isActive={isActive} 
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// --- OPTIMIZED MOBILE ITEM COMPONENT ---
function MobileNavItem({ item, onClose, isActive }) {
  const [isOpen, setIsOpen] = useState(false);
  const active = isActive(item.href);

  if (!item.children) {
    return (
      <Link
        to={item.href}
        onClick={onClose}
        className={cn(
          "block px-4 py-3 mx-2 rounded-lg font-semibold text-sm transition-all",
          active 
            ? "bg-orange-50 text-red-700 shadow-sm" 
            : "text-gray-700 hover:bg-orange-50/50 hover:text-red-700"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="space-y-1 mx-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 rounded-lg font-semibold text-sm transition-all",
          isOpen ? "bg-orange-50 text-red-700" : "text-gray-700 hover:bg-orange-50/50"
        )}
      >
        {item.label}
        <ChevronDown 
          className={cn(
            "w-4 h-4 transition-transform duration-300", 
            isOpen && "rotate-180"
          )} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-orange-50/40 rounded-lg ml-2"
          >
            <div className="py-1.5">
              {item.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.href}
                  onClick={onClose}
                  className="flex flex-col px-4 py-2.5 rounded-md hover:bg-white/80 transition-all group"
                >
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-red-700">
                    {child.label}
                  </span>
                  {child.description && (
                    <span className="text-xs text-gray-500 mt-0.5 leading-tight">
                      {child.description}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}