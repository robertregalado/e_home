// import React from 'react';
// import './EnergyConsumptionChart.css'; // Import CSS file for styling

// function EnergyConsumptionChart() {
//     // Example data for energy consumption
//     const energyData = [
//         { month: 'January', consumption: 150 },
//         { month: 'February', consumption: 120 },
//         { month: 'March', consumption: 130 },
//         { month: 'April', consumption: 140 },
//         { month: 'May', consumption: 135 },
//         { month: 'June', consumption: 145 },
//     ];

//     return (
//         <div className="energy-consumption-chart">
//             <h3 className="chart-title">Energy Consumption Trends</h3>
//             <ul className="energy-list">
//                 {energyData.map((item, index) => (
//                     <li key={index} className="energy-item">
//                         <span className="month">{item.month}</span>
//                         <div className="consumption-bar-container">
//                             <div
//                                 className="consumption-bar"
//                                 style={{ height: `${item.consumption}px` }}
//                             ></div>
//                         </div>
//                         <span className="consumption-value">{item.consumption} kWh</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default EnergyConsumptionChart;

import React from 'react';
import './EnergyConsumptionChart.css'; // Import CSS file for styling

function EnergyConsumptionChart() {
    // Example data for energy consumption
    const energyData = [
        { month: 'January', consumption: 150 },
        { month: 'February', consumption: 120 },
        { month: 'March', consumption: 130 },
        { month: 'April', consumption: 140 },
        { month: 'May', consumption: 135 },
        { month: 'June', consumption: 145 },
    ];

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="chart-title">Energy Consumption Trends</h3>
            </div>
            <div className="card-body">
                <ul className="energy-list">
                    {energyData.map((item, index) => (
                        <li key={index} className="energy-item">
                            <span className="month">{item.month}</span>
                            <div className="consumption-bar-container">
                                <div
                                    className="consumption-bar"
                                    style={{ height: `${item.consumption}px` }}
                                ></div>
                            </div>
                            <span className="consumption-value">{item.consumption} kWh</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EnergyConsumptionChart;

