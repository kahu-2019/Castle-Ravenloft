const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_ALL_CHARACTERS':
        return action.allCharacters
        case 'ADD_POWER_CARDS':
        return updateCharacter(action.id,action.powerCards,state)
        default:
        return state
    }
}

export default reducer

function updateCharacter(id,cards,characters){
    var updatedCharacters = characters.map(character => {
        if(character.id == id){
            character.cards = cards
            return character
        } else{
            return character
        }
    })
    return updatedCharacters
}