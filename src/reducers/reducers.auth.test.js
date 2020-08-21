import * as types from '../types/auth';
import auth, * as reducers from './auth';
import { expect } from 'chai';

describe('auth reducers', ()=>{
    //token
    it('should return initial state', ()=>{
        expect(reducers.token(undefined, {})).equal(null)
    })
    it('should start authentication', ()=>{
        expect(reducers.token(null, {type: types.AUTHENTICATION_STARTED,
            payload: { token:undefined}})).equal(null)
    })
    it('should complete authentication', ()=>{
        expect(reducers.token(null, {type: types.AUTHENTICATION_COMPLETED,
            payload: { token:1}})).equal(1)
    })
    it('should handle logout', ()=>{
        expect(reducers.token(null, {type: types.LOGOUT,
            payload: { token:undefined}})).equal(null)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.token(null, {type: types.AUTHENTICATION_STARTED,
            payload: { token:undefined}})).equal(null)
    })
    //login
    it('should return initial state', ()=>{
        expect(reducers.login(undefined, {})).equal(null)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.login(null, {type: types.AUTHENTICATION_FAILED,
            payload: { form:0}})).equal(false)
    })
    //signup
    it('should return initial state', ()=>{
        expect(reducers.signup(undefined, {})).equal(null)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.signup(null, {type: types.AUTHENTICATION_FAILED,
            payload: { form:1}})).equal(false)
    })
    //error
    it('should return initial state', ()=>{
        expect(reducers.error(undefined, {})).equal(null)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.error(null, {type: types.AUTHENTICATION_FAILED,
            payload: { error:404}})).equal(404)
    })
})