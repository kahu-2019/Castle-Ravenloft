import { combineReducers } from "redux";
import characters from "./characters";
import characterOrder from "./characterOrder";
import powerCards from "./powerCards";
import monsters from './monsters'

export default combineReducers({
  characters,
  characterOrder,
  powerCards,
  monsters
});
