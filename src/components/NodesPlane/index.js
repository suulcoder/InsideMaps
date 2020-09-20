import React, { useEffect } from 'react';
import Chart from 'chart.js';

const NodesPlane = ({ coords, nodes }) => {

    const chartRef = React.createRef();

    useEffect(() => {

        const ctx = chartRef.current.getContext("2d");
        Chart.defaults.global.elements.point.backgroundColor = '#2F6C9F';
        Chart.defaults.global.elements.point.radius = 6;

        new Chart(ctx, {
            type: 'scatter',
            data: {
                datasets: [{
                    data: coords,
                    label: "Localidades"
                }]
            },
            options: {
                tooltips: {
                    callbacks: {
                        title: function (tooltipItem, data) {
                            return nodes[tooltipItem[0].index].name.toUpperCase();
                        }
                    }
                },
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'

                    }],
                },
                legend: {
                    display: false,
                }
            }
        });
    }, []);

    return (
        <div>
            <canvas
                id='nodesPlane'
                ref={chartRef}
            />
        </div>
    );
}

export default NodesPlane;