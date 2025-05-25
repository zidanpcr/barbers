import { FaUserEdit, FaTrash } from "react-icons/fa";

export default function DataPelanggan() {
  const appointments = [
    {
      id: 1,
      client: "Zaki Ramadhan",
      service: "Potong Rambut",
      date: "2025-04-25",
      time: "14:00",
      status: "Selesai",
    },
    {
      id: 2,
      client: "Rizky Fadilah",
      service: "Cukur Jenggot",
      date: "2025-04-26",
      time: "10:30",
      status: "Menunggu",
    },
    {
      id: 3,
      client: "Fajar Maulana",
      service: "Hair Spa",
      date: "2025-04-27",
      time: "12:00",
      status: "Dibatalkan",
    },
    {
      id: 4,
      client: "Doni Wahyudi",
      service: "Pewarnaan Rambut",
      date: "2025-04-28",
      time: "15:00",
      status: "Selesai",
    },
  ];

  const statusColor = {
    Selesai: "bg-green-100 text-green-700",
    Menunggu: "bg-yellow-100 text-yellow-700",
    Dibatalkan: "bg-red-100 text-red-700",
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen p-6 space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Data Pelanggan</h1>
        <p className="text-gray-500 text-sm mb-6">
          Daftar janji temu pelanggan untuk layanan barbershop Anda.
        </p>

        <div className="overflow-x-auto rounded-xl shadow-inner">
          <table className="min-w-full text-sm text-gray-800">
            <thead className="bg-gradient-to-r from-blue-200 to-blue-400 text-white">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Client</th>
                <th className="px-6 py-3 text-left font-semibold">Service</th>
                <th className="px-6 py-3 text-left font-semibold">Date</th>
                <th className="px-6 py-3 text-left font-semibold">Time</th>
                <th className="px-6 py-3 text-left font-semibold">Status</th>
                <th className="px-6 py-3 text-left font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {appointments.map((appt) => (
                <tr key={appt.id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4">{appt.client}</td>
                  <td className="px-6 py-4">{appt.service}</td>
                  <td className="px-6 py-4">{appt.date}</td>
                  <td className="px-6 py-4">{appt.time}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full font-medium text-xs ${statusColor[appt.status]}`}
                    >
                      {appt.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                      <FaUserEdit className="text-sm" /> Edit
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition">
                      <FaTrash className="text-sm" /> Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
