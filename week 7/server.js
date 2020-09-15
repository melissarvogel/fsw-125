
import React, {useState} from 'react'
import { send } from 'process'
const express= require("express")
const app = express()
const uuid = require("uuid/v4")

require("C:\Users\melis\dev\bryan-university\fsw-125\week 7\data.js")

app.use(express.json())

app.get("/Crew", (req, res) => {
    res.send(bounty)
    .then(res => (res.send))
    .catch(err => (err))
})

app.post("/Crew", (req, res) => {
    const newMember = req.body
    newMember.id = uuid()
    crewMember.push(newMember)
    res.send("${newMember.name} has been added to Bounty List.")
        .then(res => (res.send))
        .catch(err => (err))
    
})

module.require = "C:\Users\melis\dev\bryan-university\fsw-125\week 7\data.js"

app.delete("/Crew", (req, req) => {
    const crewMemberid = req.params.id
    const crewMemberIndex = crewMember.findIndex(crewMember => crewMember.id === crewMember.id)
    crewMember.splice(movieIndex, 1)
    res.send("Crew Member Removed")
    .then(res => (res.send))
        .catch(err => (err))
})

app.put("/Crew", (res, req) => {
    const crewMemberId = req.params.id
    const crewMemberIndex = crewMember.findIndex(crewMember => crewMember.id === crewMember.id)
    const updatedcrewMember = Object.assign(crewMember[crewMemberIndex, req.body])
    res.send(updatedcrewMember)
    .then(res => (res.send))
        .catch(err => (err))
})