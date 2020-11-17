import {
	call,
	takeEvery,
	put,
	select,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';
import { toast } from 'react-toastify';
import { API_URL } from '../configuration';

import * as actions from '../actions/map';
import * as types from '../types/map';
import * as selectors from '../reducers';
import * as schemas from '../schemas/map';

const API_BASE_URL = `${API_URL}/map/`;

function* createMap(action) {
	const map = action.payload;
	const oldId = map._id;
	try {
		const token = yield select(selectors.getAuthToken);
		const response = yield call(
			fetch,
			API_BASE_URL,
			{
				method: 'POST',
				body: JSON.stringify(action.payload),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `JWT ${token}`,
				},
			}
		);
		if (response.status >= 200 && response.status <= 300) {
			const { result } = yield response.json();
			const map = result;
			yield put(actions.completeCreatingMap(oldId, map));
			toast.success("New map created successfully!", { position: toast.POSITION.BOTTOM_RIGHT });
		} else {
			yield put(actions.failCreatingMap("Error in response"));
			toast.error("Error while creating map please try again", { position: toast.POSITION.BOTTOM_RIGHT });
		}
	} catch (error) {
		toast.error("Error while creating map please try again", { position: toast.POSITION.BOTTOM_RIGHT });
		yield put(actions.failCreatingMap(oldId, error));
	}
}

export function* watchCreateMap() {
	yield takeEvery(
		types.CREATE_MAP_STARTED,
		createMap,
	);
}

function* fetchMaps(action) {

	try {
		const token = yield select(selectors.getAuthToken);
		const response = yield call(
			fetch,
			API_BASE_URL,
			{
				method: 'GET',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `JWT ${token}`,
				},
			}
		);

		if (response.status >= 200 && response.status <= 300) {
			const jsonResult = yield response.json();
			const {
				entities: { maps },
				result,
			} = normalize(jsonResult, schemas.maps)
			yield put(actions.completeFetchingMaps(maps, result))
			toast.success("Fetched all maps", { position: toast.POSITION.BOTTOM_RIGHT });
		} else {
			yield put(actions.failFetchingMaps("Response error"));
			toast.error("Error while fetching maps please try again", { position: toast.POSITION.BOTTOM_RIGHT });
		}
	} catch (error) {
		toast.error("Error while fetching maps please try again", { position: toast.POSITION.BOTTOM_RIGHT });
		yield put(actions.failFetchingMaps(error));
	}
}

export function* watchFetchMaps() {
	yield takeEvery(
		types.FETCH_MAP_STARTED,
		fetchMaps,
	);
}

export function* deleteMap(action) {
	try {
		const token = yield select(selectors.getAuthToken);
		const response = yield call(
			fetch,
			`${API_BASE_URL}${action.payload.id}`,
			{
				method: 'DELETE',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `JWT ${token}`,
				},
			}
		);

		if (response.status >= 200 && response.status <= 300) {
			const { msg } = yield response.json();
			yield put(actions.completeDeletingMap());
			toast.success("Map deleted", { position: toast.POSITION.BOTTOM_RIGHT });
		} else {
			yield put(actions.failFetchingMaps("Error in response"));
			toast.error("Error while deliting map please try again", { position: toast.POSITION.BOTTOM_RIGHT });
		}
	} catch (error) {
		yield put(actions.failFetchingMaps(error));
		toast.error("Error while deliting map please try again", { position: toast.POSITION.BOTTOM_RIGHT });
	}
}

export function* watchDeleteMap() {
	yield takeEvery(
		types.DELETE_MAP_STARTED,
		deleteMap,
	);
}

export function* updateMap(action) {
	const id = action.payload.id;
	try {
		const token = yield select(selectors.getAuthToken);
		const response = yield call(
			fetch,
			`${API_BASE_URL}${id}`,
			{
				method: 'PUT',
				body: JSON.stringify(action.payload.map),
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
					'Authorization': `JWT ${token}`,
				},
			}
		);

		if (response.status >= 200 && response.status <= 300) {
			yield put(actions.completeUpdatingMap(id))
			toast.success(`Map ${id} updated!`, { position: toast.POSITION.BOTTOM_RIGHT });
		} else {
			toast.error("Error while updating map please try again", { position: toast.POSITION.BOTTOM_RIGHT });
		}

	} catch (error) {
		toast.error("Error while updating map please try again", { position: toast.POSITION.BOTTOM_RIGHT });
		yield put(actions.failFetchingMaps(error));
	}

}


export function* watchUpdateMap() {
	yield takeEvery(
		types.UPDATE_MAP_STARTED,
		updateMap,
	);
}
