import { configureStore } from '@reduxjs/toolkit';
import heroProfileReducer from './slice/heroProfile';

export default configureStore({
  reducer: {
    heroProfile: heroProfileReducer,
  },
});
