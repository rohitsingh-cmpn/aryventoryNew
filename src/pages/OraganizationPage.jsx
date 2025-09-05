import React, { useState, useEffect } from "react";
import {
  Search,
  Plus,
  X,
  Upload,
  Building2,
  Mail,
  Phone,
  MapPin,
  Hash,
  User,
  Edit,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Add Shop Modal Component
const AddShopModal = ({
  isOpen,
  onClose,
  onAddShop,
  onUpdateShop,
  editingShop,
}) => {
  const [formData, setFormData] = useState({
    shopName: "",
    shopEmail: "",
    branch: "",
    phoneNumber: "",
    shopGST: "",
    address: "",
    state: "",
    country: "India",
    pincode: "",
    logo: null,
    signature: null,
  });

  // Update form data when editingShop changes
  useEffect(() => {
    if (editingShop) {
      setFormData({
        shopName: editingShop.name || "",
        shopEmail: editingShop.email || "",
        branch: "",
        phoneNumber: editingShop.phone || "",
        shopGST: "",
        address: editingShop.address || "",
        state: "",
        country: "India",
        pincode: "",
        logo: null,
        signature: null,
      });
    } else {
      setFormData({
        shopName: "",
        shopEmail: "",
        branch: "",
        phoneNumber: "",
        shopGST: "",
        address: "",
        state: "",
        country: "India",
        pincode: "",
        logo: null,
        signature: null,
      });
    }
  }, [editingShop]);

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (field, event) => {
    const file = event.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingShop) {
      // Update existing shop
      const updatedShop = {
        ...editingShop,
        name: formData.shopName,
        email: formData.shopEmail,
        phone: formData.phoneNumber,
        address: formData.address,
        avatar: formData.logo
          ? URL.createObjectURL(formData.logo)
          : editingShop.avatar,
      };

      onUpdateShop(updatedShop);
    } else {
      // Create new shop
      const newShop = {
        id: Date.now(),
        name: formData.shopName,
        email: formData.shopEmail,
        phone: formData.phoneNumber,
        address: formData.address,
        status: "Active",
        avatar: formData.logo
          ? URL.createObjectURL(formData.logo)
          : `https://ui-avatars.com/api/?name=${encodeURIComponent(
              formData.shopName
            )}&background=F89320&color=fff`,
      };

      onAddShop(newShop);
    }

    // Reset form and close modal
    setFormData({
      shopName: "",
      shopEmail: "",
      branch: "",
      phoneNumber: "",
      shopGST: "",
      address: "",
      state: "",
      country: "India",
      pincode: "",
      logo: null,
      signature: null,
    });
    onClose();
  };

  const handleReset = () => {
    if (editingShop) {
      setFormData({
        shopName: editingShop.name || "",
        shopEmail: editingShop.email || "",
        branch: "",
        phoneNumber: editingShop.phone || "",
        shopGST: "",
        address: editingShop.address || "",
        state: "",
        country: "India",
        pincode: "",
        logo: null,
        signature: null,
      });
    } else {
      setFormData({
        shopName: "",
        shopEmail: "",
        branch: "",
        phoneNumber: "",
        shopGST: "",
        address: "",
        state: "",
        country: "India",
        pincode: "",
        logo: null,
        signature: null,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-14 right-0 h-full w-full sm:w-[35%] sm:min-w-[400px] bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="flex min-h-full p-4">
          <div className="relative bg-white rounded-lg shadow-xl w-full max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">
                {editingShop ? "Edit Shop" : "Add New Shop"}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* Modal Content */}
            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* File Upload Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F89320] transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">Upload Logo</p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("logo", e)}
                    className="hidden"
                    id="logo-upload"
                  />
                  <label
                    htmlFor="logo-upload"
                    className="cursor-pointer text-[#F89320] hover:text-orange-300 text-sm font-medium"
                  >
                    Choose File
                  </label>
                  {formData.logo && (
                    <p className="text-xs text-green-600 mt-1">
                      {formData.logo.name}
                    </p>
                  )}
                  {editingShop && !formData.logo && (
                    <p className="text-xs text-gray-500 mt-1">
                      Current: {editingShop.name} logo
                    </p>
                  )}
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#F89320] transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-600 mb-2">
                    Upload Signature Stamp
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload("signature", e)}
                    className="hidden"
                    id="signature-upload"
                  />
                  <label
                    htmlFor="signature-upload"
                    className="cursor-pointer text-[#F89320] hover:text-orange-300 text-sm font-medium"
                  >
                    Choose File
                  </label>
                  {formData.signature && (
                    <p className="text-xs text-green-600 mt-1">
                      {formData.signature.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Shop Details */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Shop Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Shop Name
                    </label>
                    <input
                      type="text"
                      value={formData.shopName}
                      onChange={(e) =>
                        handleInputChange("shopName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                      placeholder="Enter shop name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Shop Email
                    </label>
                    <input
                      type="email"
                      value={formData.shopEmail}
                      onChange={(e) =>
                        handleInputChange("shopEmail", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                      placeholder="Enter shop email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Building2 className="w-4 h-4 inline mr-2" />
                      Branch
                    </label>
                    <input
                      type="text"
                      value={formData.branch}
                      onChange={(e) =>
                        handleInputChange("branch", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                      placeholder="Enter branch name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phoneNumber}
                      onChange={(e) =>
                        handleInputChange("phoneNumber", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Hash className="w-4 h-4 inline mr-2" />
                      Shop GST
                    </label>
                    <input
                      type="text"
                      value={formData.shopGST}
                      onChange={(e) =>
                        handleInputChange("shopGST", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                      placeholder="Enter GST number"
                    />
                  </div>
                </div>
              </div>

              {/* Shop Address */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Shop Address
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Address
                    </label>
                    <textarea
                      value={formData.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none resize-none"
                      placeholder="Enter complete address"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Select State
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) =>
                          handleInputChange("state", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                        required
                      >
                        <option value="">Select State</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Gujarat">Gujarat</option>
                        <option value="Karnataka">Karnataka</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) =>
                          handleInputChange("country", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none bg-gray-50"
                        readOnly
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Hash className="w-4 h-4 inline mr-2" />
                      Pincode
                    </label>
                    <input
                      type="text"
                      value={formData.pincode}
                      onChange={(e) =>
                        handleInputChange("pincode", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none"
                      placeholder="Enter pincode"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Form Actions */}
              <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2 text-[#F89320] hover:text-orange-300 font-medium transition-colors"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-[#F89320] hover:bg-orange-300 text-white rounded-lg font-medium transition-colors"
                >
                  {editingShop ? "Update" : "Apply"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

// Main Organization Page Component
function OrganizationPage() {
  const [isAddShopModalOpen, setIsAddShopModalOpen] = useState(false);
  const [editingShop, setEditingShop] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [shops, setShops] = useState([
    {
      id: 1,
      name: "NextGen Electronics",
      email: "8545580354@",
      phone: "8545580354@",
      address: "742 Ashwood Lane Springfield, IL 62704 United States",
      status: "Active",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 2,
      name: "NextGen Electronics",
      email: "8545580354@",
      phone: "8545580354@",
      address: "742 Ashwood Lane Springfield, IL 62704 United States",
      status: "Inactive",
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 3,
      name: "NextGen Electronics",
      email: "8545580354@",
      phone: "8545580354@",
      address: "742 Ashwood Lane Springfield, IL 62704 United States",
      status: "Active",
      avatar:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 4,
      name: "NextGen Electronics",
      email: "8545580354@",
      phone: "8545580354@",
      address: "742 Ashwood Lane Springfield, IL 62704 United States",
      status: "Inactive",
      avatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
    {
      id: 5,
      name: "NextGen Electronics",
      email: "8545580354@",
      phone: "8545580354@",
      address: "742 Ashwood Lane Springfield, IL 62704 United States",
      status: "Active",
      avatar:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100",
    },
  ]);

  const navigate = useNavigate();

  const filteredShops = shops.filter(
    (shop) =>
      shop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shop.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddShop = (newShop) => {
    setShops((prev) => [...prev, newShop]);
  };

  const handleUpdateShop = (updatedShop) => {
    setShops((prev) =>
      prev.map((shop) => (shop.id === updatedShop.id ? updatedShop : shop))
    );
  };

  const openEditModal = (shop) => {
    setEditingShop(shop);
    setIsAddShopModalOpen(true);
  };

  const closeEditModal = () => {
    setEditingShop(null);
    setIsAddShopModalOpen(false);
  };

  const getStatusColor = (status) => {
    return status === "Active"
      ? "bg-green-100 text-green-800"
      : "bg-gray-100 text-gray-800";
  };

  return (
    <div className="h-screen bg-gray-50 relative">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#F89320] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">
              Organization
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F89320] focus:border-transparent outline-none w-64"
              />
            </div> */}
            <button
              onClick={() => {
                setEditingShop(null);
                setIsAddShopModalOpen(true);
              }}
              className="bg-[#F89320] hover:bg-orange-300 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Shop</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-3 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShops.map((shop) => (
            <div
              key={shop.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                    <img
                      src={shop.avatar}
                      alt={shop.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{shop.name}</h3>
                    <p className="text-sm text-gray-500">{shop.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      shop.status
                    )}`}
                  >
                    {shop.status}
                  </span>
                  <button
                    onClick={() => openEditModal(shop)}
                    className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Edit className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start space-x-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <span>{shop.address}</span>
                </div>
                <button
                  className="px-2 py-1 bg-[#F89320] hover:bg-orange-300 text-white rounded-lg font-medium transition-colors float-right"
                  onClick={() => navigate("/employee-details")}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="text-center py-12">
            <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No shops found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search terms or add a new shop.
            </p>
          </div>
        )}
      </main>

      {/* Add/Edit Shop Modal */}
      <AddShopModal
        isOpen={isAddShopModalOpen}
        onClose={closeEditModal}
        onAddShop={handleAddShop}
        onUpdateShop={handleUpdateShop}
        editingShop={editingShop}
      />
    </div>
  );
}

export default OrganizationPage;
