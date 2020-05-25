import React from 'react';
import { connect } from 'react-redux';

import './styles.css';
import * as actions from '../../actions/map';
import * as selectors from "../../reducers";

import "./styles.css"

import {
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBCard,
   MDBCardTitle, MDBCardText, MDBCardImage
} from "mdbreact";


const MapCard = ({name, level, id, description, isConfirmed, onDelete, onSelectMap}) => {
  return (

    <MDBCol md="4" style={{ marginTop: "2rem" }}>
      <MDBCard
      >
        <img className="card-image-map" src={require('../../../public/img/indoor-map.jpg')} onClick={() => onSelectMap(id)} />
      <MDBCardBody>
            <MDBCardTitle>{name}</MDBCardTitle>
            <hr />
            <p className="grey-text">
                Level: {level}
              </p>
            {!isConfirmed && <p className="grey-text">
              Pending ...
            </p>}
            <MDBCardText>
              {description}
            </MDBCardText>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5>
                View
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </a>
            <a href='#!' className='black-text d-flex justify-content-end'>
              <h5>
                <MDBIcon icon='trash' className='ml-2 red-text' onClick={() => onDelete(id)} />
              </h5>
            </a>
          </MDBCardBody>
      </MDBCard>
          
    </MDBCol>
  );
}

export default connect(
  (state, {name, level, id, isConfirmed}) => ({
  }),
  dispatch =>({
  onDelete(id){
    console.log("Deleting ", id)
    dispatch(actions.startDeletingMap(id));
  },
  onSelectMap(id) {
    dispatch(actions.selectingMap(id))
  }
}),
)(MapCard);

