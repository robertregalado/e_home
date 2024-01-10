import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LightsComponent from './LightsComponent';
import AddDetailsModal from './AddDetailsModal';

function Devices() {
    const deviceTypes = [
        { name: 'Lights', path: '/lights' },
        { name: 'Cameras', path: '/cameras' },
        { name: 'Thermostats', path: '/thermostats' },
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

    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold mb-4">Add Devices</h1>
            <div className="flex space-x-4 mb-6">
                {deviceTypes.map((deviceType) => (
                    <button
                        key={deviceType.path}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                        onClick={() => openModal(deviceType)}
                    >
                        {deviceType.name}
                    </button>
                ))}
            </div>

            {selectedDeviceType && (
                <AddDetailsModal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    deviceType={selectedDeviceType}
                />
            )}
        </div>
    );
}

export default Devices;



