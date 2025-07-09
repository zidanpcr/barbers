import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import axios from "axios";

const API_URL = "https://eurvctbafbjmangghuee.supabase.co/rest/v1/reviews";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnZjdGJhZmJqbWFuZ2dodWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTQ1OTUsImV4cCI6MjA2NTUzMDU5NX0.rBNqEdkZ15RHmZy5D3oJsQlb2qfHzphoOFeHkBAiXJg";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
};

export default function Reviews() {
  const [dataForm, setDataForm] = useState({
    name: "",
    text: "",
    image: "",
    rating: "",
  });
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({ ...prev, [name]: value }));
  };

  const loadReviews = async () => {
    try {
      setLoading(true);
      const res = await axios.get(API_URL, { headers });
      setReviews(res.data);
    } catch {
      setError("Gagal memuat data review.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSubmitLoading(true);
      setError("");
      setSuccess("");
      await axios.post(API_URL, dataForm, {
        headers: {
          ...headers,
          Prefer: "return=representation",
        },
      });
      setSuccess("Review berhasil ditambahkan!");
      setDataForm({ name: "", text: "", image: "", rating: "" });
      setShowModal(false);
      loadReviews();
    } catch {
      setError("Gagal menyimpan review.");
    } finally {
      setSubmitLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus review ini?")) return;
    try {
      setLoading(true);
      await axios.delete(`${API_URL}?id=eq.${id}`, { headers });
      setSuccess("Review berhasil dihapus.");
      loadReviews();
    } catch {
      setError("Gagal menghapus review.");
    } finally {
      setLoading(false);
      setTimeout(() => setSuccess(""), 3000);
    }
  };

  const filteredReviews = reviews
    .filter((r) =>
      r.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.text?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(a.created_at || a.id);
      const dateB = new Date(b.created_at || b.id);
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  return (
    <div className="min-h-screen p-8 bg-gray-100 font-sans">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Review Pelanggan</h1>
        <p className="text-sm text-gray-600 mt-1">Ulasan terhadap layanan barbershop</p>
      </div>

      {error && <div className="text-red-600 mb-4 font-medium">{error}</div>}
      {success && <div className="text-green-600 mb-4 font-medium">{success}</div>}

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Cari review..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-gray-300"
          />
          <FiSearch className="absolute top-2.5 left-3 text-gray-400 text-lg" />
        </div>
        <div className="flex items-center justify-between md:justify-end gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>Urutkan:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-800 focus:outline-none hover:bg-gray-50"
            >
              <option value="newest">Terbaru</option>
              <option value="oldest">Terlama</option>
            </select>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-gray-700 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            + Tambah Review
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <h3 className="text-xl font-bold mb-4">Tambah Review</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                value={dataForm.name}
                onChange={handleChange}
                placeholder="Nama"
                className="w-full p-2 border rounded"
                required
              />
              <textarea
                name="text"
                value={dataForm.text}
                onChange={handleChange}
                placeholder="Isi Review"
                className="w-full p-2 border rounded"
                rows="3"
                required
              />
              <input
                name="image"
                value={dataForm.image}
                onChange={handleChange}
                placeholder="URL Gambar Produk"
                className="w-full p-2 border rounded"
              />
              <div className="flex justify-center gap-2 text-2xl">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="cursor-pointer">
                    <input
                      type="radio"
                      name="rating"
                      value={star}
                      onChange={handleChange}
                      checked={parseInt(dataForm.rating) === star}
                      className="hidden"
                      required
                    />
                    <span
                      className={
                        parseInt(dataForm.rating) >= star
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    >
                      ★
                    </span>
                  </label>
                ))}
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  className="px-4 py-2 border rounded hover:bg-gray-100"
                  onClick={() => setShowModal(false)}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                  disabled={submitLoading}
                >
                  {submitLoading ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-3 px-6">No</th>
              <th className="py-3 px-6">Nama</th>
              <th className="py-3 px-6">Review</th>
              <th className="py-3 px-6">Gambar</th>
              <th className="py-3 px-6">Rating</th>
              <th className="py-3 px-6">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredReviews.map((r, index) => (
              <tr key={r.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">{index + 1}</td>
                <td className="py-3 px-6 text-gray-900 font-medium">{r.name}</td>
                <td className="py-3 px-6 whitespace-pre-line max-w-sm">{r.text}</td>
                <td className="py-3 px-6">
                  <img
                    src={r.image || "/default-image.jpg"}
                    alt="Gambar"
                    className="w-10 h-10 object-cover rounded border"
                    onError={(e) => (e.target.src = "/default-image.jpg")}
                  />
                </td>
                <td className="py-3 px-6 text-yellow-500">
                  {r.rating ? "★".repeat(r.rating) : "-"}
                </td>
                <td className="py-3 px-6">
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(r.id)}
                    disabled={loading}
                    title="Hapus Review"
                  >
                    <AiFillDelete className="text-xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!loading && filteredReviews.length === 0 && (
          <div className="text-center text-gray-500 py-6 italic">
            Belum ada review tersedia.
          </div>
        )}
      </div>
    </div>
  );
}
