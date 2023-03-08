import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

import { useNavigation } from '@react-navigation/native'

export default function Home() {
 
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem vindo(a)</Text>
      <View style={styles.inputContainer}> 
         <Text style={styles.textResult}>Siga seu caminho... 🗺️</Text>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('IMC')} > 
          <Text style={styles.buttonText} >Calcular IMC</Text> 
        </TouchableOpacity> 
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Churrasco')}  > 
          <Text style={styles.buttonText}>Churrasco</Text> 
        </TouchableOpacity> 
      </View>      
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#282828',
    alignItems: 'center',
		color: '#fff'

  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
  },
  inputContainer: {
    
    marginTop: 30,
    width: '90%',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'stretch',
    backgroundColor: '#282828',
    height: '80%',
		color: '#fff'

  },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch',
		color: '#fff'

  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textResult: {
		color: '#fff',
    fontWeight: 'bold',
    textAlign : 'center'
  }
});