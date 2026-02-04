import React, { useState } from 'react';
import { 
  MessageCircle, 
  Video, 
  Phone, 
  FileText, 
  Star, 
  Clock,
  Wallet, 
  Calendar, 
  Users, 
  TrendingUp, 
  ChevronRight,
  CheckCircle,
  XCircle,
  MoreVertical,
  Download,
  BarChart,
  ThumbsUp,
  Moon,
  Sun,
  Zap,
  Bell,
  Search,
  Filter,
  Plus,
  Edit,
  Trash2,
  User,
  Hash,
  DollarSign,
  Watch,
  Shield,
  Headphones,
  Activity,
  CreditCard
} from 'lucide-react';

const StatCard = ({ icon: Icon, title, value, change, color }) => {
  return (
    <div className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl ${color}`}>
            <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          </div>
          <div>
            <p className="text-xs sm:text-sm text-gray-500 font-medium">{title}</p>
            <p className="text-lg sm:text-2xl font-bold text-gray-900 mt-0.5 sm:mt-1">{value}</p>
          </div>
        </div>
        {change && (
          <div className="hidden sm:flex items-center gap-1 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500" />
            <span className="text-green-600 font-medium">{change}</span>
          </div>
        )}
      </div>
      {change && (
        <div className="sm:hidden flex items-center gap-1 mt-2 text-xs">
          <TrendingUp className="h-3 w-3 text-green-500" />
          <span className="text-green-600 font-medium">{change}</span>
        </div>
      )}
    </div>
  );
};

const ConsultationCard = ({ type, client, time, duration, status, price, mode }) => {
  const getStatusColor = (status) => {
    switch(status) {
      case 'confirmed': return 'bg-green-50 text-green-700';
      case 'pending': return 'bg-yellow-50 text-yellow-700';
      case 'cancelled': return 'bg-red-50 text-red-700';
      case 'completed': return 'bg-blue-50 text-blue-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  const getModeIcon = (mode) => {
    switch(mode) {
      case 'video': return Video;
      case 'voice': return Phone;
      case 'chat': return MessageCircle;
      default: return MessageCircle;
    }
  };

  const ModeIcon = getModeIcon(mode);

  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 border border-gray-100 hover:border-indigo-100 hover:shadow-sm transition-all">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="p-1.5 bg-indigo-50 rounded-lg">
              <ModeIcon className="h-3 w-3 sm:h-4 sm:w-4 text-indigo-600" />
            </div>
            <span className="text-xs font-medium text-gray-500 uppercase">{mode} Consultation</span>
          </div>
          <h3 className="font-semibold text-gray-900 text-base sm:text-lg truncate">{type}</h3>
          <div className="flex items-center gap-2 mt-1">
            <User className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
            <span className="text-xs sm:text-sm text-gray-600">{client}</span>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium ${getStatusColor(status)}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <span className="text-sm sm:text-base font-bold text-gray-900">{price}</span>
        </div>
      </div>

      <div className="space-y-2 sm:space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
            <span className="text-xs sm:text-sm text-gray-600">{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <Watch className="h-3 w-3 sm:h-4 sm:w-4 text-gray-400" />
            <span className="text-xs sm:text-sm text-gray-600">{duration}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 mt-4 sm:mt-5 pt-4 sm:pt-5 border-t border-gray-100">
          {status === 'pending' && (
            <>
              <button className="flex-1 py-2 text-center bg-green-50 text-green-600 hover:bg-green-100 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                Accept
              </button>
              <button className="flex-1 py-2 text-center bg-red-50 text-red-600 hover:bg-red-100 rounded-lg text-xs sm:text-sm font-medium transition-colors">
                Decline
              </button>
            </>
          )}
          {status === 'confirmed' && (
            <button className="flex-1 py-2 text-center bg-indigo-50 text-indigo-600 hover:bg-indigo-100 rounded-lg text-xs sm:text-sm font-medium transition-colors">
              Start Session
            </button>
          )}
          {status === 'completed' && (
            <button className="flex-1 py-2 text-center bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg text-xs sm:text-sm font-medium transition-colors">
              View Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

const ChatRequestCard = ({ client, time, message, unread }) => {
  return (
    <div className="bg-white rounded-lg sm:rounded-xl p-4 border border-gray-100 hover:border-purple-100 hover:shadow-sm transition-all">
      <div className="flex items-start gap-3">
        <div className="relative">
          <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-semibold text-sm">{client.charAt(0)}</span>
          </div>
          {unread && (
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">{unread}</span>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{client}</h4>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
          <p className="text-xs sm:text-sm text-gray-600 mt-1 line-clamp-2">{message}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
        <button className="flex-1 py-2 text-center bg-purple-50 text-purple-600 hover:bg-purple-100 rounded-lg text-xs sm:text-sm font-medium transition-colors">
          Reply
        </button>
        <button className="flex-1 py-2 text-center bg-gray-50 text-gray-600 hover:bg-gray-100 rounded-lg text-xs sm:text-sm font-medium transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
};

const ReportCard = ({ type, client, date, status, price }) => {
  const getStatusIcon = (status) => {
    switch(status) {
      case 'delivered': return CheckCircle;
      case 'processing': return Activity;
      case 'pending': return Clock;
      default: return FileText;
    }
  };

  const StatusIcon = getStatusIcon(status);
  
  return (
    <div className="flex items-center gap-4 p-3 sm:p-4 bg-gray-50 rounded-lg sm:rounded-xl hover:bg-gray-100 transition-colors">
      <div className="p-2.5 sm:p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
        <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between">
          <h4 className="font-medium text-gray-900 text-sm sm:text-base truncate">{type}</h4>
          <span className="text-xs sm:text-sm font-semibold text-gray-900 ml-2">{price}</span>
        </div>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <User className="h-3 w-3 text-gray-400" />
            <span className="text-xs text-gray-500 truncate">{client}</span>
          </div>
          <div className="flex items-center gap-1">
            <StatusIcon className="h-3 w-3 text-gray-400" />
            <span className="text-xs text-gray-500 capitalize">{status}</span>
          </div>
        </div>
        <div className="text-xs text-gray-400 mt-1">{date}</div>
      </div>
      
      <button className="p-1.5 hover:bg-white rounded-lg">
        <MoreVertical className="h-4 w-4 text-gray-400" />
      </button>
    </div>
  );
};

const AvailabilitySlot = ({ day, slots, isActive }) => {
  return (
    <div className={`p-4 rounded-xl border ${isActive ? 'border-indigo-200 bg-indigo-50' : 'border-gray-200 bg-white'}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold text-gray-900">{day}</h4>
        <div className={`h-2 w-2 rounded-full ${isActive ? 'bg-green-500' : 'bg-gray-300'}`}></div>
      </div>
      
      <div className="space-y-2">
        {slots.map((slot, index) => (
          <div key={index} className={`px-3 py-1.5 rounded-lg text-sm ${slot.booked ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
            {slot.time} {slot.booked && '(Booked)'}
          </div>
        ))}
      </div>
      
      <button className="w-full mt-3 py-2 text-center text-indigo-600 hover:text-indigo-700 font-medium text-sm border border-indigo-200 rounded-lg hover:bg-indigo-50 transition-colors">
        Edit Slots
      </button>
    </div>
  );
};

const ReviewCard = ({ client, rating, date, comment }) => {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-100">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center">
            <span className="text-white font-semibold">{client.charAt(0)}</span>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{client}</h4>
            <div className="flex items-center gap-1 mt-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      
      <p className="text-sm text-gray-600">{comment}</p>
      
      <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100">
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          <ThumbsUp className="h-4 w-4" />
          Helpful
        </button>
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 ml-4">
          <MessageCircle className="h-4 w-4" />
          Reply
        </button>
      </div>
    </div>
  );
};

const EarningsChart = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const amounts = [45000, 52000, 38000, 61000, 48000, 72000];
  const maxAmount = Math.max(...amounts);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between h-40">
        {amounts.map((amount, index) => {
          const height = (amount / maxAmount) * 100;
          const isPeak = amount === maxAmount;
          
          return (
            <div key={index} className="flex flex-col items-center flex-1">
              <div className="text-xs font-medium text-gray-700 mb-2">
                ₹{(amount / 1000).toFixed(0)}k
              </div>
              <div
                className={`w-8 sm:w-10 rounded-t transition-all duration-300 ${
                  isPeak 
                    ? 'bg-gradient-to-t from-indigo-600 to-indigo-400' 
                    : 'bg-gradient-to-t from-indigo-200 to-indigo-100'
                }`}
                style={{ height: `${height}%` }}
              />
              <div className="text-xs text-gray-500 mt-2">{months[index]}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AstrologerDashboard = () => {
  const [activeTab, setActiveTab] = useState('today');

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Welcome, Acharya Verma</h1>
              <p className="text-gray-600 mt-1 sm:mt-2">Your astrology consultation dashboard</p>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="p-2 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <div className="relative">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white font-semibold">AV</span>
                </div>
                <div className="absolute -top-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8">
            <StatCard 
              icon={MessageCircle} 
              title="Today's Consultations" 
              value="8"
              change="+15%"
              color="bg-indigo-500"
            />
            <StatCard 
              icon={Wallet} 
              title="Earnings" 
              value="₹42.5k"
              change="+22%"
              color="bg-green-500"
            />
            <StatCard 
              icon={Star} 
              title="Rating" 
              value="4.8"
              color="bg-yellow-500"
            />
            <StatCard 
              icon={Users} 
              title="Active Clients" 
              value="24"
              change="+8%"
              color="bg-purple-500"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Today's Consultations */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Today's Consultations</h2>
                  <p className="text-gray-600 text-sm mt-1">Manage your daily appointments</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <Filter className="h-4 w-4 inline mr-2" />
                    Filter
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700">
                    <Plus className="h-4 w-4 inline mr-2" />
                    Add Slot
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ConsultationCard 
                  type="Career Horoscope"
                  client="Rajesh Kumar"
                  time="10:00 AM - 10:30 AM"
                  duration="30 min"
                  status="confirmed"
                  price="₹1,500"
                  mode="video"
                />
                <ConsultationCard 
                  type="Love Compatibility"
                  client="Priya Sharma"
                  time="11:00 AM - 11:45 AM"
                  duration="45 min"
                  status="pending"
                  price="₹2,000"
                  mode="voice"
                />
              </div>
            </div>

            {/* Chat Requests & Reports */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Chat Requests */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Chat Requests</h2>
                    <p className="text-gray-600 text-sm mt-1">Unread messages from clients</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>

                <div className="space-y-4">
                  <ChatRequestCard 
                    client="Anil Patel"
                    time="2 min ago"
                    message="Hello, I need urgent advice about marriage compatibility..."
                    unread={3}
                  />
                  <ChatRequestCard 
                    client="Sneha Gupta"
                    time="15 min ago"
                    message="Can you check my kundli for business prospects?"
                    unread={1}
                  />
                </div>
              </div>

              {/* Reports Section */}
              <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Kundli Reports</h2>
                    <p className="text-gray-600 text-sm mt-1">Recent report requests</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400" />
                </div>

                <div className="space-y-3">
                  <ReportCard 
                    type="Detailed Kundli Analysis"
                    client="Vikram Singh"
                    date="Today, 9:30 AM"
                    status="processing"
                    price="₹3,500"
                  />
                  <ReportCard 
                    type="Career Prediction"
                    client="Meena Verma"
                    date="Yesterday"
                    status="delivered"
                    price="₹2,000"
                  />
                </div>
              </div>
            </div>

            {/* Consultation History */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Consultation History</h2>
                  <p className="text-gray-600 text-sm mt-1">Past 30 days consultations</p>
                </div>
                <button className="text-indigo-600 hover:text-indigo-700 font-medium text-sm">
                  View All History
                </button>
              </div>

              <div className="space-y-3">
                <ConsultationCard 
                  type="Birth Chart Analysis"
                  client="Amit Shah"
                  time="May 12, 2024"
                  duration="1 hour"
                  status="completed"
                  price="₹4,000"
                  mode="video"
                />
                <ConsultationCard 
                  type="Remedial Solutions"
                  client="Neha Kapoor"
                  time="May 10, 2024"
                  duration="45 min"
                  status="completed"
                  price="₹2,500"
                  mode="voice"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Earnings Summary */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Earnings Overview</h2>
                  <p className="text-gray-600 text-sm mt-1">Last 6 months performance</p>
                </div>
                <CreditCard className="h-5 w-5 text-gray-400" />
              </div>

              <EarningsChart />

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">This Month</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">₹72,800</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Last Month</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">₹61,400</p>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-xl hover:opacity-90 transition-opacity">
                  <Download className="h-5 w-5" />
                  Withdraw Earnings
                </button>
              </div>
            </div>

            {/* Availability Slots */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Availability</h2>
                  <p className="text-gray-600 text-sm mt-1">Your weekly schedule</p>
                </div>
                <button className="p-2 text-indigo-600 hover:text-indigo-700">
                  <Edit className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <AvailabilitySlot 
                  day="Monday"
                  slots={[
                    { time: '10:00 AM', booked: true },
                    { time: '2:00 PM', booked: false },
                    { time: '4:00 PM', booked: true }
                  ]}
                  isActive={true}
                />
                <AvailabilitySlot 
                  day="Tuesday"
                  slots={[
                    { time: '11:00 AM', booked: false },
                    { time: '3:00 PM', booked: false }
                  ]}
                  isActive={true}
                />
              </div>
            </div>

            {/* Reviews & Ratings */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Reviews & Ratings</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-900 font-bold">4.8</span>
                    <span className="text-gray-500 text-sm">(128 reviews)</span>
                  </div>
                </div>
                <ThumbsUp className="h-5 w-5 text-gray-400" />
              </div>

              <div className="space-y-4">
                <ReviewCard 
                  client="Rahul Mehta"
                  rating={5}
                  date="2 days ago"
                  comment="Excellent guidance! Acharya Verma provided detailed insights that helped me make important career decisions."
                />
                <ReviewCard 
                  client="Sunita Reddy"
                  rating={4}
                  date="1 week ago"
                  comment="Very accurate predictions and patient listening. Would definitely recommend!"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Quick Stats */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-5 border border-indigo-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Horoscope Requests</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">42</p>
              </div>
              <Moon className="h-8 w-8 text-indigo-500" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Avg. Session Time</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">38m</p>
              </div>
              <Clock className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl p-5 border border-yellow-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Repeat Clients</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">68%</p>
              </div>
              <Shield className="h-8 w-8 text-yellow-500" />
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-5 border border-pink-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Response Rate</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">94%</p>
              </div>
              <Zap className="h-8 w-8 text-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AstrologerDashboard;