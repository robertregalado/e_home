// import React from 'react';
// import './UserInteractionMetrics.css'; // Import CSS file for styling

// function UserInteractionMetrics() {
//     // Example data for user interaction metrics
//     const userInteractionData = [
//         { action: 'Login', count: 150 },
//         { action: 'Logout', count: 130 },
//         { action: 'Device Control', count: 300 },
//         { action: 'Settings Update', count: 80 },
//     ];

//     return (
//         <div className="user-interaction-metrics">
//             <h3 className="chart-title">User Interaction Metrics</h3>
//             <ul className="metrics-list">
//                 {userInteractionData.map((item, index) => (
//                     <li key={index} className="metrics-item">
//                         <span className="action">{item.action}</span>
//                         <span className="count">Count: {item.count}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default UserInteractionMetrics;

import React from 'react';
import './UserInteractionMetrics.css'; // Import CSS file for styling

function UserInteractionMetrics() {
    // Example data for user interaction metrics
    const userInteractionData = [
        { action: 'Login', count: 150 },
        { action: 'Logout', count: 130 },
        { action: 'Device Control', count: 300 },
        { action: 'Settings Update', count: 80 },
    ];

    return (
        <div className="user-interaction-card">
            <div className="card-header">
                <h3 className="chart-title">User Interaction Metrics</h3>
            </div>
            <div className="card-body">
                <ul className="metrics-list">
                    {userInteractionData.map((item, index) => (
                        <li key={index} className="metrics-item">
                            <span className="action">{item.action}</span>
                            <span className="count">Count: {item.count}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default UserInteractionMetrics;

