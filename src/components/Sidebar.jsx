import { Link, useLocation } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { GiRazor } from "react-icons/gi";
import { FaCalendarCheck, FaRegNewspaper, FaStar } from "react-icons/fa";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { label: "Dashboard", icon: <MdDashboard />, to: "/" },
    { label: "Products", icon: <GiRazor />, to: "/products" },
    { label: "Blog", icon: <FaRegNewspaper />, to: "/blog" },
    { label: "Reviews", icon: <FaStar />, to: "/reviews" },
    { label: "Data Pelanggan", icon: <FaCalendarCheck />, to: "/datapelanggan" },
  ];

  return (
    <aside className="h-full w-full flex flex-col bg-white border-r px-6 py-8 shadow-sm">
      {/* Logo */}
      <div className="mb-10 flex justify-center">
        <div className="w-40 h-40 rounded-xl overflow-hidden shadow-md border border-gray-200">
          <img
            src="/img/logo manly.png"
            alt="Logo"
            className="w-full h-full object-contain bg-white p-2"
          />
        </div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item, idx) => {
          const isActive = location.pathname === item.to;
          return (
            <Link
              key={idx}
              to={item.to}
              className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-gray-200 text-black"
                  : "text-gray-600 hover:bg-gray-100 hover:text-black"
              }`}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-8 text-center text-xs text-gray-500 border-t border-gray-100">
        <p className="font-semibold">Manly-Barbershop Admin</p>
        <p className="text-[11px] mt-1">&copy; 2025 All Rights Reserved</p>
      </div>
    </aside>
  );
}
