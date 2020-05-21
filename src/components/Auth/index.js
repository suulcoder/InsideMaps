import { connect } from 'react-redux';
import { getAuthToken } from '../../reducers';
import { logout } from '../../actions/auth';
import Login from "../Login";
import SignUp from "../SignUp";
import Header from '../Header';
import React, { Fragment } from "react";
import './styles.css';
import {URL} from '../../configuration'

import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const Auth = () => (
    <div className="auth-container">
        <Header color="special-color-dark" />
        <MDBContainer className="transparent">
            <MDBRow  className="transparent">
                <MDBCol  className="transparent" md="6">
                    <Login/>
                </MDBCol>
                <MDBCol  className="transparent" md="6">
                    <SignUp/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </div>
);

export default connect(
    state => ({
        isLogged: getAuthToken(state)!==null
      }),
    undefined,
    (stateToProps,disptachToProps) => {
        if(stateToProps.isLogged){
            window.location.href = URL
        }
        return (undefined)
      }
)(Auth)