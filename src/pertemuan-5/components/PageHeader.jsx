import { FaUserAlt, FaCut, FaMoneyBillWave, FaClock } from "react-icons/fa";

export default function PageHeader() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-2xl shadow-md">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-blue-600">Dashboard</h1>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Dashboard</span>
          <span>/</span>
          <span className="font-medium text-blue-600">Overview</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          {
            title: "Total Clients",
            value: "320",
            change: "▲ 5.2% from last week",
            icon: <FaUserAlt />,
            color: "blue",
          },
          {
            title: "Haircuts Today",
            value: "87",
            change: "▲ 3.1% from yesterday",
            icon: <FaCut />,
            color: "indigo",
          },
          {
            title: "Revenue",
            value: "Rp 15.200.000",
            change: "▼ 1.9% from last week",
            icon: <FaMoneyBillWave />,
            color: "green",
            isNegative: true,
          },
          {
            title: "Pending Appointments",
            value: "14",
            change: "▲ 2.3% from yesterday",
            icon: <FaClock />,
            color: "yellow",
          },
        ].map((item, i) => (
          <div key={i} className={`flex items-center justify-between p-4 bg-${item.color}-100 rounded-xl`}>
            <div>
              <p className="text-sm text-gray-600">{item.title}</p>
              <p className="text-2xl font-semibold">{item.value}</p>
              <p className={`${item.isNegative ? "text-red-500" : "text-green-500"} text-xs mt-1`}>{item.change}</p>
            </div>
            <div className={`text-${item.color}-600 text-3xl`}>
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
