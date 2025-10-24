
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import NewsLetter from '../components/NewsLetter';


const HomeLayout = () => {
    return (
        <div className='bg-black'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section> <Banner></Banner> </section>
                <section> <PopularGames></PopularGames> </section>
                <section> <NewsLetter></NewsLetter> </section>
                <Outlet>

                </Outlet>
            </main>
            <footer></footer>
        </div>
    );
};

export default HomeLayout;