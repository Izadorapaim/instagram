import React, { Component } from 'react'
import {Provider} from 'react-redux'
import Navigator from './src/pages/Navigator'
import { View} from 'react-native'

import storeConfig from './src/store/storeConfig'

const store = storeConfig
const Redux = () => (
  <Provider store={store}>
    <Navigator/>
  </Provider>
)
export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
       <Navigator/>
      </View >

    );
  }
}


