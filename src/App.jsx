import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Layouts
import Sidebar from "./Sidebar";

// Auth Pages
import SignIn from "./login/SignIn";
import SignUp from "./login/SignUp";

// Dashboard Pages
import Dashboard from "./pages/Dasboard";
import Suppliers from "./pages/Suppliers";
import BuyProducts from "./pages/BuyProducts";
import MyCart from "./pages/MyCart";
import OrderHistory from "./pages/OrderHistory";
import DeliveryStatus from "./pages/DeliveryStatus";
import Subscription from "./pages/Subscription";
import RecycleBin from "./pages/RecycleBin";
import Settings from "./pages/Settings";
import ViewDetails from "./pages/ViewDetails";
import OrderRequest from "./pages/OrderRequest";
 
// ✅ Layout wrapper for sidebar-enabled pages
const LayoutWithSidebar = ({ children }) => (
  <div className="flex flex-row h-screen">
    <Sidebar />
    <div className="flex-1 overflow-y-auto">{children}</div>
  </div>
);

// ✅ All routes go here
const App = () => {
  return (
    <Router>
      <Routes>
        {/* Auth Routes */}
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Sidebar Layout Pages */}
        {[
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/suppliers", element: <Suppliers /> },
          { path: "/buy-products", element: <BuyProducts /> },
          { path: "/my-cart", element: <MyCart /> },
          { path: "/order-history", element: <OrderHistory /> },
          { path: "/order-request", element: <OrderRequest /> },
          { path: "/delivery-status", element: <DeliveryStatus /> },
          { path: "/subscription", element: <Subscription /> },
          { path: "/recycle-bin", element: <RecycleBin /> },
          { path: "/settings", element: <Settings /> },
          { path: "/view-details", element: <ViewDetails /> },
        ].map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<LayoutWithSidebar>{element}</LayoutWithSidebar>}
          />
        ))}

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
