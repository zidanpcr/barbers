import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

// Supabase API
const API_URL = "https://eurvctbafbjmangghuee.supabase.co/rest/v1/blogs";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnZjdGJhZmJqbWFuZ2dodWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTQ1OTUsImV4cCI6MjA2NTUzMDU5NX0.rBNqEdkZ15RHmZy5D3oJsQlb2qfHzphoOFeHkBAiXJg";

// 🔐 Headers untuk akses Supabase
const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export default function BlogForm() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const id = params.get("id");

  const [form, setForm] = useState({
    date: "",
    title: "",
    image: "",
    url: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (id) fetchBlog();
  }, [id]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_URL}?id=eq.${id}&limit=1`, { headers });
      if (res.data.length > 0) {
        setForm(res.data[0]);
      } else {
        setError("Data tidak ditemukan.");
      }
    } catch (err) {
      setError("Gagal mengambil data.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.date || !form.title) {
      setError("Tanggal dan Judul wajib diisi.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      if (id) {
        await axios.patch(`${API_URL}?id=eq.${id}`, form, { headers });
      } else {
        await axios.post(API_URL, form, { headers });
      }
      navigate("/blog");
    } catch (err) {
      console.error("Gagal menyimpan:", err.response?.data || err.message);
      setError("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white text-gray-800 p-8 mt-10 rounded-xl border border-purple-300 shadow-lg font-sans">
      <h2 className="text-3xl font-bold text-gray-700 mb-6 tracking-wide text-center">
        {id ? "Edit Blog" : "Tambah Blog"}
      </h2>

      {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}
      {loading && <div className="text-gray-500 text-sm mb-4">Memuat data...</div>}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tanggal</label>
          <input
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded text-gray-800 focus:outline-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Judul</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Judul Blog"
            className="w-full p-3 border border-gray-300 rounded text-gray-800 focus:outline-gray-400"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">URL Gambar</label>
          <input
            name="image"
            value={form.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            type="url"
            className="w-full p-3 border border-gray-300 rounded text-gray-800"
          />
          {form.image && (
            <img
              src={form.image}
              alt="Preview"
              className="mt-2 rounded border border-gray-300 w-full h-48 object-cover"
            />
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Link Artikel</label>
          <input
            name="url"
            value={form.url}
            onChange={handleChange}
            placeholder="https://..."
            type="url"
            className="w-full p-3 border border-gray-300 rounded text-gray-800"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded transition"
        >
          {loading ? "Menyimpan..." : id ? "Simpan Perubahan" : "Tambah Blog"}
        </button>
      </form>
    </div>
  );
}
