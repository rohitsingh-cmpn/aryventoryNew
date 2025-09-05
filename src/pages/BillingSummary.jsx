import React, { useState } from "react";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import treasure from "../assets/treasure.png";
import { formatWithCommas } from "../utils/util";

const BillingSummary = () => {
  // Hardcoded data based on the screenshot
  const [quantities, setQuantities] = useState({
    devices: 1,
    organizations: 1,
    subUsers: 1,
    barcodeScans: 100,
  });

  const [selectedAddPlan, setSelectedAddPlan] = useState("1year");
  const [referCode, setReferCode] = useState(null);
  const [billingCycle, setBillingCycle] = useState("Yearly");
  const [payment, setPayment] = useState(false);

  // Hardcoded pricing data from the screenshot
  const prices = {
    devices: 50,
    organizations: 100,
    subUsers: 30,
    barcodeScans: 0.25,
  };

  // Hardcoded plan details
  const planDetails = {
    planName: "Premium",
    price: 1000, // per month
    perDevicePrice: 50,
    perOrganizationPrice: 100,
    perSubUserPrice: 30,
    perBarcodeScanPrice: 0.25,
    planDiscountAdd1yr: 10, // 10%
    planDiscountAdd2yr: 20, // 20%
    planGST: 18, // 18%
  };

  // Calculate add-on prices
  const addPlanPrices = {
    "1year": Math.round(
      planDetails.price * 12 -
        (planDetails.price * 12 * parseFloat(planDetails.planDiscountAdd1yr)) /
          100
    ),
    "2year": Math.round(
      planDetails.price * 24 -
        (planDetails.price * 24 * parseFloat(planDetails.planDiscountAdd2yr)) /
          100
    ),
  };

  const updateQuantity = (feature, change) => {
    setQuantities((prev) => ({
      ...prev,
      [feature]: Math.max(0, prev[feature] + change),
    }));
  };

  const calculateTotals = () => {
    const totalQty = Object.values(quantities).reduce(
      (sum, qty) => sum + qty,
      0
    );

    // Calculate annual prices for each feature
    const addedDevicesAmt = quantities.devices * prices.devices * 12;
    const addedOrganizationsAmt =
      quantities.organizations * prices.organizations * 12;
    const addedSubUsersAmt = quantities.subUsers * prices.subUsers * 12;
    const addedBarcodeScansAmt =
      quantities.barcodeScans * prices.barcodeScans * 12;

    const totalAddOnPrice =
      addedDevicesAmt +
      addedOrganizationsAmt +
      addedSubUsersAmt +
      addedBarcodeScansAmt;

    const basePrice = planDetails.price * 12; // Annual plan price
    const additionalPlan = selectedAddPlan ? addPlanPrices[selectedAddPlan] : 0;
    const subtotal = basePrice + additionalPlan + totalAddOnPrice;
    const tax = Math.round(subtotal * (parseFloat(planDetails.planGST) / 100));
    const finalAmount = subtotal + tax;

    return {
      planAmt: basePrice,
      additionalPlan,
      addedOrganizationsAmt,
      addedSubUsersAmt,
      addedBarcodeScansAmt,
      addedDevicesAmt,
      totalQty,
      totalAddOnPrice,
      monthlyAddOnPrice: Math.round(totalAddOnPrice / 12),
      subtotal,
      tax,
      finalAmount,
    };
  };

  const totals = calculateTotals();

  const handlePayment = (planName, amountToPay) => {
    setPayment(true);
    // Simulate payment processing
    setTimeout(() => {
      alert(
        `Payment of ₹${formatWithCommas(
          amountToPay
        )} for ${planName} processed successfully!`
      );
      setPayment(false);
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Billing Summary</h1>
          <p className="mt-2 text-gray-600">Review your plan and add-ons</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Pricing Table */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Premium Plan | 1 Year
              </h2>
              <p className="text-gray-600">
                (₹{planDetails.price}/month) ₹{planDetails.price * 12}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Congratulations!
              </h2>
              <p className="text-gray-600">You have unlocked a limited offer</p>
            </div>

            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700 mb-4">
              <div>Features</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Annual Price</div>
            </div>

            {/* No. of Devices */}
            <div className="grid grid-cols-4 gap-4 items-center py-3 border-b">
              <div className="text-sm text-gray-600">No. of Devices</div>
              <div className="text-sm">₹ {prices.devices}</div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity("devices", -1)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="text-lg"
                    color="black"
                  />
                </button>
                <span className="w-8 text-center text-sm">
                  {quantities.devices}
                </span>
                <button
                  onClick={() => updateQuantity("devices", 1)}
                  className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg"
                    color="white"
                  />
                </button>
              </div>
              <div className="text-sm">
                ₹ {formatWithCommas(totals.addedDevicesAmt)}
              </div>
            </div>

            {/* No. of Organizations */}
            <div className="grid grid-cols-4 gap-4 items-center py-3 border-b">
              <div className="text-sm text-gray-600">No. of Shops</div>
              <div className="text-sm">₹ {prices.organizations}</div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity("organizations", -1)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="text-lg"
                    color="black"
                  />
                </button>
                <span className="w-8 text-center text-sm">
                  {quantities.organizations}
                </span>
                <button
                  onClick={() => updateQuantity("organizations", 1)}
                  className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg"
                    color="white"
                  />
                </button>
              </div>
              <div className="text-sm">
                ₹ {formatWithCommas(totals.addedOrganizationsAmt)}
              </div>
            </div>

            {/* Employee Access */}
            <div className="grid grid-cols-4 gap-4 items-center py-3 border-b">
              <div className="text-sm text-gray-600">No. of Employee</div>
              <div className="text-sm">₹ {prices.subUsers}</div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity("subUsers", -1)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="text-lg"
                    color="black"
                  />
                </button>
                <span className="w-8 text-center text-sm">
                  {quantities.subUsers}
                </span>
                <button
                  onClick={() => updateQuantity("subUsers", 1)}
                  className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg"
                    color="white"
                  />
                </button>
              </div>
              <div className="text-sm">
                ₹ {formatWithCommas(totals.addedSubUsersAmt)}
              </div>
            </div>

            {/* Barcode scans */}
            <div className="grid grid-cols-4 gap-4 items-center py-3 border-b">
              <div className="text-sm text-gray-600">No. of Barcode Scans</div>
              <div className="text-sm">₹ {prices.barcodeScans}</div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity("barcodeScans", -100)}
                  className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="text-lg"
                    color="black"
                  />
                </button>
                <span className="w-8 text-center text-sm">
                  {quantities.barcodeScans}
                </span>
                <button
                  onClick={() => updateQuantity("barcodeScans", 100)}
                  className="w-6 h-6 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700"
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-lg"
                    color="white"
                  />
                </button>
              </div>
              <div className="text-sm">
                ₹ {formatWithCommas(totals.addedBarcodeScansAmt)}
              </div>
            </div>

            {/* Total */}
            <div className="grid grid-cols-4 gap-4 items-center py-3 font-semibold">
              <div className="text-sm">Total</div>
              <div></div>
              <div className="text-sm">{totals.totalQty}</div>
              <div className="text-sm">
                ₹ {formatWithCommas(totals.totalAddOnPrice)}
              </div>
            </div>

            {/* Summary */}
            <div className="mt-6 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Add-on Quantity Selected</span>
                <span>{totals.totalQty}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Monthly Price</span>
                <span>₹ {formatWithCommas(totals.monthlyAddOnPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Billed Annually</span>
                <span>₹ {formatWithCommas(totals.totalAddOnPrice)}</span>
              </div>
            </div>
          </div>

          {/* Right Column - Payment Summary */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-6">
              <span className="text-orange-500">Expand</span> your Plan by
            </h2>

            {/* Plan Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="border rounded-lg p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Additional 1 Year</h3>
                  <input
                    type="radio"
                    name="plan"
                    value="1year"
                    checked={selectedAddPlan === "1year"}
                    onClick={() => {
                      setSelectedAddPlan((prev) =>
                        prev === "1year" ? null : "1year"
                      );
                      setBillingCycle(
                        selectedAddPlan === "1year"
                          ? "Yearly"
                          : "Yearly1yrAdditional"
                      );
                    }}
                    readOnly
                    className="w-5 h-5 accent-black"
                  />
                </div>
                <div className="text-gray-500 text-sm line-through">
                  ₹ {planDetails.price * 12}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold">
                    ₹ {addPlanPrices["1year"]}
                  </span>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                    Save {parseInt(planDetails.planDiscountAdd1yr)}%
                  </span>
                </div>
              </div>

              <div className="border rounded-lg p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">Additional 2 Year</h3>
                  <input
                    type="radio"
                    name="plan"
                    value="2year"
                    checked={selectedAddPlan === "2year"}
                    onClick={() => {
                      setSelectedAddPlan((prev) =>
                        prev === "2year" ? null : "2year"
                      );
                      setBillingCycle(
                        selectedAddPlan === "2year"
                          ? "Yearly"
                          : "Yearly2yrAdditional"
                      );
                    }}
                    readOnly
                    className="w-5 h-5 accent-black"
                  />
                </div>
                <div className="text-gray-500 text-sm line-through">
                  ₹ {planDetails.price * 24}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg font-semibold">
                    ₹ {addPlanPrices["2year"]}
                  </span>
                  <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded">
                    Save {parseInt(planDetails.planDiscountAdd2yr)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Referral Code */}
            <div className="w-full mb-10">
              <h2 className="text-xl font-semibold mb-6">
                <span className="text-orange-500">Use</span> your Referral Code
              </h2>
              <input
                value={referCode}
                onChange={(e) => setReferCode(e.target.value.toUpperCase())}
                placeholder="Enter refer code"
                maxLength={10}
                className="py-3 text-sm px-4 outline-none border rounded-xl w-full"
              />
            </div>

            {/* Pricing Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">1 Year Premium Plan</span>
                <span>₹ {formatWithCommas(planDetails.price * 12)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Additional 1/2 year plan</span>
                <span>₹ {formatWithCommas(totals.additionalPlan)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Add-on Features</span>
                <span>₹ {formatWithCommas(totals.totalAddOnPrice)}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">
                  Tax ({parseInt(planDetails.planGST)}%)
                </span>
                <span>₹ {formatWithCommas(totals.tax)}</span>
              </div>

              <hr className="my-4" />

              <div className="flex justify-between items-center font-semibold text-lg">
                <span>Final Amount</span>
                <span>₹ {formatWithCommas(totals.finalAmount)}</span>
              </div>
            </div>

            {/* Pay Button */}
            <button
              className="w-full bg-orange-400 text-white py-3 rounded-lg font-medium hover:bg-orange-500 transition-colors flex justify-center items-center"
              onClick={() => {
                handlePayment(planDetails.planName, totals.finalAmount);
              }}
            >
              {payment ? (
                <div className="login-loader"></div>
              ) : (
                `Pay ₹ ${formatWithCommas(totals.finalAmount)}`
              )}
            </button>

            {/* Billing Information */}
            <div className="mt-8 text-sm text-gray-600">
              <h3 className="font-medium mb-2">Billing Information</h3>
              <p>All prices are in Indian Rupees (₹)</p>
              <p className="mt-2">Billing cycle: Annual</p>
              <p>Next billing date: January 1, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingSummary;
