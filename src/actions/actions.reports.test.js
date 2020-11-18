import * as types from '../types/reports';
import * as actions from './reports';


describe('reports Actions', () => {
    it('should start fetching error data', () => {
        const expectedAction = {
            type: types.FETCH_ERROR_DATA_STARTED,
        }
        expect(actions.startFetchingErrorData()).toEqual(expectedAction)
      });
      it('should fail fetching error data', () => {
        const expectedAction = {
          type: types.FETCH_ERROR_DATA_FAILED,
          payload: {
            error: 1,
          }
        }
        expect(actions.failFetchingErrorData(1)).toEqual(expectedAction)
      });
      it('should complete fetching error data', () => {
        const expectedAction = {
          type: types.FETCH_ERROR_DATA_COMPLETED,
          payload: {
            data: "ERROR",
          }
        }
        expect(actions.completeFetchingErrorData("ERROR")).toEqual(expectedAction)
      });
})