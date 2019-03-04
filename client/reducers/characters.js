const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_ALL_CHARACTERS':
        return action.allCharacters
        default:
        return state
    }
}

export default reducer