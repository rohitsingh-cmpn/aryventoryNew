import React from "react";
import Navbar from "../components/Navbar";
import { CheckCircle, XCircle, Star, Zap, Crown, Gift } from "lucide-react";

const SubscriptionFeature = ({ enabled, children }) => (
  <li className="flex items-center gap-3 text-sm py-1">
    {enabled ? (
      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
    ) : (
      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
    )}
    <span className={enabled ? "text-gray-700" : "text-gray-400"}>{children}</span>
  </li>
);

const getPlanIcon = (title) => {
  switch (title) {
    case "Free":
      return <Gift className="w-5 h-5 text-blue-500" />;
    case "Standard":
      return <Star className="w-5 h-5 text-purple-500" />;
    case "Pro":
      return <Zap className="w-5 h-5 text-orange-500" />;
    case "Premium":
      return <Crown className="w-5 h-5 text-yellow-500" />;
    default:
      return null;
  }
};

const getPlanGradient = (title) => {
  switch (title) {
    case "Free":
      return "from-blue-50 to-blue-100";
    case "Standard":
      return "from-purple-50 to-purple-100";
    case "Pro":
      return "from-orange-50 to-orange-100";
    case "Premium":
      return "from-yellow-50 to-yellow-100";
    default:
      return "from-gray-50 to-gray-100";
  }
};

const SubscriptionCard = ({
  price,
  oldPrice,
  title,
  features,
  active,
  buttonText,
}) => (
  <div
    className={`bg-gradient-to-br ${getPlanGradient(title)} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-2 transform hover:-translate-y-1
      ${
        active
          ? "border-orange-400 ring-2 ring-orange-200 relative"
          : "border-gray-200 hover:border-gray-300"
      }`}
  >
    {active && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-lg">
          ✨ Active Plan
        </span>
      </div>
    )}
    
    <div>
      <div className="flex items-center gap-2 mb-4">
        {getPlanIcon(title)}
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-bold text-gray-800">₹{price}</span>
          <span className="text-gray-500 text-sm font-medium">/month</span>
        </div>
        {oldPrice && (
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-gray-400 line-through">₹{oldPrice}</span>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
              {Math.round(((oldPrice - price) / oldPrice) * 100)}% OFF
            </span>
          </div>
        )}
      </div>
      
      <div className="flex bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-6">
        <ul className="  space-y-1 text-gray-700 ">
          {features.map(({ label, enabled }, i) => (
            <SubscriptionFeature key={i} enabled={enabled}>
              {label}
            </SubscriptionFeature>
          ))}
        </ul>
      </div>
    </div>
    
    {buttonText && (
      <button
        type="button"
        className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold rounded-lg py-3 px-4 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        {buttonText}
      </button>
    )}
    
    {!buttonText && !active && (
      <button
        type="button"
        className={`w-full font-semibold rounded-lg py-3 px-4 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg
          ${title === "Free" 
            ? "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300" 
            : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white"
          }`}
      >
        {title === "Free" ? "Current Plan" : "Upgrade Now"}
      </button>
    )}
  </div>
);

