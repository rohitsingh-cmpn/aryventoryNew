import React from "react";
import { Outlet } from "react-router";

function PrivacyAndSecurity() {
  return (
    <div className="flex w-full h-full  gap-4">
      <Outlet />
    </div>
  );
}

export default PrivacyAndSecurity;
  