const express= require("express")
const app = express()
const uuid = require("uuid/v4")

app.use(express.json())

app.get("/bounty", (req, res) => {
    res.send(bounty)
})

app.post("/bounty", (req, res) => {
    const newBounty = req.body
    newBounty.id = uuid()
    bounty.push(newBounty)
    res.send("${newBounty.firstName} has been added to Bounty List.")
})

module.require = "\serverData.js"