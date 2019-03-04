import React from 'react'

class Home2 extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='home-main'>
                <div className = 'logo-div'>
                <img className='cr-logo' src='./images/crlogo.png'/>
                <p className='startbutton'>START</p>
                </div>
                <div className='rain'>
                <img className='dnd-logo' src='./images/dndlogo.png'/>
                <img className='eda-logo' src='./images/edagames.png'/>
                </div>   
                
            </div>
        )
    }
}
export default Home2