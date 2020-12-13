import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity as Twf } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Post(props) {

    return (
        <Twf onPress={props.onPress}>
            <MaterialCommunityIcons name="comment-multiple-outline" size={35} color="#555" />
        </Twf>

    );
}
