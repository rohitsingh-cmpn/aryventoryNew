// NotificationPopup.js
import React, { useState, useRef, useEffect } from "react";
import { Package, AlertCircle, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
      className={`bg-gray-50 rounded-2xl shadow-sm p-3 md:p-6 hover:shadow-md transition-all scrollbar-hide duration-300 transform hover:-translate-y-0.5 animate-fade-in-up`}
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

const NotificationPopup = ({ isOpen, setIsOpen }) => {
  const popupRef = useRef(null);
  const navigate = useNavigate();

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
    ];
  };

  const [notifications] = useState(generateNotifications());

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="absolute top-14 right-0 z-50 w-[300px] md:w-[400px] flex flex-col shadow-2xl rounded-2xl p-2 outline-none bg-white animate-scale-in"
      ref={popupRef}
    >
      <div className="p-3 space-y-3 overflow-y-auto max-h-[calc(100vh-200px)]">
        {notifications.map((notification, index) => (
          <NotificationItem
            key={notification.id}
            notification={notification}
            isPopup={true}
            index={index}
          />
        ))}
      </div>

      <button
        onClick={() => {
          setIsOpen(false);
          navigate("/notification-page");
        }}
        className="text-sm italic ml-auto mr-4 mt-2 text-[#F89320] hover:underline transition-colors"
      >
        see detail...
      </button>

      {/* <style jsx global>{`
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

        .animate-scale-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
      `}</style> */}
    </div>
  );
};

export default NotificationPopup;
