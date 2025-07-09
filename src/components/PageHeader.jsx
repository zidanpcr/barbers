import { FaUserAlt, FaCut, FaMoneyBillWave, FaClock } from "react-icons/fa";

export default function PageHeader() {
  return (
    <div className="flex flex-col gap-6 p-6 bg-gray-50 min-h-screen">
      {/* Header Judul */}
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <span>Dashboard</span>
          <span>/</span>
          <span className="font-medium text-gray-800">Overview</span>
        </div>
      </div>

      {/* Kartu Statistik */}
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
            color: "purple",
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
          <div
            key={i}
            className="flex flex-col justify-between bg-white border border-gray-200 rounded-xl p-5 shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`text-${item.color}-600 text-xl`}>
                {item.icon}
              </div>
              {/* Judul di kanan atas */}
              <div className="text-gray-600 text-sm font-semibold">
                {item.title}
              </div>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">{item.value}</p>
              <p
                className={`${
                  item.isNegative ? "text-red-500" : "text-green-500"
                } text-sm mt-1`}
              >
                {item.change}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
