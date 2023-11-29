import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMovieItem, ICategoryItem } from '../../../types/globalTypes';

interface IMovieSliceState {
  currentCategoryId: number;
  currentSearch: string;
  currentApiPage: number;
  categoriesList: ICategoryItem[];
  moviesList: IMovieItem[];
}

const initialState: IMovieSliceState = {
  currentCategoryId: 0,
  currentSearch: '',
  currentApiPage: 1,
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
    setCurrentApiPage: (state, action: PayloadAction<{ page: number }>) => {
      state.currentApiPage = action.payload.page;
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
      if (state.currentApiPage > 1) {
        state.moviesList.push(...action.payload.newMovieList);
      } else {
        state.moviesList = action.payload.newMovieList;
      }
    },
  },
});

export const {
  setMovieCategory,
  updateMovieSearch,
  setCurrentApiPage,
  updateMovieList,
  updateCategoriesList,
} = movieSlice.actions;

export default movieSlice.reducer;
