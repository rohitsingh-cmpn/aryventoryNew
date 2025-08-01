import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
// import MyCart from "./MyCart"

const sideItem = [
  { key: "Product Name", value: "iPhone 16 Pro Max" },
  { key: "Price", value: "₹1,29,000" },
  { key: "Stock", value: "35 units" },
  { key: "Barcode", value: "ER0053PR67" },
  { key: "Brand", value: "Apple" },
  // { key: "Category", value: "Smartphone" },
  { key: "Model Number", value: "A3105" },
  // { key: "Warranty", value: "1 Year Manufacturer Warranty" },
  { key: "Color", value: "Space Black" },
  { key: "Storage", value: "512 GB" },
  { key: "RAM", value: "8 GB" },
  { key: "Battery Capacity", value: "4500 mAh" },
  { key: "Display Size", value: "6.7 inches" },
  { key: "Camera", value: "48 MP + 12 MP + 12 MP" },
  // { key: "Operating System", value: "iOS 18" },
  // { key: "Network", value: "5G, 4G LTE, VoLTE" },
  // { key: "Launch Date", value: "September 2025" },
];


const ViewDetails = () => {

  const navigate = useNavigate();
  

  return (
    <>
      <Navbar
        header="Product Details"
        showBackButton
        className="p-1"
        onBack={()=> navigate("/my-cart")}
      ></Navbar>

      <div className=" bg-gray-100 p-5 h-screen ">
        {/* Content container */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Image Section */}
          <div className="bg-white rounded-2xl shadow p-4 w-full md:w-1/2 flex items-center justify-center">
            <img
              src="https://rukminim2.flixcart.com/image/704/844/xif0q/mobile/x/5/2/-original-imah4jywyma4j8vy.jpeg?q=90&crop=false"
              alt="iPhone"
              className="min-w-[150px] min-h-[250px] max-w-[550px] object-cover rounded"
            />
          </div>

          {/* Details Section */}
          <div className="bg-white rounded-2xl shadow p-4 w-full md:w-1/2">
            <div className="space-y-4 text-sm text-gray-700">
              {/* Feature row 1 */}
              {sideItem.map((item, index) => (
                <div key={index}>
                  <div className="grid grid-cols-2 py-2">
                    <div className="font-medium text-left">{item.key}</div>
                    <div className="text-right">{item.value}</div>
                  </div>
                  <hr className="border-t border-gray-200" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDetails;
