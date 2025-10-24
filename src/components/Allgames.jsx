import React, { useEffect, useState } from "react";

const Allgames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data.games))
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8 w-11/12 mx-auto  min-h-screen">
        
      {games.map((game) => (
        <div
          key={game.id}
          className="relative bg-[#0d0d0d] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-[1.03] transition-transform duration-300"
        >
          {/* Genre badge (top-right) */}
          <span className="absolute top-3 right-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {game.genre}
          </span>

          {/* Image */}
          <img
            src={game.image}
            alt={game.title}
            className="w-full h-48 object-cover"
          />

          {/* Game info */}
          <div className="p-5">
            <h2 className="text-lg font-semibold text-white">
              {game.title}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              ⭐ {game.rating.toFixed(1)}{" "}
              <span className="text-gray-500">({game.developer})</span>
            </p>

            <p className="mt-3 text-gray-300 text-sm line-clamp-3">
              {game.description}
            </p>

            {/* Button */}
            <button className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Allgames;
