import {apiClient} from './Api';
export function getBreedDogs(host?: string) {
  return new apiClient(host).get(
    `https://dog-breeds2.p.rapidapi.com/dog_breeds`,
  );
}
