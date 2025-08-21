import React, { useState } from "react";
import {
  User,
  Grid3X3,
  Play,
  ShoppingCart,
  FileText,
  Clock,
  CheckSquare,
  Camera,
  Image,
  Calendar,
  DollarSign,
  Package,
  TrendingUp,
  Trophy,
  Award,
} from "lucide-react";

function App() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  const sidebarItems = [
    { icon: User, id: "profile", label: "Profile" },
    { icon: Grid3X3, id: "dashboard", label: "Dashboard" },
    { icon: Play, id: "media", label: "Media" },
    { icon: ShoppingCart, id: "sales", label: "Sales" },
    { icon: FileText, id: "reports", label: "Reports" },
    { icon: Clock, id: "time", label: "Time Tracking" },
    { icon: CheckSquare, id: "tasks", label: "Tasks" },
    { icon: Camera, id: "camera", label: "Camera" },
    { icon: Image, id: "gallery", label: "Gallery" },
  ];

  const performanceData = {
    employee: {
      name: "John Doe",
      role: "Staff",
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    },
    dateRange: "July 1, 2025 - July 31, 2025",
    totalSales: 82000.0,
    unitsSold: 2,
    maxExpensiveProduct: 50000.0,
  };

  const TrophyBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {[...Array(8)].map((_, i) => (
        <Trophy
          key={i}
          className={`absolute text-orange-300 ${
            i === 0
              ? "top-8 left-12 w-12 h-12 rotate-12"
              : i === 1
              ? "top-16 right-20 w-8 h-8 -rotate-12"
              : i === 2
              ? "top-32 left-32 w-10 h-10 rotate-45"
              : i === 3
              ? "top-20 right-40 w-6 h-6 -rotate-45"
              : i === 4
              ? "bottom-20 left-16 w-14 h-14 rotate-12"
              : i === 5
              ? "bottom-32 right-24 w-8 h-8 -rotate-12"
              : i === 6
              ? "bottom-16 left-48 w-10 h-10 rotate-45"
              : "bottom-40 right-16 w-12 h-12 -rotate-45"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
     

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Current Month's Best Performer
          </h1>

          {/* Hero Card */}
          <div className="relative bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 rounded-3xl p-8 mb-8 overflow-hidden shadow-2xl">
            <TrophyBackground />

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={performanceData.employee.avatar}
                    alt={performanceData.employee.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-white">
                  <h2 className="text-3xl font-bold mb-1">
                    {performanceData.employee.name}
                  </h2>
                  <p className="text-orange-100 text-lg">
                    {performanceData.employee.role}
                  </p>
                </div>
              </div>

              <div className="bg-orange-500 p-4 rounded-full shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Date Range Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-2">
                Date Range
              </h3>
              <p className="text-gray-900 text-lg font-semibold leading-tight">
                {performanceData.dateRange}
              </p>
            </div>

            {/* Total Sales Amount Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-green-100 p-3 rounded-xl">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-2">
                Total Sales Amount
              </h3>
              <p className="text-green-600 text-2xl font-bold">
                ₹{" "}
                {performanceData.totalSales.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>

            {/* Units Sold Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Package className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-2">
                Unit Sold
              </h3>
              <p className="text-gray-900 text-3xl font-bold">
                {performanceData.unitsSold}
              </p>
            </div>

            {/* Max Expensive Products Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-2">
                Max Expensive Products
              </h3>
              <p className="text-yellow-600 text-2xl font-bold">
                ₹{" "}
                {performanceData.maxExpensiveProduct.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>

          {/* Additional Analytics Section */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Performance Chart Placeholder */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Monthly Performance
              </h3>
              <div className="h-48 bg-gradient-to-r from-orange-100 to-orange-200 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-orange-500" />
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Recent Achievements
              </h3>
              <div className="space-y-3">
                {[
                  {
                    title: "Top Sales This Month",
                    date: "July 2025",
                    icon: Trophy,
                  },
                  {
                    title: "Customer Satisfaction Award",
                    date: "June 2025",
                    icon: Award,
                  },
                  {
                    title: "Sales Target Exceeded",
                    date: "May 2025",
                    icon: TrendingUp,
                  },
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-orange-50 rounded-xl"
                  >
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <achievement.icon className="w-4 h-4 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-800">
                        {achievement.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
