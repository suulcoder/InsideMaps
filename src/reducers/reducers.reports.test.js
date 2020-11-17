import * as types from '../types/reports';
import auth, * as reducers from './reports';
import { expect } from 'chai';

describe('reports reducers', ()=>{
    //error
    it('should return initial state', ()=>{
        expect(reducers.error(undefined, {})).equal(null)
    })
    it('error when fetch started', ()=>{
        expect(reducers.error(undefined, {type: types.FETCH_ERROR_DATA_STARTED})).equal(null)
    })
    it('error when fetch completed', ()=>{
        expect(reducers.error(undefined, {type: types.FETCH_ERROR_DATA_COMPLETED})).equal(null)
    })
    it('should handle fetch failed', ()=>{
        expect(reducers.error(null, {type: types.FETCH_ERROR_DATA_FAILED,
            payload: { error:404}})).equal(404)
    })
    //data
    it('should return initial state', ()=>{
        expect(reducers.data(undefined, {})).equal(null)
    })
    it('should complete fecthing', ()=>{
        expect(reducers.data(null, {type: types.FETCH_ERROR_DATA_COMPLETED,
            payload: { data:1}})).equal(1)
    })
    //isFetching
    it('should return initial state', ()=>{
        expect(reducers.isFetching(undefined, {})).equal(null)
    })
    it('should complete fecthing', ()=>{
        expect(reducers.isFetching(null, {type: types.FETCH_ERROR_DATA_STARTED})).equal(true)
    })
    it('should complete fecthing', ()=>{
        expect(reducers.isFetching(null, {type: types.FETCH_ERROR_DATA_COMPLETED})).equal(false)
    })
    it('should complete fecthing', ()=>{
        expect(reducers.isFetching(null, {type: types.FETCH_ERROR_DATA_FAILED})).equal(false)
    })
})