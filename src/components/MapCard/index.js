import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/map';


import {
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBMask,
} from "mdbreact";

const MapCard = ({name, level, id, onDelete}) => {
  const myId = id;
  return (

    <MDBCol id={id} lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={require('../../../public/img/indoor-map.jpg')}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">{name}</h4>
            <p className="grey-text">
              Level: {level}
            </p>
            <MDBBtn color="indigo" size="sm">
              <MDBIcon far icon="clone" className="left" /> MDBView project
            </MDBBtn>
          </MDBCardBody>
        </MDBCol>
  );
}

export default connect(
  (state,{name, level, id}) => ({
  }),
  dispatch =>({
  onDelete(id){
    dispatch(actions.startDeletingMap(id));
  },
}),
)(MapCard);

