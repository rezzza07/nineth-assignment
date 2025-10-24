import React from 'react';
import Allgames from '../components/Allgames';
import Navbar from '../components/Navbar';

const Games = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='w-11/12 mx-auto p-8 py-10 '>
                <h1 className='py-8 font-bold text-4xl'>All Games</h1>
                <p className='text-2xl'>Explore our complete collection of games</p>
            </div>
            <Allgames></Allgames>
        </div>
    );
};

export default Games;