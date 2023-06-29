import {call, select} from 'typed-redux-saga';
import {getBreedDogs} from '~services/BreedDogs';
import {setRappitHost} from './application/selector';
import {getCatByBreed, getCatByProperty, getListCats} from '~services/Cat';
//dogs
export function* apiGetBreedDogs() {
  const rappitApiHost = yield* select(state => setRappitHost(state));
  return yield* call(getBreedDogs, rappitApiHost);
}
//cats
export function* apiGetListBeedCats() {
  const rappitApiHost = yield* select(state => setRappitHost(state));
  return yield* call(getListCats, rappitApiHost);
}

export function* apiGetCatsByBreed(breed?: string) {
  const rappitApiHost = yield* select(state => setRappitHost(state));
  return yield* call(getCatByBreed, rappitApiHost, breed);
}

export function* apiGetCatsByProperty(property?: string) {
  const rappitApiHost = yield* select(state => setRappitHost(state));
  return yield* call(getCatByProperty, rappitApiHost, property);
}
