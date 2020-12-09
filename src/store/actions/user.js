import { RectButton } from "react-native-gesture-handler"
import{ USER_LOGGED_IN, USER_LOGGED_OUT } FROM './actionTypes'

export const login = user =>{
    return {
        types: USER_LOGGED_IN,
               PAYLOAD: user 
    }
}

export const logout = {} => {
    return {
        type: USER_LOGGED_OUT
    }
}