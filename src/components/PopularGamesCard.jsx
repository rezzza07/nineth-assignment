import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const PopularGamesCard = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort games by rating (highest first) and take top 3
        const sorted = data.games.sort((a, b) => b.rating - a.rating).slice(0, 3);
        setGames(sorted);
      })
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  return (
    <section className="bg-black text-white py-16 px-8">
      <h2 className="text-3xl font-bold mb-3 text-center text-sky-400">
        Popular Games
      </h2>
      <p className="text-center mb-8">Discover the most highly-rated games</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {games.map((game) => (
          <Link
            to={`/games/${game.id}`}
            key={game.id}
            className="relative bg-[#0d0d0d] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-[1.03] hover:shadow-sky-500/30 transition-all duration-300 cursor-pointer block"
          >
            {/* Genre Badge */}
            <span className="absolute top-3 right-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {game.genre}
            </span>

            {/* Game Image */}
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />

            {/* Info Section */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-sky-400">
                {game.title}
              </h3>
              <div className="flex gap-2 text-yellow-400"><FaStar size={20}></FaStar> {game.rating.toFixed(1)}{" "}
                <span className="text-gray-500">({game.developer})</span>
              </div>
              <p className="mt-3 text-gray-300 text-sm line-clamp-2">
                {game.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PopularGamesCard;

