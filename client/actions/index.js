import {getAllCharacters as apiGetAllCharacters} from '../api/characters'


export function getAllCharacters() {
    return dispatch => {
        return apiGetAllCharacters()
        .then(allCharacters => {
            console.log(allCharacters)
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

  export function increaseSunTracker(){
    return {
      type: 'ADD_SUNTRACKER',
      sunTracker: 1
    }
  }

  export function scrollTextViewChange(scrollTextView){
    return {
      type: 'SCROLL_TEXT_VIEW',
      scrollTextView
    }
  }