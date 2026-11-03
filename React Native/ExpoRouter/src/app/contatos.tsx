import { Text, View, Pressable } from "react-native";
import { router } from "expo-router";

export default function Contatos() {

  // Navegação programática para o perfil.
  function handleNavigate(){
    router.push("/profile")
    // router.back(); // Volta para a tela anterior.
    // router.replace("/profile"); // Substitui a rota atual.
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pagina perfil do usuário</Text>

      <Pressable onPress={handleNavigate}>
        <Text>
          Ir para o perfil
        </Text>
      </Pressable>
    </View>
  );
}
