import {
  FilterIcon,
  GridIcon,
  ListIcon,
  SearchIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  XIcon,
} from "lucide-react";
import React, { useState, useMemo, useEffect, useCallback, memo } from "react";
import { FaArrowRight } from "react-icons/fa";

const Card = memo(({ children, className = "" }) => (
  <div
    className={`bg-white rounded-2xl shadow-sm border border-gray-200 ${className}`}
  >
    {children}
  </div>
));

const CardContent = memo(({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
));

const Button = memo(
  ({
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
        className={`${baseStyle} ${variants[variant]} ${sizes[size]} ${className} cursor-pointer`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

const Input = memo(({ className, ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md  bg-transparent px-3 py-2 text-sm  placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
));

const Separator = memo(({ className }) => (
  <hr className={`border-gray-200 ${className}`} />
));

// Memoized FilterButton component
const FilterButton = memo(
  ({ isSelected, onClick, children, className = "" }) => (
    <button
      onClick={onClick}
      className={`
    rounded-lg px-3 py-2 text-sm font-medium transition-all duration-200 transform hover:scale-105
    ${
      isSelected
        ? "bg-[#f89320] text-white shadow-md"
        : "bg-white text-black border border-gray-200 hover:bg-gray-50 hover:border-[#f89320]"
    } ${className}
    `}
    >
      {children}
    </button>
  )
);

// Memoized ColorButton component
const ColorButton = memo(({ color, isSelected, onClick, label }) => (
  <button
    onClick={onClick}
    className={`
    w-10 h-10 rounded-full border-2 transition-all duration-200 transform hover:scale-110
    ${isSelected ? "border-[#f89320] shadow-lg" : "border-gray-300"}
    `}
    style={{ backgroundColor: color.color }}
    title={color.label}
  >
    {isSelected && (
      <CheckIcon
        className="w-5 h-5 mx-auto"
        style={{
          color:
            color.color === "#FFFFFF" || color.color === "#94A3B8"
              ? "#000000"
              : "#FFFFFF",
        }}
      />
    )}
  </button>
));

// Memoized FilterSection component
const FilterSection = memo(
  ({ title, children, sectionKey, expandedSections, toggleSection }) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <h3 className="font-medium text-lg font-['Montserrat',Helvetica]">
          {title}
        </h3>
        {expandedSections[sectionKey] ? (
          <ChevronUpIcon className="w-5 h-5 text-gray-600" />
        ) : (
          <ChevronDownIcon className="w-5 h-5 text-gray-600" />
        )}
      </button>
      {expandedSections[sectionKey] && (
        <div className="mt-3 px-2 animate-fadeIn">{children}</div>
      )}
    </div>
  )
);

// Memoized ProductCard component
const ProductCard = memo(({ product, viewMode, onAccept, onReject }) => {
  const isList = viewMode === "list";

  const handleAccept = useCallback(() => {
    onAccept(product.id);
  }, [product.id, onAccept]);

  const handleReject = useCallback(() => {
    onReject(product.id);
  }, [product.id, onReject]);

  const commonProductContent = (
    <>
      <div className="flex-1">
        <h3
          className={`font-semibold ${
            isList ? "text-lg" : "text-xl"
          } text-gray-900 mb-2 line-clamp-2`}
        >
          {product.name}
        </h3>
        <p
          className={`text-gray-600 ${
            isList ? "text-sm mb-3" : "text-sm mb-4"
          } line-clamp-3`}
        >
          {product.description}
        </p>
      </div>

      <div className="flex items-center justify-between mb-4 mt-auto">
        <div
          className={`font-bold ${
            isList ? "text-lg" : "text-2xl"
          } text-[#f89320]`}
        >
          ₹{product.price.toLocaleString()}
        </div>
        <div className="flex items-center">
          <span className="text-yellow-500">★</span>
          <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
        </div>
      </div>

      <div className={`flex ${isList ? "flex-row gap-2" : "gap-2"}`}>
        <Button
          size="sm"
          className="flex-1/2 bg-[#f89320] hover:bg-[#e88418] text-white transition-all duration-200 transform hover:scale-105 text-xs"
        >
          View Product  
          <FaArrowRight/>
        </Button>
        
      </div>
    </>
  );

  return (
    <Card className="rounded-xl border-gray-200 hover:shadow-xl transition-all duration-300 transform  h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="relative mb-4">
          <img
            className="w-full h-48 rounded-lg object-contain"
            alt={product.name}
            src={product.image}
          />
          <div
            className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium ${
              product.inStock
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </div>
        </div>
        {commonProductContent}
      </CardContent>
    </Card>
  );
});

// Memoized ProductCardList component
const ProductCardList = memo(
  ({ product, onAccept, onReject, brandOptions, categoryOptions }) => {
    const handleAccept = useCallback(() => {
      onAccept(product.id);
    }, [product.id, onAccept]);

    const handleReject = useCallback(() => {
      onReject(product.id);
    }, [product.id, onReject]);

    return (
      <Card className="rounded-xl border-gray-200  hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <img
              className="w-20 h-20 rounded-lg object-scale-down"
              alt={product.name}
              src={product.image}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-lg text-gray-900 truncate">
                  {product.name}
                </h3>
                <div className="text-right">
                  <div className="font-bold text-xl text-[#f89320]">
                    ₹{product.price.toLocaleString()}
                  </div>
                  <div
                    className={`text-sm ${
                      product.inStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {brandOptions.find((b) => b.value === product.brand)?.label}
                  </span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                    {
                      categoryOptions.find((c) => c.value === product.category)
                        ?.label
                    }
                  </span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-[#f89320] hover:bg-[#e88418] text-white px-3 py-1 text-xs"
                  >
                    View
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleAccept}
                    className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 text-xs"
                  >
                    Accept
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleReject}
                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 text-xs"
                  >
                    Reject
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

const OrderRequest = () => {
  const [filters, setFilters] = useState({
    category: null,
    brand: null,
    priceMin: "",
    priceMax: "",
    color: null,
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [isMobile, setIsMobile] = useState(false);

  const [expandedSections, setExpandedSections] = useState({
    category: true,
    brand: true,
    price: true,
    color: true,
  });

  // Memoize static data to prevent recreation
  const allProducts = useMemo(
    () => [
      {
        id: 1,
        name: "iPhone 15 Pro",
        category: "mobile",
        brand: "apple",
        price: 60000,
        color: "black",
        image:
          "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300787_0_hezn4b.png?tr=w-600",
        description: "Latest iPhone with advanced features",
        inStock: true,
        rating: 4.8,
      },
      {
        id: 2,
        name: "Galaxy S24 Ultra",
        category: "mobile",
        brand: "samsung",
        price: 55000,
        color: "blue",
        image:
          "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300787_0_hezn4b.png?tr=w-600",
        description: "Premium Samsung flagship phone",
        inStock: true,
        rating: 4.7,
      },
      {
        id: 3,
        name: "AirPods Pro",
        category: "headset",
        brand: "apple",
        price: 25000,
        color: "white",
        image:
          "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300787_0_hezn4b.png?tr=w-600",
        description: "Wireless earbuds with noise cancellation",
        inStock: false,
        rating: 4.6,
      },
      {
        id: 4,
        name: "Mi 13 Pro",
        category: "mobile",
        brand: "xiaomi",
        price: 45000,
        color: "green",
        image:
          "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300787_0_hezn4b.png?tr=w-600",
        description: "High-performance Xiaomi smartphone",
        inStock: true,
        rating: 4.5,
      },
      {
        id: 5,
        name: "Sony WH-1000XM5",
        category: "headset",
        brand: "sony",
        price: 30000,
        color: "black",
        image:
          "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300787_0_hezn4b.png?tr=w-600",
        description: "Premium noise-canceling headphones",
        inStock: true,
        rating: 4.9,
      },
      {
        id: 6,
        name: "MacBook Pro M3",
        category: "laptop",
        brand: "apple",
        price: 120000,
        color: "silver",
        image:
          "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/300787_0_hezn4b.png?tr=w-600",
        description: "Professional laptop with M3 chip",
        inStock: true,
        rating: 4.8,
      },
    ],
    []
  );

  const categoryOptions = useMemo(
    () => [
      { value: "mobile", label: "Mobile" },
      { value: "headset", label: "Headset" },
      { value: "laptop", label: "Laptop" },
      { value: "tablet", label: "Tablet" },
    ],
    []
  );

  const brandOptions = useMemo(
    () => [
      { value: "apple", label: "Apple" },
      { value: "samsung", label: "Samsung" },
      { value: "xiaomi", label: "Xiaomi" },
      { value: "sony", label: "Sony" },
      { value: "oneplus", label: "OnePlus" },
    ],
    []
  );

  const colorOptions = useMemo(
    () => [
      { value: "black", label: "Black", color: "#000000" },
      { value: "white", label: "White", color: "#FFFFFF" },
      { value: "blue", label: "Blue", color: "#3B82F6" },
      { value: "green", label: "Green", color: "#10B981" },
      { value: "red", label: "Red", color: "#EF4444" },
      { value: "silver", label: "Silver", color: "#94A3B8" },
    ],
    []
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setViewMode("list");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoize filtered products with proper dependencies
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // Search filter
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        if (
          !product.name.toLowerCase().includes(searchLower) &&
          !product.description.toLowerCase().includes(searchLower) &&
          !product.brand.toLowerCase().includes(searchLower)
        ) {
          return false;
        }
      }

      if (filters.category && product.category !== filters.category) {
        return false;
      }

      if (filters.brand && product.brand !== filters.brand) {
        return false;
      }

      if (filters.priceMin && product.price < parseInt(filters.priceMin)) {
        return false;
      }
      if (filters.priceMax && product.price > parseInt(filters.priceMax)) {
        return false;
      }

      if (filters.color && product.color !== filters.color) {
        return false;
      }

      return true;
    });
  }, [allProducts, filters, searchQuery]);

  // Memoize callback functions to prevent recreation
  const handleFilterChange = useCallback((filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType] === value ? null : value,
    }));
  }, []);

  const handlePriceChange = useCallback((type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      category: null,
      brand: null,
      priceMin: "",
      priceMax: "",
      color: null,
    });
  }, []);

  const toggleSection = useCallback((section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  const handleSearchChange = useCallback((e) => {
    setSearchQuery(e.target.value);
  }, []);

  const handleViewModeChange = useCallback((mode) => {
    setViewMode(mode);
  }, []);

  const handleMobileFilterToggle = useCallback(() => {
    setShowMobileFilter((prev) => !prev);
  }, []);

  return (
    <div className="bg-[#f6f6f6] flex h-[calc(100vh-65px)] overflow-hidden justify-center w-full ">
      <div className="bg-[#f6f6f6] h-full w-full relative flex flex-col">
        <main className=" p-4 flex flex-col flex-1 ">
          <div className="flex flex-col lg:flex-row gap-6 h-full">
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block w-1/5 h-full">
              <Card className="h-full rounded-xl shadow-lg border-0 flex flex-col sticky top-6">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-2">
                    <h2 className="font-medium text-2xl font-['Montserrat',Helvetica]">
                      Filters
                    </h2>
                  </div>

                  <Separator className="mb-4" />

                  <div className="flex-col scrollbar-thin  scrollbar-track-gray-100  max-h-[calc(100vh-280px)]  overflow-y-auto">
                    {/* Category Filter */}
                    <FilterSection
                      title="Category"
                      sectionKey="category"
                      expandedSections={expandedSections}
                      toggleSection={toggleSection}
                    >
                      <div className="flex flex-wrap gap-2">
                        {categoryOptions.map((option) => (
                          <FilterButton
                            key={option.value}
                            isSelected={filters.category === option.value}
                            onClick={() =>
                              handleFilterChange("category", option.value)
                            }
                          >
                            {option.label}
                          </FilterButton>
                        ))}
                      </div>
                    </FilterSection>

                    {/* Brand Filter */}
                    <FilterSection
                      title="Brand"
                      sectionKey="brand"
                      expandedSections={expandedSections}
                      toggleSection={toggleSection}
                    >
                      <div className="flex flex-wrap gap-2">
                        {brandOptions.map((option) => (
                          <FilterButton
                            key={option.value}
                            isSelected={filters.brand === option.value}
                            onClick={() =>
                              handleFilterChange("brand", option.value)
                            }
                          >
                            {option.label}
                          </FilterButton>
                        ))}
                      </div>
                    </FilterSection>

                    {/* Price Range Filter */}
                    <FilterSection
                      title="Price Range"
                      sectionKey="price"
                      expandedSections={expandedSections}
                      toggleSection={toggleSection}
                    >
                      <div className="flex-wrap space-y-3">
                        <div className="flex gap-2">
                          <Input
                            type="number"
                            placeholder="Min"
                            value={filters.priceMin}
                            onChange={(e) =>
                              handlePriceChange("priceMin", e.target.value)
                            }
                            className="flex-1 h-10"
                          />
                          <Input
                            type="number"
                            placeholder="Max"
                            value={filters.priceMax}
                            onChange={(e) =>
                              handlePriceChange("priceMax", e.target.value)
                            }
                            className="flex-1 h-10"
                          />
                        </div>
                        <div className="text-xs text-gray-500">
                          Enter price range in ₹
                        </div>
                      </div>
                    </FilterSection>

                    {/* Color Filter */}
                    <FilterSection
                      title="Color"
                      sectionKey="color"
                      expandedSections={expandedSections}
                      toggleSection={toggleSection}
                    >
                      <div className="flex flex-wrap gap-3">
                        {colorOptions.map((color) => (
                          <ColorButton
                            key={color.value}
                            color={color}
                            isSelected={filters.color === color.value}
                            onClick={() =>
                              handleFilterChange("color", color.value)
                            }
                            label={color.label}
                          />
                        ))}
                      </div>
                    </FilterSection>
                  </div>

                  <div className="mt-auto pt-4 flex gap-3">
                    <Button
                      variant="outline"
                      onClick={resetFilters}
                      className="flex-1 h-12 rounded-lg border-[#f89320] text-[#f89320] hover:bg-[#f89320]/10 transition-all duration-200"
                    >
                      Reset
                    </Button>
                    <Button className="flex-1 h-12 rounded-lg bg-[#f89320] hover:bg-[#e88418] text-white transition-all duration-200 transform hover:scale-105">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Container */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-4">
                <div className="flex flex-row justify-between items-center sm:items-center">
                  <h1 className="mr-5 font-['Montserrat',Helvetica] text-2xl text-black ">
                    Order Request
                  </h1>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <div className="relative">
                    <Input
                      className=" bg-white rounded-[44px] font-['Montserrat',Helvetica] text-base lg:text-lg"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <SearchIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#757575] w-5 h-5" />
                  </div>
                  <Button
                    variant={viewMode === "grid" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleViewModeChange("grid")}
                    className={`transition-all duration-200 ${
                      viewMode === "grid"
                        ? "bg-[#f89320] hover:bg-[#e88418]"
                        : "border-[#f89320] text-[#f89320] hover:bg-[#f89320] hover:text-white"
                    }`}
                  >
                    <GridIcon className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleViewModeChange("list")}
                    className={`transition-all duration-200 ${
                      viewMode === "list"
                        ? "bg-[#f89320] hover:bg-[#e88418]"
                        : "border-[#f89320] text-[#f89320] hover:bg-[#f89320] hover:text-white"
                    }`}
                  >
                    <ListIcon className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div className="lg:hidden mb-4 flex justify-end">
                <Button
                  onClick={handleMobileFilterToggle}
                  className="bg-[#f89320] hover:bg-[#e88418] text-white rounded-lg transition-all duration-200"
                >
                  <FilterIcon className="w-4 h-4 mr-2" />
                  Filter
                </Button>
              </div>

              <div
                className={`
                overflow-y-auto max-h-[calc(100vh-300px)] lg:max-h-[calc(100vh-200px)]
                ${
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "flex flex-col gap-4"
                }
                transition-all duration-300 ease-in-out
                scrollbar-thin scrollbar-thumb-[#f89320] scrollbar-track-gray-100
                `}
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="transform transition-all duration-300 "
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "fadeInUp 0.6s ease-out forwards",
                      }}
                    >
                      {viewMode === "grid" ? (
                        <ProductCard
                          product={product}
                          viewMode={viewMode}
                         
                        />
                      ) : (
                        <ProductCardList
                          product={product}
                        
                          brandOptions={brandOptions}
                          categoryOptions={categoryOptions}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-medium text-gray-600 mb-2">
                      No products found
                    </h3>
                    <p className="text-gray-500">
                      Try adjusting your filters or search terms
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* Mobile Filter Modal */}
        {showMobileFilter && (
          <div className="lg:hidden fixed inset-0 bg-black/30 bg-opacity-50 z-50 flex items-end">
            <div className="bg-white w-full max-h-[85vh] rounded-t-xl transform transition-transform duration-300 ease-out animate-slide-up">
              <div className="p-4 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">Filter Products</h3>
                  <Button
                    variant="ghost"
                    onClick={() => setShowMobileFilter(false)}
                    className="text-gray-500"
                  >
                    <XIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="overflow-y-auto max-h-[65vh] p-4 space-y-4">
                <FilterSection
                  title="Category"
                  sectionKey="category"
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                >
                  <div className="flex gap-2">
                    {categoryOptions.map((option) => (
                      <FilterButton
                        key={option.value}
                        isSelected={filters.category === option.value}
                        onClick={() =>
                          handleFilterChange("category", option.value)
                        }
                      >
                        {option.label}
                      </FilterButton>
                    ))}
                  </div>
                </FilterSection>

                <FilterSection
                  title="Brand"
                  sectionKey="brand"
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                >
                  <div className="flex gap-2">
                    {brandOptions.map((option) => (
                      <FilterButton
                        key={option.value}
                        isSelected={filters.brand === option.value}
                        onClick={() =>
                          handleFilterChange("brand", option.value)
                        }
                      >
                        {option.label}
                      </FilterButton>
                    ))}
                  </div>
                </FilterSection>

                <FilterSection
                  title="Price Range"
                  sectionKey="price"
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                >
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <Input
                        type="number"
                        placeholder="Min"
                        value={filters.priceMin}
                        onChange={(e) =>
                          handlePriceChange("priceMin", e.target.value)
                        }
                        className="flex-1 h-10"
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        value={filters.priceMax}
                        onChange={(e) =>
                          handlePriceChange("priceMax", e.target.value)
                        }
                        className="flex-1 h-10"
                      />
                    </div>
                  </div>
                </FilterSection>

                <FilterSection
                  title="Color"
                  sectionKey="color"
                  expandedSections={expandedSections}
                  toggleSection={toggleSection}
                >
                  <div className="flex flex-wrap gap-3">
                    {colorOptions.map((color) => (
                      <ColorButton
                        key={color.value}
                        color={color}
                        isSelected={filters.color === color.value}
                        onClick={() => handleFilterChange("color", color.value)}
                        label={color.label}
                      />
                    ))}
                  </div>
                </FilterSection>
              </div>

              <div className="p-4 border-t flex gap-3">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="flex-1 h-12 rounded-lg border-[#f89320] text-[#f89320]"
                >
                  Reset
                </Button>
                <Button
                  onClick={() => setShowMobileFilter(false)}
                  className="flex-1 h-12 rounded-lg bg-[#f89320] hover:bg-[#e88418] text-white"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .scrollbar-thin {
          scrollbar-width: thin;
        }

        .scrollbar-thumb-orange-400 {
          scrollbar-color: #f89320 #f1f5f9;
        }

        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb {
          background: #f89320;
          border-radius: 3px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e88418;
        }
      `}</style>
    </div>
  );
};

export default OrderRequest;
