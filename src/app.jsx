import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.jsx";
import Player from "./components/player.jsx";
import Header from "./components/header.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <div className="flex-1 overflow-y-auto">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 overflow-y-auto">
            <Routes>
              <Route
                path="/"
                element={<h1 className="text-white text-2xl">Inicio</h1>}
              />
              <Route
                path="/search"
                element={<h1 className="text-white text-2xl">Búsqueda</h1>}
              />
              <Route
                path="/library"
                element={<h1 className="text-white text-2xl">Tu Biblioteca</h1>}
              />
            </Routes>
          </main>
        </div>
        <Player />
      </div>
    </div>
  );
}

export default App;
