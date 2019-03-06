import {
  randomEncounter as apiGetRandomEncounter,
  getAllMonsters as apiAllMonsters
} from "../api/encounter";
import {
  getAllCharacters as apiGetAllCharacters,
  getCardsByCharacter as apiGetCardsByCharacter
} from "../api/characters";

import { randomTreasure as apiGetRandomTreasure } from "../api/treasure";

export function getAllMonsters() {
  return dispatch => {
    return apiAllMonsters().then(monsters => {
      dispatch(saveAllMonsters(monsters));
    });
  };
}

export function saveAllMonsters(monsters) {
  return {
    type: "SAVE_ALL_MONSTERS",
    monsters
  };
}

export function getRandomEncounter() {
  return dispatch => {
    return apiGetRandomEncounter().then(randomEncounter => {
      return randomEncounter;
    });
  };
}

export function saveRandomEncounter(randomEncounter) {
  return dispatch => {
    type: "SAVE_RANDOM_ENCOUNTER", randomEncounter;
  };
}

export function getRandomTreasure() {
  return dispatch => {
    return apiGetRandomTreasure().then(randomTreasure => {
      return randomTreasure;
    });
  };
}

export function saveRandomTreasure(randomTreasure) {
  return dispatch => {
    type: "SAVE_RANDOM_TREASURE", randomTreasure;
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
