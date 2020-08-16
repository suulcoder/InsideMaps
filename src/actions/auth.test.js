import * as types from '../types/auth';
import * as actions from './auth';
import authReducer from '../reducers/auth';

describe('actions', () => {
    it('should create an action to add a todo', () => {
      const expectedAction = {
        type: types.AUTHENTICATION_STARTED,
        payload: { email:'saul@gmail.com',  password:'suulpeleos'},
      }
      expect(actions.startLogin('saul','suulpeelos')).toEqual(expectedAction)
    })
  })