import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../screen/Home/Home';
import Profile from '../screen/Profile/Profile';
import { Routes } from './Routes';
import { Text, View, ScrollView } from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabPost from '../components/ProfileTabPost/ProfileTabPost';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <ProfileTabs.Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
          },
          tabBarStyle: {
            elevation: 0,
            zIndex: 0,
          },
        }}
        lazy={true} // Enable lazy loading
        swipeEnabled={true} // Enable swipe gestures
      >
        <ProfileTabs.Screen
          name={'Tab1'}
          component={ProfileTabPost}
          options={{
            tabBarLabel: ({ focused }) => {
              return <ProfileTabTitle title={'Photos'} isFocused={focused} />;
            },
          }}
        />
        <ProfileTabs.Screen
          name={'Tab2'}
          component={ProfileTabPost}
          options={{
            tabBarLabel: ({ focused }) => {
              return <ProfileTabTitle title={'Videos'} isFocused={focused} />;
            },
          }}
        />
        <ProfileTabs.Screen
          name={'Tab3'}
          component={ProfileTabPost}
          options={{
            tabBarLabel: ({ focused }) => {
              return <ProfileTabTitle title={'Saved'} isFocused={focused} />;
            },
          }}
        />
      </ProfileTabs.Navigator>
    </View>
  );
};

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
