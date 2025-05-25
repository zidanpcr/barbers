import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div id="app-container" className="bg-gray-50 min-h-screen flex">
      {/* Sidebar */}
      <div className="flex-none w-16 sm:w-64 bg-gradient-to-br from-blue-600 to-blue-400 shadow-lg transition-all duration-300 ease-in-out">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div id="main-content" className="flex-1 bg-white p-6 overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 ease-in-out">
        {/* Header */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <Header />
        </div>

        {/* Outlet for Dynamic Routing */}
        <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl shadow-md p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
