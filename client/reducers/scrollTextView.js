const initialstate = 'none'

const reducer = (state = initialstate, action)=>{
    switch(action.type){
        case 'SCROLL_TEXT_VIEW':
        return action.scrollTextView
        default:
        return state
    }
}
export default reducer