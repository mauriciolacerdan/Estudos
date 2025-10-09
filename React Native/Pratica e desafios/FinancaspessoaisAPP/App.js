// projeto: https://www.figma.com/design/O7hp0vwYIswS6xfKC51TFj/App-Finan%C3%A7as?node-id=0-1

import 'react-native-gesture-handler';
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./src/Rotas/index";
import AuthProvider from "./src/Context/auth";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#f0f4ff" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
