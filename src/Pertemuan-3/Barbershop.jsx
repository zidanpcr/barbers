import InputField from "../Pertemuan-3/components/InputField";
import Card from "../Pertemuan-3/components/Card";
import Alert from "../Pertemuan-3/components/Alert";
import { useState } from "react";

export default function Barbershop() {
  const [email, setEmail] = useState("");
  const [nomorHp, setNomorHp] = useState("");
  const [modelRambut, setModelRambut] = useState("");

  const isFormValid =
    email.includes("@") &&
    nomorHp.length >= 10 &&
    /^\d+$/.test(nomorHp) &&
    modelRambut;

  return (
    <div className="flex flex-col items-center justify-center m-5 p-5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300 min-h-screen">
      <Card judul="💈 Booking Potong Rambut ✂️">
        
        {/* Input Email */}
        <InputField 
          label="Email Pelanggan" 
          type="email"
          placeholder="Masukkan email..."
          onChange={(e) => setEmail(e.target.value)} 
          className="mb-3"
        />
        {!email && <Alert pesan="Silahkan masukkan email!" type="kosong" />}
        {email && !email.includes("@") && <Alert pesan="Masukkan email yang valid!" type="kosong" />}

        {/* Input Nomor HP */}
        <InputField 
          label="Nomor HP" 
          type="text" 
          placeholder="Masukkan nomor HP..."
          onChange={(e) => setNomorHp(e.target.value)} 
          className="mb-3"
        />
        {!nomorHp && <Alert pesan="Silahkan masukkan nomor HP!" type="kosong" />}
        {nomorHp && (!/^\d+$/.test(nomorHp) || nomorHp.length < 10) && <Alert pesan="Nomor HP harus angka & minimal 10 digit!" type="kosong" />}

        {/* Dropdown Model Rambut */}
        <div className="mt-3">
          <label className="block text-sm font-medium text-teal-800">Model Potongan Rambut</label>
          <select 
            className="w-full mt-2 p-2 border rounded-lg bg-green-50 focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm" 
            onChange={(e) => setModelRambut(e.target.value)}
          >
            <option value="">🔽 Pilih model potongan...</option>
            <option value="fade">🔥 Fade Cut</option>
            <option value="undercut">✨ Undercut</option>
            <option value="pompadour">💇‍♂️ Pompadour</option>
            <option value="buzzcut">🔪 Buzz Cut</option>
          </select>
          {!modelRambut && <Alert pesan="Silahkan pilih model potongan rambut!" type="kosong" />}
        </div>

        {/* Tombol Simpan (Muncul hanya jika input valid) */}
        {isFormValid && (
         <button className="w-full bg-blue-300 mt-5 text-white p-2 rounded-lg font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105 text-sm">
            Simpan Booking
          </button>
        )}
        
      </Card>
    </div>
  );
}
