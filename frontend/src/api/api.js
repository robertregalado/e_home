// api.js

// Simulated data representing connected devices
const connectedDevicesData = [
  { id: 1, name: 'Smart Light Bulb', type: 'Light', status: 'On' },
  { id: 2, name: 'Smart Thermostat', type: 'Thermostat', status: 'Off' },
  { id: 3, name: 'Security Camera', type: 'Camera', status: 'Active' },
  // Add more device data as needed
];

// Function to fetch connected devices from the server
export const getConnectedDevices = async () => {
  // Simulate an asynchronous API call (e.g., fetching data from a server)
  return new Promise((resolve, reject) => {
    // Simulate a delay to mimic network latency
    setTimeout(() => {
      // Return the list of connected devices
      resolve(connectedDevicesData);
    }, 1000); // 1 second delay
  });
};
