// ARQUIVO PRINCIPAL COLOCANDO DRAWER COMO NAVEGAÇÃO PRINCIPAL

import { NavigationContainer } from "@react-navigation/native";

import DrawerRoutes from "./src/Rotas/Drawer";
import AuthProvider from "./src/Pages/Home/ContextAPI"; // passando informaçoes para todo o app

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DrawerRoutes />
      </AuthProvider>
    </NavigationContainer>
  );
}
