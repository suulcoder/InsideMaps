import * as types from '../types/stats';
import * as actions from './stats';


describe('statistics Actions', () => {
    it('should start fetching stats', () => {
        const expectedAction = {
            type: types.FETCH_STATS_STARTED,
        }
        expect(actions.startFetchingStats()).toEqual(expectedAction)
      });
      it('should fail fetching stats', () => {
        const expectedAction = {
          type: types.FETCH_STATS_FAILED,
          payload: {
            error: 1,
          }
        }
        expect(actions.failFetchingStats(1)).toEqual(expectedAction)
      });
      it('should complete fetching stats', () => {
        const expectedAction = {
          type: types.FETCH_STATS_COMPLETED,
          payload: {
            data: "STATS",
          }
        }
        expect(actions.completeFetchingStats("STATS")).toEqual(expectedAction)
      });
})