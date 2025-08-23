import React from "react";

import { Link } from "react-router-dom";
const sideItem = [
  {
    profile:
      "https://cdn.beebom.com/mobile/samsung-galaxy-s25-ultra-front-and-back-1.png",
    name: "Iphone",
    contact: "9833050590",
  },
  {
    profile:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    name: "Iphone",
    contact: "9833050590",
  },
  {
    profile:
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/305507_0_l9z9rj.png",
    name: "Iphone",
    contact: "9833050675",
  },
  {
    profile:
      "https://rukminim2.flixcart.com/image/704/844/xif0q/mobile/b/p/t/-original-imahegqhrtpsz7sd.jpeg?q=90",
    name: "Iphone",
    contact: "9833050590",
  },
  {
    profile: "https://m.media-amazon.com/images/I/619lW2YtVhL.jpg",
    name: "Iphone",
    contact: "9833050590",
  },
];
const MyCart = () => {
  return (
    <>
      <div className="  p-4 bg-gray-100 h-screen ">
        <h1 className="text-2xl font-semibold mb-4">My Cart</h1>
        {/* table header */}
        <div className="bg-white rounded-2xl shadow p-4">
          <div className="grid grid-cols-4  font-medium text-black">
            <div className="text-left">Profile</div>
            <div className=" text-center">Organization Name</div>
            <div className="text-center">Contact</div>
          </div>
        </div>
        {/* table content */}

        {sideItem.map((item, index) => (
          <div key={index} className="pt-4">
            <div className="bg-white rounded-xl shadow p-2">
              <div className="grid grid-cols-4 items-center  font-medium text-gray-700">
                {/* Profile Image */}
                <div className="col-span-1 text-left">
                  <img
                    src={item.profile}
                    alt={`${item.name} profile`}
                    className="w-20 h-20 object-contain  rounded"
                  />
                </div>

                {/* Name */}
                <div className="col-span-1 text-center">{item.name}</div>

                {/* Contact */}
                <div className="col-span-1 text-center">{item.contact}</div>

                {/* View Details Button */}
                <div className="col-span-1 text-right">
                  <Link to="/view-details"
                  state={{ item}}
                  >
                    <button className="px-2 py-1 md:px-4 md:py-2 text-sm bg-[#F89320] text-white rounded-md hover:bg-orange-300 transition duration-200">
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
