import React, { useState, Fragment, useRef, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/qrcode";
import * as selectors from "../../reducers";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import Header from "../Header";
import NodesPlane from "../NodesPlane";
import Spinner from '../../components/Spinner';
import range from '../../modules/range';

import "./styles.css";


const UpdateForm = ({ isFetching, nodes, mapId, fetchData, order, myLevel, coordin}) => {
  
  const selectValues = [1,2,3,4,5,6,7]
  const [filteredNodes, changeFilteredNodes] = useState([])
  const [level, changeLevel] = useState(1);

  useEffect(() => 
      fetchData(mapId),
      []);

  const handleChangeLevel = (e) => {
    if(nodes && order) {
      myLevel = level
      console.log("El nivel seleccionado", level)
      const newFilteredNodes = order.map((v, i) => { 
        if(nodes[i].level ==  level){
          return {x:nodes[i].coordinates[0], y:nodes[i].coordinates[1] }
        } else {
          console.log(nodes[i].level);
        }
      })
      console.log("Esto esta en el handle", coordin)
      changeFilteredNodes(newFilteredNodes);
        
    }
  }

  return(
    <Fragment>
      <Header nested title="Update Map" color="special-color-dark" />
      <MDBContainer size="md" >
        <h2 className="h1-responsive text-center font-weight-bold my-5">
          Nodes in Plane
        </h2>
        <input type="number" min={1} max={10} placeholder="nivel" value={level} onChange={e => changeLevel(e.target.value)}></input>
        <button onClick={handleChangeLevel} >Search</button>
        <MDBCard className="dark-grey-text">
          <MDBCardBody className="z-depth-2">
            <MDBRow className="container">
              <MDBCol md="12" className="mb-3">
                {!isFetching && nodes && order ? 
                <NodesPlane level={level} nodes={nodes}/> :
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
  (state, {myLevel}) => ({
    isFetching: selectors.getIsFetchingQr(state),
    nodes: selectors.getQrData(state),
    mapId: selectors.getSelectedMap(state)._id,
    order: selectors.getOrder(state),
    coordin: selectors.getCoordinatesByLevel(state,myLevel)
  }),
  dispatch => ({
    fetchData(id) {
      dispatch(actions.startFetchingQrData(id))
  }
  })
)(UpdateForm);