/* eslint-disable react/react-in-jsx-scope */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {navigationRef} from '~navigations/index';

import MainStack from '~navigations/MainStack';
import {Provider} from 'react-redux';
import {persistor, store} from '~store';
import {PersistGate} from 'redux-persist/integration/react';
function RootComponent(): JSX.Element {
  return (
    <NavigationContainer ref={navigationRef}>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootComponent />
      </PersistGate>
    </Provider>
  );
}
export default App;
