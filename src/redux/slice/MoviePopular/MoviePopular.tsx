import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IMoviePlaying} from '../../../constants/MovieInterface';

export interface MoviesState {
  results: IMoviePlaying[];
  page: number;
  total_pages: number;
  total_results: number;
  loading?: boolean;
  error?: string | null;
}
const initialState: MoviesState = {
  results: [],
  page: 0,
  total_pages: 0,
  total_results: 0,
  loading: false,
  error: null,
};

const moviesPopularSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    fetchPopularMoviesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPopularMoviesSuccess(state, action: PayloadAction<MoviesState>) {
      state.loading = false;
      state.results = action.payload.results;
      state.page = action.payload.page;
      state.total_pages = action.payload.total_pages;
      state.total_results = action.payload.total_results;
    },
    fetchPopularMoviesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPopularMoviesStart,
  fetchPopularMoviesSuccess,
  fetchPopularMoviesFailure,
} = moviesPopularSlice.actions;
export default moviesPopularSlice.reducer;
