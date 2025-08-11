// route.js
import Dashboard from "../pages/Dashboard";
import Component from "../pages/Dashboardcopy";
import Suppliers from "../pages/Suppliers";
import MyCart from "../pages/MyCart";

import OrderHistory from "../pages/OrderHistory";
import BuyProducts from "../pages/BuyProducts";
import DeliveryStatus from "../pages/DeliveryStatus";
import Subscription from "../pages/Subscription";
import RecycleBin from "../pages/RecycleBin";
import Settings from "../pages/Settings";
import ViewDetails from "../pages/ViewDetails";
import OrderRequest from "../pages/OrderRequest";
import Page from "../components/dummy";
import Inventory from "../pages/InventoryPage";
import AddInventory from "../pages/AddInventory";
import NotificationPage from "../pages/NotificationPage";
import Reports from "../pages/Reports";
import OraganizationPage from "../pages/OraganizationPage";
import EmployeeDetails from "../pages/EmployeeDetails";
import Sales from "../pages/Sales";

export const sidebarRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboardc", element: <Component /> },
  { path: "/suppliers", element: <Suppliers /> },
  { path: "/dummy", element: <Page /> },
  { path: "/my-cart", element: <MyCart /> },
  { path: "/order-history", element: <OrderHistory /> },
  { path: "/order-request", element: <OrderRequest /> },
  { path: "/delivery-status", element: <DeliveryStatus /> },
  { path: "/subscription", element: <Subscription /> },
  { path: "/recycle-bin", element: <RecycleBin /> },
  { path: "/settings", element: <Settings /> },
  { path: "/view-details", element: <ViewDetails /> },
  { path: "/addinventory", element: <AddInventory /> },
  { path: "/inventory", element: <Inventory /> },
  { path: "/notification-page", element: <NotificationPage /> },
  { path: "/buy-products", element: <BuyProducts /> },
  { path: "/reports", element: <Reports /> },
  { path: "/OraganizationPage", element: <OraganizationPage /> },
  { path: "/EmployeeDetails", element: <EmployeeDetails /> },
  { path: "/sales", element: <Sales /> },
];
