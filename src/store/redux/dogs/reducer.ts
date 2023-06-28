import {createSlice} from '@reduxjs/toolkit';
import {DogBreeds} from '~constants/Type';

interface SliceState {
  listBreeds?: DogBreeds[];
}
const initialState = {
  listBreeds: [],
} as SliceState;
export const Slice = createSlice({
  name: 'dogsBreeds',
  initialState,
  reducers: {
    getListDogBreeds: (state: SliceState) => {
      return {
        ...state,
      };
    },
    getListDogBreedSuccess: (
      state: SliceState,
      {payload}: {payload: DogBreeds[]},
    ) => {
      {
        return {
          ...state,
          listBreeds: payload,
        };
      }
    },
  },
});

export default Slice.reducer;
