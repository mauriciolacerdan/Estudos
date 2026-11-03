import { View, Text, StyleSheet, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../routes";

// Define os tipos das propriedades recebidas pelo componente.
interface AlunoProps {
  nome: string;
  idade: string | number;
}

export function Aluno({ nome, idade }: AlunoProps) {
  // Tipando a navegação com as rotas e seus respectivos parâmetros.
  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <Pressable
      style={styles.container}
      onPress={() =>
        navigation.navigate("Detail", { name: nome, idade: idade })
      }
    >
      <Text style={styles.text}>Bem vindo: {nome}</Text>
      <Text style={styles.text}>Idade: {idade}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 14,
    backgroundColor: "#121212",
    borderRadius: 8,
    marginBottom: 8,
  },
  text: {
    color: "#FFF",
  },
});
