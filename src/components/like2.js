import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity as Twf } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function Post(props) {

    return (
            <MaterialCommunityIcons name={props.iconName} size={40} color={props.color} />
    );
}