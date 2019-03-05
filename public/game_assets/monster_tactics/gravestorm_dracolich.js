var blastOfLightning = {
    attack: 8,
    damage: 3,
    miss: 1
}

var bite = {
    attack: 8,
    damage: 2,
    movement: "moveArrow"
}

var burstOfLighting = {
    attack:8,
    damage:1
}

var charAc = 15

var movement = {
    x:0,
    Y:0
}

var movement1 = {
    x:0,
    Y:0
}

var movement2 = {
    x:0,
    y:0,
}


var dragonsBreathToken = true 

var isWithin3 = true

var isWithin1 = true 

var tileHave2Heroes = true

var heroesArr =  [{name:"karl the wizard", AC:15, id:1},{name:"sam the gimp", AC:16, id: 3}]

 function blastOfLighting(){
    var characters =[]
    for(i=0; i < heroesArr.length; i++){
        var diceRoll =  function diceRoll(){
            return Math.floor(Math.random()*20)
        }
    
    if(diceRoll + blastOfLightning.att > charAc){
        characters.push({
            damage :blastOfLightning.damage,
            id: heroesArr.id
        }) 
    }
    else if(diceRoll + blastOfLightning.att < charAC){
        characters.push({
            damage: blastOfLightning.miss,
            id: heroesArr.id
        })
    }
}
    return characters
}

function bite () {
    var characters =[]
    
        var diceRoll =  function diceRoll(){
            return Math.floor(Math.random()*20)
        }
    
    if(diceRoll + bite.att > charAc){
        characters.push({
            damage :bite.damage,
            id: heroesArr.id,
            movement: movement 
        }) 
    }
    

    return characters
}

function burstOfLightning () {
    var characters = []
    for(i=0; i < heroesArr.length; i++){
        var diceRoll =  function diceRoll(){
            return Math.floor(Math.random()*20)
        }
    
    if(diceRoll + blastOfLightning.att > charAc){
        characters.push({
            damage :blastOfLightning.damage,
            id: heroesArr.id,
            movement:movement1.movement
        }) 
    }
    else if(diceRoll + blastOfLightning.att < charAC){
        characters.push({
            movement:movement1.movement,
            id: heroesArr.id,
        })
    }
}
    return characters
}




if (dragonsBreath === true && isWithin1 === true && tileHave2Heroes === true ){
    
    return blastOfLightning()
 
    
}

else if (isWithin1 === true ) {
    
return bite()
}

else if (isWithin3 === true ){
    return burstOfLighting()
}

else{

}






