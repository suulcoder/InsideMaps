import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as actions from "../../actions/map";
import * as selectors from "../../reducers";
import React, { useState, Fragment } from "react";
import Header from "../Header";
import { URL } from "../../configuration";

import ReactMapGL, { Marker } from 'react-map-gl';
import * as mapboxConf from '../../config/mapbox';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";
import "./styles.css";

const INITIAL_VIEWPORT = {
  width: "100%",
  height: "600px",
  latitude: 42.430472,
  longitude: -123.334102,
  zoom: 16
}

const MapForm = ({ onCreate }) => {
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const [level, changeLevel] = useState("");
  const [viewport, changeViewport] = useState(INITIAL_VIEWPORT)
  const [userLocation, changeUserLocation] = useState({})
  const [markers, changeMarkers] = useState([])

  const setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      const currentUserLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      };
      const newViewport = {
        ...INITIAL_VIEWPORT,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
      changeViewport(newViewport)
      changeUserLocation(currentUserLocation)
    })
  }

  const addMarker = () => {
    const newMarker = { ...viewport }
    changeMarkers([...markers, newMarker])
  }

  const loadPlaceMarkers = () => {
    return markers.map(spot => {
      return (
        <Marker
          key={uuidv4()}
          latitude={parseFloat(spot.latitude)}
          longitude={parseFloat(spot.longitude)}
        >
          <img style={{ width: "30px", height: "30px" }} src="https://es.seaicons.com/wp-content/uploads/2015/06/map-marker-icon.png" alt="marker" />
        </Marker>
      );
    });
  };

  return (
    <Fragment>
      <Header nested color="special-color-dark" />
      <MDBContainer size="md">
        <h2 className="h1-responsive text-center font-weight-bold my-5">
          Create a new map
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
                />
                {/* Generate QRCode with a button */}
              </MDBCol>
            </MDBRow>
            <MDBBtn
              color="white"
              onClick={() => {
                addMarker()
              }}
            >
              Add Marker
            </MDBBtn>
            <MDBBtn
              color="green"
              onClick={() => {
                setUserLocation()
              }}
            >
              Set My location
            </MDBBtn>
            <MDBBtn
              color="primary"
              type="submit"
              onClick={() => {
                onCreate(name, description, level);
                changeName("");
                changeDescription("");
                changeLevel("");
              }}
            >
              Create new map
                </MDBBtn>
          </MDBCardBody>
        </MDBCard>
        <MDBCard className="mb-4">
          <ReactMapGL {...viewport} onViewportChange={(viewport => changeViewport(viewport))} mapboxApiAccessToken={mapboxConf.TOKEN}>
            {Object.keys(userLocation).length !== 0 ? (
              <Marker
                latitude={viewport.latitude}
                longitude={viewport.longitude}
              >
                <img className="marker-icon" style={{ width: "30px", height: "30px" }} alt="location-icon" src="https://lh3.googleusercontent.com/proxy/mSDslWhknBBmfFh6qFE_xsPHrfJ7rGwdyhlV-zbK4_uIeRE17PWzvMqkPEbndc8z0bMfsjp8K28-6C63VDLOxGw2m3lweUGQIeQgxhRnyrUQkElEgm4NhU4jMwEJLp6VcaNDFiQOUjWYPnINHFzyVUI" />
              </Marker>
            ) : (
                <div></div>
              )}
            {loadPlaceMarkers()}

          </ReactMapGL>

        </MDBCard>
      </MDBContainer>
    </Fragment>
  );
};

// Set institution id explicit here, or in map sagas...
export default connect(
  (state) => ({
    isLogged: selectors.getIsAuthenticating(state) != null,
  }),
  (dispatch) => ({
    onCreate(name, description, level) {
      const _id = uuidv4();
      const map = {
        _id,
        name,
        description,
        id_place: "5ebb5822e7179a42f1767776",
        level,
        year: 10,
        map_filename: `lemandoestodisintoporquesinotruena${_id}`,
        qr_code: `lemandoestodisintoporquesinotruena${_id}`
      };
      dispatch(actions.startCreatingMap(map));
    },
  }),
  (stateToProps, disptachToProps) => {
    if (!stateToProps.isLogged) {
      window.location.href = URL + "login/";
    }
    return { ...disptachToProps, ...stateToProps };
  }
)(MapForm);
//nombre, descripcion, id del lugar, nivel, nombre del archivo, codigoqr
