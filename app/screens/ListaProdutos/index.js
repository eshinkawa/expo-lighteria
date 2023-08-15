import { ScrollView } from "react-native";

import { Cabecalho, Lista } from "./componentes";
import { Botao } from "../../componentes";

export default function ListaProdutos() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
      <Cabecalho />
      <Lista />
      <Botao titulo="AR View" />
    </ScrollView>
  );
}
