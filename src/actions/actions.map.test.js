import * as types from '../types/map';
import * as actions from './map';

const map = {
    _id:12,
    name:'Le mans',
    description: 'Racing track',
    id_place: "5ebb5822e7179a42f1767776",
    level:1,
    year: 10,
    location: {
      type: "Point",
      coordinates: [12.12,31.11],
    }
}

describe('mapAction', () => {
    it('should start creating map schema', () => {
        const expectedAction = {
            type: types.CREATE_MAP_STARTED,
            payload:  map,
        }
        expect(actions.startCreatingMap(map)).toEqual(expectedAction)
      });
    
      it('should complete map schema', () => {
        const expectedAction = {
            type: types.CREATE_MAP_COMPLETED,
            payload: {
            oldId:123123123,
            map,
            }
        }
        expect(actions.completeCreatingMap(123123123,map)).toEqual(expectedAction)
      });

      it('should fail creating map schema', () => {
        const expectedAction = {
            type: types.CREATE_MAP_FAILED,
            payload: {
            oldId:123123123,
            error:'NOT ENOUGH INFO TO CREATE',
            },
        }
        expect(actions.failCreatingMap(123123123,'NOT ENOUGH INFO TO CREATE')).toEqual(expectedAction)
      });
      it('should start fetching maps', () => {
        const expectedAction = {
            type: types.FETCH_MAP_STARTED,
        }
        expect(actions.startFetchingMaps()).toEqual(expectedAction)
      });

      it('should complete fetching maps', () => {
        const expectedAction = {
            type: types.FETCH_MAP_COMPLETED,
            payload: {
            entities:[],
            order:1,
            }
        }
        expect(actions.completeFetchingMaps([],1)).toEqual(expectedAction)
      });

      it('should fail fetching maps', () => {
        const expectedAction = {
          type: types.FETCH_MAP_FAILED,
          payload: {
            error: 1,
          }
        }
        expect(actions.failFetchingMaps(1)).toEqual(expectedAction)
      });

      it('should start deleting maps', () => {
        const expectedAction = {
          type: types.DELETE_MAP_STARTED,
          payload: {
              id: map._id
          }
        }
        expect(actions.startDeletingMap(map._id)).toEqual(expectedAction)
      });

      it('should fail deleting maps', () => {
        const expectedAction = {
          type: types.DELETE_MAP_FAILED,
          payload: {
            error:1
          }
        }
        expect(actions.failDeletingMap(map._id, 1)).toEqual(expectedAction)
      });

      it('should start updating maps', () => {
        const expectedAction = {
          type: types.UPDATE_MAP_STARTED,
          payload: {
          id:map._id,
          map:map,
            }
        }
        expect(actions.startUpdatingMap(map._id, map)).toEqual(expectedAction)
      });

      it('should select map', () => {
        const expectedAction = {
          type: types.SELECT_MAP,
          payload: {
            id:map._id,
          }
        }
        expect(actions.selectingMap(map._id)).toEqual(expectedAction)
      });
})