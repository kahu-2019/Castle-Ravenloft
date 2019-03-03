import { getAllCharacters as apiGetAllCharacters } from "../api/characters";
import { randomEncounter as apiGetRandomEncounter } from "../api/ecounter";

export function getAllCharacters() {
  return dispatch => {
    return apiGetAllCharacters().then(allCharacters => {
      console.log(allCharacters);
      dispatch(saveAllCharacters(allCharacters));
    });
  };
}

export function saveAllCharacters(allCharacters) {
  return {
    type: "SAVE_ALL_CHARACTERS",
    allCharacters
  };
}

export function getRandomEncounter() {
  return dispatch => {
    return apiGetRandomEncounter().then(randomEncounter => {
      // dispatch(saveRandomEncounter(randomEncounter));
      console.log("action", randomEncounter);
      return randomEncounter;
    });
  };
}

export function saveRandomEncounter(randomEncounter) {
  return dispatch => {
    type: "SAVE_RANDOM_ENCOUNTER", randomEncounter;
  };
}
