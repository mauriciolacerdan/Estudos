import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Container, Title, ButtonMenu } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <ButtonMenu onPress={() => navigation.openDrawer()}>
        <FontAwesome5 name="bars" size={35} color="#121212" />
      </ButtonMenu>

      {title && <Title>{title}</Title>}
    </Container>
  );
}
