import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import Chart from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import 'chartjs-plugin-dragdata';

import * as selectors from "../../reducers";

const NodesPlane = ({ filteredCoords }) => {

    const chartRef = React.createRef();

    useEffect(() => {

            const ctx = chartRef.current.getContext("2d");
            Chart.defaults.global.elements.point.backgroundColor = '#2F6C9F';
            Chart.defaults.global.elements.point.radius = 6;
    
            const myChart = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        data: [],
                        label: "Localidades"
                    }]
                },
                options: {
                    dragData: true,
                    dragX:true,
                    dragDataRound: 2,
                    onDragStart: function(e, element) {
                        console.log("Comenzo drag")
                    },
                    onDrag: function(e, datasetIndex, index, value) {
                        e.target.style.cursor = 'default'
                    },
                    onDragEnd: function(e, datasetIndex, index, value) {
                        e.target.style.cursor = 'default'
                    },
                    tooltips: {
                        callbacks: {
                            title: function (tooltipItem, data) {
                                return filteredCoords[tooltipItem[0].index].name;
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

            myChart.data.datasets[0].data = filteredCoords;
            console.log("Desde el nodesplane",filteredCoords);
            myChart.update();
        
    }, [filteredCoords]);

    return (
        <div>
            <canvas
                id='nodesPlane'
                ref={chartRef}
            />
        </div>
    );
}


export default connect(
    (state, {level}) => ({
        filteredCoords: selectors.getCoordinatesByLevel(state, level),
    }),
    undefined
)(NodesPlane);