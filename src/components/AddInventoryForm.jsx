import React, { useState } from "react";
import { Upload, Package } from "lucide-react";
import { useNavigate } from "react-router-dom";



const AddInventoryForm = ({
  selectedCategory = "",
  selectedBrand = "",
  onReset,
}) => {
  const [formData, setFormData] = useState({
    sku: "",
    barcode: "",
    category: selectedCategory,
    brand: selectedBrand,
    productModel: "",
    productColor: "",
    productQuantity: "",
    productPrice: "",
    purchasePrice: "",
    chargingPort: "",
    batteryCapacity: "",
    productDescription: "",
    supplierName: "",
    phoneNumber: "",
  });

  const navigate = useNavigate()
  const [imagePreview, setImagePreview] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    navigate("/inventory");
  };

  const handleResetForm = () => {
    setFormData({
      sku: "",
      barcode: "",
      category: "",
      brand: "",
      productModel: "",
      productColor: "",
      productQuantity: "",
      productPrice: "",
      purchasePrice: "",
      chargingPort: "",
      batteryCapacity: "",
      productDescription: "",
      supplierName: "",
      phoneNumber: "",
    });
    setImagePreview(null);
    if (onReset) onReset();
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Add Inventory</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
          {imagePreview ? (
            <div className="relative">
              <img
                src={imagePreview}
                alt="Product preview"
                className="max-w-full h-32 mx-auto object-contain rounded"
              />
              <button
                type="button"
                onClick={() => setImagePreview(null)}
                className="absolute top-0 right-0 bg-red-400 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
              >
                ×
              </button>
            </div>
          ) : (
            <div>
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-400 text-sm mb-2">
                Click here to upload image
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="imageUpload"
              />
              <label
                htmlFor="imageUpload"
                className="cursor-pointer text-orange-400 hover:text-orange-300"
              >
                Choose file
              </label>
            </div>
          )}
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="sku"
              value={formData.sku}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="SKU / Barcode Number*"
              
            />
          </div>

          <div>
            <input
              type="text"
              name="barcode"
              value={formData.barcode}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Barcode Number*"
              
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Category"
              readOnly
            />
          </div>

          <div>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Brand"
              readOnly
            />
          </div>
        </div>

        <input
          type="text"
          name="productModel"
          value={formData.productModel}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Product Model"
        />

        <input
          type="text"
          name="productColor"
          value={formData.productColor}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Product Color*"
          
        />

        <input
          type="number"
          name="productQuantity"
          value={formData.productQuantity}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Product Quantity*"
          
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="number"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Product Price*"
            
          />

          <input
            type="number"
            name="purchasePrice"
            value={formData.purchasePrice}
            onChange={handleInputChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Purchase Price*"
            
          />
        </div>

        <input
          type="text"
          name="chargingPort"
          value={formData.chargingPort}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Charging Port"
        />

        <input
          type="text"
          name="batteryCapacity"
          value={formData.batteryCapacity}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Battery Capacity"
        />

        <textarea
          name="productDescription"
          value={formData.productDescription}
          onChange={handleInputChange}
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Product Description"
        />

        <input
          type="text"
          name="supplierName"
          value={formData.supplierName}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Supplier Name"
        />

        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          placeholder="Phone Number"
        />

        <div className="flex gap-4 pt-4">
          <button
            type="button"
            onClick={handleResetForm}
            className="flex-1 py-3 px-6 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
          <button
            type="submit"
            className="flex-1 py-3 px-6 bg-orange-400 text-white rounded-lg hover:bg-orange-300 transition-colors"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddInventoryForm;
