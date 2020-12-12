import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/pages/Feeds/index';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Loja from './src/pages/Feeds/Loja'

const Stack = createStackNavigator()

export default function App() {
  return (
    <View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loja">
          <Stack.Screen name="Feed" component={Loja}            
            options={{
              headerTitleStyle: { fontFamily: 'Montserrat_700Bold' },
              headerRight: () => (
                <TouchableOpacity onPress={() =>  this.props.navigation.navigate('Loja') } style= {{marginRight:15}}>
                  <AntDesign name="Loja"
                    size={30}
                    color="black"
                  />
                </TouchableOpacity>
              )
            }} />     
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
           {/* <Stack.Screen
            name='Feed'
            component={Feed}
            options={({ navigation }) => ({
              headerTitle: null,
              headerLeft: () => (
                <Image style={{ marginLeft: 10 }} source={logo} />
              ),
              headerRight: () => (
                <TouchableHighlight
                  style={{
                    marginRight: 10,
                    backgroundColor: '#038cfc',
                    padding: 10,
                    borderRadius: 3,
                  }}
                  onPress={() => handleLogout({ navigation })}
                >
                  <Text style={{ color: 'white', fontSize: 16 }}>Logout</Text>
                </TouchableHighlight>
              ),
            })}
          />  */} 

/*<View style={style.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Loja">
          <Stack.Screen name="Loja" component={Loja}
            options={{
              headerTitleStyle: { fontFamily: 'Montserrat_700Bold' },
              headerRight: () => (
               
                 
                  />
                </TouchableOpacity>
              )
            }}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}*/

 