import * as types from '../types/auth';

export const startLogin = (username, password) => ({
  type: types.AUTHENTICATION_STARTED,
  payload: { email: username,  password},             
});

export const startSignUp = (name, lastname, username, email, password, age, gender) => ({
  type: types.REGISTRATION_STARTED,
  payload: { 
    firstname: name, 
    lastname, 
    username, 
    email, 
    password, 
    age, 
    gender,
    role:'user' },
});

export const completeLogin = token => ({
  type: types.AUTHENTICATION_COMPLETED,
  payload: { token },
});

export const failLogin = (error,form) => ({
  type: types.AUTHENTICATION_FAILED,
  payload: { error, form },
});

export const logout = () => ({
  type: types.LOGOUT,
})