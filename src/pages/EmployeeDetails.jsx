import React, { useState } from "react";
import {
  Search,
  Plus,
  Phone,
  Trash2,
  Calendar,
  X,
  Upload,
  User,
  Lock,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Edit,
} from "lucide-react";

// interface Employee {
//   id: number;
//   name: string;
//   phone: string;
//   role: string;
//   profile: string;
//   attendance: {
//     present: number;
//     absent: number;
//     leaves: number;
//     lateArrival: number;
//   };
// }

const initialEmployees = [
  {
    id: 1,
    name: "NextGen Electronics",
    phone: "8545303546",
    role: "Manager",
    profile:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    attendance: { present: 22, absent: 3, leaves: 2, lateArrival: 1 },
  },
  {
    id: 2,
    name: "Lucky Mobile Shop",
    phone: "8542770348",
    role: "Sales Representative",
    profile:
      "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    attendance: { present: 20, absent: 5, leaves: 1, lateArrival: 3 },
  },
  {
    id: 3,
    name: "Jk Paradise",
    phone: "8545303555",
    role: "Shopkeeper",
    profile:
      "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    attendance: { present: 18, absent: 7, leaves: 3, lateArrival: 2 },
  },
];

function EmployeeDetails() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [showAttendanceModal, setShowAttendanceModal] = useState(false);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  const [showEditEmployeeModal, setShowEditEmployeeModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0)); // January 2025
  const [selectedImage, setSelectedImage] = useState("");

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    role: "",
    profile: "",
  });

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
    setShowAttendanceModal(true);
  };

  const handleAddEmployee = () => {
    setShowAddEmployeeModal(true);
    setFormData({ name: "", phone: "", password: "", role: "", profile: "" });
    setSelectedImage("");
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
    setFormData({
      name: employee.name,
      phone: employee.phone,
      password: "",
      role: employee.role,
      profile: employee.profile,
    });
    setSelectedImage(employee.profile);
    setShowEditEmployeeModal(true);
  };

  const handleDeleteEmployee = (employeeId) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      setEmployees(employees.filter((emp) => emp.id !== employeeId));
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target?.result;
        setSelectedImage(imageUrl);
        setFormData({ ...formData, profile: imageUrl });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (showEditEmployeeModal && editingEmployee) {
      // Update existing employee
      const updatedEmployees = employees.map((emp) =>
        emp.id === editingEmployee.id
          ? {
              ...emp,
              name: formData.name,
              phone: formData.phone,
              role: formData.role,
              profile: formData.profile || emp.profile,
            }
          : emp
      );
      setEmployees(updatedEmployees);
      setShowEditEmployeeModal(false);
      setEditingEmployee(null);
    } else {
      // Add new employee
      const newEmployee = {
        id: Math.max(...employees.map((e) => e.id)) + 1,
        name: formData.name,
        phone: formData.phone,
        role: formData.role,
        profile:
          formData.profile ||
          "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
        attendance: { present: 0, absent: 0, leaves: 0, lateArrival: 0 },
      };
      setEmployees([...employees, newEmployee]);
      setShowAddEmployeeModal(false);
    }

    setFormData({ name: "", phone: "", password: "", role: "", profile: "" });
    setSelectedImage("");
  };

  const handleFormReset = () => {
    setFormData({ name: "", phone: "", password: "", role: "", profile: "" });
    setSelectedImage("");
  };

  const closeAllModals = () => {
    setShowAddEmployeeModal(false);
    setShowEditEmployeeModal(false);
    setShowAttendanceModal(false);
    setSelectedEmployee(null);
    setEditingEmployee(null);
    setFormData({ name: "", phone: "", password: "", role: "", profile: "" });
    setSelectedImage("");
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calendar logic
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      if (direction === "prev") {
        newMonth.setMonth(newMonth.getMonth() - 1);
      } else {
        newMonth.setMonth(newMonth.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Sample attendance data for calendar
  const getAttendanceStatus = (day) => {
    const presentDays = [
      1, 2, 3, 5, 8, 9, 10, 12, 15, 16, 17, 19, 22, 23, 24, 26,
    ];
    const absentDays = [4, 11, 18, 25];
    const leaveDays = [6, 13, 20, 27];
    const lateArrivalDays = [7, 14, 21, 28];

    if (presentDays.includes(day)) return "present";
    if (absentDays.includes(day)) return "absent";
    if (leaveDays.includes(day)) return "leave";
    if (lateArrivalDays.includes(day)) return "late";
    return null;
  };

  return (
    <div className="h-screen bg-gray-50">
      {/* Sidebar */}

      {/* <div className="fixed left-0 top-0 h-full w-16 bg-gradient-to-b from-[#F89320] to-orange-300bg-orange-300 shadow-lg">
        <div className="flex flex-col items-center py-6 space-y-4">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-orange-300bg-orange-300 font-bold text-lg">
            A
          </div> */}
      {/* Navigation icons */}
      {/* <div className="space-y-3">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div
                key={item}
                className="w-8 h-8 bg-orange-400 rounded opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className=" p-6">
        <div className=" mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Employee Details
            </h1>
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                />
              </div>
              <button
                onClick={handleAddEmployee}
                className="bg-[#F89320] hover:bg-orange-300 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>Add Employee</span>
              </button>
            </div>
          </div>

          {/* Employee Table */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="grid grid-cols-9 bg-gray-50 px-6 py-4 border-b items-center justify-center border-gray-100 text-sm font-medium text-gray-600">
              <div className="col-span-1">Profile</div>
              <div className="col-span-2">Employee Name</div>
              <div className="col-span-2">Phone Number</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Actions</div>
            </div>

            {filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="grid grid-cols-9 px-6 py-4 border-b border-gray-50 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center col-span-1">
                  <img
                    src={employee.profile}
                    alt={employee.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                </div>
                <div className="flex items-center col-span-2">
                  <span className="text-gray-800 font-medium">
                    {employee.name}
                  </span>
                </div>
                <div className="flex items-center col-span-2">
                  <span className="text-gray-600">{employee.phone}</span>
                </div>
                <div className="flex items-center col-span-2">
                  <span className="text-gray-600">{employee.role}</span>
                </div>
                <div className="flex items-center space-x-2 col-span-2">
                  <button
                    onClick={() => handleEditEmployee(employee)}
                    className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors"
                    title="Edit"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteEmployee(employee.id)}
                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg transition-colors"
                    title="Delete"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleViewDetails(employee)}
                    className="bg-[#F89320] hover:bg-orange-300 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}

            {filteredEmployees.length === 0 && (
              <div className="px-6 py-12 text-center text-gray-500">
                <User className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                <p>No employees found</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add Employee Modal */}
      {showAddEmployeeModal && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Add New Staff
                </h2>
                <button
                  onClick={closeAllModals}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Image Upload */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="w-20 h-20 rounded-lg object-cover border-2 border-gray-300"
                      />
                    ) : (
                      <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-[#F89320] transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-500 mt-2">
                    Upload Image
                  </span>
                </div>

                {/* Staff Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Enter Staff Name*"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="tel"
                    placeholder="Enter Phone Number*"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="password"
                    placeholder="Enter Password*"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                    required
                  />
                </div>

                {/* Role Select */}
                <div className="relative">
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none appearance-none bg-white"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales Representative">
                      Sales Representative
                    </option>
                    <option value="Shopkeeper">Shopkeeper</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={handleFormReset}
                    className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#F89320] hover:bg-orange-300 text-white px-4 py-3 rounded-lg transition-colors"
                  >
                    Add Staff
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Edit Employee Modal */}
      {showEditEmployeeModal && editingEmployee && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                  Edit Staff
                </h2>
                <button
                  onClick={closeAllModals}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                {/* Image Upload */}
                <div className="flex flex-col items-center mb-6">
                  <div className="relative">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Preview"
                        className="w-20 h-20 rounded-lg object-cover border-2 border-gray-300"
                      />
                    ) : (
                      <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-[#F89320] transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                  </div>
                  <span className="text-sm text-gray-500 mt-2">
                    Upload Image
                  </span>
                </div>

                {/* Staff Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Enter Staff Name*"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="tel"
                    placeholder="Enter Phone Number*"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                    required
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="password"
                    placeholder="Enter New Password (optional)"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                  />
                </div>

                {/* Role Select */}
                <div className="relative">
                  <select
                    value={formData.role}
                    onChange={(e) =>
                      setFormData({ ...formData, role: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none appearance-none bg-white"
                    required
                  >
                    <option value="">Select Role</option>
                    <option value="Manager">Manager</option>
                    <option value="Sales Representative">
                      Sales Representative
                    </option>
                    <option value="Shopkeeper">Shopkeeper</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                </div>

                {/* Buttons */}
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={closeAllModals}
                    className="flex-1 px-4 py-3 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#F89320] hover:bg-orange-300 text-white px-4 py-3 rounded-lg transition-colors"
                  >
                    Update Staff
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Attendance Sidebar Modal */}
      {showAttendanceModal && selectedEmployee && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full overflow-y-auto transform transition-transform duration-300 translate-x-0">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800">
                Attendance
              </h2>
              <button
                onClick={() => setShowAttendanceModal(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              {/* Employee Info */}
              <div className="flex items-center space-x-3 mb-6 bg-gray-50 p-4 rounded-xl">
                <img
                  src={selectedEmployee.profile}
                  alt={selectedEmployee.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-800">
                    {selectedEmployee.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedEmployee.role}
                  </p>
                </div>
              </div>

              {/* Attendance Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-green-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-green-700">
                    {selectedEmployee.attendance.present}
                  </div>
                  <div className="text-sm text-green-600">Presents</div>
                </div>
                <div className="bg-red-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-red-700">
                    {selectedEmployee.attendance.absent}
                  </div>
                  <div className="text-sm text-red-600">Absentes</div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-yellow-700">
                    {selectedEmployee.attendance.leaves}
                  </div>
                  <div className="text-sm text-yellow-600">Leaves</div>
                </div>
                <div className="bg-orange-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-orange-700">
                    {selectedEmployee.attendance.lateArrival}
                  </div>
                  <div className="text-sm text-orange-300bg-orange-300">Late Arrival</div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                {/* Calendar Header */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => navigateMonth("prev")}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <h3 className="font-medium text-gray-800">
                    {monthNames[currentMonth.getMonth()]}{" "}
                    {currentMonth.getFullYear()}
                  </h3>
                  <button
                    onClick={() => navigateMonth("next")}
                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Day Names */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {dayNames.map((day) => (
                    <div
                      key={day}
                      className="text-center text-xs font-medium text-gray-500 py-2"
                    >
                      {day}
                    </div>
                  ))}
                </div>

                {/* Calendar Days */}
                <div className="grid grid-cols-7 gap-1">
                  {generateCalendarDays().map((day, index) => (
                    <div
                      key={index}
                      className="aspect-square flex items-center justify-center"
                    >
                      {day && (
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            getAttendanceStatus(day) === "present"
                              ? "bg-green-100 text-green-700"
                              : getAttendanceStatus(day) === "absent"
                              ? "bg-red-100 text-red-700"
                              : getAttendanceStatus(day) === "leave"
                              ? "bg-yellow-100 text-yellow-700"
                              : getAttendanceStatus(day) === "late"
                              ? "bg-orange-100 text-orange-700"
                              : "text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {day}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Legend */}
              <div className="mt-6 grid grid-cols-2 gap-2">
                <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-700 font-medium">
                    Present
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-red-50 p-3 rounded-lg">
                  <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                  <span className="text-sm text-red-700 font-medium">
                    Absent
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-yellow-50 p-3 rounded-lg">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-sm text-yellow-700 font-medium">
                    Leave
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-orange-50 p-3 rounded-lg">
                  <div className="w-4 h-4 bg-[#F89320] rounded-full"></div>
                  <span className="text-sm text-orange-700 font-medium">
                    Late Arrival
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeDetails;
