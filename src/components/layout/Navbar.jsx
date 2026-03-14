import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

    children: [
      { label: 'Talk to Astrologer', href: '/astrologer' },
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

    children: [
      { label: 'Get Your Kundli', href: '/kundli' },
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
      { label: 'Vastu Consultation', href: '/vastu-consultation' },
      { label: 'Home / Office Vastu', href: '/home-office-vastu' },
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
      { label: 'Reiki Healing', href: '/reiki-healing' },
      { label: 'Crystal Healing', href: '/crystal-healing' },
      { label: 'Chakra Balancing', href: '' },
      { label: 'Aura Cleansing', href: '' },
      { label: 'Meditation Guidance', href: '' },
    ],
  },
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'Puja Samagri', href: '/puja-samagri' },
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

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (href) => {
    return window.location.pathname === href;
  };

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-orange-100/50 animate-[fade-in_0.4s_ease-out]"
    >
      <div className="container mx-auto px-4 lg:px-4">
        <div className="flex items-center justify-between h-16 md:h-20 ">

          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center no-underline">
              <img
                src="/logo.png"
                alt="Acharya Ji"
                className="h-10 md:h-16 w-auto object-contain block"
                onError={(e) => {
                  console.error("Logo failed to load");
                  e.target.src = 'https://via.placeholder.com/150?text=Acharya+Ji';
                }}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 ml-auto">
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
                    "relative px-2 py-1.5 flex items-center gap-1 text-[13px] font-semibold whitespace-nowrap transition-all duration-300 no-underline",
                    "before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[4px] before:h-0 before:bg-amber-600 before:rounded-full before:transition-all before:duration-300 before:ease-out",
                    (isActive(item.href) || activeDropdown === item.label) && "before:h-3 text-amber-600",
                    "hover:before:h-3 hover:text-amber-600"
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

                {/* Dropdown Desktop */}
                {item.children && activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-0.5 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-amber-500/10 overflow-hidden z-50 animate-scale-in"
                  >
                    <div className="h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-amber-600" />
                    <div className="p-2 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="relative block p-2.5 pl-6 rounded-xl hover:bg-amber-50/50 transition-all group"
                        >
                          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[8px] h-0 bg-amber-600 rounded-full transition-all duration-300 group-hover:h-2/3 shadow-[0_0_12px_rgba(217,119,6,0.4)]" />

                          <span className="block text-[13px] font-bold text-gray-800 group-hover:text-amber-600 transition-colors flex items-center justify-between">
                            {child.label}
                            <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-amber-500 text-[10px]">→</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="h-1 bg-gradient-to-r from-orange-400 to-red-600" />
                  </div>
                )}
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

        {/* Mobile Menu Content */}
        <div
          className={cn(
            "lg:hidden overflow-hidden border-t border-orange-100 bg-white transition-all duration-300 ease-in-out",
            mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-3 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                onClose={() => setMobileMenuOpen(false)}
                isActive={isActive}
              />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

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

      <div
        className={cn(
          "overflow-hidden bg-orange-50/40 rounded-lg ml-2 transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}