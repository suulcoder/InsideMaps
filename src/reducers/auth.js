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
  }
  return state;
};

const isAuthenticating = (state = {login:null,signup:null}, action) => {  
  //null when there is no action on the form.
  //false when there is interaction with the form
  //true when i
  switch (action.type) {

    case types.AUTHENTICATION_STARTED: {
      return ({login:true,signup:null});
    }
    case types.REGISTRATION_STARTED:{
      return ({login:null,signup:true});
    }
    case types.AUTHENTICATION_COMPLETED: {
      return {login:null,signup:null};
    }
    case types.AUTHENTICATION_FAILED: {
      if(action.payload.form===0){
        return {login:false,signup:null};
      }
      return {login:null,signup:false};
    }
  }
  return state;
};

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
  }
  return state;
};

const auth = combineReducers({
  token,
  isAuthenticating,
  error
});

export default auth;

export const getAuthToken = state => state.token;
export const getIsAuthenticating = state => state.isAuthenticating;
export const getError = state => state.error;