import React from 'react';
import './DeviceStatus.css'; // Import the CSS file for DeviceStatus

function DeviceStatus() {
    // Assume device status data
    const devices = [
        { name: 'Device 1', status: 'Online' },
        { name: 'Device 2', status: 'Offline' },
        { name: 'Device 3', status: 'Online' },
        { name: 'Device 4', status: 'Online' },
        { name: 'Device 5', status: 'Offline' },
    ];

    return (
        <div>
            <ul className="device-list">
                {devices.map((device, index) => (
                    <li key={index}>
                        <span className={`status ${device.status.toLowerCase()}`}>
                            {device.status}
                        </span>
                        {device.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DeviceStatus;
