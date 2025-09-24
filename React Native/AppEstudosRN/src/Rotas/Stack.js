//==================== STACK NAVIGATOR(precisa instalar) https://reactnavigation.org/ ====================
// Nesse projeto nao vai aparecer pois a do Drawer ta por cima

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Sobre from "../Pages/Sobre/Sobre";
import Home from "../Pages/Home/Home";


export default function Rotas() {

  const Stack = createNativeStackNavigator();

  return (

    <Stack.Navigator>
      <Stack.Screen name="Sobre" component={Sobre} options={{ headerShown: false }} />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home Stack",
          headerStyle: { backgroundColor: "#363636ff" },
          headerTintColor: "#fff",
        }}
        // tem muitas outras personalização na documentação do ReactNative
      />
    </Stack.Navigator>

  );
}
