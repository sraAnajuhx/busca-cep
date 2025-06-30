import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useState } from "react";
export default function App() {
  const [campo, setCampo] = useState("");
  const [Logadouro, setLougadouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [Cidade, setCidade] = useState("");
  const [cep, setcep] = useState("");
  const [IBGE, setIBGE] = useState("");
  const [Regiao, setRegiao] = useState("");
  const [informacoes, setinformacoes] = useState(false);

  async function buscaCep(cep) {
    const cepLimpo = cep.replace(/\D/g, ""); // REGEX
    if (cepLimpo === "") {
      alert("Coloque o cep VAGABUNDO");
      return;
    }

    if (cepLimpo.length !== 8) {
      //!== (Diferente)
      alert("Cep Errado, Digite 8 números ANTA.");
      return;
    }
    try {
      const resposta = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );
    } catch (error) {}
  }

  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <View style={styles.cabecalho}>
          <Entypo name="location-pin" size={32} color="#037F8C" />
          <Text style={styles.titulo}>Busca CEP</Text>
        </View>
        <Text style={styles.subtitulo}>
          Digite o CEP para encontrar o Endereço
        </Text>

        <Text style={styles.label}>CEP</Text>
        <View style={styles.formulario}>
          <TextInput style={styles.campo} placeholder="00000-000" />
          <TouchableOpacity style={styles.botao}>
            <Entypo name="magnifying-glass" size={24} color={"#fff"} />
          </TouchableOpacity>
        </View>

        {informacoes && (
          <View style={styles.endereco}>
            <Text style={styles.titulocep}>Endereco Econtrado</Text>
            <View style={styles.informacoes}>
              <View>
                <Text style={styles.tituloInfo}>cep</Text>
                <Text style={styles.enderecoInfo}>cep</Text>
              </View>

              <View>
                <Text style={styles.tituloInfo}>Logadouro</Text>
                <Text style={styles.enderecoInfo}>Logadouro</Text>

                <View>
                  <Text style={styles.tituloInfo}>Bairro</Text>
                  <Text style={styles.enderecoInfo}>Bairro</Text>

                  <View>
                    <Text style={styles.tituloInfo}>Cidade</Text>
                    <Text style={styles.enderecoInfo}>Cidade</Text>
                  </View>

                  <View>
                    <Text style={styles.tituloInfo}>IBGE</Text>
                    <Text style={styles.enderecoInfo}>IBGE</Text>

                    <View>
                      <Text style={styles.tituloInfo}>Regiao</Text>
                      <Text style={styles.enderecoInfo}>Regiao</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  caixa: {
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 4,
    padding: 12,
  },

  cabecalho: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },

  titulo: {
    fontSize: 37,
    fontWeight: "bold",
    color: "#4cb7f0",
  },

  formulario: {
    flexDirection: "row",
    marginTop: 4,
  },

  campo: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#0000000",
    borderBottomLeftRadius: 1,
    borderBottomRightRadiusRadius: 1,
    padding: 9,
  },

  botao: {
    backgroundColor: "#025E73",
    paddingHorizontal: 12,
    justifyContent: "center",
    alignItems: "center",
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },

  label: {
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
    fontSize: 20,
  },

  endereco: {
    marginTop: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "d4d4d4",
    padding: 12,
  },
  tituloInfo: {
    color: "#689ed4",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 6,
  },

  enderecoInfo: {
    color: "Black",
    fontSize: 17,
    fontWeight: "bold",
  },
});
