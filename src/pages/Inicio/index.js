import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'


const index = ({ navigation }) => {

    const onLogin = () => {
        navigation.navigate('Login');
    }

    const onCadastrar = () => {
        navigation.navigate('Cadastro');
    }

    return (
        <View style={style.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity onPress={() => onLogin()} >
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onCadastrar()} >
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>
        </View>
    )
}

export default index

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 25,
            paddingRight: 25,
            backgroundColor: '#fff',
            flexDirection: 'row', 
        }
    }
)


