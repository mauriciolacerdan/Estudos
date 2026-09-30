import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from 'react-native';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState(false); //false = tela de login

  async function handleLogin() {
    //Cadastrar Usuario
    if (type) {
      if (name === '' || email === '' || password === '') return;
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        await updateProfile(userCredential.user, {
          displayName: name,
        });
        navigation.goBack();
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          console.log('Email já em uso!');
        }
        if (error.code === 'auth/invalid-email') {
          console.log('Email inválido!');
        }
        console.log('ERRO:', error);
      }
    } else {
      // Logar usuário
      if (email === '' || password === '') return;
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
        navigation.goBack();
      } catch (error: any) {
        if (error.code === 'auth/invalid-email') {
          console.log('Email inválido!');
        } else if (error.code === 'auth/invalid-credential') {
          console.log('Email ou senha incorretos!');
        } else {
          console.log('ERRO:', error);
        }
      }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>HeyGrupos</Text>
      <Text style={{ marginBottom: 20 }}>Ajude, colabore, faça networking</Text>

      {type && (
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Qual seu nome?"
          placeholderTextColor="#99999b"
        />
      )}
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Seu email"
        placeholderTextColor="#99999b"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Sua senha"
        placeholderTextColor="#99999b"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={[
          styles.buttonLogin,
          { backgroundColor: type ? '#f53745' : '#57DD86' },
        ]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>{type ? 'Cadastrar' : 'Acessar'}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setType(!type)}>
        <Text>{type ? 'Já possuo uma conta' : 'Criar uma nova conta'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    marginTop: Platform.OS === 'android' ? 55 : 80,
    fontSize: 28,
    fontWeight: 'bold',
  },
  input: {
    color: '#121212',
    backgroundColor: '#EBEBEB',
    width: '90%',
    borderRadius: 6,
    marginBottom: 10,
    paddingHorizontal: 8,
    height: 50,
  },
  buttonLogin: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 19,
  },
});
