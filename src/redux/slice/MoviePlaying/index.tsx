import { useSelector } from 'react-redux';
import {RootState} from '../../store/store';

export const UseMoviePlaying = () => {
  const {results, loading, error} = useSelector(
    (state: RootState) => state.movies,
  );
  return {results, loading, error};
};
