import React, { useState, Fragment, useRef, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/qrcode";
import * as selectors from "../../reducers";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from "mdbreact";
import Header from "../Header";
import NodesPlane from "../NodesPlane";
import Spinner from '../../components/Spinner';
import range from '../../modules/range';

import "./styles.css";


const UpdateForm = ({ isFetching, nodes, mapId, fetchData, order }) => {
  
  const [level, changeLevel] = useState(1);

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
              <MDBCol md="8" className="mb-3">
                {isFetching   ? 
                <NodesPlane level={level} nodes={nodes} order={order} /> :
                <Spinner />
                }
              </MDBCol>
              <MDBCol>
                <label>Filter by level</label>
                <MDBInput type="number" min={1} max={10} placeholder="nivel" value={level} onChange={e => changeLevel(e.target.value)}/>
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
    order: selectors.getOrder(state),
  }),
  dispatch => ({
    fetchData(id) {
      dispatch(actions.startFetchingQrData(id))
  }
  })
)(UpdateForm);