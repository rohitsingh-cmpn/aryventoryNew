import React, { useState } from "react";
import {
  Search,
  Plus,
  Edit2,
  Trash2,
  X,
  Home,
  Users,
  ShoppingCart,
  Package,
  FileText,
  Settings,
  HelpCircle,
  BarChart3,
  Calendar,
} from "lucide-react";

function App() {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Mukesh Tambe",
      contact: "8549383409",
      avatar: "M",
      color: "bg-purple-500",
    },
    {
      id: 2,
      name: "Albert Einstein",
      contact: "8546735498",
      avatar: "J",
      color: "bg-yellow-500",
    },
    {
      id: 3,
      name: "Abdur Rashid",
      contact: "8546735498",
      avatar: "J",
      color: "bg-blue-500",
    },
    {
      id: 4,
      name: "Rohit Singh",
      contact: "8546735498",
      avatar: "J",
      color: "bg-indigo-500",
    },
    {
      id: 5,
      name: "Rashid Shaikh",
      contact: "8546735498",
      avatar: "R",
      color: "bg-indigo-500",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSupplier, setNewSupplier] = useState({ name: "", contact: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const [editSupplierData, setEditSupplierData] = useState({
    name: "",
    contact: "",
  });

  const getRandomColor = () => {
    const colors = [
      "bg-purple-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
      "bg-red-500",
      "bg-indigo-500",
      "bg-pink-500",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const addSupplier = () => {
    if (newSupplier.name.trim() && newSupplier.contact.trim()) {
      const supplier = {
        id: Date.now(),
        name: newSupplier.name,
        contact: newSupplier.contact,
        avatar: newSupplier.name.charAt(0).toUpperCase(),
        color: getRandomColor(),
      };
      setSuppliers([...suppliers, supplier]);
      setNewSupplier({ name: "", contact: "" });
      setIsModalOpen(false);
    }
  };

  const deleteSupplier = (id) => {
    setSuppliers(suppliers.filter((supplier) => supplier.id !== id));
  };

  const editSupplier = (id) => {
    const supplier = suppliers.find((s) => s.id === id);
    if (supplier) {
      setEditingSupplier(supplier);
      setEditSupplierData({ name: supplier.name, contact: supplier.contact });
      setIsEditModalOpen(true);
    }
  };

  const updateSupplier = () => {
    if (
      editingSupplier &&
      editSupplierData.name.trim() &&
      editSupplierData.contact.trim()
    ) {
      setSuppliers(
        suppliers.map((supplier) =>
          supplier.id === editingSupplier.id
            ? {
                ...supplier,
                name: editSupplierData.name,
                contact: editSupplierData.contact,
                avatar: editSupplierData.name.charAt(0).toUpperCase(),
              }
            : supplier
        )
      );
      setEditSupplierData({ name: "", contact: "" });
      setEditingSupplier(null);
      setIsEditModalOpen(false);
    }
  };

  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      supplier.contact.includes(searchTerm)
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className=" border-gray-200 px-8 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Suppliers</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#F89320] hover:bg-orange-300 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                <span>Add Supplier</span>
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Suppliers Table */}
        <div className="flex-1 px-8 py-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 justify-between">
              <div className="grid grid-cols-4 gap-4 ">
                <div className="font-semibold text-gray-700">Supplier</div>
                <div className="font-semibold text-gray-700">Supplier Name</div>
                <div className="font-semibold text-gray-700">Contact</div>
                <div className="font-semibold text-gray-700">Actions</div>
              </div>
            </div>

            <div className="divide-y divide-gray-200">
              {filteredSuppliers.map((supplier) => (
                <div
                  key={supplier.id}
                  className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="grid grid-cols-4 gap-4 items-center">
                    <div>
                      <div
                        className={`w-10 h-10 ${supplier.color} rounded-full flex items-center justify-center shadow-md`}
                      >
                        <span className="text-white font-semibold text-lg">
                          {supplier.avatar}
                        </span>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-800 font-medium">
                        {supplier.name}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">{supplier.contact}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => editSupplier(supplier.id)}
                        className="w-8 h-8 bg-green-500 hover:bg-green-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => deleteSupplier(supplier.id)}
                        className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200 shadow-sm hover:shadow-md"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredSuppliers.length === 0 && (
              <div className="px-6 py-12 text-center">
                <div className="text-gray-400 text-lg mb-2">
                  No suppliers found
                </div>
                <div className="text-gray-500 text-sm">
                  Try adjusting your search or add a new supplier
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Supplier Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 bg-opacity-50  flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-96 p-6 transform transition-all duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Add Supplier</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Name"
                value={newSupplier.name}
                onChange={(e) =>
                  setNewSupplier({ ...newSupplier, name: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={newSupplier.contact}
                onChange={(e) =>
                  setNewSupplier({ ...newSupplier, contact: e.target.value })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={addSupplier}
                className="flex-1 px-4 py-3 bg-[#F89320] hover:bg-orange-300 text-white rounded-lg transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Supplier Modal */}
      {isEditModalOpen && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/30 bg-opacity-50  flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-2xl w-96 p-6 transform transition-all duration-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Edit Supplier</h2>
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setEditingSupplier(null);
                  setEditSupplierData({ name: "", contact: "" });
                }}
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter Name"
                value={editSupplierData.name}
                onChange={(e) =>
                  setEditSupplierData({
                    ...editSupplierData,
                    name: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                value={editSupplierData.contact}
                onChange={(e) =>
                  setEditSupplierData({
                    ...editSupplierData,
                    contact: e.target.value,
                  })
                }
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            <div className="flex space-x-3 mt-6">
              <button
                onClick={() => {
                  setIsEditModalOpen(false);
                  setEditingSupplier(null);
                  setEditSupplierData({ name: "", contact: "" });
                }}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={updateSupplier}
                className="flex-1 px-4 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
