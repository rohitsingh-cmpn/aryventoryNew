import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import NotificationPage from "../pages/NotificationPage";

const Navbar = ({
  header,
  className = "",
  onBack,
  showBackButton = false,
  onToggleSidebar,
}) => {
  const [showNotification, setShowNotification] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-lg px-4 py-2 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {/* Hamburger icon - only on mobile */}
          <button
            onClick={onToggleSidebar}
            className="p-2 md:hidden text-gray-700 hover:bg-gray-100 rounded"
          >
            <FaBars className="text-xl" />
          </button>

          {/* Brand name */}
          <h1 className={`text-gray-800 text-2xl font-bold ${className}`}>
            NextGen Electronics
          </h1>
        </div>

        {/* Notification Icon */}
        <div
          className="relative w-10 h-10 bg-[#F89320] rounded-full flex items-center text-white text-2xl justify-center cursor-pointer"
          onClick={() => setShowNotification(!showNotification)}
        >
          <IoIosNotificationsOutline />
          {!showNotification && (
            <div
              onClick={() => navigate("/notification-page")}
              className="absolute top-14 right-0 z-50 w-[300px] md:w-[400px]"
            >
              <NotificationPage Nav />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
