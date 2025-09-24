import React, { createContext, useState } from "react";
import {useNavigation} from '@react-navigation/native';
import api from '../Http/Api'

export const AuthContext = createContext({});

function AuthProvider({ children }) {

  const [user, setUser] = useState({
    nome: "Matheus Teste",
  });

  const navigation = useNavigation();

  async function signUp(email, password, nome) {
    try{
      const response = await api.post('/users', {
        name: nome,
        password: password,
        email: email,
      })
      navigation.goBack();
    }catch(err){
      console.log("erro ao cadastrar", err)
    }
  }


  return(
  <AuthContext.Provider value={{user, signUp}}>{children}</AuthContext.Provider>
  ) 

}

export default AuthProvider;
