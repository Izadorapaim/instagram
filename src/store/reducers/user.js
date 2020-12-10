import { State } from 'react-native-gesture-handler'
import {USER_LOGGED_IN, USER_LOGGED_OUT} from '../actions/actionTypes'

const initialState = {
    name: null,
    email: null
}

const reducer = (State = initialState, action) => {
    switch (action.type) {
        case USER_LOGGED_IN:
            return {
                ...State,
                name: action.payload.name,
                email: action.payload.email
            }
        case USER_LOGGED_OUT:
            return{
                ...State,
                name: null,
                email: null
            }
        default:
            return State
    }
}
export default reducer