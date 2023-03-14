import { createSlice } from '@reduxjs/toolkit'

export const bidSlice = createSlice({
  name: 'bid',
  initialState: {
    lastBidDate : '',
    bids:[] //last bidding in time
  },
  reducers: {
    lastBid: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.lastBidDate = action.payload;
    },
    setBid:(state,action) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.bids = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { lastBid, setBid } = bidSlice.actions

export default bidSlice.reducer