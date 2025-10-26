
import React, { useEffect } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import PopularGames from '../components/PopularGames';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';


const HomeLayout = () => {
    useEffect(() => {
        document.title = "Home - GameHive";
      }, []);
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
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;