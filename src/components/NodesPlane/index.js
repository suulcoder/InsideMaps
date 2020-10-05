import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import Chart from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import 'chartjs-plugin-dragdata';
import {  MDBBtn , MDBLink } from "mdbreact";

import * as selectors from "../../reducers";

const NodesPlane = ({ filteredCoords, level }) => {

    const chartRef = React.createRef();
    const [hasUpdate, changeHasUpdate] = useState(false);
    const [newPositions, updateNewPositions] = useState([]);


    useEffect(() => {

            const ctx = chartRef.current.getContext("2d");
            Chart.defaults.global.elements.point.backgroundColor = '#2F6C9F';
            Chart.defaults.global.elements.point.radius = 6;
    
            const myChart = new Chart(ctx, {
                type: 'scatter',
                data: {
                    datasets: [{
                        data: filteredCoords,
                        label: "Localidades"
                    }]
                },
                options: {
                    dragData: true,
                    dragX:true,
                    dragDataRound: 2,
                    onDragStart: function(e, element) {
                        console.log("Comenzo drag");
                        changeHasUpdate(true);
                    },
                    onDrag: function(e, datasetIndex, index, value) {
                        e.target.style.cursor = 'default';
                    },
                    onDragEnd: function(e, datasetIndex, index, value) {
                        e.target.style.cursor = 'default'
                        updateNewPositions(newPositions => [...newPositions, value]);
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
            // myChart.data.datasets.forEach((dataset) => {
            //     dataset.data.pop();
            // })
            // myChart.data.datasets.forEach((dataset) => {
            //     dataset.data.push(filteredCoords)
            // });
            console.log("Desde el nodesplane",filteredCoords);
            myChart.update();
        
    }, [level]);

    return (
        <div>
            <canvas
                id='nodesPlane'
                ref={chartRef}
            />
        
        <div>
            {
                hasUpdate ?
                    <button onClick={() => console.log(newPositions)} >Update</button>
                : 
                <span></span>
            }
        </div>

        </div>
    );
}


export default connect(
    (state, {level}) => ({
        filteredCoords: selectors.getCoordinatesByLevel(state, level),
    }),
    undefined
)(NodesPlane);