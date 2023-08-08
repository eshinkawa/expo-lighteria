import React from 'react';
import { StyleSheet, SafeAreaView, Text, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './app/screens/ProductList/Product';

const Stack = createStackNavigator();

function DetalhesProduto({ navigation }) {
  return (
    <Pressable onPress={() => navigation.navigate('DetalhesProduto')}>
      <Text>Lista de DetalhesProduto</Text>
    </Pressable>
  );
}

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="DetalhesProduto">
          <Stack.Screen
            name="ListaProdutos"
            component={ProductList}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetalhesProduto"
            component={DetalhesProduto}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default App;
