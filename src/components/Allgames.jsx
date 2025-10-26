import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Allgames = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data.games))
      .catch((err) => console.error("Error loading games:", err));
  }, []);

  return (
    <section className="bg-black text-white py-16 px-8">
      <h2 className="text-4xl font-bold mb-4 text-center text-sky-400">
        All Games
      </h2>
       <p className='text-2xl mb-10 text-center'>Explore our complete collection of games</p>
                 

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 mx-auto min-h-screen">
        {games.map((game) => (
          <div
            key={game.id}
            className="relative bg-[#0d0d0d] rounded-xl overflow-hidden shadow-lg border border-gray-800 hover:scale-[1.03] hover:shadow-sky-500/30 transition-all duration-300"
          >
            {/* Genre badge */}
            <span className="absolute top-3 right-3 bg-sky-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {game.genre}
            </span>

            {/* Image */}
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
              <p className="text-sm text-yellow-400 mt-3">
                <div className="flex gap-2"><FaStar size={20}></FaStar> {game.rating.toFixed(1)}{" "}
                <span className="text-gray-500">({game.developer})</span>
                </div>
                
                
              </p>

              <p className="mt-3 text-gray-300 text-sm line-clamp-2">
                {game.description}
              </p>

              {/* View Details button */}
              <Link to={`/games-details/${game.id}`}>
                <button className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 rounded-lg transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Allgames;
