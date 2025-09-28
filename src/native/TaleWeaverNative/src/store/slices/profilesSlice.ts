import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChildProfile } from '../../types';

interface ProfilesState {
  profiles: ChildProfile[];
  activeProfileId?: string;
}

const initialState: ProfilesState = {
  profiles: [],
  activeProfileId: undefined,
};

export const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    addProfile: (state, action: PayloadAction<ChildProfile>) => {
      state.profiles.push(action.payload);
    },
    updateProfile: (state, action: PayloadAction<ChildProfile>) => {
      const index = state.profiles.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.profiles[index] = action.payload;
      }
    },
    deleteProfile: (state, action: PayloadAction<string>) => {
      state.profiles = state.profiles.filter(p => p.id !== action.payload);
      if (state.activeProfileId === action.payload) {
        state.activeProfileId = undefined;
      }
    },
    setActiveProfile: (state, action: PayloadAction<string>) => {
      state.activeProfileId = action.payload;
    },
    setProfiles: (state, action: PayloadAction<ChildProfile[]>) => {
      state.profiles = action.payload;
    },
  },
});

export const { addProfile, updateProfile, deleteProfile, setActiveProfile, setProfiles } = profilesSlice.actions;
export default profilesSlice.reducer;