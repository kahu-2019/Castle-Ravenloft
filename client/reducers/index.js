import { combineReducers } from "redux";
import characters from "./characters";
import characterOrder from "./characterOrder";
import powerCards from "./powerCards";

export default combineReducers({
  characters,
  characterOrder,
  powerCards
});
