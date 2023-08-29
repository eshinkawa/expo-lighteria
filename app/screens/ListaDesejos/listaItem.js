import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { WHITE } from "../../styles/cores";
import {
  FONT_FAMILY_REGULAR,
  FONT_FAMILY_LIGHT,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
  FONT_FAMILY_SEMI_BOLD,
} from "../../styles/tipografia";

const ItemDesejo = (props) => {
  const { id, imagem, itemName, titulo, preco } = props;
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate("DetalhesProduto", { ...props })}
    >
      <View style={styles.containerItem}>
        <View style={styles.imagemContainer}>
          <Image source={{ uri: imagem }} style={styles.imagem} />
        </View>
        <View style={styles.descContaner}>
          <Text style={styles.descTextoSuperior}>{itemName}</Text>
          <Text style={styles.descTextoInferior}>{titulo}</Text>
        </View>

        <View style={styles.precoContainer}>
          <Text style={styles.precoTexto}>
            {preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: WHITE,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 4,
    marginBottom: 8,
  },
  imagemContainer: {
    flex: 20,
    backgroundColor: "#F7F8FC",
    padding: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  imagem: {
    width: 40,
    height: 50,
  },
  descContaner: {
    flex: 45,
    padding: 18,
    justifyContent: "center",
  },
  descTextoSuperior: {
    fontSize: FONT_SIZE_MEDIUM,
    fontFamily: FONT_FAMILY_REGULAR,
  },
  descTextoInferior: {
    fontSize: FONT_SIZE_SMALL,
    fontFamily: FONT_FAMILY_LIGHT,
  },
  precoContainer: {
    flex: 35,
    padding: 18,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  textoQuantidade: {
    textAlign: "center",
    padding: 4,
    fontSize: 10,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    color: WHITE,
  },
  precoTexto: {
    fontFamily: FONT_FAMILY_REGULAR,
  },
});

export default ItemDesejo;
