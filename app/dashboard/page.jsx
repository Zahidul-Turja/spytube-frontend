"use client";

import { useEffect, useState } from "react";

import {
  BarChart3,
  Eye,
  Clock,
  Users,
  TrendingUp,
  DollarSign,
  Video,
  Bell,
  Settings,
  Search,
  Menu,
  X,
  Play,
  Calendar,
  Activity,
} from "lucide-react";
import { getDashboardData, getRevenueBreakdown } from "@/lib/api";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const [channelData, setChannelData] = useState({});
  const [analyticsData, setAnalyticsData] = useState({});
  const [playlists, setPlaylists] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboardData();
        console.log(data);
        setChannelData(data.channelData);
        setAnalyticsData(data.analyticsData);
        setPlaylists(data.playlists);
        setVideos(data.videos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const revenueBreakdown = async () => {
      try {
        const data = await getRevenueBreakdown();
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    revenueBreakdown();
  }, []);

  const revenueData = {
    estimatedRevenue: 0.0,
    cpm: 2.5,
    projections: {
      daily: 0.0,
      monthly: 0.0,
      yearly: 0.0,
    },
  };

  const sidebarItems = [
    { icon: BarChart3, label: "Analytics", active: true },
    { icon: Video, label: "Content", active: false },
    { icon: DollarSign, label: "Revenue", active: false },
    { icon: Users, label: "Audience", active: false },
    { icon: Activity, label: "Performance", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  const StatCard = ({ title, value, change, icon: Icon, trend }) => (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:bg-gray-800 transition-colors">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-white mt-1">{value}</p>
          {change && (
            <p
              className={`text-sm mt-1 ${trend === "up" ? "text-green-400" : "text-red-400"}`}
            >
              {change}
            </p>
          )}
        </div>
        <div className="bg-gray-800 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-gray-400" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {sidebarOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <h1 className="text-xl font-bold">YouTube Analytics</h1>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-gray-900 border border-gray-700 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-gray-600"
              />
            </div>
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">ZT</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 h-full w-64 bg-black border-r border-gray-800 transform transition-transform duration-300 ease-in-out z-40 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >
        <div className="p-4">
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-white mb-2">
              {channelData.title}
            </h2>
            <p className="text-gray-400 text-sm">@zahidulturja</p>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                  item.active
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64 pt-16 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
          <p className="text-gray-400">Welcome back, {channelData?.title}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Views"
            value={channelData?.totalViews?.toLocaleString()}
            icon={Eye}
          />
          <StatCard
            title="Subscribers"
            value={channelData?.subscribers?.toLocaleString()}
            icon={Users}
          />
          <StatCard
            title="Total Videos"
            value={channelData?.totalVideos}
            icon={Video}
          />
          <StatCard
            title="Watch Time"
            value={`${channelData?.watchTime} hrs`}
            icon={Clock}
          />
        </div>

        {/* Revenue Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <StatCard
            title="Estimated Revenue"
            value={`$${revenueData.estimatedRevenue.toFixed(2)}`}
            icon={DollarSign}
          />
          <StatCard
            title="CPM"
            value={`$${revenueData.cpm.toFixed(2)}`}
            icon={TrendingUp}
          />
          <StatCard
            title="Monthly Projection"
            value={`$${revenueData.projections.monthly.toFixed(2)}`}
            icon={Calendar}
          />
        </div>

        {/* Recent Videos */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-white mb-6">
            Recent Videos
          </h2>
          <div className="space-y-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="relative">
                  <img
                    src={video.snippet.thumbnails.default.url}
                    alt={video.snippet.title}
                    className="w-24 h-16 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-6 h-6 text-white opacity-80" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white truncate">
                    {video.snippet.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    {new Date(video.snippet.publishedAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white font-medium">{video.views}</p>
                  <p className="text-gray-400 text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Dashboard;
