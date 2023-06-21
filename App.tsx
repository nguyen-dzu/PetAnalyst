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
  return <RootComponent />;
}
export default App;
