import { useState } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const produtos = [
  {
    id: '1',
    nome: 'Cadeira Confort Plus',
    preco: 'R$ 349,90',
    categoria: 'Móveis',
  },
  {
    id: '2',
    nome: 'Mesa para Escritório',
    preco: 'R$ 589,00',
    categoria: 'Móveis',
  },
  {
    id: '3',
    nome: 'Luminária LED',
    preco: 'R$ 79,90',
    categoria: 'Iluminação',
  },
];

function ProdutoItem({ produto, categoria }) {
  const [quantidade, setQuantidade] = useState(1);

  return (
    <View style={styles.item}>
      <Text style={styles.nome}>{produto.nome}</Text>

      <Text>{categoria}</Text>

      <Text style={styles.preco}>{produto.preco}</Text>

      <View style={styles.quantidade}>
        <Button
          title="-"
          onPress={() =>
            setQuantidade(Math.max(1, quantidade - 1))
          }
        />

        <Text style={styles.numero}>
          Quantidade: {quantidade}
        </Text>

        <Button
          title="+"
          onPress={() => setQuantidade(quantidade + 1)}
        />
      </View>
    </View>
  );
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={produtos}
        keyExtractor={(produto) => produto.id}
        renderItem={({ item }) => (
          <ProdutoItem
            produto={item}
            categoria={item.categoria}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },

  item: {
    marginBottom: 25,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  preco: {
    fontSize: 16,
    marginTop: 5,
  },

  quantidade: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },

  numero: {
    fontSize: 16,
  },
});