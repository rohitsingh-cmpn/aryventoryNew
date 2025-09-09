import React, { useState, useMemo, useCallback } from "react";
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
} from "lucide-react";

// Constants
const TROPHY_COUNT = 12;
const TROPHY_POSITIONS = [
  "top-4 left-8 w-16 h-16 rotate-12",
  "top-8 right-12 w-12 h-12 -rotate-12",
  "top-16 left-24 w-10 h-10 rotate-45",
  "top-12 right-32 w-8 h-8 -rotate-45",
  "top-20 left-48 w-14 h-14 rotate-12",
  "top-6 right-48 w-10 h-10 -rotate-12",
  "top-24 left-64 w-12 h-12 rotate-45",
  "top-4 right-64 w-16 h-16 -rotate-45",
  "top-32 left-16 w-8 h-8 rotate-12",
  "top-28 right-20 w-12 h-12 -rotate-12",
  "top-36 left-40 w-10 h-10 rotate-45",
  "top-32 right-56 w-14 h-14 -rotate-45",
];

// Utility function for currency formatting
const formatCurrency = (amount) => {
  return amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// Memoized Trophy Background Component
const TrophyBackground = React.memo(() => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
    {Array.from({ length: TROPHY_COUNT }, (_, i) => (
      <Trophy
        key={`trophy-${i}`}
        className={`absolute text-orange-200 ${TROPHY_POSITIONS[i]}`}
        aria-hidden="true"
      />
    ))}
  </div>
));

TrophyBackground.displayName = "TrophyBackground";

// Memoized Stats Card Component
const StatsCard = React.memo(
  ({ icon: Icon, title, value, color, className = "" }) => {
    const colorClasses = {
      blue: "bg-blue-100 text-blue-600",
      green: "bg-green-100 text-green-600",
      yellow: "bg-yellow-100 text-yellow-600",
    };

    return (
      <div
        className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-200 ${className}`}
      >
        <div className="flex items-center justify-between mb-3">
          <div className={`p-2 rounded-lg ${colorClasses[color]}`}>
            <Icon className="w-5 h-5" aria-hidden="true" />
          </div>
        </div>
        <h3 className="text-gray-700 text-sm font-medium mb-2">{title}</h3>
        <p
          className={`text-xl font-bold ${
            color === "green"
              ? "text-green-600"
              : color === "yellow"
              ? "text-yellow-600"
              : "text-gray-900"
          }`}
        >
          {value}
        </p>
      </div>
    );
  }
);

StatsCard.displayName = "StatsCard";

// Memoized Employee Profile Component
const EmployeeProfile = React.memo(({ employee }) => (
  <div className="relative -mt-25 mb-8 ml-8">
    <div className="flex items-center space-x-4">
      <div className="w-25 h-25 rounded-2xl overflow-hidden border-4 border-white shadow-lg bg-white">
        <img
          src={employee.avatar}
          alt={`${employee.name} - ${employee.role}`}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="text-gray-800 pt-8">
        <h2 className="text-2xl font-bold mb-1">{employee.name}</h2>
        <p className="text-gray-500 text-base">{employee.role}</p>
      </div>
    </div>
  </div>
));

EmployeeProfile.displayName = "EmployeeProfile";

// Main Dashboard Component
function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("dashboard");

  // Memoized sidebar items
  const sidebarItems = useMemo(
    () => [
      { icon: User, id: "profile", label: "Profile" },
      { icon: Grid3X3, id: "dashboard", label: "Dashboard" },
      { icon: Play, id: "media", label: "Media" },
      { icon: ShoppingCart, id: "sales", label: "Sales" },
      { icon: FileText, id: "reports", label: "Reports" },
      { icon: Clock, id: "time", label: "Time Tracking" },
      { icon: CheckSquare, id: "tasks", label: "Tasks" },
      { icon: Camera, id: "camera", label: "Camera" },
      { icon: Image, id: "gallery", label: "Gallery" },
    ],
    []
  );

  // Memoized performance data
  const performanceData = useMemo(
    () => ({
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
    }),
    []
  );

  // Memoized stats configuration
  const statsConfig = useMemo(
    () => [
      {
        icon: Calendar,
        title: "Date Range",
        value: performanceData.dateRange,
        color: "blue",
      },
      {
        icon: DollarSign,
        title: "Total Sales Amount",
        value: `₹ ${formatCurrency(performanceData.totalSales)}`,
        color: "green",
      },
      {
        icon: Package,
        title: "Unit Sold",
        value: performanceData.unitsSold.toString(),
        color: "blue",
      },
      {
        icon: Trophy,
        title: "Max Expensive Products",
        value: `₹ ${formatCurrency(performanceData.maxExpensiveProduct)}`,
        color: "yellow",
      },
    ],
    [performanceData]
  );

  // Callback for tab selection (if needed for future sidebar functionality)
  const handleTabSelect = useCallback((tabId) => {
    setSelectedTab(tabId);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Main Content */}
      <main className="flex-1 p-6" role="main">
        <div className="w-full max-w-7xl mx-auto">
          {/* Header */}
          <header className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">
              Current Month's Best Performer
            </h1>
          </header>

          {/* Hero Card - Orange Section */}
          <section
            className="relative bg-gradient-to-r from-orange-300 to-orange-400 rounded-2xl p-8 pb-16 mb-16 overflow-hidden"
            aria-label="Achievement banner"
          >
            <TrophyBackground />

            <div className="relative z-10 flex items-center justify-end">
              <div className="bg-orange-500 p-3 rounded-full shadow-lg">
                <Trophy
                  className="w-6 h-6 text-white"
                  aria-label="Achievement trophy"
                />
              </div>
            </div>
          </section>

          {/* Employee Profile Section */}
          <EmployeeProfile employee={performanceData.employee} />

          {/* Stats Grid */}
          <section
            className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4"
            aria-label="Performance statistics"
          >
            {statsConfig.map((stat, index) => (
              <StatsCard
                key={`stat-${stat.title.toLowerCase().replace(/\s+/g, "-")}`}
                icon={stat.icon}
                title={stat.title}
                value={stat.value}
                color={stat.color}
                className={index === 0 ? "col-span-1" : ""}
              />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default Dashboard;
