import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiShoppingBag,
  FiGrid,
  FiUsers,
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
  FiPackage,
  FiBarChart2,
  FiTruck,
  FiStar,
  FiUserCheck,
  FiUserX,
  FiDollarSign,
  FiCreditCard,
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiBriefcase,
  FiXCircle,
  FiRefreshCw,
  FiBookOpen,
  FiMessageCircle,
  FiDownload,
  FiHelpCircle,
  FiLayout,
  FiMail,
  FiBell,
  FiAlertCircle,
  FiFileText,
  FiImage,
  FiTrendingUp,
  FiPieChart,
  FiSend,
  FiLock,
  FiShield,
  FiActivity,
  FiPhone,
  FiPercent,
  FiTag,
  FiHeart,
  FiHeadphones,
  FiSliders,
  FiAward
} from "react-icons/fi";
import { useAuth } from "../auth/AuthContext";

const Sidebar = ({
  closeSidebar,
  isMobile,
  isCollapsed: propIsCollapsed,
  toggleCollapse,
  isMobileOpen
}) => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  // Force isCollapsed to false on mobile, otherwise use prop
  const [isCollapsed, setIsCollapsed] = useState(isMobile ? false : (propIsCollapsed || false));
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Premium Glassmorphism Theme
  const bgColor = "rgba(255, 255, 255, 0.6)";
  const glassBorder = "rgba(255, 255, 255, 0.5)";
  const accentGradient = "from-blue-900 to-rose-400";
  const accentColor = "#1e3a8a";

  // Update isCollapsed when prop changes or mobile status changes
  useEffect(() => {
    if (isMobile) {
      setIsCollapsed(false); // Always expanded on mobile
    } else {
      setIsCollapsed(propIsCollapsed || false);
    }
  }, [isMobile, propIsCollapsed]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleDropdown = (key) => {
    setOpenDropdowns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleNavClick = () => {
    if (isMobile) closeSidebar();
  };

  const menuItems = [
    { key: "dashboard", icon: <FiHome />, label: "Dashboard", path: "/admin-acharya/dashboard", end: true },

    {
      key: "home-content", icon: <FiFileText />, label: "Home Page Content",
      children: [
        { key: "navbar", icon: <FiAlertCircle />, label: "Navbar", path: "/admin-acharya/dashboard/content/navbar" },
        { key: "carousels", icon: <FiImage />, label: "Carousels", path: "/admin-acharya/dashboard/content/carousels" },
        { key: "about-us", icon: <FiFileText />, label: "About Section", path: "/admin-acharya/dashboard/content/about-us" },
        { key: "services", icon: <FiGrid />, label: "Service Manager", path: "/admin-acharya/dashboard/content/services" },
        { key: "popular-pujas", icon: <FiStar />, label: "Popular Pujas", path: "/admin-acharya/dashboard/content/popular-pujas" },
        { key: "astrologers", icon: <FiStar />, label: "Astrologers Section", path: "/admin-acharya/dashboard/content/astrologers" },
        { key: "kundli", icon: <FiFileText />, label: "Kundli Services", path: "/admin-acharya/dashboard/content/kundli" },
        { key: "vastu", icon: <FiHome />, label: "Vastu & Remedies", path: "/admin-acharya/dashboard/content/vastu" },
        { key: "testimonials", icon: <FiMessageCircle />, label: "Testimonials", path: "/admin-acharya/dashboard/content/testimonials" },
        { key: "app-download", icon: <FiDownload />, label: "App Download", path: "/admin-acharya/dashboard/content/app-download" },
        { key: "faq", icon: <FiHelpCircle />, label: "FAQ Management", path: "/admin-acharya/dashboard/content/faq" },
        { key: "footer", icon: <FiLayout />, label: "Footer Management", path: "/admin-acharya/dashboard/content/footer" },
      ]
    },
    {
      key: "about-content", icon: <FiBookOpen />, label: "About Page Content",
      children: [
        { key: "about", icon: <FiBookOpen />, label: "About Page Manager", path: "/admin-acharya/dashboard/content/about" },
      ]
    },
    {
      key: "pooja-services", icon: <FiStar />, label: "Puja Services",
      children: [
        { key: "puja-offerings", icon: <FiPackage />, label: "Puja Offerings", path: "/admin-acharya/dashboard/content/puja-offerings" },
        { key: "book-puja", icon: <FiCalendar />, label: "Book Puja Requests", path: "/admin-acharya/dashboard/content/book-puja" },
        { key: "book-puja-content", icon: <FiFileText />, label: "Book Puja Manager", path: "/admin-acharya/dashboard/content/book-puja-content" },
      ]
    },
    {
      key: "career-content", icon: <FiBriefcase />, label: "Career Page Content",
      children: [
        { key: "career", icon: <FiTrendingUp />, label: "Career Page Manager", path: "/admin-acharya/dashboard/content/career" },
      ]
    },
    {
      key: "media-content", icon: <FiBookOpen />, label: "Media Page Content",
      children: [
        { key: "media-manager", icon: <FiImage />, label: "Media Manager", path: "/admin-acharya/dashboard/content/media" },
      ]
    },
    {
      key: "gallery-content", icon: <FiImage />, label: "Gallery Page Content",
      children: [
        { key: "gallery-manager", icon: <FiImage />, label: "Gallery Manager", path: "/admin-acharya/dashboard/content/gallery" },
      ]
    },
    {
      key: "blog-content", icon: <FiBookOpen />, label: "Blog Page Content",
      children: [
        { key: "blogs", label: "Blogs", path: "/admin-acharya/dashboard/content/blogs" },
      ]
    },
    {
      key: "contact-content", icon: <FiPhone />, label: "Contact Page Content",
      children: [
        { key: "contact-manager", label: "Contact Manager", path: "/admin-acharya/dashboard/content/contact" },
      ]
    },
    {
      key: "user-management", icon: <FiUsers />, label: "User Management",
      children: [
        { key: "all-users", icon: <FiUsers />, label: "All Users", path: "/admin-acharya/dashboard/users/all" },
        { key: "new-users", icon: <FiUserCheck />, label: "New Registrations", path: "/admin-acharya/dashboard/users/new-registrations" },
        { key: "active-users", icon: <FiUserCheck />, label: "Active Users", path: "/admin-acharya/dashboard/users/active" },
        { key: "blocked-users", icon: <FiUserX />, label: "Blocked Users", path: "/admin-acharya/dashboard/users/blocked" },
      ]
    },

    {
      key: "vendor-categories", icon: <FiGrid />, label: "Vendor Categories",
      children: [
        { key: "cat-pandit", icon: <FiUserCheck />, label: "Pandit", path: "/admin-acharya/dashboard/vendors/category/pandit" },
        { key: "cat-astrologer", icon: <FiActivity />, label: "Astrologer", path: "/admin-acharya/dashboard/vendors/category/astrologer" },
        { key: "cat-puja-samagri", icon: <FiShoppingBag />, label: "Puja Samagri", path: "/admin-acharya/dashboard/vendors/category/puja-samagri" },
        { key: "cat-temple", icon: <FiHome />, label: "Temple Services", path: "/admin-acharya/dashboard/vendors/category/temple" },
        { key: "cat-event", icon: <FiCalendar />, label: "Event Organizer", path: "/admin-acharya/dashboard/vendors/category/event" },
        { key: "cat-spiritual-guide", icon: <FiStar />, label: "Spiritual Guide", path: "/admin-acharya/dashboard/vendors/category/guide" },
        { key: "cat-healer", icon: <FiHeart />, label: "Spiritual Healer", path: "/admin-acharya/dashboard/vendors/category/healer" },
        { key: "cat-scholar", icon: <FiBookOpen />, label: "Vedic Scholar", path: "/admin-acharya/dashboard/vendors/category/scholar" },
      ]
    },

    {
      key: "vendor-management", icon: <FiPackage />, label: "Vendors",
      children: [
        { key: "all-vendors", icon: <FiUsers />, label: "All Vendors", path: "/admin-acharya/dashboard/vendors/all" },
        { key: "pending-approvals", icon: <FiClock />, label: "Pending Approvals", path: "/admin-acharya/dashboard/vendors/pending" },
        { key: "approved-vendors", icon: <FiCheckCircle />, label: "Approved Vendors", path: "/admin-acharya/dashboard/vendors/approved" },
        { key: "vendor-earnings", icon: <FiDollarSign />, label: "Vendor Earnings", path: "/admin-acharya/dashboard/vendors/earnings" },
      ]
    },

    {
      key: "seo-management", icon: <FiTrendingUp />, label: "Marketing & SEO",
      children: [
        { key: "seo-settings", icon: <FiActivity />, label: "SEO Settings", path: "/admin-acharya/dashboard/seo/settings" },
        { key: "meta-tags", icon: <FiTag />, label: "Meta Tags", path: "/admin-acharya/dashboard/seo/meta" },
      ]
    },

    {
      key: "administration", icon: <FiSettings />, label: "Administration",
      children: [
        { key: "staff", icon: <FiShield />, label: "Staff Management", path: "/admin-acharya/dashboard/admin/staff" },
        { key: "settings", icon: <FiSliders />, label: "General Settings", path: "/admin-acharya/dashboard/admin/settings" },
        { key: "change-password", icon: <FiLock />, label: "Change Password", path: "/admin-acharya/dashboard/admin/password" },
      ]
    },
  ];

  // Mobile: Always full width with text, Desktop: Collapsible
  const sidebarWidthClass = isMobile
    ? 'w-[280px]'  // Fixed width for mobile with text
    : (isCollapsed ? 'w-20' : 'w-[240px] lg:w-[260px]');

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
            height: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(30, 58, 138, 0.2);
            border-radius: 20px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(30, 58, 138, 0.4);
          }
        `}
      </style>

      <aside
        className={`
          ${isMobile ? 'fixed' : 'relative'} 
          inset-y-0 left-0 z-50
          transition-all duration-300 ease-in-out
          flex flex-col
          ${sidebarWidthClass}
          ${isMobile && !isMobileOpen ? '-translate-x-full' : 'translate-x-0'}
          h-full shadow-[8px_0_30px_rgba(0,0,0,0.03)] backdrop-blur-2xl border-r border-white/50
        `}
        style={{ backgroundColor: bgColor }}
      >
        {/* Logo Section - Always show text on mobile */}
        <div className={`${isMobile ? 'p-5' : (isCollapsed ? 'p-4' : 'p-5')}`}
          style={{ borderBottom: `1px solid ${glassBorder}` }}>
          <div className={`flex items-center ${isMobile ? 'justify-start' : (isCollapsed ? 'justify-center' : 'justify-start')}`}>
            <div className={`flex items-center ${isMobile ? 'gap-3' : (isCollapsed ? '' : 'gap-3')}`}>
              <div className={`
                bg-white/10 backdrop-blur-md border border-white/10
                rounded-xl flex items-center justify-center text-white shadow-sm
                w-16 h-16
              `}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-1" />
              </div>
              {/* Always show text on mobile, on desktop only when not collapsed */}
              {(isMobile || !isCollapsed) && (
                <div>
                  <h1 className="font-bold text-gray-800 text-2xl tracking-tight leading-none">Achariya Ji</h1>
                  <p className="text-sm text-gray-600 font-medium mt-1">Admin Panel</p>
                </div>
              )}
            </div>
          </div>
        </div>



        {/* Navigation - Always show full text on mobile */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 custom-scrollbar">
          <ul className="space-y-1">
            {/* Split menu items into logically grouped blocks */}
            {(() => {
              const sections = [
                { title: "Overview", items: menuItems.slice(0, 1) },
                { title: "User Control", items: menuItems.slice(1, 10) },
                { title: "User Management", items: menuItems.slice(10, 11) },
                { title: "Business Operations", items: menuItems.slice(11, 13) },
                { title: "SEO & Growth", items: menuItems.slice(13, 14) },
                { title: "System Setup", items: menuItems.slice(13, 14) },
              ];

              return sections.map((section, idx) => (
                <li key={idx} className="mb-2 last:mb-0">
                  {/* Section Title with Indicator */}
                  {(isMobile || !isCollapsed) && (
                    <div className="flex items-center gap-2 px-4 mt-3 mb-1.5 group/sec">
                      <div className="w-1 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                        {section.title}
                      </p>
                    </div>
                  )}

                  {/* Section Items */}
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.key}>
                        {item.children ? (
                          <>
                            <button
                              onClick={() => toggleDropdown(item.key)}
                              className={`
                                w-full flex items-center justify-between
                                px-3 py-2 text-sm rounded-xl transition-all duration-300
                                text-gray-700 hover:text-blue-900
                                hover:bg-white/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:backdrop-blur-md
                                ${isMobile ? '' : (isCollapsed ? 'justify-center' : '')}
                              `}
                            >
                              <div className={`flex items-center ${isMobile ? 'gap-3' : (isCollapsed ? '' : 'gap-3')}`}>
                                <span className="text-lg" style={{ color: accentColor }}>{item.icon}</span>
                                {(isMobile || !isCollapsed) && <span className="font-medium">{item.label}</span>}
                              </div>
                              {(isMobile || !isCollapsed) && (
                                <span className="text-gray-400">
                                  {openDropdowns[item.key] ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
                                </span>
                              )}
                            </button>

                            {(isMobile || !isCollapsed) && openDropdowns[item.key] && (
                              <ul className="ml-8 mt-0.5 space-y-0.5 border-l border-gray-100 pl-1">
                                {item.children.map((child) => (
                                  <li key={child.key}>
                                    <NavLink to={child.path} onClick={handleNavClick}>
                                      {({ isActive }) => (
                                        <div className={`
                                          flex items-center gap-3 px-3 py-1.5 text-sm rounded-xl transition-all duration-300
                                          ${isActive
                                            ? 'text-white shadow-[0_4px_12px_rgba(30, 58, 138,0.3)] backdrop-blur-md'
                                            : 'text-gray-600 hover:text-blue-900 hover:bg-white/40 hover:shadow-[0_4px_12px_rgba(0,0,0,0.03)] hover:backdrop-blur-sm'}
                                        `}
                                          style={isActive ? {
                                            background: `linear-gradient(to right, ${accentColor}, ${accentColor}dd)`
                                          } : {}}
                                        >
                                          <span style={isActive ? { color: 'white' } : { color: accentColor }}>
                                            {child.icon}
                                          </span>
                                          <span className="font-medium text-[13px]">{child.label}</span>
                                          {isActive && (
                                            <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full shadow-sm"></span>
                                          )}
                                        </div>
                                      )}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        ) : (
                          <NavLink to={item.path} end={item.end} onClick={handleNavClick}>
                            {({ isActive }) => (
                              <div className={`
                                flex items-center ${isMobile ? 'gap-3' : (isCollapsed ? 'justify-center' : 'gap-3')}
                                px-3 py-2 text-sm rounded-xl transition-all duration-300
                                ${isActive
                                  ? 'text-white shadow-[0_4px_12px_rgba(30, 58, 138,0.3)] backdrop-blur-md'
                                  : 'text-gray-700 hover:text-blue-900 hover:bg-white/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:backdrop-blur-md'}
                              `}
                                style={isActive ? {
                                  background: `linear-gradient(to right, ${accentColor}, ${accentColor}dd)`
                                } : {}}
                              >
                                <span style={isActive ? { color: 'white' } : { color: accentColor }}>
                                  {item.icon}
                                </span>
                                {(isMobile || !isCollapsed) && <span className="font-medium">{item.label}</span>}
                                {isActive && (isMobile || !isCollapsed) && (
                                  <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
                                )}
                              </div>
                            )}
                          </NavLink>
                        )}
                      </li>
                    ))}
                  </ul>
                </li>
              ));
            })()}
          </ul>
        </nav>

        {/* Logout - Always show text on mobile */}
        <div className={` bg-gray-100 ${isMobile ? 'p-4' : (isCollapsed ? 'p-3' : 'px-4 py-2')}`}
          style={{ borderTop: `1px solid ${glassBorder}` }}>
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center
              ${isMobile ? 'gap-3' : (isCollapsed ? 'justify-center' : 'gap-3')}
              px-3 py-2.5 text-sm rounded-xl
              text-gray-700 hover:text-red-500
              hover:bg-linear-to-r hover:from-rose-500 hover:to-pink-500
              transition-all duration-200 hover:shadow-md bg-red-100/50
              group
            `}
          >
            <FiLogOut size={18} className="group-hover:text-red-500 transition-colors" />
            {(isMobile || !isCollapsed) && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;