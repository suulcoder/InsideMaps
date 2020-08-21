import * as types from '../types/map';
import auth, * as reducers from './map';
import { expect } from 'chai';

describe('auth reducers', ()=>{
    const mock = {
        type: types.CREATE_MAP_STARTED,
        payload: {
          id:123,
        }
      }
    it('should return initial state', ()=>{
        expect(reducers.byId({}, mock)).equal({
            type: types.CREATE_MAP_STARTED,
            payload: {
              id:123,
              isConfirmed: false
            }
          })
    })

})