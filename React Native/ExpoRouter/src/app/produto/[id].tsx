import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function DetalheProduto() {
  const { id } = useLocalSearchParams<{ id: string }>() // Lê o parâmetro id da rota.

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Produto: {id}</Text>
    </View>
  )
}