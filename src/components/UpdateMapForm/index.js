import { connect } from "react-redux";
import * as actions from "../../actions/map";
import * as selectors from "../../reducers";
import React, { useState, Fragment, useEffect } from "react";
import "./styles.css";
import Header from "../Header";
import { URL } from "../../configuration";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

const UpdateMapForm = ({ map, onUpdate}) => {
  const [name, changeName] = useState(map.name);
  const [description, changeDescription] = useState(map.description);
  const [level, changeLevel] = useState(map.level);

  // Set institution id explicit here, or in map sagas...

  return (
    <Fragment>
    
      <Header nested color="special-color-dark" />
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
                  color="primary"
                  type="submit"
                  onClick={() => {
                    onUpdate(name, description, level, map._id);
                    changeName("");
                    changeDescription("");
                    changeLevel("");
                  }}
                >
                  Update
                </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
        ) }
      
    </Fragment>
  );  
};

export default connect(
  (state) => ({
      map: selectors.getSelectedMap(state),
  }),
  (dispatch) => ({
    onUpdate(name, description, level, id) {
      const map = {
        id,
        name,
        description, 
        level,
      };
      dispatch(actions.startUpdatingMap(id, map));
    },
  })
)(UpdateMapForm);
//nombre, descripcion, id del lugar, nivel, nombre del archivo, codigoqr
