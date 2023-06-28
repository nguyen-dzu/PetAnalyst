import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '~screens/Home';
import {styled} from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '~theme/colors';
import Insights from '~screens/Insights';
import {MaxSize} from '~constants/constants';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: colors.FIREBRICK,
        tabBarInactiveTintColor: colors.GRAY_08,
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Home Page',
          tabBarIcon: ({color}) => {
            return (
              <ContainerIconTab>
                <Icon name="Home" color={color} size={24} />
              </ContainerIconTab>
            );
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      />
      <Tab.Screen
        name="Insights"
        component={Insights}
        options={{
          title: 'Insights',
          tabBarIcon: ({color}) => {
            return (
              <ContainerIconTab>
                <Icon name="Insights" color={color} size={24} />
              </ContainerIconTab>
            );
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: '600',
          },
        }}
      />
    </Tab.Navigator>
  );
};
const ContainerIconTab = styled.View`
  width: ${MaxSize.WIDTH};
  height: 50px;
`;
export default BottomStack;
