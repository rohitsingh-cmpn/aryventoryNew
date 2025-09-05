import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import {
  ChevronRightIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar } from "recharts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fa1,
  faAngleDown,
  faAngleUp,
  faArrowRight,
  faArrowUp,
  faArrowUpRightDots,
  faArrowUpRightFromSquare,
  faBan,
  faCalendar,
  faChartLine,
  faCheck,
  faLineChart,
  faPenToSquare,
  faThumbsDown,
  faThumbsUp,
  faTimes,
  faTruck,
  faTruckFast,
  faUserTie,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import legends1 from "./../assets/legends1.png";
import legends2 from "./../assets/legends2.png";
import legends3 from "./../assets/legends3.png";
import { useState } from "react";
import SalesGraph from "../components/SalesGraph";

const cards = [
  {
    iconColor: "#29B659",
    iconBgColor: "bg-[#B2FFCC]",
    icon: faLineChart,
    content: "Top Selling Product",
    quantity: "80",
    to: "/top-selling-products",
  },
  {
    iconColor: "#FFD400",
    iconBgColor: "bg-[#FFF2B2]",
    icon: faUserTie,
    content: "Current month's best Performer",
    quantity: "80",
    to: "/best-performer",
  },
  {
    iconColor: "#30A7DE",
    iconBgColor: "bg-[#B5E7FF]",
    icon: faWarehouse,
    content: "Inventory Products",
    quantity: "80",
    to: "/inventory",
  },
  {
    iconColor: "#EDB421",
    iconBgColor: "bg-[#FFEAB3]",
    icon: faTruckFast,
    content: "To be received",
    quantity: "80",
    to: "/delivery-status",
  },
];

const data2 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const datasets = {
  daily: [
    { date: "19/06", value: 120 },
    { date: "20/06", value: 150 },
    { date: "21/06", value: 90 },
    { date: "22/06", value: 160 },
    { date: "23/06", value: 130 },
    { date: "19/06", value: 120 },
    { date: "20/06", value: 150 },
    { date: "21/06", value: 90 },
    { date: "22/06", value: 160 },
    { date: "23/06", value: 130 },
  ],
  weekly: [
    { date: "Week 1", value: 400 },
    { date: "Week 2", value: 500 },
    { date: "Week 3", value: 450 },
    { date: "Week 4", value: 600 },
    { date: "Week 1", value: 400 },
    { date: "Week 2", value: 500 },
    { date: "Week 3", value: 450 },
    { date: "Week 4", value: 600 },
  ],
  monthly: [
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1500 },
    { date: "Mar", value: 1100 },
    { date: "Apr", value: 1700 },
    { date: "Jan", value: 1200 },
    { date: "Feb", value: 1500 },
    { date: "Mar", value: 1100 },
    { date: "Apr", value: 1700 },
  ],
  yearly: [
    { date: "2021", value: 5200 },
    { date: "2022", value: 5800 },
    { date: "2023", value: 6100 },
    { date: "2024", value: 7200 },
    { date: "2025", value: 5200 },
    { date: "2026", value: 5800 },
    { date: "2027", value: 6100 },
    { date: "2028", value: 7200 },
  ],
};

const statCards = [
  {
    title: "Total Orders Today",
    value: "80",
    icon: faCheck,
    color: "#29B659",
    bg: "bg-[#B2FFCC]",
    to: "/total-orders-today",
  },
  {
    title: "Out of Stock",
    value: "120",
    icon: faTimes,
    color: "#DE5858",
    bg: "bg-[#FFB1B1]",
    to: "/out-of-stock",
  },
  {
    title: "Low Quantity Products",
    value: "20",
    icon: faThumbsDown,
    color: "#DE5858",
    bg: "bg-[#FFB1B1]",
    to: "/low-quantity-products",
  },
  {
    title: "Total Orders in current Month",
    value: "10k",
    icon: faCalendar,
    color: "#3759FB",
    bg: "bg-[#B5C2FF]",
    to: "/current-month-sales",
  },
];

