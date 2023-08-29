import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  TouchableOpacity,
  Image,
  Dimensions,
  View,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";

import { Sacola, Botao } from "../../componentes";

const DetalhesProduto = (props) => {
  const navigation = useNavigation();

  const { name, estudio, imagem, itemName, titulo, id, preco } =
    props.route.params;

  const getData = async () => {
    const value = await AsyncStorage.getItem("favorites-list");
    if (value !== null) {
      return value != null ? JSON.parse(value) : null;
    }
  };

  const addToFavorites = async () => {
    const listaString = await AsyncStorage.getItem("lista_produtos");

    const listaJson = listaString !== null ? JSON.parse(listaString) : [];

    const objeto = props.route.params;

    listaJson.push(objeto);
    const listStringfied = JSON.stringify(listaJson);
    await AsyncStorage.setItem("lista_produtos", listStringfied);
    alert("Produto salvo");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageBackground
          resizeMode="cover"
          source={require("../../assets/images/bgimage.png")}
          style={styles.imageBackground}
        >
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={{ uri: imagem, height: 60, width: 60 }}
                style={styles.backIcon}
              />
            </TouchableOpacity>
            <View style={styles.cartIconContainer}>
              <View style={styles.cartIconBackground}>
                <Sacola />
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.productInfo}>
          <View style={styles.productDetails}>
            <Text style={styles.brand}>{estudio}</Text>
            <Text style={styles.author}>{itemName}</Text>
          </View>
          <Image
            source={{ uri: imagem, height: 50, width: 50 }}
            style={styles.productImage}
          />
        </View>

        <View style={styles.priceContainer}>
          <Botao
            titulo="Adicionar aos favoritos"
            icone={false}
            onPress={addToFavorites}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 2,
  },
  imageBackground: {
    width: Dimensions.get("window").width,
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  cartIconContainer: {
    backgroundColor: "white",
    padding: 18,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 3,
    marginRight: -24,
    marginTop: -10,
  },
  cartIconBackground: {
    backgroundColor: "white",
    padding: 18,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    elevation: 3,
    marginRight: -24,
    marginTop: -10,
  },
  detailsContainer: {
    flex: 1,
    marginTop: -60,
    justifyContent: "center",
    alignItems: "center",
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 30,
    padding: 32,
    width: "88%",
    elevation: 4,
  },
  productDetails: {},
  brand: {},
  author: {},
  productName: {},
  productImage: {
    width: 24,
    height: 60,
  },
  productDescription: {},
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  price: {},
});

export default DetalhesProduto;
