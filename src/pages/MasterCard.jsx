import React from "react";
import {
  CalendarIcon,
  CheckIcon,
  ChevronRightIcon,
  PhoneIcon,
} from "lucide-react";

// Create missing components
const Card = ({ className, children, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const CardContent = ({ className, children, ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

const Button = ({ className, children, ...props }) => (
  <button className={className} {...props}>
    {children}
  </button>
);

const productCards = [
  {
    id: 1,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    title: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    stockStatus: "In stock",
    stockColor: "#29b659",
    quantity: "200",
  },
  {
    id: 2,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    title: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
  },
  {
    id: 3,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    brand: "Samsung",
    title: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
  },
  {
    id: 4,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    title: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
  },
  {
    id: 5,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    brand: "Samsung",
    title: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
    hasSpecialIcon: true,
    specialIcon: "/frame-2121454963.svg",
  },
  {
    id: 6,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    title: "Iphone",
    price: "₹150",
    stockStatus: "In stock",
    stockColor: "#29b659",
    quantity: "200",
  },
  {
    id: 7,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    title: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    hasAddToCart: true,
  },
  {
    id: 8,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    brand: "Samsung",
    title: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
  },
  {
    id: 9,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    brand: "Samsung",
    title: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
  },
];

const paymentCards = [
  {
    id: 1,
    status: "Paid on",
    statusColor: "#23d45f",
    date: "01-07-2025",
    userName: "Mohammed Sufiyan",
    userPhone: "+91 98345674",
    reward: "₹ 60,000",
    plan: "Premium",
    planAmount: "₹ 60,000",
    planPeriod: "/Monthly",
  },
  {
    id: 2,
    status: "Accepted on",
    statusColor: "#ffc466",
    date: "01-07-2025",
    userName: "Mohammed Sufiyan",
    userPhone: "+91 98345674",
    reward: "₹ 60,000",
    plan: "Premium",
    planAmount: "₹ 60,000",
    planPeriod: "/Monthly",
  },
];

const saleCard = {
  soldTo: "John Doe",
  date: "01-07-2025",
  brand: "Samsung",
  product: "Samsung Galaxy S25 Ultra 5G 12gb ram 125W Charger..",
  sellingPrice: "₹82,600 (incl. GST)",
  quantity: "1",
  image:
    "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
};

const inventoryItems = [
  {
    id: 1,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    brand: "Samsung",
    product: "Samsung Galaxy S25 Ultra 5G 12gb ram 125W Charger..",
    price: "1,29,999",
    quantity: "9",
  },
  {
    id: 2,
    image:
      "https://i.gadgets360cdn.com/products/large/Xiaomi-14-Civi-db-709x800-1718178881.jpg",
    brand: "Samsung",
    product: "Samsung Galaxy S25 Ultra 5G 12gb ram 125W Charger..",
    price: "1,29,999",
    quantity: "9",
  },
];

function OrderHistoryCard() {
  return (
    <div>
      <div className="grid grid-cols-4 gap-5">
        {/* Product Cards */}
        {productCards.map((product) => (
          <Card
            key={product.id}
            className="w-full border-none bg-white rounded-[20px] p-4"
          >
            <CardContent className="p-0 space-y-4">
              <img
                src={product.image}
                alt="Product"
                className="w-full h-[162px] object-contain rounded"
              />
              <div className="space-y-2">
                {product.brand && (
                  <div className="flex justify-between items-center">
                    <span className="[font-family:'Montserrat',Helvetica] font-medium text-black text-sm">
                      {product.brand}
                    </span>
                    {product.hasSpecialIcon ? (
                      <img
                        src={product.specialIcon}
                        alt="Special"
                        className="w-6 h-6"
                      />
                    ) : (
                      <ChevronRightIcon className="w-6 h-6" />
                    )}
                  </div>
                )}
                <div className="flex justify-between items-start">
                  <div className="[font-family:'Montserrat',Helvetica] font-medium text-black text-sm flex-1">
                    {product.title}
                  </div>
                  {!product.brand && (
                    <ChevronRightIcon className="w-6 h-6 ml-2" />
                  )}
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-lg">
                      {product.price}
                    </div>
                    {product.stockStatus && (
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#29b659] text-sm">
                        {product.stockStatus}
                      </div>
                    )}
                  </div>
                  {product.quantity && (
                    <div className="text-right">
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-sm">
                        Quantity
                      </div>
                      <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-sm">
                        {product.quantity}
                      </div>
                    </div>
                  )}
                  {product.hasAddToCart && (
                    <Button className="bg-[#f89320] hover:bg-[#e8831c] text-white rounded-md h-auto px-2 py-1">
                      <span className="[font-family:'Montserrat',Helvetica] font-normal text-white text-sm">
                        Add to Cart
                      </span>
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-5">
        {/* Payment Cards */}
        {paymentCards.map((payment) => (
          <Card
            key={payment.id}
            className="w-full bg-white rounded-[20px] border border-[#efeff0] p-6"
          >
            <CardContent className="p-0 space-y-4">
              {/* Status and Date */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <CheckIcon
                    className="w-6 h-6"
                    style={{ color: payment.statusColor }}
                  />
                  <span
                    className="[font-family:'Montserrat',Helvetica] font-medium text-xl"
                    style={{ color: payment.statusColor }}
                  >
                    {payment.status}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarIcon className="w-[30px] h-[30px]" />
                  <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
                    {payment.date}
                  </span>
                </div>
              </div>
              <div className="w-full h-px bg-gray-200" />
              {/* User and Reward */}
              <div className="flex justify-between">
                <div>
                  <div className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xl">
                    {payment.userName}
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#383838] text-base">
                    {payment.userPhone}
                  </div>
                </div>
                <div className="text-right">
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
                    {payment.reward}
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#383838] text-base">
                    Reward
                  </div>
                </div>
              </div>
              {/* Plan Details */}
              <div className="flex justify-between">
                <div>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#383838] text-base">
                    Plan
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
                    {payment.plan}
                  </div>
                </div>
                <div className="text-right">
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#383838] text-base">
                    Plan Amount
                  </div>
                  <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
                    {payment.planAmount}
                    <span className="text-[#757575] text-base">
                      {payment.planPeriod}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Sale Card */}
      <Card className="w-full bg-white rounded-[20px] border border-[#efeff0] p-6">
        <CardContent className="p-0 space-y-4">
          {/* Header */}
          <div className="flex justify-between items-center">
            <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
              Sold to: {saleCard.soldTo}
            </span>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-[30px] h-[30px]" />
              <span className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
                {saleCard.date}
              </span>
            </div>
          </div>
          <div className="w-full h-px bg-gray-200" />
          {/* Product Details */}
          <div className="flex gap-4">
            <img
              src={saleCard.image}
              alt="Product"
              className="w-[87px] h-[87px] rounded"
            />
            <div className="flex-1">
              <div className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xl">
                {saleCard.brand}
              </div>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#383838] text-base">
                {saleCard.product}
              </div>
            </div>
            <ChevronRightIcon className="w-6 h-6" />
          </div>
          {/* Price and Quantity */}
          <div className="flex justify-between">
            <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
              Selling Price: {saleCard.sellingPrice}
            </div>
            <div className="text-right">
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-[#757575] text-base">
                Quantity
              </div>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
                {saleCard.quantity}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Inventory Items */}
      {inventoryItems.map((item) => (
        <Card
          key={item.id}
          className="w-full bg-white rounded-[20px] border-none p-6 col-span-full"
        >
          <CardContent className="p-0">
            <div className="flex items-center gap-8">
              <img
                src={item.image}
                alt="Product"
                className="w-20 h-20 rounded"
              />
              <div className="flex-1">
                <div className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xl">
                  {item.brand}
                </div>
                <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl">
                  {item.product}
                </div>
              </div>
              <div className="[font-family:'Montserrat',Helvetica] font-normal text-black text-xl text-center">
                {item.quantity}
              </div>
              <div className="[font-family:'Montserrat',Helvetica] font-medium text-black text-xl text-center">
                {item.price}
              </div>
              <Button className="bg-[#f89320] hover:bg-[#e8831c] text-white rounded-[10px] h-auto px-4 py-3">
                <span className="[font-family:'Montserrat',Helvetica] font-medium text-white text-xl">
                  View Details
                </span>
                <ChevronRightIcon className="w-6 h-6 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default OrderHistoryCard;
