import React, { useState, useEffect, useRef } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Button, Switch, FlatList, ScrollView, Keyboard, SafeAreaView, Image, Modal } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

import Header from './src/Instagram(HEADER)';
import List from './src/Instagram(HEADER)/List'
import { api } from './src/Conversor/Api'
import {PickerItem} from './src/Conversor/Picker'
import Api from './src/BuscadorCep/api';


export default function Area(){

  
  //=====Restaurante=====
  const [Usuarios, setQuantidade] = useState(0);
  const adicionando = () => {
    if(Usuarios < 10) { setQuantidade(Usuarios + 1)} else {Alert.alert('Limite')}
};
  const removendo = () => {
    if(Usuarios > 0) {setQuantidade(Usuarios - 1)}
};



  //=====Banco=====
  const [Nome, setNomeDigitado] = useState('');
  const [Idade, setIdadeDigitado] = useState(0);
  const [Sexo, setSexoDigitado] = useState('');
  const [Limite, setLimiteDigitado] = useState(0);
  const [Estudante, setEstudanteDigitado] = useState(false);
  const Dados = () => {
    Alert.alert(
      "Dados informados",
      `Nome: ${Nome}\nIdade: ${Idade}\nSexo: ${Sexo}\nLimite: R$${Limite.toFixed(0)}\nEstudante: ${Estudante ? 'Sim' : 'Não'}`
    );
  };




  //=====Instagram=====
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de muitos bugs',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1,
    },
    {
      id: '2',
      nome: 'Matheus',
      descricao: 'Isso sim é raiz!!!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '3',
      nome: 'Jose Augusto',
      descricao: 'Bora trabalhar, hoje estou muito animado',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      imgpublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 3,
    },
  ])



  //=====Conversor de moedas=====
  const [moedas, setMoedas] = useState([])
  const [moedaSelecionada, setMoedaSelecionada] = useState(null)
  const [moedaBValor, setMoedaBValor] = useState("")
  const [valorMoeda, setValorMoeda] = useState(null)
  const [valorConvertido, setValorConvertido] = useState(0)
  useEffect(()=>{
    async function localMoedas() {
      const response = await api.get("all")
      let arrayMoedas = [];
      Object.keys(response.data).map((key)=>{
        arrayMoedas.push({
          key: key,
          label: key,
          value: key,
        })
      })
      setMoedas(arrayMoedas)
      setMoedaSelecionada(arrayMoedas[0].key)
    }
    localMoedas();
  }, [])
  async function converter(){
    if (moedaBValor === 0 || moedaBValor === "" || moedaSelecionada === null ){
      return;
    }
    const response = await api.get(`/all/${moedaSelecionada}-BRL`)
    //console.log(response.data[moedaSelecionada].ask);

    let resultado = response.data[moedaSelecionada].ask * parseFloat(moedaBValor)
    setValorConvertido(`${resultado.toLocaleString("pt-BR", {style: 'currency', currency: 'BRL'})}`)
    if (!response.data[moedaSelecionada]) return;

    setValorMoeda(moedaBValor)
    Keyboard.dismiss()
  }



  //=====Buscador de Cep=====
  const [cep, setCep] = useState('');
  const [cepUser, setCepUser] = useState(null);
  async function buscar(){
    if (cep == ''){
      alert('Digite um cep valido');
      setCep('');
      return;
    }
    try{
      const response =  await Api.get(`/${cep}/json`); //aqui que busca os dados da api
      setCepUser(response.data);

      Keyboard.dismiss();//fechar teclado
    }catch(error){
      console.log('ERROR: ' + error)
    }
  }
  const inputRef = useRef(null);
  function limpar(){
    setCep('');
    inputRef.current.focus();
    setCepUser(null);
  }



  //=====PostoCombustivel=====
  const [modalVisible, setModalVisible] = useState(false);
  const [valorG, setValorG] = useState('')
  const [valorA, setValorA] = useState('')
  const [usar, setUsar] = useState('Nada')
  function calcular() {
   const resultado = parseFloat(valorA) / parseFloat(valorG);
   setModalVisible(true);
   if ( resultado < 0.7 ){
    setUsar("Alcool")
   }else if (resultado == 0.7 || resultado > 0.7){
    setUsar("Gasolina")
   }
  }



  return(
    <View>
    <ScrollView>

      {/*=====Instagram=====*/}
     {/* <View style={styles.container}>
       <Header/>
      <FlatList
       nestedScrollEnabled
       showsHorizontalScrollIndicator={false}
       keyExtractor={(item) => item.id}
       data={feed}
       renderItem={({item}) => <List data={item}/>}
       />
      </View> */}



      {/*=====Restaurante=====*/}
      <View style={styles.container}>
       <Text style={{fontSize: 40, }} >Restaurante</Text>
  
        <Text style={styles.contador}> {Usuarios} </Text>

        <View style={styles.Botoes}>
          <TouchableOpacity style={styles.Adicionar} onPress={adicionando}>
            <Text>Adicionar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Adicionar} onPress={removendo}>
            <Text>Remover</Text>
          </TouchableOpacity>
        </View>
      </View>
  


      {/*=====Banco=====*/}
      <View style={styles.container}>
        <Text style={{marginTop: 60, fontSize: 40 }}>Banco</Text>
        <Text>Complete seus dados:</Text>
        <TextInput style={styles.input} onChangeText={(texto) => setNomeDigitado(texto)} placeholder='Nome' />

        <TextInput style={styles.input} onChangeText={(texto) => setIdadeDigitado(texto)} placeholder='Idade' keyboardType='numeric'/>

        <Picker selectedValue={Sexo} 
        onValueChange={ (itemValue, itemIndex) => setSexoDigitado(itemValue)}
        style={{width: 160, height: 'auto'}} >
          <Picker.Item key={0} value={'Feminino'} label='Feminino'/>
          <Picker.Item key={1} value={'Masculino'} label='Masculino'/>
        </Picker>

        <Slider
          minimumValue={0}
          maximumValue={2000}
          value={Limite}
          
          onValueChange={ (valorSelecionado) => setLimiteDigitado(valorSelecionado) } />
          <Text style={{marginBottom: 60, }} >{Limite.toFixed(0)}</Text>

        <Switch
          value={Estudante}
          onValueChange={ (valorSelecionado) => setEstudanteDigitado(valorSelecionado)} />

        <Button title='Concluir' onPress={Dados}></Button>
      </View>
      


      {/*=====Conversor de Moedas=====*/}
      <View style={[styles.container, {backgroundColor:'#292929ff'}]}>
        <View style={styles.areaMoeda}>
          <Text style={styles.titulo}>Selecione sua moeda:</Text>
          <PickerItem
            moedas={moedas}
            moedaSelecionada={moedaSelecionada}
            onChange={ (moeda) => setMoedaSelecionada(moeda) } />
        </View>

        <View style={styles.areaValor}>
          <Text style={styles.titulo}>Digite o valor para converter em R$</Text>
          <TextInput placeholder='EX: 1.50' style={styles.inputMoedas} keyboardType='numeric' value={moedaBValor} onChangeText={(valor)=>setMoedaBValor(valor)} />
        </View>
        <TouchableOpacity style={styles.botaoarea} onPress={converter}>
          <Text style={styles.botaotext}>Converter</Text> 
        </TouchableOpacity>

        {valorConvertido !== 0 && (
          <View style={styles.arearesultado}>
            <Text style={styles.valorconvertido}>{valorMoeda} {moedaSelecionada} </Text>
            <Text style={{fontSize: 18, margin:8, fontWeight: '500', color: '#000'}}>corresponde a </Text>
            <Text style={styles.valorconvertido}> {valorConvertido} </Text>
          </View>
        )}
        
      </View>



      {/*=====Buscador de Cep=====*/}
      <SafeAreaView style={styles.container}>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.Text}>Digite o Cep desejado</Text>
          <TextInput
            style={styles.Tinput}
            placeholder='EX: 79803241'
            value={cep}
            onChangeText={(texto)=>setCep(texto)}
            keyboardType='numeric'
            ref={inputRef}
          />
        </View>

        <View style={styles.areaBtn}>
          <TouchableOpacity style={[styles.botao, {backgroundColor: '#1d75cd'}]}
          onPress={buscar}>
            <Text style={styles.botaoT}>Buscar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.botao, {backgroundColor: '#cd3e1d'}]} 
          onPress={limpar}>
            <Text style={styles.botaoT}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {cepUser &&
          <View style={styles.resultado}>
            <Text style={styles.itemText}>CEP: {cepUser.cep}</Text>
            <Text style={styles.itemText}>Logradouro: {cepUser.logradouro}</Text>
            <Text style={styles.itemText}>Bairro: {cepUser.bairro}</Text>
            <Text style={styles.itemText}>Cidade: {cepUser.localidade}</Text>
            <Text style={styles.itemText}>Estado: {cepUser.uf}</Text>
          </View>
        }
      </SafeAreaView>



      {/*=====PostoCombustivel=====*/}
      <View style={[styles.container, {backgroundColor:'#292929ff'}]}>
        <Image source={require("./src/PostoCombustivel/img/logo.png")} style={{ width: 180, height: 180 }} />
        <Text style={[styles.TextoC, {fontSize: 27,}]}>Qual melhor opção ?</Text>

        <Text style={styles.TextoC}>Álcool (preço por litro):</Text>
        <TextInput placeholder='EX: 4,60' keyboardType='numeric' style={styles.inputC} value={valorA} onChangeText={setValorA} />

        <Text style={styles.TextoC}>Gásolina (preço por litro):</Text>
        <TextInput placeholder='EX: 7,60' keyboardType='numeric' style={styles.inputC} value={valorG} onChangeText={setValorG}/>

        <TouchableOpacity style={styles.botaoC} onPress={()=>{calcular()}}>
          <Text style={styles.botaoCT} >Calcular</Text>
        </TouchableOpacity>

      </View>
        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.viewModal}>
           <Image source={require("./src/PostoCombustivel/img/gas.png")} style={{ width: 170, height: 170 }} />            
           <Text style={[styles.TextoC, {fontSize: 30, color: '#06bd00ff'}]} >Compensa usar {usar} </Text>
           <Text style={[styles.TextoC, {fontSize: 22,}]}>Com os preços:</Text>
           <Text style={{fontSize: 18, color:'#fff', paddingBottom: 10,}}>Alcool: R${valorA ? valorA : '0'} </Text>
           <Text style={{fontSize: 18, color:'#fff', paddingBottom: 50,}}>Gásolina: R${valorG ? valorG : '0'}</Text>

           <TouchableOpacity
            onPress={() => {setModalVisible(false); setValorA(''); setValorG('');}}
            style={{borderColor: 'red', borderWidth: 1, borderRadius: 5, padding: 10}}
            >
             <Text style={{color: 'red', fontWeight: 'bold', fontSize: 16}}>Calcular novamente</Text>
           </TouchableOpacity>
          </View>
        </Modal>


    </ScrollView>
    </View>
  );
};




const styles = StyleSheet.create({

  container:{
    flex: 1,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 30
  },

 //Restaurante:
  contador:{
    color:'white',
    backgroundColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  Adicionar:{
    backgroundColor:'blue',
    flexDirection: 'row',
    marginHorizontal: 5,
    borderRadius: 8,
    padding: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    margin: 5,
    padding: 10,
    width: 130,
    borderColor: 'gray',
  },
  conteiner:{
    backgroundColor: '#fff'
  },

  //Conversor:
  areaMoeda:{
   backgroundColor: '#d6d6d6ff',
   width: '90%',
   borderTopLeftRadius: 8,
   borderTopRightRadius: 8,
   padding: 8,
   marginBottom: 1,
  },
  titulo:{
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    paddingLeft: 5,
    paddingTop: 5,
  },
  areaValor:{
    width: '90%',
    backgroundColor: '#f9f9f9',
    paddingTop: 8,
    paddingBottom: 8,
  },
  inputMoedas:{
    width: '100%',
    padding: 8,
    fontSize: 18,
    color: '#000',
    paddingTop: 10,
  },
  botaoarea:{
    width: '90%',
    backgroundColor: '#fb4b57',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  botaotext:{
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  arearesultado:{
    width: '90%',
    backgroundColor: '#fff',
    marginTop: 34,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    
  },
  valorconvertido:{
    fontSize: 28,
    color: '#000',
    fontWeight: 'bold'
  },

  //Buscador:
  Text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  Tinput:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    width: '90%',
    padding: 10,
    fontSize: 18,
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
  botao:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  botaoT:{
    fontSize: 22,
    color:'#fff'
  },
  resultado:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  itemText:{
    fontSize: 22,
  },

  //PostoCombustivel:
  TextoC:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 20,
    paddingBottom:8,
  },
  inputC:{
    backgroundColor: '#fff',
    borderRadius: 5,
    width: '22%',
    padding: 5,
    fontSize: 17,
  },
  botaoC:{
    width: '50%',
    backgroundColor: '#9e0000ff',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20,
    marginBottom: 40,
  },
  botaoCT:{
    fontSize: 17,
    fontWeight: 'bold',
    color: '#fff',
  },
  viewModal: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929ff",
  },


});