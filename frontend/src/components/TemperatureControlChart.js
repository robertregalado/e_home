import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'; // Import Chart.js library
import './TemperatureControlChart.css'; // Import CSS file for styling

function TemperatureControlChart() {
    const chartContainer = useRef(null);
    const chartInstance = useRef(null); // Maintain a reference to the chart instance

    // Example data for temperature control
    const temperatureData = [
        { time: '12:00 AM', temperature: 20 },
        { time: '03:00 AM', temperature: 18 },
        { time: '06:00 AM', temperature: 22 },
        { time: '09:00 AM', temperature: 24 },
        { time: '12:00 PM', temperature: 26 },
        { time: '03:00 PM', temperature: 28 },
        { time: '06:00 PM', temperature: 25 },
        { time: '09:00 PM', temperature: 23 },
    ];

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy(); // Destroy the existing chart instance
        }

        if (chartContainer.current) {
            const ctx = chartContainer.current.getContext('2d');
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: temperatureData.map(item => item.time),
                    datasets: [{
                        label: 'Temperature',
                        data: temperatureData.map(item => item.temperature),
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Temperature (°C)'
                            }
                        },
                        x: {
                            title: {
                                display: true,
                                text: 'Time'
                            }
                        }
                    }
                }
            });
        }
    }, [temperatureData]);

    return (
        <div className="temperature-control-card">
            <div className="card-header">
                <h3 className="chart-title">Temperature Control</h3>
            </div>
            <div className="card-body">
                <canvas ref={chartContainer}></canvas>
            </div>
        </div>
    );
}

export default TemperatureControlChart;
