import React from "react";
import { FaHome, FaSearch, FaMusic } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="hidden md:block w-full md:w-64 bg-black p-4 text-white">
      <div className="w-60 h-screen bg-black text-white p-4 flex flex-col">
        <div className="mb-8">
          <img
            src="/images/spotify_primary_logo_white.png"
            alt="Logo"
            className="h-10 w-10 mb-4"
          />
          <ul className="space-y-4">
            <li className="flex items-center gap-3 text-sm font-semibold hover:text-green-500 cursor-pointer">
              <FaHome />
              <span>Inicio</span>
            </li>
            <li className="flex items-center gap-3 text-sm font-semibold hover:text-green-500 cursor-pointer">
              <FaSearch />
              <span>Buscar</span>
            </li>
            <li className="flex items-center gap-3 text-sm font-semibold hover:text-green-500 cursor-pointer">
              <FaMusic />
              <span>Tu biblioteca</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
