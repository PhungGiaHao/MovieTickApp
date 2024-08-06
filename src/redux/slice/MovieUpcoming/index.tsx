import {useAppSelector} from '../../../hook/hookRedux';
import {RootState} from '../../store/store';

export const UseMovieUpComing = () => {
  const {results, loading, error} = useAppSelector(
    (state: RootState) => state.moviesUpcoming,
  );
  return {results, loading, error};
};
