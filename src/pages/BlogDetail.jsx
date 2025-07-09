// src/pages/BlogDetail.jsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaArrowLeft, FaExternalLinkAlt, FaRegCalendarAlt, FaEdit } from "react-icons/fa";

const API_URL = "https://eurvctbafbjmangghuee.supabase.co/rest/v1/blogs";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnZjdGJhZmJqbWFuZ2dodWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTQ1OTUsImV4cCI6MjA2NTUzMDU5NX0.rBNqEdkZ15RHmZy5D3oJsQlb2qfHzphoOFeHkBAiXJg";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}?id=eq.${id}&limit=1`, { headers })
      .then((res) => {
        if (res.data.length > 0) setBlog(res.data[0]);
        else setError("Blog tidak ditemukan.");
      })
      .catch(() => setError("Gagal mengambil data blog."))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="p-6 text-gray-600">Loading...</div>;
  if (error) return <div className="p-6 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen p-8 bg-[#F9FAFB] font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Tombol kembali & edit */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 bg-gray-200 text-gray-800 hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition"
          >
            <FaArrowLeft className="text-sm" />
            Kembali
          </button>

          <button
            onClick={() => navigate(`/blogform?id=${id}`)}
            className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md"
          >
            <FaEdit />
            Edit Blog
          </button>
        </div>

        {/* Card Detail */}
        <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{blog.title}</h1>

          {/* Meta info */}
          <div className="flex items-center text-gray-500 text-sm mb-4 gap-4">
            <div className="flex items-center gap-1">
              <FaRegCalendarAlt className="text-gray-400" />
              <span>{blog.date}</span>
            </div>
            {blog.url && (
              <div className="flex items-center gap-1">
                <FaExternalLinkAlt className="text-gray-400" />
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  Lihat Artikel
                </a>
              </div>
            )}
          </div>

          {/* Gambar */}
          {blog.image && (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-lg border mb-6"
            />
          )}

          {/* Placeholder konten */}
          <p className="text-gray-700 text-sm leading-relaxed">
            Konten lengkap dari artikel ini tidak tersedia di sistem, tetapi Anda dapat membaca
            lebih lanjut melalui tautan yang disediakan di atas.
          </p>
        </div>
      </div>
    </div>
  );
}
