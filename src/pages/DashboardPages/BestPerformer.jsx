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
    dateRange: "July 1, 2025 - July 31,2025",
    totalSales: 82000.0,
    unitsSold: 2,
    maxExpensiveProduct: 50000.0,
  };

  const TrophyBackground = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      {[...Array(12)].map((_, i) => (
        <Trophy
          key={i}
          className={`absolute text-orange-200 ${
            i === 0
              ? "top-4 left-8 w-16 h-16 rotate-12"
              : i === 1
              ? "top-8 right-12 w-12 h-12 -rotate-12"
              : i === 2
              ? "top-16 left-24 w-10 h-10 rotate-45"
              : i === 3
              ? "top-12 right-32 w-8 h-8 -rotate-45"
              : i === 4
              ? "top-20 left-48 w-14 h-14 rotate-12"
              : i === 5
              ? "top-6 right-48 w-10 h-10 -rotate-12"
              : i === 6
              ? "top-24 left-64 w-12 h-12 rotate-45"
              : i === 7
              ? "top-4 right-64 w-16 h-16 -rotate-45"
              : i === 8
              ? "top-32 left-16 w-8 h-8 rotate-12"
              : i === 9
              ? "top-28 right-20 w-12 h-12 -rotate-12"
              : i === 10
              ? "top-36 left-40 w-10 h-10 rotate-45"
              : "top-32 right-56 w-14 h-14 -rotate-45"
          }`}
        />
      ))}
    </div>
  );

  return (
    <div className="h-full bg-gray-50 flex">
      
      

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="w-full">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Current Month's Best Performer
          </h1>

          {/* Hero Card - Orange Section */}
          <div className="relative bg-gradient-to-r from-orange-300 to-orange-400 rounded-2xl p-8 pb-16 mb-16 overflow-hidden">
            <TrophyBackground />

            <div className="relative z-10 flex items-center justify-end">
              <div className="bg-orange-500 p-3 rounded-full shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Profile Section - Positioned to overlap */}
          <div className="relative -mt-25 mb-8 ml-8">
            <div className="flex items-center space-x-4">
              <div className="w-25 h-25 rounded-2xl overflow-hidden border-1 border-white shadow-lg bg-white">
                <img
                  src={performanceData.employee.avatar}
                  alt={performanceData.employee.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-gray-800 pt-8">
                <h2 className="text-2xl font-bold mb-1">
                  {performanceData.employee.name}
                </h2>
                <p className="text-gray-500 text-base">
                  {performanceData.employee.role}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
            {/* Date Range Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <h3 className="text-gray-700 text-sm font-medium mb-2">
                Date Range
              </h3>
              <p className="text-gray-900 text-base font-semibold leading-tight">
                {performanceData.dateRange}
              </p>
            </div>

            {/* Total Sales Amount Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
              </div>
              <h3 className="text-gray-700 text-sm font-medium mb-2">
                Total Sales Amount
              </h3>
              <p className="text-green-600 text-xl font-bold">
                ₹{" "}
                {performanceData.totalSales.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>

            {/* Units Sold Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Package className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <h3 className="text-gray-700 text-sm font-medium mb-2">
                Unit Sold
              </h3>
              <p className="text-gray-900 text-2xl font-bold">
                {performanceData.unitsSold}
              </p>
            </div>

            {/* Max Expensive Products Card */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-3">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Trophy className="w-5 h-5 text-yellow-600" />
                </div>
              </div>
              <h3 className="text-gray-700 text-sm font-medium mb-2">
                Max Expensive Products
              </h3>
              <p className="text-yellow-600 text-xl font-bold">
                ₹{" "}
                {performanceData.maxExpensiveProduct.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
