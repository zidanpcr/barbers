import { FaCut, FaSpa } from "react-icons/fa";

export default function Services() {
  return (
    <div className="bg-white min-h-screen p-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Daftar Layanan</h1>
        <p className="text-gray-500 text-sm mb-6">
          Berikut adalah daftar layanan yang tersedia di barbershop Anda.
        </p>

        {/* Grid 2 Card Sejajar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Cukur Rambut"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaCut className="text-blue-500" /> Cukur Rambut
              </h2>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Pesan Sekarang</button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card bg-base-100 shadow-md">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Pijit dan Spa"
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title flex items-center gap-2">
                <FaSpa className="text-green-500" /> Pijit dan Spa
              </h2>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-primary">Pesan Sekarang</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
