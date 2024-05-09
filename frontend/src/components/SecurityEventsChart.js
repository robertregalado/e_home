// import React from 'react';
// import './SecurityEventsChart.css'; // Import CSS file for styling

// function SecurityEventsChart() {
//     // Example data for security events
//     const securityEventData = [
//         { time: '12:00 AM', event: 'Unauthorized Access' },
//         { time: '03:00 AM', event: 'Malware Detected' },
//         { time: '06:00 AM', event: 'System Intrusion' },
//         { time: '09:00 AM', event: 'Suspicious Activity' },
//         { time: '12:00 PM', event: 'Brute Force Attack' },
//         { time: '03:00 PM', event: 'DDoS Attack' },
//         { time: '06:00 PM', event: 'Phishing Attempt' },
//         { time: '09:00 PM', event: 'Data Breach' },
//     ];

//     return (
//         <div className="security-events-chart">
//             <h3 className="chart-title">Security Events</h3>
//             <ul className="event-list">
//                 {securityEventData.map((item, index) => (
//                     <li key={index} className="event-item">
//                         <span className="time">{item.time}</span>
//                         <span className="event">{item.event}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default SecurityEventsChart;

import React from 'react';
import './SecurityEventsChart.css'; // Import CSS file for styling

function SecurityEventsChart() {
    // Example data for security events
    const securityEventData = [
        { time: '12:00 AM', event: 'Unauthorized Access' },
        { time: '03:00 AM', event: 'Malware Detected' },
        { time: '06:00 AM', event: 'System Intrusion' },
        { time: '09:00 AM', event: 'Suspicious Activity' },
        { time: '12:00 PM', event: 'Brute Force Attack' },
        { time: '03:00 PM', event: 'DDoS Attack' },
        { time: '06:00 PM', event: 'Phishing Attempt' },
        { time: '09:00 PM', event: 'Data Breach' },
    ];

    return (
        <div className="security-events-card">
            <div className="card-header">
                <h3 className="chart-title">Security Events</h3>
            </div>
            <div className="card-body">
                <ul className="event-list">
                    {securityEventData.map((item, index) => (
                        <li key={index} className="event-item">
                            <span className="time">{item.time}</span>
                            <span className="event">{item.event}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SecurityEventsChart;

