import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./sidebar.jsx";
import Player from "./player.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 text-white">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-4 pb-24 overflow-y-auto">
          <Routes>
            <Route path="/" element={<h1>Inicio</h1>} />
            <Route path="/search" element={<h1>Búsqueda</h1>} />
            <Route path="/library" element={<h1>Tu Biblioteca</h1>} />
          </Routes>
        </main>
      </div>

      {/* Player fuera del flujo normal del layout */}
      <Player />
    </div>
  );
}

export default App;
