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
                <div className="col-span-1 text-right md:px-4 xl:px-8 ">
                  <Link to="/cart-item" state={{ item }}>
                    <button className="px-2 py-1 md:px-4 md:py-2 text-sm bg-[#F89320] text-white rounded-xl hover:bg-orange-300 transition duration-200 ">
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
