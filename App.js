import React, { useState } from 'react';
import { StyleSheet, Text , View, TextInput, TouchableOpacity} from "react-native";

export default  function App() {
  const [count, setCount] = useState(0);
  const [tarefaAtual, setTarefaAtual] = useState('');
  const [listaTarefas, setListaTarefas] = useState([]);
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas </Text>
      <View style={{flexDirection: 'row', gap: 10}}>
        <View style={styles.vermelho}></View>
        <View style={styles.verde}></View>
        <View style={styles.azul}></View>
      </View>

      <Text>Nova Tarefa</Text>
      <Text>{count}</Text>

      <View style={{flexDirection: 'row', gap: 10}}>
      <TextInput style={styles.input} placeholder="Digite a anotação..." value={tarefaAtual} onChangeText={setTarefaAtual}/>

      <TouchableOpacity onPress={() => {
        setListaTarefas([...listaTarefas, tarefaAtual])
        setTarefaAtual('');
      }}>
        <Text style={styles.botao}>Adicionar</Text>
        
        </TouchableOpacity>
      <TouchableOpacity onPress={() => {
        setCount(count + 1);
      }}>
        <Text style={styles.botao}> + </Text>
        
        </TouchableOpacity>
   </View>
      {/* Lógica JS para mapear o Array listaTarefas */}
      {listaTarefas.map((tarefa, index) => (
        <View key={index}>
          <Text>{tarefa}</Text>
        </View>
      ))}

    </View>
  )
}

const styles = StyleSheet.create ({
container: {
  height:90,
flexDirection: 'column',
justifyContent: 'space-between',
alignItems: 'center',
gap:10
},
vermelho:{
  height:60,
  width:60,
  backgroundColor:'red'
},
verde:{
  height:60,
  width:60,
  backgroundColor:'green'
},
azul:{
  height:60,
  width:60,
  backgroundColor:'blue'
},
input: {
  fontWeight: 'bold',
  border: '1px solid black',
  flexDirection: 'row'
},
botao: {
  color: 'blue',
  fontWeight: 'bold',

}
})