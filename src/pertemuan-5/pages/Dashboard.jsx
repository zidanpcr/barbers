import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";
import SalesChart from "../components/SalesChart";

// Reusable StatCard Component
function StatCard({ icon, value, label, bgColor }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-xl shadow-md p-4">
      <div className={`text-white rounded-full p-4 text-2xl ${bgColor}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-gray-500 text-sm">{label}</span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Page Header */}
      <PageHeader />

      {/* Sales Chart (only one chart shown) */}
      <SalesChart />
    </div>
  );
}
