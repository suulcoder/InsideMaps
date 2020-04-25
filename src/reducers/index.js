import { combineReducers } from 'redux';

import auth, * as authSelectors from './auth';

const reducer = combineReducers({
  auth
});

export default reducer;

export const getAuthToken = state => authSelectors.getAuthToken(state.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.auth);
export const getError = state => authSelectors.getError(state.auth);