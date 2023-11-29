import { IMovieItem } from '../types/globalTypes';

export const getYearByDate = (date: Date) => {
  return date.toString().split('-')[0];
};

export const getLimitedMovieArray = (arr: IMovieItem[], limit: number) => {
  return arr.slice(0, limit);
};
