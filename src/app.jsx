import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar.jsx";
import Player from "./components/player.jsx";
import Header from "./components/header.jsx";
import Inicio from "./pages/inicio.jsx";
import Buscar from "./pages/buscar.jsx";
import Biblioteca from "./pages/biblioteca.jsx";

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
                element={
                  <>
                    <h1 className="text-white text-2xl mb-4">Inicio</h1>
                    <Inicio />
                  </>
                }
              />
              <Route path="/search" element={<Buscar />} />
              <Route path="/library" element={<Biblioteca />} />
            </Routes>
          </main>
        </div>
        <Player />
      </div>
    </div>
  );
}

export default App;
