import {all, call, put, takeLatest} from 'typed-redux-saga';
import {apiGetBreedDogs} from '../apiHelper';
import {getListDogBreedSuccess, getListDogBreeds} from './actions';

function* listDogBreedsSaga() {
  try {
    const response: any = yield* call(apiGetBreedDogs);
    if (response) {
      yield* put(getListDogBreedSuccess(response.data));
    } else {
      yield* put(getListDogBreedSuccess([]));
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function* () {
  yield* all([takeLatest(getListDogBreeds, listDogBreedsSaga)]);
}
