import { all, call } from 'redux-saga/effects';
import { onFetchMenu } from './order/sagas';

export default function* rootSaga() {
  yield all([call(onFetchMenu)]);
}
