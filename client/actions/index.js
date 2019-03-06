import { randomEncounter as apiGetRandomEncounter } from "../api/ecounter";
import {
  getAllCharacters as apiGetAllCharacters,
  getCardsByCharacter as apiGetCardsByCharacter
} from "../api/characters";

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

export function getAllCharacters() {
  return dispatch => {
    return apiGetAllCharacters().then(allCharacters => {
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

export function addCharacterOrder(character) {
  return {
    type: "ADD_CHARACTER_ORDER",
    character
  };
}

export function getCardsByCharacter(id) {
  return dispatch => {
    return apiGetCardsByCharacter(id).then(powerCards => {
      dispatch(savePowerCards(powerCards));
      return powerCards;
    });
  };
}

export function savePowerCards(powerCards) {
  return {
    type: "SAVE_POWER_CARDS",
    powerCards
  };
}

export function addPowerCards(id, powerCards) {
  return {
    type: "ADD_POWER_CARDS",
    id,
    powerCards
  };
}

export function updateLevel(character_id) {
  return {
    type: "UPDATE_ONE_CHARACTER",
    character_id,

  };
}
