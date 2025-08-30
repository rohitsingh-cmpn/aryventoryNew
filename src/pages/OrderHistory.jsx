import {
  FilterIcon,
  GridIcon,
  ListIcon,
  SearchIcon,
  ArrowRightIcon,
  CheckIcon,
  ShareIcon,
  XIcon,
} from "lucide-react";
import React, { useState, useMemo } from "react";

const Card = ({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-sm border border-gray-200 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const baseStyle =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";

  const variants = {
    default: "bg-[#f89320] text-white hover:bg-[#f89320]/90",
    outline:
      "border border-[#f89320] text-[#f89320] bg-transparent hover:bg-[#f89320]/10",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
    icon: "h-10 w-10",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className, ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Separator = ({ className }) => (
  <hr className={`border-gray-200 ${className}`} />
);

const OrderCard = ({ order, viewMode = "grid" }) => {
  const getStatusClasses = (status) => {
    switch (status.toLowerCase()) {
      case "approved":
        return "text-[#38c468] bg-[#38c468]/10";
      case "rejected":
        return "text-[#ef4444] bg-[#ef4444]/10";
      case "expired":
        return "text-[#f59e0b] bg-[#f59e0b]/10";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const StatusBadge = ({ status }) => (
    <div
      className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getStatusClasses(
        status
      )}`}
    >
      {status === "approved" && <CheckIcon className="w-4 h-4" />}
      {status === "rejected" && <XIcon className="w-4 h-4" />}
      {status === "expired" && (
        <div className="w-3 h-3 rounded-full bg-current" />
      )}
      <span>{status}</span>
    </div>
  );

  // --- List View ---
  if (viewMode === "list") {
    return (
      <Card className="rounded-[20px] hover:shadow-xl transition-all duration-300 w-full">
        <CardContent className="p-4">
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-4">
            <img
              src={order.image}
              alt={order.customer}
              className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
            />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center mb-1">
                <p className="text-lg font-bold text-gray-800 truncate">
                  {order.customer}
                </p>
                <p className="text-lg font-bold text-gray-900">{order.price}</p>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="text-sm text-gray-500">{order.phone}</p>
                <p className="text-sm text-gray-500">Qty: {order.quantity}</p>
              </div>
              <div className="flex justify-between items-center">
                <StatusBadge status={order.status} />
                <p className="text-sm text-gray-500"> {order.requestedDate}</p>
              </div>
            </div>
            <div className="flex sm:flex-col lg:flex-row gap-2 w-full sm:w-auto justify-end">
              <Button size="sm" className="w-full sm:w-auto">
                <span className="font-medium">View</span>
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
              <Button size="icon" variant="outline">
                <ShareIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  // --- Grid View (Default) ---
  return (
    <Card className="rounded-[20px] hover:shadow-xl transition-all duration-300 h-full flex flex-col">
      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <StatusBadge status={order.status} />
          <div className="text-right">
            <p className="font-bold text-2xl text-gray-900">{order.price}</p>
            <p className="text-sm text-gray-500 mt-1">Qty: {order.quantity}</p>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <img
            src={order.image}
            alt={order.customer}
            className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-xl font-bold text-gray-800 truncate">
              {order.customer}
            </p>
            <p className="text-base text-gray-500 mt-1">{order.phone}</p>
          </div>
        </div>

        <div className="flex-1 mb-4 space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-400">Address</p>
            <p className="text-base text-gray-700 line-clamp-2">
              {order.address}
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-400">Requested On</p>
            <p className="text-base text-gray-700">{order.requestedDate}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <Button className="flex-1 py-3 h-auto text-base">
            <span className="font-medium">View Product</span>
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Button>
          <Button
            size="icon"
            variant="outline"
            className="h-auto aspect-square py-3"
          >
            <ShareIcon className="w-5 h-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FilterComponent = ({
  initialFilters,
  onFilterChange,
  onReset,
  isMobile = false,
  onClose,
}) => {
  const [filters, setFilters] = useState(initialFilters);

  const currentYear = new Date().getFullYear();
  const dateOptions = [
    { value: "", label: "Any Day" },
    ...Array.from({ length: 31 }, (_, i) => ({
      value: i + 1,
      label: `${i + 1}`,
    })),
  ];
  const monthOptions = [
    { value: "", label: "Any Month" },
    { value: 1, label: "Jan" },
    { value: 2, label: "Feb" },
    { value: 3, label: "Mar" },
    { value: 4, label: "Apr" },
    { value: 5, label: "May" },
    { value: 6, label: "Jun" },
    { value: 7, label: "Jul" },
    { value: 8, label: "Aug" },
    { value: 9, label: "Sep" },
    { value: 10, label: "Oct" },
    { value: 11, label: "Nov" },
    { value: 12, label: "Dec" },
  ];
  const yearOptions = [
    { value: "", label: "Any Year" },
    ...Array.from({ length: 11 }, (_, i) => ({
      value: currentYear - 5 + i,
      label: `${currentYear - 5 + i}`,
    })),
  ];
  const statusOptions = ["Approved", "Rejected", "Expired"];

  const handleSelectChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value === "" ? null : parseInt(value),
    }));
  };

  const handleStatusClick = (status) => {
    setFilters((prev) => ({
      ...prev,
      status: prev.status === status ? null : status,
    }));
  };

  const applyFilters = () => {
    onFilterChange(filters);
    if (isMobile && onClose) onClose();
  };

  const resetFilters = () => {
    const freshFilters = { date: null, month: null, year: null, status: null };
    setFilters(freshFilters);
    onReset();
    if (isMobile && onClose) onClose();
  };

  const SelectGroup = ({ label, value, options, onChange }) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-500 mb-2">
        {label}
      </label>
      <select
        value={value || ""}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#f89320] focus:border-[#f89320]"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <Card className="w-full  h-[calc(100vh-65px)] rounded-2xl overflow-hidden shadow-lg border-0 flex flex-col overflow-y-auto">
      <CardContent className="p-5 flex-1 flex flex-col">
        <div className="mb-5">
          <h2 className="text-2xl">Filters</h2>
        </div>
        <Separator className="mb-6" />

        {/* Scrollable Filter Options */}
        <div className="flex-1 overflow-y-auto pr-2 -mr-2 h-full">
          <div className="flex justify-between ">
            <SelectGroup
              label="Date"
              value={filters.date}
              options={dateOptions}
              onChange={(e) => handleSelectChange("date", e.target.value)}
            />
            <SelectGroup
              label="Month"
              value={filters.month}
              options={monthOptions}
              onChange={(e) => handleSelectChange("month", e.target.value)}
            />
            <SelectGroup
              label="Year"
              value={filters.year}
              options={yearOptions}
              onChange={(e) => handleSelectChange("year", e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-500 mb-2">
              Status
            </label>
            <div className="flex flex-wrap gap-2">
              {statusOptions.map((opt) => (
                <Button
                  key={opt}
                  variant={filters.status === opt ? "default" : "outline"}
                  onClick={() => handleStatusClick(opt)}
                  className="flex-1 text-center"
                >
                  {opt}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Sticky Bottom Buttons */}
        <div className="mt-auto pt-5 flex gap-4 border-t border-gray-200">
          <Button
            variant="outline"
            onClick={resetFilters}
            className="flex-1 h-[50px] text-base"
          >
            Reset
          </Button>
          <Button
            onClick={applyFilters}
            className="flex-1 h-[50px] text-base transform hover:scale-105"
          >
            Apply
          </Button>
        </div>
      </CardContent>
    </Card>
  );

};

const OrderHistory = () => {
  const [filters, setFilters] = useState({
    date: null,
    month: null,
    year: null,
    status: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [viewMode, setViewMode] = useState("grid"); // 'grid' or 'list'

  const allOrders = [
    {
      id: 1,
      status: "Approved",
      price: "₹ 60,000",
      quantity: 20,
      customer: "JK Paradise",
      phone: "9594665866",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
      address: "43/D4 Sai Krupa Society, Malwani, Malad West",
      requestedDate: "01-07-2025",
      dateObj: new Date(2025, 6, 1),
    },
    {
      id: 2,
      status: "Rejected",
      price: "₹ 45,000",
      quantity: 15,
      customer: "Bharat Mahal",
      phone: "9922916988",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
      address: "Malwani Mahada, Mumbai",
      requestedDate: "15-06-2025",
      dateObj: new Date(2025, 5, 15),
    },
    {
      id: 3,
      status: "Expired",
      price: "₹ 75,000",
      quantity: 30,
      customer: "Tech Solutions",
      phone: "9876543210",
      image:
        "https://images.unsplash.com/photo-1540574163024-5735f30345f5?w=400&q=80",
      address: "Andheri East, Mumbai",
      requestedDate: "20-05-2025",
      dateObj: new Date(2025, 4, 20),
    },
    {
      id: 4,
      status: "Approved",
      price: "₹ 90,000",
      quantity: 25,
      customer: "Digital Hub",
      phone: "9123456789",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088c209a14b?w=400&q=80",
      address: "Bandra West, Mumbai",
      requestedDate: "10-07-2025",
      dateObj: new Date(2025, 6, 10),
    },
    {
      id: 5,
      status: "Approved",
      price: "₹ 1,20,000",
      quantity: 40,
      customer: "Greenwood Furnishings",
      phone: "9820098200",
      image:
        "https://images.unsplash.com/photo-1567016432779-1fee749b5a45?w=400&q=80",
      address: "Powai, Hiranandani Gardens",
      requestedDate: "25-07-2025",
      dateObj: new Date(2025, 6, 25),
    },
  ];

  const filteredOrders = useMemo(() => {
    return allOrders.filter((order) => {
      const searchLower = searchQuery.toLowerCase();
      if (
        searchQuery &&
        !order.customer.toLowerCase().includes(searchLower) &&
        !order.phone.includes(searchQuery) &&
        !order.address.toLowerCase().includes(searchLower)
      ) {
        return false;
      }
      if (
        filters.status &&
        order.status.toLowerCase() !== filters.status.toLowerCase()
      )
        return false;
      if (filters.date && order.dateObj.getDate() !== filters.date)
        return false;
      if (filters.month && order.dateObj.getMonth() + 1 !== filters.month)
        return false;
      if (filters.year && order.dateObj.getFullYear() !== filters.year)
        return false;
      return true;
    });
  }, [allOrders, filters, searchQuery]);

  const handleFilterChange = (newFilters) => setFilters(newFilters);

  const resetFilters = () =>
    setFilters({ date: null, month: null, year: null, status: null });

  return (
    <div className="flex h-[calc(100vh-57px)]  bg-[#f7f8fa] w-full overflow-y-auto ">
      {/* Main Content */}
      <main className="flex-1 p-4 ">
        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-5 h-[calc(100vh-px)]">
          {/* Desktop Filter Sidebar (Static) */}
          <aside className="hidden lg:block w-1/3 xl:w-1/4 h-full">
            <FilterComponent
              initialFilters={filters}
              onFilterChange={handleFilterChange}
              onReset={resetFilters}
            />
          </aside>

          {/* Cards Container */}
          <div className="flex-1 h-full flex flex-col">
            {/* Mobile Filter Button & View Toggle */}
            <div className="flex justify-between items-center mb-4">
              {/* Search and Header */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-2xl text-gray-800">
                  Order History ({filteredOrders.length})
                </h2>
                {/* <div className="relative w-full sm:w-auto sm:max-w-xs">
                        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input 
                            placeholder="Search by name, phone, address..." 
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 h-11"
                        />
                    </div> */}
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <div className="lg:hidden">
                  <Button onClick={() => setShowMobileFilter(true)}>
                    <FilterIcon className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                </div>
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <GridIcon className="w-5 h-5" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <ListIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Cards Grid/List - Scrollable */}
            <div
              className={`overflow-y-auto flex pr-2 -mr-2 scrollbar-thin scrollbar-thumb-[] scrollbar-track-gray-100
                ${
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                }
            `}
            >
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order, index) => (
                  <div
                    key={order.id}
                    className="transform transition-all duration-300 "
                    style={{
                      animation: "fadeInUp 0.5s ease-out forwards",
                      animationDelay: `${index * 80}ms`,
                      opacity: 0,
                    }}
                  >
                    <OrderCard order={order} viewMode={viewMode} />
                  </div>
                ))
              ) : (
                <div className="col-span-full flex flex-col items-center justify-center text-center py-12 h-full">
                  <div className="text-6xl mb-4">📦</div>
                  <h3 className="text-2xl font-semibold text-gray-700">
                    No Orders Found
                  </h3>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your filters or search terms.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      {/* Mobile Filter Modal */}
      {showMobileFilter && (
        <div className="lg:hidden fixed inset-0  backdrop-blur-sm bg-white/30 bg-opacity-60 z-500 flex items-end">
          <div className="bg-white w-full max-h-[85vh] rounded-t-2xl transform transition-transform duration-300 ease-out animate-slide-up flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="text-lg font-bold">Filter Orders</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowMobileFilter(false)}
                className="text-gray-500 rounded-full"
              >
                ✕
              </Button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <FilterComponent
                initialFilters={filters}
                onFilterChange={handleFilterChange}
                onReset={resetFilters}
                onClose={() => setShowMobileFilter(false)}
                isMobile={true}
              />
            </div>
          </div>
        </div>
      )}
      {/* Inline Styles for Animations */}
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
          scrollbar-color: #e5e7eb;
        }
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb {
          background: ;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: ;
        }
      `}</style>
    </div>
  );
};

export default OrderHistory;
