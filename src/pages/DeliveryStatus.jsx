import React, { useState, useEffect, useMemo } from "react";

// --- ICONS (as SVG components for self-containment) ---
const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4 13h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zm0 8h6c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm10 0h6c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1zM13 4v4c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1z"></path>
  </svg>
);
const NavIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
  </svg>
);
const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
  </svg>
);
const CheckCircleIcon = () => (
  <svg
    className="w-6 h-6 text-green-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const CircleIcon = () => (
  <svg
    className="w-6 h-6 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const PendingCircleIcon = () => (
  <svg
    className="w-6 h-6 text-yellow-500"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const ChevronRightIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M9 5l7 7-7 7"
    ></path>
  </svg>
);
const SearchIcon = () => (
  <svg
    className="w-5 h-5 text-gray-400"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const ListIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="8" y1="6" x2="21" y2="6"></line>
    <line x1="8" y1="12" x2="21" y2="12"></line>
    <line x1="8" y1="18" x2="21" y2="18"></line>
    <line x1="3" y1="6" x2="3.01" y2="6"></line>
    <line x1="3" y1="12" x2="3.01" y2="12"></line>
    <line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);
const GridIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="7" height="7"></rect>
    <rect x="14" y="3" width="7" height="7"></rect>
    <rect x="14" y="14" width="7" height="7"></rect>
    <rect x="3" y="14" width="7" height="7"></rect>
  </svg>
);
const FilterIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
  </svg>
);

// --- MOCK DATA ---
const initialDeliveries = [
  {
    id: 1,
    shopName: "JK Paradise",
    phone: "9594665866",
    orderDate: "2025-06-09T23:58:03",
    deliveryDate: "2025-06-10T02:58:03",
    totalAmount: 750,
    status: "Delivered",
  },
  {
    id: 2,
    shopName: "Green Grocers",
    phone: "9876543210",
    orderDate: "2025-07-28T10:30:00",
    deliveryDate: null,
    totalAmount: 450,
    status: "Pending",
  },
  {
    id: 3,
    shopName: "The Corner Store",
    phone: "9988776655",
    orderDate: "2025-07-29T14:00:00",
    deliveryDate: "2025-07-29T16:25:00",
    totalAmount: 1200,
    status: "Delivered",
  },
  {
    id: 4,
    shopName: "Quick Mart",
    phone: "9123456789",
    orderDate: "2025-07-30T09:15:00",
    deliveryDate: null,
    totalAmount: 320,
    status: "Pending",
  },
  {
    id: 5,
    shopName: "Daily Needs",
    phone: "9555666777",
    orderDate: "2025-07-25T18:45:00",
    deliveryDate: "2025-07-25T19:55:00",
    totalAmount: 890,
    status: "Delivered",
  },
  {
    id: 6,
    shopName: "Farm Fresh",
    phone: "9332211445",
    orderDate: "2025-07-30T11:00:00",
    deliveryDate: null,
    totalAmount: 610,
    status: "Pending",
  },
  {
    id: 7,
    shopName: "Super Bazaar",
    phone: "9445566778",
    orderDate: "2024-12-15T20:00:00",
    deliveryDate: "2024-12-15T21:30:00",
    totalAmount: 2500,
    status: "Delivered",
  },
  {
    id: 8,
    shopName: "City Supplies",
    phone: "9778899001",
    orderDate: "2025-07-30T12:30:00",
    deliveryDate: null,
    totalAmount: 150,
    status: "Pending",
  },
];

const INITIAL_FILTERS = {
  searchTerm: "",
  status: "All", // All, Pending, Delivered
  priceRange: { min: "", max: "" },
  dateFilter: { type: "Date", value: null }, // type: Date, Month, Year
};

