import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import UpdateProfileDetails from '../components/UpdateProfileDetails';
import Footer from '../components/Footer';

const UpdateProfile = () => {
    useEffect(() => {
        document.title = "Update Profile - GameHive";
      }, []);
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <UpdateProfileDetails></UpdateProfileDetails>
            <Footer></Footer>
        </div>
    );
};

export default UpdateProfile;