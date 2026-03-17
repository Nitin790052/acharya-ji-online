import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FiHome,
  FiShoppingBag,
  FiGrid,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiChevronDown,
  FiChevronRight,
  FiPackage,
  FiClipboard,
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
  FiXCircle,
  FiRefreshCw,
  FiBookOpen,
  FiMessageCircle,
  FiMail,
  FiBell,
  FiAlertCircle,
  FiFileText,
  FiImage,
  FiTrendingUp,
  FiPieChart,
  FiDownload,
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
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  // Force isCollapsed to false on mobile, otherwise use prop
  const [isCollapsed, setIsCollapsed] = useState(isMobile ? false : (propIsCollapsed || false));
  const [openDropdowns, setOpenDropdowns] = useState({});

  // Theme
  const bgColor = "#faf9f0";
  const borderColor = "#f0f0e0";
  const accentGradient = "from-yellow-400 to-yellow-600";
  const accentColor = "#eab308";

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
      key: "website-content", icon: <FiFileText />, label: "Website Content",
      children: [
        { key: "navbar", icon: <FiAlertCircle />, label: "Navbar", path: "/admin-acharya/dashboard/content/navbar" },
        { key: "blogs", icon: <FiBookOpen />, label: "Blogs", path: "/admin-acharya/dashboard/content/blogs" },
        { key: "testimonials", icon: <FiMessageCircle />, label: "Testimonials", path: "/admin-acharya/dashboard/content/testimonials" },
        { key: "carousels", icon: <FiImage />, label: "Carousels", path: "/admin-acharya/dashboard/content/carousels" },
        { key: "services", icon: <FiGrid />, label: "Services", path: "/admin-acharya/dashboard/content/services" },
        { key: "faq", icon: <FiAlertCircle />, label: "FAQ", path: "/admin-acharya/dashboard/content/faq" },
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
    : (isCollapsed ? 'w-20' : 'w-[240px] lg:w-[280px]');

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
            background: ${borderColor};
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: ${accentColor};
            border-radius: 20px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: ${accentColor}dd;
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
          h-full shadow-lg
        `}
        style={{ backgroundColor: bgColor, borderRight: `1px solid ${borderColor}` }}
      >
        {/* Logo Section - Always show text on mobile */}
        <div className={`${isMobile ? 'p-5' : (isCollapsed ? 'p-4' : 'p-5')}`}
          style={{ borderBottom: `1px solid ${borderColor}` }}>
          <div className={`flex items-center ${isMobile ? 'justify-start' : (isCollapsed ? 'justify-center' : 'justify-start')}`}>
            <div className={`flex items-center ${isMobile ? 'gap-3' : (isCollapsed ? '' : 'gap-3')}`}>
              <div className={`
                bg-gradient-to-r ${accentGradient}
                rounded-xl flex items-center justify-center text-white shadow-md
                w-14 h-14
              `}>
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain p-2" />
              </div>
              {/* Always show text on mobile, on desktop only when not collapsed */}
              {(isMobile || !isCollapsed) && (
                <div>
                  <span className="font-bold text-gray-800 text-xl tracking-tight">Achariya Ji</span>
                  <p className="text-xs text-gray-600 font-medium">Admin Panel</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* User Info - Always show on mobile */}
        {(isMobile || !isCollapsed) && (
          <div className="mx-3 my-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm"
            style={{ border: `1px solid ${borderColor}` }}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-r ${accentGradient} rounded-xl flex items-center justify-center shadow-sm`}>
                <FiUsers size={18} className="text-white" />
              </div>
              <div className="truncate">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {user?.name || "Admin User"}
                </p>
                <p className="text-xs text-gray-600 truncate flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  {user?.email || "admin@achariya.com"}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation - Always show full text on mobile */}
        <nav className="flex-1 overflow-y-auto px-3 py-2 custom-scrollbar">
          <ul className="space-y-1">
            {/* Split menu items into logically grouped blocks */}
            {(() => {
              const sections = [
                { title: "Overview", items: menuItems.slice(0, 1) },
                { title: "User Control", items: menuItems.slice(1, 2) },
                { title: "Service Categories", items: menuItems.slice(2, 3) },
                { title: "Business Operations", items: menuItems.slice(3, 4) },
                { title: "Content Manager", items: menuItems.slice(4, 5) },
                { title: "SEO & Growth", items: menuItems.slice(5, 6) },
                { title: "System Setup", items: menuItems.slice(6) },
              ];

              return sections.map((section, idx) => (
                <li key={idx} className="mb-4 last:mb-0">
                  {/* Section Title with Indicator */}
                  {(isMobile || !isCollapsed) && (
                    <div className="flex items-center gap-2 px-4 py-1.5 mb-1 group/sec">
                      <div className="w-1 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(234,179,8,0.4)]"></div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">
                        {section.title}
                      </p>
                    </div>
                  )}

                  {/* Section Items */}
                  <ul className="space-y-0.5">
                    {section.items.map((item) => (
                      <li key={item.key}>
                        {item.children ? (
                          <>
                            <button
                              onClick={() => toggleDropdown(item.key)}
                              className={`
                                w-full flex items-center justify-between
                                px-3 py-2 text-sm rounded-xl transition-all duration-200
                                text-gray-700 hover:text-gray-900
                                hover:bg-white/80
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
                                          flex items-center gap-3 px-3 py-1.5 text-sm rounded-xl transition-all duration-200
                                          ${isActive
                                            ? 'text-white shadow-md'
                                            : 'text-gray-600 hover:text-gray-900 hover:bg-white/80'}
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
                                            <span className="ml-auto w-1 h-1 bg-white rounded-full"></span>
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
                                px-3 py-2 text-sm rounded-xl transition-all duration-200
                                ${isActive
                                  ? 'text-white shadow-md'
                                  : 'text-gray-700 hover:text-gray-900 hover:bg-white/80'}
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
                                  <span className="ml-auto w-1 h-1 bg-white rounded-full"></span>
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
        <div className={`${isMobile ? 'p-4' : (isCollapsed ? 'p-3' : 'p-4')}`}
          style={{ borderTop: `1px solid ${borderColor}` }}>
          <button
            onClick={handleLogout}
            className={`
              w-full flex items-center
              ${isMobile ? 'gap-3' : (isCollapsed ? 'justify-center' : 'gap-3')}
              px-3 py-2.5 text-sm rounded-xl
              text-gray-700 hover:text-white
              hover:bg-gradient-to-r hover:from-rose-500 hover:to-pink-500
              transition-all duration-200 hover:shadow-md
              group
            `}
          >
            <FiLogOut size={18} className="group-hover:text-white transition-colors" />
            {(isMobile || !isCollapsed) && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;