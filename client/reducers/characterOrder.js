const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CHARACTER_ORDER':
        return [...state,action.character]
        default:
        return state
    }
}

export default reducer