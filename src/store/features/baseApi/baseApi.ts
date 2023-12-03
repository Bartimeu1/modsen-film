import { BASE_MOVIE_URL } from '@constants/url';
import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_MOVIE_URL,
  credentials: 'same-origin',
  prepareHeaders: (headers) => {
    headers.set('Authorization', `Bearer ${process.env.MOVIE_API_KEY}`);

    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  endpoints: () => ({}),
});
