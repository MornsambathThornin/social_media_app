import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screen/Home/Home';
import Profile from '../screen/Profile/Profile';
import { Routes } from './Routes';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ header: () => null }}
      initialRouteName={Routes.Home}
    >
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
