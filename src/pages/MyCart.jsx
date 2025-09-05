import React from "react";
import { Link } from "react-router-dom";

const sideItem = [
  {
    profile:
      "https://t4.ftcdn.net/jpg/01/57/11/07/360_F_157110702_EKlFgF7zUdhSCYsOQ3XhtAH3re9lmK7q.jpg",
    name: "Jk Paradise",
    contact: "9833050590",
  },
  {
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU-d5izA6q5lqRnUZ7-nteBq0aRnaUHvz3wA&s",
    name: "Bharat Mahal",
    contact: "9833050590",
  },
  {
    profile:
      "https://static.vecteezy.com/system/resources/previews/053/257/215/non_2x/abstract-neural-connect-network-technology-digital-modern-solution-logo-design-illustration-vector.jpg",
    name: "Tech Solutions",
    contact: "9833050675",
  },
  {
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReF9JAw6QO_9pzFf9k9Wcv0-QwXhpeChT54ubJ1OlpCykDN1B4EWs8EiTuCgLeqycnruU&usqp=CAU",
    name: "Digital Hub",
    contact: "9833050590",
  },
  {
    profile:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGFgFsMQFHuIpg52d8ZJbea4UbuTOxxGXlgA&s",
    name: "Greenwood Furnishings",
    contact: "9833050590",
  },
];

const MyCart = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-semibold mb-4">My Cart</h1>

      {/* Desktop Table View - Hidden on mobile */}
      <div className="hidden md:block">
        {/* Table Header */}
        <div className="bg-white rounded-2xl shadow p-4 mb-4">
          <div className="grid grid-cols-4 font-medium text-black">
            <div className="text-left">Profile</div>
            <div className="text-center">Organization Name</div>
            <div className="text-center">Contact</div>
            <div className="text-right">Action</div>
          </div>
        </div>

        {/* Table Content */}
        {sideItem.map((item, index) => (
          <div key={index} className="mb-4">
            <div className="bg-white rounded-xl shadow p-4">
              <div className="grid grid-cols-4 items-center font-medium text-gray-700">
                {/* Profile Image */}
                <div className="col-span-1">
                  <img
                    src={item.profile}
                    alt={`${item.name} profile`}
                    className="w-16 h-16 object-contain rounded"
                  />
                </div>
                {/* Name */}
                <div className="col-span-1 text-center">{item.name}</div>
                {/* Contact */}
                <div className="col-span-1 text-center">{item.contact}</div>
                {/* View Details Button */}
                <div className="col-span-1 text-right">
                  <Link to="/cart-item" state={{ item }}>
                    <button className="px-4 py-2 text-sm bg-[#F89320] text-white rounded-xl hover:bg-orange-300 transition duration-200">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Card View - Hidden on desktop */}
      <div className="md:hidden space-y-4">
        {sideItem.map((item, index) => (
          <div key={index} className="bg-white rounded-xl shadow p-4">
            <div className="flex items-start space-x-4">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={item.profile}
                  alt={`${item.name} profile`}
                  className="w-16 h-16 object-contain rounded"
                />
              </div>

              {/* Organization Details */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 truncate">
                  {item.name}
                </h3>
                <p className="text-gray-600 mt-1">Contact: {item.contact}</p>

                {/* View Details Button */}
                <div className="mt-3 flex justify-end">
                  <Link to="/cart-item" state={{ item }}>
                    <button className="px-4 py-2 text-sm bg-[#F89320] text-white rounded-xl hover:bg-orange-300 transition duration-200">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
