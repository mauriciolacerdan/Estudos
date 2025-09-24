import React, {useContext, useState} from "react";
import { Platform } from "react-native";

import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from "../Signin/styles";

import { AuthContext } from "../../Context/auth";

export default function SignUp() {

  const {signUp} = useContext(AuthContext)
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSignUp(){
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "paddin" : ""} enabled>
        <AreaInput>
          <Input placeholder="Seu Nome" value={nome} onChangeText={(text)=>setNome(text)} />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Email" value={email} onChangeText={(text)=>setEmail(text)}  />
        </AreaInput>
        <AreaInput>
          <Input placeholder="Senha" value={password} onChangeText={(text)=>setPassword(text)} secureTextEntry={true}  />
        </AreaInput>

        <SubmitButton onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}
