import React from 'react'
import { Alert, StyleSheet, View, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { AppLoading } from 'expo'
import { useFonts, GrandHotel_400Regular } from '@expo-google-fonts/dev'

const Stack = createStackNavigator()

import Feed from './src/pages/Feeds/index'
import Comentarios from './src/pages/comentarios'
import Login from './src/pages/Login'

export default function App() {

  const logout = () => {
    Alert.alert(
      "Deseja sair?",
      "Ohhh! Não vai embora não :(",
      [{
        text: 'Não vou não :)!',
        onPres: () => { },
        style: 'cancel'
      }, {
        text: 'Tenho que ir bb...',
        onPress: () => {this.props.navigation.navigate('Login')},
      }]
    )
  }

  let [fontsLoaded] = useFonts({
    GrandHotel_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen
            name="Feed"
            component={Feed}
            options={{
              title: 'Instagram',
              headerTitleStyle: {
                fontFamily: 'GrandHotel_400Regular',
                fontSize: 35
              },
              headerRight: () => (
                <TouchableOpacity style={{ marginRight: 20 }} onPress={logout}>
                  <AntDesign name="logout"
                    size={25}
                    color="black"
                  />
                </TouchableOpacity>
              )
            }} />
          <Stack.Screen name="Comentarios" component={Comentarios} />
          <Stack.Screen name="Login" component={Login} />
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