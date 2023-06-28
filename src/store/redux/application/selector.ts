import {RootState} from '~store/index';

// selectors
export const loadingSelector = (state: RootState) =>
  state.application.isLoading;

export const setKey_host = (state: RootState) => state.application.key_host;
