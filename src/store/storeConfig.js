import { createStore, combineReduceres } from 'redux'
import userReducer from './reducers/user'

const reduceres = combineReduceres ({
    user: userReducer,
})

const storeConfig = () => {
    return createStore(reduceres)
}

export default storeConfig