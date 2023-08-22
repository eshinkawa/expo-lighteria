import { View } from "react-native";

import { Cabecalho, Lista } from "./componentes";
import { Botao } from "../../componentes";

export default function ListaProdutos() {
  return (
    <View contentContainerStyle={{ paddingBottom: 36 }}>
      <Cabecalho />
      <Lista />
      <Botao titulo="AR View" />
    </View>
  );
}
