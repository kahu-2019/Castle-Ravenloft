import {getAllCharacters as apiGetAllCharacters} from '../api/characters'


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