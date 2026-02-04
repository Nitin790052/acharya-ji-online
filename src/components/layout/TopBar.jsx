import { motion } from 'framer-motion';
import { ShoppingCart, User, Phone, Headphones, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


 
// Hindu calendar months and current month festivals
const hinduMonths = [
  { name: 'Chaitra', festivals: ['Gudi Padwa', 'Ugadi', 'Chaitra Navratri'] },
  { name: 'Vaishakha', festivals: ['Akshaya Tritiya', 'Vaisakhi', 'Parshuram Jayanti'] },
  { name: 'Jyeshtha', festivals: ['Ganga Dussehra', 'Vat Savitri'] },
  { name: 'Ashadha', festivals: ['Guru Purnima', 'Rath Yatra'] },
  { name: 'Shravana', festivals: ['Raksha Bandhan', 'Nag Panchami', 'Janmashtami'] },
  { name: 'Bhadrapada', festivals: ['Ganesh Chaturthi', 'Hartalika Teej', 'Rishi Panchami'] },
  { name: 'Ashwin', festivals: ['Navratri', 'Dussehra', 'Karwa Chauth'] },
  { name: 'Kartika', festivals: ['Diwali', 'Bhai Dooj', 'Chhath Puja'] },
  { name: 'Margashirsha', festivals: ['Geeta Jayanti', 'Dattatreya Jayanti'] },
  { name: 'Pausha', festivals: ['Makar Sankranti', 'Pongal', 'Lohri'] },
  { name: 'Magha', festivals: ['Vasant Panchami', 'Maha Shivaratri'] },
  { name: 'Phalguna', festivals: ['Holi', 'Shigmo', 'Rang Panchami'] },
];

// Get current date and determine Hindu month based on actual calendar
const getCurrentHinduMonth = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth(); // 0-11 (Jan-Dec)
  const day = currentDate.getDate();

  // Hindu calendar mapping (approximate - varies by region and lunar calendar)
  // Creating date ranges for current year
  const hinduCalendarMap = [
    { startMonth: 11, startDay: 22, endMonth: 0, endDay: 20, monthIndex: 9 }, // Pausha (Dec 22 - Jan 20)
    { startMonth: 0, startDay: 21, endMonth: 1, endDay: 19, monthIndex: 10 }, // Magha (Jan 21 - Feb 19)
    { startMonth: 1, startDay: 20, endMonth: 2, endDay: 21, monthIndex: 11 }, // Phalguna (Feb 20 - Mar 21)
    { startMonth: 2, startDay: 22, endMonth: 3, endDay: 20, monthIndex: 0 }, // Chaitra (Mar 22 - Apr 20)
    { startMonth: 3, startDay: 21, endMonth: 4, endDay: 20, monthIndex: 1 }, // Vaishakha (Apr 21 - May 20)
    { startMonth: 4, startDay: 21, endMonth: 5, endDay: 21, monthIndex: 2 }, // Jyeshtha (May 21 - Jun 21)
    { startMonth: 5, startDay: 22, endMonth: 6, endDay: 22, monthIndex: 3 }, // Ashadha (Jun 22 - Jul 22)
    { startMonth: 6, startDay: 23, endMonth: 7, endDay: 22, monthIndex: 4 }, // Shravana (Jul 23 - Aug 22)
    { startMonth: 7, startDay: 23, endMonth: 8, endDay: 22, monthIndex: 5 }, // Bhadrapada (Aug 23 - Sep 22)
    { startMonth: 8, startDay: 23, endMonth: 9, endDay: 22, monthIndex: 6 }, // Ashwin (Sep 23 - Oct 22)
    { startMonth: 9, startDay: 23, endMonth: 10, endDay: 21, monthIndex: 7 }, // Kartika (Oct 23 - Nov 21)
    { startMonth: 10, startDay: 22, endMonth: 11, endDay: 21, monthIndex: 8 }, // Margashirsha (Nov 22 - Dec 21)
  ];
 

  // Find current Hindu month
  for (let mapping of hinduCalendarMap) {
    const { startMonth, startDay, endMonth, endDay, monthIndex } = mapping;
    
    // Handle year boundary (Dec-Jan case)
    if (startMonth > endMonth) {
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return hinduMonths[monthIndex];
      }
    } else {
      // Normal case
      if ((month === startMonth && day >= startDay) || 
          (month === endMonth && day <= endDay) ||
          (month > startMonth && month < endMonth)) {
        return hinduMonths[monthIndex];
      }
    }
  }

  // Fallback
  return hinduMonths[0];
};

