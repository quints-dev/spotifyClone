import React from "react";
import { FaHome, FaSearch, FaMusic } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-60 h-screen bg-black text-white p-4 flex flex-col">
      <div className="mb-8">
        <img
          src="/public/images/Spotify_Primary_Logo_RGB_White.png"
          alt="Logo"
          className="h-10 w-10 mb-4"
        />
        <ul className="space-y-4">
          <li className="flex items-center gap-3 text-sm font-semibold hover:text-green-500 cursor-pointer">
            Inicio
          </li>
          <li className="flex items-center gap-3 text-sm font-semibold hover:text-green-500 cursor-pointer">
            Buscar
          </li>
          <li className="flex items-center gap-3 text-sm font-semibold hover:text-green-500 cursor-pointer">
            Tu biblioteca
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
