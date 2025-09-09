import {
  FilterIcon,
  GridIcon,
  ListIcon,
  SearchIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon,
  XIcon,
  ChevronRight,
} from "lucide-react";
import React, { useState, useMemo, useEffect, useCallback, memo, use } from "react";
import { Navigate ,useNavigate } from "react-router-dom";

// Responsive Card component
const Card = memo(({ children, className = "" }) => (
  <div
    className={`bg-white rounded-xl shadow-sm border border-gray-200 ${className}`}
    
  >
    {children}
  </div>
));

// Responsive CardContent component
const CardContent = memo(({ children, className = "" }) => (
  <div className={`p-3 md:p-6 ${className}`}>{children}</div>
));

// Responsive Button component
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
      default: "h-9 md:h-10 py-1 md:py-2 px-3 md:px-4",
      sm: "h-8 md:h-9 px-2 md:px-3 rounded-md text-xs md:text-sm",
      lg: "h-10 md:h-11 px-6 md:px-8 rounded-md",
      icon: "h-8 md:h-10 w-8 md:w-10",
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

// Responsive Input component
const Input = memo(({ className, ...props }) => (
  <input
    className={`flex h-9 md:h-10 w-full rounded-md bg-transparent px-3 py-2 text-sm md:text-base placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
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
    rounded-lg px-2 md:px-3 py-1 md:py-2 text-xs md:text-sm font-medium transition-all duration-200 transform hover:scale-105
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
    w-8 h-8 md:w-10 md:h-10 rounded-full border-2 transition-all duration-200 transform hover:scale-110
    ${isSelected ? "border-[#f89320] shadow-lg" : "border-gray-300"}
    `}
    style={{ backgroundColor: color.color }}
    title={color.label}
  >
    {isSelected && (
      <CheckIcon
        className="w-4 h-4 md:w-5 md:h-5 mx-auto"
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
    <div className="mb-3 md:mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="w-full flex items-center justify-between p-2 md:p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      >
        <h3 className="font-medium text-base md:text-lg font-['Montserrat',Helvetica]">
          {title}
        </h3>
        {expandedSections[sectionKey] ? (
          <ChevronUpIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-600" />
        )}
      </button>
      {expandedSections[sectionKey] && (
        <div className="mt-2 md:mt-3 px-1 md:px-2 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  )
);

// Memoized ProductCard component
const ProductCard = memo(({ product, viewMode, onAccept, onReject,onClick }) => {
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
        <div className="flex justify-between mb-1 md:mb-2">
          <h3
            className={`font-semibold ${
              isList ? "text-base md:text-lg" : "text-lg md:text-xl"
            } text-gray-900 line-clamp-2`}
          >
            {product.brand}
          </h3>
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
        </div>
        <p
          className={`text-gray-600 ${
            isList
              ? "text-xs md:text-sm mb-2 md:mb-3"
              : "text-sm md:text-base mb-2 md:mb-4"
          } line-clamp-3`}
        >
          {product.name}
        </p>
      </div>
      <div className="flex items-center justify-between mb-3 md:mb-4 mt-auto">
        <div
          className={`font-bold ${
            isList ? "text-base md:text-lg" : "text-lg md:text-2xl"
          }`}
        >
          ₹{product.price.toLocaleString()}
        </div>
        <div className="text-xs md:text-sm">Quantity: {product.quantity}</div>
      </div>
    </>
  );
  return (
    <Card className="rounded-xl border-gray-200 hover:shadow-xl transition-all duration-300 transform h-full" onClick={onClick}>
      <CardContent className="p-3 md:p-6 flex flex-col h-full">
        <div className="relative mb-3 md:mb-4">
          <img
            className="w-full h-32 md:h-48 rounded-lg object-contain"
            alt={product.name}
            src={product.image}
          />
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
      <Card className="rounded-xl border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-3 md:p-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-lg object-scale-down"
              alt={product.name}
              src={product.image}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1 md:mb-2">
                <h3 className="font-semibold text-base md:text-lg text-gray-900 truncate">
                  {product.name}
                </h3>
                <div className="text-right">
                  <div className="font-bold text-base md:text-xl">
                    ₹{product.price.toLocaleString()}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 md:gap-2">
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
                <div className="text-xs md:text-sm">
                  Quantity: {product.quantity}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

const TopSellingProducts = () => {
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
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

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
        quantity: 24,
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
        quantity: 24,
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
        quantity: 24,
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
        quantity: 24,
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
        quantity: 24,
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
        quantity: 24,
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
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        setViewMode("grid");
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

  const handleAcceptProduct = useCallback((productId) => {
    console.log(`Accepted product ${productId}`);
  }, []);

  const handleRejectProduct = useCallback((productId) => {
    console.log(`Rejected product ${productId}`);
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

  const toggleSearch = useCallback(() => {
    setIsSearchExpanded(!isSearchExpanded);
  }, [isSearchExpanded]);

  const navigate = useNavigate();
  const handleClick = () =>{
    // navigate("/view-details") ;
    console.log("Navigated to view details");
  }
  return (
    <div className="bg-[#f6f6f6] flex h-[calc(100vh-58px)] overflow-hidden justify-center w-full">
      <div className="bg-[#f6f6f6] h-full w-full relative flex flex-col">
        <main className="p-2 md:p-4 flex flex-col flex-1">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 h-full">
            {/* Desktop Filter Sidebar */}
            <div className="hidden lg:block w-1/5 h-full">
              <Card className="h-full rounded-xl shadow-lg border-0 flex flex-col sticky top-6">
                <CardContent className="p-4 md:p-6 flex-1 flex flex-col">
                  <div className="mb-2">
                    <h2 className="font-medium text-xl md:text-2xl font-['Montserrat',Helvetica]">
                      Filters
                    </h2>
                  </div>
                  <Separator className="mb-3 md:mb-4" />
                  <div className="flex-col scrollbar-thin scrollbar-track-gray-100 max-h-[calc(100vh-280px)] overflow-y-auto">
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
                            className="flex-1"
                          />
                          <Input
                            type="number"
                            placeholder="Max"
                            value={filters.priceMax}
                            onChange={(e) =>
                              handlePriceChange("priceMax", e.target.value)
                            }
                            className="flex-1"
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
                  <div className="mt-auto pt-3 md:pt-4 flex gap-3">
                    <Button
                      variant="outline"
                      onClick={resetFilters}
                      className="flex-1 h-10 md:h-12 rounded-lg border-[#f89320] text-[#f89320] hover:bg-[#f89320]/10 transition-all duration-200"
                    >
                      Reset
                    </Button>
                    <Button className="flex-1 h-10 md:h-12 rounded-lg bg-[#f89320] hover:bg-[#e88418] text-white transition-all duration-200 transform hover:scale-105">
                      Apply
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Products Container */}
            <div className="flex-1 h-full">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 md:mb-4 gap-2">
                <div className="flex flex-row justify-between items-center w-full sm:w-auto">
                  <h1 className="font-['Montserrat',Helvetica] text-xl md:text-2xl text-black">
                    Top Selling Products
                  </h1>
                </div>
                <div className="flex items-center gap-2 w-full sm:w-auto">
                  {/* Mobile Search */}
                  {isMobile && (
                    <div className="relative flex-1 sm:flex-none">
                      {isSearchExpanded ? (
                        <div className="flex items-center w-full">
                          <Input
                            className="bg-white rounded-[44px] font-['Montserrat',Helvetica] text-sm"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                            autoFocus
                          />
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleSearch}
                            className="ml-2"
                          >
                            <XIcon className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={toggleSearch}
                          className="bg-white rounded-full border border-gray-200"
                        >
                          <SearchIcon className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  )}

                  {/* Desktop Search */}
                  {!isMobile && (
                    <div className="relative flex-1 sm:flex-none">
                      <Input
                        className="bg-white rounded-[44px] font-['Montserrat',Helvetica] text-sm md:text-base"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                      />
                      <SearchIcon className="absolute right-5 top-1/2 transform -translate-y-1/2 text-[#757575] w-4 h-4" />
                    </div>
                  )}

                  <div className="lg:hidden flex justify-end">
                    <Button
                      onClick={handleMobileFilterToggle}
                      className="bg-[#f89320] hover:bg-[#e88418] text-white rounded-lg transition-all duration-200"
                    >
                      <FilterIcon className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>

                  {/* View Mode Buttons - Hide list view on mobile */}
                  <div className="flex">
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
                    {!isMobile && (
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
                    )}
                  </div>
                </div>
              </div>
              <div
                className={`
                overflow-y-auto max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-150px)]
                ${
                  viewMode === "grid"
                    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6"
                    : "flex flex-col gap-3 md:gap-4"
                }
                transition-all duration-300 ease-in-out
                scrollbar-thin scrollbar-thumb-[#f89320] scrollbar-track-gray-100
                `}
              >
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <div
                      key={product.id}
                      className="transform transition-all duration-300"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animation: "fadeInUp 0.6s ease-out forwards",
                      }}
                    >
                      {viewMode === "grid" ? (
                        <ProductCard
                          product={product}
                          viewMode={viewMode}
                          onAccept={handleAcceptProduct}
                          onReject={handleRejectProduct}
                          onClick={handleClick}
                        />
                      ) : (
                        <ProductCardList
                          product={product}
                          onAccept={handleAcceptProduct}
                          onReject={handleRejectProduct}
                          brandOptions={brandOptions}
                          categoryOptions={categoryOptions}
                          onClick={handleClick}
                        />
                      )}
                    </div>
                  ))
                ) : (
                  <div className="col-span-full flex flex-col items-center justify-center py-8 md:py-16 text-center">
                    <div className="text-4xl md:text-6xl mb-3 md:mb-4">🔍</div>
                    <h3 className="text-lg md:text-xl font-medium text-gray-600 mb-2">
                      No products found
                    </h3>
                    <p className="text-sm md:text-base text-gray-500">
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
          <div className="lg:hidden fixed inset-0 backdrop-blur-sm bg-opacity-50 z-50 flex items-end">
            <div className="bg-white w-full max-h-[85vh] rounded-t-xl transform transition-transform duration-300 ease-out animate-slide-up">
              <div className="p-3 md:p-4 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-base md:text-lg font-medium">
                    Filter Products
                  </h3>
                  <Button
                    variant="ghost"
                    onClick={() => setShowMobileFilter(false)}
                    className="text-gray-500"
                  >
                    <XIcon className="w-5 h-5" />
                  </Button>
                </div>
              </div>
              <div className="overflow-y-auto max-h-[65vh] p-3 md:p-4 space-y-3 md:space-y-4">
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
                        className="flex-1"
                      />
                      <Input
                        type="number"
                        placeholder="Max"
                        value={filters.priceMax}
                        onChange={(e) =>
                          handlePriceChange("priceMax", e.target.value)
                        }
                        className="flex-1"
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
              <div className="p-3 md:p-4 border-t flex gap-3">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="flex-1 h-10 md:h-12 rounded-lg border-[#f89320] text-[#f89320]"
                >
                  Reset
                </Button>
                <Button
                  onClick={() => setShowMobileFilter(false)}
                  className="flex-1 h-10 md:h-12 rounded-lg bg-[#f89320] hover:bg-[#e88418] text-white"
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

export default TopSellingProducts;
