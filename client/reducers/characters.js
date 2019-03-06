const initialState = []

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_ALL_CHARACTERS':
            return action.allCharacters

        case 'UPDATE_ONE_CHARACTER':
            return state.map(c => {
                if(c.id === action.character_id)  c.AC = c.AC + 1 ,c.HP = c.HP + 2 , c.SurgeValue = c.SurgeValue + 1
                 return c
            }) 

        default:
            return state
    }
}

export default reducer

// var x  = this.getCurrentCharacter()
//                 if(x){
//                 x.AC = x.AC + 1    
//             console.log(x)
//             this.setState({character1: x})
//             }