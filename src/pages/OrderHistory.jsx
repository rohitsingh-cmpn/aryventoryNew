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

const dataSets = {
  daily: [
    { name: "Mon", sales: 120 },
    { name: "Tue", sales: 150 },
    { name: "Wed", sales: 90 },
    { name: "Thu", sales: 180 },
    { name: "Fri", sales: 100 },
  ],
  weekly: [
    { name: "Week 1", sales: 600 },
    { name: "Week 2", sales: 720 },
    { name: "Week 3", sales: 500 },
    { name: "Week 4", sales: 900 },
  ],
  monthly: [
    { name: "Jan", sales: 2400 },
    { name: "Feb", sales: 2100 },
    { name: "Mar", sales: 2600 },
    { name: "Apr", sales: 3000 },
  ],
  yearly: [
    { name: "2021", sales: 12000 },
    { name: "2022", sales: 15000 },
    { name: "2023", sales: 18000 },
    { name: "2024", sales: 20000 },
  ],
};

const GraphWithSelect = () => {
  const [range, setRange] = useState("daily");

  return (
    <div className="w-full max-w-4xl  mx-auto">
      <div className="flex justify-end mb-4">
        <select
          value={range}
          onChange={(e) => setRange(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={dataSets[range]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="sales" fill="#60a5fa" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraphWithSelect;
