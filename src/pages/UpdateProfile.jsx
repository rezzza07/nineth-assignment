import React from 'react';
import Navbar from '../components/Navbar';
import UpdateProfileDetails from '../components/UpdateProfileDetails';
import Footer from '../components/Footer';

const UpdateProfile = () => {
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <UpdateProfileDetails></UpdateProfileDetails>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;