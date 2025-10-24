import React from 'react';
import Allgames from '../components/Allgames';
import Navbar from '../components/Navbar';

const Games = () => {
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            
            <Allgames></Allgames>
        </div>
    );
};

export default Games;