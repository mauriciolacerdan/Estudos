//======== TAB NAVIGATOR(precisa instalar)(ta dentro do drawer para nao da conflito) https://reactnavigation.org/ ========


import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import Home from "../Pages/Home/Home";
import Stack from "./Stack";

const Tab = createBottomTabNavigator();


export default function TabNavigator() {
  return (

    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: { backgroundColor: "#363636ff", borderTopWidth: 0 },
      }}
    >


      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: (
            { color, size } //deixando a color e size nativa a ativa fica azul
          ) => <FontAwesome6 name="house" size={size} color={color} />,
        }}
      />

      <Tab.Screen
        name="stack Sobre"
        component={Stack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="file-alt" size={size} color={color} />
          ),
        }}
      />

    </Tab.Navigator>

  );
}
