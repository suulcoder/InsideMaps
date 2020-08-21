import jwtDecode from 'jwt-decode';
import { combineReducers } from 'redux';

import * as types from '../types/auth';

export const token = (state = null, action) => {
  switch (action.type) {

    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.REGISTRATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return action.payload.token;
    }
    case types.AUTHENTICATION_FAILED: {
      return null;
    }
    case types.LOGOUT: {
      return null ;
    }
  }
  return state;
};

export const login = (state = null, action) => {
  switch(action.type){
    
    case types.AUTHENTICATION_STARTED: {
      return true;
    }
    case types.REGISTRATION_STARTED:{
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return null;
    }
    case types.AUTHENTICATION_FAILED: {
      return(action.payload.form===0)?
        (false):
        (null);
    }
    case types.LOGOUT:{
      return null;
    }
  }
  return state
}

export const signup = (state=null, action) => {
  switch(action.type){
    
    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.REGISTRATION_STARTED:{
      return true;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return null;
    }
    case types.AUTHENTICATION_FAILED: {
      return(action.payload.form===1)?
        (false):
        (null);
    }
    case types.LOGOUT:{
      return null;
    }
  }
  return state;

}



export const error = (state = null, action) => {
  switch (action.type) {

    case types.AUTHENTICATION_STARTED: {
      return null;
    }
    case types.REGISTRATION_STARTED: {
      return null;
    }
    case types.AUTHENTICATION_COMPLETED: {
      return null;
    }
    case types.AUTHENTICATION_FAILED: {
      return action.payload.error;
    }
    case types.LOGOUT:{
      return null;
    }
  }
  return state;
};

export const decoded = (state = null, action) => {
  switch(action.type) {
    case types.AUTHENTICATION_COMPLETED: {
      return jwtDecode(action.payload.token);
    }
    default : {
      return state;
    }
  }
}

const isAuthenticating = combineReducers({
  login,
  signup,
});

const auth = combineReducers({
  token,
  isAuthenticating,
  error,
  decoded
});

export default auth;

export const getAuthToken = state => state.token;
export const getIsAuthenticating = state => state.isAuthenticating;
export const getIsAuthenticatingError = state => state.error;
export const getError = state => state.error;
export const getIsLogging = state =>  state.isAuthenticating.login;
export const getIsSigning = state => state.isAuthenticating.signup;
export const getRole = state => state.decoded ? state.decoded.role : null;