import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { Cabecalho, Lista } from "./componentes";
import { Botao } from "../../componentes";

export default function ListaProdutos() {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate("ListaDesejos");
  };
  return (
    <View contentContainerStyle={{ paddingBottom: 36 }}>
      <Cabecalho />
      <Lista />
      <Botao
        titulo="Ir para lista de desejos"
        onPressButton={handleNavigation}
      />
    </View>
  );
}
