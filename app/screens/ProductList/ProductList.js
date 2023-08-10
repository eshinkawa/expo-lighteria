import React from 'react';
import { StyleSheet, SafeAreaView, Pressable, Text } from 'react-native';
import Header from './components/Header';
import { BG_COLOR } from '../../utils/contants';

function ProductList({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Pressable onPress={() => navigation.navigate('ProductDetails')}>
        <Text style={styles.header}>Lista de items</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: BG_COLOR,
  },
  header: {
    color: 'pink',
  },
});

export default ProductList;
