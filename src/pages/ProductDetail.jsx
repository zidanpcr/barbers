// import { useParams, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const SUPABASE_URL = "https://eurvctbafbjmangghuee.supabase.co/rest/v1/products";
// const API_KEY =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV1cnZjdGJhZmJqbWFuZ2dodWVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NTQ1OTUsImV4cCI6MjA2NTUzMDU5NX0.rBNqEdkZ15RHmZy5D3oJsQlb2qfHzphoOFeHkBAiXJg";

// export default function ProductDetail() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`${SUPABASE_URL}?id=eq.${id}&select=*`, {
//         headers: {
//           apikey: API_KEY,
//           Authorization: `Bearer ${API_KEY}`,
//         },
//       })
//       .then((res) => {
//         if (res.data.length > 0) {
//           setProduct(res.data[0]);
//         }
//       })
//       .catch((err) => {
//         console.error("Gagal mengambil detail produk:", err);
//       });
//   }, [id]);

//   if (!product) return <p className="p-6">Loading...</p>;

//   return (
//     <div className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
//       >
//         ← Kembali
//       </button>

//       <h1 className="text-2xl font-bold mb-2">{product.nama}</h1>
//       <p className="text-gray-600 mb-2">Layanan: {product.layanan}</p>
//       <img
//         src={product.gambar}
//         alt={product.nama}
//         className="w-full h-64 object-cover rounded mb-4"
//       />
//       <p className="text-gray-700 mb-2">{product.deskripsi}</p>
//       <p className="text-sm italic text-gray-500 mb-2">
//         Jenis Rambut: {product.jenis_rambut}
//       </p>
//       <p className="text-lg text-purple-700 font-semibold">
//         Rp {Number(product.harga).toLocaleString("id-ID")}
//       </p>
//     </div>
//   );
// }
