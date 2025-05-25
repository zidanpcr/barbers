import { FaBell, FaSearch, FaCut } from "react-icons/fa";
import { SlSettings } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md border-b">
      {/* <div className="text-xl font-bold text-blue-600"> BroBarbershop</div> */}

      <div className="relative w-full max-w-md mx-6 hidden md:block">
        <input
          className="border border-gray-200 pl-4 pr-10 py-2 w-full rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:outline-none"
          type="text"
          placeholder="Search services or clients..."
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative p-3 bg-blue-100 rounded-full text-blue-500 cursor-pointer">
          <FaBell />
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full px-1.5 text-xs">
            3
          </span>
        </div>

        <div className="p-3 bg-blue-100 rounded-full text-blue-500 cursor-pointer">
          <FaCut />
        </div>

        <div className="p-3 bg-gray-100 rounded-full text-gray-600 cursor-pointer">
          <SlSettings />
        </div>

        <div className="flex items-center space-x-1 border-l border-gray-300 pl-4 cursor-pointer">
          <img
            src="https://flagcdn.com/id.svg"
            alt="Bahasa"
            className="w-5 h-5 rounded-full object-cover"
          />
          <span className="text-sm text-gray-600">Bahasa</span>
          <IoIosArrowDown className="text-gray-500" />
        </div>

        <div className="flex items-center space-x-3 border-l border-gray-300 pl-4">
          <span className="text-sm text-gray-700">
            Welcome, <b>Barber Roy</b>
          </span>
          <img
            src="/img/Mullet.png"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
