import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/vendor/Sidebar";
import Header from "../dashboard/vendor/Header";
import Footer from "../dashboard/vendor/Footer";
import { useState } from "react";

const VendorDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex h-screen">
        {/* Sidebar - Fixed on desktop, overlay on mobile */}
        <div className={`
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:sticky lg:top-0 z-50
          transition-transform duration-300
        `}>
          <Sidebar closeSidebar={() => setSidebarOpen(false)} />
        </div>

        {/* Main Content Area - Flex container */}
        <div className="flex-1 flex flex-col min-h-0 w-full">
          {/* Header - Fixed height */}
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          
          {/* Main Content - Scrollable */}
          <main className="flex-1 min-h-0 overflow-y-auto">
            <div className="p-3 sm:p-4 md:p-5 bg-gray-50">
              <Outlet />
            </div>
          </main>

          {/* Footer - Fixed height */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default VendorDashboardLayout;