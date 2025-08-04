import React from "react";

import { Link } from "react-router-dom";
const sideItem = [
  {
    profile: "https://m.media-amazon.com/images/I/61zwK7mmLtL.jpg",
    name: "Iphone",
    contact: "9833050590",
  },
  {
    profile: "https://m.media-amazon.com/images/I/61zwK7mmLtL.jpg",
    name: "Iphone",
    contact: "9833050590",
  },
  {
    profile: "https://m.media-amazon.com/images/I/61zwK7mmLtL.jpg",
    name: "Iphone",
    contact: "9833050675",
  },
  {
    profile: "https://m.media-amazon.com/images/I/61zwK7mmLtL.jpg",
    name: "Iphone",
    contact: "9833050590",
  },
  {
    profile: "https://m.media-amazon.com/images/I/61zwK7mmLtL.jpg",
    name: "Iphone",
    contact: "9833050590",
  },
];
const MyCart = () => {
  return (
    <>
      <div className="  p-6 bg-gray-100 h-screen ">
        <h1 className="text-2xl font-semibold mb-4">My Cart</h1>
        {/* table header */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="grid grid-cols-4 text-sm font-medium text-gray-700">
            <div className="text-left">Profile</div>
            <div className="text-center">Organization Name</div>
            <div className="text-right">Contact</div>
          </div>
        </div>
        {/* table content */}

        {sideItem.map((item, index) => (
          <div key={index} className="pt-4">
            <div className="bg-white rounded-xl shadow p-2">
              <div className="grid grid-cols-4 items-center text-sm font-medium text-gray-700">
                {/* Profile Image */}
                <div className="col-span-1 text-left">
                  <img
                    src={item.profile}
                    alt={`${item.name} profile`}
                    className="w-20 h-20 object-cover rounded"
                  />
                </div>

                {/* Name */}
                <div className="col-span-1 text-center">{item.name}</div>

                {/* Contact */}
                <div className="col-span-1 text-right">{item.contact}</div>

                {/* View Details Button */}
                <div className="col-span-1 text-right">
                  <Link to="/view-details">
                    <button className="px-4 py-1 text-sm bg-[#F89320] text-white rounded-md hover:bg-orange-300 transition duration-200">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyCart;
