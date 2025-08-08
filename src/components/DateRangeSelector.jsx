import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Calendar, X } from "lucide-react";

const DateRangeSelector = () => {
  const [selectedDateOption, setSelectedDateOption] = useState("");
  const [showDateDropdown, setShowDateDropdown] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);

  const [tempStartDate, setTempStartDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [tempEndDate, setTempEndDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const dateDropdownRef = useRef(null);

  const dateOptions = [
    "Today",
    "Weekly",
    "Monthly",
    "Yearly",
    "Custom Date Range",
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dateDropdownRef.current &&
        !dateDropdownRef.current.contains(event.target)
      ) {
        setShowDateDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatDate = (date) => {
    if (!date) return "";
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  const handleDateOptionSelect = (option) => {
    setSelectedDateOption(option);
    setShowDateDropdown(false);

    const today = new Date();
    let startDate, endDate;

    switch (option) {
      case "Today":
        startDate = endDate = today;
        break;
      case "Weekly":
        startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        endDate = today;
        break;
      case "Monthly":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = today;
        break;
      case "Yearly":
        startDate = new Date(today.getFullYear(), 0, 1);
        endDate = today;
        break;
      case "Custom Date Range":
        setShowDatePicker(true);
        return;
      default:
        return;
    }

    setSelectedStartDate(startDate);
    setSelectedEndDate(endDate);
  };

  const applyDateSelection = () => {
    setSelectedStartDate(new Date(tempStartDate));
    setSelectedEndDate(new Date(tempEndDate));
    setShowDatePicker(false);
  };

  const cancelDateSelection = () => {
    setShowDatePicker(false);
  };

  return (
    <div>
      {/* Date Selector */}
      <div className="relative inline-block" ref={dateDropdownRef}>
        <button
          onClick={() => setShowDateDropdown(!showDateDropdown)}
          className="bg-[#F89320] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-orange-300 transition-colors min-w-48"
        >
          <Calendar className="w-4 h-4" />
          <span>{selectedDateOption || "Select Date"}</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {showDateDropdown && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 z-10 min-w-48">
            {dateOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleDateOptionSelect(option)}
                className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Date Range Display */}
      {(selectedStartDate || selectedEndDate) && !showDatePicker && (
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mt-6">
          <h3 className="text-lg font-medium mb-4">Selected Date Range</h3>
          <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <div className="text-gray-900">
                {formatDate(selectedStartDate)}
              </div>
            </div>
            <div className="text-gray-400">→</div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <div className="text-gray-900">{formatDate(selectedEndDate)}</div>
            </div>
          </div>
        </div>
      )}

      {/* Date Picker Modal */}
      {showDatePicker && (
        <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Select Date Range</h2>
              <button
                onClick={cancelDateSelection}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800">
                  Start Date
                </h3>
                <input
                  type="date"
                  value={tempStartDate}
                  onChange={(e) => setTempStartDate(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-800">End Date</h3>
                <input
                  type="date"
                  value={tempEndDate}
                  onChange={(e) => setTempEndDate(e.target.value)}
                  min={tempStartDate}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                />
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex justify-end gap-3">
              <button
                onClick={cancelDateSelection}
                className="px-6 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={applyDateSelection}
                className="px-6 py-2 bg-[#F89320] text-white rounded-lg hover:bg-orange-300"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector;
