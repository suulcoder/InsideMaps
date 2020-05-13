import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';
import maps, * as mapSelectors from './map';

const reducer = combineReducers({
  auth,
  maps,
});

export default reducer;

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getIsAuthenticatingError = state => authSelectors.getIsAuthenticatingError(state.auth);
export const isAuthenticated = state => {getAuthToken(state.auth) != null};
export const getError = state => authSelectors.getError(state.auth);
export const getIsLogging = state => authSelectors.getIsLogging(state.auth);
export const getIsSigning = state => authSelectors.getIsSigning(state.auth);

export const getMap = (state, id) => mapSelectors.getMap(state.maps, id);
export const getMaps = state => mapSelectors.getMaps(state.maps);
export const getCreateError = state => mapSelectors.getCreateError(state.maps);

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
  maps:

}

*/ 