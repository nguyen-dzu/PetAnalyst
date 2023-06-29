// src/features/todo/todoSlice.js
import {createSlice} from '@reduxjs/toolkit';

interface SliceState {
  isLoading?: boolean;
  rappitApiHost: string;
}
// Define the initial state using that type
const initialState = {
  isLoading: false,
  rappitApiHost: '',
} as SliceState;

export const Slice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setLoading: (state: SliceState, {payload}: {payload: boolean}) => {
      state.isLoading = payload;
    },
    setRappitHost: (state: SliceState, {payload}: {payload: string}) => {
      state.rappitApiHost = payload;
    },
  },
});
export default Slice.reducer;
