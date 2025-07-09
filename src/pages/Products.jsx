import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SUPABASE_URL = "https://eurvctbafbjmangghuee.supabase.co/rest/v1/products";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnZjdGJhZmJqbWFuZ2dodWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTQ1OTUsImV4cCI6MjA2NTUzMDU5NX0.rBNqEdkZ15RHmZy5D3oJsQlb2qfHzphoOFeHkBAiXJg";

export default function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${SUPABASE_URL}?select=*`, {
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
        },
      });
      setProducts(data);
    } catch (err) {
      console.error("Gagal mengambil data produk:", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 px-4 font-[Poppins]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Kelola Produk</h2>
        <button
          onClick={() => navigate("/productform")}
          className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded shadow"
        >
          ➕ Tambah Produk
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white border rounded shadow p-4">
            <img
              src={p.gambar}
              alt={p.nama}
              className="h-48 w-full object-cover mb-3 rounded"
            />
            <h3 className="font-bold text-lg mb-1 text-gray-900">{p.nama}</h3>
            <p className="text-sm text-gray-700 mb-1">{p.deskripsi}</p>
            <p className="text-sm italic text-gray-500 mb-1">
              Jenis Rambut: {p.jenis_rambut}
            </p>
            <p className="text-sm text-gray-600 mb-1">Layanan: {p.layanan}</p>
            <p className="text-gray-800 font-semibold">
              Harga: Rp {Number(p.harga).toLocaleString("id-ID")}
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => navigate(`/productform?id=${p.id}`)}
                className="text-sm bg-gray-700 hover:bg-gray-800 text-white px-3 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={async () => {
                  if (confirm("Yakin ingin menghapus produk ini?")) {
                    try {
                      await axios.delete(`${SUPABASE_URL}?id=eq.${p.id}`, {
                        headers: {
                          apikey: API_KEY,
                          Authorization: `Bearer ${API_KEY}`,
                        },
                      });
                      fetchProducts();
                    } catch (err) {
                      console.error("Gagal menghapus produk:", err);
                    }
                  }
                }}
                className="text-sm bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
