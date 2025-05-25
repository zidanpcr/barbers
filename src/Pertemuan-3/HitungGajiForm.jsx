import { useState } from "react";
import Card from "./components/Card";
import Alert from "./components/Alert";
import InputField from "./components/InputField";
export default function HitungGajiForm() {
    const [gaji, setGaji] = useState("");
    const pajak = 0.11;
    const totalGaji = gaji ? gaji - gaji * pajak : 0;

    return (
        <div className="flex flex-col items-center justify-center m-5 p-5 bg-gray-100">
            <Card judul="Hitung Gaji Bersih">
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Gaji Pokok</label>
                    <InputField
                        type="number"
                        placeholder="Masukkan jumlah gaji"
                        className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setGaji(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">
                        Pajak: <b className="text-red-500">11%</b>
                    </label>
                </div>

                {!gaji || gaji < 0 ? (
                    <Alert pesan="Silahkan masukkan gaji yang valid (tidak boleh kosong atau negatif)." type="kosong" />
                ) : (
                    <Alert pesan={`Total Take Home Pay (THP): Rp ${totalGaji.toLocaleString()}`} type="info" />
                )}
            </Card>
        </div>
    );
}

