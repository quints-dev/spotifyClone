import React from "react";

const albums = [
  {
    id: 1,
    title: "1999",
    artist: "Love of Lesbian",
    cover: "/images/love-lesbian.png",
  },
  {
    id: 2,
    title: "CALL ME IF YOU GET LOST: The Estate Sale",
    artist: "Tyler, the Creator",
    cover: "/images/call-me.png",
  },
  {
    id: 3,
    title: "Rubber Soul",
    artist: "The Beatles",
    cover: "/images/rubber-soul.png",
  },
  {
    id: 4,
    title: "Random Access Memories",
    artist: "Daft Punk",
    cover: "/images/random-access.png",
  },
  {
    id: 5,
    title: "Tomas va a Morir",
    artist: "Tomas va a Morir",
    cover: "/images/tomas-morir.png",
  },
];

const Inicio = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold mb-4">Escuchado recientemente</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors"
          >
            <img
              src={album.cover}
              alt={album.title}
              className="w-full aspect-square object-cover rounded mb-3"
            />
            <h3 className="text-sm font-semibold truncate">{album.title}</h3>
            <p className="text-xs text-gray-400 truncate">{album.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
