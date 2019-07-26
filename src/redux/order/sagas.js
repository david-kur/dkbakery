import { takeLatest, call, put } from 'redux-saga/effects';
import OrderActionTypes from './types';
import { fetchMenuSuccess, fetchMenuFail } from './actions';
import {
  firebaseFirestore,
  convertMenuSnapshotToMenuData
} from '../../firebase.config';

export function* fetchMenuSaga() {
  yield put({ type: OrderActionTypes.LOADING });
  try {
    const collectionRef = firebaseFirestore.collection('menu');
    const snapshot = yield collectionRef.get();
    const menuData = yield call(convertMenuSnapshotToMenuData, snapshot);
    yield put(fetchMenuSuccess(menuData));
  } catch (error) {
    yield put(fetchMenuFail(error.message));
  }
}

export function* onFetchMenu() {
  yield takeLatest(OrderActionTypes.FETCH_MENU, fetchMenuSaga);
}
