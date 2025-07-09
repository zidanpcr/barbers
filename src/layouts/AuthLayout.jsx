import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 transition-all duration-300">
      <div className="bg-white p-8 rounded-3xl shadow-xl w-full max-w-md border border-gray-200 transform hover:scale-105 transition-transform duration-500">
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-5xl font-poppins font-extrabold text-gray-800 tracking-wide mb-2">
            <span className="text-blue-600">Manly-</span>
            <span className="text-black">Barbershop</span>
            <span className="text-blue-600">.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Your Style. Your Confidence.
          </p>
        </div>

        <Outlet />

        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>&copy; 2025 BrosBarbershop. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
