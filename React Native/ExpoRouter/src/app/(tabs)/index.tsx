import { Text, View } from "react-native";
import { Link } from "expo-router"; // Link permite navegar declarativamente.

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pagina principal</Text>

      <Link href="/profile">Ir para o perfil</Link>

      <Link href="/contatos">Ir para contatos</Link>
    </View>
  );
}
