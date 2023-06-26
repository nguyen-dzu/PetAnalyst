import {apiClient} from './Api';

export function getBreedDogs(key: string, host: string) {
  return new apiClient(key, host).get(
    'https://dog-breeds2.p.rapidapi.com/dog_breeds',
  );
}
