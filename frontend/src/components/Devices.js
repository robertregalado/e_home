// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import LightsComponent from './LightsComponent';
// import AddDetailsModal from './AddDetailsModal';

// function Devices() {
//     const deviceTypes = [
//         { name: 'Lights', path: '/lights' },
//         { name: 'Cameras', path: '/cameras' },
//         { name: 'Thermostats', path: '/thermostats' },
//         // Add more device types here
//     ];

//     const [selectedDeviceType, setSelectedDeviceType] = useState(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = (deviceType) => {
//         setSelectedDeviceType(deviceType);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setSelectedDeviceType(null);
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="p-8">
//             <h1 className="text-3xl font-semibold mb-4">Add Devices</h1>
//             <div className="flex space-x-4 mb-6">
//                 {deviceTypes.map((deviceType) => (
//                     <button
//                         key={deviceType.path}
//                         className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
//                         onClick={() => openModal(deviceType)}
//                     >
//                         {deviceType.name}
//                     </button>
//                 ))}
//             </div>

//             {selectedDeviceType && (
//                 <AddDetailsModal
//                     isOpen={isModalOpen}
//                     onClose={closeModal}
//                     deviceType={selectedDeviceType}
//                 />
//             )}
//         </div>
//     );
// }

// export default Devices;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddDetailsModal from './AddDetailsModal';

function Devices() {
    const deviceTypes = [
        { name: 'Lights', path: '/lights', status: 'Online' },
        { name: 'Cameras', path: '/cameras', status: 'Offline' },
        { name: 'Thermostats', path: '/thermostats', status: 'Online' },
        // Add more device types here
    ];

    const [selectedDeviceType, setSelectedDeviceType] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (deviceType) => {
        setSelectedDeviceType(deviceType);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedDeviceType(null);
        setIsModalOpen(false);
    };

    const handleControlDevice = (deviceType) => {
        // Implement device control functionality here
        console.log(`Controlling ${deviceType.name}`);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold mb-4 mt-8">Add Devices</h1>
            <div className="flex flex-wrap gap-4 mb-6">
                {deviceTypes.map((deviceType) => (
                    <div key={deviceType.path}>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            onClick={() => openModal(deviceType)}
                        >
                            {deviceType.name}
                        </button>
                        <span className="ml-2 text-sm">{deviceType.status}</span>
                    </div>
                ))}
            </div>

            {selectedDeviceType && (
                <AddDetailsModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    deviceType={selectedDeviceType}
                />
            )}

            {/* Additional Features */}
            <h2 className="text-xl font-semibold mb-4">Additional Features</h2>
            <div className="flex flex-wrap gap-4 mb-6">
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={() => handleControlDevice(deviceTypes[0])}
                >
                    Control Lights
                </button>
                {/* Add more control buttons for other devices */}
            </div>

            <h2 className="text-xl font-semibold mb-4">Device Grouping</h2>
            {/* Implement device grouping functionality */}
            {/* Display grouped devices and provide controls */}
        </div>
    );
}

export default Devices;


