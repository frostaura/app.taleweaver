import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  isParentalControlsLocked: boolean;
  currentRoute: string;
}

const initialState: AppState = {
  isParentalControlsLocked: true,
  currentRoute: '/',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleParentalControls: (state) => {
      state.isParentalControlsLocked = !state.isParentalControlsLocked;
    },
    setCurrentRoute: (state, action: PayloadAction<string>) => {
      state.currentRoute = action.payload;
    },
  },
});

export const { toggleParentalControls, setCurrentRoute } = appSlice.actions;
export default appSlice.reducer;