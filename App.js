import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import DetalhesProduto from "./app/screens/DetalhesProduto";
import ListaDesejos from "./app/screens/ListaDesejos";
import ListaProdutos from "./app/screens/ListaProdutos";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProductList">
        <Stack.Screen
          name="ListaProdutos"
          component={ListaProdutos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DetalhesProduto"
          component={DetalhesProduto}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ListaDesejos"
          component={ListaDesejos}
          options={{ headerShown: true, headerTitle: "Lista de desejos" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
