import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./pages/home";
import { Detail } from "./pages/detail";

// Tipando as rotas e os parâmetros que cada uma recebe.
export type StackParamList = {
  Home: undefined; // undefined indica que a rota não recebe parâmetros.
  Detail: {
    name: string;
    idade: string | number;
  };
};

// Passando os tipos das rotas para o navegador.
const Stack = createNativeStackNavigator<StackParamList>();

export function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          title: "Detalhes",
        }}
      />
    </Stack.Navigator>
  );
}
