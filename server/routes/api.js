const express = require('express')

const encounters = require('../db/encounter')
const character = require('../db/character')
const randomMonster = require('../db/randomMonster')
const monster = require('../db/monsters')
const treasure = require('../db/treasure')
const adventures = require('../db/adventures')

const router = express.Router()

router.use(express.json())

const standardError = { ok: false, message: "Something's not right" }

// GET /api/v1/allEncounters returns all encounter cards
router.get('/allEncounters', (req, res) => {
    encounters.getAllEncounters().then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(standardError)
        })
})

// GET /api/v1/randomEncounter returns a random encounter card
router.get('/randomEncounter', (req, res) => {
    encounters.getRandomEncounter().then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(standardError)
        })
})

// GET /api/v1/allCharacters returns every character
router.get('/allCharacters', (req, res) => {
    character.getAllCharacters().then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(standardError)
        })
})

// GET /api/v1/characterCards/:id returns all character cards for that character by id
router.get('/characterCards/:id', (req, res) => {
    character.getCardsByCharacter(req.params.id).then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(standardError)
        })
})

// GET /api/v1/randomMonster returns a random monster card
router.get('/randomMonster', (req, res) => {
    randomMonster.getRandomMonster().then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(standardError)
        })
})

// GET /api/v1/getAllMonsters returns all monsters
router.get('/getAllMonsters', (req, res) => {
    monster.getAllMonsters().then(data => {
        res.json(data)
    })
        .catch(err => {
            console.log(err)
            res.json(standardError)
        })
})

// GET /api/v1/getMonsterAttacks/:id returns all attacks for that monster
router.get('/getMonsterAttacks/:id', (req, res) => {
    monster.getAttacksByMonster(req.params.id).then(data => {
        res.json(data)
    })
        .catch(err => {
            console.log(err)
            res.json(standardError)
        })
})

// GET /api/v1/allTreasures returns all treasure cards
router.get('/allTreasure', (req, res) => {
    treasure.getAllTreasure().then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(standardError)
        })
})

// GET /api/v1/randomTreasure returns a random treasure card
router.get('/randomTreasure', (req, res) => {
    treasure.getRandomTreasure().then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(standardError)
        })
})

// GET /api/v1/allAdventures returns all adventures
router.get('/allAdventures', (req, res) => {
    adventures.getAllAdv().then(data => {
        res.json(data)
    })
        .catch(err => {
            res.json(standardError)
        })
})

// GET /api/v1/allAdventures/:id returns all adventure data for that id
router.get('/allAdventures/:id', (req, res) => {
    adventures.getAdvById(req.params.id).then(data => {
        res.json(data)
    })
        .catch(err => {
            console.log(err)
            res.json(standardError)
        })
})
module.exports = router