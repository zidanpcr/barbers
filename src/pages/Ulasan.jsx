 import { useEffect, useState } from "react";
import { ulasanAPI } from "../services/ulasanAPI";
import GenericTable from "../components/GenericTable";
import AlertBox from "../components/AlertBox";
import LoadingSpinner from "../components/LoadingSpinner";
import { AiFillDelete, AiFillStar } from "react-icons/ai";

export default function UlasanPelanggan() {
  const [isLoading, setIsLoading] = useState(false);
  const [pesanError, setPesanError] = useState("");
  const [pesanSukses, setPesanSukses] = useState("");
  const [daftarUlasan, setDaftarUlasan] = useState([]);

  const [formUlasan, setFormUlasan] = useState({
    nama: "",
    pesan: "",
    rating: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormUlasan({ ...formUlasan, [name]: value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setPesanError("");
    setPesanSukses("");

    try {
      await ulasanAPI.createUlasan(formUlasan);
      setPesanSukses("Ulasan berhasil ditambahkan!");
      setFormUlasan({ nama: "", pesan: "", rating: "" });
      loadSemuaUlasan();
    } catch (error) {
      setPesanError(`Gagal menambahkan ulasan: ${error.message}`);
    } finally {
      setIsLoading(false);
      setTimeout(() => setPesanSukses(""), 3000);
    }
  };

  const loadSemuaUlasan = async () => {
    setIsLoading(true);
    try {
      const data = await ulasanAPI.fetchUlasan();
      setDaftarUlasan(data);
    } catch (error) {
      setPesanError("Gagal memuat data ulasan.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHapusUlasan = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus ulasan ini?");
    if (!konfirmasi) return;

    setIsLoading(true);
    try {
      await ulasanAPI.deleteUlasan(id);
      setPesanSukses("Ulasan berhasil dihapus!");
      loadSemuaUlasan();
    } catch (error) {
      setPesanError("Terjadi kesalahan saat menghapus ulasan.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setPesanSukses(""), 3000);
    }
  };

  useEffect(() => {
    loadSemuaUlasan();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Judul */}
      <header className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Ulasan Pelanggan BrosBarber
        </h2>
        <p className="text-gray-500 text-sm mt-1">Apa kata mereka tentang layanan kami?</p>
      </header>

      {/* Notifikasi */}
      {pesanError && <AlertBox type="error">{pesanError}</AlertBox>}
      {pesanSukses && <AlertBox type="success">{pesanSukses}</AlertBox>}

      {/* Form Tambah Ulasan */}
      <section className="bg-white rounded-2xl shadow-md p-6 mb-10">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          Tambahkan Ulasan Baru
        </h3>
        <form onSubmit={handleFormSubmit} className="space-y-4">
          <input
            type="text"
            name="nama"
            value={formUlasan.nama}
            onChange={handleInputChange}
            placeholder="Nama pelanggan"
            required
            disabled={isLoading}
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="pesan"
            value={formUlasan.pesan}
            onChange={handleInputChange}
            placeholder="Tulis pesan..."
            required
            disabled={isLoading}
            rows="3"
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 resize-none"
          />
          <input
            type="number"
            name="rating"
            value={formUlasan.rating}
            onChange={handleInputChange}
            placeholder="Rating (1 - 5)"
            min="1"
            max="5"
            required
            disabled={isLoading}
            className="w-full p-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-all duration-200"
          >
            {isLoading ? "Menyimpan..." : "Simpan Ulasan"}
          </button>
        </form>
      </section>

      {/* Tabel Ulasan */}
      <section className="bg-white rounded-2xl shadow-md">
        <div className="px-6 py-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">
            Daftar Semua Ulasan ({daftarUlasan.length})
          </h3>
        </div>

        {isLoading && <LoadingSpinner text="Memuat ulasan..." />}

        {!isLoading && daftarUlasan.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <img
              src="/img/empty-box.png"
              alt="Kosong"
              className="w-24 h-24 mx-auto mb-4 opacity-50"
            />
            <p className="text-lg">Belum ada ulasan dari pelanggan.</p>
          </div>
        )}

        {!isLoading && daftarUlasan.length > 0 && (
          <GenericTable
            columns={["No", "Nama", "Pesan", "Rating", "Aksi"]}
            headerColor="bg-blue-600 text-white"
            data={daftarUlasan}
            renderRow={(item, index) => (
              <>
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">{index + 1}.</td>
                <td className="px-6 py-4 text-blue-600 font-semibold">{item.nama}</td>
                <td className="px-6 py-4 text-gray-700">{item.pesan}</td>
                <td className="px-6 py-4 text-blue-600 font-bold flex items-center gap-1">
                  {item.rating} <AiFillStar className="text-yellow-400" />
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleHapusUlasan(item.id)}
                    disabled={isLoading}
                    className="hover:text-red-600 transition-colors"
                    title="Hapus ulasan"
                  >
                    <AiFillDelete className="text-red-400 text-2xl" />
                  </button>
                </td>
              </>
            )}
          />
        )}
      </section>
      
    </div>
    
  );
  
}