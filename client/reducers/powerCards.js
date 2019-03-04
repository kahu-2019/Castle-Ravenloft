const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_POWER_CARDS':
        return action.powerCards
        default:
        return state
    }
}

export default reducer