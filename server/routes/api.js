const express = require('express')
const db = require('../db')

const router = express.Router()

router.use(express.json())

const standardError = {ok:false, message:"Something's not right"}

router.get('/allEncounters', (req, res) => {
    db.getAllEncounters().then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(standardError)
    })
})

router.get('randomEncounter', (req, res) => {
    db.getRandomEncounter().then(data => {
        res.json(data)
    })
    .catch(err => {
        res.json(standardError)
    })
})
module.exports = router