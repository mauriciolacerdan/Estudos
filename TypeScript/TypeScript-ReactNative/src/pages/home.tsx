import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import { Aluno } from "../components/aluno";

export function Home() {
  // O TypeScript infere o tipo inicial como string.
  const [nome, setNome] = useState("");

  // Permite armazenar uma string ou um número (Union Type).
  const [idade, setIdade] = useState<string | number>("");

  // Recebe nome e idade com seus respectivos tipos.
  function handleChangeName(nome: string, idade: number | string) {
    setNome(nome);
    setIdade(idade);
  }

  // Tipando o Array da FlatList.
  interface AlunoProps {
    // É possível tipar dessa forma mesmo que o TypeScript consiga inferir automaticamente.
    nome: string;
    idade: string | number;
  }
  // O generic <AlunoProps[]> define o tipo dos itens armazenados no estado.
  const [alunos, setAlunos] = useState<AlunoProps[]>([
    {
      nome: "Lucas", // Mesmo sem tipagem explícita, o TypeScript infere os tipos.
      idade: 19,
    },
    {
      nome: "Joao",
      idade: 23,
    },
  ]);
  const [showInput, setShowInput] = useState(false);

  function handleAdd() {
    if (!nome || !idade) {
      return;
    }

    // O TypeScript infere os tipos das propriedades automaticamente.
    let aluno = {
      nome: nome,
      idade: idade,
    };

    // O callback recebe o estado anterior e retorna um novo array.
    setAlunos((values) => [...values, aluno]);
    setNome("");
    setIdade("");
    setShowInput(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projeto React Native</Text>

      <Pressable onPress={() => handleChangeName("Ana Caroline", 19)}>
        <Text>Mudar nome</Text>
      </Pressable>

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.title}>Projeto React Native</Text>

        <Pressable onPress={() => setShowInput(!showInput)}>
          <Text style={styles.title}>{showInput ? "x" : "+"}</Text>
        </Pressable>
      </View>

      {/* Exibe o componente Aluno somente se o nome não estiver vazio. */}
      {nome !== "" && <Aluno nome={nome} idade={idade} />}

      {showInput && (
        <View style={styles.areaInput}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome..."
            value={nome}
            onChangeText={(text) => setNome(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua idade..."
            value={idade.toString()}
            onChangeText={(text) => setIdade(text)}
          />

          <Pressable style={styles.button} onPress={handleAdd}>
            <Text style={{ color: "#FFF", textAlign: "center" }}>
              Cadastrar
            </Text>
          </Pressable>
        </View>
      )}

      <FlatList
        style={{ flex: 1, paddingLeft: 14, paddingRight: 14 }}
        data={alunos}
        renderItem={({ item }) => <Aluno nome={item.nome} idade={item.idade} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
    marginTop: 36,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 28,
    paddingLeft: 14,
  },
  areaInput: {
    paddingLeft: 14,
    paddingRight: 14,
    marginBottom: 14,
    gap: 8,
  },
  input: {
    backgroundColor: "#DDD",
    color: "#000",
    padding: 8,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#0f291e",
    padding: 8,
    borderRadius: 8,
  },
});
