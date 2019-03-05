import React from 'react'
import {Link} from 'react-router-dom'
class Home2 extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='home-main'>
             <div className='rain'>
                <div className = 'logo-div'>
                <img className='cr-logo' src='./images/crlogo.png'/>
                <Link to="/home"><div className='startbutton'>START</div></Link>
                </div>
                <img className='dnd-logo' src='./images/dndeda.png'/>
                </div>   
                
            </div>
        )
    }
}
export default Home2