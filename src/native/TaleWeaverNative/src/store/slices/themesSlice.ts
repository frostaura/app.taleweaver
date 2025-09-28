import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme } from '../../types';

interface ThemesState {
  themes: Theme[];
}

const initialState: ThemesState = {
  themes: [],
};

export const themesSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    setThemes: (state, action: PayloadAction<Theme[]>) => {
      state.themes = action.payload;
    },
  },
});

export const { setThemes } = themesSlice.actions;
export default themesSlice.reducer;