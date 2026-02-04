import React, { useState } from 'react';
import { Bell, Circle, MessageSquare, Menu, User, Wallet, Settings, HelpCircle, LogOut, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-gray-950 border-b border-gray-200 shadow-xl px-3 py-1.5 sm:px-4 sm:py-1.5">
      <div className="flex items-center justify-between">
        {/* Left side - Mobile: Compact, Desktop: Full */}
        <div className='flex items-center gap-1 sm:gap-2 flex-1 min-w-0'>
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleSidebar}
            className="lg:hidden p-1.5 rounded-md text-amber-300 hover:bg-gray-800 mr-2 flex-shrink-0"
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          {/* Mobile: Compact view */}
          <div className="flex items-center gap-2 sm:hidden min-w-0">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center text-amber-800 text-xs font-bold border border-amber-300 flex-shrink-0">
              AS
            </div>
            <div className="min-w-0">
              <h1 className="text-sm font-semibold text-amber-300 truncate">
                Acharya Sharma
              </h1>
              <div className="flex items-center gap-1 mt-0.5">
                <Circle className="h-1.5 w-1.5 text-green-500 fill-green-500 animate-pulse" />
                <span className="text-[10px] text-green-400">Online</span>
              </div>
            </div>
          </div>
          
          {/* Desktop: Full view */}
          <div className="hidden sm:flex items-center gap-2">
            <span className='text-base sm:text-lg border-2 border-double bg-gradient-to-tr from-amber-700 to-orange-700 border-amber-300 rounded-sm px-2 text-white whitespace-nowrap'>
              Namaskaar 🙏
            </span>
            <h1 className="text-base sm:text-lg md:text-xl font-semibold text-amber-300">
              Acharya Pandit Sharma ji
            </h1>
          </div>
        </div>

        {/* Right side - Actions */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          {/* Notification */}
          <div className="relative">
            <button 
              className="p-1 sm:p-1.5 hover:bg-orange-200 rounded-lg hover:text-gray-900 transition-colors"
              aria-label="Notifications"
            >
              <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-white hover:text-gray-900" />
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 sm:h-3 sm:w-3 bg-red-500 text-[8px] sm:text-[10px] text-white rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          
          {/* Divider - Only on desktop */}
          <div className='hidden sm:block px-1'>
            <span className='text-white text-lg sm:text-2xl font-normal'>|</span>
          </div>
          
          {/* Message */}
          <div className='relative'>
            <button 
              className='p-1 sm:p-1.5 rounded-lg hover:bg-orange-200 hover:text-gray-900 transition-colors'
              aria-label="Messages"
            >
              <MessageSquare className='w-4 h-4 sm:w-5 sm:h-5 text-white hover:text-gray-900' />
              <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 sm:h-3 sm:w-3 bg-red-500 text-[8px] sm:text-[10px] text-white rounded-full flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* MOBILE: Profile Dropdown */}
          <div className="sm:hidden relative">
            {/* Profile Button */}
            <button 
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-1 rounded-lg hover:bg-gray-800 transition-colors"
              aria-label="Profile menu"
            >
              <div className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-xs font-bold border border-orange-300">
                AS
              </div>
            </button>

            {/* Mobile Dropdown Menu */}
            {isProfileOpen && (
              <>
                {/* Click outside to close */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsProfileOpen(false)}
                />
                
                {/* Dropdown Content - Mobile Optimized */}
                <div className="absolute right-0 top-full mt-2 w-72 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
                  {/* Profile Header */}
                  <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="h-14 w-14 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">AS</span>
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-500 rounded-full border-2 border-gray-800"></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-sm">Acharya Pandit Sharma</h3>
                        <p className="text-xs text-orange-300">Verified Acharya</p>
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-amber-400 text-xs">{"★".repeat(5)}</span>
                          <span className="text-gray-400 text-xs">(45 reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Balance Display */}
                  <div className="p-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Wallet className="h-4 w-4 text-green-400" />
                        <span className="text-sm text-gray-300">Wallet Balance</span>
                      </div>
                      <span className="text-lg font-bold text-green-400">₹5,250</span>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="p-2">
                    <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors text-sm">
                      <User className="h-4 w-4 text-amber-400" />
                      <span>My Profile</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors text-sm">
                      <Wallet className="h-4 w-4 text-green-400" />
                      <span>Wallet & Payments</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors text-sm">
                      <Settings className="h-4 w-4 text-blue-400" />
                      <span>Account Settings</span>
                    </button>
                    
                    <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors text-sm">
                      <HelpCircle className="h-4 w-4 text-purple-400" />
                      <span>Help & Support</span>
                    </button>

                    {/* Divider */}
                    <div className="my-2 h-px bg-gray-700"></div>

                    {/* Logout */}
                    <button className="w-full flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-colors text-sm">
                      <LogOut className="h-4 w-4" />
                      <span>Logout</span>
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="px-4 py-3 bg-gray-900 border-t border-gray-700">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Status: <span className="text-green-400">Active</span></span>
                      <span>v2.1.4</span>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* DESKTOP: Online Status + Profile with Dropdown */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Circle className="h-2 w-2 text-green-500 fill-green-500 animate-pulse" />
              <span className="text-xs text-green-400 font-medium">Online</span>
            </div>
            
            {/* Profile Dropdown Container */}
            <div className="relative">
              {/* Profile Button */}
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center gap-1 p-1 rounded-lg hover:bg-gray-800 transition-colors group"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white text-sm font-bold border border-orange-300 group-hover:scale-105 transition-transform">
                  AS
                </div>
                <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <>
                  {/* Click outside to close */}
                  <div 
                    className="fixed inset-0 z-40" 
                    onClick={() => setIsProfileOpen(false)}
                  />
                  
                  {/* Dropdown Content */}
                  <div className="absolute right-0 top-full mt-2 w-64 bg-gray-800 border border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden">
                    {/* Profile Header */}
                    <div className="p-4 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                            <span className="text-white font-bold text-lg">AS</span>
                          </div>
                          <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-gray-800"></div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">Acharya Pandit Sharma</h3>
                          <p className="text-xs text-orange-300">Verified Acharya</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-amber-400 text-xs">{"★".repeat(5)}</span>
                            <span className="text-gray-400 text-xs">(45 reviews)</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Balance Display */}
                    <div className="p-3 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Wallet className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-gray-300">Wallet Balance</span>
                        </div>
                        <span className="text-lg font-bold text-green-400">₹5,250</span>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="p-2">
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
                        <User className="h-4 w-4 text-amber-400" />
                        <span className="text-sm">My Profile</span>
                      </button>
                      
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
                        <Wallet className="h-4 w-4 text-green-400" />
                        <span className="text-sm">Wallet & Payments</span>
                      </button>
                      
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
                        <Settings className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">Account Settings</span>
                      </button>
                      
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-gray-700 text-gray-300 hover:text-white transition-colors">
                        <HelpCircle className="h-4 w-4 text-purple-400" />
                        <span className="text-sm">Help & Support</span>
                      </button>

                      {/* Divider */}
                      <div className="my-2 h-px bg-gray-700"></div>

                      {/* Logout */}
                      <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-colors">
                        <LogOut className="h-4 w-4" />
                        <span onClick={()=>navigate(-1)} className="text-sm">Logout</span>
                      </button>
                    </div>

                    {/* Footer */}
                    <div className="px-4 py-2 bg-gray-900 border-t border-gray-700">
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>Account: <span className="text-green-400">Active</span></span>
                        <span>v2.1.4</span>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;