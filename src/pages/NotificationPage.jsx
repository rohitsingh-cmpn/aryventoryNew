import React, { useState } from "react";
import { Calendar, Package, AlertCircle, Users,ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NotificationPage = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);

  const notifications = [
    {
      id: "1",
      type: "supplier",
      title: "Order from Supplier",
      subtitle: "Notification from Supplier",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      timestamp: "2min ago",
      icon: <Package className="w-8 h-8 text-green-600" />,
    },
    {
      id: "2",
      type: "manager",
      title: "Manager is on Leave",
      subtitle: "Notification from Manager",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      timestamp: "2min ago",
      icon: <Users className="w-8 h-8 text-blue-600" />,
    },
    {
      id: "3",
      type: "sale",
      title: "Mohammed Sufiyan",
      subtitle: "Sold by John Doe",
      description:
        "Products have been sold. Stock has been updated automatically. Check your inventory and sales details for more info.",
      timestamp: "2min ago",
      avatar:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      phone: "+91 4378549856",
    },
    {
      id: "4",
      type: "stock",
      title: "Out of Stock",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor",
      timestamp: "2min ago",
      icon: <AlertCircle className="w-8 h-8 text-red-400" />,
    },
  ];

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
    setShowDatePicker(false);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Date";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getNotificationIcon = (notification) => {
    if (notification.avatar) {
      return (
        <img
          src={notification.avatar}
          alt={notification.title}
          className="w-12 h-12 rounded-full object-cover"
        />
      );
    }

    return (
      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
        {notification.icon}
      </div>
    );
  };

  const getTitleColor = (type) => {
    switch (type) {
      case "supplier":
        return "text-green-600";
      case "stock":
        return "text-red-600";
      case "manager":
        return "text-gray-900";
      default:
        return "text-gray-900";
    }
  };
  const navigate = useNavigate();

  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white pr-8 py-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex gap-3">
          <button
            onClick={() => navigate("/inventory")}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-900">Notification</h1>
        </div>

        <div className="relative">
          <button
            onClick={() => setShowDatePicker(!showDatePicker)}
            className="bg-orange-400 hover:bg-orange-300 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-200"
          >
            <Calendar className="w-4 h-4" />
            {formatDate(selectedDate)}
          </button>

          {showDatePicker && (
            <div className="absolute right-0 top-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="w-48 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
            </div>
          )}
        </div>
      </div>

      {/* Notifications List */}
      <div className="p-8 space-y-6">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
          >
            {/* Subtitle */}
            {notification.subtitle && (
              <div className="flex items-center justify-between mb-3">
                <p className="text-sm text-gray-500">{notification.subtitle}</p>
                <span className="text-sm text-gray-400">
                  {notification.timestamp}
                </span>
              </div>
            )}

            {/* Notification Content */}
            <div className="flex items-start gap-4">
              {getNotificationIcon(notification)}

              <div className="flex-1">
                <h3
                  className={`text-lg font-medium mb-1 ${getTitleColor(
                    notification.type
                  )}`}
                >
                  {notification.title}
                </h3>

                {notification.phone && (
                  <p className="text-sm text-gray-600 mb-2">
                    {notification.phone}
                  </p>
                )}

                <p className="text-gray-700 leading-relaxed">
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
        ))}
      </div>
    </div>
  );
};

export default NotificationPage;
