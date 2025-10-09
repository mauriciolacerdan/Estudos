import React, { useState, useContext } from "react";
import { Platform, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../Context/auth";

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  Linktext,
} from "./styles";

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn, loadingAuth } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
        <Logo source={require("../../img/Logo.png")} />

        <AreaInput>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(Text) => setEmail(Text)}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={(Text) => setPassword(Text)}
          />
        </AreaInput>

        <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={20} color="#fff" />
          ) : (
            <SubmitText>Acessar</SubmitText>
          )}
        </SubmitButton>

        <Link onPress={() => navigation.navigate("SignUp")}>
          <Linktext>Criar uma conta</Linktext>
        </Link>
      </Container>
    </Background>
  );
}
