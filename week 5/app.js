import React, { useState, useEffect} from React
import Axios from 'Axios'
import Bounty from 'C:\Users\melis\dev\bryan-university\fsw-125\week 5\bounties.js'
import POSTbounty from "C:\Users\melis\dev\bryan-university\fsw-125\week 5\POSTbounty.js"

//GET
export default function getBounty(){
    const [bounties, setBounties] = useState([])
    Axios.get("/bounty")
    .then(res => console.log(res))
    .then(res => setBounties(res.data))
    .cathc(err => console.log(err))}
    
    
    
//POST
function addBounty(newBounty){
    Axios.post("/bounty", newBounty)
    .then(res =>{
        setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))
}

//DELETE

function deleteBounty(bountyid){
    Axios.delete("/bounty", { bountyid})
    .then(res =>{
        setBounties(prevBounties => prevBounties.filter(bounty=> bounty.id !== bountyId))
    })
    .catch(err=> console.log(err))
}

//PUT
function editBounty(updates, bountyId){
    Axios.put("/bounty", {bountyId}, updates)
    .then(res => console.log(res))
    .catch(err => console.log(err))
}


    useEffect(()=> {
        getBounty()
    }, [])


    
    return(
        <div>
            <>
            <POSTbounty 
            submit={addBounty}
            btntext= "Add Movie"/>
            {bounties.map(bounty => <Bounty {...bounty} key ={bounty.name}/>) } 
            </>
            {
                bounties.map(bounty =>
                   <Bounty
                   {...bounty}
                   key={bounty.firstname}
                   deleteBounty={deleteBounty}
                   editBounty={editBounty} /> )
            }
        </div>
    )





