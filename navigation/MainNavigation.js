import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/Home/home';
import Profile from '../screen/Profile/profile';
import { Routes } from './Routes';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName={Routes.Home}>
      <Stack.Screen
        name={Routes.Home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Profile}
        component={Profile}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
