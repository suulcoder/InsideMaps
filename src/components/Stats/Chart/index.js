
import React, { useState, useRef, Fragment, useEffect } from "react";
import { Bar } from "react-chartjs-2";
 

const Chart = ({collection}) => {
    const state = {
        dataBar: {
          labels: [collection[0]._id, collection[1]._id, collection[2]._id],
          datasets: [
            {
              label: "No. Visitas",
              data: [collection[0].times_visited, collection[1].times_visited, collection[2].times_visited],
              backgroundColor: [
                "rgba(255, 134,159,0.4)",
                "rgba(98,  182, 239,0.4)",
                "rgba(255, 218, 128,0.4)",
                "rgba(113, 205, 205,0.4)",
                "rgba(170, 128, 252,0.4)",
                "rgba(255, 177, 101,0.4)"
              ],
              borderWidth: 2,
              borderColor: [
                "rgba(255, 134, 159, 1)",
                "rgba(98,  182, 239, 1)",
                "rgba(255, 218, 128, 1)",
                "rgba(113, 205, 205, 1)",
                "rgba(170, 128, 252, 1)",
                "rgba(255, 177, 101, 1)"
              ]
            }
          ]
        },
        barChartOptions: {
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            xAxes: [
              {
                barPercentage: 1,
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                }
              }
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  color: "rgba(0, 0, 0, 0.1)"
                },
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      }
    return(
        <Bar data={state.dataBar} options={state.barChartOptions} />
    )
}

export default Chart
