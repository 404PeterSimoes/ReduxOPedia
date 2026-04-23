import { createSlice } from '@reduxjs/toolkit';

const initialState = { count: 15 };

export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementMultiple: (state, action) => {
      state.count += Number(action.payload);
    },
    decrementMultiple: (state, action) => {
      state.count -= Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementMultiple, decrementMultiple } =
  counterSlice.actions;
export const counterReducer = counterSlice.reducer;
