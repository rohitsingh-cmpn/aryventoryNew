import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
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
  const navigate = useNavigate();
  const location = useLocation();
  const isNotificationPage = location.pathname === "/notification-page";
  const isOrganizationPage = location.pathname === "/organization-page";


  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const [open, setOpen] = useState(false);

  // ✅ Close popup when clicking outside
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
   <div className="bg-white  px-4 py-2 sticky top-0 z-55 ">
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

         {/* Hamburger icon */}
         <button
           onClick={onToggleSidebar}
           className="p-2 lg:hidden text-gray-700 hover:bg-gray-100 rounded"
         >
           <FaBars className="text-xl" />
         </button>

         {/* Brand name */}
         <div className="flex items-end">
           <h1 className={`text-gray-800 text-lg sm:text-2xl font-bold whitespace-nowrap ${className}`}>
             NextGen Electronics
           </h1>
       {!isOrganizationPage &&<div className="text-gray-600 p-1 hover:bg-gray-100 text-sm">
             <FontAwesomeIcon
               className="text-xl hover:bg-gray-100"
               icon={faChevronDown}
               onClick={() =>{ navigate("/organization-page"); }}
             />
           </div>}
         </div>
       </div>

       {/* Notification Icon → hide only on /notification-page */}
       {!isNotificationPage && (
         <div className="relative" ref={popupRef}>
           <div
             className="w-10 h-10 bg-[#F89320] rounded-full flex items-center text-white text-2xl justify-center cursor-pointer"
             onClick={() => setIsOpen(!isOpen)}
           >
             <IoIosNotificationsOutline />
           </div>

           {isOpen && (
             <div className="absolute top-14 right-0 z-50 w-[300px] md:w-[400px]">
               <NotificationPage Nav isOpen={isOpen} setIsOpen={setIsOpen} />
             </div>
           )}
         </div>
       )}
     </div>
   </div>
 );

};

export default Navbar;
