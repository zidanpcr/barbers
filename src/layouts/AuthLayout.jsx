import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-purple-400 to-pink-500 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl w-full max-w-md transition-all duration-300 border border-blue-200 dark:border-gray-700 transform hover:scale-105 transition-transform duration-500">
        <div className="flex flex-col items-center justify-center mb-6">
          <h1 className="text-5xl font-poppins font-extrabold text-gray-800 dark:text-white tracking-wide mb-2">
            <span className="text-blue-600">Bros</span>
            <span className="text-black dark:text-white">Barbershop</span>
            <span className="text-blue-600">.</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Your Style. Your Confidence.
          </p>
        </div>

        <Outlet />

        {/* Optional: Add a footer */}
        <div className="mt-6 text-center text-gray-500 dark:text-gray-300 text-sm">
          <p>&copy; 2025 BrosBarbershop. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
