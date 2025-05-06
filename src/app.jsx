import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar.jsx";
import Player from "./player.jsx";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "20px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<h1>Inicio</h1>} />
          <Route path="/search" element={<h1>Buscar</h1>} />
          <Route path="/library" element={<h1>Tu Biblioteca</h1>} />
        </Routes>
      </div>

      <footer
        style={{
          background: "#282828",
          color: "#fff",
          padding: "10px 20px",
          textAlign: "center",
        }}
      >
        <h1>este sera un reproductor</h1>
        <Player />
      </footer>
    </div>
  );
}

export default App;
