import React, { useState } from "react";
import {
  FiUsers,
  FiSearch,
  FiFilter,
  FiDownload,
  FiEye,
  FiEdit,
  FiLock,
  FiUnlock,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiDollarSign,
  FiX,
  FiCheckCircle,
  FiXCircle,
  FiMail,
  FiPhone,
  FiClock,
  FiTrendingUp,
  FiUserCheck,
  FiUserX,
  FiAward,
  FiRefreshCw,
  FiMapPin,
  FiStar
} from "react-icons/fi";

const AllUsers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [spendRange, setSpendRange] = useState({ min: '', max: '' });
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState('view');
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;

  // Mock Users Data
  const usersData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.k@email.com",
      phone: "+91 98765 43210",
      regDate: "2024-01-15",
      totalBookings: 12,
      totalOrders: 5,
      totalSpend: 24500,
      status: "active",
      avatar: "RK",
      location: "Mumbai",
      lastActive: "2024-03-15",
      preferredPuja: "Ganesh Puja"
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya.s@email.com",
      phone: "+91 98765 43211",
      regDate: "2024-02-20",
      totalBookings: 8,
      totalOrders: 3,
      totalSpend: 15800,
      status: "active",
      avatar: "PS",
      location: "Delhi",
      lastActive: "2024-03-14",
      preferredPuja: "Lakshmi Puja"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.p@email.com",
      phone: "+91 98765 43212",
      regDate: "2024-01-10",
      totalBookings: 15,
      totalOrders: 7,
      totalSpend: 32100,
      status: "blocked",
      avatar: "AP",
      location: "Bangalore",
      lastActive: "2024-03-10",
      preferredPuja: "Satyanarayan"
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha.g@email.com",
      phone: "+91 98765 43213",
      regDate: "2024-02-05",
      totalBookings: 5,
      totalOrders: 2,
      totalSpend: 8900,
      status: "active",
      avatar: "NG",
      location: "Pune",
      lastActive: "2024-03-15",
      preferredPuja: "Durga Puja"
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.s@email.com",
      phone: "+91 98765 43214",
      regDate: "2024-01-25",
      totalBookings: 20,
      totalOrders: 10,
      totalSpend: 45200,
      status: "active",
      avatar: "VS",
      location: "Chennai",
      lastActive: "2024-03-13",
      preferredPuja: "Shiv Puja"
    },
    {
      id: 6,
      name: "Anjali Sharma",
      email: "anjali.s@email.com",
      phone: "+91 98765 43215",
      regDate: "2024-02-18",
      totalBookings: 7,
      totalOrders: 4,
      totalSpend: 12400,
      status: "active",
      avatar: "AS",
      location: "Jaipur",
      lastActive: "2024-03-14",
      preferredPuja: "Ganesh Puja"
    },
    {
      id: 7,
      name: "Rahul Verma",
      email: "rahul.v@email.com",
      phone: "+91 98765 43216",
      regDate: "2024-01-05",
      totalBookings: 18,
      totalOrders: 8,
      totalSpend: 38700,
      status: "blocked",
      avatar: "RV",
      location: "Lucknow",
      lastActive: "2024-03-08",
      preferredPuja: "Lakshmi Puja"
    },
    {
      id: 8,
      name: "Pooja Mehta",
      email: "pooja.m@email.com",
      phone: "+91 98765 43217",
      regDate: "2024-02-28",
      totalBookings: 4,
      totalOrders: 1,
      totalSpend: 5600,
      status: "active",
      avatar: "PM",
      location: "Ahmedabad",
      lastActive: "2024-03-15",
      preferredPuja: "Satyanarayan"
    },
    {
      id: 9,
      name: "Suresh Reddy",
      email: "suresh.r@email.com",
      phone: "+91 98765 43218",
      regDate: "2024-01-30",
      totalBookings: 14,
      totalOrders: 6,
      totalSpend: 28900,
      status: "active",
      avatar: "SR",
      location: "Hyderabad",
      lastActive: "2024-03-12",
      preferredPuja: "Durga Puja"
    },
    {
      id: 10,
      name: "Kavita Joshi",
      email: "kavita.j@email.com",
      phone: "+91 98765 43219",
      regDate: "2024-02-12",
      totalBookings: 9,
      totalOrders: 4,
      totalSpend: 17600,
      status: "active",
      avatar: "KJ",
      location: "Nagpur",
      lastActive: "2024-03-14",
      preferredPuja: "Shiv Puja"
    }
  ];

  // Calculate stats
  const totalUsers = usersData.length;
  const activeUsers = usersData.filter(u => u.status === 'active').length;
  const blockedUsers = usersData.filter(u => u.status === 'blocked').length;
  const totalRevenue = usersData.reduce((sum, u) => sum + u.totalSpend, 0);

  // Filter users
  const filteredUsers = usersData.filter(user => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus =
      selectedFilter === 'all' ||
      (selectedFilter === 'active' && user.status === 'active') ||
      (selectedFilter === 'blocked' && user.status === 'blocked');

    const matchesDate = !dateRange.start || !dateRange.end ||
      (new Date(user.regDate) >= new Date(dateRange.start) &&
        new Date(user.regDate) <= new Date(dateRange.end));

    const matchesSpend =
      (!spendRange.min || user.totalSpend >= parseInt(spendRange.min)) &&
      (!spendRange.max || user.totalSpend <= parseInt(spendRange.max));

    return matchesSearch && matchesStatus && matchesDate && matchesSpend;
  });

  // Pagination
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + itemsPerPage);

  // Export CSV
  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Registration Date', 'Total Bookings', 'Total Orders', 'Total Spend', 'Status', 'Location'];
    const csvData = filteredUsers.map(user => [
      user.name,
      user.email,
      user.phone,
      user.regDate,
      user.totalBookings,
      user.totalOrders,
      user.totalSpend,
      user.status,
      user.location
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'users.csv';
    a.click();
  };

  const openUserModal = (user, action) => {
    setSelectedUser(user);
    setModalAction(action);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Global Styles - Following Dashboard Theme */}
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
        
        /* Smooth transitions for all interactive elements */
        * {
          transition: all 0.2s ease-in-out;
        }
        
        /* Custom scrollbar - matching dashboard theme */
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
        
        /* Stats card hover effect */
        .stats-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .stats-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        
        /* Table row hover effect */
        .table-row-hover {
          transition: all 0.2s ease;
        }
        
        .table-row-hover:hover {
          background-color: #f9fafb;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        /* Pending items pulse animation */
        .pending-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        /* Loading skeleton */
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        /* Responsive improvements */
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .modal-content {
            margin: 1rem;
            max-height: calc(100vh - 2rem);
          }
          
          .table-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>

      {/* Header Section - Matching Dashboard Style */}
      <div className="bg-white border-b border-blue-900/20 sticky top-0 z-10">
        <div className="px-6 py-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiUsers className="text-blue-900 w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 uppercase">All Users <span className="text-orange-600">Overview</span></h1>
                <p className="text-sm text-gray-500 font-medium">Manage and view all registered users in the divine community</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="p-1.5 hover:bg-gray-100 rounded-sm border border-gray-300 cursor-pointer flex items-center gap-2"
              >
                <FiFilter size={16} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Filters</span>
              </button>
              <button
                onClick={exportToCSV}
                className="p-1.5 hover:bg-gray-100 rounded-sm border border-gray-300 cursor-pointer flex items-center gap-2"
              >
                <FiDownload size={16} className="text-gray-500" />
                <span className="text-sm font-medium text-gray-700">Export CSV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Stats Cards - Dashboard Premium Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Users Card */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-blue-50">
                <FiUsers className="text-blue-600 w-5 h-5" />
              </div>
              <span className="text-xs font-medium flex items-center gap-1 text-green-600">
                <FiTrendingUp size={12} />
                +{totalUsers} total
              </span>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{totalUsers}</h3>
            <p className="text-sm text-gray-500 mt-1">Total Users</p>
          </div>

          {/* Active Users Card */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-green-50">
                <FiUserCheck className="text-green-600 w-5 h-5" />
              </div>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{activeUsers}</h3>
            <p className="text-sm text-gray-500 mt-1">Active Users</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-green-600 h-1.5 rounded-full"
                style={{ width: `${(activeUsers / totalUsers) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Blocked Users Card */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-red-50">
                <FiUserX className="text-red-600 w-5 h-5" />
              </div>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{blockedUsers}</h3>
            <p className="text-sm text-gray-500 mt-1">Blocked Users</p>
          </div>

          {/* Total Revenue Card */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-amber-50">
                <FiAward className="text-amber-600 w-5 h-5" />
              </div>
              <span className="text-xs font-medium flex items-center gap-1 text-amber-600">
                <FiTrendingUp size={12} />
                revenue
              </span>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{formatCurrency(totalRevenue)}</h3>
            <p className="text-sm text-gray-500 mt-1">Total Revenue</p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl border border-blue-900/20 p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search users by name, email, phone, location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/40 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="flex gap-2 bg-white rounded-lg p-1 border border-[#959190]/20">
              {['all', 'active', 'blocked'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-1.5 text-sm font-medium rounded-md capitalize transition-colors
                    ${selectedFilter === filter
                      ? 'bg-[#959190]/20 text-black'
                      : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Date Range Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <FiCalendar size={14} className="text-blue-900" />
                    Registration Date Range
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="date"
                      value={dateRange.start}
                      onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/40"
                    />
                    <span className="text-gray-400 self-center">to</span>
                    <input
                      type="date"
                      value={dateRange.end}
                      onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/40"
                    />
                  </div>
                </div>

                {/* Spend Range Filter */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                    <FiDollarSign size={14} className="text-blue-900" />
                    Total Spend Range (₹)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={spendRange.min}
                      onChange={(e) => setSpendRange({ ...spendRange, min: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/40"
                    />
                    <span className="text-gray-400 self-center">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={spendRange.max}
                      onChange={(e) => setSpendRange({ ...spendRange, max: e.target.value })}
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-900/40"
                    />
                  </div>
                </div>
              </div>

              {/* Clear Filters Button */}
              {(dateRange.start || dateRange.end || spendRange.min || spendRange.max) && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => {
                      setDateRange({ start: '', end: '' });
                      setSpendRange({ min: '', max: '' });
                    }}
                    className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-600 hover:text-red-700"
                  >
                    <FiX size={16} />
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl border border-blue-900/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FiUsers className="text-blue-900" />
              Users List ({filteredUsers.length} users)
            </h2>
            <div className="text-sm text-gray-500">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredUsers.length)} of {filteredUsers.length}
            </div>
          </div>

          <div className="overflow-x-auto">
            {isLoading ? (
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="skeleton h-16 rounded-lg"></div>
                ))}
              </div>
            ) : (
              <table className="w-full">
                <thead className="bg-[#959190]/10">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">User</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Contact</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Reg. Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Bookings</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Orders</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Total Spend</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedUsers.map((user) => (
                    <tr key={user.id} className="table-row-hover">
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-900 font-semibold text-sm">
                            {user.avatar}
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
                        <div className="space-y-1">
                          <p className="text-xs text-gray-600 flex items-center gap-1">
                            <FiMail size={10} className="text-gray-400" />
                            {user.email}
                          </p>
                          <p className="text-xs text-gray-600 flex items-center gap-1">
                            <FiPhone size={10} className="text-gray-400" />
                            {user.phone}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">
                        {new Date(user.regDate).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{user.totalBookings}</td>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900">{user.totalOrders}</td>
                      <td className="px-4 py-3 text-sm font-semibold text-gray-900">
                        {formatCurrency(user.totalSpend)}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
                          ${user.status === 'active'
                            ? 'bg-green-100 text-green-600 border border-green-200'
                            : 'bg-red-100 text-red-600 border border-red-200'
                          }`}>
                          {user.status === 'active' ? <FiCheckCircle size={12} /> : <FiXCircle size={12} />}
                          {user.status}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => openUserModal(user, 'view')}
                            className="p-1.5 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-colors border border-green-200 cursor-pointer"
                            title="View Details"
                          >
                            <FiEye size={18} />
                          </button>
                          <button
                            onClick={() => openUserModal(user, 'edit')}
                            className="p-1.5 bg-green-50 hover:bg-green-100 text-green-600 rounded-lg transition-colors border border-green-200 cursor-pointer"
                            title="Edit User"
                          >
                            <FiEdit size={18} />
                          </button>
                          <button
                            onClick={() => openUserModal(user, user.status === 'active' ? 'block' : 'unblock')}
                            className={`p-1.5 rounded-lg transition-colors border cursor-pointer 
                              ${user.status === 'active' 
                                ? 'bg-red-50 hover:bg-red-100 text-red-600 border-red-200' 
                                : 'bg-green-50 hover:bg-green-100 text-green-600 border-green-200'}`}
                            title={user.status === 'active' ? 'Block User' : 'Unblock User'}
                          >
                            {user.status === 'active' ? <FiLock size={18} /> : <FiUnlock size={18} />}
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
              <div className="text-center py-12">
                <FiUsers size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No users found matching your criteria</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-colors
                  ${currentPage === 1
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                <FiChevronLeft size={16} />
                Previous
              </button>
              <div className="flex items-center gap-2">
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors
                      ${currentPage === i + 1
                        ? 'bg-[#959190]/20 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border transition-colors
                  ${currentPage === totalPages
                    ? 'border-gray-200 text-gray-400 cursor-not-allowed'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
              >
                Next
                <FiChevronRight size={16} />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* User Modal */}
      {isModalOpen && selectedUser && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ animation: 'fadeIn 0.2s ease-out' }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

          <div
            className="relative z-10 bg-white rounded-2xl shadow-2xl w-full max-w-2xl modal-content"
            style={{ animation: 'slideUp 0.3s ease-out' }}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-6 py-5 text-blue-900 flex justify-between items-center rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  {modalAction === 'view' && <FiEye size={20} />}
                  {modalAction === 'edit' && <FiEdit size={20} />}
                  {(modalAction === 'block' || modalAction === 'unblock') &&
                    (modalAction === 'block' ? <FiLock size={20} /> : <FiUnlock size={20} />)
                  }
                </div>
                <div>
                  <h3 className="font-semibold text-lg capitalize">{modalAction} User</h3>
                  <p className="text-sm text-blue-50">{selectedUser.name}</p>
                </div>
              </div>
              <button onClick={closeModal} className="hover:bg-white/20 p-2 rounded-lg">
                <FiX size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[70vh] overflow-y-auto">
              {modalAction === 'view' && (
                <div className="space-y-6">
                  {/* User Profile Card */}
                  <div className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                        <span className="text-blue-900 font-bold text-xl">{selectedUser.avatar}</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-gray-900">{selectedUser.name}</h4>
                        <p className="text-sm text-gray-500 flex items-center gap-1">
                          <FiMapPin size={14} />
                          {selectedUser.location}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium
                            ${selectedUser.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'}`}>
                            {selectedUser.status === 'active' ? <FiCheckCircle size={10} /> : <FiXCircle size={10} />}
                            {selectedUser.status}
                          </span>
                          <span className="text-xs text-gray-400">Last active: {selectedUser.lastActive}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FiMail className="text-orange-500" size={16} />
                        Contact Info
                      </h5>
                      <div className="space-y-2">
                        <p className="text-sm flex items-center gap-2">
                          <FiMail className="text-gray-400" size={14} />
                          <span className="text-gray-600">{selectedUser.email}</span>
                        </p>
                        <p className="text-sm flex items-center gap-2">
                          <FiPhone className="text-gray-400" size={14} />
                          <span className="text-gray-600">{selectedUser.phone}</span>
                        </p>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl">
                      <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <FiCalendar className="text-orange-500" size={16} />
                        Registration
                      </h5>
                      <p className="text-sm text-gray-600">
                        {new Date(selectedUser.regDate).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </p>
                      {selectedUser.preferredPuja && (
                        <>
                          <h5 className="text-sm font-semibold text-gray-700 mt-3 mb-2 flex items-center gap-2">
                            <FiStar className="text-orange-500" size={16} />
                            Preferred Puja
                          </h5>
                          <p className="text-sm text-gray-600">{selectedUser.preferredPuja}</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Activity Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-orange-600">{selectedUser.totalBookings}</p>
                      <p className="text-xs text-gray-500">Bookings</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-green-600">{selectedUser.totalOrders}</p>
                      <p className="text-xs text-gray-500">Orders</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-xl text-center">
                      <p className="text-2xl font-bold text-purple-600">{formatCurrency(selectedUser.totalSpend)}</p>
                      <p className="text-xs text-gray-500">Total Spend</p>
                    </div>
                  </div>
                </div>
              )}

              {modalAction === 'edit' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      defaultValue={selectedUser.name}
                      className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      defaultValue={selectedUser.email}
                      className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Phone</label>
                    <input
                      type="text"
                      defaultValue={selectedUser.phone}
                      className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700">Location</label>
                    <input
                      type="text"
                      defaultValue={selectedUser.location}
                      className="w-full mt-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>
              )}

              {(modalAction === 'block' || modalAction === 'unblock') && (
                <div className="text-center py-6">
                  <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4
                    ${modalAction === 'block' ? 'bg-red-100' : 'bg-green-100'}`}>
                    {modalAction === 'block'
                      ? <FiLock size={32} className="text-red-600" />
                      : <FiUnlock size={32} className="text-green-600" />
                    }
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {modalAction === 'block' ? 'Block User' : 'Unblock User'}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {modalAction === 'block'
                      ? 'This user will no longer be able to access the platform'
                      : 'This user will regain access to the platform'
                    }
                  </p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-3 border-t border-lime-200 rounded-b-2xl">
              <button
                onClick={closeModal}
                className="px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <FiX size={16} /> Close
              </button>
              {modalAction !== 'view' && (
                <button className="px-5 py-2.5 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center gap-2">
                  <FiCheckCircle size={16} />
                  {modalAction === 'edit' && 'Save Changes'}
                  {modalAction === 'block' && 'Block User'}
                  {modalAction === 'unblock' && 'Unblock User'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllUsers;