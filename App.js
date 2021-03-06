import 'react-native-gesture-handler'
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AppLoading } from 'expo'
import { useFonts, GrandHotel_400Regular, Montserrat_500Medium, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/dev'

import Loja from './src/pages/Feeds/Loja'

const Stack = createStackNavigator()

import Feed from './src/pages/Feeds/index'
import Comentarios from './src/pages/comentarios'
import Login from './src/pages/Login'
import Registro from './src/pages/Register'

export default function App() {
  let [fontsLoaded] = useFonts({
    GrandHotel_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
             headerShown: false,
            }} />
          <Stack.Screen name="Comentarios" component={Comentarios}/>
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastrar novo Usuário" component={Registro}/>
          <Stack.Screen name="Loja" component={Loja}/>
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
