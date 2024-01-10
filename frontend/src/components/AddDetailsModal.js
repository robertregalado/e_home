import React, { useState } from 'react';

function AddDetailsModal({ isOpen, onClose, deviceType }) {
    const [deviceName, setDeviceName] = useState('');
    const [deviceState, setDeviceState] = useState(false);

    const handleAddDevice = () => {
        // Implement the logic to add device details to the database or state
        // You can use the deviceName and deviceState values
        console.log('Adding device:', deviceName, deviceState);
        onClose(); // Close the modal after adding
    };

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center ${
                isOpen ? 'visible' : 'invisible'
            }`}
        >
            <div className="bg-white p-6 rounded-md shadow-md">
                <h2 className="text-lg font-semibold mb-4">
                    Add Details for {deviceType.name}
                </h2>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Device Name
                    </label>
                    <input
                        type="text"
                        className="mt-1 px-4 py-2 border rounded w-full"
                        value={deviceName}
                        onChange={(e) => setDeviceName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Device State
                    </label>
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={deviceState}
                            onChange={() => setDeviceState(!deviceState)}
                        />
                        <span className="text-sm">On</span>
                    </div>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={handleAddDevice}
                >
                    Add {deviceType.name}
                </button>
                <button
                    className="ml-2 text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default AddDetailsModal;

