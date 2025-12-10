import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/app.routes';
import AuthProvider from './src/contexts/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar
          backgroundColor="#36393f"
          barStyle="light-content"
          translucent={false}
        />
        <AppRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
