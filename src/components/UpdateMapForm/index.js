import { connect } from "react-redux";
import {v4 as uuidv4 } from 'uuid'

import * as mapActions from "../../actions/map";
import * as markerActions from "../../actions/marker";
import * as selectors from "../../reducers";
import React, { useState, Fragment, useRef, useEffect } from "react";
import "./styles.css";
import Header from "../Header";
import { URL } from "../../configuration";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import ReactMapGL, { Marker} from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import * as mapboxConf from '../../config/mapbox';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const UpdateMapForm = ({ map, markers, onUpdate, onLoad, isAuth}) => {
  
  useEffect(() => {
    onLoad()
    console.log(markers)
  }, [])

  const INITIAL_VIEWPORT = {
    width: "100%",
    height: "600px",
    latitude: map.location.coordinates[1],
    longitude: map.location.coordinates[0],
    zoom: 16
  }
  
  const [name, changeName] = useState(map.name);
  const [description, changeDescription] = useState(map.description);
  const [level, changeLevel] = useState(map.level);
  const [viewport, changeViewport] = useState(INITIAL_VIEWPORT)

  const mapRef = useRef()
  return (
    <Fragment>
    
      <Header nested title="Update Map" color="special-color-dark" />
      {map !== undefined && <p>Cargando ... </p> && (
      <MDBContainer size="md">
          <h2 className="h1-responsive text-center font-weight-bold my-5">
            Update map
          </h2>
          <MDBCard className="dark-grey-text">
            <MDBCardBody className="z-depth-2">
              <MDBRow className="container">
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterNameEx"
                    className="grey-text"
                  >
                    Name
                  </label>
                  <input
                    name="fname"
                    type="text"
                    id="defaultFormRegisterNameEx"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => changeName(e.target.value)}
                    required
                    disabled={isAuth ? false : true}
                  />
                  <div className="valid-feedback">Valid name</div>
                </MDBCol>
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterEmailEx2"
                    className="grey-text"
                  >
                    Description
                  </label>
                  <input
                    name="lname"
                    type="text"
                    id="defaultFormRegisterEmailEx2"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => changeDescription(e.target.value)}
                    required
                    disabled={isAuth ? false : true}
                  />
                  <div className="valid-feedback">Valid description</div>
                </MDBCol>
                <MDBCol md="4" className="mb-3">
                  <label
                    htmlFor="defaultFormRegisterConfirmEx3"
                    className="grey-text"
                  >
                    Level
                  </label>
                  <input
                    value={level}
                    onChange={(e) => changeLevel(e.target.value)}
                    type="number"
                    id="defaultFormRegisterConfirmEx3"
                    className="form-control"
                    name="email"
                    placeholder="Level"
                    required
                    disabled={isAuth ? false : true}
                  />
                  {/* Generate QRCode with a button */}
                </MDBCol>
              </MDBRow>
                {isAuth && <MDBBtn
                  color="primary"
                  type="submit"
                  onClick={() => {
                    onUpdate(name, description, level, map._id, [viewport.longitude, viewport.latitude]);
                    changeName("");
                    changeDescription("");
                    changeLevel("");
                  }}
                >
                  Update
                </MDBBtn>}
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-4">
          

        </MDBCard>
          
        </MDBContainer>
        ) }
      
    </Fragment>
  );  
};

export default connect(
  (state) => ({
      map: selectors.getSelectedMap(state),
      markers: selectors.getMarkers(state),
      isAuth : selectors.getRole(state) === 1 ? true : false,
  }),
  (dispatch) => ({
    onUpdate(name, description, level, id, coordinates) {
      const map = {
        id,
        name,
        description, 
        level,
        location: {
          type: "Point",
          coordinates: coordinates
        }
      };
      dispatch(mapActions.startUpdatingMap(id, map));
    },
    onLoad() {
      console.log("Starting fetching markers...")
      dispatch(markerActions.startFetchingMarkersbyMap())
    }
  })
)(UpdateMapForm);
//nombre, descripcion, id del lugar, nivel, nombre del archivo, codigoqr
