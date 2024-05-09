import React from 'react';
import './Chart.css'; // Import the CSS file for Chart

function Chart() {
    // Assume chart data
    const data = [5, 10, 15, 20, 25];

    // Calculate maximum value for scaling
    const maxValue = Math.max(...data);

    return (
        <div className="chart-container">
            <svg viewBox={`0 0 ${data.length * 30} ${maxValue * 10}`} className="chart-svg">
                {data.map((value, index) => (
                    <rect
                        key={index}
                        x={index * 30}
                        y={maxValue * 10 - value * 10}
                        width="20"
                        height={value * 10}
                        className="bar"
                    />
                ))}
            </svg>
        </div>
    );
}

export default Chart;
