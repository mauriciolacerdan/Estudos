import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Image } from "react-native";

export default function List(props) {
  function carregaIcone(Likeada) {
    return Likeada ? require("../img/likeada.png") : require("../img/like.png");
  }

  function mostraLikes(likers) {
    if (likers === 0) {
      return;
    }

    return (
      <Text>
        {likers} {likers > 1 ? "curtidas" : "curtida"}
      </Text>
    );
  }

  return (
    <View>
      <View style={styles.viewPerfil1}>
        <Image
          source={{ url: props.data.imgperfil }}
          style={styles.fotoPerfil1}
        />
        <Text style={styles.nomeUsuario}>{props.data.nome}</Text>
      </View>

      <Image
        resizeMode="cover"
        source={{ url: props.data.imgpublicacao }}
        style={styles.fotoPublicacao}
      />

      <View style={styles.areaBtn}>
        <TouchableOpacity>
          <Image
            source={carregaIcone(props.data.likeada)}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image
            source={require("../img/comment.png")}
            style={styles.iconeLike}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnsend}>
          <Image source={require("../img/send.png")} style={styles.iconeLike} />
        </TouchableOpacity>
      </View>

      {mostraLikes(props.data.likers)}

      <Text style={styles.nomeRodape}>{props.data.nome}</Text>

      <Text style={styles.descRodape}>{props.data.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPerfil1: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  fotoPerfil1: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nomeUsuario: {
    paddingLeft: 5,
    fontSize: 22,
    color: "#000",
  },
  fotoPublicacao: {
    height: 400,
    alignItems: "center",
  },
  areaBtn: {
    flexDirection: "row",
    padding: 5,
  },
  iconeLike: {
    width: 25,
    height: 25,
  },
  btnsend: {
    paddingLeft: 5,
  },
  likes: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
