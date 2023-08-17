import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Item } from "./item";
import { styles } from "./styles";

export const Lista = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    fetch("https://run.mocky.io/v3/8810362d-ffa4-4635-9180-dfefa47242f4")
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
          <Item
            titulo={item.titulo}
            imagem={item.imagem}
            descricao={item.itemDesc}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
