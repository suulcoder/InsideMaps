import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import Chart from 'chart.js';
import 'chartjs-plugin-dragdata';
import {  MDBBtn } from "mdbreact";

import * as selectors from "../../reducers";
import * as actions from '../../actions/qrcode';

const NodesPlane = ({ filteredCoords, level, updateNodes}) => {

    const chartRef = React.createRef();
    const [hasUpdate, changeHasUpdate] = useState(false);
    const [newPositions, updateNewPositions] = useState([]);

    const handleUpdate = () => {
        const refactoredNewPositions = newPositions.map(node => 
            ({...node, coordinates:[node.x, node.y, 0]}));
        changeHasUpdate(false);
        console.log(refactoredNewPositions);
        refactoredNewPositions.forEach(n => {
            updateNodes(n._id, n);
        })
            
    }


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
                    <MDBBtn onClick={handleUpdate} >Update</MDBBtn>
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
    dispatch => ({
        updateNodes (id, node) {
            dispatch(actions.startUpdatingQrData(id, node));
        }
    })
)(NodesPlane);