import React from "react";
import { useRef, useState } from "react";
import song from "./assets/music/spacecrush.mp3";

function Player() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };
  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const percent = (audio.currentTime / audio.duration) * 100;
    setProgress(percent);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100px",
        padding: "0px 20px",
        backgroundColor: "#181818",
      }}
    >
      <audio ref={audioRef} src={song} onTimeUpdate={handleTimeUpdate} />
      <div>
        <h1 style={{ fontSize: "30px", color: "white" }}>🎵 Canción 1</h1>
      </div>
      <button
        onClick={togglePlay}
        style={{
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer",
        }}
      >
        {isPlaying ? "⏸️" : "▶️"}
      </button>
      <div
        style={{
          flex: 1,
          height: "5px",
          backgroundColor: "#444",
          marginLeft: "20px",
          marginRight: "20px",
          position: "relative",
          borderRadius: "5px",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#1db954",
            position: "absolute",
            top: 0,
            left: 0,
            borderRadius: "4px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Player;
