import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LightsList from './LightsList';

function LightsComponent() {
    const [newLightName, setNewLightName] = useState('');
    const [newLightState, setNewLightState] = useState(false);
    const [lights, setLights] = useState([]);

    const fetchLights = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/lights');
            setLights(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const addLight = async () => {
        try {
            const response = await axios.post('http://localhost:5000/api/lights', {
                name: newLightName,
                state: newLightState
            });

            // Handle the response or update the lights list
            console.log(response.data); // Output the newly added light

            // Fetch updated lights list
            fetchLights();

            // Clear input fields after adding light
            setNewLightName('');
            setNewLightState(false);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchLights();
    }, []);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="p-4 bg-white shadow-md rounded-md">
                <LightsList lights={lights} fetchLights={fetchLights} /> {/* Pass lights and fetchLights as props */}
                <h2 className="text-lg font-semibold mb-4">Add New Light</h2>
                <div className="mb-2">
                    <input
                        type="text"
                        placeholder="Light Name"
                        className="w-full px-4 py-2 border rounded"
                        value={newLightName}
                        onChange={(e) => setNewLightName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            className="form-checkbox"
                            checked={newLightState}
                            onChange={() => setNewLightState(!newLightState)}
                        />
                        <span className="text-sm">On</span>
                    </label>
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    onClick={addLight}
                >
                    Add Light
                </button>
            </div>
        </div>
    );
}

export default LightsComponent;
