import { connect } from "react-redux";
import { getAuthToken } from "../../reducers/index";
import Header from "../Header";
import MapBoard from "../MapBoard";
import MapForm from "../CreateMapForm";
import React, { Fragment } from "react";
import "./styles.css";
import { URL } from "../../configuration";

import { MDBBtn, MDBIcon } from "mdbreact";

const Home = () => (
  <Fragment>
    <Header color="special-color-dark" />
    <div className="container">
      <MapBoard />
    </div>
  </Fragment>
);

export default connect(
  (state) => ({
    isLogged: getAuthToken(state) != null,
  }),
  undefined,
  (stateToProps, disptachToProps) => {
    if (!stateToProps.isLogged) {
      window.location.href = URL + "login/";
    }
    return { ...disptachToProps };
  }
)(Home);
