import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
 return (
<View styles={styles.container}>

  <View style={styles.containerTask}>
    <TextInput
    style={styles.input}
    placeholder='O que vai fazer hoje?'
    underlineColorAndroid="transparet"
    onChangeText={ () => {}}
    />
    <TouchableOpacity style={styles.buttonAdd}>
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  </View>
</View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
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
    height: 40
  },
  
  buttonAdd: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40
  },
  buttonText: {

  }
})