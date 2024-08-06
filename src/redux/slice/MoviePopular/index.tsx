import { useSelector } from 'react-redux';
import {RootState} from '../../store/store';

export const UseMoviePopular = () => {
  const {results, loading, error} = useSelector(
    (state: RootState) => state.movies,
  );
  return {results, loading, error};
};
