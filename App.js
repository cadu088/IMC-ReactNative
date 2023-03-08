import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './/pages/Home/index';
import Churrasco from './/pages/Churrasco/index';
import IMC from './/pages/IMC/index';


const Stack = createStackNavigator();

export default function App() {
  
  return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen  name="IMC" component={IMC} />
        <Stack.Screen  name="Churrasco" component={Churrasco} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    justifyContent: 'center',
  },
});