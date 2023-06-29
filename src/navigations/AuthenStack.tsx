import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '~screens/Authen/SignUp';
import SignIn from '~screens/Authen/SignIn';
import AuthenScreens from '~screens/Authen';
import {navigationOptions} from '.';
const Stack = createNativeStackNavigator();
const AuthenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{...navigationOptions}}
      initialRouteName="AuthenScreens">
      <Stack.Screen name="AuthenScreens" component={AuthenScreens} />
      <Stack.Screen name="SignInScreen" component={SignIn} />
      <Stack.Screen name="SignUpScreen" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthenStack;
