import React from 'react';
import DeviceControls from './DeviceControls';
import './DeviceGrouping.css'; // Import CSS file for styling

const DeviceGrouping = ({ devices, onToggle }) => {
    return (
        <div className="device-grouping">
            <h2 className="grouping-title">Device Group</h2>
            <div className="device-list">
                {devices.map((device) => (
                    <DeviceControls key={device.id} device={device} onToggle={onToggle} />
                ))}
            </div>
        </div>
    );
};

export default DeviceGrouping;
