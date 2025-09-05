export const handleResize = (setState) => {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    setState("lg");
  } else if (screenWidth >= 768) {
    setState("md");
  } else {
    setState("sm");
  }
};

export const calculateWithDiscount = (
  planPrice,
  planDurationMultiplier,
  durationDiscount
) => {
  let originalPrice = 0;
  let discountedPrice = 0;

  originalPrice = Math.round(planPrice * planDurationMultiplier);
  discountedPrice = Math.ceil(Math.round(originalPrice * durationDiscount));
  discountedPrice = Math.floor(discountedPrice / 100) * 100 + 99;
  if (discountedPrice > originalPrice) {
    discountedPrice = discountedPrice - 100;
  }

  return discountedPrice;
};

export const getMonthsFromText = (text) => {
  const lowerText = text.toLowerCase();

  if (lowerText.includes("month")) return 1;
  if (lowerText.includes("quarter")) return 3;
  if (lowerText.includes("half year")) return 6;
  if (lowerText.includes("year")) return 12;

  return 0;
};

export const getDiscount = (text) => {
  switch (text.toLowerCase()) {
    case "quarter":
      return 0.97;
    case "half year":
      return 0.89;
    case "year":
      return 0.8;
    default:
      return 1; // Default case if the input is invalid
  }
};

export const addNintynine = (num) => {
  return parseInt(num / 100) * 100 + 99;
};

export const isLargerThanLaptop = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth > 1024;
  }
  return false;
};

export const calculateWithDiscountNew = (price, months) => {
  let discount = getDiscount(
    months === 1
      ? "month"
      : months === 3
      ? "quarter"
      : months === 6
      ? "half year"
      : "year"
  );
  let originalPrice = Math.round(price * months);
  let discountedPrice = Math.ceil(Math.round(originalPrice * discount));
  discountedPrice = Math.floor(discountedPrice / 100) * 100 + 99;

  // Ensure the discounted price is not higher than the original price
  if (discountedPrice > originalPrice) {
    discountedPrice = discountedPrice - 100;
  }

  return discountedPrice;
};

export const formatWithCommas = (value) => {
  if (value == null || value === "") return "";

  const cleanedValue = value.toString().replace(/[^0-9.]/g, "");
  if (!/^\d+(\.\d+)?$/.test(cleanedValue)) return "";

  const roundedNumber = Math.round(Number(cleanedValue));

  return roundedNumber.toLocaleString("en-IN");
};

export function getDaysBetween(startISO, endISO) {
  const start = new Date(startISO);
  const end = new Date(endISO);

  // Set both times to midnight UTC to ignore time part
  start.setUTCHours(0, 0, 0, 0);
  end.setUTCHours(0, 0, 0, 0);

  const diffTime = end - start;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}
