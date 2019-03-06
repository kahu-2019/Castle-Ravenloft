import React from 'react'

class PowerCardsBoardView extends React.Component{
    constructor(props){
        super(props)
    }

render(){
    // console.log(this.props.player[0].cards.atWill)
    //console.log(this.state)
    return(
        this.props.player[0].cards.atWill.map((item,i)=>{
            return(
                <div className="pcbvi">
                    <p>{item.type}</p>
                    <p>{item.title}</p>
                    <p>AC:{item.attack}</p>
                    <p>DMG:{item.damage}</p>
                </div>

            )
        })
    )
}

}

export default PowerCardsBoardView
