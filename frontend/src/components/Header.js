// components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-semibold">Smart Home Web App</h1>
                <nav className="space-x-4">
                    <Link to="/" className="hover:text-gray-400">Home</Link>
                    <Link to="/about" className="hover:text-gray-400">About Us</Link>
                    <Link to="/contact" className="hover:text-gray-400">Contact Us</Link>
                    <Link to="/search">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Search
                        </button>
                    </Link>
                    <Link to="/profile" className="hover:text-gray-400">Profile</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
