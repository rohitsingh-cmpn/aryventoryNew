import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";

// Pages \\192.168.1.48\

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

function App() {
  return (
    <Router>
      <div className="">
        <Sidebar></Sidebar>

        <div className="flex-1 p-4 ml-64">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/buy-products" element={<BuyProducts />} />
            <Route path="/my-cart" element={<MyCart />} />
            <Route path="/view-details" element={<ViewDetails />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/delivery-status" element={<DeliveryStatus />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/recycle-bin" element={<RecycleBin />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
// rohit singh
