// src/features/todo/todoSlice.js
import {createSlice} from '@reduxjs/toolkit';

type key_host = {
  key: string;
  host: string;
};
interface SliceState {
  isLoading?: boolean;
  key_host: key_host;
}
// Define the initial state using that type
const initialState = {
  isLoading: false,
  key_host: {
    key: '',
    host: '',
  },
} as SliceState;

export const Slice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setLoading: (state: SliceState, {payload}: {payload: boolean}) => {
      state.isLoading = payload;
    },
    setKey_host: (state: SliceState, {payload}: {payload: key_host}) => {
      state.key_host = payload;
    },
  },
});
export default Slice.reducer;
