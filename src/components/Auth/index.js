import { connect } from 'react-redux';
import { getAuthToken } from '../../reducers';
import { logout } from '../../actions/auth';
import Login from "../Login";
import SignUp from "../SignUp";
import React from "react";
import './styles.css';
import {URL} from '../../configuration'

const Auth = () => (
    <div>
        <div className='container'>
            <div className='logo' source={require('../../../public/logo/LOGO.png')} ></div>
            <Login/>
        </div>
        <div className='container'>
                <div className='divContainer'>
                    <div className='div'>GET INDOORS LOCATION</div>    
                </div>
                <SignUp></SignUp>
            </div>
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