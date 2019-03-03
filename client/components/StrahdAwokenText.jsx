import React from 'react'

class StrahdAwokenText extends React.Component {
    constructor(props){
        super(props)
    this.handleClick = this.handleClick.bind(this)
    }
handleClick(e){
    console.log('click')
}
    render(){
        return(
<div className='textBox'>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>


<h1>Strahd has woken from his Nap-nap</h1>
<br/>
<br/>
<img src="./images/seal3.png" className='sealButton' onClick={this.handleClick}/>

</div>

        )
        
    }
}
export default StrahdAwokenText