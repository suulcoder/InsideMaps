import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import './styles.css';
import * as actions from '../../actions/map';
import * as selectors from '../../reducers';

import "./styles.css"

import {
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBCard,
   MDBCardTitle, MDBCardText
} from "mdbreact";

import Map from '../Map';


const MapCard = ({name, location, level, id, description, isConfirmed, onDelete, onSelectMap, isAuth}) => {
  
  const history = useHistory();

  const STATIC_VIEWPORT = {
    width: "100%",
    height: "300px",
    lat: location.coordinates[1],
    long: location.coordinates[0],
    zoom: 16
  }

  const handleSelectMapAndNavidate = () => {
    onSelectMap(id)
    history.push(`/map/${id}/update`);
  }

  const handleCreateQr = () => {
    onSelectMap(id);
    history.push(`/map/${id}/qrgen`)
  }
  return (

    <MDBCol  md="4" style={{ marginTop: "2rem" }}>
      <MDBCard 
      >
        <Map
          containerElement={<div style={{ height: STATIC_VIEWPORT.height }} />}
          mapElement={<div style={{ height: STATIC_VIEWPORT.height }} />}
          STATIC_VIEWPORT={STATIC_VIEWPORT}
        />
        <MDBCardBody>
            <MDBCardTitle className="map-link" onClick={() => handleSelectMapAndNavidate()}>{name}</MDBCardTitle>
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
            <div onClick={() => handleSelectMapAndNavidate()} className='map-link black-text d-flex justify-content-end'>
              <h5>
                View
                <MDBIcon icon='angle-double-right' className='ml-2' />
              </h5>
            </div>
            <a href='#!' className='black-text d-flex justify-content-end'>
              {isAuth && 
              <h5>
                <MDBIcon icon='trash' className='ml-2 red-text' onClick={() => onDelete(id)} />
              </h5>
              }
            <div onClick={() => handleCreateQr(id)} className='map-link black-text d-flex justify-content-end'>
              <h5>
                Generate Qr Codes
                <MDBIcon icon='qrcode' className='ml-2' />
              </h5>
              </div>
            </a>
          </MDBCardBody>
      </MDBCard>
          
    </MDBCol>
  );
}

export default connect(
  (state, {name, level, id, isConfirmed}) => ({
    isAuth: selectors.getRole(state) === 1 ? true : false,
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

