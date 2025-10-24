import React from 'react';
import { FaArrowLeft, FaGamepad } from 'react-icons/fa';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-black">
            <div className="text-center">
                <div className="text-9xl font-bold text-sky-500 mb-4">404</div>
                <h1 className="text-4xl font-bold mb-4">Game Not Found</h1>
                <p className="text-xl text-gray-400 mb-8">
                    Oops! The page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to='/' className="btn bg-sky-500 text-white gap-2">
                        <FaArrowLeft /> Back to Home
                    </Link>
                    <Link to="/games" className="btn btn-secondary">
                        <FaGamepad></FaGamepad> Browse All Games
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Error;