import {combineReducers} from 'redux'
import characters from './characters'
import sunTracker from './sunTracker'

export default combineReducers({
    characters,
    sunTracker
})
