import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import './styles.css';
import * as actions from '../../actions/map';

import "./styles.css"

import {
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBCard,
   MDBCardTitle, MDBCardText
} from "mdbreact";

import ReactMapGL, { Marker } from 'react-map-gl';
import * as mapboxConf from '../../config/mapbox';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'


import { Link, Re } from "react-router-dom";


const MapCard = ({name, location, level, id, description, isConfirmed, onDelete, onSelectMap}) => {
  
  const history = useHistory();

  console.log(location)

  const STATIC_VIEWPORT = {
    width: "100%",
    height: "300px",
    latitude: location.coordinates[1],
    longitude: location.coordinates[0],
    zoom: 16
  }

  const handleSelectMapAndNavidate = () => {
    onSelectMap(id)
    history.push(`/map/${id}/update`);
  }

  return (

    <MDBCol  md="4" style={{ marginTop: "2rem" }}>
      <MDBCard 
      >
        <ReactMapGL {...STATIC_VIEWPORT}  mapboxApiAccessToken={mapboxConf.TOKEN} />
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

