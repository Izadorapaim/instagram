import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity as Twf } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


class Like extends Component {
    constructor() {
        super();
        this.state = {
            iconName: "heart-outline",
            color: "#555",
            like: false,

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

    render() {
        return (
            <Twf onPress={() => this.onLike()} onLongPress={() => this.onDislike()}>
                <MaterialCommunityIcons name={this.state.iconName} size={40} color={this.state.color} />
            </Twf>
        )
    }
}
export default Like