import React, { useRef, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

const BubbleChart = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const ctx = canvasRef.current.getContext('2d');

        const data = {
            datasets: [
                {
                    label: 'Nitrogen (N2)',
                    data: [{ x: 10, y: 10, r: 40 }],
                    backgroundColor: 'rgba(77, 175, 224, 0.6)', // Light blue
                },
                {
                    label: 'Oxygen (O2)',
                    data: [{ x: 30, y: 30, r: 50 }],
                    backgroundColor: 'rgba(255, 99, 132, 0.6)', // Light red
                },
                {
                    label: 'Argon (Ar)',
                    data: [{ x: 20, y: 10, r: 20 }],
                    backgroundColor: 'rgba(153, 102, 255, 0.6)', // Light purple
                },
                {
                    label: 'Carbon Dioxide (CO2)',
                    data: [{ x: 25, y: 20, r: 35 }],
                    backgroundColor: 'rgba(255, 159, 64, 0.6)', // Light orange
                },
                {
                    label: 'Neon (Ne)',
                    data: [{ x: 15, y: 25, r: 15 }],
                    backgroundColor: 'rgba(255, 205, 86, 0.6)', // Light yellow
                },
                {
                    label: 'Helium (He)',
                    data: [{ x: 30, y: 15, r: 25 }],
                    backgroundColor: 'rgba(75, 192, 192, 0.6)', // Light teal
                }
            ]
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false, // Make chart responsive to parent container
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return tooltipItem.dataset.label; // Display the gas name in the tooltip
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true,
                    min: 0,
                    max: 40, // Adjusted maximum value for clarity
                    title: {
                        display: true,
                        text: 'Concentration Level (arbitrary units)',
                        color: 'white' // Make x-axis title white
                    },
                    ticks: {
                        color: 'white' // Make x-axis labels white
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Optional: light grid lines
                    }
                },
                y: {
                    beginAtZero: true,
                    min: 0,
                    max: 40, // Adjusted maximum value for clarity
                    title: {
                        display: true,
                        text: 'Gas Composition (arbitrary units)',
                        color: 'white' // Make y-axis title white
                    },
                    ticks: {
                        color: 'white' // Make y-axis labels white
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)' // Optional: light grid lines
                    }
                }
            }
        };

        // Create the chart
        const gasBubbleChart = new Chart(ctx, {
            type: 'bubble',
            data: data,
            options: options
        });

        // Cleanup on unmount
        return () => {
            gasBubbleChart.destroy();
        };
    }, []);

    return (
        <div style={{ width: '80%', height: '400px', margin: '0 auto' }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default BubbleChart;