export default function Subscription() {
  const plans = [
    {
      price: 0,
      oldPrice: null,
      title: "Free",
      features: [
        { label: "Android Support", enabled: true },
        { label: "iOS Support", enabled: false },
        { label: "Sync data across devices", enabled: false },
        { label: "Multi-Store Management", enabled: false },
        { label: "No. of Shops (3)", enabled: true },
        { label: "Staff (3 per Shop)", enabled: true },
        { label: "View Reports (50 per day)", enabled: true },
        { label: "Download Reports (50 Monthly)", enabled: true },
        { label: "Create Bills (50 per day)", enabled: true },
        { label: "Orders (50 Monthly)", enabled: true },
        { label: "Barcode Scans (20 Monthly)", enabled: false },
        { label: "No. of Devices (2)", enabled: true },
        { label: "Email Support", enabled: false },
        { label: "Recycle bin", enabled: false },
        { label: "Todays Sales", enabled: true },
        { label: "Monthly Sales", enabled: false },
        { label: "Out of Stock", enabled: true },
        { label: "Top Selling Product", enabled: true },
        { label: "Best Performer", enabled: false },
        { label: "In-Hand Product Count", enabled: true },
        { label: "Supplier Product Receiving status", enabled: true },
        { label: "Shop Sales Graph", enabled: false },
        { label: "Staff Sales Graph", enabled: false },
        { label: "Track Customer Purchase History", enabled: true },
        { label: "Attendance Tracker", enabled: false },
        { label: "View Profit and Loss", enabled: false },
        { label: "Staff Attendance Reports", enabled: false },
        { label: "Generate Monthly GST Report", enabled: true },
        { label: "Push Notifications from Supplier", enabled: false },
        { label: "Low Stock Notification", enabled: false },
        { label: "Out-of-Stock Notification", enabled: false },
        { label: "Advance Search and Filter", enabled: false },
      ],
      active: false,
      buttonText: null,
    },
    {
      price: 31,
      oldPrice: 49,
      title: "Standard",
      features: [
        { label: "Android Support", enabled: true },
        { label: "iOS Support", enabled: false },
        { label: "Sync data across devices", enabled: false },
        { label: "Multi-Store Management", enabled: false },
        { label: "No. of Shops (1)", enabled: true },
        { label: "Staff (0 per Shop)", enabled: true },
        { label: "View Reports (50 per day)", enabled: true },
        { label: "Download Reports (50 Monthly)", enabled: true },
        { label: "Create Bills (200 per day)", enabled: true },
        { label: "Orders (500 Monthly)", enabled: true },
        { label: "Barcode Scans (20 Monthly)", enabled: false },
        { label: "No. of Devices (1)", enabled: true },
        { label: "Email Support", enabled: false },
        { label: "Recycle bin", enabled: false },
        { label: "Todays Sales", enabled: true },
        { label: "Monthly Sales", enabled: false },
        { label: "Out of Stock", enabled: true },
        { label: "Top Selling Product", enabled: true },
        { label: "Best Performer", enabled: false },
        { label: "In-Hand Product Count", enabled: true },
        { label: "Supplier Product Receiving status", enabled: true },
        { label: "Shop Sales Graph", enabled: false },
        { label: "Staff Sales Graph", enabled: false },
        { label: "Track Customer Purchase History", enabled: true },
        { label: "Attendance Tracker", enabled: false },
        { label: "View Profit and Loss", enabled: false },
        { label: "Staff Attendance Reports", enabled: false },
        { label: "Generate Monthly GST Report", enabled: true },
        { label: "Push Notifications from Supplier", enabled: false },
        { label: "Low Stock Notification", enabled: false },
        { label: "Out-of-Stock Notification", enabled: false },
        { label: "Advance Search and Filter", enabled: false },
      ],
      active: false,
      buttonText: null,
    },
    {
      price: 225,
      oldPrice: 499,
      title: "Pro",
      features: [
        { label: "Android Support", enabled: true },
        { label: "iOS Support", enabled: true },
        { label: "Sync data across devices", enabled: true },
        { label: "Multi-Store Management", enabled: true },
        { label: "No. of Shops (2)", enabled: true },
        { label: "Staff (3 per Shop)", enabled: true },
        { label: "View Reports (150 per day)", enabled: true },
        { label: "Download Reports (150 Monthly)", enabled: true },
        { label: "Create Bills (5000 per day)", enabled: true },
        { label: "Orders (2000 Monthly)", enabled: true },
        { label: "Barcode Scans (20 Monthly)", enabled: true },
        { label: "No. of Devices (2)", enabled: true },
        { label: "Email Support", enabled: true },
        { label: "Recycle bin", enabled: false },
        { label: "Todays Sales", enabled: true },
        { label: "Monthly Sales", enabled: true },
        { label: "Out of Stock", enabled: true },
        { label: "Top Selling Product", enabled: true },
        { label: "Best Performer", enabled: false },
        { label: "In-Hand Product Count", enabled: true },
        { label: "Supplier Product Receiving status", enabled: true },
        { label: "Shop Sales Graph", enabled: true },
        { label: "Staff Sales Graph", enabled: true },
        { label: "Track Customer Purchase History", enabled: true },
        { label: "Attendance Tracker", enabled: true },
        { label: "View Profit and Loss", enabled: true },
        { label: "Staff Attendance Reports", enabled: true },
        { label: "Generate Monthly GST Report", enabled: true },
        { label: "Push Notifications from Supplier", enabled: true },
        { label: "Low Stock Notification", enabled: true },
        { label: "Out-of-Stock Notification", enabled: true },
        { label: "Advance Search and Filter", enabled: true },
      ],
      active: false,
      buttonText: null,
    },
    {
      price: 342,
      oldPrice: 799,
      title: "Premium",
      features: [
        { label: "Android Support", enabled: true },
        { label: "iOS Support", enabled: true },
        { label: "Sync data across devices", enabled: true },
        { label: "Multi-Store Management", enabled: true },
        { label: "No. of Shops (3)", enabled: true },
        { label: "Staff (5 per Shop)", enabled: true },
        { label: "View Reports (1000 per day)", enabled: true },
        { label: "Download Reports (1000 Monthly)", enabled: true },
        { label: "Create Bills (10000 per day)", enabled: true },
        { label: "Orders (3000 Monthly)", enabled: true },
        { label: "Barcode Scans (20 Monthly)", enabled: true },
        { label: "No. of Devices (3)", enabled: true },
        { label: "Email & Phone Support", enabled: true },
        { label: "Recycle bin", enabled: true },
        { label: "Todays Sales", enabled: true },
        { label: "Monthly Sales", enabled: true },
        { label: "Out of Stock", enabled: true },
        { label: "Top Selling Product", enabled: true },
        { label: "Best Performer", enabled: true },
        { label: "In-Hand Product Count", enabled: true },
        { label: "Supplier Product Receiving status", enabled: true },
        { label: "Shop Sales Graph", enabled: true },
        { label: "Staff Sales Graph", enabled: true },
        { label: "Track Customer Purchase History", enabled: true },
        { label: "Attendance Tracker", enabled: true },
        { label: "View Profit and Loss", enabled: true },
        { label: "Staff Attendance Reports", enabled: true },
        { label: "Generate Monthly GST Report", enabled: true },
        { label: "Push Notifications from Supplier", enabled: true },
        { label: "Low Stock Notification", enabled: true },
        { label: "Out-of-Stock Notification", enabled: true },
        { label: "Advance Search and Filter", enabled: true },
      ],
      active: true,
      buttonText: "Add On Features",
    },
  ];

 return (
   <>
     <Navbar
       header="Subscription Plan"
       showBackButton={true}
       className="font-bold  text-2xl "
     ></Navbar>

     <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-5">
       <section className="mx-5  px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-12">
           <h2 className="text-4xl font-extrabold text-gray-800 mb-3">
             Choose Your Plan
           </h2>
           <p className="text-gray-600 text-base">
             Select the perfect subscription plan for your business needs
           </p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {plans.map((plan, idx) => (
             <SubscriptionCard key={idx} {...plan} />
           ))}
         </div>

         <div className="mt-12 text-center">
           <p className="text-sm text-gray-500">
             All plans include 24/7 customer support and regular updates.
           </p>
         </div>
       </section>
     </div>
   </>
 );

}