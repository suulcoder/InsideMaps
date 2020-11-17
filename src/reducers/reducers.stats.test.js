import * as types from '../types/stats';
import auth, * as reducers from './stats';
import { expect } from 'chai';

describe('reports reducers', ()=>{
    //error
    it('should return initial state', ()=>{
        expect(reducers.error(undefined, {})).equal(null)
    })
    it('error when fetch started', ()=>{
        expect(reducers.error(undefined, {type: types.FETCH_STATS_STARTED})).equal(null)
    })
    it('error when fetch completed', ()=>{
        expect(reducers.error(undefined, {type: types.FETCH_STATS_COMPLETED})).equal(null)
    })
    it('should handle fetch failed', ()=>{
        expect(reducers.error(null, {type: types.FETCH_STATS_FAILED,
            payload: { error:404}})).equal(404)
    })
})