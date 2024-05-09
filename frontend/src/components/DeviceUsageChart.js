import React from 'react';
import './DeviceUsageChart.css'; // Import CSS file for styling

function DeviceUsageChart() {
    // Example data for device usage
    const deviceData = [
        { device: 'Light Bulbs', usage: 80 },
        { device: 'Thermostat', usage: 65 },
        { device: 'Smart TV', usage: 45 },
        { device: 'Security Cameras', usage: 70 },
        { device: 'Smart Locks', usage: 55 },
    ];

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="chart-title">Device Usage Statistics</h3>
            </div>
            <div className="card-body">
                <ul className="device-list">
                    {deviceData.map((item, index) => (
                        <li key={index} className="device-item">
                            <span className="device-name">{item.device}</span>
                            <div className="usage-bar-container">
                                <div
                                    className="usage-bar"
                                    style={{ width: `${item.usage}%` }}
                                ></div>
                            </div>
                            <span className="usage-percent">{item.usage}%</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default DeviceUsageChart;
