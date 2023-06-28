import {call} from 'typed-redux-saga';
import {getBreedDogs} from '~services/BreedDogs';
export function* apiGetBreedDogs() {
  return yield* call(getBreedDogs);
}
