import React from "react";
import SidebarItem from "./SidebarItem";

const sideItem = [
  { icon: "🏠", label: "Dashboard", route: "/dashboard" },
  { icon: "🚚", label: "Suppliers", route: "/suppliers" },
  { icon: "🛒", label: "Buy Products", route: "/buy-products" },
  { icon: "🛍️", label: "My Cart", route: "/my-cart" },
  { icon: "📜", label: "Order History", route: "/order-history" },
  { icon: "📦", label: "Delivery Status", route: "/delivery-status" },
  { icon: "💳", label: "Subscription", route: "/subscription" },
  { icon: "🗑️", label: "Recycle Bin", route: "/recycle-bin" },
  // { icon: "⚙️", label: "Settings", route: "/settings" },
];

const Sidebar = () => {
  return (
    <div className="p-2 fixed h-screen"> 
      <div className="h-full w-64 bg-orange-400 text-white rounded-r-2xl p-4 shadow-lg flex flex-col justify-between">
        <div>
          {/* Logo and title */}
          <div className="flex items-center gap-3 mb-6">
            <img
              src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full border border-white"
            />
            <div>
              <div className="font-bold text-lg">Aryventory</div>
              <span className="text-xs text-white/80">Version 1.3.1</span>
            </div>
          </div>

          {/* Menu header */}
          <div className="flex items-center gap-2 mb-3 bg-orange-300 px-3 py-2 rounded-lg">
            <span>📋</span>
            <span>Menu</span>
          </div>
          <div className="pb-2">
            <hr className="border-t border-amber-100" />
          </div>

          {/* Sidebar Items */}
          <div className="flex flex-col gap-2 text-sm">
            {sideItem.map((item, i) => (
              <SidebarItem key={i} {...item} />
              
            ))}
          </div>
        </div>

        {/* Bottom profile */}
        <div className="mt-4 flex-col flex gap-2">
          <div className="">
            {/* Settings item at bottom of list */}
            <SidebarItem icon="⚙️" label="Settings" route="/settings" />
          </div>

          <div>
            {" "}
            <img
              src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full border border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
