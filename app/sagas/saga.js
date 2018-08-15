import { put, takeEvery } from 'redux-saga/effects'

export function* saga() {
  yield takeEvery('VERIFICATION_DATA', actionAsync);
}

export  function* actionAsync() {
  try {
    yield put(VERIFICATION_DATA(data));
    // const data = yield call(() => {
    //   return fetch('https://dog.ceo/api/breeds/image/random')
    //           .then(res => res.json())
    //   }
    // );
    // yield put(requestDogSuccess(data));
  } catch (error) {
    yield put(VERIFICATION_DATA(data));
  }
}
