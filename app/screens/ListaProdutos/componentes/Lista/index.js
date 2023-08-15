import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Item } from "./item";
import { styles } from "./styles";

export const Lista = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    await getList();
  }, []);

  const getList = async () => {
    // TODO GETLIST
  };

  return (
    <View style={styles.container}>
      <View style={styles.separador} />
      <View style={styles.containerTexto}>
        <Text style={styles.texto}>Categories</Text>
      </View>
      <FlatList
        numColumns={2}
        data={[]}
        renderItem={({ item }) => (
          <Item descricao={item.titulo} imagem={item.imagem} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
