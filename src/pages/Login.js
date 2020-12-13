import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    
    login = () => {
        this.props.navigation.navigate('Feed')
    }
    registro = () => {
        this.props.navigation.navigate('Cadastrar novo Usuário')
    }
    coments = () => {
        this.props.navigation.navigate('Loja')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder='Email' style={styles.input} keyboardType={'email-address'} value={this.state.email}
                    onChangeText={email => this.setState({ email })} />
                <TextInput placeholder='Senha' style={styles.input} secureTextEntry={true} value={this.state.password}
                    onChangeText={password => this.setState({ password })} />
                <TouchableOpacity onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.registro} style={styles.buttom}>
                    <Text style={styles.buttomText}>Criar conta</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.coments} style={styles.buttom}>
                    <Text style={styles.buttomText}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom:{
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText:{
        fontSize: 20,
        color: '#FFF'
    },
    input:{
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        padding: 10
    }
})

export default Login