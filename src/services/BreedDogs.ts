import {apiClient} from './Api';

export function getBreedDogs() {
  return new apiClient().get('https://dog-breeds2.p.rapidapi.com/dog_breeds');
}
