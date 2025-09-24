//==================== Navigation/Route/useLayoutEffect     Recebendo HTTP/API / LOADING =======================

import React, { useLayoutEffect, useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Image, Text } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native"; // pega propriedades vinda da home
import api from "./API"; //importando api

export default function Sobre() {


  // -----------Navigation/Route/useLayoutEffect-----------
  const navigation = useNavigation();
  const route = useRoute(); //Route recebe oque foi enviado pelo Home
  useLayoutEffect(() => { //so aparece os dados na tela depois que toda função é finalizada
    navigation.setOptions({title: "Sobre",});//barra de navegação
  }, [navigation]);



  // ----------- Requisição HTTPS/Api (continuação la em baixo)(vinda de API.js) -----------
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    async function loadFilmes() {
      //precisa chamar o async(pode chamar no arquivo da API tambem)
      const response = await api.get("r-api/?api=filmes"); //pega itens da api
      //console.log(response.data)
      setFilmes(response.data);
      setLoading(false);
    }
    loadFilmes();
  }, []);



  //-------LOADING-------
  const [loading, setLoading] = useState(true);
  if (loading) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <ActivityIndicator color={"#121212"} size={100} />
      </View>
      );
    } else {
      return (
        <View>

          {/*Pega propriedades vinda da Home*/}
          <Text>{route.params?.nome}</Text>
          <Text>{route.params?.email}</Text>



          {/* ------ HTTPS/API continuação ------ */}
          <FlatList
            data={filmes}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 20 }}>
                <Text style={{ fontSize: 20 }}>{item.nome}</Text>
                <Image source={{ uri: item.foto }} style={{height: 250}} resizeMode="cover" />
                <Text>{item.sinopse}</Text>
              </View>
            )}
          />

        </View>
      );
    }
}
