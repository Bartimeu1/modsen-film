import { baseApi } from '../baseApi/baseApi';

import { IMovieData, ICategoryData } from '../../../types/globalTypes';

export const movieApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query<
      IMovieData,
      { with_genres?: number | string; query?: string }
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
  }),
});

export const { useGetCategoriesQuery, useGetMoviesQuery } = movieApi;
