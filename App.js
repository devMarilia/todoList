import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList} from 'react-native';
import firebae from './src/firebaseConnection'
import TaskList from './src/TaskList'

console.disableYellowBox=true;

export default function App() {
  const [newTask, steNewTask] = useState('')
  const[tasks, setTasks] = useState([
    {key: '1', nome: 'Caminhar'},
    {key: '2', nome: 'Praticar react-native com firebase'},
    {key: '3', nome: 'Tomar cerveja'}

  ])
 return (
<View style={styles.container}>

  <View style={styles.containerTask}>
    <TextInput
    style={styles.input}
    placeholder='O que vai fazer hoje?'
    underlineColorAndroid="transparet"
    onChangeText={ (texto) =>  steNewTask(texto)}
    value={newTask}
    />
    <TouchableOpacity style={styles.buttonAdd}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  </View>
  <FlatList
  data={tasks}
  kayExtractor={item => item.key}
  renderItem={ ({ item })  => (
    <TaskList data={item}/>
  ) }
  />


</View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10
  },

  containerTask: {
    flexDirection: 'row'
  },

  input: {
    flex: 1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40,
    fontSize: 17
  },
  
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#121212',
    paddingLeft: 14,
    paddingRight: 14,
    marginLeft: 5
  },

  buttonText: {
    fontSize: 25,
    color: "#fff"
  }
})