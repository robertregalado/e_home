// import React from 'react';
// import './ErrorLogs.css'; // Import CSS file for styling

// function ErrorLogs() {
//     // Example data for error logs
//     const errorLogsData = [
//         { timestamp: '2024-04-28 10:15:22', message: 'Device connection lost' },
//         { timestamp: '2024-04-28 09:45:10', message: 'Error loading settings' },
//         { timestamp: '2024-04-28 09:20:05', message: 'Server timeout' },
//         { timestamp: '2024-04-27 15:30:18', message: 'Invalid command received' },
//     ];

//     return (
//         <div className="error-logs">
//             <h3 className="logs-title">Error Logs</h3>
//             <ul className="logs-list">
//                 {errorLogsData.map((log, index) => (
//                     <li key={index} className="log-item">
//                         <span className="timestamp">{log.timestamp}</span>
//                         <span className="message">{log.message}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ErrorLogs;

import React from 'react';
import './ErrorLogs.css'; // Import CSS file for styling

function ErrorLogs() {
    // Example data for error logs
    const errorLogsData = [
        { timestamp: '2024-04-28 10:15:22', message: 'Device connection lost' },
        { timestamp: '2024-04-28 09:45:10', message: 'Error loading settings' },
        { timestamp: '2024-04-28 09:20:05', message: 'Server timeout' },
        { timestamp: '2024-04-27 15:30:18', message: 'Invalid command received' },
    ];

    return (
        <div className="error-logs-card">
            <div className="card-header">
                <h3 className="logs-title">Error Logs</h3>
            </div>
            <div className="card-body">
                <ul className="logs-list">
                    {errorLogsData.map((log, index) => (
                        <li key={index} className="log-item">
                            <span className="timestamp">{log.timestamp}</span>
                            <span className="message">{log.message}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ErrorLogs;
