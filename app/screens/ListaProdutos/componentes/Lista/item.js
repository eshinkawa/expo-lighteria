import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import {
  FONT_SIZE_14,
  FONT_FAMILY_SEMI_BOLD,
} from "../../../../styles/tipografia";

export const Item = ({ titulo, imagem }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetalhesProduto")}
      style={styles.containerItem}
    >
      <Image
        source={{ uri: imagem, height: 84, width: 84 }}
        resizeMode="contain"
      />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    height: 168,
    backgroundColor: "white",
    elevation: 1,
    flex: 0.5,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    margin: 8,
  },
  texto: {
    marginTop: 8,
    fontFamily: FONT_FAMILY_SEMI_BOLD,
    fontSize: FONT_SIZE_14,
    color: "#848486",
  },
});
