import React from "react";
import {
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";

function Player() {
  return (
    <footer className="fixed bottom-0 w-full bg-[#181818] text-white border-t border-[#282828] px-4 py-2 z-50">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-0">
        {/* Left: Album info */}
        <div className="flex items-center gap-4 min-w-0 basis-full md:basis-1/4">
          <img
            src="/images/love-lesbian.png"
            alt="albumCover"
            className="w-14 h-14 object-cover rounded"
          />
          <div className="truncate">
            <h3 className="text-sm font-semibold truncate">1999</h3>
            <p className="text-xs text-gray-400 truncate">Love of Lesbian</p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex flex-col items-center justify-center basis-full md:basis-2/4">
          <div className="flex items-center gap-4 mb-1">
            <button className="text-gray-400 hover:text-white">
              <FaStepBackward />
            </button>
            <button className="text-black bg-white p-1 px-3 rounded-full">
              <FaPlay />
            </button>
            <button className="text-gray-400 hover:text-white">
              <FaStepForward />
            </button>
          </div>
          <div className="w-full h-1 bg-gray-600 rounded-full">
            <div className="w-1/3 h-1 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Right: Volume */}
        <div className="hidden md:flex items-center gap-3 justify-end basis-1/4">
          <FaVolumeUp />
          <div className="w-24 h-1 bg-gray-600 rounded-full">
            <div className="w-2/4 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Player;
