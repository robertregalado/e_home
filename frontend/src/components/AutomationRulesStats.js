// import React from 'react';
// import './AutomationRulesStats.css'; // Import CSS file for styling

// function AutomationRulesStats() {
//     // Example data for automation rules stats
//     const automationRulesData = [
//         { category: 'Lights', totalRules: 25, activeRules: 20 },
//         { category: 'Thermostat', totalRules: 15, activeRules: 12 },
//         { category: 'Security Cameras', totalRules: 30, activeRules: 25 },
//         { category: 'Smart Locks', totalRules: 18, activeRules: 15 },
//     ];

//     return (
//         <div className="automation-rules-stats">
//             <h3 className="chart-title">Automation Rules Stats</h3>
//             <ul className="stats-list">
//                 {automationRulesData.map((item, index) => (
//                     <li key={index} className="stats-item">
//                         <span className="category">{item.category}</span>
//                         <span className="total-rules">Total Rules: {item.totalRules}</span>
//                         <span className="active-rules">Active Rules: {item.activeRules}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default AutomationRulesStats;

import React from 'react';
import './AutomationRulesStats.css'; // Import CSS file for styling

function AutomationRulesStats() {
    // Example data for automation rules stats
    const automationRulesData = [
        { category: 'Lights', totalRules: 25, activeRules: 20 },
        { category: 'Thermostat', totalRules: 15, activeRules: 12 },
        { category: 'Security Cameras', totalRules: 30, activeRules: 25 },
        { category: 'Smart Locks', totalRules: 18, activeRules: 15 },
    ];

    return (
        <div className="automation-rules-card">
            <div className="card-header">
                <h3 className="chart-title">Automation Rules Stats</h3>
            </div>
            <div className="card-body">
                <ul className="stats-list">
                    {automationRulesData.map((item, index) => (
                        <li key={index} className="stats-item">
                            <span className="category">{item.category}</span>
                            <span className="total-rules">Total Rules: {item.totalRules}</span>
                            <span className="active-rules">Active Rules: {item.activeRules}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AutomationRulesStats;

