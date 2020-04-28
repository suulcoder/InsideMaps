import { combineReducers } from 'redux';

import * as types from '../types/auth';

const token = (state = null, action) => {
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
      return null;
    }
  }
  return state;
};

const login = (state = null, action) => {
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
      if(action.payload.form===0){
        return false;
      }
      return null;
    }
    case types.LOGOUT:{
      return null;
    }
  }
  return state
}

const signup = (state=null, action) => {
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
      if(action.payload.form===0){
        return null;
      }
      return false;
    }
    case types.LOGOUT:{
      return null;
    }
  }
  return state;

}



const error = (state = null, action) => {
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

const isAuthenticating = combineReducers({
  login,
  signup,
});

const auth = combineReducers({
  token,
  isAuthenticating,
  error
});

export default auth;

export const getAuthToken = state => state.token;
export const getIsAuthenticating = state => state.isAuthenticating;
export const getIsAuthenticatingError = state => state.error;
export const getError = state => state.error;
export const getIsLogging = state => state.login;
export const getIsSigning = state => state.signup;
