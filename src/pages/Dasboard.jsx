import React from "react";
import Navbar from "../components/Navbar";
import {
  FaGift,
  FaShoppingBag,
  FaMoneyBillWave,
  FaTimes,
  FaHandRock,
  FaBox,
} from "react-icons/fa";

// Reusable StatCard component
const StatCard = ({
  icon,
  label,
  value,
  bg = "bg-white",
  textColor = "text-black",
}) => (
  <div className={`flex flex-col ${bg} p-4 rounded-2xl w-full shadow-sm justify-between xl:p-8`}>
    <div className="flex justify-end text-xl mb-2">{icon}</div>
    <div>
      <span className="text-sm text-gray-600 whitespace-nowrap truncate">
        {label}
      </span>
      <span className={`text-2xl font-semibold block ${textColor}`}>
        {value}
      </span>
    </div>
  </div>
);

const Dashboard = () => {
  const inventory = Array(8).fill({
    name: "Samsung Motorola Edge 50 Pro 5G",
    price: "₹75k",
    quantity: 10,
    image:
      "https://m.media-amazon.com/images/I/51Ibtg1KESL._UF894,1000_QL80_.jpg",
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 overflow-y-auto">
      <Navbar header="NextGen Electronics" searchVisible={true} />

      {/* Sales Activity */}
      <section className="p-4">
        <h2 className="text-xl font-semibold mb-4">Sales Activity</h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {/* Delivery & Request Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 text-orange-500 font-semibold">
            <StatCard icon={<FaBox />} label="Pending Delivery" value="80" />
            <StatCard
              icon={<FaHandRock />}
              label="Pending Request"
              value="60"
            />
          </div>

          {/* Reward Summary */}
          <div className="lg:col-span-3 bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Reward Summary</h3>
              <button className="bg-[#F89320] text-white px-4 py-2 rounded-lg hover:bg-orange-300 transition">
                View
              </button>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Reward Cards */}
              <div className="grid grid-cols-2 gap-4 flex-1 bg-white text-orange-500 font-semibold">
                <StatCard icon={<FaGift />} label="Total Reward" value="₹150" />
                <StatCard
                  icon={<FaShoppingBag />}
                  label="Total Shopkeeper"
                  value="₹60"
                  bg="bg-violet-200"
                />
                <StatCard
                  icon={<FaMoneyBillWave />}
                  label="Paid"
                  value="₹80"
                  bg="bg-green-200"
                />
                <StatCard
                  icon={<FaTimes />}
                  label="Unpaid"
                  value="₹60"
                  bg="bg-red-200"
                  textColor="text-red-600"
                />
              </div>

              {/* Reward Image */}
              <div className="w-full  lg:w-[250px] xl:w-[350px] 2xl:w-[500px]">
                <img
                  src="https://miro.medium.com/v2/resize:fit:1252/0*x97kZzRE731bh44K.jpg"
                  alt="reward"
                  className="rounded-xl w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Section */}
      <div className="flex flex-col">
        <h2 className="text-xl ml-6 whitespace-nowrap font-semibold ">
          Inventory Summary in Quantity
        </h2>

        <section className="p-4">
          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">
                Total Product in Inventory
              </h2>
              <span className="font-bold text-xl">{inventory.length}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 3xl: gap-4">
              {inventory.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-lg shadow p-4 flex flex-col"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-fit h-fit object-cover rounded"
                  />
                  <h3 className="text-sm font-semibold mt-2 truncate">
                    {item.name}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Quantity: {item.quantity}
                  </p>
                  <p className="font-bold text-black mt-1">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
