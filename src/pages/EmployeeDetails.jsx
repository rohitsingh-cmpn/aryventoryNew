import React, { useState, useEffect } from "react";
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
  ArrowLeft,
} from "lucide-react";

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
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState(null);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    role: "",
    profile: "",
  });

  // Initialize attendance details for employees
  useEffect(() => {
    const updatedEmployees = employees.map((employee) => {
      if (!employee.attendanceDetails) {
        // Initialize attendance details for the past 30 days
        const attendanceDetails = {};
        const today = new Date();

        for (let i = 30; i >= 0; i--) {
          const date = new Date();
          date.setDate(today.getDate() - i);
          const dateStr = formatDate(date);

          // Randomly assign attendance status for demo
          const statuses = ["present", "absent", "leave", "late"];
          attendanceDetails[dateStr] =
            statuses[Math.floor(Math.random() * statuses.length)];
        }

        return {
          ...employee,
          attendanceDetails,
        };
      }
      return employee;
    });

    setEmployees(updatedEmployees);
  }, []);

  const formatDate = (date) => {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(date.getDate()).padStart(2, "0")}`;
  };

  const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isPastDate = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date <= today;
  };

  const handleViewDetails = (employee) => {
    setSelectedEmployee(employee);
    setSelectedDate(null);
    setAttendanceStatus(null);
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
        attendanceDetails: {}, // Initialize empty attendance details
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
    setSelectedDate(null);
    setAttendanceStatus(null);
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

  // Get attendance status for a specific day
  const getAttendanceStatus = (day) => {
    if (!day || !selectedEmployee) return null;

    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const dateStr = formatDate(date);

    return selectedEmployee.attendanceDetails?.[dateStr] || null;
  };

  // Handle date click in calendar
  const handleDateClick = (day) => {
    if (!day || !selectedEmployee) return;

    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );

    // Only allow selecting past dates or today
    if (!isPastDate(date)) return;

    const dateStr = formatDate(date);
    const currentStatus = selectedEmployee.attendanceDetails?.[dateStr] || null;

    setSelectedDate(date);
    setAttendanceStatus(currentStatus);
  };

  // Handle attendance status change
  const handleStatusChange = (status) => {
    if (!selectedDate || !selectedEmployee) return;

    const dateStr = formatDate(selectedDate);
    const updatedAttendanceDetails = {
      ...selectedEmployee.attendanceDetails,
      [dateStr]: status,
    };

    // Update attendance counts
    const attendanceCounts = {
      present: Object.values(updatedAttendanceDetails).filter(
        (s) => s === "present"
      ).length,
      absent: Object.values(updatedAttendanceDetails).filter(
        (s) => s === "absent"
      ).length,
      leaves: Object.values(updatedAttendanceDetails).filter(
        (s) => s === "leave"
      ).length,
      lateArrival: Object.values(updatedAttendanceDetails).filter(
        (s) => s === "late"
      ).length,
    };

    // Update employee data
    const updatedEmployee = {
      ...selectedEmployee,
      attendanceDetails: updatedAttendanceDetails,
      attendance: attendanceCounts,
    };

    // Update employees array
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === selectedEmployee.id ? updatedEmployee : emp
      )
    );

    // Update selected employee
    setSelectedEmployee(updatedEmployee);
    setAttendanceStatus(status);
  };

  return (
    <div className="h-[calc(100vh-68px)] scrollbar-hide bg-gray-50">
      {/* Main Content */}
      <div className="p-6">
        <div className="mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">
              Employee Details
            </h1>
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden sm:block">
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
            {/* Table header - only visible on md+ */}
            <div className="hidden md:grid grid-cols-9 bg-gray-50 px-6 py-4 border-b items-center justify-center border-gray-100 text-sm font-medium text-gray-600">
              <div className="col-span-1">Profile</div>
              <div className="col-span-2">Employee Name</div>
              <div className="col-span-2">Phone Number</div>
              <div className="col-span-2">Role</div>
              <div className="col-span-2">Actions</div>
            </div>

            {filteredEmployees.map((employee) => (
              <div
                key={employee.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
              >
                {/* Desktop (table row) */}
                <div className="hidden md:grid grid-cols-9 px-6 py-4 items-center">
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
                      className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg"
                      title="Edit"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteEmployee(employee.id)}
                      className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-lg"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleViewDetails(employee)}
                      className="bg-[#F89320] hover:bg-orange-300 text-white px-4 py-2 rounded-lg text-sm"
                    >
                      Attendance
                    </button>
                  </div>
                </div>

                {/* Mobile (card style) */}
                <div className="md:hidden p-4 flex flex-col space-y-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={employee.profile}
                      alt={employee.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-gray-800 font-semibold">
                        {employee.name}
                      </p>
                      <p className="text-sm text-gray-600">{employee.role}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="text-gray-700">{employee.phone}</p>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <button
                      onClick={() => handleEditEmployee(employee)}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteEmployee(employee.id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleViewDetails(employee)}
                      className="bg-[#F89320] hover:bg-orange-300 text-white px-3 py-2 rounded-lg text-sm"
                    >
                      Attendance
                    </button>
                  </div>
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
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeAllModals}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
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
                    <option value="Sales Representative">Staff</option>
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
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={closeAllModals}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
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
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-50 flex justify-end"
          onClick={() => setShowAttendanceModal(false)}
        >
          <div
            className="w-full max-w-md bg-white h-full overflow-y-auto transform transition-transform duration-300 translate-x-0"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-10 bg-white border-b border-gray-100 px-6 py-4 flex items-center z-10">
              <button
                onClick={() => setShowAttendanceModal(false)}
                className="text-white bg-[#F89320] hover:bg-orange-300 p-1 rounded-md transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h2 className="absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold text-gray-800">
                Attendance
              </h2>
              <div className="w-5" />
            </div>

            <div className="mt-5 py-6 px-6">
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
                    {selectedEmployee.attendance?.present || 0}
                  </div>
                  <div className="text-sm text-green-600">Presents</div>
                </div>
                <div className="bg-red-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-red-700">
                    {selectedEmployee.attendance?.absent || 0}
                  </div>
                  <div className="text-sm text-red-600">Absents</div>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-yellow-700">
                    {selectedEmployee.attendance?.leaves || 0}
                  </div>
                  <div className="text-sm text-yellow-600">Leaves</div>
                </div>
                <div className="bg-orange-100 p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold text-orange-700">
                    {selectedEmployee.attendance?.lateArrival || 0}
                  </div>
                  <div className="text-sm text-orange-600">Late Arrival</div>
                </div>
              </div>

              {/* Calendar */}
              <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
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
                  {generateCalendarDays().map((day, index) => {
                    const date = day
                      ? new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth(),
                          day
                        )
                      : null;
                    const status = date ? getAttendanceStatus(day) : null;
                    const isDateToday = date ? isToday(date) : false;
                    const isDatePast = date ? isPastDate(date) : false;

                    return (
                      <div
                        key={index}
                        className="aspect-square flex items-center justify-center"
                      >
                        {day && (
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium cursor-pointer
                              ${isDateToday ? "ring-2 ring-[#F89320]" : ""}
                              ${
                                status === "present"
                                  ? "bg-green-100 text-green-700"
                                  : status === "absent"
                                  ? "bg-red-100 text-red-700"
                                  : status === "leave"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : status === "late"
                                  ? "bg-orange-100 text-orange-700"
                                  : isDatePast
                                  ? "text-gray-600 hover:bg-gray-100"
                                  : "text-gray-300"
                              }
                            `}
                            onClick={() => handleDateClick(day)}
                          >
                            {day}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Selector */}
              {selectedDate && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">
                    Mark attendance for{" "}
                    {selectedDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "short",
                      day: "numeric",
                    })}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => handleStatusChange("present")}
                      className={`py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                        attendanceStatus === "present"
                          ? "bg-green-500 text-white"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      }`}
                    >
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>Present</span>
                    </button>
                    <button
                      onClick={() => handleStatusChange("absent")}
                      className={`py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                        attendanceStatus === "absent"
                          ? "bg-red-500 text-white"
                          : "bg-red-100 text-red-700 hover:bg-red-200"
                      }`}
                    >
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Absent</span>
                    </button>
                    <button
                      onClick={() => handleStatusChange("leave")}
                      className={`py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                        attendanceStatus === "leave"
                          ? "bg-yellow-500 text-white"
                          : "bg-yellow-100 text-yellow-700 hover:bg-yellow-200"
                      }`}
                    >
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Leave</span>
                    </button>
                    <button
                      onClick={() => handleStatusChange("late")}
                      className={`py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                        attendanceStatus === "late"
                          ? "bg-orange-500 text-white"
                          : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                      }`}
                    >
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <span>Late Arrival</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Legend */}
              {/* <div className="mt-6 grid grid-cols-2 gap-2">
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
              </div> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeDetails;
