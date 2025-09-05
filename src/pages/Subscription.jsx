import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { CheckCircle, XCircle, Star, Zap, Crown, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";


const SubscriptionFeature = ({ enabled, children }) => (
  <li className="flex items-center gap-3 text-sm py-1">
    {enabled ? (
      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
    ) : (
      <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
    )}
    <span className={enabled ? "text-gray-700" : "text-gray-400"}>
      {children}
    </span>
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
  billingCycle,
  isSelected,
  isExpanded,
  onClick,
  onBack,
}) => {
  // Calculate prices based on billing cycle
  const displayPrice =
    billingCycle === "monthly" ? price : Math.round(price * 12 * 0.8); // 20% discount for yearly
  const displayOldPrice =
    billingCycle === "monthly"
      ? oldPrice
      : oldPrice
      ? Math.round(oldPrice * 12 * 0.8)
      : null;
  const period = billingCycle === "monthly" ? "/month" : "/year";
  const discountPercentage = displayOldPrice
    ? Math.round(((displayOldPrice - displayPrice) / displayOldPrice) * 100)
    : 0;

  // Determine button text based on selection and plan type
  let displayButtonText = buttonText;
  if (isSelected) {
    displayButtonText =
      title === "Premium" ? "Add On Features" : "Current Plan";
  } else {
    displayButtonText = title === "Free" ? "Get Started" : "Upgrade Now";
  }
  const navigate = useNavigate();

  return (
    <div
      className={`bg-gradient-to-br ${getPlanGradient(
        title
      )} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border-2 transform hover:-translate-y-1
        ${
          isSelected
            ? "border-orange-400 ring-2 ring-orange-200 relative"
            : "border-gray-200 hover:border-gray-300"
        }
        ${isExpanded ? "md:col-span-2 lg:col-span-1" : ""}`}
      onClick={onClick}
    >
      {isSelected && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-orange-400 to-orange-500 text-white text-xs px-4 py-1 rounded-full font-semibold shadow-lg whitespace-nowrap">
            ✨ Active Plan
          </span>
        </div>
      )}

      {isExpanded && (
        <div className="md:hidden mb-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onBack();
            }}
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to plans
          </button>
        </div>
      )}

      <div>
        <div className="flex items-center gap-2 mb-4">
          {getPlanIcon(title)}
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl font-bold text-gray-800">
              ₹{displayPrice}
            </span>
            <span className="text-gray-500 text-sm font-medium">{period}</span>
          </div>
          {displayOldPrice && (
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-400 line-through">
                ₹{displayOldPrice}
                {period}
              </span>
              <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                {discountPercentage}% OFF
              </span>
            </div>
          )}
        </div>

        <div
          className={`flex bg-white/70 backdrop-blur-sm rounded-lg p-4 mb-6 ${
            isExpanded ? "max-h-96 overflow-y-auto" : ""
          }`}
        >
          <ul className="space-y-1 text-gray-700">
            {features.map(({ label, enabled }, i) => (
              <SubscriptionFeature key={i} enabled={enabled}>
                {label}
              </SubscriptionFeature>
            ))}
          </ul>
        </div>
      </div>

      <button
        type="button"
        className={`w-full font-semibold rounded-lg py-3 px-4 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg
          ${
            isSelected
              ? "bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white"
              : title === "Free"
              ? "bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300"
              : "bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white"
          }`}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
          navigate("/billing-summary");
        }}
      >
        {displayButtonText}
      </button>
    </div>
  );
};

export default function Subscription() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState(3); // Premium is selected by default
  const [expandedPlan, setExpandedPlan] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

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
      buttonText: "Add On Features",
    },
  ];

  const handlePlanClick = (index) => {
    setSelectedPlan(index);

    // Expand the plan on mobile
    if (isMobile) {
      setExpandedPlan(index);
    }
  };

  const handleBack = () => {
    setExpandedPlan(null);
  };

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-2">
        <section className="mx-5 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-5 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-4xl font-extrabold text-gray-800 mb-2">
                Choose Your Plan
              </h2>
              <p className="text-gray-600 text-base">
                Select the perfect subscription plan for your business needs
              </p>
            </div>

            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  billingCycle === "monthly"
                    ? "bg-[#F89320] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle("yearly")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors relative ${
                  billingCycle === "yearly"
                    ? "bg-[#F89320] text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Yearly
                {billingCycle !== "yearly" && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs  rounded-full h-5 w-8 flex items-center justify-center">
                    Save
                  </span>
                )}
              </button>
            </div>
          </div>

          <div
            className={`grid ${
              expandedPlan !== null
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            } gap-8`}
          >
            {plans.map((plan, idx) => {
              if (expandedPlan !== null && expandedPlan !== idx) {
                return null;
              }

              return (
                <SubscriptionCard
                  key={idx}
                  {...plan}
                  billingCycle={billingCycle}
                  isSelected={selectedPlan === idx}
                  isExpanded={expandedPlan === idx}
                  onClick={() => handlePlanClick(idx)}
                  onBack={handleBack}
                />
              );
            })}
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
