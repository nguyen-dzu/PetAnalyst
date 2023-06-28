import {fork} from 'typed-redux-saga';
import dogs from '~redux/dogs/saga';
export default function* rootSaga() {
  yield* fork(dogs);
}
