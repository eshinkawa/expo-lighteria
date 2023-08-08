import { StyleSheet, SafeaAreaView, Pressable, Text } from 'react-native';
import React from 'react';

function ProductList({ navigation }) {
  return (
    <SafeaAreaView style={styles.container}>
      <Pressable onPress={() => navigation.navigate('DetalhesProduto')}>
        <Text>Lista de items</Text>
      </Pressable>
    </SafeaAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default ProductList;