const employeeData = {
  daily: [
    { name: "Mon", Abbas: 30, Ayub: 40, Haider: 20, JK: 30 },
    { name: "Tue", Abbas: 50, Ayub: 30, Haider: 40, JK: 30 },
    { name: "Wed", Abbas: 20, Ayub: 20, Haider: 30, JK: 20 },
    { name: "Thu", Abbas: 60, Ayub: 40, Haider: 30, JK: 50 },
    { name: "Fri", Abbas: 25, Ayub: 25, Haider: 25, JK: 25 },
  ],
  weekly: [
    { name: "Week 1", Abbas: 100, Ayub: 150, Haider: 120, JK: 230 },
    { name: "Week 2", Abbas: 200, Ayub: 100, Haider: 150, JK: 270 },
    { name: "Week 3", Abbas: 150, Ayub: 200, Haider: 100, JK: 200 },
    { name: "Week 4", Abbas: 220, Ayub: 180, Haider: 200, JK: 300 },
  ],
  monthly: [
    { name: "Jan", Abbas: 600, Ayub: 700, Haider: 500, JK: 600 },
    { name: "Feb", Abbas: 500, Ayub: 600, Haider: 400, JK: 600 },
    { name: "Mar", Abbas: 700, Ayub: 800, Haider: 600, JK: 500 },
    { name: "Apr", Abbas: 800, Ayub: 900, Haider: 700, JK: 600 },
  ],
  yearly: [
    { name: "2021", Abbas: 3000, Ayub: 4000, Haider: 3500, JK: 4500 },
    { name: "2022", Abbas: 4000, Ayub: 3000, Haider: 4000, JK: 4000 },
    { name: "2023", Abbas: 5000, Ayub: 4500, Haider: 4000, JK: 4500 },
    { name: "2024", Abbas: 6000, Ayub: 5500, Haider: 5000, JK: 5000 },
  ],
};

const dateLabels = [
  "19/06",
  "20/06",
  "21/06",
  "22/06",
  "23/06",
  "19/06",
  "20/06",
  "21/06",
  "22/06",
  "23/06",
];

const barData = [
  {
    height: "h-[151px]",
    bg: "bg-[#49c4ff80]",
    value: "₹3,37,682",
    top: "top-16",
  },
  {
    height: "h-[76px]",
    bg: "bg-[#f4d1f780]",
    value: "₹3,37,682",
    top: "top-[139px]",
  },
  {
    height: "h-48",
    bg: "bg-[#f5c38f80]",
    value: "₹3,37,682",
    top: "top-[23px]",
  },
  {
    height: "h-[118px]",
    bg: "bg-[#22f4ef80]",
    value: "₹3,37,682",
    top: "top-[97px]",
  },
  {
    height: "h-[216px]",
    bg: "bg-[#7145fd80]",
    value: "₹3,37,682",
    top: "top-[-px]",
  },
];

const products = [
  {
    brand: "Samsung",
    name: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
    image: "/rectangle-6306.svg",
  },
  {
    brand: "Samsung",
    name: "Motorola Edge 50 Pro 5G with 125W Charger...",
    price: "₹150",
    quantity: "200",
    image: "/rectangle-6306.svg",
  },
];

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const legends = [
  { name: "Johnathan Smith", icon: legends1 },
  { name: "Lucas Kumar", icon: legends2 },
  { name: "John Doe", icon: legends3 },
  { name: "Lucas Fernandes", icon: legends2 },
  { name: "John Parker", icon: legends1 },
  { name: "John Williams", icon: legends3 },
];

