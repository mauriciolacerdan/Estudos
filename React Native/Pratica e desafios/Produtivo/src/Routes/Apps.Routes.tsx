import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

import Feather from 'react-native-vector-icons/Feather';

import Home from '../Pages/Home/Index';
import Profile from '../Pages/Profile/Index';
import Metas from '../Pages/Metas/Index';
import Rotina from '../Pages/Rotina/Index';

const HomeIcon = ({ color, size }) => (
  <Feather name="home" color={color} size={size} />
);

const RotinaIcon = ({ color, size }) => (
  <Feather name="calendar" color={color} size={size} />
);

const MetasIcon = ({ color, size }) => (
  <Feather name="flag" color={color} size={size} />
);

const ProfileIcon = ({ color, size }) => (
  <Feather name="user" color={color} size={size} />
);

function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#fff',
        tabBarStyle: { backgroundColor: '#0A74DA', borderTopWidth: 0 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={StackRoutes}
        options={{
          headerShown: false,
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name="Rotina"
        component={Rotina}
        options={{
          headerShown: false,
          tabBarIcon: RotinaIcon,
        }}
      />
      <Tab.Screen
        name="Metas"
        component={Metas}
        options={{
          headerShown: false,
          tabBarIcon: MetasIcon,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ProfileIcon,
        }}
      />
    </Tab.Navigator>
  );
}
