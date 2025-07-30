import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
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
  FaCogs,
  FaBars
  
} from "react-icons/fa";

import SidebarItem from "./SidebarItem";

const sideItem = [
  { icon: <FaHome />, label: "Dashboard", route: "/dashboard" },
  { icon: <FaTruck />, label: "Suppliers", route: "/suppliers" },
  { icon: <FaCartPlus />, label: "Buy Products", route: "/buy-products" },
  { icon: <FaShoppingBag />, label: "My Cart", route: "/my-cart" },
  { icon: <FaHandRock />, label: "Order Request", route: "/order-request" },
  { icon: <FaHistory />, label: "Order History", route: "/order-history" },
  { icon: <FaBox />, label: "Delivery Status", route: "/delivery-status" },
  { icon: <FaCreditCard />, label: "Subscription", route: "/subscription" },
  { icon: <FaTrash />, label: "Recycle Bin", route: "/recycle-bin" },

  { icon: <FaCartPlus />, label: "Add Inventory", route: "/inventory" },
];

const Sidebar = () => {
  const [isOpened, setOpened] = useState(false);
  function handleOpen() {
    setOpened(!isOpened);
  }
  return (
    <div
      className={`  p-2  min-h-screen  transition-all duration-300 ease-in-out 
          ${isOpened ? " w-68 " : " w-22 translate-x-0"}`}
    >
      <div className="h-full rounded-2xl bg-[#F89320] text-white p-4 shadow-lg flex flex-col justify-between">
        <div>
          {/* Logo and title */}
          <div className="flex  items-center gap-3 h-14 mb-6">
            <img
              src="https://aryventory.com/assets/AryVentory-Drwj0Dr8.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full  border border-white"
            />
            <div className={` overflow-hidden `}>
              <div className="font-bold text-lg whitespace-nowrap">
                JK Paradise
              </div>
              <span className="text-s text-white ml-5">Supplier</span>
            </div>
          </div>

          {/* Menu header */}
          {/* <div
            className="flex items-center gap-2 mb-3 bg-orange-300 px-3  py-2 rounded-lg cursor-pointer"
            
          >
            <MdMenu className="ml-"/>

            {0 && <span className="overflow-hidden">Menu</span>}
          </div> */}
          <div onClick={handleOpen}>
            <SidebarItem icon={<FaBars />} label="Menu" isopen={1} />
          </div>

          <div className="py-2">
            <hr className="border-t border-amber-100" />
          </div>

          {/* Sidebar Items */}
          <div className="flex flex-col gap-2 text-lg">
            {sideItem.map((item, i) => (
              <SidebarItem key={i} {...item} isopen={1} />
            ))}
          </div>
        </div>

        {/* Bottom profile */}
        <div className="mt-4 flex-col flex gap-2">
          <SidebarItem
            icon={<FaCogs />}
            label="Settings"
            route="/settings"
            isopen={1}
          />

          <div className="flex h-14 gap-2 items-center">
            {" "}
            <img
              src="https://aryventory.com/assets/AryVentory-Drwj0Dr8.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full border border-white"
            />
            <div className={` overflow-hidden h-14`}>
              <div className="font-bold text-lg ">Aryventory</div>
              <span className="text-xs text-white/80">Version 1.3.1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
