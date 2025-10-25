import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import {
  Container,
  Title,
  Input,
  Button,
  ButtonText,
  SignUpButton,
  SignUpText,
} from './styles';

export default function Login() {
  const [login, setLogin] = useState(true);

  function toggleLogin() {
    setLogin(!login);
  }

  if (login) {
    return (
      <Container>
        <Title>
          Dev<Text style={styles.post}>Post</Text>
        </Title>

        <Input placeholder="seuemail@teste.com" />
        <Input placeholder="******" />

        <Button>
          <ButtonText>Acessar</ButtonText>
        </Button>

        <SignUpButton onPress={toggleLogin}>
          <SignUpText>Criar uma conta</SignUpText>
        </SignUpButton>
      </Container>
    );
  }

  return (
    <Container>
      <Title>
        Dev<Text style={styles.post}>Post</Text>
      </Title>

      <Input placeholder="Seu nome" />
      <Input placeholder="seuemail@teste.com" />
      <Input placeholder="******" />

      <Button>
        <ButtonText>Criar uma conta</ButtonText>
      </Button>

      <SignUpButton onPress={toggleLogin}>
        <SignUpText>Ja possuo uma conta</SignUpText>
      </SignUpButton>
    </Container>
  );
}

const styles = StyleSheet.create({
  post: {
    color: '#E52246',
  },
});
