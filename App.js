import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Keyboard} from 'react-native';
import firebase from './src/firebaseConnection';
import TaskList from './src/TaskList';
import Icon  from 'react-native-vector-icons/Feather';

console.disableYellowBox=true;

export default function App() {
 const inputRef = useRef(null);
 const [newTask, setNewTask] = useState(''); 
 const [tasks, setTasks] = useState([]);
 const [key, setkey] = useState('');

 useEffect(()=> {

  async function loadTasks(){
    await firebase.database().ref('tarefas').on('value', (snapshot)=>{
      setTasks([]);

      snapshot.forEach((childItem)=>{
        let data = {
          key: childItem.key,
          nome: childItem.val().nome
        };

        setTasks(oldArray => [...oldArray, data]);
      })


    });
  }

  loadTasks();

 }, []);


 async function handleAdd(){
   if(newTask !== ''){

    if(key !== ''){
      await firebase.database().ref('tarefas').child(key).update({
        nome: newTask,
      });
      //Dispensar.teclado
      Keyboard.dismiss();
      setNewTask('');
      setkey('');
      return;
    }

    let tarefas = await firebase.database().ref('tarefas');
    let chave = tarefas.push().key;

    tarefas.child(chave).set({
      nome: newTask
    });

    Keyboard.dismiss();
    setNewTask('');

   }
 }

 async function handleDelete(key){
   await firebase.database().ref('tarefas').child(key).remove();
 }

 function handleEdit(data){
   setNewTask(data.nome);
   setkey(data.key);
   inputRef.current.focus();
  
 }

 function canselEdit(){
    setkey('')
    setNewTask('')
    Keyboard.dismiss()
 }

 return (
   <View style={styles.container}>
     {key.length > 0 && (
         <View style={{flexDirection: "row"}}>
         <TouchableOpacity onPress={canselEdit}>
           <Icon name="x-circle" size={20} color="#FF0000"/>
         </TouchableOpacity>
         <Text
         style={{marginLeft: 5, marginBottom: 8, color:"#FF0000"}}
         >Você está editando uma tarefa!</Text>
     </View>
     )}

    <View style={styles.containerTask}>
      <TextInput
      style={styles.input}
      placeholder="O que vai fazer hoje?"
      underlineColorAndroid="transparent"
      onChangeText={(texto) => setNewTask(texto) }
      value={newTask}
      ref={inputRef}
      />
      <TouchableOpacity style={styles.buttonAdd} onPress={handleAdd}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>

    <FlatList
    data={tasks}
    keyExtractor={item => item.key}
    renderItem={ ({ item }) => (
      <TaskList data={item} deleteItem={handleDelete} editItem={handleEdit} />
    ) }
    />

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
  },
  containerTask:{
    flexDirection: 'row'
  },
  input:{
    flex:1,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#121212',
    height: 40,
    fontSize: 17
  },
  buttonAdd:{
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: '#121212',
    paddingLeft: 14,
    paddingRight:14,
    marginLeft: 5,
  },
  buttonText:{
    fontSize: 23,
    color: '#FFF'
  }

});