// import React, { useState } from "react";
// import '../index.css';
// import {
//   FaGift,
//   FaShoppingBag,
//   FaMoneyBillWave,
//   FaTimes,
//   FaRegClock,
// } from "react-icons/fa";
// import GraphWithSelect from "../components/GraphWithSelect"; // Assuming this is a separate component for the graph
// import SalesGraph from "../components/SalesGraph";

// const StatCardTop = ({
//   icon,
//   label,
//   value,
//   bg = "bg-white",
//   textColor = "text-black",
// }) => (
//   <div
//     className={`flex flex-row p-1 gap-2 sm:p-5  rounded-2xl w-full shadow-sm h-full items-center  sm:gap-10 bg-white `}
//   >
//     <div className={`bg-green-200 ${bg} ${textColor} p-2 rounded-xl`}>
//       {" "}
//       <div className="flex justify-end sm:text-4xl ">{icon}</div>
//     </div>
//     <div>
//       <span className="text-xl lg:text-2xl text-gray-600  ">{label}</span>
//       <span
//         className={`text-xl sm:text-2xl font-semibold block text-gray-700 `}
//       >
//         {value}
//       </span>
//     </div>
//   </div>
// );

// const StatCard = ({
//   icon,
//   label,
//   value,
//   bg = "bg-white",
//   textColor = "text-black",
// }) => (
//   <div
//     className={`flex flex-col bg-white p-5 2xl:p-10 rounded-2xl w-full shadow-sm h-full justify-between `}
//   >
//     <div className={`flex  justify-end text-4xl   mb-2`}>
//       <div className={`p-2 rounded-xl ${bg} ${textColor}`}> {icon}</div>
//     </div>
//     <div>
//       <span className="text-xl lg:text-2xl text-gray-600 ">{label}</span>
//       <span className={`text-2xl font-semibold block text-gray-700 `}>
//         {value}
//       </span>
//     </div>
//   </div>
// );

// const Dashboard = () => {
//   const [range, setRange] = useState("daily");
//   const employees = [
//     {
//       name: "JK Paradise",
//       role: "Manager",
//       image:
//         "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
//     },
//     {
//       name: "Abbas",
//       role: "Sales",
//       image:
//         "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
//     },
//     {
//       name: "Ayub",
//       role: "Support",
//       image:
//         "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
//     },
//     // etc...
//   ];

//   return (
//     <>
//       <div className="h-[calc(100vh-65px)] overflow-y-auto scrollbar-hide bg-gray-100 p-2  flex flex-col gap-4">
//         {/* Top Stats - grid 4 columns on lg+ */}
//         <div className="grid  grid-cols-2  lg:grid-cols-4 gap-4 ">
//           <StatCardTop
//             icon={<FaGift />}
//             label="Total Orders Today"
//             value="₹150"
//             bg="bg-green-200"
//             textColor="text-green-500"
//           />
//           <StatCardTop
//             icon={<FaShoppingBag />}
//             label="Out of Stock"
//             value="₹60"
//             bg="bg-red-200"
//             textColor="text-red-500"
//           />
//           <StatCardTop
//             icon={<FaMoneyBillWave />}
//             label="Low Quantity Products"
//             value="₹80"
//             bg="bg-red-200"
//             textColor="text-red-500"
//           />
//           <StatCardTop
//             icon={<FaTimes />}
//             label="Total Orders in Current Month"
//             value="₹60"
//             bg="bg-violet-200"
//             textColor="text-violet-500"
//           />
//         </div>

//         {/* Chart + Right Cards */}
//         <div className="flex  flex-col lg:flex-row gap-4 lg:grid lg:grid-cols-4">
//           {/* Chart Container */}
//           <SalesGraph />

//           {/* Right Side Cards - stacked vertically */}
//           <div className="grid grid-cols-2  gap-4 w-full text-orange-400  lg:grid-cols-1 ">
//             <StatCard
//               icon={<FaMoneyBillWave />}
//               label="Top Selling Product"
//               value="₹80"
//               bg="bg-green-200"
//               textColor="text-green-500"
//             />
//             <StatCard
//               icon={<FaTimes />}
//               label="Current month's Best Performers"
//               value="₹60"
//               bg="bg-yellow-200"
//               textColor="text-yellow-500"
//             />
//           </div>
//         </div>

//         {/* Bottom Section - Recent Activity */}

//         <div className="flex  flex-col lg:flex-row  rounded-xl   lg:grid lg:grid-cols-20  ">
//           <div className=" grid grid-cols-2  lg:col-span-5 gap-4 lg:grid-cols-1">
//             <StatCard
//               icon={<FaRegClock />}
//               label="In hand"
//               value="₹60"
//               bg="bg-blue-200"
//               textColor="text-blue-500"
//             />
//             <StatCard
//               icon={<FaRegClock />}
//               label="To be received"
//               value="₹80"
//               bg="bg-orange-200"
//               textColor="text-orange-400"
//             />
//           </div>
//           <div className="col-span-1  lg:col-span-15 grid grid-cols-1  lg:grid-cols-15   ">
//             <div className="  lg:col-span-10 ">
//               <div className="p-2">
//                 <GraphWithSelect />
//               </div>
//             </div>
//             <div className="flex w-full h-full lg:col-span-5 ">
//               <div className="p-5 flex w-full flex-col  bg-white rounded-xl ">
//                 <h1 className="font-semibold 2xl:text-xl ">Legends</h1>
//                 <div className="flex flex-row">
//                   {" "}
//                   {employees.map((emp, index) => (
//                     <div
//                       key={index}
//                       className=" flex-col items-center  p-2 bg-white rounded-lg "
//                     >
//                       <img
//                         src={emp.image}
//                         alt={emp.name}
//                         className="w-16 h-16 rounded-full object-cover border border-orange-300"
//                       />
//                       <div className="mt-2 text-sm font-medium text-gray-800">
//                         {emp.name}
//                       </div>
//                       <div className="text-xs text-gray-500">{emp.role}</div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Dashboard;



import { useState, useRef, useEffect } from "react";

export default function MiniPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2 bg-[#F89320] text-white rounded-lg"
      >
        Toggle Mini Window
      </button>

      {/* Mini Popup */}
      {isOpen && (
        <div
          ref={popupRef}
          className="absolute top-12 left-0 bg-white border rounded-xl shadow-lg p-4 w-56 z-50"
        >
          <p className="text-gray-700">This is a mini popup window 🚀</p>
        </div>
      )}
    </div>
  );
}



