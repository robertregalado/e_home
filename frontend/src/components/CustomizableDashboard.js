import React from 'react';
import './CustomizableDashboard.css'; // Import CSS file for styling

function CustomizableDashboard() {
    // Example data for customizable dashboard
    const widgets = [
        { id: 1, name: 'Device Status', width: '50%', height: '200px' },
        { id: 2, name: 'Energy Consumption Chart', width: '50%', height: '400px' },
        { id: 3, name: 'Temperature Control Chart', width: '100%', height: '300px' },
        { id: 4, name: 'Security Events Chart', width: '50%', height: '300px' },
    ];

    return (
        <div className="customizable-dashboard">
            <h2 className="dashboard-title">Customizable Dashboard</h2>
            <div className="widgets-container">
                {widgets.map((widget) => (
                    <div key={widget.id} className="widget" style={{ width: widget.width, height: widget.height }}>
                        <h3 className="widget-title">{widget.name}</h3>
                        {/* Add content for each widget */}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomizableDashboard;
