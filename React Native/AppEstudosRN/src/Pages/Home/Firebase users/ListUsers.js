//======================= ENVIANDO,RECEBENDO E ALTERANDO DADOS DE USUARIOS E DESLOGA=======================
// Trabalhando junto com users.js

import React, { useState, useEffect } from "react";
import {View,Text,TextInput,StyleSheet,TouchableOpacity,FlatList,ScrollView,} from "react-native";

import { db, auth } from "./Firebase";
import {doc, getDoc, getDocs, onSnapshot, setDoc, collection, addDoc, updateDoc,} from "firebase/firestore"; //banco de dados
import { UsersList } from "./users";
import { signOut } from "firebase/auth"; //deslogar usuario



export function Usuarios() {



  // Recebendo do banco de dados
  const [nome, setNome] = useState("carregando...");
  const [users, setUserrs] = useState([]); //da lista
  useEffect(() => {
    async function getDados() {
      const docref = doc(db, "users", "1");
      getDoc(docref)
        //dessa forma busca apenas uma vez os dados
        .then((snapshot) => {
          setNome(snapshot.data()?.Nome);
        })
        .catch((erro) => {
          console.log("error: "), console.log(erro);
        }); //caso der erro vai mostrar

      //Snapshot atualiza informaçoes automatico(mas gasta performace do app / recisa importar)
      //onSnapshot(doc(db, 'users','1'), (doc)=>{ setNome(doc.data()?.Nome) })

      //Consumindo Lista
      const usersRef = collection(db, "users");
      getDocs(usersRef)
        // snapshot.forEach((doc)=>{}) //usar snapshot para atualizar automatico
        .then((snapshot) => {
          let lists = [];
          snapshot.forEach((doc) => {
            lists.push({
              id: doc.id,
              nome: doc.data().nome,
              idade: doc.data().idade,
              cargo: doc.data().cargo,
            });
          });
          setUserrs(lists);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getDados();
  }, []);


  //Enviando para o Banco de dados(precisa fazer importaçõs da função)
  const [nomebb, setNomebb] = useState(""); //vindo do textInput
  const [idadebb, setIdadebb] = useState("");
  const [cargobb, setCargobb] = useState("");
  async function handleRegister() {
    //Cria id especifico que voce definir(dento de users com id 3)
    /*await setDoc(doc(db, "users", "3"), {
      nome: "Jose",
      idade: "30",
      cargo: "Backend"b
    })*/

    // Gera id aleatorio para nao se repetir
    await addDoc(collection(db, "users"), {
      nome: nomebb,
      idade: idadebb,
      cargo: cargobb,
    })
      //bons modos:
      .then(() => {
        console.log("Cadastrago com sucesso!");
        setNomebb("");
        setCargobb("");
        setIdadebb("");
      }) //roda quando a Promise é resolvida com sucesso
      .catch((err) => {console.log(err);}); //roda quando a Promise é rejeitada
  }


  //Editando(continuação no users)
  const [isEdit, setIsedit] = useState("");
  function editUser(data) {
    setNomebb(data.nome);
    setIdadebb(data.idade);
    setCargobb(data.cargo);
    setIsedit(data.id);
  }
  async function handleEditUser() {
    const docRef = doc(db, "users", isEdit);
    await updateDoc(docRef, {
      nome: nomebb,
      idade: idadebb,
      cargo: cargobb,
    });
    setNomebb("");
    setCargobb("");
    setIdadebb("");
    setIsedit("");
  }


  //Desloga Usuario
  async function handleLogout() { await signOut(auth); }



  return (
    <View>
      <ScrollView contentContainerStyle={{ alignItems: "center", paddingBottom: 10, width:'100%' }} >


        {/*Recebendo do banco de dados*/}
        <Text style={{ fontSize: 20, textAlign: "center" }}>{" "}Vindos do banco de dados: {"\n"} {nome}{" "}</Text>
        <FlatList
          style={{marginTop: 8, marginLeft: 8, marginRight: 8,}}
          data={users}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => ( <UsersList data={item} handleEdit={(item) => editUser(item)} /> )}
          scrollEnabled={false} //usado quanto ta dentro de uma scrowview
        />


        {/*Enviando para o Banco de dados*/}
        <TextInput
          style={[styles.input, { marginTop: 20 }]}
          placeholder="Digite seu nome..."
          value={nomebb}
          onChangeText={(text) => setNomebb(text)} />
        <TextInput
          style={styles.input}
          placeholder="Digite sua idade..."
          value={idadebb}
          onChangeText={(text) => setIdadebb(text)} />
        <TextInput
          style={styles.input}
          placeholder="Digite seu cargo..."
          value={cargobb}
          onChangeText={(text) => setCargobb(text)} 
        />
        
        {isEdit !== "" ? (
          <TouchableOpacity style={styles.buttons} onPress={handleEditUser}>
            <Text style={styles.textb}>Editar Usuario</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.buttons} onPress={handleRegister}>
            <Text style={styles.textb}>Adicionar</Text>
          </TouchableOpacity>
        )}


        <TouchableOpacity style={styles.buttons} onPress={handleLogout}>
          <Text style={[styles.textb, {backgroundColor: 'red'}]}>Deslogar</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    width: 150,
    borderColor: "gray",
  },
  buttons: {
    backgroundColor: "#000",
    marginBottom: 30,
  },
  textb: {
    padding: 8,
    color: "#fff",
  },
});
