import { View, Text, StyleSheet } from "react-native";
import { useRoute, RouteProp } from "@react-navigation/native";
import { StackParamList } from "../routes";

// Utilizando um tipo já existente para definir os parâmetros da rota.
type DetailRouteProps = RouteProp<StackParamList, "Detail">;

export function Detail() {
  // Tipando o retorno do hook useRoute.
  const route = useRoute<DetailRouteProps>();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Página detalhes</Text>
      <Text>Nome: {route.params.name}</Text>
      <Text>Idade: {route.params.idade}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    marginBottom: 14,
  },
});
