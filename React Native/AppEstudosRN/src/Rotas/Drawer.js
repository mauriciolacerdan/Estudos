//======================= DRAWER(precisa instalar) https://reactnavigation.org/ =======================
// No home tem um button que abre o drawer pois tambem usa o navigation

import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./ComponentDrawer/CustomDrawer";

import TabNavigator from "./Tab";
import Home from "../Pages/Home/Home";
import Sobre from "../Pages/Sobre/Sobre";


export default function DrawerRoutes() {

  const Drawer = createDrawerNavigator();
  
  return (

    <Drawer.Navigator
      drawerContent={CustomDrawer} //customização por fora
      screenOptions={{
        drawerStyle: { backgroundColor: "#363636ff" },
        drawerActiveTintColor: "#fff",
        drawerActiveBackgroundColor: "rgba(43, 156, 49, 1)",
        drawerInactiveTintColor: "#ffffff9d",
      }} >

      <Drawer.Screen name="Home" component={Home} />

      <Drawer.Screen name="Sobre" component={Sobre} />

      <Drawer.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />

    </Drawer.Navigator>
     
  );
}
