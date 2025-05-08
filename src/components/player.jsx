import React from "react";
import {
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
} from "react-icons/fa";

function Player() {
  return (
    <footer className="fixed bottom-0 w-full h-24 bg-[#181818] text-white flex items-center justify-between px-4 border-t border-[#282828]">
      <div className="flex items-center gap-4 w-1/4">
        <img
          src="/public/images/ab67616d0000b273304dbb3e13db9dae376c7a51.jpeg"
          alt="albumCover"
          className="w-14 h-14 object-cover rounded"
        />
      </div>
      <div>
        <h3 className="text-sm font-semibold">1999</h3>
        <p className="text-xs text-gray-400">Love of Lesbian</p>
      </div>
      <div className="flex flex-col items-center w-2/4">
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
      <div className="flex items-center gap-3 w-1/4 justify-end">
        <span>
          <FaVolumeUp />
        </span>
        <div className="w-24 h-1 bg-gray-600 rounded-full">
          <div className="w-2/4 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </footer>
  );
}
export default Player;
