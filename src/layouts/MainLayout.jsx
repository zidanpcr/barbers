import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="flex-none w-64 bg-gray-200 shadow-md h-screen overflow-y-auto">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <div className="bg-white shadow-sm p-4">
          <Header />
        </div>

        {/* Content (scrollable) */}
        <div className="flex-1 overflow-y-auto bg-gray-100 p-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
