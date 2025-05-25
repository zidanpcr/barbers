import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaCalendarCheck, FaUserFriends } from "react-icons/fa";
import { GiRazor } from "react-icons/gi";

export default function Sidebar() {
  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard />, to: "/" },
    { label: "Services", icon: <GiRazor />, to: "/services" },
    { label: "Data Pelanggan", icon: <FaCalendarCheck />, to: "/appointments" },
    { label: "Clients", icon: <FaUserFriends />, to: "/clients" },
  ];

  return (
    <aside className="min-h-screen w-72 flex flex-col bg-gradient-to-b from-blue-500 to-blue-700 p-6 shadow-xl">
      {/* Logo */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          <span className="text-yellow-300">Bros</span>Barbershop
        </h1>
        <p className="text-sm text-gray-200 font-medium mt-1">Modern Admin Dashboard</p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-4">
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className="flex items-center gap-3 p-3 rounded-xl text-white hover:bg-yellow-500 hover:text-white cursor-pointer font-medium transition-all duration-300 ease-in-out"
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center">
        <p className="text-gray-200 font-semibold">BroBarbershop Admin</p>
        <p className="text-xs text-gray-200 mt-1">&copy; 2025 All Rights Reserved</p>
      </div>
    </aside>
  );
}
