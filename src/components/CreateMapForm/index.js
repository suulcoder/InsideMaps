import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as actions from "../../actions/map";
import * as selectors from "../../reducers";
import React, { useState, Fragment } from "react";
import Header from "../Header";
import { URL } from "../../configuration";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBModal, MDBModalHeader, MDBModalBody, MDBModalFooter, MDBInput } from "mdbreact";
import "./styles.css";
import { startAddingMarker, startFetchingMarkers } from "../../actions/marker";
import Map from "../Map";

const INITIAL_VIEWPORT = {
  width: "100%",
  height: "600px",
  latitude: 42.430472,
  longitude: -123.334102,
  zoom: 16
}

const MapForm = ({ onCreate, markers, changeMarkers, fetch }) => {

  const mapID = uuidv4();

  // useEffect(                                                 //I commented this because api response is not getting this structure { longitude: viewport.longitude, latitude: viewport.latitude, name: markerName, id: v4() }
  //   () => {
  //     const interval = setInterval(fetch, 10000);
  //     return () => {
  //       clearInterval(interval);
  //     };
  //   },
  //   []
  // );

  const [isOpen, toggleIsOpen] = useState(false)
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const [level, changeLevel] = useState("");
  const [viewport, changeViewport] = useState(INITIAL_VIEWPORT)
  const [markerName, changeMarkerName] = useState("")
  
  const setUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
      // const currentUserLocation = {
      //   latitude: position.coords.latitude,
      //   longitude: position.coords.longitude
      // };
      const newViewport = {
        ...INITIAL_VIEWPORT,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      }
      changeViewport(newViewport)
    })
  }

  const addMarker = () => {
    changeMarkers({ longitude: viewport.longitude, latitude: viewport.latitude, name: markerName, id: uuidv4(),  location: { type: "Point", coordinates: [viewport.longitude, viewport.latitude]} })
    changeMarkerName('')
    toggleIsOpen(false)
  }

  // const handleGeocoderViewportChange = viewport => {
  //   const geocoderDefaultOverrides = { transitionDuration: 1000 };

  //   return changeViewport({
  //     ...viewport,
  //     ...geocoderDefaultOverrides
  //   });
  // };

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
      <Header nested title="Create Map" color="special-color-dark" />      
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
                onCreate(mapID, name, description, level, [viewport.longitude, viewport.latitude]);
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
          <Map
            containerElement={<div style={{ height: INITIAL_VIEWPORT.height }} />}
            mapElement={<div style={{ height: INITIAL_VIEWPORT.height }} />}
            STATIC_VIEWPORT={INITIAL_VIEWPORT}
          ></Map>
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
  (state) => {
    console.log(state.marker)
    return ({
    isLogged: selectors.getIsAuthenticating(state) != null,
    markers: selectors.getMarkers(state)
  })},
  (dispatch) => ({
    onCreate(_id, name, description, level, coordinates) {
      const map = {
        _id,
        name,
        description,
        id_place: "5ebb5822e7179a42f1767776",
        level,
        year: 10,
        location: {
          type: "Point",
          coordinates: coordinates
        }
        //map_filename: `lemandoestodisintoporquesinotruena${_id}`,
        //qr_code: `lemandoestodisintoporquesinotruena${_id}`
      };
      dispatch(actions.startCreatingMap(map));
    },
    changeMarkers(entity){
      dispatch(startAddingMarker(entity))
    },
    fetch(){
      dispatch(startFetchingMarkers())
    }
  }),
  (stateToProps, disptachToProps) => {
    if (!stateToProps.isLogged) {
      window.location.href = URL + "login/";
    }
    return { ...disptachToProps, ...stateToProps };
  }
)(MapForm);
//nombre, descripcion, id del lugar, nivel, nombre del archivo, codigoqr
