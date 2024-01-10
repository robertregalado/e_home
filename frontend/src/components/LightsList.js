// components/LightsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LightsList() {
    const [lights, setLights] = useState([]);

    useEffect(() => {
        fetchLights();
    }, []);

    const fetchLights = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/lights');
            setLights(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const toggleLight = async (lightId, currentState) => {
    try {
        // Toggle the current state
        const newLightState = !currentState;

        // Update the light's state on the server
        await axios.post('http://localhost:5000/api/toggle-light', { lightId, currentState: newLightState });

        // Update the lights list
        const updatedLights = lights.map(light => 
            light.id === lightId ? { ...light, state: newLightState } : light
        );
        setLights(updatedLights);
    } catch (error) {
        console.error(error);
    }
};



    return (
        <div className="py-4">
            <h2 className="text-xl font-semibold mb-4">Lights</h2>
            <div className="grid grid-cols-2 gap-4">
                {lights.map(light => (
                    <div key={light.id} className="bg-white rounded shadow-md p-4">
                        <span className="text-lg mb-2">{light.name}</span>
                        <button
                            className={`px-4 py-2 rounded ${
                                light.state ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                            }`}
                            onClick={() => toggleLight(light.id, light.state)}
                        >
                            {light.state ? 'Turn Off' : 'Turn On'}
                        </button>
                    </div>
                ))}
            </div>
            {/* Other device controls */}
        </div>
    );
}

export default LightsList;
