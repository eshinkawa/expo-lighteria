import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { FONT_FAMILY_REGULAR, FONT_SIZE_16 } from "../styles/tipografia";

export function Botao({ width = 200, titulo, icone = true }) {
  return (
    <TouchableOpacity>
      <View style={{ alignItems: "center", marginTop: 16 }}>
        <View style={[styles.container, { width }]}>
          {icone && (
            <Image
              source={require(`../assets/images/icon-cube.png`)}
              style={{ width: 18, height: 18, marginRight: 8 }}
            />
          )}
          <Text style={styles.texto}>{titulo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 160,
    backgroundColor: "#B99DB7",
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: FONT_SIZE_16,
    color: "#fff",
  },
});
