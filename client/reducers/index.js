import {combineReducers} from 'redux'
import characters from './characters'
import sunTracker from './sunTracker'
import scrollTextView from './scrollTextView'
export default combineReducers({
    characters,
    sunTracker,
    scrollTextView

})
