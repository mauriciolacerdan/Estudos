import React from "react";
import { TouchableWithoutFeedback, Alert } from "react-native";
import { Container, TipoText, Tipo, IconView, ValorText } from "./styles";

import { Feather } from "@expo/vector-icons";

export default function HistoricoList({ data, deleteItem }) {
  function handleDeletItem() {
    Alert.alert(
      "Atenção",
      "Você tem certeza que deseja deletar esse registro?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Continuar",
          onPress: () => deleteItem(data.id),
        },
      ]
    );
  }

  return (
    <TouchableWithoutFeedback onLongPress={handleDeletItem}>
      <Container>
        <Tipo>
          <IconView tipo={data.type}>
            <Feather
              name={data.type === "despesa" ? "arrow-down" : "arrow-up"}
              size={20}
              color="#fff"
            />
            <TipoText>{data.type}</TipoText>
          </IconView>
        </Tipo>
        <ValorText>R$ {data.value}</ValorText>
      </Container>
    </TouchableWithoutFeedback>
  );
}
