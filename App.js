import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feeds/index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native'; 

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Feed">
          <Stack.Screen name="Feed" component={Feed}
            options={{
              headerTitleStyle: { fontFamily: 'Montserrat_700Bold' },
              headerRight: () => (
                <TouchableOpacity style= {{marginRight:10}}>
                  <AntDesign name="logout"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
              )
            }}/>
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