import React from 'react';
import './DeviceControls.css'; // Import CSS file for styling

const DeviceControls = ({ device, onToggle }) => {
    const { id, name, type, status } = device;

    // Function to handle device toggling
    const handleToggle = () => {
        onToggle(id);
    };

    return (
        <div className="device-controls">
            <h3 className="device-name">{name}</h3>
            <p className="device-type">{type}</p>
            <p className="device-status">{status}</p>
            <button onClick={handleToggle} className="toggle-button">
                {status === 'On' ? 'Turn Off' : 'Turn On'}
            </button>
        </div>
    );
};

export default DeviceControls;
