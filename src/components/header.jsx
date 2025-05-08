import React from "react";
import { FaUserCircle, FaHome, FaSearch, FaChevronLeft } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 bg-gray-900 text-white">
      <div className="flex items-center gap-3">
        <button className="bg-black bg-opacity-40 p-2 rounded-full">
          <FaChevronLeft />
        </button>
        <div className="ml-4 relative">
          <input
            type="text"
            placeholder="¿Que Quieres Escuchar?"
            className="bg-gray-800 text-white px-4 py-2 rounded-full w-72 pl-10 focus:outline-none"
          />
          <FaSearch className="absolute top-2.5 left-3 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <FaUserCircle size={28} />
        <span className="hidden sm:inline">Tralelero Tralala</span>
      </div>
    </div>
  );
};

export default Header;
