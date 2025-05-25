import { MdDashboard } from "react-icons/md";
import { FaCalendarCheck, FaUserFriends } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";

export default function Sidebar() {
  return (
    <aside className="min-h-screen w-80 flex flex-col bg-white p-8 shadow-xl">
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold text-gray-900">
          BroBarbershop<span className="text-blue-600">.</span>
        </h1>
        <p className="text-sm text-gray-400 font-medium">Modern Admin Dashboard</p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-3">
        {[
          { label: "Dashboard", icon: <MdDashboard /> },
          { label: "Services", icon: <GiRazor /> },
          { label: "Appointments", icon: <FaCalendarCheck /> },
          { label: "Clients", icon: <FaUserFriends /> },
        ].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3 rounded-xl text-gray-600 hover:bg-blue-100 hover:text-blue-600 cursor-pointer font-medium"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-10">
        {/* <div className="bg-blue-600 rounded-xl p-4 flex items-center text-white mb-6">
          <div>
            <p className="text-sm">Need to manage services or appointments?</p>
            <button className="mt-3 px-3 py-1 bg-white text-blue-600 rounded-md text-sm font-semibold shadow">
              Add New
            </button>
          </div>
          <img
            src="https://avatar.iran.liara.run/public/28"
            alt="Admin"
            className="w-16 h-16 ml-auto rounded-full object-cover"
          />
        </div> */}
        <p className="text-gray-400 font-semibold"> BroBarbershop Admin Dashboard</p>
        <p className="text-xs text-gray-400">&copy; 2025 All Rights Reserved</p>
      </div>
    </aside>
  );
}
