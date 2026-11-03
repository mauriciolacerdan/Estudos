import { Tabs } from "expo-router";
import { Feather } from '@expo/vector-icons'

// As telas listadas abaixo aparecem na barra de abas.
export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#121212"
        }
      }}

    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="home"
                size={size}
                color={color}
              />
            )
          }
        }}
      />

      <Tabs.Screen
        name="produtos"
        options={{
          headerShown: false,
          tabBarLabel: "Produtos",
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="shopping-bag"
                size={size}
                color={color}
              />
            )
          }
        }}
      />

      <Tabs.Screen
        name="search/index" // Rota organizada em uma subpasta.
        options={{
          headerShown: false,
          tabBarLabel: "Buscar",
          tabBarActiveTintColor: "red",
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Feather
                name="search"
                size={size}
                color={color}
              />
            )
          }
        }}
      />
    </Tabs>
  )
}