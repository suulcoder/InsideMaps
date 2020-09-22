import React, { useEffect } from 'react';
import { connect } from "react-redux";

import Chart from 'chart.js';

import * as selectors from "../../reducers";

const NodesPlane = ({ nodes, filteredCoords , level, isFetching }) => {

    const chartRef = React.createRef();

    useEffect(() => {
        if(!isFetching) {

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
    
            myChart.data.datasets[0].data = filteredCoords;
            console.log("Desde el nodesplane",filteredCoords);
            myChart.update();
        }
        
    }, [level, isFetching]);

    return (
        <div>
            <canvas
                id='nodesPlane'
                ref={chartRef}
            />
        </div>
    );
}

// export default NodesPlane;

export default connect(
    (state, {level}) => ({
        filteredCoords: selectors.getCoordinatesByLevel(state, level),
        isFetching: selectors.getIsFetchingQr(state),
    }),
    undefined
)(NodesPlane);