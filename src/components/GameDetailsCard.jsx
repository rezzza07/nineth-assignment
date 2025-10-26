import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaDownload, FaStar } from "react-icons/fa";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { Link } from "react-router";

const GameDetailsCard = ({ game }) => {
    return (
        <div className="bg-black text-white min-h-screen p-6 md:p-12">
            {/* Top Section */}
            <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto bg-[#0d0d0d] p-8 rounded-2xl shadow-xl">
                <div className="space-y-5">
                    <img
                        src={game.image}
                        alt={game.title}
                        className="w-full rounded-xl shadow-lg"
                    />

                    {/* Download Button */}
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2.5 rounded-lg font-semibold transition">
                        <FaDownload size={20} />
                        Download
                    </button>

                    {/* Favorite Button */}
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-700 py-2.5 rounded-lg hover:bg-gray-900 transition">
                        <CiHeart size={20} className="text-sky-400" />
                        Add to Favorites
                    </button>

                    {/* Share Button */}
                    <button className="w-full flex items-center justify-center gap-2 border border-gray-700 py-2.5 rounded-lg hover:bg-gray-900 transition">
                        <FaRegShareFromSquare className="text-sky-400" />
                        Share
                    </button>
                </div>
                {/* Right: Game Info */}
                <div>
                    {/* Category Tag */}
                    <span className="bg-sky-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                        {game.genre}
                    </span>

                    {/* Title */}
                    <h1 className="text-4xl font-bold mt-3 mb-2 text-sky-400">{game.title}</h1>

                    {/* Rating + Developer */}
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-yellow-400 text-2xl"> <FaStar></FaStar> </span>
                        <p className="text-lg font-semibold">
                            {game.rating} <span className="text-gray-400">/ 5.0</span>
                        </p>
                        <span className="text-gray-500">|</span>
                        <p className="text-gray-400">
                            Developer:{" "}
                            <span className="font-semibold text-white">
                                {game.developer}
                            </span>
                        </p>
                    </div>

                    {/* About This Game */}
                    <div className="border border-gray-800 rounded-lg p-4 mb-6">
                        <h2 className="font-semibold text-lg mb-2">About This Game</h2>
                        <p className="text-gray-400 leading-relaxed">{game.description}</p>
                    </div>

                    {/* Info Boxes */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {/* Game Info */}
                        <div className="border border-gray-800 rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-2">Game Information</h3>
                            <p>
                                <span className="text-gray-400">Category:</span>{" "}
                                <span className="text-white font-medium">{game.genre}</span>
                            </p>
                            <p>
                                <span className="text-gray-400">Developer:</span>{" "}
                                <span className="text-white font-medium">{game.developer}</span>
                            </p>
                            <p>
                                <span className="text-gray-400">Rating:</span>{" "}
                                <span className="text-yellow-400 font-medium">
                                    {game.rating} / 5.0
                                </span>
                            </p>
                        </div>

                        {/* System Requirements */}
                        <div className="border border-gray-800 rounded-lg p-4">
                            <h3 className="font-semibold text-lg mb-2">System Requirements</h3>
                            <ul className="text-gray-400 space-y-1">
                                <li>OS: {game.requirements?.os}</li>
                                <li>Processor: {game.requirements?.processor}</li>
                                <li>Memory: {game.requirements?.memory}</li>
                                <li>Graphics: {game.requirements?.graphics}</li>
                                <li>Storage: {game.requirements?.storage}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Back Button */}
            <div className="max-w-6xl mx-auto mt-6">
                <Link to="/games"

                    className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-medium transition"
                >
                    ← Back
                </Link>
            </div>
        </div>
    );
};

export default GameDetailsCard;
