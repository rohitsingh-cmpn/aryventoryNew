import React from "react";
import { Search, ArrowLeft } from "lucide-react";

const Navbar = ({
  header,
  searchVisible = false,
  className = "",
  onBack,
  showBackButton = false,
}) => {
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
          <h1 className={`text-gray-800 text-2xl  font-bold  ${className}`}>{header}</h1>
        </div>

        {searchVisible && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
