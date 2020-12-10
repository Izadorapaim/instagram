import { createStore, combineReducers} from 'redux'
import reducer from './reducers/user'
import userReducer from './reducers/user'

const reducers = combineReducers({
    user: userReducer,
})

const storeConfig = () => {
    return createStore(reduceres)
}

export default storeConfig