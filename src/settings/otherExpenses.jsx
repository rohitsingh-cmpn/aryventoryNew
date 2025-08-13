import React, { useState } from "react";
import { Plus, Edit2, Trash2, TrendingUp, TrendingDown, X } from "lucide-react";

const OtherExpenses = () => {
  const [entries, setEntries] = useState([
    {
      id: "1",
      name: "Mobile",
      amount: 15000,
      date: "2025-01-14",
      type: "expense",
    },
    {
      id: "1",
      name: "Mobile",
      amount: 15000,
      date: "2025-01-14",
      type: "expense",
    },
    {
      id: "1",
      name: "Mobile",
      amount: 15000,
      date: "2025-01-14",
      type: "expense",
    },
    {
      id: "1",
      name: "Mobile",
      amount: 15000,
      date: "2025-01-14",
      type: "expense",
    },
    {
      id: "1",
      name: "Mobile",
      amount: 15000,
      date: "2025-01-14",
      type: "expense",
    },
    {
      id: "1",
      name: "Mobile",
      amount: 15000,
      date: "2025-01-14",
      type: "expense",
    },
    {
      id: "1",
      name: "Mobile",
      amount: 15000,
      date: "2025-01-14",
      type: "expense",
    },
    {
      id: "1",
      name: "Mobile",
      amount: 15000,
      date: "2025-01-14",
      type: "expense",
    },
    {
      id: "2",
      name: "Salary",
      amount: 50000,
      date: "2025-01-14",
      type: "income",
    },
    {
      id: "3",
      name: "Groceries",
      amount: 3000,
      date: "2025-01-13",
      type: "expense",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    amount: "",
    date: "",
    type: "income",
  });

  const totalIncome = entries
    .filter((entry) => entry.type === "income")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalExpense = entries
    .filter((entry) => entry.type === "expense")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.amount || !formData.date) {
      return;
    }

    const entry = {
      id: editingEntry ? editingEntry.id : Date.now().toString(),
      name: formData.name,
      amount: parseFloat(formData.amount),
      date: formData.date,
      type: formData.type,
    };

    if (editingEntry) {
      setEntries(entries.map((e) => (e.id === editingEntry.id ? entry : e)));
    } else {
      setEntries([...entries, entry]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: "", amount: "", date: "", type: "income" });
    setShowModal(false);
    setEditingEntry(null);
  };

  const handleEdit = (entry) => {
    setEditingEntry(entry);
    setFormData({
      name: entry.name,
      amount: entry.amount.toString(),
      date: entry.date,
      type: entry.type,
    });
    setShowModal(true);
  };

  const handleDelete = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
    setDeleteConfirm(null);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-GB");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className=" mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-0">
            Income & Expense
          </h1>
          <button
            onClick={() => setShowModal(true)}
            className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-100 rounded-xl p-6 border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-700 font-medium mb-2">Total Income</p>
                <p className="text-2xl md:text-3xl font-bold text-green-800">
                  {formatCurrency(totalIncome)}
                </p>
              </div>
              <div className="bg-green-500 p-3 rounded-full">
                <TrendingUp className="text-white" size={24} />
              </div>
            </div>
          </div>

          <div className="bg-red-100 rounded-xl p-6 border-l-4 border-red-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-700 font-medium mb-2">Total Expense</p>
                <p className="text-2xl md:text-3xl font-bold text-red-800">
                  {formatCurrency(totalExpense)}
                </p>
              </div>
              <div className="bg-red-500 p-3 rounded-full">
                <TrendingDown className="text-white" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Entries List */}
        <div className="bg-white rounded-xl w-full shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              Recent Transactions
            </h2>
          </div>

          <div className="overflow-x-auto w-full">
            <div className="max-h-96 overflow-y-auto w-full">
              <table className="w-full ">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-12 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Type Name
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {entries.map((entry) => (
                    <tr
                      key={entry.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-12 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span
                            className={`mr-3 text-lg font-bold ${
                              entry.type === "income"
                                ? "text-green-500"
                                : "text-red-500"
                            }`}
                          >
                            {entry.type === "income" ? "+" : "−"}
                          </span>
                          <span className="text-sm font-medium text-gray-900">
                            {entry.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`text-sm font-semibold ${
                            entry.type === "income"
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {formatCurrency(entry.amount)}
                        </span>
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(entry.date)}
                      </td>
                      <td className="px-2 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-8">
                          <button
                            onClick={() => handleEdit(entry)}
                            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition-colors"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(entry.id)}
                            className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {entries.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No transactions yet. Add your first entry!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {showModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full">
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800">
                {editingEntry ? "Edit Entry" : "Add New Entry"}
              </h3>
              <button
                onClick={resetForm}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Entry Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter entry name"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Amount
                </label>
                <input
                  type="number"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter amount"
                  min="0"
                  step="0.01"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="income"
                      checked={formData.type === "income"}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="mr-2 text-green-500 focus:ring-green-500"
                    />
                    <span className="text-green-600 font-medium">Income</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="expense"
                      checked={formData.type === "expense"}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="mr-2 text-red-500 focus:ring-red-500"
                    />
                    <span className="text-red-600 font-medium">Expense</span>
                  </label>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
                >
                  {editingEntry ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full">
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Confirm Delete
              </h3>
              <p className="text-gray-600 mb-6">
                Are you sure you want to delete this entry? This action cannot
                be undone.
              </p>
              <div className="flex space-x-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OtherExpenses;
