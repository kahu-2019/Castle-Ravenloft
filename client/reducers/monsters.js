const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_ALL_MONSTERS':
        return action.monsters
        default:
        return state
    }
}

export default reducer