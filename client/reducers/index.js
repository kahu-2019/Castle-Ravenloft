import { combineReducers } from "redux";
import characters from "./characters";
import characterOrder from "./characterOrder";
import powerCards from "./powerCards";
import sunTracker from './sunTracker'
import scrollTextView from './scrollTextView'

export default combineReducers({
  characters,
  characterOrder,
  sunTracker,
  scrollTextView,
  powerCards
});
