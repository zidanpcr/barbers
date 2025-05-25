import PageHeader from "../components/PageHeader";
import SalesChart from "../components/SalesChart";
import { FaUserFriends, FaCut, FaCalendarAlt, FaWallet } from "react-icons/fa";

// Reusable StatCard Component
function StatCard({ icon, value, label, bgColor }) {
  return (
    <div className="flex items-center gap-4 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:rotate-1 duration-300">
      <div className={`text-white rounded-full p-4 text-3xl ${bgColor}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-800">{value}</span>
        <span className="text-gray-500 text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Page Header */}
      <div className="bg-white rounded-2xl shadow-md p-4 transform hover:scale-105 hover:shadow-2xl duration-300">
        <PageHeader />
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<FaUserFriends />}
          value="1,250"
          label="Total Clients"
          bgColor="bg-blue-500"
        />
        <StatCard
          icon={<FaCut />}
          value="3,470"
          label="Total Haircuts"
          bgColor="bg-yellow-500"
        />
        <StatCard
          icon={<FaCalendarAlt />}
          value="230"
          label="Upcoming Appointments"
          bgColor="bg-green-500"
        />
        <StatCard
          icon={<FaWallet />}
          value="$12,340"
          label="Monthly Revenue"
          bgColor="bg-purple-600"
        />
      </div>

      {/* Chart & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6 transform hover:scale-105 hover:shadow-2xl duration-300">
          <SalesChart />
        </div>

        <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md p-6 flex flex-col justify-between transform hover:scale-105 hover:shadow-2xl duration-300">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Insights</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li>🔥 Top Service: Fade Haircut (850 sales)</li>
            <li>📅 Most Active Day: Saturday</li>
            <li>👤 New Clients this Week: 45</li>
            <li>💬 Pending Reviews: 12</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
