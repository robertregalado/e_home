import React from 'react';
import './Settings.css'; // Import the CSS file for styling

const Settings = () => {
    // Dummy data for demonstration
    const userData = {
        name: 'John Doe',
        email: 'john@example.com',
        profilePicture: 'https://via.placeholder.com/150',
        language: 'English',
        theme: 'Light',
        notifications: {
            email: true,
            sms: false,
            push: true
        },
        privacy: {
            dataCollection: true,
            accessControl: false
        },
        automation: {
            scheduleLights: true,
            motionDetection: false
        }
        // Add more settings as needed
    };

    const handleSaveSettings = () => {
        // Logic to save settings goes here
        console.log('Settings saved');
    };

    return (
        <div className="settings-container">
            <h2>User Profile Settings</h2>
            <div className="settings-section">
                <label>Name:</label>
                <input type="text" value={userData.name} />
            </div>
            <div className="settings-section">
                <label>Email:</label>
                <input type="email" value={userData.email} />
            </div>
            <div className="settings-section">
                <label>Profile Picture:</label>
                <img src={userData.profilePicture} alt="Profile" />
            </div>
            {/* Add more profile settings as needed */}

            <h2>Notification Settings</h2>
            <div className="settings-section">
                <label>Email Notifications:</label>
                <input type="checkbox" checked={userData.notifications.email} />
            </div>
            <div className="settings-section">
                <label>SMS Notifications:</label>
                <input type="checkbox" checked={userData.notifications.sms} />
            </div>
            <div className="settings-section">
                <label>Push Notifications:</label>
                <input type="checkbox" checked={userData.notifications.push} />
            </div>
            {/* Add more notification settings as needed */}

            <button className="save-button" onClick={handleSaveSettings}>Save Settings</button>
        </div>
    );
};

export default Settings;
