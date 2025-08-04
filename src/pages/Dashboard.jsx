import React, { useState } from "react";
import {
  FaGift,
  FaShoppingBag,
  FaMoneyBillWave,
  FaTimes,
  FaRegClock,
} from "react-icons/fa";
import GraphWithSelect from "../components/GraphWithSelect"; // Assuming this is a separate component for the graph
import SalesGraph from "../components/SalesGraph";

const StatCard = ({
  icon,
  label,
  value,
  bg = "bg-white",
  textColor = "text-black",
}) => (
  <div
    className={`flex flex-col ${bg} p-5 2xl:p-10 rounded-2xl w-full shadow-sm lg:h-[200px] justify-between `}
  >
    <div className="flex justify-end text-xl mb-2">{icon}</div>
    <div>
      <span className="text-sm text-gray-600 ">{label}</span>
      <span
        className={`text-2xl font-semibold block text-gray-700 ${textColor}`}
      >
        {value}
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  const [range, setRange] = useState("daily");
  const employees = [
    {
      name: "JK Paradise",
      role: "Manager",
      image:
        "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Abbas",
      role: "Sales",
      image:
        "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
    },
    {
      name: "Ayub",
      role: "Support",
      image:
        "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
    },
    // etc...
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-4 flex flex-col gap-4">
        {/* Top Stats - grid 4 columns on lg+ */}
        <div className="grid grid-cols-2  lg:grid-cols-4 gap-4 text-orange-500">
          <StatCard icon={<FaGift />} label="Total Orders Today" value="₹150" />
          <StatCard
            icon={<FaShoppingBag />}
            label="Out of Stock"
            value="₹60"
            bg="bg-violet-200"
          />
          <StatCard
            icon={<FaMoneyBillWave />}
            label="Low Quantity Products"
            value="₹80"
            bg="bg-green-200"
          />
          <StatCard
            icon={<FaTimes />}
            label="Total Orders in Current Month"
            value="₹60"
            bg="bg-red-200"
            textColor="text-red-600"
          />
        </div>

        {/* Chart + Right Cards */}
        <div className="flex flex-col lg:flex-row gap-4 lg:grid lg:grid-cols-4">
          {/* Chart Container */}
          <SalesGraph />

          {/* Right Side Cards - stacked vertically */}
          <div className="grid grid-cols-2  gap-4 w-full text-orange-400  lg:grid-cols-1 ">
            <StatCard
              icon={<FaMoneyBillWave />}
              label="Top Selling Product"
              value="₹80"
              bg="bg-green-200"
            />
            <StatCard
              icon={<FaTimes />}
              label="Current month's Best Performers"
              value="₹60"
              bg="bg-red-200"
              textColor="text-red-600"
            />
          </div>
        </div>

        {/* Bottom Section - Recent Activity */}

        <div className="flex flex-col lg:flex-row  rounded-xl   lg:grid lg:grid-cols-20  ">
          <div className=" grid grid-cols-2  lg:col-span-5 gap-4 lg:grid-cols-1">
            <StatCard
              icon={<FaRegClock />}
              label="In hand"
              value="₹60"
              bg="bg-violet-200"
            />
            <StatCard
              icon={<FaRegClock />}
              label="To be received"
              value="₹80"
              bg="bg-green-200"
            />
          </div>
          <div className="col-span-1  justify-between   lg:col-span-15 grid grid-cols-1  lg:grid-cols-15   ">
            <div className="  lg:col-span-10 ">
              <GraphWithSelect />
            </div>
            <div className=" w-full p-5 h-full lg:col-span-5 ">
              <h1 className="font-semibold 2xl:text-xl">Legends</h1>
              <div className="  flex flex-row lg:flex-col  bg-white rounded-xl ">
                {employees.map((emp, index) => (
                  <div
                    key={index}
                    className="inline-flex flex-col items-center  p-2 bg-white rounded-lg "
                  >
                    <img
                      src={emp.image}
                      alt={emp.name}
                      className="w-16 h-16 rounded-full object-cover border border-orange-300"
                    />
                    <div className="mt-2 text-sm font-medium text-gray-800">
                      {emp.name}
                    </div>
                    <div className="text-xs text-gray-500">{emp.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
