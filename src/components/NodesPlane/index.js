import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";

import Chart from "chart.js";
import "chartjs-plugin-dragdata";
import { MDBBtn } from "mdbreact";

import * as selectors from "../../reducers";
import * as actions from "../../actions/qrcode";

const NodesPlane = ({
	filteredCoords,
	level,
	updateNodes,
	handleChangeNode,
}) => {
	Chart.defaults.global.elements.point.backgroundColor = "#2F6C9F";
	Chart.defaults.global.elements.point.radius = 6;

	const chartRef = useRef(null);
	const [chartInstance, setChartInstance] = useState(null);
	const [hasUpdate, changeHasUpdate] = useState(false);
	const [newPositions, updateNewPositions] = useState([]);

	const handleUpdate = () => {
		const refactoredNewPositions = newPositions.map((node) => ({
			...node,
			coordinates: [node.x, node.y, 0],
		}));
		changeHasUpdate(false);
		//console.log(refactoredNewPositions);
		refactoredNewPositions.forEach((n) => {
			updateNodes(n._id, n);
		});
		chartInstance.update();
	};

	useEffect(() => {
		if (chartInstance) chartInstance.update();
	}, [filteredCoords]);

	useEffect(() => {
		if (chartRef && chartRef.current) {
			const newGraphInstance = new Chart(
				chartRef.current.getContext("2d"),
				{
					type: "scatter",
					data: {
						datasets: [
							{
								data: filteredCoords,
								label: "Localidades",
							},
						],
					},
					options: {
						dragData: true,
						dragX: true,
						dragDataRound: 2,
						onClick: function (e, datasetIndex, index, value) {
							if (datasetIndex.length > 0) {
								handleChangeNode(
									filteredCoords[datasetIndex[0]._index]
								);
								console.log(
									"was clicked",
									filteredCoords[datasetIndex[0]._index]
								);
							}
						},
						onDragStart: function (e, element) {
							changeHasUpdate(true);
						},
						onDrag: function (e, datasetIndex, index, value) {
							e.target.style.cursor = "default";
						},
						onDragEnd: function (e, datasetIndex, index, value) {
							e.target.style.cursor = "default";
							updateNewPositions((newPositions) => [
								...newPositions,
								value,
							]);
						},
						tooltips: {
							callbacks: {
								title: function (tooltipItem, data) {
									return filteredCoords[tooltipItem[0].index]
										.name;
								},
							},
						},
						scales: {
							xAxes: [
								{
									type: "linear",
									position: "bottom",
								},
							],
						},
						legend: {
							display: false,
						},
					},
				}
			);

			setChartInstance(newGraphInstance);
		}

		//myChart.update();
	}, [level, chartRef]);

	console.log(filteredCoords);

	return (
		<div>
			<canvas ref={chartRef} />

			<div>
				{hasUpdate ? (
					<MDBBtn onClick={handleUpdate}>Update Positions</MDBBtn>
				) : (
					<span></span>
				)}
			</div>
		</div>
	);
};

export default connect(
	(state, { level }) => ({
		filteredCoords: selectors.getCoordinatesByLevel(state, level),
	}),
	(dispatch) => ({
		updateNodes(id, node) {
			dispatch(actions.startUpdatingQrData(id, node));
		},
	})
)(NodesPlane);
