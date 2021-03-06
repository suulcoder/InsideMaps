import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';
import maps, * as mapSelectors from './map';
import marker, * as markerSelectors from './marker'
import placesFile, * as placesFileSelectors from './places';
import qrCode, * as qrCodeSelectors from './qrcode';
import reports, * as reportSelectors from './reports';
import stats, * as statsSelectors from './stats';

const reducer = combineReducers({
  auth,
  maps,
  marker,
  placesFile,
  qrCode,
  reports,
  stats
});

export default reducer;

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getIsAuthenticatingError = state => authSelectors.getIsAuthenticatingError(state.auth);
export const isAuthenticated = state => getAuthToken(state.auth) != null;
export const getError = state => authSelectors.getError(state.auth);
export const getIsLogging = state => authSelectors.getIsLogging(state.auth);
export const getIsSigning = state => authSelectors.getIsSigning(state.auth);
export const getRole = state => authSelectors.getRole(state.auth);

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

export const getIsUploading = state =>  placesFileSelectors.getIsUploading(state.placesFile);
export const getUploadError = state => placesFileSelectors.getUploadError(state.placesFile);
export const getIsUploaded = state => placesFileSelectors.getIsUploaded(state.placesFile);
export const getSuccessUpload = state => placesFileSelectors.getSuccessUpload(state.placesFile);

export const getQrData = state => qrCodeSelectors.getQrData(state.qrCode);
export const getIsFetchingQr = state => qrCodeSelectors.getIsFetchingQr(state.qrCode);
export const getQrFetchError = state => qrCodeSelectors.getQrFetchError(state.qrCode);
export const getCoordinatesByLevel = (state, level) => qrCodeSelectors.getCoordinatesByLevel(state.qrCode, level);
export const getOrder = state => qrCodeSelectors.getOrder(state.qrCode);


export const getErrorData = state => reportSelectors.getErrorData(state.reports);
export const getIsFetchingErrorData = state => reportSelectors.getIsFetchingErrorData(state.reports);
export const getErrorFetchError = state => reportSelectors.getErrorFetchError(state.reports);

export const getStats = state => statsSelectors.getStats(state.stats);
export const getIsFetchingStats = state => statsSelectors.getIsFetchingStats(state.stats);
export const getErrorFetchStats = state => statsSelectors.getErrorFetchStats(state.stats);
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