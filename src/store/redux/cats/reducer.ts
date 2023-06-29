import {createSlice} from '@reduxjs/toolkit';

interface SliceState {}
const initialState = {} as SliceState;
export const Slice = createSlice({
  name: 'cats',
  initialState,
  reducers: {},
});

export default Slice.reducer;
