// import React from 'react';
// import './Notifications.css'; // Import CSS file for styling

// const Notifications = ({ notifications }) => {
//     return (
//         <div className="notifications">
//             <h2 className="notifications-title">Notifications</h2>
//             <ul className="notification-list">
//                 {notifications.map((notification, index) => (
//                     <li key={index} className="notification-item">
//                         <span className="notification-text">{notification}</span>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default Notifications;

import React from 'react';
import './Notifications.css'; // Import CSS file for styling

const Notifications = ({ notifications }) => {
    return (
        <div className="notifications">
            <h2 className="notifications-title">Notifications</h2>
            <ul className="notification-list">
                {notifications && notifications.map((notification, index) => (
                    <li key={index} className="notification-item">
                        <span className="notification-text">{notification}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;

