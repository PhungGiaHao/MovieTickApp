import axiosClient from '../config/ApiConfig';
import {Config} from '../config/Config';
import { IMoviesPlaying } from '../constants/MovieInterface';

const movieApi = {
  getPlayingMovie(): Promise<IMoviesPlaying> {
    const url = `/movie/now_playing?api_key=${Config.APIKEY}`;
    return axiosClient.get(url);
  },
  getUpdatingMovie() {
    const url = `/movie/upcoming?api_key=${Config.APIKEY}`;
    return axiosClient.get(url);
  },
  getPopularMovie() {
    const url = `/movie/popular?api_key=${Config.APIKEY}`;
    return axiosClient.get(url);
  },
  getSearchedMovie(query: string) {
    const url = `/search/movie?api_key=${Config.APIKEY}&query=${query}`;
    return axiosClient.get(url);
  },
  getMovieDetail(id: number) {
    const url = `/movie/${id}?api_key=${Config.APIKEY}`;
    return axiosClient.get(url);
  },
  getMovieCastDetail(id: number) {
    const url = `/movie/${id}/credits?api_key=${Config.APIKEY}`;
    return axiosClient.get(url);
  },
};

export default movieApi;
