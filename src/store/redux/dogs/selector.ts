import {RootState} from '~store/index';

export const getListDogBreed = (state: RootState) => {
  return state?.dogsBreeds?.listBreeds;
};
