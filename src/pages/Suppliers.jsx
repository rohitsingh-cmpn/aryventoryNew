import React, { useState } from "react";
import { FaRegEdit, FaChevronDown } from "react-icons/fa";
import {
  FaGift,
  FaShoppingBag,
  FaMoneyBillWave,
  FaTimes,
} from "react-icons/fa";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

// Data sets for each range
const datasets = {
  daily: [
    { date: "19/06", value: 120 },
    { date: "20/06", value: 150 },
    { date: "21/06", value: 90 },
    { date: "22/06", value: 160 },
    { date: "23/06", value: 130 },
  ],
  weekly: [
    { date: "Week 1", value: 400 },
    { date: "Week 2", value: 500 },
    { date: "Week 3", value: 450 },
    { date: "Week 4", value: 600 },
  ],
  monthly: [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1500 },
    { date: "Mar", value: 1100 },
    { date: "Apr", value: 1700 },
  ],
  yearly: [
    { date: "2021", value: 5200 },
    { date: "2022", value: 5800 },
    { date: "2023", value: 6100 },
    { date: "2024", value: 7200 },
  ],
};

const StatCard = ({
  icon,
  label,
  value,
  bg = "bg-white",
  textColor = "text-black",
}) => (
  <div className={`flex flex-col ${bg} p-5 2xl:p-10 rounded-2xl w-full shadow-sm lg:h-[200px] justify-between `}>
    <div className="flex justify-end text-xl mb-2">{icon}</div>
    <div>
      <span className="text-sm text-gray-600 ">
        {label}
      </span>
      <span className={`text-2xl font-semibold block ${textColor}`}>
        {value}
      </span>
    </div>
  </div>
);

const Suppliers = () => {
  const [range, setRange] = useState("daily");

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col gap-6">
      {/* Top Stats - grid 4 columns on md+ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-orange-500">
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

      {/* Main Content: Chart + Right Cards */}
      <div className="flex flex-col md:flex-row gap-6 lg:grid lg:grid-cols-4">
        {/* Chart Container */}
        <div className="flex-1 bg-yellow-100 rounded-xl shadow-md p-6 max-w-full  lg:col-span-3">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Sales Overview
              </h2>
              <p className="text-sm text-gray-500">
                May 25, 2025 - Jun 25, 2025
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 bg-[#F89320] text-white text-sm px-3 py-2 rounded-md hover:bg-orange-300">
                <FaRegEdit />
              </button>

              {/* Select dropdown */}
              <div className="relative inline-block">
                <select
                  value={range}
                  onChange={(e) => setRange(e.target.value)}
                  className="bg-[#F89320] text-white text-sm px-3 py-2 rounded-md hover:bg-orange-300 appearance-none focus:outline-none pr-8"
                >
                  <option value="daily">Daily</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="yearly">Yearly</option>
                </select>
                <FaChevronDown
                  className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-white"
                  size={14}
                />
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={datasets[range]}>
              <XAxis dataKey="date" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#2563eb"
                strokeWidth={2}
                dot={{ r: 4, fill: "#2563eb", strokeWidth: 2, stroke: "#fff" }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="text-sm md:text-base text-center text-gray-600 font-medium mt- pt-2 italic border-t border-gray-300 select-none">
            Data on {range.charAt(0).toUpperCase() + range.slice(1)} Based
          </div>
        </div>

        {/* Right Side Cards - stacked vertically */}
        <div className="flex flex-col gap-6 w-full text-orange-400  col-span-1 ">
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
    </div>
  );
};

export default Suppliers;
