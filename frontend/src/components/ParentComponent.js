// ParentComponent.js
import React, { useState } from 'react';
import DeviceGrouping from './DeviceGrouping';

function ParentComponent() {
  const [devices, setDevices] = useState([...]); // Initialize devices state
  const handleToggle = (deviceId) => {
    // Toggle the status of the device with the given ID
    // Update the devices state accordingly
    // Example: Implement the logic to toggle the status of the device
    const updatedDevices = devices.map(device => {
      if (device.id === deviceId) {
        return {
          ...device,
          status: device.status === 'On' ? 'Off' : 'On'
        };
      }
      return device;
    });
    setDevices(updatedDevices);
  };

  return (
    <div>
      {/* Render DeviceGrouping component and pass the devices array and handleToggle function as props */}
      <DeviceGrouping devices={devices} onToggle={handleToggle} />
    </div>
  );
}

export default ParentComponent;
