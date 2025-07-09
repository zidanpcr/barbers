import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SUPABASE_URL = "https://eurvctbafbjmangghuee.supabase.co/rest/v1/products";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnZjdGJhZmJqbWFuZ2dodWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTQ1OTUsImV4cCI6MjA2NTUzMDU5NX0.rBNqEdkZ15RHmZy5D3oJsQlb2qfHzphoOFeHkBAiXJg";

export default function ProductForm() {
  const [form, setForm] = useState({
    nama: "",
    deskripsi: "",
    gambar: "",
    jenis_rambut: "",
    harga: "",
    layanan: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(
        SUPABASE_URL,
        {
          ...form,
          harga: Number(form.harga),
        },
        {
          headers: {
            apikey: API_KEY,
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
            Prefer: "return=representation",
          },
        }
      );
      navigate("/products");
    } catch (err) {
      console.error("Gagal menyimpan produk:", err);
      alert("Gagal menyimpan produk");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6 font-[Poppins]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Tambah Produk Baru</h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Nama Produk</label>
          <input
            type="text"
            name="nama"
            value={form.nama}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
          <input
            type="text"
            name="gambar"
            value={form.gambar}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          />
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
          <textarea
            name="deskripsi"
            value={form.deskripsi}
            onChange={handleChange}
            rows="3"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
          ></textarea>
        </div>

        <div className="md:col-span-2 flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Layanan</label>
          <select
            name="layanan"
            value={form.layanan}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          >
            <option value="" disabled hidden>
              Pilih Layanan
            </option>
            <option value="HAIR CUT PRICE LIST">Hair Cut Price List</option>
            <option value="SHAVE PRICE LIST">Shave Price List</option>
            <option value="TREATMENT PRICE LIST">Treatment Price List</option>
            <option value="EXTRAS">Extras</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Jenis Rambut</label>
          <select
            name="jenis_rambut"
            value={form.jenis_rambut}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          >
            <option value="" disabled hidden>
              Pilih Jenis Rambut
            </option>
            <option value="semua">Semua Jenis</option>
            <option value="lurus">Lurus</option>
            <option value="bergelombang">Bergelombang</option>
            <option value="ikal">Ikal</option>
            <option value="keriting">Keriting</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">Harga</label>
          <select
            name="harga"
            value={form.harga}
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            required
          >
            <option value="" disabled hidden>
              Pilih Harga
            </option>
            {[30000, 35000, 50000, 75000, 100000, 120000, 150000].map((price) => (
              <option key={price} value={price}>
                Rp {price.toLocaleString("id-ID")}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-3 rounded-md transition duration-200"
            disabled={loading}
          >
            {loading ? "Menyimpan..." : "Simpan Produk"}
          </button>
        </div>
      </form>
    </div>
  );
}
