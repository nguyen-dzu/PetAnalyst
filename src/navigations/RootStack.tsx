import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomePage from '~screens/Home';
import BottomStack from './BottomStack';
const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="Tab"
        component={BottomStack}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={'HomePage'}
        component={HomePage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
