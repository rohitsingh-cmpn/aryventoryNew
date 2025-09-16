import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import NotificationPopup from "../components/NotificationPopup";

const Navbar = ({
  header,
  className = "",
  onBack,
  showBackButton = false,
  onToggleSidebar,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isNotificationPage = location.pathname === "/notification-page";
  const isOrganizationPage = location.pathname === "/organization-page";

  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Close popup when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className=" z-55 px-4 py-2 sticky top-0 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-50 rounded-lg transition-all duration-200 transform hover:scale-105"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}

          {/* Hamburger icon */}
          <button
            onClick={onToggleSidebar}
            className="p-2 lg:hidden text-gray-700 hover:bg-white rounded-lg transition-all duration-200 transform hover:scale-110"
          >
            <FaBars className="text-xl" />
          </button>

          {/* Brand name */}
          <div className="flex items-end">
            <h1
              className={`text-gray-800 text-lg sm:text-2xl font-bold whitespace-nowrap ${className}`}
            >
              NextGen Electronics
            </h1>
            {!isOrganizationPage && (
              <button
                className="text-gray-600 p-1 hover:bg-white rounded transition-all duration-200 transform hover:scale-110 ml-1"
                onClick={() => navigate("/organization-page")}
              >
                <FontAwesomeIcon className="text-xl" icon={faChevronDown} />
              </button>
            )}
          </div>
        </div>

        {/* Notification Icon → hide only on /notification-page */}
        {!isNotificationPage && (
          <div className="relative z-55" ref={popupRef}>
            <button
              className="w-10 h-10 bg-[#F89320] rounded-full flex items-center text-white text-2xl justify-center cursor-pointer transition-all duration-200 transform hover:scale-110 hover:bg-orange-300 active:scale-95 shadow-md hover:shadow-lg"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoIosNotificationsOutline />
            </button>

            {/* Updated to use NotificationPopup component */}
            <NotificationPopup isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
