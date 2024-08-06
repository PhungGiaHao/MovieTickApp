import {call, put, takeLatest} from 'redux-saga/effects';
import {
  fetchPlayingMoviesFailure,
  fetchPlayingMoviesStart,
  fetchPlayingMoviesSuccess,
} from '../redux/slice/MoviePlaying/MoviePlayingSlice';
import axiosClient from '../config/ApiConfig';
import {SagaIterator} from 'redux-saga';
import {IMoviesPlaying} from '../constants/MovieInterface';
import movieApi from '../api/movieApi';
import {
  fetchUpcomingMoviesFailure,
  fetchUpcomingMoviesStart,
  fetchUpcomingMoviesSuccess,
} from '../redux/slice/MovieUpcoming/MovieUpcoming';
import {
  fetchPopularMoviesFailure,
  fetchPopularMoviesSuccess,
} from '../redux/slice/MoviePopular/MoviePopular';

function* fetchPlayingMoviesSaga(): SagaIterator<any> {
  try {
    const movies: IMoviesPlaying = yield call(movieApi.getPlayingMovie);
    yield put(fetchPlayingMoviesSuccess(movies));

    const moviesUpcoming: IMoviesPlaying = yield call(
      movieApi.getUpdatingMovie,
    );
    yield put(fetchUpcomingMoviesSuccess(moviesUpcoming));

    const moviesPopular: IMoviesPlaying = yield call(movieApi.getPopularMovie);
    yield put(fetchPopularMoviesSuccess(moviesPopular));
  } catch (error: any) {
    yield put(fetchPlayingMoviesFailure(error.message));
    yield put(fetchUpcomingMoviesFailure(error.message));
    yield put(fetchPopularMoviesFailure(error.message));
  }
}
function* MoviesSaga() {
  yield takeLatest(fetchPlayingMoviesStart.type, fetchPlayingMoviesSaga);
  yield takeLatest(fetchUpcomingMoviesStart.type, fetchPlayingMoviesSaga);
  yield takeLatest(fetchUpcomingMoviesStart.type, fetchPlayingMoviesSaga);
}

export default MoviesSaga;
