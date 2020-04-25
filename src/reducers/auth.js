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

const isAuthenticating = (state = {login:false,signup:false}, action) => { 
  switch (action.type) {

    case types.AUTHENTICATION_STARTED: {
      return ({login:true,signup:false});
    }
    case types.REGISTRATION_STARTED:{
      return ({login:false,signup:true});
    }
    case types.AUTHENTICATION_COMPLETED: {
      return {login:false,signup:false};
    }
    case types.AUTHENTICATION_FAILED: {
      return {login:false,signup:false};
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