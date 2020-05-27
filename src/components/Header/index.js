import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import React, { Fragment } from "react";
import "./styles.css";
import { URL } from "../../configuration";
import { getAuthToken } from "../../reducers/index";

import { MDBNavbar, MDBNavbarBrand, MDBBtn, MDBIcon } from "mdbreact";

import { Link } from "react-router-dom";

const Header = ({ onSubmit, onReturn, nested, title, color, isLogged }) => (
  <MDBNavbar color={color} height="30">
    
    { nested ? (
            
              <Fragment>
                <MDBNavbarBrand>
                <Link to="/">
                  <MDBIcon icon="arrow-left" className="white-text mr-4" />
                </Link>
                <strong className="white-text">{title}</strong>
              </MDBNavbarBrand>
                
              </Fragment>
            ) : (
              <MDBNavbarBrand>
                <img src={require("../../../public/logo/LOGO.png")} height="50" alt="" />
              </MDBNavbarBrand>
            )}
    {
      isLogged && (
        <MDBBtn color="primary" onClick={() => onSubmit()}>
          Logout
        </MDBBtn>
      )
    }    
  </MDBNavbar>
);


export default connect(
  (state) => ({
    isLogged: getAuthToken(state) != null,
  }),
  (dispatch) => ({
    onSubmit() {
      dispatch(logout());
      window.location.href = URL;
    },
    onReturn() {
      window.location.href = URL;
    },
  })
)(Header);
