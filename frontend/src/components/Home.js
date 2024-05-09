import React from 'react';
import homeImage from './home-image.png'; // Import the image file

function Home() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center">
                <img src={homeImage} alt="Smart Home" className="mb-4" />
                <h1 className="text-3xl font-semibold mb-4">eHome</h1>
                <p className="text-md">
                    Welcome to our Smart Home Technology! Discover the future of modern living through our innovative smart home solutions. With cutting-edge devices and advanced automation, our smart home technology enhances your lifestyle by providing convenience, energy efficiency, and security at your fingertips. From intelligent lighting and thermostats to connected appliances and security systems, we're committed to transforming your home into a seamless and intelligent living space. Explore our range of products and experience the comfort and control that only smart home technology can offer.
                </p>
            </div>
        </div>
    );
}

export default Home;