const CardFinal = (cards) => {
  const navigate = useNavigate();
  return (
    <Card className="bg-[#FFFFFF] col-span-1 lg:col-span-2">
      <CardContent className="flex p-5 w-full h-full">
        <div className="flex justify-end flex-col h-full w-full">
          <p className="font-['Montserrat',Helvetica] font-normal text-black text-sm sm:text-xl">
            {cards.content}
          </p>
          <p className="font-['Montserrat',Helvetica] font-semibold text-black text-xl sm:text-4xl">
            {cards.quantity}
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <FontAwesomeIcon
            className={`p-2 sm:p-3 text-lg sm:text-xl rounded-xl ${cards.iconBgColor}`}
            icon={cards.icon}
            color={cards.iconColor}
          />
          <div className="flex m-1 hover:bg-gray-100 aspect-square items-center justify-center rounded-full border-[#EFEFF0] border">
            <FontAwesomeIcon
              onClick={() => navigate(cards.to)}
              icon={faArrowUp}
              className="text-sm sm:md:text-xl p-1 sm:p-2 aspect-square text-xs sm:text-md text-[#888888] rotate-45"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Separator = React.forwardRef(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      )}
      {...props}
    />
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitive.Root.displayName;

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

const Select = SelectPrimitive.Root;
const SelectGroup = SelectPrimitive.Group;
const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="h-4 w-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-[#F89320] focus:text-[#F89320]-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className
      )}
      {...props}
    >
      <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-xl bg-card text-card-foreground shadow", className)}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
