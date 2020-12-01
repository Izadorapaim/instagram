import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native'
import Header from './src/components/Header'
import Post from './src/components/Post'
import { render } from 'react-dom';
import { ScrollView } from 'react-native-gesture-handler';
import Feed from './src/pages/Feed'


const Stack = createStackNavigator()

export default class App extends Component {
  render() {
    const comments = [{
      nickname: 'Joana Elena Silva',
      comment: 'Excelente Foto!'
    }, {
      nickname: 'Rafael Gustavo',
      comment: 'Muito ruim! Faço Melhor...'
    }]

    // <ScrollView>
    //<Header />
    //       <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
    //     </ScrollView>
    return (

      <View style={{ flex: 1 }}>
        <Feed></Feed>

      </View >

    );
  }
}

const style = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: '#fff'
    }
  }
)


