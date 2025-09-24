// ===== Recebendo do banco de dados e levando para listUsers =====

import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import { db } from "./Firebase";
import { deleteDoc, doc } from "firebase/firestore";



export function UsersList({ data, handleEdit }) {


  async function DeleteItem() {
    const docRef = doc(db, "users", data.id);
    await deleteDoc(docRef);
  }

  function EditItem() { handleEdit(data); }


  return (
    <View style={styles.container}>

      <Text style={styles.item}>Nome: {data.nome}</Text>
      <Text style={styles.item}>Idade: {data.idade}</Text>
      <Text style={styles.item}>Cargo: {data.cargo}</Text>

      <TouchableOpacity style={styles.button} onPress={DeleteItem}>
        <Text style={styles.buttonText}>Deletar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { backgroundColor: "#3549ffff" }]} onPress={EditItem} >
        <Text style={styles.buttonText}>Editar</Text>
      </TouchableOpacity>

    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 8,
    borderRadius: 4,
    marginBottom: 14,
  },
  item: {
    color: "#000",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#990d00ff",
    alignSelf: "flex-start",
    padding: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    paddingLeft: 5,
    paddingRight: 5,
  },
});
