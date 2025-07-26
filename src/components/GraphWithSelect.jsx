import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { FaChevronDown, FaRegEdit } from "react-icons/fa";

const employeeData = {
  daily: [
    { name: "Mon", Abbas: 30, Ayub: 40, Haider: 20, JK: 30 },
    { name: "Tue", Abbas: 50, Ayub: 30, Haider: 40, JK: 30 },
    { name: "Wed", Abbas: 20, Ayub: 20, Haider: 30, JK: 20 },
    { name: "Thu", Abbas: 60, Ayub: 40, Haider: 30, JK: 50 },
    { name: "Fri", Abbas: 25, Ayub: 25, Haider: 25, JK: 25 },
  ],
  weekly: [
    { name: "Week 1", Abbas: 100, Ayub: 150, Haider: 120, JK: 230 },
    { name: "Week 2", Abbas: 200, Ayub: 100, Haider: 150, JK: 270 },
    { name: "Week 3", Abbas: 150, Ayub: 200, Haider: 100, JK: 200 },
    { name: "Week 4", Abbas: 220, Ayub: 180, Haider: 200, JK: 300 },
  ],
  monthly: [
    { name: "Jan", Abbas: 600, Ayub: 700, Haider: 500, JK: 600 },
    { name: "Feb", Abbas: 500, Ayub: 600, Haider: 400, JK: 600 },
    { name: "Mar", Abbas: 700, Ayub: 800, Haider: 600, JK: 500 },
    { name: "Apr", Abbas: 800, Ayub: 900, Haider: 700, JK: 600 },
  ],
  yearly: [
    { name: "2021", Abbas: 3000, Ayub: 4000, Haider: 3500, JK: 4500 },
    { name: "2022", Abbas: 4000, Ayub: 3000, Haider: 4000, JK: 4000 },
    { name: "2023", Abbas: 5000, Ayub: 4500, Haider: 4000, JK: 4500 },
    { name: "2024", Abbas: 6000, Ayub: 5500, Haider: 5000, JK: 5000 },
  ],
};



const GraphWithSelect = () => {
  const [range, setRange] = useState("daily");

  return (
    <div className="w-full py-6 items-center max-w-4xl justify-between mx-auto">
      <div className="flex justify-between items-center pl-4 pr-1 mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            Employee Overview
          </h2>
          <p className="text-sm text-gray-500">May 25, 2025 - Jun 25, 2025</p>
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
       <div className="mt-10">
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={employeeData[range]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="Abbas" stackId="a" fill="#6366f1" />
          <Bar dataKey="Ayub" stackId="a" fill="#22c55e" />
          <Bar dataKey="Haider" stackId="a" fill="#facc15" />
          <Bar dataKey="JK" stackId="a" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer> </div>
      
    </div>
  );
};

export default GraphWithSelect;
