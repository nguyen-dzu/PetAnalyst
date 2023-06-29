import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PetProfile from '~screens/PetProfile';
import InfoProfile from '~screens/PetProfile/InfoPet';
import {navigationOptions} from '.';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{...navigationOptions}}>
      <Stack.Screen name="PetProfile" component={PetProfile} />
      <Stack.Screen name="InfoProfile" component={InfoProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
