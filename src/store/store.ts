import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from './features/baseApi/baseApi';
import { movieApi } from './features/movies/movieApi';
import themeReducer from './features/theme/themeSlice';
import movieReducer from './features/movies/movieSlice';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    theme: themeReducer,
    movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const allMiddlewares = [baseApi.middleware, movieApi.middleware];
    return getDefaultMiddleware().concat(...allMiddlewares);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
