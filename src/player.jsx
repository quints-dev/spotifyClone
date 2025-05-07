import React from "react";

function Player() {
  return (
    <div className="fixed bottom-0 left-0 w-full h-20 bg-zinc-900 border-t border-zinc-800 px-4 flex items-center justify-between z-50 text-white">
      {/* Izquierda: Imagen + texto */}
      <div className="flex items-center gap-3 overflow-hidden w-1/2 sm:w-[30%]">
        <img src="/cover.jpg" alt="Cover" className="w-10 h-10 rounded-md" />
        <div className="truncate">
          <p className="text-xs sm:text-sm font-semibold truncate">
            Canción actual
          </p>
          <p className="text-[10px] sm:text-xs text-zinc-400 truncate">
            Artista
          </p>
        </div>
      </div>

      {/* Centro: Controles */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center w-[60%] sm:w-[40%]">
        <div className="flex gap-4 items-center justify-center">
          <button className="text-lg sm:text-xl">⏮️</button>
          <button className="text-2xl sm:text-3xl">⏯️</button>
          <button className="text-lg sm:text-xl">⏭️</button>
        </div>
        <div className="hidden sm:block w-full h-1 mt-1 bg-zinc-700 rounded">
          <div className="w-1/3 h-full bg-white" />
        </div>
      </div>

      {/* Derecha: volumen (solo en pantallas ≥640px) */}
      <div className="hidden sm:flex w-[20%] justify-end">
        <button className="text-zinc-400 hover:text-white">🔈</button>
      </div>
    </div>
  );
}

export default Player;
