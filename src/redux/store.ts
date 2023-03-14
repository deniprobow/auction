import { configureStore } from '@reduxjs/toolkit';
import bidSlice from './bidSlice';
import loginReducer from './loginSlice';
import bidReducer from './bidSlice';

export default configureStore({
  reducer: {
    login: loginReducer,
    bid:bidReducer
  },
})