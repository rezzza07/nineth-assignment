import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MyDetails from '../components/MyDetails';

const MyProfile = () => {
    useEffect(() => {
        document.title = "My Profile - GameHive";
      }, []);
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <MyDetails></MyDetails>
            <Footer></Footer>
        </div>
    );
};

export default MyProfile;
