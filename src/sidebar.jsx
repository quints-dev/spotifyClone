import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <nav className="sidebar">
      <h2>🎧Spotify</h2>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/search">Buscar</Link>
        </li>
        <li>
          <Link to="/library">Tu Biblioteca</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;
