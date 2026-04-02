import React, { useState } from "react";
import {
  FiUsers,
  FiClock,
  FiCheckCircle,
  FiXCircle,
  FiCalendar,
  FiTrendingUp,
  FiGlobe,
  FiMail,
  FiFacebook,
  FiUserPlus,
  FiShoppingBag,
  FiFilter,
  FiDownload,
  FiEye,
  FiMoreVertical,
  FiChevronLeft,
  FiChevronRight,
  FiAward,
  FiStar,
  FiRefreshCw,
  FiMapPin
} from "react-icons/fi";

const NewRegistrations = () => {
  const [timeRange, setTimeRange] = useState('7days');
  const [selectedSource, setSelectedSource] = useState('all');
  const [selectedVerification, setSelectedVerification] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;

  // Mock New Registrations Data
  const registrationsData = [
    {
      id: 1,
      name: "Rajesh Kumar",
      email: "rajesh.k@email.com",
      phone: "+91 98765 43210",
      signupSource: "Google",
      signupDate: "2024-03-15T10:30:00",
      verificationStatus: "verified",
      firstBooking: true,
      avatar: "RK",
      location: "Mumbai"
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya.s@email.com",
      phone: "+91 98765 43211",
      signupSource: "Manual",
      signupDate: "2024-03-14T15:45:00",
      verificationStatus: "verified",
      firstBooking: true,
      avatar: "PS",
      location: "Delhi"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.p@email.com",
      phone: "+91 98765 43212",
      signupSource: "Facebook",
      signupDate: "2024-03-14T09:20:00",
      verificationStatus: "pending",
      firstBooking: false,
      avatar: "AP",
      location: "Bangalore"
    },
    {
      id: 4,
      name: "Neha Gupta",
      email: "neha.g@email.com",
      phone: "+91 98765 43213",
      signupSource: "Google",
      signupDate: "2024-03-13T11:15:00",
      verificationStatus: "verified",
      firstBooking: true,
      avatar: "NG",
      location: "Pune"
    },
    {
      id: 5,
      name: "Vikram Singh",
      email: "vikram.s@email.com",
      phone: "+91 98765 43214",
      signupSource: "Manual",
      signupDate: "2024-03-13T14:30:00",
      verificationStatus: "verified",
      firstBooking: false,
      avatar: "VS",
      location: "Chennai"
    },
    {
      id: 6,
      name: "Anjali Sharma",
      email: "anjali.s@email.com",
      phone: "+91 98765 43215",
      signupSource: "Facebook",
      signupDate: "2024-03-12T16:45:00",
      verificationStatus: "verified",
      firstBooking: true,
      avatar: "AS",
      location: "Jaipur"
    },
    {
      id: 7,
      name: "Rahul Verma",
      email: "rahul.v@email.com",
      phone: "+91 98765 43216",
      signupSource: "Google",
      signupDate: "2024-03-12T08:10:00",
      verificationStatus: "pending",
      firstBooking: false,
      avatar: "RV",
      location: "Lucknow"
    },
    {
      id: 8,
      name: "Pooja Mehta",
      email: "pooja.m@email.com",
      phone: "+91 98765 43217",
      signupSource: "Manual",
      signupDate: "2024-03-11T13:20:00",
      verificationStatus: "verified",
      firstBooking: true,
      avatar: "PM",
      location: "Ahmedabad"
    },
    {
      id: 9,
      name: "Suresh Reddy",
      email: "suresh.r@email.com",
      phone: "+91 98765 43218",
      signupSource: "Facebook",
      signupDate: "2024-03-11T10:55:00",
      verificationStatus: "verified",
      firstBooking: true,
      avatar: "SR",
      location: "Hyderabad"
    },
    {
      id: 10,
      name: "Kavita Joshi",
      email: "kavita.j@email.com",
      phone: "+91 98765 43219",
      signupSource: "Google",
      signupDate: "2024-03-10T09:30:00",
      verificationStatus: "verified",
      firstBooking: false,
      avatar: "KJ",
      location: "Nagpur"
    },
    {
      id: 11,
      name: "Deepak Sharma",
      email: "deepak.s@email.com",
      phone: "+91 98765 43220",
      signupSource: "Google",
      signupDate: "2024-03-09T12:15:00",
      verificationStatus: "pending",
      firstBooking: false,
      avatar: "DS",
      location: "Indore"
    },
    {
      id: 12,
      name: "Meera Nair",
      email: "meera.n@email.com",
      phone: "+91 98765 43221",
      signupSource: "Manual",
      signupDate: "2024-03-08T09:45:00",
      verificationStatus: "verified",
      firstBooking: true,
      avatar: "MN",
      location: "Kochi"
    }
  ];

  // Filter registrations based on time range
  const getFilteredByDate = () => {
    const now = new Date();
    const daysToSubtract = timeRange === '7days' ? 7 : 30;
    const cutoffDate = new Date(now.setDate(now.getDate() - daysToSubtract));

    return registrationsData.filter(reg => new Date(reg.signupDate) >= cutoffDate);
  };

  const dateFilteredData = getFilteredByDate();

  // Apply source and verification filters
  const filteredRegistrations = dateFilteredData.filter(reg => {
    const matchesSource = selectedSource === 'all' || reg.signupSource.toLowerCase() === selectedSource.toLowerCase();
    const matchesVerification = selectedVerification === 'all' || reg.verificationStatus === selectedVerification;
    return matchesSource && matchesVerification;
  });

  // Calculate metrics
  const totalRegistrations = filteredRegistrations.length;
  const verifiedCount = filteredRegistrations.filter(r => r.verificationStatus === 'verified').length;
  const pendingCount = filteredRegistrations.filter(r => r.verificationStatus === 'pending').length;
  const withFirstBooking = filteredRegistrations.filter(r => r.firstBooking).length;
  const conversionRate = totalRegistrations > 0 ? ((withFirstBooking / totalRegistrations) * 100).toFixed(1) : 0;

  // Source breakdown
  const googleCount = filteredRegistrations.filter(r => r.signupSource === 'Google').length;
  const manualCount = filteredRegistrations.filter(r => r.signupSource === 'Manual').length;
  const facebookCount = filteredRegistrations.filter(r => r.signupSource === 'Facebook').length;

  // Pagination
  const totalPages = Math.ceil(filteredRegistrations.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedRegistrations = filteredRegistrations.slice(startIndex, startIndex + itemsPerPage);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Export CSV
  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Signup Source', 'Signup Date', 'Verification Status', 'First Booking', 'Location'];
    const csvData = filteredRegistrations.map(user => [
      user.name,
      user.email,
      user.phone,
      user.signupSource,
      new Date(user.signupDate).toLocaleString(),
      user.verificationStatus,
      user.firstBooking ? 'Yes' : 'No',
      user.location
    ]);

    const csvContent = [headers, ...csvData]
      .map(row => row.join(','))
      .join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `new-registrations-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  // Loading skeleton component
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
      {/* Global Styles - Matching Dashboard Theme */}
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
        
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
        
        .shimmer {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
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
        
        /* Stats Card Hover Effect */
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
        
        /* Responsive */
        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          
          .table-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>

      {/* Header Section */}
      <div className="bg-white border-b border-blue-900/20 sticky top-0 z-10 ">
        <div className="px-6 py-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-lg">
                <FiUserPlus className="text-blue-900 w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-black text-gray-900 uppercase">New Registrations <span className="text-orange-600">Track</span></h1>
                <p className="text-sm text-gray-500 font-medium">Track and manage user signups in the divine community</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              {/* Time Range Selector */}
              <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-[#959190]/20">
                {[
                  { value: '7days', label: '7 Days', icon: FiClock },
                  { value: '30days', label: '30 Days', icon: FiCalendar }
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

              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`p-2 rounded-lg border transition-all duration-200
                  ${showFilters
                    ? 'bg-blue-50 border-blue-900/20 text-blue-900'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'}`}
                title="Filters"
              >
                <FiFilter size={16} className={showFilters ? 'text-blue-900' : 'text-gray-500'} />
              </button>

              {/* Export Button */}
              <button
                onClick={exportToCSV}
                className="p-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-200"
                title="Export CSV"
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
        {/* Stats Cards - Dashboard Premium Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Registrations Card */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-blue-50">
                <FiUsers className="text-blue-600 w-5 h-5" />
              </div>
              <span className="text-xs font-medium flex items-center gap-1 text-green-600">
                <FiTrendingUp size={12} />
                +{totalRegistrations} new
              </span>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{totalRegistrations}</h3>
            <p className="text-sm text-gray-500 mt-1">Total Registrations</p>
          </div>

          {/* Verified Users Card */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-green-50">
                <FiCheckCircle className="text-green-600 w-5 h-5" />
              </div>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{verifiedCount}</h3>
            <p className="text-sm text-gray-500 mt-1">Verified Users</p>
            <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-green-600 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${(verifiedCount / totalRegistrations) * 100 || 0}%` }}
              ></div>
            </div>
          </div>

          {/* First Booking Card */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-blue-50">
                <FiShoppingBag className="text-blue-900 w-5 h-5" />
              </div>
              <span className="text-xs font-medium flex items-center gap-1 text-blue-900">
                <FiAward size={12} />
                {conversionRate}% conversion
              </span>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{withFirstBooking}</h3>
            <p className="text-sm text-gray-500 mt-1">Made First Booking</p>
          </div>

          {/* Pending Verification Card */}
          <div className="stats-card bg-white border-l-8 border-l-[#959190]/20 border-b-8 border-b-[#959190]/20 rounded-s-xl rounded-br border border-blue-900/20 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 rounded-lg bg-yellow-50">
                <FiClock className="text-yellow-600 w-5 h-5" />
              </div>
            </div>
            <h3 className="text-[23px] font-bold text-gray-900">{pendingCount}</h3>
            <p className="text-sm text-gray-500 mt-1">Pending Verification</p>
            {pendingCount > 0 && (
              <span className="pending-pulse absolute top-2 right-2 w-2 h-2 bg-yellow-500 rounded-full"></span>
            )}
          </div>
        </div>

        {/* Source Breakdown Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-blue-900/20 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-blue-50">
                <FiGlobe className="text-blue-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Google Signups</p>
                <p className="text-2xl font-bold text-gray-900">{googleCount}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {totalRegistrations > 0 ? ((googleCount / totalRegistrations) * 100).toFixed(0) : 0}% of total
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-blue-900/20 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-amber-50">
                <FiMail className="text-amber-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Manual Signups</p>
                <p className="text-2xl font-bold text-gray-900">{manualCount}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {totalRegistrations > 0 ? ((manualCount / totalRegistrations) * 100).toFixed(0) : 0}% of total
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-blue-900/20 p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-lg bg-indigo-50">
                <FiFacebook className="text-indigo-600" size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Facebook Signups</p>
                <p className="text-2xl font-bold text-gray-900">{facebookCount}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {totalRegistrations > 0 ? ((facebookCount / totalRegistrations) * 100).toFixed(0) : 0}% of total
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        {showFilters && (
          <div className="bg-white rounded-xl border border-blue-900/20 p-6 animate-slideDown">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <FiGlobe size={14} className="text-blue-900" />
                  Signup Source
                </label>
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/40 text-sm"
                >
                  <option value="all">All Sources</option>
                  <option value="google">Google</option>
                  <option value="manual">Manual</option>
                  <option value="facebook">Facebook</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                  <FiCheckCircle size={14} className="text-blue-900" />
                  Verification Status
                </label>
                <select
                  value={selectedVerification}
                  onChange={(e) => setSelectedVerification(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900/40 text-sm"
                >
                  <option value="all">All Status</option>
                  <option value="verified">Verified</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {(selectedSource !== 'all' || selectedVerification !== 'all') && (
              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setSelectedSource('all');
                    setSelectedVerification('all');
                  }}
                  className="flex items-center gap-1 px-3 py-1.5 text-sm text-red-600 hover:text-red-700"
                >
                  <FiXCircle size={16} />
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}

        {/* Registrations Table */}
        <div className="bg-white rounded-xl border border-blue-900/20 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <FiUserPlus className="text-blue-900" />
              Recent Signups
            </h2>
            <div className="text-sm text-gray-500">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredRegistrations.length)} of {filteredRegistrations.length}
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
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Signup Source</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Signup Date</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Verification</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">First Booking</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedRegistrations.map((user) => (
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
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium
                          ${user.signupSource === 'Google' ? 'bg-blue-100 text-blue-700 border border-blue-200' : ''}
                          ${user.signupSource === 'Manual' ? 'bg-amber-100 text-amber-700 border border-amber-200' : ''}
                          ${user.signupSource === 'Facebook' ? 'bg-indigo-100 text-indigo-700 border border-indigo-200' : ''}
                        `}>
                          {user.signupSource === 'Google' && <FiGlobe size={10} />}
                          {user.signupSource === 'Manual' && <FiMail size={10} />}
                          {user.signupSource === 'Facebook' && <FiFacebook size={10} />}
                          {user.signupSource}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-600">{formatDate(user.signupDate)}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium border
                          ${user.verificationStatus === 'verified'
                            ? 'bg-green-100 text-green-700 border-green-200'
                            : 'bg-yellow-100 text-yellow-700 border-yellow-200'
                          }`}>
                          {user.verificationStatus === 'verified'
                            ? <FiCheckCircle size={10} />
                            : <FiClock size={10} />
                          }
                          {user.verificationStatus}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {user.firstBooking ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200">
                            <FiCheckCircle size={10} />
                            Completed
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                            <FiXCircle size={10} />
                            Not Started
                          </span>
                        )}
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
            {!isLoading && paginatedRegistrations.length === 0 && (
              <div className="text-center py-16">
                <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <FiUsers size={32} className="text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No registrations found</h3>
                <p className="text-gray-500 mb-4">Try adjusting your filters or time range</p>
                  <button
                    onClick={() => {
                      setSelectedSource('all');
                      setSelectedVerification('all');
                      setTimeRange('7days');
                    }}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md"
                  >
                    Clear all filters
                  </button>
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

        {/* Growth Insights */}
        <div className="bg-gradient-to-r from-[#959190]/10 to-white rounded-xl border border-blue-900/20 p-6">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
            <FiTrendingUp className="text-blue-900" />
            Growth Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Conversion Rate</p>
              <p className="text-3xl font-bold text-gray-900">{conversionRate}%</p>
              <p className="text-xs text-gray-400 mt-1">of new users make first booking</p>
              <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                  <div className="bg-green-600 h-1.5 rounded-full"
                    style={{ width: `${conversionRate}%` }}
                  ></div>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Top Source</p>
              <p className="text-3xl font-bold text-gray-900">
                {googleCount >= manualCount && googleCount >= facebookCount ? 'Google' :
                  manualCount >= googleCount && manualCount >= facebookCount ? 'Manual' : 'Facebook'}
              </p>
              <p className="text-xs text-gray-400 mt-1">highest signup source</p>
              <div className="mt-2 flex items-center gap-1">
                <FiStar className="text-yellow-500" size={14} />
                <span className="text-xs font-medium">
                  {Math.max(googleCount, manualCount, facebookCount)} signups
                </span>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-4 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Verification Rate</p>
              <p className="text-3xl font-bold text-gray-900">
                {totalRegistrations > 0 ? ((verifiedCount / totalRegistrations) * 100).toFixed(0) : 0}%
              </p>
              <p className="text-xs text-gray-400 mt-1">users verified</p>
              <div className="mt-2 flex items-center gap-2 text-xs">
                <span className="text-green-600">{verifiedCount} verified</span>
                <span className="text-gray-300">•</span>
                <span className="text-yellow-600">{pendingCount} pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRegistrations;