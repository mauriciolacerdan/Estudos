//======================= REACT NATIVE =======================
// DOCUMENTAÇOES E DICAS: https://reactnative.dev/docs/getting-started
// React native usa js entao aqui esta bons modos: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators


// ===================== IMPORTAÇÕES =====================
// React Native usa componentes próprios e permite usar hooks como useState para controle de estado.
import React, { useEffect, useState, useMemo, useRef, useContext } from "react";
import { View, Text, TextInput, Alert, Image, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList, Switch, Modal, Animated, requireNativeComponent, StatusBar, TouchableNativeFeedback, Keyboard } from "react-native"; //Platform(responde plataforma do celular)
import styled from 'styled-components/native';
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EvilIcons from "@expo/vector-icons/EvilIcons"; //Icones do Expo (https://icons.expo.fyi/Index)
import { useNavigation, useIsFocused } from "@react-navigation/native"; //Focused verifica se voce esta na tela(Home) e responde boleano(foi usado no projeto Financaspessoais)
import * as Animatable from "react-native-animatable";


// -----SEPARANDO COMPONENTES/IMPORTAÇÕES-----
import Pessoa from "./FlatList Pessoa";

import { Usuarios } from "./Firebase users/ListUsers";
import { auth } from "./Firebase users/Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, } from "firebase/auth"; //autenticação, criação e persistencia de usuario
import { AuthContext } from "./ContextAPI";