// --- MAIN COMPONENT ---
export default function DeliveryStatusPage() {
  const [deliveries, setDeliveries] = useState(initialDeliveries);
  const [filteredDeliveries, setFilteredDeliveries] =
    useState(initialDeliveries);
  const [view, setView] = useState("grid"); // 'grid' or 'list'
  const [isMobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState(INITIAL_FILTERS);

  // --- HELPER FUNCTIONS ---
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const time = date.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    return `${day}-${month}-${year} ${time}`;
  };

  // --- FILTER LOGIC ---
  useEffect(() => {
    let result = [...deliveries];

    if (appliedFilters.searchTerm) {
      result = result.filter((d) =>
        d.shopName
          .toLowerCase()
          .includes(appliedFilters.searchTerm.toLowerCase())
      );
    }
    if (appliedFilters.status !== "All") {
      result = result.filter((d) => d.status === appliedFilters.status);
    }
    const { min, max } = appliedFilters.priceRange;
    if (min !== "" && !isNaN(parseFloat(min))) {
      result = result.filter((d) => d.totalAmount >= parseFloat(min));
    }
    if (max !== "" && !isNaN(parseFloat(max))) {
      result = result.filter((d) => d.totalAmount <= parseFloat(max));
    }
    if (appliedFilters.dateFilter.value) {
      const filterDate = new Date(appliedFilters.dateFilter.value);
      const filterType = appliedFilters.dateFilter.type;
      result = result.filter((d) => {
        const orderDate = new Date(d.orderDate);
        if (filterType === "Year")
          return orderDate.getFullYear() === filterDate.getFullYear();
        if (filterType === "Month")
          return (
            orderDate.getFullYear() === filterDate.getFullYear() &&
            orderDate.getMonth() === filterDate.getMonth()
          );
        return (
          orderDate.getFullYear() === filterDate.getFullYear() &&
          orderDate.getMonth() === filterDate.getMonth() &&
          orderDate.getDate() === filterDate.getDate()
        );
      });
    }
    setFilteredDeliveries(result);
  }, [appliedFilters, deliveries]);

  const handleApplyFilters = (newFilters) => {
    setAppliedFilters(newFilters);
    if (isMobileFilterOpen) setMobileFilterOpen(false);
  };

  const handleResetFilters = (resetCallback) => {
    setAppliedFilters(INITIAL_FILTERS);
    if (resetCallback) resetCallback();
    if (isMobileFilterOpen) setMobileFilterOpen(false);
  };

  // --- SUB-COMPONENTS ---
  const DeliveryCard = React.memo(({ delivery, view }) => (
    <div
      className={`bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex flex-col animate-fade-in-up ${
        view === "list" ? "md:flex-row md:items-center" : ""
      }`}
    >
      <div className="flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-lg text-gray-800">
              {delivery.shopName}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <PhoneIcon />
              <span className="ml-2">{delivery.phone}</span>
            </div>
          </div>
          <ChevronRightIcon />
        </div>
        <div className="flex mt-4">
          <div className="flex flex-col items-center mr-4">
            {delivery.status === "Delivered" ? (
              <CheckCircleIcon />
            ) : (
              <PendingCircleIcon />
            )}
            <div className="w-px h-full border-l-2 border-dashed border-gray-300 my-1"></div>
            <CircleIcon />
          </div>
          <div className="flex-grow">
            <div className="flex justify-between items-baseline">
              <div>
                <p className="font-semibold text-gray-700">Order Date</p>
                <p className="text-sm text-gray-500">
                  {formatDate(delivery.orderDate)}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-700">Total Amount</p>
                <p className="text-lg font-bold text-gray-800">
                  ₹ {delivery.totalAmount}
                </p>
              </div>
            </div>
            <div className="mt-4">
              {delivery.deliveryDate ? (
                <>
                  <p className="font-semibold text-gray-700">Delivered On</p>
                  <p className="text-sm text-gray-500">
                    {formatDate(delivery.deliveryDate)}
                  </p>
                </>
              ) : (
                <p className="font-semibold text-yellow-600">
                  Pending Delivery
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {view === "list" && (
        <div className="w-px bg-gray-200 h-24 mx-6 hidden md:block"></div>
      )}
      <div
        className={`mt-4 md:mt-0 ${
          view === "list" ? "md:w-48" : ""
        } flex items-center justify-end`}
      >
        <p
          className={`font-bold text-lg ${
            delivery.status === "Delivered"
              ? "text-green-500"
              : "text-yellow-600"
          }`}
        >
          {delivery.status === "Delivered"
            ? "Delivered Successfully"
            : "Pending"}
        </p>
      </div>
    </div>
  ));

  const DateSelector = ({ onConfirm, onCancel, dateType }) => {
    const options = dateType === "Date" ? 3 : dateType === "Month" ? 2 : 1;
    const [day, setDay] = useState(new Date().getDate());
    const [month, setMonth] = useState(
      new Date().toLocaleString("default", { month: "long" })
    );
    const [year, setYear] = useState(new Date().getFullYear());

    const months = useMemo(
      () => [
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
      ],
      []
    );
    const daysInMonth = useMemo(
      () => new Date(year, months.indexOf(month) + 1, 0).getDate(),
      [month, year, months]
    );

    const handleScroll = (e, setter, value, range) => {
      e.preventDefault();
      const delta = Math.sign(e.deltaY);
      if (Array.isArray(range)) {
        const currentIndex = range.indexOf(value);
        const nextIndex = (currentIndex + delta + range.length) % range.length;
        setter(range[nextIndex]);
      } else {
        if (value + delta >= range.min && value + delta <= range.max) {
          setter((v) => v + delta);
        }
      }
    };

    const handleConfirm = () => {
      const selectedDate = new Date(year, months.indexOf(month), day);
      onConfirm(selectedDate);
    };

    return (
      <div className="bg-[#F8F9FD] p-3 rounded-xl border border-gray-200">
        <div
          className={`grid h-28 gap-2 ${options === 3 ? "grid-cols-3" : ""} ${
            options === 2 ? "grid-cols-2" : ""
          } ${options === 1 ? "grid-cols-1" : ""} text-center`}
        >
          {options === 3 && <div className="text-gray-500">Day</div>}
          {options >= 2 && <div className="text-gray-500">Month</div>}
          {options >= 1 && <div className="text-gray-500">Year</div>}

          {options === 3 && (
            <div
              onClick={() => setDay(day === 1 ? daysInMonth : day - 1)}
              className="font-light text-sm cursor-pointer rounded p-1"
            >
              {day === 1 ? daysInMonth : day - 1}
            </div>
          )}
          {options >= 2 && (
            <div
              onClick={() =>
                setMonth(months[(months.indexOf(month) + 11) % 12])
              }
              className="font-light text-sm cursor-pointer rounded p-1"
            >
              {months[(months.indexOf(month) + 11) % 12]}
            </div>
          )}
          {options >= 1 && (
            <div
              onClick={() => setYear(year - 1)}
              className="cursor-pointer text-sm font-light rounded p-1"
            >
              {year - 1}
            </div>
          )}

          {options === 3 && (
            <div
              onWheel={(e) =>
                handleScroll(e, setDay, day, { min: 1, max: daysInMonth })
              }
              className="cursor-pointer border-y-2 border-gray-300 flex items-center justify-center font-semibold"
            >
              {day}
            </div>
          )}
          {options >= 2 && (
            <div
              onWheel={(e) => handleScroll(e, setMonth, month, months)}
              className="cursor-pointer border-y-2 border-gray-300 flex items-center justify-center font-semibold"
            >
              {month}
            </div>
          )}
          {options >= 1 && (
            <div
              onWheel={(e) =>
                handleScroll(e, setYear, year, { min: 1970, max: 2100 })
              }
              className="cursor-pointer border-y-2 border-gray-300 flex items-center justify-center font-semibold"
            >
              {year}
            </div>
          )}

          {options === 3 && (
            <div
              onClick={() => setDay(day === daysInMonth ? 1 : day + 1)}
              className="font-light text-sm cursor-pointer rounded p-1"
            >
              {day === daysInMonth ? 1 : day + 1}
            </div>
          )}
          {options >= 2 && (
            <div
              onClick={() => setMonth(months[(months.indexOf(month) + 1) % 12])}
              className="font-light text-sm cursor-pointer rounded p-1"
            >
              {months[(months.indexOf(month) + 1) % 12]}
            </div>
          )}
          {options >= 1 && (
            <div
              onClick={() => setYear(year + 1)}
              className="font-light text-sm cursor-pointer rounded p-1"
            >
              {year + 1}
            </div>
          )}
        </div>
        <div className="flex w-full pt-3 justify-around">
          <button
            onClick={onCancel}
            className="px-4 py-1 text-white bg-[#f89320] hover:bg-[#f89320]/90 rounded"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-4 py-1 text-white bg-[#f89320] rounded hover:bg-[#f89320]/90"
          >
            Confirm
          </button>
        </div>
      </div>
    );
  };

  const FilterPanel = () => {
    const [localFilters, setLocalFilters] = useState(appliedFilters);
    const [isDateSelectorOpen, setDateSelectorOpen] = useState(false);

    const resetLocal = () => setLocalFilters(INITIAL_FILTERS);

    const handleDateConfirm = (date) => {
      setLocalFilters((prev) => ({
        ...prev,
        dateFilter: { ...prev.dateFilter, value: date },
      }));
      setDateSelectorOpen(false);
    };

    const clearDateFilter = () => {
      setLocalFilters((prev) => ({
        ...prev,
        dateFilter: { ...prev.dateFilter, value: null },
      }));
    };

    return (
      <div className="bg-white p-6 rounded-lg shadow-lg lg:shadow-none lg:bg-transparent lg:p-0 h-full flex flex-col">
        <h2 className="text-2xl mb-5">Filter</h2>

        <div className="mb-4 relative border-t-1 border-gray-200 pt-3 ">
          <label className="font-semibold text-gray-700 mb-2 block">Date</label>
          <div className="flex space-x-2 border border-gray-300 rounded-lg p-1">
            {["Date", "Month", "Year"].map((type) => (
              <button
                key={type}
                onClick={() =>
                  setLocalFilters((prev) => ({
                    ...prev,
                    dateFilter: { ...prev.dateFilter, type },
                  }))
                }
                className={`flex-1 py-2 text-sm rounded-md ${
                  localFilters.dateFilter.type === type
                    ? "bg-[#f89320] text-white"
                    : "bg-gray-100"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="mt-2">
            <button
              onClick={() => setDateSelectorOpen(true)}
              className="w-full text-left p-2 border border-gray-300 rounded-lg"
            >
              {localFilters.dateFilter.value
                ? new Date(localFilters.dateFilter.value).toLocaleDateString()
                : `Select ${localFilters.dateFilter.type}`}
            </button>
            {localFilters.dateFilter.value && (
              <button
                onClick={clearDateFilter}
                className="text-xs text-red-500 hover:underline mt-1"
              >
                Clear date
              </button>
            )}
          </div>
          {isDateSelectorOpen && (
            <div className="absolute z-10 top-full mt-2 w-full">
              <DateSelector
                onConfirm={handleDateConfirm}
                onCancel={() => setDateSelectorOpen(false)}
                dateType={localFilters.dateFilter.type}
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="font-semibold text-gray-700 mb-2 block">
            Status
          </label>
          <div className="flex space-x-2 border border-gray-300 rounded-lg p-1">
            {["All", "Delivered", "Pending"].map((status) => (
              <button
                key={status}
                onClick={() => setLocalFilters((prev) => ({ ...prev, status }))}
                className={`flex-1 py-2 text-sm rounded-md ${
                  localFilters.status === status
                    ? "bg-[#f89320] text-white"
                    : "bg-gray-100"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="font-semibold text-gray-700 mb-2 block">
            Price Range
          </label>
          <div className="flex space-x-2">
            <input
              type="number"
              placeholder="Min"
              value={localFilters.priceRange.min}
              onChange={(e) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  priceRange: { ...prev.priceRange, min: e.target.value },
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="Max"
              value={localFilters.priceRange.max}
              onChange={(e) =>
                setLocalFilters((prev) => ({
                  ...prev,
                  priceRange: { ...prev.priceRange, max: e.target.value },
                }))
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="mt-auto pt-5 flex gap-4 border-t border-gray-200">
          <button
            onClick={() => handleResetFilters(resetLocal)}
            className="w-full py-3 text-accent bg-white  flex-1 h-[50px] text-base  rounded-lg border border-accent hover:bg-gray-50"
          >
            Reset
          </button>
          <button
            onClick={() => handleApplyFilters(localFilters)}
            className="w-full py-3 bg-[#f89320] text-white flex-1 h-[50px] text-base  rounded-lg hover:bg-opacity-90"
          >
            Apply
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-[calc(100vh-65px)] p-4 font-sans bg-[#F6F6F6] text-gray-800">
      <main className="flex-1 flex overflow-hidden">
        <aside className="hidden bg-white rounded-2xl lg:block w-80 flex-shrink-0 p-8  border-r border-gray-200">
          <FilterPanel />
        </aside>

        <div className="flex flex-col p-4  w-full">
          <header className="flex items-center justify-between pl-4 pb-2 bg-[#F6F6F6]  flex-shrink-0">
            <h1 className="text-3xl font-bold">Delivery Status</h1>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={appliedFilters.searchTerm}
                  onChange={(e) =>
                    setAppliedFilters((prev) => ({
                      ...prev,
                      searchTerm: e.target.value,
                    }))
                  }
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f89320]"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <SearchIcon />
                </div>
              </div>
              <div className="p-1 bg-gray-100 rounded-lg flex space-x-1"> <button
                  onClick={() => setView("grid")}
                  className={`p-2 rounded-md ${
                    view === "grid" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <GridIcon />
                </button>
                <button
                  onClick={() => setView("list")}
                  className={`p-2 rounded-md ${
                    view === "list" ? "bg-white shadow-sm" : ""
                  }`}
                >
                  <ListIcon />
                </button>
               
              </div>
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="p-2 lg:hidden"
              >
                <FilterIcon />
              </button>
            </div>
          </header>

          <div className="flex-1 relative">
            <section className="absolute inset-0 p-4 overflow-y-auto scrollbar-thin">
              <div
                className={
                  view === "grid"
                    ? "grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                }
              >
                {filteredDeliveries.length > 0 ? (
                  filteredDeliveries.map((d) => (
                    <DeliveryCard key={d.id} delivery={d} view={view} />
                  ))
                ) : (
                  <p className="col-span-full text-center text-gray-500 mt-10">
                    No deliveries found matching your criteria. 😟
                  </p>
                )}
              </div>
            </section>
          </div>
        </div>
      </main>

      {isMobileFilterOpen && (
        <div
          className="fixed inset-0  z-300 backdrop-blur-sm bg-opacity-50 lg:hidden"
          onClick={() => setMobileFilterOpen(false)}
        >
          <div
            className="fixed bottom-0 left-0 right-0 max-h-[80vh] overflow-y-auto bg-white p-4 rounded-t-2xl z-50 animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            <FilterPanel />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        .scrollbar-thin {
          scrollbar-width: thin;
          scrollbar-color: #f89320 #e5e7eb;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #f89320;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #e88418;
        }
      `}</style>
    </div>
  );
}
