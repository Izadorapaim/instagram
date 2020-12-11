import React, { Component } from 'react'
import {StyleSheet, View, TouchableOpacity as Twf } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

class Post extends Component {
    constructor() {
        super();
        this.state = {
            iconName: "heart-outline",
            color: "#555",
            like: false
        };

    }
    onLike() {
        this.setState({
            like: !this.state.like
        })
        if (this.state.like)
            this.state.iconName = "heart-outline",
                this.state.color = "#555"
        else
            this.state.iconName = "heart",
                this.state.color = "red"
    }

    onDislike() {
        this.state.iconName = "heart-broken",
        this.state.color = "#8014cc"
        
        this.setState({
            like: !this.state.like
        })
        
    }


    onSave() {
        this.setState({
            save: !this.state.save
        })
        if (this.state.save)
            this.state.iconNameSave = "bookmark-o"
        else
            this.state.iconNameSave = "bookmark"
    }

    render() {
        return (
            <View style={styles.linhaInteracao}>
                <View style={styles.CurtComeComp}>
                    <Twf onPress={() => this.onLike()} onLongPress={() => this.onDislike()}>
                        <MaterialCommunityIcons name={this.state.iconName} size={40} color={this.state.color} />
                    </Twf>
                    <Twf>
                    <MaterialCommunityIcons name="comment-multiple-outline" size={35} color="#555" />
                    </Twf>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    linhaInteracao: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignContent: 'center',
        marginBottom: 10
    },
    CurtComeComp: {
        marginTop: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
export default Post