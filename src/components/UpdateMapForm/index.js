import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions/qrcode";
import * as selectors from "../../reducers";

import { 
  MDBContainer, 
  MDBRow, 
  MDBCol, 
  MDBCard, 
  MDBCardBody, 
  MDBInput,
  MDBBtn } from "mdbreact";
import Header from "../Header";
import NodesPlane from "../NodesPlane";
import Spinner from '../../components/Spinner';

import "./styles.css";


const UpdateForm = ({ isFetching, nodes, mapId, fetchData, order, updateNodeFields}) => {
  
  const [level, changeLevel] = useState(1);

  const [isUpdateSelected, changeUpdateSelected] = useState(false);

  const [nodeLevel, changeNodeLevel] = useState('');

  const [nodeName, changeNodeName] = useState('');

  const [nodeType, changeNodeType] = useState('');

  const [selectedNode, changeSelectedNode] = useState({});

  useEffect(() => 
      fetchData(mapId),
      []);


  const handleChangeNode = (node) => {
    
    changeSelectedNode(node);
    changeNodeLevel(node.level);
    changeNodeName(node.name);
    changeNodeType(node.type);
    changeUpdateSelected(true);

  }

  const handleNodeUpdate = () => {

    const updatedNode = { ...selectedNode, 
      name: nodeName,
      type: nodeType,
      level: nodeLevel
    }
    changeUpdateSelected(false);
      console.log(updatedNode);

    updateNodeFields(updatedNode._id, updatedNode)
  }

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
                <NodesPlane level={level} nodes={nodes} order={order} handleChangeNode={handleChangeNode}/> :
                <Spinner />
                }
              </MDBCol>
              <MDBCol>
                <label>Filter by level</label>
                <MDBInput type="number" min={1} max={10} placeholder="nivel" value={level} onChange={e => changeLevel(e.target.value)}/>
                {
                  isUpdateSelected && (
                    <div>
                      <label>Name</label>
                      <MDBInput type="text" min={1} max={10} placeholder="Name" value={nodeName} onChange={e => changeNodeName(e.target.value)}/>
                      <label>Level</label>
                      <MDBInput type="text" min={1} max={10} placeholder="Level" value={nodeLevel} onChange={e => changeNodeLevel(e.target.value)}/>
                      <label>Type</label>
                      <MDBInput type="text" min={1} max={10} placeholder="Node Type" value={nodeType} onChange={e => changeNodeType(e.target.value)}/>
                      <MDBBtn onClick={handleNodeUpdate} >Save</MDBBtn>
                    </div>
                  )
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
    order: selectors.getOrder(state),
  }),
  dispatch => ({
    fetchData(id) {
      dispatch(actions.startFetchingQrData(id));
  },
    updateNodeFields(id, node) {
      dispatch(actions.startUpdatingQrData(id, node));
    }
  })
)(UpdateForm);