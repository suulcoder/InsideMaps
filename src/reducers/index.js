import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';

const reducer = combineReducers({
  auth
});

export default reducer;

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getIsAuthenticatingError = state => authSelectors.getIsAuthenticatingError(state.auth);
export const isAuthenticated = state => getAuthToken(state) != null;
export const getError = state => authSelectors.getError(state.auth);
export const getIsLogging = state => authSelectors.getIsLogging(state.auth);
export const getIsSigning = state => authSelectors.getIsSigning(state.auth);


//como se ve nuestro estado

/* 

state:{

  auth: {
    token: null,
    isAuthenticating:{
      login:null, 
      signin:false
    },
    error:null
  },

}

*/ 