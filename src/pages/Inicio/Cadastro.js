import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'

import Feed from '../Feed';

class Cadastro extends Component {
    state = {
        name: '',
        email: '',
        senha: ''
    }

    render () {
        return (
            <View style={style.container}>
                <Text style={style.text}> Instagram </Text> 
                <TextInput 
                    placeholder='Nome' style={style.input}
                    autoFocus={true} value={this.state.name}
                    onChangeText = {name => this.setState({ name})} />

                <TextInput 
                    placeholder='Email' style={style.input}
                    keyboardType='email' value={this.state.email}
                    onChangeText={email => this.setState({ email})} />

                <TextInput 
                    placeholder='Senha' style={style.input}
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
            marginTop: 15,
            paddingRight: 10,
            borderColor: "black"
        },
        text: {
            marginBottom: 50,
            fontSize: 20,
            color: "black"
        },
        buttomText: {
            fontSize: 20,
            color: "black"   
        },
        input: {
            marginTop: 20,
            width: '90%',
            borderColor: 'black',
            height: 40,
            borderWidth: 1,
            paddingLeft: 15
        }


    }
)


