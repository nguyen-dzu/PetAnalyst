import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '~screens/Splash';
import AuthenStack from './AuthenStack';
import ProfileStack from './ProfileStack';
import RootStack from './RootStack';
import {navigationOptions} from './index';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{...navigationOptions}}>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AuthenStack"
        component={AuthenStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="RootStack"
        component={RootStack}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
