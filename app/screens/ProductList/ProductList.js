import { StyleSheet, SafeAreaView, Pressable, Text } from 'react-native';
import React from 'react';
import Header from './components/Header';

function ProductList({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Pressable onPress={() => navigation.navigate('ProductDetails')}>
        <Text>Lista de items</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default ProductList;
