import { FaSearch } from "react-icons/fa";
import { BellIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  return (
    <nav className="bg-[#0D2A48] p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/vertical_navigation/Home.svg" alt="Home" className="w-6 h-6" />
        <span className="text-orange-400 text-lg font-semibold">
          Good Morning, <span className="text-white">Navoda</span>
        </span>
      </div>
      
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Type here to Search..."
          className="w-full px-4 py-2 rounded-full bg-white text-gray-700 focus:outline-none"
        />
        <FaSearch className="absolute right-3 top-3 text-gray-500" />
      </div>

      <div className="flex items-center space-x-4">
        <img src="/flag.png" alt="Flag" className="w-6 h-6" />
        <BellIcon className="w-6 h-6 text-white" />
        <EnvelopeIcon className="w-6 h-6 text-white" />
        <div className="flex items-center space-x-2">
          <img
            src="/navoda.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="text-white">
            <p className="font-semibold">Navoda Rajapakshe</p>
            <p className="text-sm text-gray-300">Level 2</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
