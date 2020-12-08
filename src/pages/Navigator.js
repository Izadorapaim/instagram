import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feed from './Feed'
import AddFoto from './AddFoto'
import Usuario from './usuario'

const MenuRoutes = {
    Feed: {
        name: "Feed",
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='home' size={30} color={tintColor} />
        }
    },
    Add: {
        name: 'AddPhoto',
        screen: AddFoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='camera' size={30} color={tintColor} />
        }
    },
    Profile: {
        name: 'Profile',
        screen: Usuario,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) =>
                <Icon name='user' size={30} color={tintColor} />
        }
    },
}
const MenuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false,
    }
}

const MenuNavigator = createBottomTabNavigator(MenuRoutes, MenuConfig)
export default createAppContainer(MenuNavigator)