import { View, Text, Image } from "react-native";

import {DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default function CustomDrawer(props) {

  //pega props do drawer
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          width: "100%",
          height: 85,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <Image source={require("./perfil.png")} style={{ width: 65, height: 65 }} />
        <Text style={{color: "#000",fontSize: 17,marginTop: 10,marginBottom: 30,}}>Bem-Vindo!</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
