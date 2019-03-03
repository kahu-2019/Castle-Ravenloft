import {getAllCharacters as apiGetAllCharacters, getCardsByCharacter as apiGetCardsByCharacter} from '../api/characters'


export function getAllCharacters() {
    return dispatch => {
        return apiGetAllCharacters()
        .then(allCharacters => {
         dispatch(saveAllCharacters(allCharacters))
      })
    }
  }

  export function saveAllCharacters(allCharacters){
    return {
        type: 'SAVE_ALL_CHARACTERS',
        allCharacters
    }
}

export function addCharacterOrder(character){
    return {
      type:'ADD_CHARACTER_ORDER',
      character
    }
}

export function getCardsByCharacter(id){
  return dispatch => {
    return apiGetCardsByCharacter(id)
    .then(powerCards => {
      dispatch(savePowerCards(powerCards))
      return powerCards
    })
  }
}

export function savePowerCards(powerCards){
  return {
    type: 'SAVE_POWER_CARDS',
    powerCards
  }
}