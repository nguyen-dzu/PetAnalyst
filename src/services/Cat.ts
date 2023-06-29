import {apiClient} from './Api';

export function* getListCats(host?: string) {
  return new apiClient(host).get(`https:/${host}/cat_breeds`);
}

export function* getCatByProperty(host?: string, property?: string) {
  return new apiClient(host).get(
    `https://${host}/cat_breeds/group/origin/${property}`,
  );
}

export function* getCatByBreed(host?: string, breed?: string) {
  return new apiClient(host).get(`https://${host}/cat_breeds/breed/${breed}`);
}
