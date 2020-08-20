const express = require('express')
const bountyRouter = express.Router()
const uuid = require("uuid/v4")

const bountys = [
    {
        firstName: "C-3P0",
        lastName: "N/A",
        living: true,
        bountyAmt: "500",
        type: "N/A",
        id: uuid()
    }, {
        firstName: "Darth",
        lastName: "Vader",
        living: true,
        bountyAmt: "1000",
        type: "Sith",
        id: uuid()
    }, {
        firstName: "Annikan",
        lastName: "Skywalker",
        living: true,
        bountyAmt: "1000",
        type: "Jedi",
        id: uuid()
    }
]
