import {RootState} from '~store/index';

// selectors
export const loadingSelector = (state: RootState) =>
  state.application.isLoading;

export const setRappitHost = (state: RootState) =>
  state.application.rappitApiHost;
