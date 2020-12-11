import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feeds/index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Cadastro from './src/pages/Inicio/Cadastro';
import Login from './src/pages/Inicio/Login';


const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Cadastro" component={Cadastro} />
          <Stack.Screen name="Feed" component={Feed} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

 
  const style = StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#fff'
      }
    }
  )