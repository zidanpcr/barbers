import { Link } from "react-router-dom";

export default function Error400(){
    return(
        <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-800">
                <div className="text-center">
                    <h1 className="text-9xl font-extrabold text-red-500">400</h1>
                    <p className="text-2xl mt-4">Oops! Halaman yang Anda cari tidak ditemukan.</p>
                    <p className="text-lg text-gray-600">Mungkin halaman tersebut sudah dihapus atau alamat URL salah.</p>
                    <div className="mt-8">
                        <Link
                        to="/"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
                        >
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>
    ) 
}