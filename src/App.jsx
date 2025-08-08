import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { useState } from "react";

// Layout
import Sidebar from "./Sidebar";
import { sidebarRoutes } from "./routes/route";

// Auth Pages
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";
import Navbar from "./components/Navbar";

// ✅ Layout wrapper
const LayoutWithSidebar = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 
  const [isShrinked, setIsShrinked] = useState(false);
// for small screen only

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        isShrinked={isShrinked}
        setShrinked={setIsShrinked}
      />

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className=" inset-0  bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Content */}
      <div
        className={`flex flex-col w-full transition-all  duration-300 `}
      >
        <Navbar onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* 🔐 Auth Routes (no layout) */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 🧱 Sidebar Layout Pages */}
        {sidebarRoutes.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<LayoutWithSidebar>{element}</LayoutWithSidebar>}
          />
        ))}

        {/* 🔁 Fallback Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
