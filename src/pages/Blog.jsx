import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const API_URL = "https://eurvctbafbjmangghuee.supabase.co/rest/v1/blogs";
const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnZjdGJhZmJqbWFuZ2dodWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTQ1OTUsImV4cCI6MjA2NTUzMDU5NX0.rBNqEdkZ15RHmZy5D3oJsQlb2qfHzphoOFeHkBAiXJg";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
};

export default function AdminBlog() {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get(API_URL, { headers });
      setBlogs(res.data);
    } catch (err) {
      console.error("Gagal memuat data blog:", err);
    }
  };

  const filtered = blogs.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / blogsPerPage);
  const paginatedBlogs = filtered.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-[#F9FAFB] font-sans">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-900">All Blogs</h1>
        <p className="text-sm text-green-500 mt-1">Active Articles</p>
      </div>

      {/* Search + Sort */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1); // reset ke page 1 kalau search berubah
            }}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-100"
          />
          <FiSearch className="absolute top-2.5 left-3 text-gray-400 text-lg" />
        </div>
        <div className="flex items-center justify-between md:justify-end gap-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Sort by:</span>
            <button className="flex items-center gap-1 text-gray-800 font-medium border border-gray-300 px-3 py-1.5 rounded-md hover:bg-gray-50">
              Newest <IoIosArrowDown />
            </button>
          </div>
          <button
            onClick={() => navigate("/blogform")}
            className="bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium px-4 py-2 rounded-md"
          >
            + Add Blog
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-[#F4F6FA] text-gray-700">
            <tr>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Title</th>
              <th className="py-3 px-6">Date</th>
              <th className="py-3 px-6">URL</th>
              <th className="py-3 px-6">Status</th>
              <th className="py-3 px-6">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedBlogs.map((blog) => (
              <tr key={blog.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-6">
                  {blog.image ? (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-10 h-10 object-cover rounded border mx-auto"
                    />
                  ) : (
                    <span className="text-gray-400 italic text-sm">No image</span>
                  )}
                </td>
                <td className="py-3 px-6 font-medium text-gray-900">{blog.title}</td>
                <td className="py-3 px-6">{blog.date}</td>
                <td className="py-3 px-6 text-blue-600 underline">
                  {blog.url ? (
                    <a href={blog.url} target="_blank" rel="noopener noreferrer">
                      Visit
                    </a>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="py-3 px-6">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      blog.url ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {blog.url ? "Active" : "Inactive"}
                  </span>
                </td>
                <td className="py-3 px-6">
                  <button
                    onClick={() => navigate(`/blog/${blog.id}`)}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs"
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
            {paginatedBlogs.length === 0 && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500 italic">
                  No blog data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-600">
          <p>
            Showing {paginatedBlogs.length > 0 ? (currentPage - 1) * blogsPerPage + 1 : 0} to{" "}
            {(currentPage - 1) * blogsPerPage + paginatedBlogs.length} of {filtered.length} entries
          </p>
          <div className="flex gap-1 items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-3 py-1 rounded ${
                  currentPage === page
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-gray-100 text-gray-800"
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-3 py-1 rounded hover:bg-gray-200 disabled:opacity-50"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
