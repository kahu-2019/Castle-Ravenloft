const express = require('express')
const encounters = require('../db/encounter')
const character = require('../db/character')
const randomMonster = require('../db/randomMonster')

const router = express.Router()

router.use(express.json())

const standardError = {ok:false, message:"Something's not right"}

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

router.get('/randomMonster', (req, res) => {
    randomMonster.getRandomMonster().then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(standardError)
    })
})

module.exports = router