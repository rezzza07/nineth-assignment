import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import logoImg from "../assets/logo.jpg"
import { AuthContext } from '../Provider/AuthProvider';

import { FaUser } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const handleLogOut = () => {
        console.log("user trying to logout")
        logOut().then(() => {
            // alert("You logged out successfully")
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <div className="navbar shadow-sm w-11/12 mx-auto py-4 bg-black">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-4 text-white text-[16px] ">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/games">Games</NavLink>
                    </ul>
                </div>
                <img className='h-28' src={logoImg} alt="" />
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8 font-semibold text-white text-[16px] ">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/games">Games</NavLink>
                </ul>
            </div>

            <div className="navbar-end flex items-center gap-3">
                {user ? (
                    <>

                        {user.photoURL && (
                            <Link to="/profile"><img
                                src={user.photoURL}
                                alt="User"
                                className="w-10 h-10 rounded-full border-2 border-sky-500"
                            /></Link>
                            
                        )}
                        <button
                            onClick={handleLogOut}
                            className="btn bg-sky-500 text-white font-black"
                        >
                            Log Out
                        </button>
                    </>
                ) : (
                    <>


                       <FaUser className="w-10 h-10 rounded-full border-2 border-sky-400 cursor-pointer"></FaUser>



                        <Link to="/auth/login" className="btn bg-sky-500 text-white font-black flex items-center gap-2">
                            Login
                        </Link>
                        <Link to="/auth/register" className="btn bg-sky-500 text-white font-black flex items-center gap-2">
                            Register
                        </Link>
                    </>

                )}
            </div>
        </div>

    );
};

export default Navbar;