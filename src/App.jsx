import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layout
import Sidebar from "./Sidebar";
import { sidebarRoutes } from "./routes/route";


// Auth Pages
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";



// ✅ Layout wrapper
const LayoutWithSidebar = ({ children }) => (
  <div className="flex h-screen">
    <Sidebar />
    <div className="flex-1 overflow-y-auto">{children}</div>
  </div>
);


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
