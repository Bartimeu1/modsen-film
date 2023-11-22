import { createSlice } from '@reduxjs/toolkit';

interface ThemeSliceState {
  currentTheme: 'light' | 'dark';
}

const initialState: ThemeSliceState = {
  currentTheme: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.currentTheme = state.currentTheme === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
