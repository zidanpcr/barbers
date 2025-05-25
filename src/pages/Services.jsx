import { FaEdit, FaTrashAlt } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Potong Rambut",
      price: 30000,
      duration: "30 Menit",
      description: "Gaya potong rambut modern sesuai tren.",
    },
    {
      id: 2,
      name: "Cukur Jenggot",
      price: 20000,
      duration: "15 Menit",
      description: "Perapihan jenggot dengan alat higienis.",
    },
    {
      id: 3,
      name: "Hair Spa",
      price: 50000,
      duration: "45 Menit",
      description: "Perawatan rambut dan relaksasi kepala.",
    },
    {
      id: 4,
      name: "Pewarnaan Rambut",
      price: 75000,
      duration: "60 Menit",
      description: "Warna rambut stylish sesuai pilihanmu.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-blue-200 min-h-screen p-6 space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-4">Layanan BrosBarber</h1>
        <p className="text-gray-500 text-sm mb-6">
          Berikut adalah daftar layanan yang tersedia di barbershop Anda.
        </p>

        <div className="overflow-x-auto rounded-xl shadow-inner">
          <table className="min-w-full text-sm text-gray-800">
            <thead className="bg-gradient-to-r from-blue-200 to-blue-400 text-white">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Layanan</th>
                <th className="px-6 py-3 text-left font-semibold">Harga</th>
                <th className="px-6 py-3 text-left font-semibold">Durasi</th>
                <th className="px-6 py-3 text-left font-semibold">Deskripsi</th>
                <th className="px-6 py-3 text-left font-semibold">Aksi</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-blue-50 transition">
                  <td className="px-6 py-4 font-medium text-blue-900">{service.name}</td>
                  <td className="px-6 py-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                      Rp {service.price.toLocaleString()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {service.duration}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{service.description}</td>
                  <td className="px-6 py-4 flex gap-2">
                    <button className="flex items-center gap-1 px-3 py-1 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
                      <FaEdit className="text-sm" /> Edit
                    </button>
                    <button className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition">
                      <FaTrashAlt className="text-sm" /> Hapus
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
