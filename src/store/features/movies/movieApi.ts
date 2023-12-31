import {
  ICategoryData,
  IMovieData,
  IMovieVideoData,
} from '@root/types/globalTypes';

import { baseApi } from '../baseApi/baseApi';

export const movieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<
      IMovieData,
      { with_genres?: number | string; query?: string; page: number }
    >({
      query: (credentials) => ({
        url: `/${credentials.query ? 'search' : 'discover'}/movie`,
        method: 'GET',
        params: { ...credentials },
      }),
    }),
    getCategories: builder.query<ICategoryData, void>({
      query: () => ({
        url: '/genre/movie/list',
        method: 'GET',
      }),
    }),
    getVideoByMovieId: builder.query<IMovieVideoData, { movieId: number }>({
      query: (credentials) => ({
        url: `/movie/${credentials.movieId}/videos`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetMoviesQuery,
  useGetVideoByMovieIdQuery,
} = movieApi;
