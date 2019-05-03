import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

es6promise.polyfill()

function* fetchNews() {
  const res = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=c39a26d9c12f48dba2a5c00e35684ecc')
                    .then(response => response.json(), );

  yield put({ type: "NEWS_RECEIVED", json: res.articles, });
}

function* actionWatcher() {
  yield takeLatest('GET_NEWS', fetchNews)
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}