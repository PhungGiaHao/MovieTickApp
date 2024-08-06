import { all, fork } from 'redux-saga/effects';
import MoviesSaga from './moviePlayingSaga';
export default function* rootSaga() {
    yield all([
    //   fork(initializeSaga), // Automatically run on app start
      fork(MoviesSaga), // Listen for specific actions
    ]);
}