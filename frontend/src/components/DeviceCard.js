import React from 'react';
import './DeviceCard.css'; // Import CSS file for styling

const DeviceCard = ({ device, onSelectDevice }) => {
    const { id, name, type, status, image } = device;

    // Function to handle device selection
    const handleDeviceSelection = () => {
        onSelectDevice(device);
    };

    return (
        <div className="device-card" onClick={handleDeviceSelection}>
            <img src={image} alt={name} className="device-image" />
            <div className="device-details">
                <h3 className="device-name">{name}</h3>
                <p className="device-type">{type}</p>
                <p className="device-status">{status}</p>
            </div>
        </div>
    );
};

export default DeviceCard;
