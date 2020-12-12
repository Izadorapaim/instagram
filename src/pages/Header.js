import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity as Tp, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

class Header extends Component {

    logout() {
        Alert.alert(
            "Deseja sair?",
            "Ohhh! Não vai embora não :(",
            [{
                text: 'Não vou não :)!',
            }, {
                text: 'Tenho que ir bb...',
                onPress: ()=> this.login
            }]
        )
    }

    login(){
        this.props.navigation.navigate('Login')
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.linhaContainer}>
                    <View>
                        <Text style={styles.titulo}>Instagram</Text>
                    </View>
                    <View>
                        <Tp style={{ marginRight: 20 }} onPress={this.logout}>
                            <AntDesign name="logout" size={25} color="black" />
                        </Tp>
                    </View>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: "#BBB",
        alignContent: 'flex-start'
    },
    linhaContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titulo: {
        color: '#000',
        fontFamily: 'GrandHotel_400Regular',
        fontSize: 35,
        marginBottom: 2
    }
})
export default Header