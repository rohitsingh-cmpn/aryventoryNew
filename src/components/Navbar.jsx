import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Search, ArrowLeft, Import } from "lucide-react";
import { IoIosNotificationsOutline } from "react-icons/io";
import NotificationPage from "../pages/NotificationPage";

const Navbar = ({ header, className = "", onBack, showBackButton = false }) => {
  const [Noti, setNoti] = useState(true);
  const [Nav, setNav] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="bg-white shadow-sm px-4 py-2 ">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showBackButton && (
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
          )}
          <h1 className={`text-gray-800 text-2xl  font-bold  ${className}`}>
            NextGen Electronics
          </h1>
        </div>

        <div
          className="relative w-10 h-10 bg-[#F89320] rounded-full flex items-center text-white text-2xl justify-center "
          onClick={() => {
            setNoti(!Noti);
            
          }}
        >
          {" "}
          <IoIosNotificationsOutline />
          {!Noti && (
            <div onClick={()=> navigate("/notification-page")} className="top-14 right-6 z-99999 w-[400px] absolute">
              <NotificationPage Nav = {Nav}/>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
