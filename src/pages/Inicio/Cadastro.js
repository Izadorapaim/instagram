import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Feed from '../Feed';
import { StylesProvider } from '@material-ui/core';

class Cadastro extends Component {
    state = {
        name: '',
        email: '',
        senha: ''
    }

    render () {
        return (
            <View style={style.container}>
                <TextInput placeholder='Nome' style={style.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText = {name => this.setState({ name})} />

                <TextInput placeholder='Email' style={style.input}
                    keyboardType='email' value={this.state.email}
                    onChangeText={email => this.setState({ email})} />

                <TextInput placeholder='Senha' style={style.input}
                    secureTextEntry={true} value={this.state.senha}
                    onChangeText={senha => this.setState({ senha})} />

                <TouchableOpacity style={style.buttom} onPress={() => {
                    this.props.navigation.navigate('Feed') }} >
                     <Text style={style.buttomText}>Cadastrar</Text>
                 </TouchableOpacity>
            </View>
        )
    }
}

export default Cadastro

const style = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            paddingLeft: 25,
            paddingRight: 25,
            backgroundColor: '#fff'
        },
        buttom: {
            marginTop: 30,
            paddingRight: 10,
            backgroundColor: "black"
        },
        buttomText: {
            fontSize: 20,
            color: "white"   
        },
        input: {
            marginTop: 20,
            width: '90%',
            backgroundColor: 'black',
            height: 40,
            borderWidth: 1,
            borderColor: "gray",
            paddingLeft: 15
        }


    }
)

