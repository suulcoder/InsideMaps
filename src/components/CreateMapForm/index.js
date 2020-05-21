import { connect } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import * as actions from "../../actions/map";
import * as selectors from "../../reducers";
import React, { useState, Fragment } from "react";
import "./styles.css";
import Header from "../Header";
import { URL } from "../../configuration";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody } from "mdbreact";

const MapForm = ({ onCreate }) => {
  const [name, changeName] = useState("");
  const [description, changeDescription] = useState("");
  const [level, changeLevel] = useState("");

  // Set institution id explicit here, or in map sagas...

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
                  />
                  {/* Generate QRCode with a button */}
                </MDBCol>
              </MDBRow>
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
        </MDBContainer>
    </Fragment>
  );
};

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
        level,
        year: 10,
      };
      console.log(map);
      //dispatch(actions.startCreatingMap(map));
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
