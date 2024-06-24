import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import {
    fetchGroupRequest,
    fetchGroupSuccess,
    fetchGroupFailure,
} from './groupSlice'

function* fetchGroupsSaga(action) {
    try {
        const response = yield call(axios.get, 'backend.com/groups')
        yield put(fetchGroupSuccess(response.data))
    } catch (err) {
        yield put(fetchGroupFailure(err.message))
    }
}

export function* watchFetchGroup() {
    yield takeLatest(fetchGroupRequest.type, fetchGroupsSaga)
}
