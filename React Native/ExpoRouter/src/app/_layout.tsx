import { Stack } from "expo-router";
// Define a navegação e as opções compartilhadas das telas.

interface Produtoparam{
  id: string
}

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)" /* Grupo que organiza as telas exibidas em abas. */
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="profile"
        options={{
          title: "Perfil",
          headerStyle: {
            backgroundColor: "#121212",
          },
          headerTintColor: "#FFF",
        }}
      />

      <Stack.Screen
        name="contatos"
        options={{
          title: "Contatos",
        }}
      />

      <Stack.Screen
        name="produto/[id]"
        // Exibe o ID da rota dinâmica no título.
        options={({route})=>({title: `Produto: ${(route.params as Produtoparam)?.id ?? "" }`,})}
      />
    </Stack>
  );
}
