import React, {useState} from 'react'
const express= require("express")
const app = express()
const uuid = require("uuid/v4")


[{
    CrewMembers: [{
         "name": "Jean-Luc Picard",
         "rank": "Captian",
         "onDuty": true,
         "interests": ["archeology", "tea"],
         "age": 45,
         "uuid": uuid()
    }, {
        "name": "William Riker",
        "rank": "First Officer",
        "onDuty": true,
        "interests": ["saxophone", "women"],
        "age": 30,
        "uuid": uuid()
    }, {
         "name": "Worf",
         "rank": "Lietenant Commander",
         "onDuty": true,
         "interests": ["Klingon Lore", "Tai Chi"],
         "age": 30,
         "uuid": uuid()
    } , {
        "name": "Data",
        "rank": "Lietenant Commander",
        "onDuty": true,
        "interests": ["Human Condition", "Cats"],
        "age": "Uknown",
        "uuid": uuid()
    }
 ]
 }]