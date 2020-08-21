import * as types from '../types/auth';
import * as actions from './auth';

describe('authAction', () => {
    it('should start login', () => {
      const expectedAction = {
        type: types.AUTHENTICATION_STARTED,
        payload: { email:'saul@gmail.com',  password:'suulpeelos'},
      }
      expect(actions.startLogin('saul@gmail.com','suulpeelos')).toEqual(expectedAction)
    });

    it('should start signup', () => {
      const expectedAction = {
        type: types.REGISTRATION_STARTED,
        payload: { 
    firstname: 'saul', 
    lastname:'contreras', 
    username:'saul@gmail.com', 
    email:'saul@gmail.com', 
    password:'suulpeelos', 
    age:'19', 
    gender:'Male',
    role:1},
      }
      expect(actions.startSignUp('saul','contreras','saul@gmail.com','saul@gmail.com','suulpeelos',
      '19','Male',1)).toEqual(expectedAction)
    });

    it('should complete login', () => {
      const token = '1kjlkj31'
      const expectedAction = {
        type: types.AUTHENTICATION_COMPLETED,
        payload: { token }
      }
      expect(actions.completeLogin(token)).toEqual(expectedAction)
    });

    it('should fail login', () => {
      const expectedAction = {
        type: types.AUTHENTICATION_FAILED,
        payload: { error:"WRITE A VALID EMAIL", form: 0},
      }
      expect(actions.failLogin("WRITE A VALID EMAIL", 0)).toEqual(expectedAction)
    });

    it('should logout', () => {
      const expectedAction = {
        type: types.LOGOUT
      }
      expect(actions.logout()).toEqual(expectedAction)
    });
  })