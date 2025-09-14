import { configureStore } from '@reduxjs/toolkit';
import profilesReducer from './slices/profilesSlice';
import storiesReducer from './slices/storiesSlice';
import charactersReducer from './slices/charactersSlice';
import themesReducer from './slices/themesSlice';
import appReducer from './slices/appSlice';

export const store = configureStore({
  reducer: {
    profiles: profilesReducer,
    stories: storiesReducer,
    characters: charactersReducer,
    themes: themesReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;