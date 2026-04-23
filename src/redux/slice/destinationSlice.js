import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  destinations: [
    {
      name: 'Kong Kong',
      days: 7,
      fact: "World's longest covered escalator",
    },
    {
      name: 'Japan',
      days: 10,
      fact: 'Japan is mostly mountains',
    },
    {
      name: 'New Zealand',
      days: 14,
      fact: 'Last country in the world to be inhabitated by humans',
    },
  ],
};

const destinationSlice = createSlice({
  name: 'destination',
  initialState: initialState,
  reducers: {},
});

export const destinationReducer = destinationSlice.reducer;
