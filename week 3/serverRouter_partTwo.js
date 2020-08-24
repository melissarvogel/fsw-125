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

// Week 4 assignment

app.delete("/bounty", (req, req) => {
    const bountyid = req.params.id
    const bountyIndex = bounty.findIndex(bounty => bounty.id === bounty.id)
    bounty.splice(movieIndex, 1)
    res.send("Bounty Removed")
})

app.put("/bounty", (res, req) => {
    const bountyId = req.params.id
    const bountyIndex = bounty.findIndex(bounty => bounty.id === bounty.id)
    const updatedBounty = Object.assign(bounty[bountyIndex, req.body])
    res.send(updatedBounty)
})