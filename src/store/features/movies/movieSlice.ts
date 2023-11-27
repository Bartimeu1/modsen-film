import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMovieItem } from '../../../types/globalTypes';

interface IMovieSliceState {
  categoryId: number;
  currentSearch: string;
  moviesList: IMovieItem[];
}

const initialState: IMovieSliceState = {
  categoryId: 28,
  currentSearch: '',
  moviesList: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieCategory: (state, action: PayloadAction<{ categoryId: number }>) => {
      state.categoryId = action.payload.categoryId;
    },
    updateMovieSearch: (state, action: PayloadAction<{ value: string }>) => {
      state.currentSearch = action.payload.value;
    },
    updateMovieList: (
      state,
      action: PayloadAction<{ newMovieList: IMovieItem[] }>,
    ) => {
      state.moviesList = action.payload.newMovieList;
    },
  },
});

export const { setMovieCategory, updateMovieSearch, updateMovieList } =
  movieSlice.actions;

export default movieSlice.reducer;
