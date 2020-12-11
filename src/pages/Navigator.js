import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator} from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import { createSwitchNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './Feed'
import AddFoto from './AddFoto'
import Usuario from './usuario'
import Login from './Login'
import Register from './Register'
import Coments from './comentarios'

const authRouter = createStackNavigator({
    Login: { screen: Login, navigationOptions:{title: 'Login'}},
    Register:{screen: Register, navigationOptions: {title: 'Register'}}
},{
    initialRouteName: 'Login'
})

const loginOrProfileRouter = createSwitchNavigator({
    Usuario: Usuario,
    Auth: authRouter
},{
    initialRouteName: 'Usuario'
})

const MenuRoutes = {
    Feed: {
        name: "Feed",
        screen: feedOrComents,
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
        screen: loginOrProfileRouter,
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