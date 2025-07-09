import {
  FaDollarSign,
  FaWallet,
  FaShoppingBag,
} from "react-icons/fa";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip as PieTooltip,
  ResponsiveContainer as PieResponsive,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Reusable StatCard Component
function StatCard({ icon, value, label, bgColor }) {
  return (
    <div className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 duration-300 transition-transform">
      <div className={`text-white rounded-full p-4 text-2xl ${bgColor}`}>
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-800">{value}</span>
        <span className="text-gray-500 text-sm font-medium">{label}</span>
      </div>
    </div>
  );
}

// Data
const statData = [
  {
    icon: <FaDollarSign />,
    value: "$5.2k",
    label: "Total Pendapatan",
    bgColor: "bg-green-600",
  },
  {
    icon: <FaWallet />,
    value: "$820",
    label: "Saldo Kas",
    bgColor: "bg-blue-600",
  },
  {
    icon: <FaShoppingBag />,
    value: "134x",
    label: "Layanan Terjual",
    bgColor: "bg-pink-600",
  },
];

const chartData = [
  { name: "Jan", value: 20 },
  { name: "Feb", value: 25 },
  { name: "Mar", value: 22 },
  { name: "Apr", value: 30 },
  { name: "May", value: 34 },
  { name: "Jun", value: 45 },
  { name: "Jul", value: 40 },
  { name: "Aug", value: 55 },
  { name: "Sep", value: 48 },
  { name: "Oct", value: 52 },
  { name: "Nov", value: 47 },
  { name: "Dec", value: 60 },
];

const pieData = [
  { name: "Pelanggan Baru", value: 68 },
  { name: "Langganan", value: 32 },
];
const pieColors = ["#0ED6A1", "#FF5E78"];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-teal-400 text-white rounded-2xl shadow-md p-6 flex flex-col lg:flex-row justify-between items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Welcome to your dashboard!</h2>
          <p className="text-sm mt-1">
            This is Manly Barbershop admin dashboard designed to reflect an overview of the most important events.
          </p>
        </div>
        <img src="/img/ilt.png" alt="Illustration" className="w-44 sm:w-56 max-w-full" />
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {statData.map((item, index) => (
          <StatCard
            key={index}
            icon={item.icon}
            value={item.value}
            label={item.label}
            bgColor={item.bgColor}
          />
        ))}
      </div>

      {/* Chart Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Bar Chart */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Haircut Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={index % 2 === 0 ? "#7B61FF" : "#0ED6A1"} // Ungu & Hijau
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Revenue Insight</h3>
          <p className="text-sm text-green-500 mb-4">▲ 1.10% Since yesterday</p>
          <div className="w-full h-64">
            <PieResponsive width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  outerRadius={80}
                  innerRadius={50}
                  startAngle={90}
                  endAngle={-270}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <PieTooltip />
              </PieChart>
            </PieResponsive>
          </div>
        </div>
      </div>
    </div>
  );
}
