import React, { useEffect } from 'react';
import Allgames from '../components/Allgames';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Games = () => {
    useEffect(() => {
    document.title = "Games - GameHive";
  }, []);
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            
            <Allgames></Allgames>
            <Footer></Footer>
        </div>
    );
};

export default Games;