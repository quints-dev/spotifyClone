import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4 flex flex-col">
      <div className="text-2xl font-bold mb-6">Spotify</div>
      <ul className="space-y-4">
        <li className="hover:text-green-500 cursor-pointer">Inicio</li>
        <li className="hover:text-green-500 cursor-pointer">Buscar</li>
        <li className="hover:text-green-500 cursor-pointer">Tu biblioteca</li>
      </ul>
    </div>
  );
}

export default Sidebar;
