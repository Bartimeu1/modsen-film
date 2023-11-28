import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMovieItem, ICategoryItem } from '../../../types/globalTypes';

interface IMovieSliceState {
  currentCategoryId: number;
  currentSearch: string;
  categoriesList: ICategoryItem[];
  moviesList: IMovieItem[];
}

const initialState: IMovieSliceState = {
  currentCategoryId: 0,
  currentSearch: '',
  categoriesList: [{ name: 'All', id: 0 }],
  moviesList: [],
};

export const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setMovieCategory: (
      state,
      action: PayloadAction<{ categoryId: number }>,
    ) => {
      state.currentCategoryId = action.payload.categoryId;
    },
    updateMovieSearch: (state, action: PayloadAction<{ value: string }>) => {
      state.currentSearch = action.payload.value;
    },
    updateCategoriesList: (
      state,
      action: PayloadAction<{ newCategoriesList: ICategoryItem[] }>,
    ) => {
      state.categoriesList = [
        ...state.categoriesList,
        ...action.payload.newCategoriesList,
      ];
    },
    updateMovieList: (
      state,
      action: PayloadAction<{ newMovieList: IMovieItem[] }>,
    ) => {
      state.moviesList = action.payload.newMovieList;
    },
  },
});

export const {
  setMovieCategory,
  updateMovieSearch,
  updateMovieList,
  updateCategoriesList,
} = movieSlice.actions;

export default movieSlice.reducer;
