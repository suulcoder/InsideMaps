import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as actions from "../../actions/map";
import * as selectors from "../../reducers";
import React, { useState, useRef, Fragment } from "react";
import Header from "../Header";
import { URL } from "../../configuration";

import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from "deck.gl";
import Geocoder from "react-map-gl-geocoder";
import * as mapboxConf from '../../config/mapbox';

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput } from "mdbreact";
import "./styles.css";
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'

const INITIAL_VIEWPORT = {
  width: "100%",
  height: "600px",
  latitude: 42.430472,
  longitude: -123.334102,
  zoom: 16
}

const MapForm = ({ onCreate }) => {
  const [isOpen, toggleIsOpen] = useState(false)
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const [level, changeLevel] = useState("");
  const [viewport, changeViewport] = useState(INITIAL_VIEWPORT)
  const [userLocation, changeUserLocation] = useState({})
  const [markers, changeMarkers] = useState([])
  const [markerName, changeMarkerName] = useState("")
  const [searchResultLayer, changeSearchResultLayer] = useState(null)
  
  const mapRef = useRef()
  
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
    const newMarker = { longitude: viewport.longitude, latitude: viewport.latitude, name: markerName }
    changeMarkers([...markers, newMarker])
    changeMarkerName('')
    toggleIsOpen(false)
    console.log(markers)
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


  const handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return changeViewport({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  const handleOnResult = event => {
    console.log(event.result);
    changeSearchResultLayer(new GeoJsonLayer({
        id: "search-result",
        data: event.result.geometry,
        getFillColor: [255, 0, 0, 128],
        getRadius: 1000,
        pointRadiusMinPixels: 10,
        pointRadiusMaxPixels: 10
      }));
  };

  /*
    -- loadPopup related with a marker

        <Popup
          longitude={this.state.coordinates[0]}
          latitude={this.state.coordinates[1]}>
          <div style={style}>
            <p>{this.state.info}</p>
          </div>
        </Popup>
  */

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
                toggleIsOpen(true)
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
          <ReactMapGL {...viewport} onViewportChange={(viewport => changeViewport(viewport))} mapboxApiAccessToken={mapboxConf.TOKEN} ref={mapRef}>
            <Marker
                latitude={viewport.latitude}
                longitude={viewport.longitude}
              >
                <img className="marker-icon" style={{ width: "30px", height: "30px" }} alt="location-icon" src="https://i.pinimg.com/originals/b0/af/d2/b0afd2ce14ae662af20e0978d5ce5e9a.png" />
              </Marker>
            
            {loadPlaceMarkers()}

            <Geocoder
              mapRef={mapRef}
              onResult={handleOnResult}
              onViewportChange={handleGeocoderViewportChange}
              mapboxApiAccessToken={mapboxConf.TOKEN}
              position="top-left"
            />
            <DeckGL {...viewport} layers={[searchResultLayer]} />

          </ReactMapGL>

        </MDBCard>
      </MDBContainer>

      {/* Modal to add a new marker */}
      <MDBModal isOpen={isOpen}  centered>
          <MDBModalHeader>Add a new place inside map</MDBModalHeader>
          <MDBModalBody>
            Please enter the place name
            <MDBInput
                label="Place Name..."
                group
                type="text"
                validate
                labelClass="grey-text"
                value={markerName}
                onChange={e => changeMarkerName(e.target.value)}
              />
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn color="red" onClick={() => toggleIsOpen(false)}>Close</MDBBtn>
            {
              markerName.length > 0 && (
                <MDBBtn color="primary" onClick={() => addMarker()}>Add</MDBBtn>
              )
            }
          </MDBModalFooter>
        </MDBModal>

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
