import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Navbar from '../components/Navbar';
import GameDetailsCard from '../components/GameDetailsCard';

const GamesDetails = () => {
  const data = useLoaderData(); 
  const { id } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const foundGame = data.games?.find((singleGame) => singleGame.id == id);
    setGame(foundGame);
    document.title = "Game Details - GameHive";
  }, [data, id]);

  if (!game) {
    return (
      <div className="text-center text-white py-20">
        <h2>Loading game details...</h2>
      </div>
    );
  }
 
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="w-11/12 mx-auto py-10">
        <GameDetailsCard game={game} />
      </main>
    </div>
  );
};

export default GamesDetails;

