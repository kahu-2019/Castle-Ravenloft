const initialstate = 1
//

const reducer = (state = initialstate, action) =>{
    switch(action.type){
        case 'ADD_SUNTRACKER':
        return action.sunTracker + initialstate
        default:
        return state
    }
}
export default reducer