import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-secondary shadow-lg">
            <div className="w-full px-4 py-4 flex justify-between items-center h-20 border-b border-white">
                {/* Left side: Logo and Title */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/Logo/spotlight.png"
                        alt="Spotlight Logo"
                        className="h-10 w-10 object-contain"
                    />
                    <div className="text-2xl font-bold font-roboto text-white ml-16">
                        Spotlight Entertainment
                    </div>
                </div>

                {/* Right side: Navigation links */}
                <div className="space-x-12 mr-20 text-xl ">
                    <Link to="/" className="font-roboto text-white  hover:bg-accent py-4 px-12 rounded-2xl ">Home</Link>
                    <Link to="/about" className="font-roboto text-white  hover:bg-accent py-4 px-12 rounded-2xl ">About</Link>
                    <Link to="/contact" className="font-roboto text-white  hover:bg-accent py-4 px-12 rounded-2xl">Contact</Link>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
