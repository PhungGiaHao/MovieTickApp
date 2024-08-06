import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
import moviesPlayingReducer from '../slice/MoviePlaying/MoviePlayingSlice';
import moviesUpcomingReducer from '../slice/MovieUpcoming/MovieUpcoming';
import moviesPopularReducer from '../slice/MoviePopular/MoviePopular';
import rootSaga from '../../saga/rootSaga';
const store = configureStore({
  reducer: {
    movies: moviesPlayingReducer,
    moviesUpcoming: moviesUpcomingReducer,
    moviesPopular: moviesPopularReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({thunk: false}).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
