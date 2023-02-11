import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    agi: null,
    int: null,
    luk: null,
    str: null,
  },
  profileFormat: [],
  totalValue: null,
  lastValue: null,
  isLoading: false,
};

export const heroProfileSlice = createSlice({
  name: 'heroProfile',
  initialState,
  reducers: {
    getProfile: (state, action) => {
      state.profile = action.payload;
      state.totalValue = Object.values(action.payload).reduce(
        (prev, item) => prev + item,
      );
    },
    formatProfile: (state, action) => {
      const currentValue = Object.values(action.payload).reduce(
        (prev, item) => prev + item,
      );
      state.profileFormat = Object.entries(action.payload).map(
        ([skill, value]) => ({ skill, value }),
      );
      state.lastValue = state.totalValue - currentValue;
    },
    increment: (state, action) => {
      const skill = action.payload;
      state.profile = { ...state.profile, [skill]: state.profile[skill] + 1 };
    },
    decrement: (state, action) => {
      const skill = action.payload;
      state.profile = { ...state.profile, [skill]: state.profile[skill] - 1 };
    },
    updateLoadingStatus: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const {
  getProfile,
  formatProfile,
  increment,
  decrement,
  updateLoadingStatus,
} = heroProfileSlice.actions;

export default heroProfileSlice.reducer;
