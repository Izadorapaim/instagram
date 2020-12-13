import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
class Login extends Component {
    state = {
        email: '',
        senha: ''
    }

    onLogin = async () => {
        console.log(this.state.email)
        console.log(this.state.senha)
        if (this.state.email === 'aristotelis@dev.com' && this.state.senha === '1234') {
            this.props.navigation.navigate('Feed')
        } else {
            console.log('Senha inválida');
        }
    };

    render() {
        return (
            <View style={style.container}>
                <Text style={style.text}> Instagram </Text>
                <TextInput
                    name="email"
                    placeholder='Email' style={style.input}
                    keyboardType= 'email-address' 
                    onChangeText={email => this.setState({email})} />         

                <TextInput
                    name="senha"
                    placeholder='Senha' style={style.input}
                    secureTextEntry={true} 
                    onChangeText={senha => this.setState({senha})} />

                <TouchableOpacity style={style.buttom} onPress={() => {
                    this.onLogin()
                }} >
                    <Text style={style.buttomText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttom} onPress={() => {
                    this.props.navigation.navigate('Cadastro')
                }} >
                    <Text style={style.buttomText}>Criar nova conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login

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
            height: 40,
            borderWidth: 1,
            borderColor: "black",
            paddingLeft: 15
        }


    }
)


