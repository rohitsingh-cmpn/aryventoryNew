import React, { useState, useRef, useEffect } from "react";
import { Calendar, Package, AlertCircle, Users, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

// Custom hook to detect mobile screens
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return isMobile;
};

const NotificationItem = ({ notification, isPopup, index }) => {
  const getIcon = () => {
    if (notification.avatar) {
      return (
        <img
          src={notification.avatar}
          alt={notification.title}
          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        />
      );
    }
    return (
      <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        {notification.icon}
      </div>
    );
  };

  const titleColor =
    {
      supplier: "text-green-600",
      stock: "text-red-600",
      manager: "text-gray-900",
      sale: "text-blue-600",
    }[notification.type] || "text-gray-900";

  return (
    <div
      className={`bg-gray-50 rounded-2xl shadow-sm p-3 md:p-6 hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 animate-fade-in-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {notification.subtitle && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
          <p className="text-sm text-gray-500">{notification.subtitle}</p>
          <span className="text-sm text-gray-400 mt-1 sm:mt-0">
            {notification.timestamp}
          </span>
        </div>
      )}

      <div className="flex items-start gap-3 md:gap-4">
        {getIcon()}
        <div className="flex-1 min-w-0">
          <h3
            className={`font-medium mb-1 ${titleColor} ${
              isPopup ? "text-sm" : "text-base md:text-lg"
            }`}
          >
            {notification.title}
          </h3>
          {notification.phone && (
            <p className="text-sm text-gray-600 mb-2">{notification.phone}</p>
          )}
          <p
            className={`text-gray-700 ${
              isPopup ? "text-sm line-clamp-2" : "text-base md:text-lg"
            }`}
          >
            {notification.description}
          </p>
        </div>
        {!notification.subtitle && (
          <span className="text-sm text-gray-400 flex-shrink-0">
            {notification.timestamp}
          </span>
        )}
      </div>
    </div>
  );
};

const NotificationPage = ({ Nav, isOpen, setIsOpen }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();

  // Determine if we're in full page mode based on route
  const isFullPage = location.pathname === "/notification-page";

  // For mobile, always show full page instead of popup
  useEffect(() => {
    if (isMobile && isOpen && !isFullPage) {
      setIsOpen(false);
      navigate("/notification-page");
    }
  }, [isMobile, isOpen, isFullPage, navigate, setIsOpen]);

  // Generate notifications with proper timestamps
  const generateNotifications = () => {
    const now = new Date();
    return [
      {
        id: "1",
        type: "supplier",
        title: "Order from Supplier",
        subtitle: "Notification from Supplier",
        description:
          "New order received from Tech Solutions. Please review and process the order as soon as possible.",
        time: new Date(now.getTime() - 5 * 60 * 1000), // 5 minutes ago
        timestamp: "5 min ago",
        icon: <Package className="w-6 h-6 md:w-8 md:h-8 text-green-600" />,
      },
      {
        id: "2",
        type: "manager",
        title: "Manager is on Leave",
        subtitle: "Notification from Manager",
        description:
          "John Doe will be on leave from next Monday to Friday. Please contact Jane Smith for any urgent matters.",
        time: new Date(now.getTime() - 30 * 60 * 1000), // 30 minutes ago
        timestamp: "30 min ago",
        icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
      },
      {
        id: "3",
        type: "sale",
        title: "Mohammed Sufiyan",
        subtitle: "Sold by John Doe",
        description:
          "Products have been sold. Stock has been updated automatically. Check your inventory and sales details for more info.",
        time: new Date(now.getTime() - 2 * 60 * 60 * 1000), // 2 hours ago
        timestamp: "2 hours ago",
        avatar:
          "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
        phone: "+91 4378549856",
      },
      {
        id: "4",
        type: "stock",
        title: "Out of Stock",
        description:
          "Product XYZ is now out of stock. Please reorder immediately to avoid supply chain disruptions.",
        time: new Date(now.getTime() - 5 * 60 * 60 * 1000), // 5 hours ago
        timestamp: "5 hours ago",
        icon: <AlertCircle className="w-6 h-6 md:w-8 md:h-8 text-red-400" />,
      },
      {
        id: "5",
        type: "supplier",
        title: "Delivery Delayed",
        subtitle: "Notification from Supplier",
        description:
          "The delivery from Global Suppliers has been delayed by 2 days due to logistical issues.",
        time: new Date(now.getTime() - 24 * 60 * 60 * 1000), // 1 day ago
        timestamp: "1 day ago",
        icon: <Package className="w-6 h-6 md:w-8 md:h-8 text-green-600" />,
      },
      {
        id: "6",
        type: "manager",
        title: "Team Meeting",
        subtitle: "Notification from Manager",
        description:
          "Monthly team meeting scheduled for tomorrow at 10 AM in Conference Room A.",
        time: new Date(now.getTime() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
        timestamp: "2 days ago",
        icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-blue-600" />,
      },
    ];
  };

  const [notifications, setNotifications] = useState(generateNotifications());

  useEffect(() => {
    // Only add click listener for popup mode
    if (!isFullPage && isOpen) {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen, setIsOpen, isFullPage]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setShowDatePicker(false);

    // Filter notifications by selected date
    if (e.target.value) {
      const selectedDateObj = new Date(e.target.value);
      const filtered = generateNotifications().filter((notification) => {
        const notifDate = new Date(notification.time);
        return (
          notifDate.getDate() === selectedDateObj.getDate() &&
          notifDate.getMonth() === selectedDateObj.getMonth() &&
          notifDate.getFullYear() === selectedDateObj.getFullYear()
        );
      });
      setNotifications(filtered);
    } else {
      setNotifications(generateNotifications());
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Date";
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // For full page, always show content
  if (!isOpen && !isFullPage) return null;

  const isPopup = !!Nav && !isFullPage;
  const displayNotifications = isPopup
    ? notifications.slice(0, 3)
    : notifications;

  return (
    <div
      className={`flex-1 ${isPopup ? "h-full" : "h-screen"} bg-white ${
        isPopup
          ? "flex flex-col shadow-2xl rounded-2xl p-2 outline-none w-full max-w-md md:max-w-lg mx-auto animate-scale-in"
          : ""
      }`}
      ref={popupRef}
    >
      {!isPopup && (
        <div className="bg-white px-4 md:px-8 py-3 border-b border-gray-200 flex items-center justify-between">
          {/* Left - Back Button */}
          <div>
            <button
              onClick={() => navigate(-1)}
              className="p-2 bg-[#F89320] hover:bg-orange-300 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
          </div>

          {/* Center - Title */}
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900 text-center flex-1">
            Notifications
          </h1>

          {/* Right - Date Picker */}
          <div className="relative">
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="bg-orange-400 hover:bg-orange-300 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg flex items-center gap-2 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span className="truncate">{formatDate(selectedDate)}</span>
            </button>

            {showDatePicker && (
              <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10 w-56">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>
            )}
          </div>
        </div>
      )}

      <div
        className={`p-3 md:p-8 space-y-3 md:space-y-4 overflow-y-auto ${
          isPopup ? "max-h-[calc(100vh-200px)]" : "flex-1"
        }`}
      >
        {displayNotifications.length > 0 ? (
          displayNotifications.map((notification, index) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              isPopup={isPopup}
              index={index}
            />
          ))
        ) : (
          <div className="text-center py-10 animate-fade-in">
            <div className="text-gray-400 text-lg mb-2">
              No notifications found
            </div>
            <div className="text-gray-500 text-sm">
              Try selecting a different date
            </div>
          </div>
        )}
      </div>

      {isPopup && (
        <button
          onClick={() => {
            setIsOpen(false);
            navigate("/notification-page");
          }}
          className="text-sm italic ml-auto mr-4 mt-2 text-[#F89320] hover:underline transition-colors"
        >
          see detail...
        </button>
      )}

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default NotificationPage;
