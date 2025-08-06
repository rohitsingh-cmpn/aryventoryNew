import  { useState } from "react";
import {
  Bell,
  ChevronDown,
  FileText,
  Eye,
  Printer,
  Download,
  ChevronUp,
  Calendar,
} from "lucide-react";

import { useNavigate } from "react-router-dom";
import * as React from "react";
import dayjs from "dayjs";

// MUI components
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

// Day.js adapter for MUI date pickers
import {
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  Typography,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { StaticDateRangePicker } from "@mui/x-date-pickers-pro/StaticDateRangePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { TextField } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";

import { ChevronLeft, ChevronRight, Plane, Settings } from 'lucide-react';

const FlightBookingInterface = () => {
  const [outboundDate, setOutboundDate] = useState(new Date(2025, 6, 27)); // July 27, 2025
  const [inboundDate, setInboundDate] = useState(new Date(2025, 7, 2)); // August 2, 2025
  const [selectedTime, setSelectedTime] = useState({
    hour: 12,
    minute: 55,
    period: "AM",
  });
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6)); // July 2025
  const [activeTab, setActiveTab] = useState("This Week");
  const [selectingOutbound, setSelectingOutbound] = useState(true);

  const months = [
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

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const isSelectedDate = (day, monthOffset = 0) => {
    if (!day) return false;
    const currentDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + monthOffset,
      day
    );
    return (
      currentDate.toDateString() === outboundDate.toDateString() ||
      currentDate.toDateString() === inboundDate.toDateString()
    );
  };

  const isOutboundDate = (day, monthOffset = 0) => {
    if (!day) return false;
    const currentDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + monthOffset,
      day
    );
    return currentDate.toDateString() === outboundDate.toDateString();
  };

  const getDateRange = (tabName) => {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday, 1 = Monday, etc.

    switch (tabName) {
      case "This Week": {
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - currentDay);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6);
        return { start: startOfWeek, end: endOfWeek };
      }
      case "Last Week": {
        const startOfLastWeek = new Date(today);
        startOfLastWeek.setDate(today.getDate() - currentDay - 7);
        const endOfLastWeek = new Date(startOfLastWeek);
        endOfLastWeek.setDate(startOfLastWeek.getDate() + 6);
        return { start: startOfLastWeek, end: endOfLastWeek };
      }
      case "Last 7 Days": {
        const start = new Date(today);
        start.setDate(today.getDate() - 6);
        return { start, end: today };
      }
      default:
        return null;
    }
  };

  const isInActiveRange = (day, monthOffset = 0) => {
    if (!day) return false;
    const range = getDateRange(activeTab);
    if (!range) return false;

    const currentDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + monthOffset,
      day
    );
    return currentDate >= range.start && currentDate <= range.end;
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    const range = getDateRange(tabName);
    if (range) {
      // Auto-set dates based on the selected range
      setOutboundDate(range.start);
      setInboundDate(range.end);
      setSelectingOutbound(true);
    }
  };

  const handleDateClick = (day, monthOffset = 0) => {
    if (!day) return;

    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + monthOffset,
      day
    );

    if (selectingOutbound) {
      setOutboundDate(newDate);
      // If outbound date is after inbound date, update inbound to be after outbound
      if (newDate >= inboundDate) {
        const nextDay = new Date(newDate);
        nextDay.setDate(nextDay.getDate() + 1);
        setInboundDate(nextDay);
      }
      setSelectingOutbound(false);
    } else {
      // Only allow inbound dates that are after outbound date
      if (newDate > outboundDate) {
        setInboundDate(newDate);
        setSelectingOutbound(true);
      }
    }
  };

  const navigateMonth = (direction) => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + direction)
    );
  };

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  const CalendarMonth = ({ monthOffset = 0 }) => {
    const displayMonth = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + monthOffset
    );
    const days = getDaysInMonth(displayMonth);

    return (
      <div className="flex-1">
        <div className="flex items-center justify-between mb-4">
          {monthOffset === 0 && (
            <button
              onClick={() => navigateMonth(-1)}
              className="p-1 hover:bg-gray-700 rounded"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
          )}
          <h3 className="text-white font-medium">
            {months[displayMonth.getMonth()]} {displayMonth.getFullYear()}
          </h3>
          {monthOffset === 1 && (
            <button
              onClick={() => navigateMonth(1)}
              className="p-1 hover:bg-gray-700 rounded"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {weekDays.map((day) => (
            <div
              key={day}
              className="text-center text-gray-400 text-sm py-2 font-medium"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => {
            const isDisabled =
              !day ||
              (!selectingOutbound &&
                day &&
                new Date(
                  displayMonth.getFullYear(),
                  displayMonth.getMonth(),
                  day
                ) <= outboundDate);
            const inRange = isInActiveRange(day, monthOffset);

            return (
              <button
                key={index}
                className={`
                  h-10 w-10 rounded-full text-sm font-medium transition-colors relative
                  ${day && !isDisabled ? "hover:bg-gray-700" : ""}
                  ${
                    isSelectedDate(day, monthOffset)
                      ? isOutboundDate(day, monthOffset)
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                      : inRange && day
                      ? "bg-blue-900/50 text-blue-300 border border-blue-700"
                      : day
                      ? isDisabled
                        ? "text-gray-600 cursor-not-allowed"
                        : "text-gray-300"
                      : "text-transparent cursor-default"
                  }
                `}
                disabled={isDisabled}
                onClick={() => handleDateClick(day, monthOffset)}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-900 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-gray-800 rounded-lg">
            <Plane className="w-5 h-5 text-white transform rotate-45" />
          </div>
          <h1 className="text-white text-xl font-semibold">Book your flight</h1>
        </div>

        <div className="flex gap-8">
          {/* Left Section - Date Selection */}
          <div className="flex-1">
            {/* Date Inputs */}
            <div className="flex gap-4 mb-6">
              <div className="flex-1">
                <label className="text-gray-400 text-sm mb-2 block">
                  From
                </label>
                <div
                  className={`bg-gray-800 rounded-lg p-4 border cursor-pointer transition-colors ${
                    selectingOutbound
                      ? "border-blue-500"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                  onClick={() => setSelectingOutbound(true)}
                >
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-gray-400 transform rotate-45" />
                    <span className="text-white font-mono">
                      {formatDate(outboundDate)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center pt-8">
                <div className="w-6 h-px bg-gray-600"></div>
              </div>

              <div className="flex-1">
                <label className="text-gray-400 text-sm mb-2 block">
                  Till
                </label>
                <div
                  className={`bg-gray-800 rounded-lg p-4 border cursor-pointer transition-colors ${
                    !selectingOutbound
                      ? "border-blue-500"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                  onClick={() => setSelectingOutbound(false)}
                >
                  <div className="flex items-center gap-3">
                    <Plane className="w-5 h-5 text-gray-400 transform -rotate-45" />
                    <span className="text-white font-mono">
                      {formatDate(inboundDate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Period Tabs */}
            <div className="flex gap-2 mb-6">
              {["This Week", "Last Week", "Last 7 Days"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabClick(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Calendar */}
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
              <div className="flex gap-8">
                <CalendarMonth monthOffset={0} />
                <CalendarMonth monthOffset={1} />
              </div>
            </div>

          <div className="mt-5 w-80">
            <div className="space-y-6">
              {/* Book Now Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Book now!
              </button>
            </div>
          </div>
          </div>

          {/* Right Section - Time Picker & Actions */}
        </div>
      </div>
    </div>
  );
};

// interface Product {
//   id: number;
//   name: string;
//   status: 'Estimated' | 'Confirmed' | 'Pending';
//   image: string;
// }

function FlightBookingPicker() {
  const [value, setValue] = useState([null, null]);
  const [time, setTime] = useState(dayjs().hour(12).minute(55));
  const [quickSelection, setQuickSelection] = useState(null);

  // Quick selection handler example
  const handleQuickSelection = (event, newValue) => {
    setQuickSelection(newValue);
    if (newValue === "thisWeek") {
      const start = dayjs().startOf("week");
      const end = dayjs().endOf("week");
      setValue([start, end]);
    }
    if (newValue === "lastWeek") {
      const start = dayjs().subtract(1, "week").startOf("week");
      const end = dayjs().subtract(1, "week").endOf("week");
      setValue([start, end]);
    }
    if (newValue === "last7Days") {
      const start = dayjs().subtract(7, "day");
      const end = dayjs();
      setValue([start, end]);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          bgcolor: "#121212",
          color: "white",
          borderRadius: 2,
          p: 2,
          maxWidth: 900,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {/* Header: Book your flight */}
        <Typography fontWeight="bold" fontSize={16} gutterBottom>
          Book your flight
        </Typography>

        {/* Date inputs for Outbound / Inbound */}
        <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="MM/DD/YYYY"
            label="Outbound"
            InputProps={{
              startAdornment: <FlightTakeoffIcon sx={{ mr: 1 }} />,
              sx: {
                bgcolor: "#222",
                color: "white",
                borderRadius: 1,
              },
            }}
            value={value[0] ? value[0].format("MM/DD/YYYY") : ""}
            onClick={() => {}}
            readOnly
          />
          <Typography sx={{ alignSelf: "center" }}>-</Typography>
          <TextField
            variant="outlined"
            size="small"
            fullWidth
            placeholder="MM/DD/YYYY"
            label="Inbound"
            InputProps={{
              startAdornment: <FlightLandIcon sx={{ mr: 1 }} />,
              sx: {
                bgcolor: "#222",
                color: "white",
                borderRadius: 1,
              },
            }}
            value={value[1] ? value[1].format("MM/DD/YYYY") : ""}
            onClick={() => {}}
            readOnly
          />
        </Box>

        {/* Quick selection buttons */}
        <ToggleButtonGroup
          size="small"
          value={quickSelection}
          exclusive
          onChange={handleQuickSelection}
          sx={{ mb: 2 }}
        >
          <ToggleButton
            value="thisWeek"
            sx={{ color: "Black", bgcolor: "#ffffff" }}
          >
            This Week
          </ToggleButton>
          <ToggleButton
            value="lastWeek"
            sx={{ color: "Black", bgcolor: "#ffffff" }}
          >
            Last Week
          </ToggleButton>
          <ToggleButton
            value="last7Days"
            sx={{ color: "Black", bgcolor: "#ffffff" }}
          >
            Last 7 Days
          </ToggleButton>
        </ToggleButtonGroup>

        {/* Static Date Range Picker showing two months */}
        <StaticDateRangePicker
          displayStaticWrapperAs="desktop"
          value={value}
          onChange={(newValue) => setValue(newValue)}
          calendars={2}
          sx={{
            bgcolor: "#121212",
            borderRadius: 2,
            "& .MuiPickersDay-root": {
              color: "white",
            },
            "& .Mui-selected": {
              bgcolor: "#6ca0f6",
              color: "white",
            },
            "& .MuiDayCalendar-weekDayLabel": {
              color: "#aaa",
            },
            "& .MuiPickersDay-today": {
              borderColor: "#6ca0f6",
            },
          }}
        />

        {/* Time picker */}
        <Box sx={{ maxWidth: 160, mt: 1 }}>
          <TimePicker
            value={time}
            onChange={(newTime) => setTime(newTime)}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                sx={{
                  input: { color: "white", textAlign: "center" },
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#222",
                    borderRadius: 1,
                  },
                  "& .MuiSvgIcon-root": {
                    color: "white",
                  },
                }}
              />
            )}
            ampm
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}

function Reports() {
  const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
  const [selectedReportFormat, setSelectedReportFormat] = useState(
    'Select'
  );
  const [startDate, setStartDate] = useState(new Date());

  const products = [
    {
      id: 1,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const reportFormats = [
    "Report By Supplier",
    "Report By Profit & Loss",
    "Report By Shopkeeper Bill",
    "Staff Attendance Bill",
    "Inventory Products Report",
  ];

  const handleReportFormatSelect = (format) => {
    setSelectedReportFormat(format);
    setIsReportDropdownOpen(false);
    console.log("Selected report format:", format);
  };

  const handleViewDetails = (productId) => {
    console.log("Viewing details for product:", productId);
    alert(`Viewing details for product ${productId}`);
  };

  //notification Page
  const navigate = useNavigate();
  const handleNotification = () => {
    console.log("Notification clicked");
    return navigate("/notification-page");
  };

  const handleExportReport = () => {
    console.log("Exporting report with format:", selectedReportFormat);
    alert(`Exporting report: ${selectedReportFormat}`);
  };

  const handlePrintReport = () => {
    console.log("Printing report");
    window.print();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Estimated":
        return "text-[#F89320]";
      case "Confirmed":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex  h-full bg-gray-50 ">
      {/* Header h-full*/}

      {/* Main Content */}
      <main className="p-6  flex flex-1 flex-col">
        {/* Reports Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Reports</h2>

          <div className="flex items-center space-x-3">
            {/* Report Format Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsReportDropdownOpen(!isReportDropdownOpen)}
                className="flex items-center space-x-2 bg-[#F89320] hover:bg-orange-300 text-white px-4 py-2 rounded-lg transition-colors"
              >
                <span>{selectedReportFormat}</span>
                {isReportDropdownOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {isReportDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <div className="py-2">
                    {reportFormats.map((format, index) => (
                      <button
                        key={index}
                        onClick={() => handleReportFormatSelect(format)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Date Picker */}

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                defaultValue={dayjs("2024-04-17")}
                onChange={(newValue) => {
                  console.log(newValue);
                }}
                renderInput={(params) => <input {...params} />}
              />
            </LocalizationProvider>

            {/* da */}
            {/* <div className="flex items-center space-x-2 bg-[#F89320] hover:bg-orange-300 text-white rounded-lg p-2 w-max">
              <div className="relative w-64">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="w-full pl-10 pr-4 py-2 rounded-md border border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:border-white "
                  dateFormat="yyyy-MM-dd"
                  placeholderText="Select a date"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
              </div>
            </div> */}
          </div>
        </div>

        {selectedReportFormat == "Select" && (
          <div className="flex items-center justify-center h-screen">
            <img
              src="https://ssl.gstatic.com/docs/doclist/images/empty_state_recents_v4.svg"
              alt="Rashid img"
              className="h-55"
            />
          </div>
        )}
        {selectedReportFormat != "Select" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-[#F89320]" />
                <span className="font-medium text-gray-900">
                  INV - INV00082
                </span>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">
                      Product
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">
                      Product Name
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">
                      Status
                    </th>
                    <th className="text-right py-4 px-6 font-medium text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={product.id}
                      className={
                        index !== products.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-4 px-6">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-900 font-medium">
                          {product.name}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`font-medium ${getStatusColor(
                            product.status
                          )}`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => handleViewDetails(product.id)}
                          className="flex items-center space-x-2 bg-[#F89320] hover:bg-orange-300 text-white px-4 py-2 rounded-lg transition-colors ml-auto"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* {FlightBookingPicker()} */}
        {FlightBookingInterface()}

        {/* Action Buttons */}
        <div className="mt-auto  flex justify-end space-x-3">
          <button
            onClick={handlePrintReport}
            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Report</span>
          </button>

          <button
            onClick={handleExportReport}
            className="flex items-center space-x-2 bg-[#F89320] hover:bg-orange-300 text-white px-6 py-2 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Reports;
