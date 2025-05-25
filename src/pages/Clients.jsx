import { FaUserEdit, FaTrash } from "react-icons/fa";

export default function Clients() {
  const clients = [
    {
      id: 1,
      name: "Arif Hidayat",
      phone: "081234567890",
      lastVisit: "2025-04-10",
      totalAppointments: 5,
    },
    {
      id: 2,
      name: "Budi Santoso",
      phone: "081298765432",
      lastVisit: "2025-04-20",
      totalAppointments: 3,
    },
    {
      id: 3,
      name: "Citra Ayu",
      phone: "081377889900",
      lastVisit: "2025-04-22",
      totalAppointments: 7,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen p-6 space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Data Pelanggan</h1>
        <p className="text-gray-500 text-sm mb-6">
          Berikut ini adalah daftar pelanggan tetap BrosBarbershop.
        </p>

        <div className="overflow-x-auto rounded-xl shadow-inner">
          <table className="min-w-full text-sm text-gray-800">
            <thead className="bg-gradient-to-r from-blue-200 to-blue-400 text-white">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Nama</th>
                <th className="px-6 py-3 text-left font-semibold">Telepon</th>
                <th className="px-6 py-3 text-left font-semibold">Kunjungan Terakhir</th>
                <th className="px-6 py-3 text-left font-semibold">Total Janji</th>
                <th className="px-6 py-3 text-left font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clients.map((client) => (
                <tr key={client.id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4">{client.name}</td>
                  <td className="px-6 py-4">{client.phone}</td>
                  <td className="px-6 py-4">{client.lastVisit}</td>
                  <td className="px-6 py-4">{client.totalAppointments}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                      <FaUserEdit /> Edit
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition">
                      <FaTrash /> Hapus
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
