import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ icon, label, route, isopen }) => {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <Link
      to={route}
      className={`flex relative items-center gap-3 px-3 py-2 rounded-lg group
        ${
          isActive
            ? "bg-white text-orange-500 font-semibold"
            : "hover:bg-orange-300"
        }
      `}
    >
      <span>{icon}</span>

      {/* Floating label on hover */}
      {!isopen && <div className={`absolute left-16 z-550 px-4 py-1 rounded-2xl bg-[#F89320] text-white text-lg whitespace-nowrap transition-all duration-300 scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100  `}>
        {label}
      </div>}

      {/* Always shown if sidebar is open */}
      { (
        <span className="whitespace-nowrap overflow-hidden">{label}</span>
      )}
    </Link>
  );
};

export default SidebarItem;
