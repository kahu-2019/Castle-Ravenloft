import {combineReducers} from 'redux'
import characters from './characters'
import characterOrder from './characterOrder'

export default combineReducers({
    characters,
    characterOrder
})
