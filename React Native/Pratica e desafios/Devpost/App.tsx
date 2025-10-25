import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#36393f"
        barStyle="light-content"
        translucent={false}
      />
      <Routes />
    </NavigationContainer>
  );
}

/*import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View>
      <Text>Tela APp</Text>
    </View>
  );
}*/
