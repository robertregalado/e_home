
import React from 'react';
import './About.css'; // Import CSS file for styling
import smartHomeImage from './smart-home-image.png'; // Import the image file

function About() {
    return (
        <div className="about-container">
            <div className="text-center mb-4">
                <h1 className="text-3xl font-semibold mb-4">About Smart Home</h1>
                <p>
                    A smart home is a residence that uses internet-connected devices to enable the remote monitoring and management of appliances and systems, such as lighting, heating, and security cameras. These devices are typically controlled using a smartphone or voice commands.
                </p>
                <p>
                    Smart home technology offers convenience, energy efficiency, and security benefits. For example, homeowners can remotely adjust thermostat settings to save energy, receive alerts when motion is detected outside their home, or even control their lights and appliances while away on vacation.
                </p>
            </div>
            <img src={smartHomeImage} alt="Smart Home" />
        </div>
    );
}

export default About;

