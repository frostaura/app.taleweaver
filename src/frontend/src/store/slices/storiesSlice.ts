import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Story } from '../../types';

interface StoriesState {
  stories: Story[];
}

const initialState: StoriesState = {
  stories: [],
};

export const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    addStory: (state, action: PayloadAction<Story>) => {
      state.stories.push(action.payload);
    },
    updateStory: (state, action: PayloadAction<Story>) => {
      const index = state.stories.findIndex(s => s.id === action.payload.id);
      if (index !== -1) {
        state.stories[index] = action.payload;
      }
    },
    deleteStory: (state, action: PayloadAction<string>) => {
      state.stories = state.stories.filter(s => s.id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const story = state.stories.find(s => s.id === action.payload);
      if (story) {
        story.isFavorite = !story.isFavorite;
      }
    },
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload;
    },
  },
});

export const { addStory, updateStory, deleteStory, toggleFavorite, setStories } = storiesSlice.actions;
export default storiesSlice.reducer;