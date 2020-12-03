import React, { Component } from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import icon from '../../assets/imgs/icon.png'

class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.linhaContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.titulo}>Instagram</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 20,
        padding: 10,
        //borderBottomWidth: 1,
        //borderColor: "#BBB",
        alignContent: 'flex-start'
    },
    linhaContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    titulo: {
        color: '#000',
        //fontFamily: 'shelter',
        height: 40,
        fontSize: 28
    }
})
export default Header