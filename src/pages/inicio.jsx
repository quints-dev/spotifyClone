import React from "react";

const albums = [
  {
    id: 1,
    title: "1999",
    artist: "Love of Lesbian",
    cover: "/public/images/ab67616d0000b273304dbb3e13db9dae376c7a51.jpeg",
  },
  {
    id: 2,
    title: "CALL ME IF YOU GET LOST: The Estate Sale",
    artist: "Tyler, the Creator",
    cover: "/public/images/callme.jpeg",
  },
  {
    id: 3,
    title: "Rubber Soul",
    artist: "The Beatles",
    cover: "/public/images/beatles.jpeg",
  },
  {
    id: 4,
    title: "Random Access Memories",
    artist: "Daft Punk",
    cover: "/public/images/ab67616d0000b2733c196ec7c5344d654ff552e9.jpg",
  },
  {
    id: 5,
    title: "Tomas va a Morir",
    artist: "Tomas va a Morir",
    cover: "/public/images/tomas.png",
  },
];

const Inicio = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Escuchado recientemente</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {albums.map((album) => (
          <div
            key={album.id}
            className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition-colors"
          >
            <img
              src={album.cover}
              alt={album.title}
              className="w-full h-auto rounded mb-3"
            />
            <h3 className="text-sm font-semibold">{album.title}</h3>
            <p className="text-xs text-gray-400">{album.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
