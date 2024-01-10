import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="text-sm">
                        <p>&copy; {new Date().getFullYear()} Smart Home</p>
                    </div>
                    <div className="space-x-4">
                        <a href="#" className="hover:text-gray-400">Contact Us</a>
                        <a href="#" className="hover:text-gray-400">About Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
