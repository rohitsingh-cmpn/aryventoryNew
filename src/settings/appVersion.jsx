import React from "react";
// import AryventoryLogo from "../../assets/Frame 2121454161.svg";

function AppVersion() {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4 sm:mx-auto">
      {/* Logo */}
      <div className="w-30 h-30 sm:w-40 sm:h-40 mb-4">
        <img
          src="https://aryventory.com/assets/AryVentory-Drwj0Dr8.jpg"
          alt="Aryventory Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Version Heading */}
      <h2 className="text-2xl font-bold text-gray-800">Aryventory</h2>
      <p className="text-xl text-gray-500 font-medium">Version 1.3.1</p>

      {/* Description */}
      <div className="text-sm text-gray-700 mt-2 space-y-2 text-left">
        <p>• You are currently using version 1.3.1 of the Aryventory App.</p>
        <p>
          • Make sure to keep your app up-to-date for the latest features, bug
          fixes, and security improvements.
        </p>
      </div>

      {/* What's New */}
      <div className="w-full mt-4 pt-4 border-t border-gray-200 text-left">
        <h3 className="text-base font-semibold text-gray-800 mb-2">
          What’s New?
        </h3>
        <p className="text-sm text-gray-700">
          • Initial release with basic inventory management functionality.
        </p>
      </div>
    </div>
  );
}

export default AppVersion;
