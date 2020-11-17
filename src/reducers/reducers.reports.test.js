import * as types from '../types/reports';
import auth, * as reducers from './reports';
import { expect } from 'chai';

describe('reports reducers', ()=>{
    //error
    it('should return initial state', ()=>{
        expect(reducers.error(undefined, {})).equal(null)
    })
    it('should handle authentication failed', ()=>{
        expect(reducers.error(null, {type: types.AUTHENTICATION_FAILED,
            payload: { error:404}})).equal(404)
    })
})