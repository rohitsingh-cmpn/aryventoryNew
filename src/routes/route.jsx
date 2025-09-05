// route.js
import Dashboard from "../pages/Dashboard";
import Demo from "../pages/Dashboardcopy";
import Suppliers from "../pages/Suppliers";
import MyCart from "../pages/MyCart";
import CartItem from "../pages/CartItem";

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
import BestPerformer from "../pages/DashboardPages/BestPerformer";
import CurrentMonthSales from "../pages/DashboardPages/CurrentMonthSales";
import InventoryTotalProducts from "../pages/DashboardPages/InventoryTotalProducts";
import LowQuantityProducts from "../pages/DashboardPages/LowQuantityProducts";
import TopSellingProducts from "../pages/DashboardPages/TopSellingProducts";
import OutOfStock from "../pages/DashboardPages/OutOfStock";
import SettingPage from "../settings/settingPage";
import About from "../settings/about";
import AppVersion from "../settings/appVersion";
import ContactUs from "../settings/contactUs";
import FeedBack from "../settings/feedBack";
import LogOut from "../settings/logOut";
import OtherExpenses from "../settings/otherExpenses";
import RateApp from "../settings/rateApp";
import TermsAndCondition from "../settings/termsAndCondition";

// Privacy & Security
import Acknoledgement from "../settings/Privacy & Security/acKnowledgement";
import ChangePassword from "../settings/Privacy & Security/changePassword";
import PrivacyAndSecurity from "../settings/Privacy & Security/privacyandSecurity";
import PrivacyPolicy from "../settings/Privacy & Security/privacyPolicy";
import BillingSummary from "../pages/BillingSummary";

export const sidebarRoutes = [
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/dashboardc", element: <Demo /> },
  { path: "/suppliers", element: <Suppliers /> },
  { path: "/dummy", element: <Page /> },
  { path: "/my-cart", element: <MyCart /> },
  { path: "/cart-item", element: <CartItem /> },
  { path: "/order-history", element: <OrderHistory /> },
  { path: "/order-request", element: <OrderRequest /> },
  { path: "/delivery-status", element: <DeliveryStatus /> },
  { path: "/subscription", element: <Subscription /> },
  { path: "/billing-summary", element: <BillingSummary /> },
  { path: "/recycle-bin", element: <RecycleBin /> },
  { path: "/settings", element: <Settings /> },
  { path: "/view-details", element: <ViewDetails /> },
  { path: "/addinventory", element: <AddInventory /> },
  { path: "/inventory", element: <Inventory /> },
  { path: "/notification-page", element: <NotificationPage /> },
  { path: "/buy-products", element: <BuyProducts /> },
  { path: "/reports", element: <Reports /> },
  { path: "/organization-page", element: <OraganizationPage /> },
  { path: "/employee-details", element: <EmployeeDetails /> },
  { path: "/best-performer", element: <BestPerformer /> },
  { path: "/current-month-sales", element: <CurrentMonthSales /> },
  { path: "/inventory-total-products", element: <InventoryTotalProducts /> },
  { path: "/low-quantity-products", element: <LowQuantityProducts /> },
  { path: "/top-selling-products", element: <TopSellingProducts /> },
  { path: "/out-of-stock", element: <OutOfStock /> },
  { path: "/settings/settingPage", element: <SettingPage /> },
  { path: "/settings/about", element: <About /> },
  { path: "/settings/appVersion", element: <AppVersion /> },
  { path: "/settings/contactUs", element: <ContactUs /> },
  { path: "/settings/feedBack", element: <FeedBack /> },
  { path: "/settings/logOut", element: <LogOut /> },
  { path: "/settings/otherExpenses", element: <OtherExpenses /> },
  { path: "/settings/rateApp", element: <RateApp /> },
  { path: "/settings/termsAndCondition", element: <TermsAndCondition /> },
  { path: "/settings/privacyAndSecurity", element: <PrivacyAndSecurity /> },
  { path: "/settings/privacyPolicy", element: <PrivacyPolicy /> },
  { path: "/settings/acknowledgement", element: <Acknoledgement /> },
  { path: "/settings/changePassword", element: <ChangePassword /> },
];
