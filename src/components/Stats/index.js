import { connect } from "react-redux";
import React, { useState, useRef, Fragment, useEffect } from "react";
import Header from "../Header";
import Spinner from '../Spinner';
import * as selectors from "../../reducers";
import * as actions from '../../actions/stats';


import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput, MDBIcon, MDBLink} from "mdbreact";
import { Bar } from "react-chartjs-2";

const Stats = ({ data, isFetching, onLoad, isAuth}) => {
    const state = {
        dataBar: {
          labels: [3, 15, 11],
          datasets: [
            {
              label: "No. Visitas",
              data: [2, 1, 1],
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
        <Fragment>
            <Header nested title="Estadísticas" color="special-color-dark" />
            <MDBContainer size="md">
            <h3 className="h3-responsive text-center font-weight-bold my-5">
                    Lugares más visitados
                </h3>
            <Bar data={state.dataBar} options={state.barChartOptions} />
            </MDBContainer>
        </Fragment>
    )
}

export default connect(
  (state) => ({
    data: selectors.getStats(state),
    isFetching: selectors.getIsFetchingStats(state),
    isAuth: selectors.getRole(state) === 2 ? true : false,
  }),
  dispatch =>({
  onLoad(){
    dispatch(actions.startFetchingStats());
  },
}),
)(Stats);