CardContent.displayName = "CardContent";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-[#F89320] hover:text-[#F89320]-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-[#F89320] hover:text-[#F89320]-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const MacbookPro = () => {
  const [selectedOption, setSelectedOption] = useState("daily");
  const [salesRange, setSalesRange] = useState("daily");
  const [selectedOptionBar, setSelectedOptionBar] = useState("daily");
  const [range, setRange] = useState("daily");
  const [IsOpenLine, setIsOpenLine] = useState(false);
  const [IsOpenBar, setIsOpenBar] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#F6F6F6] p-4 w-full h-[calc(100vh-65px)] overflow-y-auto scrollbar-hide">
      <main className="grid grid-cols-4 w-full h-full gap-5">
        <div className="grid grid-cols-4 w-full col-span-4 gap-4">
          {statCards.map((stat, index) => (
            <Card
              key={index}
              className="bg-[#FFFFFF] justify-between flex w-full py-3 px-3 col-span-2 xl:col-span-1 h-full overflow-hidden"
            >
              <CardContent className="flex items-center my-2 ml-2">
                <FontAwesomeIcon
                  icon={stat.icon}
                  color={stat.color}
                  className={`${stat.bg} p-2 sm:p-3 text-lg sm:text-xl rounded-xl`}
                />
                <div className="flex ml-auto flex-col w-full h-full justify-center pl-4">
                  <p className="font-['Montserrat',Helvetica] font-normal text-black text-sm sm:text-xl">
                    {stat.title}
                  </p>
                  <p className="font-['Montserrat',Helvetica] font-semibold text-black text-lg sm:text-2xl">
                    {stat.value}
                  </p>
                </div>
              </CardContent>
              <div className="hidden sm:flex mt-auto aspect-square items-center justify-center hover:bg-gray-100 rounded-full border-[#EFEFF0] border">
                <FontAwesomeIcon
                  onClick={() => navigate(stat.to)}
                  icon={faArrowUp}
                  className="text-sm sm:md:text-xl p-1 sm:p-2 aspect-square text-xs sm:text-md text-[#888888] rotate-45"
                />
              </div>
            </Card>
          ))}
        </div>
        <div className="w-full h-full flex col-span-4">
          <div className="grid grid-cols-4 w-full h-full gap-5">
            <div className="flex w-full h-full lg:col-span-3 col-span-4 min-h-[300px]">
              <Card className="bg-[#FFFFFF] flex flex-col w-full py-4 h-full">
                <div className="flex justify-between px-2 mx-4 mb-3 py-1">
                  <div>
                    <div className="text-sm sm:text-lg">Sales Overview</div>
                    <div className="text-[#757575] text-xs sm:text-sm">
                      May 25, 2025 - Jun 25, 2025
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <button className="bg-[#F89320] h-fit text-white p-1 sm:p-2 rounded-xl hover:bg-orange-300">
                        <FontAwesomeIcon
                          className="text-sm sm:text-base px-1"
                          icon={faPenToSquare}
                        />
                      </button>
                    </div>
                    <div className="bg-[#F89320] rounded-xl h-fit flex p-1 py-1 relative">
                      <select
                        value={salesRange}
                        onChange={(e) => setSalesRange(e.target.value)}
                        onClick={() => setIsOpenLine(!IsOpenLine)}
                        onBlur={() => setIsOpenLine(false)}
                        className="text-white w-[110px] bg-[#F89320] p-1 py-1 rounded-xl text-sm appearance-none hover:outline-none focus:outline-none"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                      <div className="pointer-events-none text-white right-[10%] top-[20%] absolute">
                        <FontAwesomeIcon
                          className="text-sm sm:text-base p-0"
                          icon={IsOpenLine ? faAngleUp : faAngleDown}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg m-2 outline-none focus:outline-none">
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={datasets[salesRange]}
                      margin={{ top: 5, right: 1, left: 1, bottom: 5 }}
                    >
                      <XAxis dataKey="date" fontSize={10} />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </Card>
            </div>
            <div className="grid grid-cols-2 w-full h-full lg:col-span-1 col-span-4 gap-5">
              {cards.slice(0, 2).map((cards, index) => (
                <CardFinal {...cards} key={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="flex col-span-4 w-full h-full">
          <div className="grid grid-cols-4 w-full h-full gap-5">
            <div className="grid grid-cols-2 w-full h-full lg:col-span-1 col-span-4 gap-5">
              {cards.slice(2, 4).map((cards, index) => (
                <CardFinal {...cards} key={index} />
              ))}
            </div>
            <div className="grid grid-cols-3 bg-[#FFFFFF] w-full h-full lg:col-span-3 col-span-4 min-h-[300px] rounded-xl relative">
              <Card className="rounded-r-none flex flex-col w-full pt-4 h-full col-span-3 md:col-span-2">
                <div className="flex justify-between px-2 mx-4 mb-3 py-1">
                  <div>
                    <div className="text-sm sm:text-lg">Staff Overview</div>
                    <div className="text-[#757575] text-xs sm:text-sm">
                      May 25, 2025 - Jun 25, 2025
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <button className="bg-[#F89320] h-fit text-white p-1 sm:p-2 rounded-xl hover:bg-orange-300">
                        <FontAwesomeIcon
                          className="text-sm sm:text-base px-1"
                          icon={faPenToSquare}
                        />
                      </button>
                    </div>
                    <div className="bg-[#F89320] rounded-xl h-fit flex p-1 py-1 relative">
                      <select
                        value={range}
                        onChange={(e) => setRange(e.target.value)}
                        onClick={() => setIsOpenBar(!IsOpenBar)}
                        onBlur={() => setIsOpenBar(false)}
                        className="text-white w-[110px] bg-[#F89320] p-1 py-1 rounded-xl text-sm appearance-none focus:outline-none"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="yearly">Yearly</option>
                      </select>
                      <div className="pointer-events-none text-white right-[10%] top-[20%] absolute">
                        <FontAwesomeIcon
                          className="text-sm sm:text-base p-0"
                          icon={IsOpenBar ? faAngleUp : faAngleDown}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={employeeData[range]}>
                    <XAxis dataKey="name" fontSize={10} />
                    <Tooltip />
                    <Bar dataKey="Abbas" stackId="a" fill="#6366f1" />
                    <Bar dataKey="Ayub" stackId="a" fill="#22c55e" />
                    <Bar dataKey="Haider" stackId="a" fill="#facc15" />
                    <Bar dataKey="JK" stackId="a" fill="#f97316" />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
              <div className="flex md:col-span-1 col-span-3 flex-col p-3">
                <div className="p-2 text-sm sm:text-xl font-semibold">
                  Legends
                </div>
                <div className="overflow-y-auto sm:h-[300px] h-[250px] scrollbar-hide">
                  <div className="flex flex-col gap-4">
                    {legends.map((legend, index) => (
                      <div className="flex items-center space-y-2" key={index}>
                        <img
                          src={legend.icon}
                          alt={legend.name}
                          className="min-w-8 h-8 sm:min-w-14 sm:h-14 cursor-pointer"
                          title={legend.name}
                        />
                        <div className="relative group w-full max-w-[120px] sm:max-w-[140px] overflow-auto">
                          <p className="truncate text-xs sm:text-sm text-center m-2 cursor-pointer">
                            {legend.name}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MacbookPro;
