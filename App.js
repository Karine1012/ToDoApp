import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [count, setCount] = useState(0);
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    setListaTarefas([...listaTarefas, tarefaAtual]);
  };

  const salvarDadosLocal = async () => {
    const listaString = JSON.stringify(listaTarefas);
    await AsyncStorage.setItem('listaTarefas', listaString);
  };

  const resgatarDadosLocal = async () => {
    const listaString = await AsyncStorage.getItem('listaTarefas');
    if (listaString) {
      setListaTarefas(JSON.parse(listaString));
    }
}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      
      <View style={styles.coresContainer}>
        <View style={styles.vermelho} />
        <View style={styles.verde} />
        <View style={styles.azul} />
      </View>

      <Text>Nova Tarefa</Text>
      <Text>{count}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite a anotação..."
          value={tarefaAtual}
          onChangeText={setTarefaAtual}
        />

        <TouchableOpacity onPress={() => {adicionarTarefa(), salvarDadosLocal()}} style={styles.botaoContainer}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {resgatarDadosLocal()}} style={styles.botaoContainer}>
          <Text style={styles.botao}>↻</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.lista}>
        {listaTarefas.map((tarefa, index) => (
          <View key={index} style={styles.itemLista}>
            <Text>{tarefa}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela inteira em vez de ficar preso em 90px
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  coresContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  vermelho: {
    height: 60,
    width: 60,
    backgroundColor: 'red',
  },
  verde: {
    height: 60,
    width: 60,
    backgroundColor: 'green',
  },
  azul: {
    height: 60,
    width: 60,
    backgroundColor: 'blue',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    width: '100%',
  },
  input: {
    flex: 1, // Faz o campo de texto ocupar o espaço disponível na linha
    fontWeight: 'bold',
    borderWidth: 1, // Substitui o 'border' do CSS web
    borderColor: 'black',
    padding: 8,
    borderRadius: 4,
  },
  botaoContainer: {
    padding: 8,
  },
  botao: {
    color: 'blue',
    fontWeight: 'bold',
  },
  lista: {
    width: '100%',
    marginTop: 10,
  },
  itemLista: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});