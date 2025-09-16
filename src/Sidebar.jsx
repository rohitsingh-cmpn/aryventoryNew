import React, { useState, useEffect, useRef } from "react";
import { MdOutlineInventory, MdOutlineSettings } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome,
  FaTruck,
  FaCartPlus,
  FaShoppingBag,
  FaHistory,
  FaHandRock,
  FaBox,
  FaCreditCard,
  FaTrash,
  FaBars,
} from "react-icons/fa";

const sideItem = [
  { icon: <FaHome />, label: "Dashboard", route: "/dashboard" },
  { icon: <MdOutlineInventory />, label: "Inventory", route: "/inventory" },
  { icon: <TbReportSearch />, label: "Reports", route: "/reports" },
  { icon: <FaTruck />, label: "Suppliers", route: "/suppliers" },
  { icon: <FaCartPlus />, label: "Buy Products", route: "/buy-products" },
  { icon: <FaShoppingBag />, label: "My Cart", route: "/my-cart" },
  { icon: <FaHandRock />, label: "Order Request", route: "/order-request" },
  { icon: <FaHistory />, label: "Order History", route: "/order-history" },
  { icon: <FaBox />, label: "Delivery Status", route: "/delivery-status" },
  { icon: <FaCreditCard />, label: "Subscription", route: "/subscription" },
  { icon: <FaTrash />, label: "Recycle Bin", route: "/recycle-bin" },
];

// Moved SidebarItem outside of Sidebar component for better structure
const SidebarItem = ({ icon, label, route, isOpen, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <Link
      to={route}
      onClick={onClick}
      className={`flex relative items-center gap-3 px-3 py-2  rounded-lg group
        ${
          isActive
            ? "bg-white text-orange-500 font-semibold"
            : "hover:bg-orange-300 "
        }
      `}
    >
      <span className="flex h-7 pt-2">{icon}</span>
      {/* Floating label on hover - only when sidebar is shrunk */}
      <div className="hidden lg:block">
        {!isOpen && (
          <div
            className={`absolute left-full top-1/2 transform -translate-y-1/2 ml-2 z-50 px-4 py-1 rounded-2xl bg-[#F89320] text-white text-lg whitespace-nowrap transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100`}
          >
            {label}
          </div>
        )}
      </div>
      {/* Always shown if sidebar is open */}
     
        <span className="  whitespace-nowrap overflow-hidden">{label}</span>
     
    </Link>
  );
};

const Sidebar = ({ isSidebarOpen, setSidebarOpen }) => {
  const [isShrinked, setShrinked] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar if clicked outside (only on mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        window.innerWidth < 1024 // only for mobile/tablet
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setSidebarOpen]);

  // Handle sidebar item click - close sidebar on mobile
  const handleItemClick = () => {
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div
      ref={sidebarRef}
      className={`
        fixed lg:static z-50 left-0 transform transition-all duration-300 ease-in-out flex-shrink-0
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0
        ${isShrinked ? "lg:w-22" : "lg:w-64"} w-64
        p-2 
        top-[53px] lg:top-0
        h-[calc(100vh-53px)] lg:h-screen
      `}
    >
      <div className="h-full rounded-2xl bg-[#F89320] text-white p-4 flex flex-col justify-between">
        <div>
          {/* Top Logo */}
          <div className="flex items-center gap-3 h-14 mb-3 lg:mb-6">
            <img
              src="https://t4.ftcdn.net/jpg/01/57/11/07/360_F_157110702_EKlFgF7zUdhSCYsOQ3XhtAH3re9lmK7q.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-white"
            />
            <div className="overflow-hidden">
              <div className="font-bold text-lg whitespace-nowrap">
                JK Paradise
              </div>
              <span className="text-sm text-white/80">ShopKeeper</span>
            </div>
          </div>

          {/* Shrink Toggle */}
          <div
            className="hidden lg:block cursor-pointer"
            onClick={() => setShrinked(!isShrinked)}
          >
            <SidebarItem icon={<FaBars />} label="Menu" isOpen={!isShrinked} />
          </div>

          <div className="py-2">
            <hr className="border-t border-amber-100" />
          </div>
        </div>

        {/* Sidebar Items */}
        <div className=" scrollbar-hide overflow-y-auto h-full lg:overflow-y-visible">
          <div className="flex flex-col gap-2 text-lg">
            {sideItem.map((item, i) => (
              <SidebarItem
                key={i}
                {...item}
                isOpen={!isShrinked}
                onClick={handleItemClick}
              />
            ))}
          </div>
        </div>

        {/* Bottom Settings/Profile */}
        <div className="mt-4 flex-col text-lg flex gap-2">
          <SidebarItem
            icon={<MdOutlineSettings />}
            label="Settings"
            route="/settings/settingPage"
            isOpen={!isShrinked}
            onClick={handleItemClick}
          />
          <div className="flex h-11 gap-2 overflow-hidden items-center">
            <img
              src="https://aryventory.com/assets/AryVentory-Drwj0Dr8.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full border border-white"
            />
            <div>
              <div className="font-bold text-lg">Aryventory</div>
              <span className="text-xs text-white/80">Version 1.3.1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
