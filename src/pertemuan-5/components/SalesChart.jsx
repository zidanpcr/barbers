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
      <div className="bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-lg font-bold text-blue-600 mb-4">Sales Details (Haircuts)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{ backgroundColor: "#f0f8ff", borderRadius: 8 }}
              labelStyle={{ fontWeight: "bold", color: "#333" }}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#1e40af"
              strokeWidth={3}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  