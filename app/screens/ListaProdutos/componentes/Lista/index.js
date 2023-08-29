import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import { Item } from "./item";
import { styles } from "./styles";

export const Lista = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    await fetch("https://run.mocky.io/v3/8810362d-ffa4-4635-9180-dfefa47242f4")
      .then((response) => response.json())
      .then((res) => {
        setData(res);
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
        data={data}
        renderItem={({ item }) => <Item {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};
