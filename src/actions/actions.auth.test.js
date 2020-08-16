import * as types from '../types/auth';
import * as actions from './auth';
import authReducer from '../reducers/auth';

describe('authAction', () => {
    it('should start login', () => {
      const expectedAction = {
        type: types.AUTHENTICATION_STARTED,
        payload: { email:'saul@gmail.com',  password:'suulpeelos'},
      }
      expect(actions.startLogin('saul@gmail.com','suulpeelos')).toEqual(expectedAction)
    })
  })