// ===================== COMPONENTE PRINCIPAL(pode ter componentes filhos) =====================
export default function Home(props) {
  //Props: voce passa parametros de um componente para o outro


  // ===================== ESTADOS (useState ) =====================
  // cria variáveis que mudam e fazem o componente atualizar sozinho.
  const [nomeAtual, setNomeAtual] = useState(""); // Nome salvo no AsyncStorage
  const [nomeDigitado, setNomeDigitado] = useState(""); // Nome digitado no input
  const [carroSelecionado, setcarroSelecionado] = useState("sheldon"); // Valor do Picker
  const [valor, setValor] = useState(0); // Valor do Slider
  const [status, setStatus] = useState(false); // Estado do Switch
  const [showForm, setShowForm] = useState(true); // Estado da showform
  const [feed, setFeed] = useState([
    { id: "1", nome: "Matheus", idade: 50, email: "matheus@matheus.com" },
    { id: "2", nome: "Lucas", idade: 23, email: "lucas@lucas.com" },
    { id: "3", nome: "Henrique", idade: 40, email: "henri@henrique.com" },
    { id: "4", nome: "Ana", idade: 19, email: "ana@ana.com" },
    { id: "5", nome: "josé", idade: 29, email: "jose@jose.com" },
  ]); //Flatlist


  // ----------- useEffect -----------
  // useEffect executa efeitos colaterais (como ler/salvar dados ou exibir logs)
  // Pode rodar ao abrir o app ou quando uma variável muda (dependências)
  useEffect(() => {
    if (nomeAtual) {
      console.log("Nome atualizado!", `Novo nome: ${nomeAtual}`);
    }
  }, [nomeAtual]);


  // ----------- useMemo -----------
  // useMemo memoriza um valor calculado e só recalcula se as dependências mudarem
  const letrasNome = useMemo(() => {
    return (nomeAtual || "").length;
  }, [nomeAtual]);



  // ----------- AsyncStorage (precisa ser instalado) -----------
  // AsyncStorage permite salvar algo
  async function gravarNome(nome) {
    await AsyncStorage.setItem("@nome", nome); // await é usado dentro de funções async para pausar a execução até que uma Promise seja resolvida, deixando o código assíncrono mais simples e legível.
    // await AsyncStorage.clear() // limpa o asyncStorage
  }
  // Carrega nome salvo:
  useEffect(() => {
    async function loadData() {
      await AsyncStorage.getItem("@nome").then((value) => {
        setNomeAtual(value);
      });
    }
    loadData();
  }, []);



  // ----------- useRef -----------
  // useRef guarda um valor entre renderizações sem recarregar a tela, útil para acessar elementos ou valores diretamente.
  // alem dos exemplos abaixo existem mais funcoes que pode usar
  const inputRef = useRef(null);


  // ----------- FUNÇÃO DE EVENTO / useRef -----------
  // função para lidar com clique no botão
  function atualizarNome() {
    if (nomeDigitado === "") {
      Alert.alert("Digite seu nome"); //tem como personalizar Alert como colocar button
      inputRef.current.focus(); // Dá foco no campo de texto usando a ref
      return;
    }
    setNomeAtual(nomeDigitado);
    gravarNome(nomeDigitado); // Salva o nome no AsyncStorage
    inputRef.current.clear(); // Limpa o textInput
  }



  // ----------- Modal -----------
  //abre uma janela na frente a anterior
  const [modalVisible, setModalVisible] = useState(false);
  function abrirModal() { setModalVisible(true); }



  // ----------- Navigation/Route(passando props e la recebe por parametros tambem) -----------
  const navigation = useNavigation();
  function NavegandoSobre() { /*()=> navigation.navigate('Sobre') //navigation.goBack volta para a inicial e navigation.dispatch(StackActions.popToTop limpa a pilha de navegação e volta tudo) */
    navigation.navigate("Sobre", {
      nome: "Matheus",
      email: "matheus@teste.com",
    });
  }



  // ----------- Animações(continuação la em baixo) -----------
  const larAnimada = useRef(new Animated.Value(150)).current;
  const altAnimada = useRef(new Animated.Value(50)).current;
  const opacidadeAnimada = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    /*Animated.timing(altAnimada, {
      toValue: 300,
      duration: 2000,
      useNativeDriver: false
    }).start();*/

    /*Animated.sequence([
      Animated.timing(larAnimada,{
        toValue: 300,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(altAnimada,{
        toValue: 200,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false
      }),
    ]).start();*/

    /*Animated.parallel([
      Animated.timing(larAnimada,{
        toValue: 300,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(altAnimada,{
        toValue: 200,
        duration: 2000,
        useNativeDriver: false
      })
    ]).start();*/

    Animated.sequence([
      Animated.timing(opacidadeAnimada, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: false,
      }),

      Animated.parallel([
        Animated.timing(larAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
        Animated.timing(altAnimada, {
          toValue: 300,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
    ]).start(/*() => { //função anonima é executada quando a animação acabar
      alert('Animação finalizada');
    }*/);

    /*Animated.loop(
      Animated.timing(larAnimada, {
        toValue: 300,
        duration: 2000,
        useNativeDriver: false
      }),
      Animated.timing(larAnimada, {
        toValue: 150,
        duration: 2000,
        useNativeDriver: false
      })
    ).start();*/

    //largura ou altura por porcentagem para ocupar toda tela(colocar no width:,)
    let porcentagemLargura = larAnimada.interpolate({
      inputRange: [0, 100], //Entrada
      outputRange: ["0%", "100%"], //vai sair 0% ate 100%
    });
  }, []);



  // ----------- Firebase (exportação la em cima) -----------

  //Autenticação/login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authUser, setAuthUser] = useState(null);
  async function handleCreateUser() {
    //criando conta
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log(user);
  }
  async function handleLogin() {
    //fazendo login
    const user = await signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
        setAuthUser({
          email: user.user.email, //pegando informaçoes de login que ta dentro do authUser e pode ser usada para outras funções
          uid: user.user.uid,
        });
      })
      .catch((err) => {
        if (err.code === "auth/missing-password") {
          //pode pegar o erro que deu e fazer algo com o erro
          Alert.alert("Digite a Senha para entrar.");
          return;
        }
      });
  }

  //persistencia de usuario(ver se ele ta logado)
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser({
          email: user.email,
          uid: user.uid,
        });
        return;
      }
      setAuthUser(null);
    });
  }, []);

  //listUsers recebe informaçoes do banco de dados
  if (authUser) {
    // opção de fazer loading
    return (
      <View style={styles.container}>
        <Usuarios />
      </View>
    );
  }

  //Exeplos de backend e manipulação no FinancaspessoaisAPP


  
  //Aparece/Esconde (continuação la em baixo)
  function handleToggle() { setShowForm(!showForm); }



  //ContextAPi continuação (importar bilbioteca react)
  //no exemplo pega informaçoes que foi passado para todo app
  const {userC} = useContext(AuthContext)
  // console.log(userC);




  // ----------- RENDERIZAÇÃO -----------
  return (
    <View style={styles.container}> {/*keyboardAvoidingView (View sobe com teclado). pode colocar TouchableNativeFeedback em cima da view que faz ação quando clica na tela, e pode fechar keyboard */}
      <ScrollView /*Opção de Horizontal tambem / barra de rolagem*/ style={{ flex: 1 }} contentContainerStyle={{ alignItems: "center", paddingBottom: 10 }} >



        <Image source={require("./icon.png")} style={{ width: 200, height: 200 }} />



        {/* Texto vindo do estado  */}
        <Text style={{fontSize: 18, marginBottom: 10}}> Nome atual: {nomeAtual}, possui {letrasNome} letras </Text>

        {/* Campo de texto controlado pelo estado */}
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome:"
          onChangeText={(texto) => setNomeDigitado(texto)}
          ref={inputRef}
          keyboardType="ascii-capable"
        />

        <Button title="Entrar" onPress={atualizarNome} />



        {/* Picker(precisa Instalar) (com uma array da para usar de forma mais dinamica) */}
        <Picker
          selectedValue={carroSelecionado}
          onValueChange={(itemValue, itemIndex) =>
            setcarroSelecionado(itemValue)
          }
          style={{ width: 200 }}
        >
          <Picker.Item key={0} value={"Sheldon"} label="Sheldon" />
          <Picker.Item key={1} value={"Inho"} label="Inho" />
          <Picker.Item key={2} value={"Cuelhinho"} label="Cuelhinho" />
        </Picker>
        <Text>Selecionou: {carroSelecionado}</Text>


        <Slider
          style={{ width: 300, marginTop: 50 }}
          minimumValue={0}
          maximumValue={100}
          value={valor}
          onValueChange={(valorSelecionado) => setValor(valorSelecionado)}
          minimumTrackTintColor="#36e218"
        />
        <Text style={{ marginBottom: 50 }}>Valor: {valor.toFixed(0)}</Text>


        <Switch
          value={status}
          onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
          trackColor={{ false: "#ff0000", true: "#0bbd19" }}
          thumbColor={"#121212"}
        />
        <Text style={{ marginBottom: 50 }}>Status: {String(status)}</Text>



        {/* Button so que personalisavel com icone importado que abre o modal */}
        <TouchableOpacity onPress={abrirModal}>
          <EvilIcons name="arrow-right" size={60} color="black" style={{ marginBottom: 50 }} />
        </TouchableOpacity>


      
        <Modal visible={modalVisible} animationType="slide" transparent={true}>
          <View style={styles.viewModal}>
            <Text style={{ color: "white", paddingBottom: 40 }}>
              Essa aba é um Modal
            </Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <EvilIcons name="arrow-left" size={60} color="white" />
            </TouchableOpacity>
          </View>
        </Modal>
        {/*a View pode ser importada*/}



        {/* Navegando */}
        <TouchableOpacity onPress={NavegandoSobre}>
          <Text style={{backgroundColor: '#f0f0f0', marginBottom: 50, fontSize: 20}}>Navega Filmes</Text>
        </TouchableOpacity>



        <Button title="Abrir Drawer" onPress={() => navigation.openDrawer()} style={{ marginBottom: 40 }} />



        {/* FlatList(importado da pasta src pessoa) */}
        <FlatList
          data={feed}
          renderItem={({ item }) => <Pessoa data={item} />}
          contentContainerStyle={{ alignItems: "center", width: "100%" }}
          scrollEnabled={false}
          // horizontal={true} //faz ficar horizontal
          // showsHorizontalScrollIndicator={false} //tira scroll horizontal
          // keyExtractor={} // recebe uma coisa
        />



        {/* Animações(precisa importar Animated,Useref e useEffect. pode ser usada com varias coisas(image, scrollView, flatlist...)) */}
        <Animated.View
          style={{
            //continuação la em cima
            width: larAnimada,
            height: altAnimada,
            backgroundColor: "#4169e1",
            justifyContent: "center",
            opacity: opacidadeAnimada,
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 22, color: "#fff" }}>
            Carregando...
          </Text>
        </Animated.View>

        {/*Animatable(precisa baixar e importar. usada em: text,bottons,image,view...)(oção de criar uma function para usar com onpress)*/}
        <Animatable.Text //alguns casos tem que criar uma const passando o animatable junto com o touchebleopacity
          style={{ fontSize: 25 }}
          animation="pulse" //tem outros tipos de animação no docs react native
          iterationCount={Infinity}
          duration={5000}
        >
          Sheldonzon Bananinha
        </Animatable.Text>



        {/*Autenticação/login Firebase*/}
        <View style={{flex: 1, backgroundColor: '#2424242f', alignItems: "center", marginTop: 50, marginBottom: 50}}>
          <Text style={{ fontSize: 20, textAlign: "center" }}> Login: </Text>
          <TextInput
            style={[styles.input, { width: 250 }]}
            placeholder="Digite seu Email..."
            value={email}
            onChangeText={(text) => setEmail(text)} />
          <TextInput
            style={styles.input}
            placeholder="Digite sua Senha..."
            value={password}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true} />

          <TouchableOpacity style={[styles.buttons, { marginBottom: 5 }]} onPress={handleCreateUser}>
            <Text style={styles.textb}>Criar conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={handleLogin}>
            <Text style={styles.textb}>Fazer Login</Text>
          </TouchableOpacity>
        </View>



        {/*Esconde/Mostra oque estiver na View*/}
        {showForm && (
          <View>
            <Text>
              {" "}
              Programação é o ato de dar instruções a um computador para que ele
              execute tarefas. Na prática, é como ensinar passo a passo o que
              precisa ser feito.{" "}
            </Text>
          </View>
        )}
        <TouchableOpacity style={styles.buttons} onPress={handleToggle} >
          <Text style={styles.textb}>
            {showForm ? "Esconder formulario" : "Mostrar formulario"}
          </Text>
        </TouchableOpacity>



        {/*Styled (estilização la em baixo)*/}
        <Containe>
         <Texto cor="#fff" tamanho="28">Styled</Texto>
         <Nome>Olá Sheldon</Nome>
        </Containe>



        {/*StatusBar (no ios e android funciona de formas diferentes)(mais funçoes na doc do reactnative)*/}
        <StatusBar backgroundColor="#ff0000ff" barStyle="dark-content" />



      </ScrollView>
    </View>
  );
}




// ====== ESTILOS (CSS do React Native) ======

// O StyleSheet permite criar objetos de estilo reutilizáveis
//pode exportar para ficar mais organizado
const styles = StyleSheet.create({
  // ===== Flexbox https://flexboxfroggy.com/ =====
  container: {
    // Estilo do componente Home (container principal)
    flex: 1, // Ocupa toda a tela
    backgroundColor: "white",
    alignItems: "center", // Alinha itens horizontalmente
    // flexDirection: 'row',            // faz com que as view filhas fica em linha
    // justifyContent: 'center', // Alinhamento na vertical
  },
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
    marginBottom: 10,
  },
  textb: {
    padding: 8,
    color: "#fff",
  },
  viewModal: {
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929",
    borderRadius: 30,
  },
});



//Styled component(escreve estilo CSS diretamente nos componentes)
//precisa baixar(npm install styled-components) e exportar
//pode exportar para ficar mais organizado e pode passar por props
const Containe = styled.View`
background-color: #E6B450;
align-items: center;
justify-content: center;
width: 150px;
height: 60px;
margin-bottom: 40px;
margin-Top: 50px;
`;
const Texto = styled.Text`
color: ${props => props.cor};
font-size: ${props => props.tamanho}px;
`;
const Nome = styled.Text`
color: #fff;
font-size: 15px;
`;