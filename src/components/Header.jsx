import { FaBell, FaSearch } from "react-icons/fa";


export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3 border-b">
      {/* Search Bar */}
      <div className="relative w-full max-w-xs">
        <input
          className="border border-gray-300 pl-4 pr-10 py-2 w-full rounded-full text-sm bg-gray-100 placeholder-gray-500 focus:outline-none"
          type="text"
          placeholder="Search"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Middle Title */}
      <h1 className="text-base font-semibold text-gray-800 hidden md:block">
        Admin Dashboard
      </h1>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Bell */}
        <div className="relative">
          <FaBell className="text-gray-400 w-5 h-5 cursor-pointer" />
          <span className="absolute -top-2 -right-1 bg-red-500 text-white text-[10px] px-1.5 py-[1px] rounded-full">
            1
          </span>
        </div>

        {/* User Info */}
        <div className="flex items-center space-x-2 border-l pl-4">
          <span className="text-sm text-gray-700">Jidann</span>
          <img
            src="/img/Mullet.png"
            alt="Profile"
            className="w-8 h-8 rounded-full object-cover"
            
          />
        </div>
      </div>
      
    </header>
  );
}
