import * as types from '../types/auth';

export const startLogin = (username, password) => ({
  type: types.AUTHENTICATION_STARTED,
  payload: { username, password},             
});

export const startSignUp = (name, lastname, username, email, password, age, gender) => ({
  type: types.REGISTRATION_STARTED,
  payload: { name, 
      lastname, 
      username, 
      email, 
      password, 
      age, 
      gender },
});

export const completeLogin = token => ({
  type: types.AUTHENTICATION_COMPLETED,
  payload: { token },
});

export const failLogin = error => ({
  type: types.AUTHENTICATION_FAILED,
  payload: { error },
});