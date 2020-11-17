import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import React, { Fragment } from "react";
import "./styles.css";
import { URL } from "../../configuration";
import { getAuthToken, getRole } from "../../reducers/index";

import { MDBNavbar, MDBNavbarBrand, MDBBtn, MDBIcon, MDBRow } from "mdbreact";

import { Link } from "react-router-dom";

const Header = ({ onSubmit, onReturn, nested, title, color, isLogged, isAuth }) => (
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
                <img src={require("../../public/LOGO.png")} height="50" alt="" />
              </MDBNavbarBrand>
            )}
            <MDBRow >
            {isLogged && isAuth && 
              <Link to={`/reports`}>
                <MDBBtn color="primary" rounded type="submit">
                  Reportes <MDBIcon className="white-text" icon="chart-bar" /> 
                </MDBBtn>
              </Link>}
            {
              isLogged && (
                <MDBBtn color="danger" onClick={() => onSubmit()}>
                  Salir
                </MDBBtn>
              ) 
            }            
    </MDBRow>
       
    
    
  </MDBNavbar>
);


export default connect(
  (state) => ({
    isLogged: getAuthToken(state) != null,
    isAuth: getRole(state) === 2 ? true : false,
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
