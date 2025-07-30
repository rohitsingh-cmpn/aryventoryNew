// route.js
import Dashboard from "../pages/Dasboard";
import Suppliers from "../pages/Suppliers";
import MyCart from "../pages/MyCart";
import OrderHistory from "../pages/OrderHistory";
import DeliveryStatus from "../pages/DeliveryStatus";
import Subscription from "../pages/Subscription";
import RecycleBin from "../pages/RecycleBin";
import Settings from "../pages/Settings";
import ViewDetails from "../pages/ViewDetails";
import OrderRequest from "../pages/OrderRequest";
import Inventory from "../pages/InventoryPage";
import AddInventory from "../pages/AddInventory";


export const sidebarRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/suppliers", element: <Suppliers /> },
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
];
