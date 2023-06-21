import {createRef} from 'react';
import {StackActions} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

export const navigationOptions: StackNavigationOptions = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

export const navigationRef: any = createRef<any>();

export function navigate(name: string, params?: any) {
  navigationRef.current?.navigate(name, params);
}

export function push(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export const getNavigation = () => {
  return navigationRef.current;
};

export const getRouteName = () => {
  return navigationRef.current.getCurrentRoute().name;
};

export const navigateReset = (stackName: string, params?: any) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name: stackName, params}],
  });
};

// export { HomeStack };
