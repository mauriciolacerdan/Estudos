import React from "react";
import { View, Text, Platform } from "react-native";
import { useNavigation } from '@react-navigation/native'

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, Linktext } from "./styles";

export default function SignIn() {

  const navigation = useNavigation();

  return (
    <Background>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >

        <Logo source={require("../../img/Logo.png")} />

        <AreaInput>
          <Input placeholder="Email" />
        </AreaInput>

        <AreaInput>
          <Input placeholder="Senha" />
        </AreaInput>

        <SubmitButton activeOpacity={0.8}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        <Link onPress={()=>navigation.navigate('SignUp')}>
          <Linktext>Criar uma conta</Linktext>
        </Link>

      </Container>

    </Background>
  );
}
