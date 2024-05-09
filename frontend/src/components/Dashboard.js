// import React from 'react';
// import './Dashboard.css'; // Import CSS file for styling
// import DeviceStatus from './DeviceStatus'; // Assume you have a DeviceStatus component
// import Chart from './Chart'; // Assume you have a Chart component

// function Dashboard() {
//     return (
//         <div className="dashboard-container">
//             <h1>Dashboard</h1>
//             <div className="dashboard-content">
//                 <div className="device-status">
//                     <h2>Device Status</h2>
//                     <DeviceStatus />
//                 </div>
//                 <div className="chart">
//                     <h2>Chart</h2>
//                     <Chart />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Dashboard;

import React, { useState, useEffect } from 'react';
import DeviceCard from './DeviceCard';
import DeviceControls from './DeviceControls';
import DeviceGrouping from './DeviceGrouping';
import Notifications from './Notifications';
import Analytics from './Analytics';
import { getConnectedDevices } from '../api/api.js'; // Import API functions to fetch device data

function Dashboard() {
    const [devices, setDevices] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState(null);

    // Fetch connected devices from API on component mount
    useEffect(() => {
        fetchConnectedDevices();
    }, []);

    // Function to fetch connected devices from API
    const fetchConnectedDevices = async () => {
        try {
            const devicesData = await getConnectedDevices();
            setDevices(devicesData);
        } catch (error) {
            console.error('Error fetching connected devices:', error);
        }
    };

    // Function to handle device selection
    const handleDeviceSelection = (device) => {
        setSelectedDevice(device);
    };

    // Function to handle closing device details modal
    const handleCloseModal = () => {
        setSelectedDevice(null);
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">Smart Home Dashboard</h1>
            
            {/* Render device cards */}
            <div className="device-cards-container">
                {devices.map((device) => (
                    <DeviceCard 
                        key={device.id} 
                        device={device} 
                        onSelectDevice={handleDeviceSelection} 
                    />
                ))}
            </div>

            {/* Render device controls */}
            <div className="device-controls-container">
                {selectedDevice && (
                    <DeviceControls 
                        device={selectedDevice} 
                        onClose={handleCloseModal} 
                    />
                )}
            </div>

            {/* Render device grouping */}
            <div className="device-grouping-container">
                <DeviceGrouping devices={devices} />
            </div>

            {/* Render notifications */}
            <div className="notifications-container">
                <Notifications />
            </div>

            {/* Render analytics */}
            <div className="analytics-container">
                <Analytics devices={devices} />
            </div>
        </div>
    );
}

export default Dashboard;

