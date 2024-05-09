
// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-green-800 text-white p-4 mb-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold text-white text-center">Smart Home Web App</h1>
                <nav className="flex space-x-4">
                    <div className="flex space-x-4">
                        <Link to="/" className="hover:text-gray-400">Home</Link>
                        <Link to="/about" className="hover:text-gray-400">About Us</Link>
                        <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                        <Link to="/profile" className="hover:text-gray-400">Profile</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
