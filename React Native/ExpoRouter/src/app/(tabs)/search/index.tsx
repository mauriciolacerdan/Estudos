import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Search() {

  // Navegação programática para uma rota dinâmica.
  const router = useRouter()
  function handleNavigate(){
    router.push("/produto/102030")
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pagina buscar</Text>

      <Link
        href={{
          pathname: "/produto/[id]",
          params: { id: "123123" }, // O id preenche o parâmetro dinâmico.
        }}
      >
        Ir para o Produto 123123
      </Link>

      <Link
        href={{
          pathname: "/produto/[id]",
          params: { id: "456789" },
        }}
      >
        Ir para o Produto 456789
      </Link>


        <Pressable
        onPress={handleNavigate}
        > 
          <Text>Ir para o produto 102030</Text>
        </Pressable>

    </View>
  );
}
