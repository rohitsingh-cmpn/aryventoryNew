import  { useState } from "react";
import DateRangeSelector from "../components/DateRangeSelector";
import {
  Bell,
  ChevronDown,
  FileText,
  Eye,
  Printer,
  Download,
  ChevronUp,
  Calendar,
} from "lucide-react";





function Reports() {
  const [isReportDropdownOpen, setIsReportDropdownOpen] = useState(false);
  const [selectedReportFormat, setSelectedReportFormat] = useState(
    'Select'
  );
 

  const products = [
    {
      id: 1,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 3,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 4,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 5,
      name: "Samsung galaxy S24",
      status: "Estimated",
      image:
        "https://images.pexels.com/photos/4068314/pexels-photo-4068314.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
  ];

  const reportFormats = [
    "Report By Supplier",
    "Report By Profit & Loss",
    "Report By Shopkeeper Bill",
    "Staff Attendance Bill",
    "Inventory Products Report",
  ];

  const handleReportFormatSelect = (format) => {
    setSelectedReportFormat(format);
    setIsReportDropdownOpen(false);
    console.log("Selected report format:", format);
  };

  const handleViewDetails = (productId) => {
    console.log("Viewing details for product:", productId);
    alert(`Viewing details for product ${productId}`);
  };

  //notification Page
 
 
  const handleExportReport = () => {
    console.log("Exporting report with format:", selectedReportFormat);
    alert(`Exporting report: ${selectedReportFormat}`);
  };

  const handlePrintReport = () => {
    console.log("Printing report");
    window.print();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Estimated":
        return "text-[#F89320]";
      case "Confirmed":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="flex  h-full bg-gray-50 ">
      {/* Header h-full*/}

      {/* Main Content */}
      <main className="p-6  flex flex-1 flex-col">
        {/* Reports Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl  font-bold text-gray-900">Reports</h2>

          <div className="flex items-center space-x-3">
            {/* Report Format Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsReportDropdownOpen(!isReportDropdownOpen)}
                className="flex items-center space-x-2 bg-[#F89320] hover:bg-orange-300 text-white px-4 py-3 rounded-lg transition-colors"
              >
                <span>{selectedReportFormat}</span>
                {isReportDropdownOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {isReportDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                  <div className="py-2">
                    {reportFormats.map((format, index) => (
                      <button
                        key={index}
                        onClick={() => handleReportFormatSelect(format)}
                        className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        {format}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Date Picker */}
            <div>
              <DateRangeSelector />
            </div>
          </div>
        </div>

        {selectedReportFormat == "Select" && (
          <div className="flex items-center justify-center h-screen">
            <img
              src="https://ssl.gstatic.com/docs/doclist/images/empty_state_recents_v4.svg"
              alt="Rashid img"
              className="h-55"
            />
          </div>
        )}
        {selectedReportFormat != "Select" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-[#F89320]" />
                <span className="font-medium text-gray-900">
                  INV - INV00082
                </span>
              </div>
            </div>

            {/* Products Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">
                      Product
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">
                      Product Name
                    </th>
                    <th className="text-left py-4 px-6 font-medium text-gray-900">
                      Status
                    </th>
                    <th className="text-right py-4 px-6 font-medium text-gray-900">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr
                      key={product.id}
                      className={
                        index !== products.length - 1
                          ? "border-b border-gray-200"
                          : ""
                      }
                    >
                      <td className="py-4 px-6">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span className="text-gray-900 font-medium">
                          {product.name}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`font-medium ${getStatusColor(
                            product.status
                          )}`}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-right">
                        <button
                          onClick={() => handleViewDetails(product.id)}
                          className="flex items-center space-x-2 bg-[#F89320] hover:bg-orange-300 text-white px-4 py-2 rounded-lg transition-colors ml-auto"
                        >
                          <Eye className="w-4 h-4" />
                          <span>View Details</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* {FlightBookingPicker()} */}
        {/* {FlightBookingInterface()} */}

        {/* Action Buttons */}
        <div className="mt-auto  flex justify-end space-x-3">
          <button
            onClick={handlePrintReport}
            className="flex items-center space-x-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            <Printer className="w-4 h-4" />
            <span>Print Report</span>
          </button>

          <button
            onClick={handleExportReport}
            className="flex items-center space-x-2 bg-[#F89320] hover:bg-orange-300 text-white px-6 py-2 rounded-lg transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export Report</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default Reports;
