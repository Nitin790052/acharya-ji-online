import { NavLink, useNavigate } from "react-router-dom";
import { House, ClipboardList, Grid2x2, Wallet, Compass, LayoutGrid, Bell, Settings, Info, X, LogOut ,User, ChevronRight,Calendar,Star} from "lucide-react";
import { useAuth } from "../../../contexts/AuthContexts";


const Sidebar = ({ closeSidebar }) => {

 const { user } = useAuth();
const category = user?.category;

const navigate = useNavigate();

 const categoryMenus = {
  Pandit: [
  { label: "Overview", path: "/dashboard/vendor", icon: <House size={20} /> },
  { label: "My Puja Services", path: "/dashboard/vendor/services", icon: <LayoutGrid size={20} /> },
  { label: "Bookings", path: "/dashboard/vendor/bookings", icon: <ClipboardList size={20} /> },
  { label: "Availability Calendar", path: "/dashboard/vendor/calendar", icon: <Calendar size={20} /> },
  { label: "Wallet & Earnings", path: "/dashboard/vendor/wallet", icon: <Wallet size={20} /> },
  { label: "Reviews & Ratings", path: "/dashboard/vendor/reviews", icon: <Star size={20} /> },
  { label: "Notifications", path: "/dashboard/vendor/notifications", icon: <Bell size={20} /> },
  { label: "Profile & KYC", path: "/dashboard/vendor/settings", icon: <Settings size={20} /> },
],
  Astrologer: [
    { label: "Overview", path: "/dashboard/vendor", icon: <House size={20} /> },
    { label: "My Consultations", path: "/dashboard/vendor/consultations", icon: <Grid2x2 size={20} /> },
    { label: "Reports & Kundli", path: "/dashboard/vendor/reports", icon: <Compass size={20} /> },
    { label: "Availability", path: "/dashboard/vendor/availability", icon: <ClipboardList size={20} /> },
    { label: "Wallet & Payments", path: "/dashboard/vendor/wallet", icon: <Wallet size={20} /> },
    { label: "Notifications", path: "/dashboard/vendor/notifications", icon: <Bell size={20} /> },
    { label: "Profile & Settings", path: "/dashboard/vendor/settings", icon: <Settings size={20} /> },
  ],

  "Puja Samagri Seller": [
    { label: "Overview", path: "/dashboard/vendor", icon: <House size={20} /> },
    { label: "Orders", path: "/dashboard/vendor/orders", icon: <ClipboardList size={20} /> },
    { label: "Products", path: "/dashboard/vendor/products", icon: <LayoutGrid size={20} /> },
    { label: "Inventory", path: "/dashboard/vendor/inventory", icon: <Grid2x2 size={20} /> },
    { label: "Wallet & Payments", path: "/dashboard/vendor/wallet", icon: <Wallet size={20} /> },
    { label: "Notifications", path: "/dashboard/vendor/notifications", icon: <Bell size={20} /> },
    { label: "Profile & Settings", path: "/dashboard/vendor/settings", icon: <Settings size={20} /> },
  ],

  "Temple Services": [
    { label: "Overview", path: "/dashboard/vendor", icon: <House size={20} /> },
    { label: "Temple Bookings", path: "/dashboard/vendor/bookings", icon: <ClipboardList size={20} /> },
    { label: "Donations", path: "/dashboard/vendor/donations", icon: <Wallet size={20} /> },
    { label: "Events", path: "/dashboard/vendor/events", icon: <Grid2x2 size={20} /> },
    { label: "Notifications", path: "/dashboard/vendor/notifications", icon: <Bell size={20} /> },
    { label: "Profile & Settings", path: "/dashboard/vendor/settings", icon: <Settings size={20} /> },
  ],

  "Event Organizer": [
    { label: "Overview", path: "/dashboard/vendor", icon: <House size={20} /> },
    { label: "My Events", path: "/dashboard/vendor/events", icon: <Grid2x2 size={20} /> },
    { label: "Bookings", path: "/dashboard/vendor/bookings", icon: <ClipboardList size={20} /> },
    { label: "Wallet & Payments", path: "/dashboard/vendor/wallet", icon: <Wallet size={20} /> },
    { label: "Notifications", path: "/dashboard/vendor/notifications", icon: <Bell size={20} /> },
    { label: "Profile & Settings", path: "/dashboard/vendor/settings", icon: <Settings size={20} /> },
  ],

  "Spiritual Guide": [
    { label: "Overview", path: "/dashboard/vendor", icon: <House size={20} /> },
    { label: "Sessions", path: "/dashboard/vendor/sessions", icon: <Grid2x2 size={20} /> },
    { label: "Teachings", path: "/dashboard/vendor/teachings", icon: <LayoutGrid size={20} /> },
    { label: "Followers", path: "/dashboard/vendor/followers", icon: <User size={20} /> },
    { label: "Wallet & Payments", path: "/dashboard/vendor/wallet", icon: <Wallet size={20} /> },
    { label: "Profile & Settings", path: "/dashboard/vendor/settings", icon: <Settings size={20} /> },
  ],

  "Spiritual Healer": [
    { label: "Overview", path: "/dashboard/vendor", icon: <House size={20} /> },
    { label: "Healing Sessions", path: "/dashboard/vendor/sessions", icon: <Grid2x2 size={20} /> },
    { label: "Clients", path: "/dashboard/vendor/clients", icon: <User size={20} /> },
    { label: "Wallet & Payments", path: "/dashboard/vendor/wallet", icon: <Wallet size={20} /> },
    { label: "Profile & Settings", path: "/dashboard/vendor/settings", icon: <Settings size={20} /> },
  ],

  "Vedic Scholar": [
    { label: "Overview", path: "/dashboard/vendor", icon: <House size={20} /> },
    { label: "Articles", path: "/dashboard/vendor/articles", icon: <LayoutGrid size={20} /> },
    { label: "Research Requests", path: "/dashboard/vendor/requests", icon: <ClipboardList size={20} /> },
    { label: "Wallet & Payments", path: "/dashboard/vendor/wallet", icon: <Wallet size={20} /> },
    { label: "Profile & Settings", path: "/dashboard/vendor/settings", icon: <Settings size={20} /> },
  ],
};

const menu = categoryMenus[category] || [];

return (

<aside
  className="
    w-full lg:w-72
    h-screen lg:h-full lg:min-h-screen
    bg-[#0F172A]
    text-white flex flex-col
    border-r border-white/10
    relative
  "
>
  {/* ================= MOBILE HEADER ================= */}
  <div className="lg:hidden flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#020617] flex-shrink-0">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
        AS
      </div>
      <div>
        <h3 className="font-semibold text-sm truncate max-w-[150px]">Acharya Pandit Sharma</h3>
        <p className="text-xs text-orange-400 truncate max-w-[150px]">Verified Acharya</p>
      </div>
    </div>

    <button
      onClick={closeSidebar}
      className="p-2 rounded-full bg-white/10 hover:bg-white/20 flex-shrink-0"
      aria-label="Close menu"
    >
      <X size={20} />
    </button>
  </div>

  {/* ================= LOGO SECTION (DESKTOP) ================= */}
  <div className="hidden lg:block px-4 py-4 border-b border-white/10 bg-[#030929] flex-shrink-0">
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div
          className="
            w-20 h-20 rounded-full
            bg-gradient-to-br from-orange-500 to-orange-600
            flex items-center justify-center
            border-2 border-white/60
            shadow-md
            mx-auto
          "
        >
          <img
            src="/logo.png"
            alt="AstroGuru Logo"
            className="w-[60px] h-[60px] object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `
                <span class="text-white font-bold text-2xl">अ</span>
              `;
            }}
          />
        </div>

        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0F172A]"></div>
      </div>

      <div className="text-center w-full">
        <h1 className="text-xl font-bold text-white truncate">AstroGuru</h1>
        <p className="text-xs text-gray-400 mt-1 truncate">
          Premium Astrology Partner
        </p>
      </div>
    </div>
  </div>

  {/* ================= MENU ================= */}
  <nav
    className="flex-1 px-3 py-4 space-y-1 overflow-y-auto"
    style={{
      scrollbarWidth: "thin",
      scrollbarColor: "rgba(251,146,60,.6) rgba(255,255,255,.05)",
    }}
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `
          nav::-webkit-scrollbar { width: 4px; }
          nav::-webkit-scrollbar-track { background: rgba(255,255,255,.05); }
          nav::-webkit-scrollbar-thumb {
            background: rgba(251,146,60,.6);
            border-radius: 2px;
          }
          @media (max-width: 1024px) {
            nav::-webkit-scrollbar { display: none; }
          }
        `,
      }}
    />

    {menu.map((item) => (
      <NavLink
        key={item.label}
        to={item.path}
        end
        onClick={closeSidebar}
        className={({ isActive }) =>
          `group flex items-center justify-between px-3 py-2.5 rounded-md transition-all duration-200 ${
            isActive
              ? "bg-[#1E293B] text-orange-400 border-l-4 border-orange-500"
              : "text-white/90 hover:bg-[#1E293B]/60"
          }`
        }
      >
        <div className="flex items-center gap-3 min-w-0">
          <span
            className="
              text-gray-400
              group-hover:text-orange-400
              transition-colors
              flex-shrink-0
            "
          >
            {item.icon}
          </span>

          <span className="text-[15px] font-medium truncate min-w-0">
            {item.label}
          </span>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          {item.badge && (
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full min-w-[26px] text-center flex-shrink-0">
              {item.badge}
            </span>
          )}

          <ChevronRight
            size={16}
            className="text-gray-500 group-hover:text-orange-400 transition-colors flex-shrink-0"
          />
        </div>
      </NavLink>
    ))}
  </nav>

  {/* ================= LOGOUT ================= */}
  <div className="px-4 py-3 border-t border-white/10 bg-[#030929] flex-shrink-0">
    {/* Mobile */}
    <div className="lg:hidden">
      <button
        className="
          w-full flex items-center justify-center gap-2
          px-3 py-2.5 rounded-lg
          bg-red-900/60 hover:bg-red-900/80
          text-orange-300
          transition
          border border-white/10
          active:scale-95
        "
        onClick={closeSidebar}
      >
        <LogOut size={18} className="flex-shrink-0" />
        <span className="font-medium truncate">Logout</span>
      </button>
      
      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500 truncate">AstroGuru v2.1.4</p>
        <p className="text-[10px] text-gray-600 mt-1 truncate">
          © 2024 All rights reserved
        </p>
      </div>
    </div>

    {/* Desktop */}
    <div className="hidden lg:block">
      <button
        className="
          w-full flex items-center justify-center gap-2
          px-3 py-2 rounded-lg
          bg-[#020617] hover:bg-red-900/80
          text-orange-400
          transition
          border border-white/10
          group
        "
      >
        <LogOut size={18} className="group-hover:scale-110 transition-transform flex-shrink-0" />
        <span className="font-medium">Logout</span>
      </button>

      <div className="mt-3 text-center">
        <p className="text-xs text-gray-500">AstroGuru v2.1.4</p>
        <p className="text-[10px] text-gray-600 mt-1">
          © 2024 All rights reserved
        </p>
      </div>
    </div>
  </div>

  {/* ================= TOUCH FRIENDLY SPACING FOR MOBILE ================= */}
  <div className="lg:hidden absolute bottom-0 left-0 right-0 h-4 bg-[#0F172A] pointer-events-none"></div>
</aside>

  );
};

export default Sidebar;