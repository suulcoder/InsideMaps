import { connect } from 'react-redux';
import { getAuthToken } from '../../reducers';
import { logout } from '../../actions/auth';
import React from "react";
import './styles.css';
import {URL} from '../../configuration'

const Header = ({ onSubmit}) => (
    <div>
        <div className='container'>
            <div className='logo' source={require('../../../public/logo/LOGO.png')} ></div>
                <div className='button'>
                    <button className="login_button" color='#2580f5'  type="submit" onClick={
                        () => onSubmit()
                    }>{'LOG OUT'} </button>
                </div>
        </div>
    </div>
);

export default connect(
    undefined,
    dispatch => ({
        onSubmit(){
            dispatch(logout())
            window.location.href = URL
        }
    })
  )(Header)