import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", sales: 15 },
  { name: "2", sales: 35 },
  { name: "3", sales: 30 },
  { name: "4", sales: 70 },
  { name: "5", sales: 40 },
  { name: "6", sales: 90 },
  { name: "7", sales: 60 },
  { name: "8", sales: 45 },
  { name: "9", sales: 80 },
  { name: "10", sales: 65 },
];

export default function SalesChart() {
  return (
    <div className="relative overflow-hidden rounded-3xl shadow-2xl p-6">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-white/30 to-blue-200/30 backdrop-blur-xl rounded-3xl z-0" />

      {/* Content Layer */}
      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-blue-800 mb-6 tracking-wide drop-shadow-sm">
          💈 Sales Overview - Haircuts
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="4 4" stroke="#cbd5e1" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#1e293b" }}
              stroke="#94a3b8"
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#1e293b" }}
              stroke="#94a3b8"
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#f9fafb",
                borderRadius: 8,
                border: "1px solid #3b82f6",
              }}
              labelStyle={{ fontWeight: "bold", color: "#1e3a8a" }}
              itemStyle={{ color: "#1e293b" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#2563eb"
              strokeWidth={3}
              activeDot={{
                r: 8,
                fill: "#2563eb",
                stroke: "#1d4ed8",
                strokeWidth: 2,
              }}
              dot={{ r: 4, fill: "#60a5fa" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
