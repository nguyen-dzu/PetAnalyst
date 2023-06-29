import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '~screens/Home';
import {styled} from 'styled-components/native';
import Icon from 'react-native-vector-icons/AntDesign';
import colors from '~theme/colors';
import Insights from '~screens/Insights';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomePage"
      screenOptions={{
        tabBarActiveTintColor: colors.FIREBRICK,
        tabBarInactiveTintColor: colors.GRAY_08,
        tabBarStyle: {
          height: 74,
          //   position: 'absolute',
          marginBottom: 14,
          paddingBottom: 0,
          borderRadius: 30,
          marginHorizontal: 8,
          backgroundColor: '#fff',
          elevation: 4,
          shadowColor: '#000',
          shadowOpacity: 0.45,
          shadowRadius: 2,
          shadowOffset: {
            width: 2,
            height: 2,
          },
        },
        tabBarLabelStyle: [
          {
            color: colors.GRAY_03,
            fontSize: 15,
            height: 24,
            marginBottom: 10,
          },
        ],
      }}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Home Page',
          tabBarIcon: ({color}) => {
            return (
              <ContainerIconTab>
                <Icon name="home" color={color} size={24} />
              </ContainerIconTab>
            );
          },
          headerShown: false,
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
                <Icon name="barschart" color={color} size={24} />
              </ContainerIconTab>
            );
          },
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};
const ContainerIconTab = styled.View``;
export default BottomStack;
