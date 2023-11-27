import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

import { BASE_MOVIE_URL } from '../../../constants/url';

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
