import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Item } from "./item";
import { styles } from "./styles";

export const Lista = () => {
  const [items, setItems] = useState([]);
  const [itemCarrinho, setItemCarrinho] = useState([]);

  useEffect(async () => {
    await getList();
  }, []);

  const getList = async () => {
    fetch("https://run.mocky.io/v3/6e1a79f0-968f-40de-992f-3d218ab1f249")
      .then((response) => response.json())
      .then((json) => {
        setItems(json);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.separador} />
      <View style={styles.containerTexto}>
        <Text style={styles.texto}>Categories</Text>
      </View>
      <FlatList
        numColumns={2}
        data={items}
        renderItem={({ item }) => (
          <Item descricao={item.titulo} imagem={item.imagem} />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
