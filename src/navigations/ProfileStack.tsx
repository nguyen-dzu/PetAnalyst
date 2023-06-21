import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PetProfile from '~screens/PetProfile';
import InfoProfile from '~screens/PetProfile/InfoPet';

const Stack = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PetProfile" component={PetProfile} />
      <Stack.Screen name="InfoProfile" component={InfoProfile} />
    </Stack.Navigator>
  );
};

export default ProfileStack;
