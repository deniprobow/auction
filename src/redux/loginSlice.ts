import { createSlice } from '@reduxjs/toolkit'

export const loginSlicer = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
    user : ''
  },
  reducers: {
    login: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLogin = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLogin = false;
      state.user = ''
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlicer.actions

export default loginSlicer.reducer