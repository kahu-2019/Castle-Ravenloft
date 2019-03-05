//Test data
var heroes = [{id: 1, name:'Karl', AC:20,HP:10,monsters:2},{id: 2,name:'Sam',AC:15,HP:10,monsters:1},{id: 3,name:'Miju',AC:10,HP:8,monsters:3},{id:4,name:'James',AC:5,HP:30,monsters:0}]

var tileAdjacent = false
var squareAdjacent = false

var strahdsCrypt = {
    x:0,
    y:0
}

var strahd = { id: 9, Name: 'Count Strahd Von Zaraovich', Race: 'Vampire', AC:19, HP: 12 }

var mistToken = true

var diceRoll = 10

// Strahd attack stats
var bite = {
    att: 8,
    dmg: 2,
    heal: heal()
}

function heal(){
    if(strahd.HP < 12){
        return strahd.HP ++
    }
}

var magicBallOfFire = {
    att:8,
    dmg:2,
    miss:1
}

//Who has the highest HP
var highestHpCharArr = heroes.sort((charA, charB)=>{return charB.HP - charA.HP});
var highestHpChar = highestHpCharArr[0]

//Who has the lowest monster num
var lowestMonsterCharArr = heroes.sort((charA, charB)=>{return charA.monsters - charB.monsters});
var lowestMonsterChar = lowestMonsterCharArr[0]

//if the char with the highest hp is tileAdjacent
var tileAdjacentHighestHp = true

console.log(highestHpChar)

//also if square adjacent, bite em

//If strahds hp is low and he has a misttoken, he farts back to his crypt
if(strahd.HP <= 5 && mistToken){
    console.log('he farts away')
    mistToken = false
    return {
        movement:strahdsCrypt
    }
//If he close to character, bite
} else if(squareAdjacent && diceRoll + bite.att > highestHpChar.AC){
    console.log('oh no, he bit the closest character for a damage of ', bite.dmg)
    return {
        // dont move
        movement:{
            x:0,
            y:0
        },
        character:{
            id:highestHpChar.id,
            damage:bite.dmg,
            heal:bite.heal
        }
    }
//If he close to highest hp character, bite
}else if(tileAdjacentHighestHp && diceRoll + bite.att > highestHpChar.AC){
    console.log('strahd is close now he bite and heal for ', bite.dmg)
    return {
        //move adjacent
        movement:{
            x:0,
            y:0
        },
        character:{
            id:highestHpChar.id,
            damage:bite.dmg,
            heal:bite.heal
        }
    }
//if bite missed, just move
}else if(tileAdjacentHighestHp && diceRoll + bite.att <= highestHpChar.AC){
    console.log('strahd missed, but he be close now')
    return {
        //move adjacent
        movement:{
            x:0,
            y:0
        }
    }
//if tile adjacent, magic ball of fire, everyone on that tile
}else if(tileAdjacent){
    var characters = []
    for(var i = 0; i < heroes.length; i++){
        diceRoll = diceRoll()
        function diceRoll(){
            return Math.floor(Math.random()*20) + 1
        }
        console.log('dice roll:',diceRoll)
        //if hit, burn them 2 dmg
        if(diceRoll + magicBallOfFire.att > heroes[i].AC){
            console.log('Oh no!', heroes[i].name + ' got hurt with ' + magicBallOfFire.dmg + ' damage!')
            characters.push({
                id:heroes[i].id,
                damage:magicBallOfFire.dmg,
            })
        //if miss, burn them 1 dmg
        } else if(diceRoll + magicBallOfFire.att <= heroes[i].AC){
            console.log('Oh no!', heroes[i].name + ' got hurt with ' + magicBallOfFire.miss + ' damage!')
            characters.push({
                id:heroes[i].id,
                damage:magicBallOfFire.miss
            })
        } 
    }
    console.log('he moves and character data:',characters)
    return {
        //Move to nearest character
        movement:{
            x:0,
            y:0
        },
        characters
    }
}else if(strahd.HP <= 5 && !mistToken){
    console.log('Strahd is weak! But he spawns a monster for ', lowestMonsterChar.name)
    lowestMonsterChar.monsters ++;
    return {
        //Dont move
        movement:{
            x:0,
            y:0
        }
    }
//else if, move
}else if(!tileAdjacent){
    console.log('he comin for ya')
    return {
        //move 2 tiles
        movement:{
            x:0,
            y:0
        }
    }
}