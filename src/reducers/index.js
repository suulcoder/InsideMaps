import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';
import maps, * as mapSelectors from './map';
import marker, * as markerSelectors from './marker'

const reducer = combineReducers({
  auth,
  maps,
  marker
});

export default reducer;

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getIsAuthenticatingError = state => authSelectors.getIsAuthenticatingError(state.auth);
export const isAuthenticated = state => getAuthToken(state.auth) != null;
export const getError = state => authSelectors.getError(state.auth);
export const getIsLogging = state => authSelectors.getIsLogging(state.auth);
export const getIsSigning = state => authSelectors.getIsSigning(state.auth);

export const getMap = (state, id) => mapSelectors.getMap(state.maps, id);
export const getMaps = state => mapSelectors.getMaps(state.maps);
export const getCreateError = state => mapSelectors.getCreateError(state.maps);
export const getIsFetching = state => mapSelectors.getIsFetching(state.maps);
export const getIsUpdating = state => mapSelectors.getIsUpdating(state.maps);
export const getSelectedMap = state => mapSelectors.getSelectedMap(state.maps);

export const getMarker = (state, id) => markerSelectors.getMarker(state.marker,id);
export const getMarkers = state => markerSelectors.getMarkers(state.marker);
export const getisFetchingMarker = state => markerSelectors.getisFetchingMarker(state.marker);
export const getError_Marker = state =>  markerSelectors.getError_Marker(state.marker);

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
  markers
}

*/ 