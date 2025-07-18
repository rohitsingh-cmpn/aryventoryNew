import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarItem = ({ icon, label, route, isopen }) => {
  const location = useLocation();
  const isActive = location.pathname === route;

  return (
    <Link
      to={route}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg 
        ${
          isActive
            ? "bg-white text-orange-500 font-semibold"
            : "hover:bg-orange-300"
        }
      `}
    >
      <span className="text-lg">{icon}</span>
      {isopen && <span className="text-nowrap overflow-hidden ">{label}</span>}
    </Link>
  );
};

export default SidebarItem;
