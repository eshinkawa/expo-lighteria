import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";

import ItemDesejo from "./listaItem";

export default function ListaDesejos() {
  // puxar os dados do AsyncStorage
  // mostrar os dados na tela em forma de lista (FlatList)
  // criar um componente separado para renderizar os itens da lista (itemLista.js)

  const [listaDesejos, setListaDesejos] = useState([]);

  useEffect(() => {
    const pegarDadosAsyncStorage = async () => {
      const listaProdutos = await AsyncStorage.getItem("lista_produtos");
      const listaJson = listaProdutos !== null ? JSON.parse(listaProdutos) : [];

      setListaDesejos(listaJson);
    };

    pegarDadosAsyncStorage();
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={listaDesejos}
        renderItem={({ item }) => <ItemDesejo {...item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
