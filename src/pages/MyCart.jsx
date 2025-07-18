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
        <div className="  p-6 bg-gray-100 min-h-screen ">
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
              {" "}
              <div className=" bg-white rounded-xl shadow p-3">
                <div className="grid grid-cols-4 text-sm font-medium text-gray-700">
                  <div className="text-left ">
                    <img
                      src={item.profile}
                      alt="iphone"
                      className="w-16 h-12 object-cover rounded-full"
                    />
                  </div>
                  <div className="text-center">{item.name}</div>
                  <div className="text-right">{item.contact}</div>
                  <div className="text-right">
                    <Link to="/view-details">
                      <button className="px-4 py-1 text-sm bg-orange-400 text-white rounded-md hover:bg-orange-300 transiton">
                        View Details
                      </button>
                    </Link>
                    {}
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
