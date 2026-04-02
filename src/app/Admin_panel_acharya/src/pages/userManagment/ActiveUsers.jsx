import React, { useState } from "react";
import {
  FiUsers,
  FiUserCheck,
  FiClock,
  FiCalendar,
  FiDollarSign,
  FiTrendingUp,
  FiAward,
  FiMapPin,
  FiMail,
  FiPhone,
  FiEye,
  FiMoreVertical,
  FiFilter,
  FiDownload,
  FiRefreshCw,
  FiChevronLeft,
  FiChevronRight,
  FiActivity,
  FiZap,
  FiStar,
  FiShoppingBag,
  FiCheckCircle,
  FiXCircle
} from "react-icons/fi";

const ActiveUsers = () => {
  const [timeRange, setTimeRange] = useState('7days');
  const [userType, setUserType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;

  // Mock Active Users Data
  const usersData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.k@email.com",
      phone: "+91 98765 43210",
      location: "Mumbai",
      avatar: "RK",
      lastActive: "2024-03-15T10:30:00",
      loginCount: 45,
      totalSpend: 45600,
      totalBookings: 24,
      totalOrders: 15,
      avgSessionTime: "15m",
      status: "online",
      userType: "high-spend",
      lastBooking: "2024-03-14",
      preferredPuja: "Ganesh Puja"
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya.s@email.com",
      phone: "+91 98765 43211",
      location: "Delhi",
      avatar: "PS",
      lastActive: "2024-03-15T09:45:00",
      loginCount: 38,
      totalSpend: 38500,
      totalBookings: 18,
      totalOrders: 12,
      avgSessionTime: "12m",
      status: "online",
      userType: "high-spend",
      lastBooking: "2024-03-15",
      preferredPuja: "Lakshmi Puja"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.p@email.com",
      phone: "+91 98765 43212",
      location: "Bangalore",
      avatar: "AP",
      lastActive: "2024-03-15T08:15:00",
      loginCount: 52,
      totalSpend: 52100,
      totalBookings: 28,
      totalOrders: 18,
      avgSessionTime: "18m",
      status: "online",
      userType: "high-spend",
      lastBooking: "2024-03-13",
      preferredPuja: "Satyanarayan"
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha.g@email.com",
      phone: "+91 98765 43213",
      location: "Pune",
      avatar: "NG",
      lastActive: "2024-03-15T07:30:00",
      loginCount: 28,
      totalSpend: 18900,
      totalBookings: 12,
      totalOrders: 8,
      avgSessionTime: "8m",
      status: "offline",
      userType: "regular",
      lastBooking: "2024-03-10",
      preferredPuja: "Durga Puja"
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.s@email.com",
      phone: "+91 98765 43214",
      location: "Chennai",
      avatar: "VS",
      lastActive: "2024-03-14T22:15:00",
      loginCount: 62,
      totalSpend: 67800,
      totalBookings: 32,
      totalOrders: 22,
      avgSessionTime: "22m",
      status: "offline",
      userType: "high-spend",
      lastBooking: "2024-03-12",
      preferredPuja: "Shiv Puja"
    },
    {
      id: 6,
      name: "Anjali Sharma",
      email: "anjali.s@email.com",
      phone: "+91 98765 43215",
      location: "Jaipur",
      avatar: "AS",
      lastActive: "2024-03-14T20:45:00",
      loginCount: 32,
      totalSpend: 22400,
      totalBookings: 14,
      totalOrders: 9,
      avgSessionTime: "10m",
      status: "offline",
      userType: "regular",
      lastBooking: "2024-03-09",
      preferredPuja: "Ganesh Puja"
    },
    {
      id: 7,
      name: "Rahul Verma",
      email: "rahul.v@email.com",
      phone: "+91 98765 43216",
      location: "Lucknow",
      avatar: "RV",
      lastActive: "2024-03-14T18:30:00",
      loginCount: 41,
      totalSpend: 38700,
      totalBookings: 21,
      totalOrders: 14,
      avgSessionTime: "14m",
      status: "online",
      userType: "high-spend",
      lastBooking: "2024-03-11",
      preferredPuja: "Lakshmi Puja"
    },
    {
      id: 8,
      name: "Pooja Mehta",
      email: "pooja.m@email.com",
      phone: "+91 98765 43217",
      location: "Ahmedabad",
      avatar: "PM",
      lastActive: "2024-03-14T16:20:00",
      loginCount: 18,
      totalSpend: 12600,
      totalBookings: 8,
      totalOrders: 5,
      avgSessionTime: "6m",
      status: "offline",
      userType: "regular",
      lastBooking: "2024-03-08",
      preferredPuja: "Satyanarayan"
    },
    {
      id: 9,
      name: "Suresh Reddy",
      email: "suresh.r@email.com",
      phone: "+91 98765 43218",
      location: "Hyderabad",
      avatar: "SR",
      lastActive: "2024-03-14T14:45:00",
      loginCount: 36,
      totalSpend: 28900,
      totalBookings: 16,
      totalOrders: 11,
      avgSessionTime: "11m",
      status: "online",
      userType: "regular",
      lastBooking: "2024-03-07",
      preferredPuja: "Durga Puja"
    },
    {
      id: 10,
      name: "Kavita Joshi",
      email: "kavita.j@email.com",
      phone: "+91 98765 43219",
      location: "Nagpur",
      avatar: "KJ",
      lastActive: "2024-03-14T12:10:00",
      loginCount: 25,
      totalSpend: 17600,
      totalBookings: 11,
      totalOrders: 7,
      avgSessionTime: "9m",
      status: "offline",
      userType: "regular",
      lastBooking: "2024-03-06",
      preferredPuja: "Shiv Puja"
    },
    {
      id: 11,
      name: "Deepak Sharma",
      email: "deepak.s@email.com",
      phone: "+91 98765 43220",
      location: "Indore",
      avatar: "DS",
      lastActive: "2024-03-14T10:30:00",
      loginCount: 22,
      totalSpend: 15800,
      totalBookings: 9,
      totalOrders: 6,
      avgSessionTime: "7m",
      status: "offline",
      userType: "regular",
      lastBooking: "2024-03-05",
      preferredPuja: "Ganesh Puja"
    },
    {
      id: 12,
      name: "Meera Nair",
      email: "meera.n@email.com",
      phone: "+91 98765 43221",
      location: "Kochi",
      avatar: "MN",
      lastActive: "2024-03-14T09:15:00",
      loginCount: 29,
      totalSpend: 20300,
      totalBookings: 13,
      totalOrders: 8,
      avgSessionTime: "10m",
      status: "online",
      userType: "regular",
      lastBooking: "2024-03-04",
      preferredPuja: "Lakshmi Puja"
    }
  ];

  // Filter users based on time range and type
  const getFilteredUsers = () => {
    const now = new Date();
    const hoursToSubtract = timeRange === '24h' ? 24 : timeRange === '7days' ? 168 : 720; // 720 hours = 30 days
    const cutoffDate = new Date(now.getTime() - hoursToSubtract * 60 * 60 * 1000);

    let filtered = usersData.filter(user => new Date(user.lastActive) >= cutoffDate);

    if (userType === 'most-active') {
      filtered = filtered.sort((a, b) => b.loginCount - a.loginCount).slice(0, 20);
    } else if (userType === 'high-spend') {
      filtered = filtered.filter(user => user.totalSpend >= 30000);
    }

    return filtered;
  };

  const filteredUsers = getFilteredUsers();

  // Calculate metrics
  const totalActiveUsers = filteredUsers.length;
  const onlineNow = filteredUsers.filter(u => u.status === 'online').length;
  const highSpendCount = filteredUsers.filter(u => u.totalSpend >= 30000).length;
  const totalSessions = filteredUsers.reduce((sum, u) => sum + u.loginCount, 0);
  const avgSessionTime = filteredUsers.reduce((sum, u) => {
    const minutes = parseInt(u.avgSessionTime);
    return sum + minutes;
  }, 0) / filteredUsers.length || 0;

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) {
      return `${diffMins} minutes ago`;
    } else if (diffHours < 24) {
      return `${diffHours} hours ago`;
    } else {
      return `${diffDays} days ago`;
    }
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  // Loading skeleton
  const TableSkeleton = () => (
    <div className="animate-pulse">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4 py-4 border-b border-gray-200">
          <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
          <div className="flex-1 space-y-2">
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-3 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #959190/20;
          border-radius: 10px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #c0e0d0;
        }
        
        /* Online Status Pulse */
        .status-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Card Hover Effect */
        .stats-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stats-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Table Row Hover */
        .table-row-hover {
          transition: all 0.2s ease;
        }
        
        .table-row-hover:hover {
          background-color: #f9fafb;
          transform: scale(1.01);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Header Section */}
      <div className="bg-white border-b border-blue-900/20 sticky top-0 z-10 ">
        <div className="px-6 py-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiActivity className="text-blue-900 w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 uppercase">Active Users <span className="text-orange-600">Monitor</span></h1>
                <p className="text-sm text-gray-500 font-medium">Monitor user activity and engagement in the divine community</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Time Range Selector */}
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-[#959190]/20">
                {[
                  { value: '24h', label: '24 Hours', icon: FiClock },
                  { value: '7days', label: '7 Days', icon: FiCalendar },
                  { value: '30days', label: '30 Days', icon: FiTrendingUp }
                ].map((range) => (
                  <button
                    key={range.value}
                    onClick={() => setTimeRange(range.value)}
                    className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors flex items-center gap-1
                      ${timeRange === range.value
                        ? 'bg-[#959190]/20 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    <range.icon size={14} />
                    {range.label}
                  </button>
                ))}
              </div>

              {/* Export Button */}
              <button
                className="p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200"
                title="Export Data"
              >
                <FiDownload size={16} className="text-gray-500" />
              </button>

              {/* Refresh Button */}
              <button
                onClick={() => window.location.reload()}
                className="p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200"
                title="Refresh"
              >
                <FiRefreshCw size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Active Users */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-blue-50">
                <FiUsers className="text-blue-600 w-5 h-5" />
              </div>
              <span className="text-xs font-medium flex items-center gap-1 text-green-600">
                <FiTrendingUp size={12} />
                +{((onlineNow / totalActiveUsers) * 100).toFixed(0)}% online
              </span>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{totalActiveUsers}</h3>
            <p className="text-sm text-gray-500 mt-1">Active Users</p>
            <div className="mt-2 flex items-center gap-2 text-xs">
              <span className="flex items-center gap-1 text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full status-pulse"></span>
                {onlineNow} online now
              </span>
            </div>
          </div>

          {/* Online Now */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-green-50">
                <FiUserCheck className="text-green-600 w-5 h-5" />
              </div>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{onlineNow}</h3>
            <p className="text-sm text-gray-500 mt-1">Online Now</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-green-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${(onlineNow / totalActiveUsers) * 100 || 0}%` }}
              ></div>
            </div>
          </div>

          {/* Total Sessions */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-blue-50">
                <FiZap className="text-blue-900 w-5 h-5" />
              </div>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{totalSessions}</h3>
            <p className="text-sm text-gray-500 mt-1">Total Sessions</p>
            <p className="text-xs text-gray-400 mt-1">Avg {avgSessionTime.toFixed(0)}m per user</p>
          </div>

          {/* High Spend Users */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-amber-50">
                <FiStar className="text-amber-600 w-5 h-5" />
              </div>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{highSpendCount}</h3>
            <p className="text-sm text-gray-500 mt-1">High Spend Users</p>
            <p className="text-xs text-gray-400 mt-1">Spent ₹30k+</p>
          </div>
        </div>

        {/* User Type Filters */}
        <div className="bg-white rounded-xl border border-blue-900/20 p-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setUserType('all')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                ${userType === 'all'
                  ? 'bg-[#959190]/20 text-gray-900 border border-blue-900/20'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
            >
              <FiUsers size={16} />
              All Active Users ({filteredUsers.length})
            </button>

            <button
              onClick={() => setUserType('most-active')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                ${userType === 'most-active'
                  ? 'bg-[#959190]/20 text-gray-900 border border-blue-900/20'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
            >
              <FiAward size={16} className="text-yellow-600" />
              Most Active
            </button>

            <button
              onClick={() => setUserType('high-spend')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                ${userType === 'high-spend'
                  ? 'bg-[#959190]/20 text-gray-900 border border-blue-900/20'
                  : 'border border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
            >
              <FiDollarSign size={16} className="text-green-600" />
              High Spend Users
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border border-blue-900/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FiActivity className="text-blue-900" />
              {userType === 'all' && 'Active Users'}
              {userType === 'most-active' && 'Most Active Users'}
              {userType === 'high-spend' && 'High Spend Users'}
            </h2>
            <div className="text-sm text-gray-500">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of {filteredUsers.length}
            </div>
          </div>

          <div className="overflow-x-auto">
            {isLoading ? (
              <TableSkeleton />
            ) : (
              <table className="w-full">
                <thead className="bg-[#959190]/10">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Last Active</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Login Count</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Avg Session</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Total Spend</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Bookings</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Orders</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedUsers.map((user) => (
                    <tr key={user.id} className="table-row-hover">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <div className="w-10 h-10 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 rounded-full flex items-center justify-center text-blue-900 font-semibold text-sm shadow-md">
                              {user.avatar}
                            </div>
                            {user.status === 'online' && (
                              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full status-pulse"></span>
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">{user.name}</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <FiMapPin size={10} />
                              {user.location}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-600">{formatDate(user.lastActive)}</span>
                          <span className="text-xs text-gray-400">
                            {new Date(user.lastActive).toLocaleTimeString()}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-medium text-gray-900">{user.loginCount}</span>
                        <span className="text-xs text-gray-400 ml-1">sessions</span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.avgSessionTime}</td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-semibold text-gray-900">
                          {formatCurrency(user.totalSpend)}
                        </span>
                        {user.totalSpend >= 30000 && (
                          <span className="ml-2 text-xs bg-purple-100 text-purple-600 px-1.5 py-0.5 rounded-full">
                            High
                          </span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.totalBookings}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{user.totalOrders}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border
                          ${user.status === 'online'
                            ? 'bg-green-100 text-green-700 border-green-200'
                            : 'bg-gray-100 text-gray-600 border-gray-200'
                          }`}>
                          {user.status === 'online' ? (
                            <>
                              <span className="w-1.5 h-1.5 bg-green-500 rounded-full status-pulse"></span>
                              Online
                            </>
                          ) : (
                            'Offline'
                          )}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button className="p-1.5 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-colors border border-green-200 cursor-pointer" title="View Details">
                            <FiEye size={16} />
                          </button>
                          <button className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 cursor-pointer" title="More Options">
                            <FiMoreVertical size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}

            {/* Empty State */}
            {!isLoading && paginatedUsers.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FiUsers size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No active users found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your time range or filters</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
              <div className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className={`p-2 rounded-lg border transition-all duration-200
                    ${currentPage === 1
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-orange-300'}`}
                >
                  <FiChevronLeft size={16} />
                </button>

                {[...Array(totalPages)].map((_, i) => {
                  const pageNum = i + 1;
                  if (
                    pageNum === 1 ||
                    pageNum === totalPages ||
                    (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={i}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`w-8 h-8 rounded-lg text-sm font-medium transition-all duration-200
                          ${currentPage === pageNum
                            ? 'bg-[#daf1e5] text-gray-900 border border-lime-300'
                            : 'text-gray-600 hover:bg-gray-100 border border-gray-300'
                          }`}
                      >
                        {pageNum}
                      </button>
                    );
                  } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                    return <span key={i} className="text-gray-400">...</span>;
                  }
                  return null;
                })}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className={`p-2 rounded-lg border transition-all duration-200
                    ${currentPage === totalPages
                      ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-orange-300'}`}
                >
                  <FiChevronRight size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Top Users Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Most Active Users */}
          <div className="bg-white rounded-xl border border-blue-900/20 p-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
              <FiAward className="text-yellow-500" />
              Most Active Users (Top 5)
            </h2>
            <div className="space-y-3">
              {usersData
                .sort((a, b) => b.loginCount - a.loginCount)
                .slice(0, 5)
                .map((user, index) => (
                  <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-sm
                        ${index === 0 ? 'bg-yellow-500' :
                          index === 1 ? 'bg-gray-400' :
                            index === 2 ? 'bg-orange-400' : 'bg-orange-100 text-orange-600'}`}>
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.loginCount} sessions</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{user.avgSessionTime} avg</span>
                  </div>
                ))}
            </div>
          </div>

          {/* High Spend Users */}
          <div className="bg-white rounded-xl border border-blue-900/20 p-6">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
              <FiStar className="text-purple-500" />
              Top Spenders (Top 5)
            </h2>
            <div className="space-y-3">
              {usersData
                .sort((a, b) => b.totalSpend - a.totalSpend)
                .slice(0, 5)
                .map((user, index) => (
                  <div key={user.id} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.totalBookings} bookings • {user.totalOrders} orders</p>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-gray-900">{formatCurrency(user.totalSpend)}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Activity Insights */}
        <div className="bg-linear-to-r from-[#daf1e5] to-white rounded-xl border border-lime-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <FiTrendingUp className="text-orange-500" />
            Activity Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Peak Activity Time</p>
              <p className="text-xl font-bold text-gray-900">6:00 PM - 9:00 PM</p>
              <p className="text-xs text-gray-400 mt-1">Most users active during evening</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Avg. Session Duration</p>
              <p className="text-xl font-bold text-gray-900">{avgSessionTime.toFixed(0)} minutes</p>
              <p className="text-xs text-gray-400 mt-1">Per user session</p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Engagement Rate</p>
              <p className="text-xl font-bold text-gray-900">
                {((usersData.filter(u => u.loginCount > 30).length / usersData.length) * 100).toFixed(0)}%
              </p>
              <p className="text-xs text-gray-400 mt-1">Users with 30+ sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUsers;