import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faStore,
  faUserTie,
  faUsers,
  faBox,
  faShoppingCart,
  faTruck,
  faChartBar,
  faUserClock,
  faHistory,
  faFileInvoice,
  faClipboardList,
  faPeopleCarry,
} from "@fortawesome/free-solid-svg-icons";
import shopkeeperImg from "../../assets/Frame 2121454161.svg";
import shopImg from "../../assets/Frame 2121454161.svg";

const data = [
  {
    type: "intro",
    title:
      "The Future of Inventory Management is Here! Transform Your Inventory with Aryventory",
    paragraphs: [
      "Aryventory is here to help businesses streamline their inventory processes. Sign up for updates and be the first to experience a smarter way to manage your inventory!",
      "Aryventory is a smart and user-friendly mobile app designed to help businesses efficiently manage their inventory. From real-time tracking to role-based access control, Aryventory simplifies operations for shopkeepers, suppliers, and staffs. Developed with a focus on reliability and ease of use, Aryventory is built to support growing businesses of all sizes.",
    ],
  },
  {
    title: "Shopkeeper",
    iconImg: shopkeeperImg,
    description: [
      "The shopkeeper can efficiently manage inventory by adding new products, updating stock levels, and tracking sales in real time.",
    ],
    children: [
      {
        title: "Shop",
        content: [
          "Create and manage your shop's shop profile with ease. Add or delete multiple branches to keep your operations organized. Stay in control of each location's inventory and sales. You can easily customize settings for each shop to meet specific business needs, all under one platform.",
        ],
      },
      {
        title: "Employee",
        content: [
          "Add and manage Staffs within your shop. Assign roles, edit Staffs details, or remove users as needed. Streamline team management to boost business efficiency. Track Staffs performance and access their tasks or sales records to ensure smooth operations.",
        ],
      },
      {
        title: "Product",
        content: [
          "Effortlessly manage your inventory and track product levels in real-time. Reorder from suppliers when stock runs low, and ensure sales are updated automatically through bills. Stay on top of stock quantities, pricing, and product details to optimize your sales strategy.",
        ],
      },
      {
        title: "My Cart",
        content: [
          "Add products to your cart when reordering from suppliers. Review and adjust your order before finalizing it Simplify your restocking process in just a few taps. Easily keep track of your order history and quantities to ensure you're always stocked with the right products.",
        ],
      },
      {
        title: "Supplier",
        content: [
          "View and organize your suppliers to find the best rates. Create a list of preferred suppliers, easily place orders, and ensure timely restocks to keep your shelves full. Build strong relationships with suppliers to get the best deals and improve your supply chain.",
        ],
      },
      {
        title: "Reports",
        content: [
          "Generate detailed reports on sales, stock levels, and Staffs performance. Customize reports by date range and format to make informed decisions for your business. Visualize trends and analyze product performance to streamline your operations and maximize profits.",
        ],
      },
      {
        title: "Delivery Status",
        content: [
          "Stay updated on the status of products you've ordered. Track deliveries in real-time and plan your restocking efficiently. Receive notifications on estimated delivery times and any delays to ensure you are always prepared for stock arrival.",
        ],
      },
      {
        title: "Order History",
        content: [
          "Review all your past orders from suppliers. Keep track of purchases and ensure you're always stocked up on the right products. Use historical data to forecast future orders and make better purchasing decisions.",
        ],
      },
      {
        title: "Create Bill",
        content: [
          "Generate accurate bills for customers with ease. Track sold products and record sales in real-time to keep your business organized and efficient. The bill generation system automatically adjusts inventory and ensures all transactions are correctly documented.",
        ],
      },
      {
        title: "Employee Attendance",
        content: [
          "Mark and track Staffs attendance easily. Record working hours, absences, and late arrivals, and ensure accurate payroll processing. Maintain a reliable attendance log to manage staffing and improve workforce efficiency.",
        ],
      },
    ],
  },
  {
    title: "Supplier",
    iconImg: shopkeeperImg,
    description: [
      "Suppliers can use the app to receive purchase orders directly, track payment statuses, and view order history.",
    ],
    children: [
      {
        title: "Product",
        content: [
          "Suppliers can manage their own product inventory within the app. They can view all available products, check how many units are in stock, and see how many have been sold. The system also provides alerts for low stock and out of stock products, helping suppliers restock on time and avoid delays in fulfilling orders.",
        ],
      },
      {
        title: "Create Bill",
        content: [
          "Generate accurate sales bills for shopkeepers. Track inventory and sales through easy billing, ensuring smooth transactions and a reliable sales record. Bills are automatically linked to your inventory system to reflect real-time stock adjustments.",
        ],
      },
      {
        title: "Product Management",
        content: [
          "Suppliers can manage all incoming orders from shopkeepers. They can view order details, process them efficiently, and keep track of pending and completed requests. This helps in organizing workflow and ensuring timely fulfillment of demands.",
        ],
      },
      {
        title: "Sales",
        content: [
          "Suppliers can view the list of all products that have been sold to shopkeepers. This includes product details, quantities, and sale dates. It helps suppliers track demand, understand which items are selling more, and plan future stock accordingly.",
        ],
      },
    ],
  },
  {
    title: "Employee",
    iconImg: shopkeeperImg,
    description: [
      "Staffs have limited access to view products and assist in daily store operations. They cannot modify inventory or access sensitive data.",
    ],
    children: [
      {
        title: "Product",
        content: [
          "Display your products to shop owners looking to restock. Provide detailed product information and keep your catalog up-to-date to attract more orders. Highlight promotions and special offers to maximize visibility and sales with your customers.",
        ],
      },
      {
        title: "Request",
        content: [
          "View and respond to all orders and requests from shop owners. Fulfill inventory needs and build strong, reliable relationships with your customers. Quickly process orders to maintain a smooth supply chain and boost customer satisfaction.",
        ],
      },
      {
        title: "Order History",
        content: [
          "Review all orders placed by shop owners. Track your sales and customer trends to improve inventory management and pricing strategies. Use historical data to forecast demand and optimize your offerings for better business performance.",
        ],
      },
      {
        title: "Delivery Status",
        content: [
          "Monitor the status of your product deliveries. Keep shop owners informed on shipment progress to ensure smooth transactions and customer satisfaction. Offer real-time updates on delivery schedules to keep your customers in the loop.",
        ],
      },
    ],
  },
  {
    type: "grid",
    children: [
      {
        title: "Stock Control",
        content: [
          "Tracking inventory levels to prevent overstocking or stockouts.",
        ],
      },
      {
        title: "Demand Forecasting",
        content: [
          "Tracking inventory levels to prevent overstocking or stockouts.",
        ],
      },
      {
        title: "Reordering",
        content: ["Ensuring timely replenishment of stock."],
      },
      {
        title: "Storage Optimization",
        content: [
          "Properly organizing inventory for easy access and minimal wastage.",
        ],
      },
    ],
  },
  {
    title: "About Arysoft Global Services Pvt.Ltd.",
    paragraphs: [
      "Arysoft, founded in 2024, is a software development company focused on creating innovative, user-friendly digital solutions. We deliver scalable, future-ready systems, from mobile apps to enterprise software. We simplify workflows with smart, intuitive design, helping businesses grow efficiently.",
    ],
  },
];

// Map of titles to Font Awesome icons
const iconMap = {
  Shopkeeper: faUserTie,
  Supplier: faPeopleCarry,
  Employee: faUsers,
  Shop: faStore,
  Product: faBox,
  "My Cart": faShoppingCart,
  Reports: faChartBar,
  "Delivery Status": faTruck,
  "Order History": faHistory,
  "Create Bill": faFileInvoice,
  "Employee Attendance": faUserClock,
  "Product Management": faClipboardList,
  Sales: faChartBar,
  Request: faPeopleCarry,
};

function IntroCard({ introSection }) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg text-gray-800">{introSection.title}</h2>
      <hr className="bg-[#E6E6E6] h-[2px] w-[100] border-0" />
      {introSection.paragraphs.map((p, i) => (
        <p key={i} className="text-gray-700">
          {p}
        </p>
      ))}
    </div>
  );
}

function AccordionItem({ item, level = 0 }) {
  const [open, setOpen] = useState(false);
  const hasChildren = Array.isArray(item.children);

  const buttonStyle =
    level === 0
      ? "bg-[#FFFFFF] hover:bg-gray-200"
      : "bg-[#F6F6F6] text-left cursor-default";

  const iconToRender = item.iconImg ? (
    <img src={item.iconImg} alt="" className="w-6 h-6 object-contain" />
  ) : iconMap[item.title] ? (
    <FontAwesomeIcon
      icon={iconMap[item.title]}
      className="w-5 h-5 text-gray-600"
    />
  ) : null;

  return (
    <div
      className={`w-full ${
        level === 0 ? "bg-white rounded-2xl" : "mt-2 pl-4 pr-2"
      }`}
    >
      <button
        onClick={() => (level === 0 && hasChildren ? setOpen(!open) : null)}
        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${buttonStyle}`}
        disabled={level > 0}
      >
        <div className="flex items-center space-x-2">
          {iconToRender}
          <span className="font-medium text-gray-800">{item.title}</span>
        </div>
        {level === 0 && hasChildren && (
          <FontAwesomeIcon
            icon={open ? faChevronUp : faChevronDown}
            className="w-4 h-4 text-gray-600"
          />
        )}
      </button>

      {(open || level > 0) && (
        <div className="mt-2 space-y-2 pl-4 pr-2">
          {item.description &&
            item.description.map((txt, idx) => (
              <p key={idx} className="text-gray-700">
                {txt}
              </p>
            ))}

          {item.description && level === 0 && (
            <hr className="bg-[#E6E6E6] h-[1px] w-[98%] border-0 mt-2 mb-2" />
          )}

          {item.content &&
            (item.content.length > 1 ? (
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {item.content.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">{item.content[0]}</p>
            ))}

          {hasChildren &&
            item.children.map((child, idx) => (
              <AccordionItem key={idx} item={child} level={level + 1} />
            ))}
        </div>
      )}
    </div>
  );
}

function InventoryAccordion({ sections, gridChildren }) {
  return (
    <div className="space-y-6 bg-[#F6F6F6] overflow-y-auto pr-2">
      {sections.map((sec, i) => (
        <AccordionItem key={i} item={sec} />
      ))}

      <GridSection items={gridChildren} />
    </div>
  );
}

function GridSection({ items }) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((itm, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-lg shadow-sm flex flex-col"
          >
            <h4 className="font-medium text-gray-800 mb-2">{itm.title}</h4>
            <p className="text-gray-600">{itm.content[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AboutFooter({ footerSection }) {
  return (
    <div className="space-y-1 pt-2 border-t border-gray-300">
      <div className="flex items-end space-x-4 p-2 rounded-lg ">
        <img
          src={shopImg}
          alt="Aryventory Logo"
          className="w-30 h-30 object-contain"
        />

        <h3 className="text-xl mb-4 font-semibold text-gray-800">
          {footerSection.title}
        </h3>
      </div>
      {footerSection.paragraphs.map((p, i) => (
        <p key={i} className="text-gray-700">
          {p}
        </p>
      ))}
    </div>
  );
}

export default function About() {
  const introSection = data.find((d) => d.type === "intro");
  const gridSection = data.find((d) => d.type === "grid");
  const middleSections = data.slice(1, 4);

  return (
    <div className="w-full h-[calc(100vh-120px)] overflow-y-auto p-6 space-y-4 rounded-lg">
      <header className="flex items-end space-x-4 rounded-lg ">
        <img
          src={shopImg}
          alt="Aryventory Logo"
          className="w-30 h-30 object-contain"
        />
        <h2 className="text-4xl font-bold pb-5 pl-5 text-gray-800">
          About Aryventory
        </h2>
      </header>

      <div className="flex-grow space-y-6">
        <IntroCard introSection={introSection} />

        <InventoryAccordion
          sections={middleSections}
          gridChildren={gridSection.children}
        />

        <AboutFooter footerSection={data[data.length - 1]} />
      </div>
    </div>
  );
}