// Mock cart context
const useCart = () => ({
  totalItems: 3,
  setIsCartOpen: () => {}
});

// Button component
const Button = ({ variant, size, className, children, onClick, ...props }) => {
  return (
    <button
      className={`inline-flex items-center justify-center transition-colors ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default function TopBar() {
  const { totalItems, setIsCartOpen } = useCart();
  const currentHinduMonth = getCurrentHinduMonth();
  const navigate = useNavigate();
  
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-1 border-b border-orange-500/20"
    >
      <div className="container mx-auto px-4 py-1 lg:px-5 lg:py-0.5">
        <div className="flex items-center justify-between">
          
          {/* Left Side - Hindu Month & Festivals (Single Line) */}
          <div className="hidden md:flex items-center gap-2 text-xs text-gray-300">
            <a 
              href="/panchang" 
              className="flex items-center gap-2 hover:text-amber-300 transition-colors duration-300 cursor-pointer group"
            >
              <div className="p-1 rounded-md bg-gradient-to-br from-purple-500/20 to-indigo-500/20 group-hover:from-purple-500/30 group-hover:to-indigo-500/30">
                <Calendar className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <span className="text-amber-300 font-bold">{currentHinduMonth.name}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-200 truncate max-w-[250px]">
                {currentHinduMonth.festivals.slice(0, 2).join(', ')}
                {currentHinduMonth.festivals.length > 2 && '...'}
              </span>
            </a>
          </div>

          {/* Mobile - Month & Festivals (Single Line) */}
          <div className="md:hidden flex items-center gap-1.5 text-xs text-gray-300">
            <a 
              href="/panchang" 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              <span className="text-amber-300 font-semibold text-[10px]">{currentHinduMonth.name}</span>
              <span className="text-gray-500 text-[10px]">•</span>
              <span className="text-[9px] text-gray-400 truncate max-w-[100px]">
                {currentHinduMonth.festivals[0]}
              </span>
            </a>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="flex items-center gap-2">
            
            {/* Book Consultation Button - Emerald Green Background */}
            <Button
              size="sm"
              className="hidden sm:flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-3 py-0.5 h-6 text-[11px] rounded-full shadow-md hover:shadow-lg transition-all duration-300 border border-emerald-700"
            >
              <Headphones className="w-3 h-3" />
              <span>Book Consultation</span>
            </Button>

            {/* Support Button - Sky Blue Background */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden lg:flex items-center gap-1.5 bg-sky-600 hover:bg-sky-700 text-white border border-sky-700 px-2.5 py-0.5 h-6 text-[11px] rounded-md transition-all duration-300 hover:text-gold-light"
            >
              <Phone className="w-3 h-3" />
              <span>Support</span>
            </Button>

            {/* Divider */}
            <div className="w-px h-5 bg-gray-600 hidden sm:block" />

            {/* Login/Register Button - Violet Background */}
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1.5 bg-violet-600 hover:bg-violet-700 text-white border border-violet-700 px-2.5 py-0.5 h-6 text-[11px] rounded-md transition-all duration-300 hover:text-gold-light"
              onClick={()=>navigate("/login")}
            >
              <User className="w-3 h-3" />
              <span className="hidden sm:inline">Login / Register</span>
              <span className="sm:hidden">Login</span>
            </Button>

            {/* Cart Button - Orange/Red Background */}
            <Button
              variant="ghost"
              size="sm"
              className="relative flex items-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-gray-50 border border-orange-700 px-2.5 py-0.5 h-6 text-[11px] rounded-md transition-all duration-300 hover:text-white"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Cart</span>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold shadow-lg"
                >
                  {totalItems}
                </motion.span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}