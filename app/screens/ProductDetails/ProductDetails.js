import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

function ProductDetails({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Product Details</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});
