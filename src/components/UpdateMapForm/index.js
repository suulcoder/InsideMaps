import React, { useState, Fragment, useRef, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/qrcode";
import * as selectors from "../../reducers";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import Header from "../Header";
import NodesPlane from "../NodesPlane";
import Spinner from '../../components/Spinner';

import "./styles.css";

const UpdateForm = ({ isFetching, nodes, mapId, fetchData, coords }) => {

  useEffect(() => 
      fetchData(mapId),
      []);


  return(
    <Fragment>
      <Header nested title="Update Map" color="special-color-dark" />
      <MDBContainer size="md" >
        <h2 className="h1-responsive text-center font-weight-bold my-5">
          Nodes in Plane
        </h2>
        <MDBCard className="dark-grey-text">
          <MDBCardBody className="z-depth-2">
            <MDBRow className="container">
              <MDBCol md="12" className="mb-3">
                {!isFetching && nodes ? 
                <NodesPlane coords={coords} nodes={nodes}/> :
                <Spinner />
                }
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </Fragment>
  );

}

export default connect(
  state => ({
    isFetching: selectors.getIsFetchingQr(state),
    nodes: selectors.getQrData(state),
    mapId: selectors.getSelectedMap(state)._id,
    coords: selectors.getCoordinates(state),
  }),
  dispatch => ({
    fetchData(id) {
      console.log("Esto le mando desde el el componente", id)
      dispatch(actions.startFetchingQrData(id))
  }
  })
)(UpdateForm);